const DEFAULT_GROQ_MODEL = "llama-3.3-70b-versatile";

const trimForModel = (value, maxLen) =>
  String(value || "")
    .trim()
    .slice(0, maxLen);

const normalizeQuestionId = (value) =>
  String(value || "")
    .trim()
    .replace(/[^\w.-]/g, "")
    .slice(0, 120);

const stripMarkdownCodeFence = (value) => {
  const text = String(value || "").trim();
  if (!text) return "";
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  return (fenced ? fenced[1] : text).trim();
};

const decodeJsonLikeString = (value) =>
  String(value || "")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\")
    .replace(/\\n/g, "\n")
    .trim();

const repairLatexEscapes = (value) =>
  String(value || "")
    .replace(/\f\s*rac/g, "\\frac")
    .replace(/(^|[^\\A-Za-z])rac(?=\s*\{)/g, "$1\\frac")
    .replace(/\t\s*o\b/g, "\\to")
    .replace(/\t\s*heta\b/g, "\\theta")
    .replace(/\t\s*imes\b/g, "\\times");

const extractGroqFields = (rawContent) => {
  const text = stripMarkdownCodeFence(rawContent);
  if (!text) return null;

  const extractField = (fieldName) => {
    const pattern = new RegExp(
      `"${fieldName}"\\s*:\\s*"([\\s\\S]*?)"(?=\\s*,\\s*"\\w+"\\s*:|\\s*})`,
      "i"
    );
    const match = text.match(pattern);
    return match ? decodeJsonLikeString(match[1]) : "";
  };

  const stepsMatch = text.match(/"steps"\s*:\s*\[([\s\S]*?)\](?=\s*,\s*"\w+"\s*:|\s*})/i);
  const steps = stepsMatch
    ? Array.from(stepsMatch[1].matchAll(/"([\s\S]*?)"/g))
        .map((match) => decodeJsonLikeString(match[1]))
        .filter(Boolean)
    : [];

  const extracted = {
    summary: extractField("summary") || extractField("intro"),
    steps,
    finalAnswer: extractField("finalAnswer") || extractField("answer"),
    tip: extractField("tip") || extractField("commonMistake"),
  };

  return extracted.summary || extracted.steps.length || extracted.finalAnswer || extracted.tip ? extracted : null;
};

const parseGroqJson = (rawContent) => {
  const text = stripMarkdownCodeFence(rawContent);
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");
    if (start < 0 || end <= start) return null;
    try {
      return JSON.parse(text.slice(start, end + 1));
    } catch {
      return extractGroqFields(text);
    }
  }
};

const normalizeTutorVoice = (value) => {
  let text = String(value || "").trim();
  if (!text) return "";

  [
    [/\bthe student's answer\b/gi, "your answer"],
    [/\bthe student answer\b/gi, "your answer"],
    [/\bstudent's answer\b/gi, "your answer"],
    [/\bthe learner's answer\b/gi, "your answer"],
    [/\blearner's answer\b/gi, "your answer"],
    [/\btheir answer\b/gi, "your answer"],
    [/\bthe student's work\b/gi, "your work"],
    [/\bthe learner's work\b/gi, "your work"],
    [/\bthe student\b/gi, "you"],
    [/\bthe learner\b/gi, "you"],
    [/\bthe user\b/gi, "you"],
    [/\byou is\b/gi, "you are"],
    [/\byou was\b/gi, "you were"],
    [/\byou has\b/gi, "you have"],
  ].forEach(([pattern, replacement]) => {
    text = text.replace(pattern, replacement);
  });

  return text;
};

const buildSolutionText = (modelPayload) => {
  const data = modelPayload && typeof modelPayload === "object" ? modelPayload : {};
  const summary = normalizeTutorVoice(repairLatexEscapes(trimForModel(data.summary || data.intro || "", 400)));
  const steps = (Array.isArray(data.steps) ? data.steps : [])
    .map((step) => normalizeTutorVoice(repairLatexEscapes(trimForModel(step, 400))))
    .filter(Boolean)
    .slice(0, 8);
  const finalAnswer = normalizeTutorVoice(repairLatexEscapes(trimForModel(data.finalAnswer || data.answer || "", 250)));
  const tip = normalizeTutorVoice(repairLatexEscapes(trimForModel(data.tip || data.commonMistake || "", 300)));

  const lines = [];
  if (summary) lines.push(summary);
  steps.forEach((step, idx) => lines.push(`${idx + 1}) ${step}`));
  if (finalAnswer) lines.push(`Final answer: ${finalAnswer}`);
  if (tip) lines.push(`Tip: ${tip}`);

  return {
    steps,
    finalAnswer,
    summary,
    tip,
    text: lines.join("\n").trim(),
  };
};

const readBody = (req) => {
  if (!req.body) return {};
  if (typeof req.body === "object") return req.body;
  try {
    return JSON.parse(String(req.body || "{}"));
  } catch {
    return {};
  }
};

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed");
    return;
  }

  try {
    const body = readBody(req);
    const questionId = normalizeQuestionId(body.questionId);
    const prompt = trimForModel(body.prompt, 2500);
    const correctAnswer = trimForModel(body.correctAnswer, 1200);
    const userAnswer = trimForModel(body.userAnswer, 1200);
    const apiKey = String(process.env.GROQ_API_KEY || "").trim();
    const model = String(process.env.GROQ_MODEL || DEFAULT_GROQ_MODEL).trim() || DEFAULT_GROQ_MODEL;

    if (!questionId || questionId.length < 3) {
      res.status(400).json({ ok: false, error: "Missing or invalid questionId." });
      return;
    }
    if (!prompt) {
      res.status(400).json({ ok: false, error: "Missing question prompt." });
      return;
    }
    if (!apiKey) {
      res.status(503).json({ ok: false, error: "AI solver is not configured." });
      return;
    }

    const systemPrompt =
      "You are a precise calculus tutor. Return valid JSON only with keys: summary, steps, finalAnswer, tip. " +
      "The steps field must be a JSON array with 2 to 5 short, concrete correction steps. Never leave steps empty. " +
      "Write normal English sentences. Wrap every mathematical expression with inline LaTeX delimiters like \\\\(x = 2\\\\). " +
      "Do not place ordinary prose inside math delimiters. Keep spacing natural and readable. " +
      "Use only simple inline TeX. Do not use display math, align environments, equation environments, \\left, \\right, or table syntax. " +
      "Address the learner directly in second person. Say 'your answer' and 'you', never 'the student' or 'the learner'. " +
      "Do not wrap the JSON in markdown code fences.";
    const userPrompt = [
      "Question:",
      prompt,
      "",
      "Correct answer:",
      correctAnswer,
      "",
      "Student answer:",
      userAnswer,
      "",
      "Give step-by-step correction.",
      "Even if the problem is simple, include at least 2 explicit steps in the steps array.",
      "Use concise prose and wrap any math with inline delimiters only.",
      "Example: Substitute \\\\(x = 2\\\\) into \\\\(x + 3\\\\) to get \\\\(5\\\\).",
    ].join("\n");

    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        max_tokens: 600,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!groqResponse.ok) {
      const errorBody = await groqResponse.text();
      throw new Error(`Groq request failed (${groqResponse.status}): ${errorBody.slice(0, 300)}`);
    }

    const payload = await groqResponse.json();
    const content = trimForModel(payload?.choices?.[0]?.message?.content || "", 6000);
    if (!content) throw new Error("Groq returned an empty response.");

    const parsed = parseGroqJson(content);
    const normalized = parsed ? buildSolutionText(parsed) : buildSolutionText({ summary: content });
    const solution = normalized.text || content;

    res.status(200).json({
      ok: true,
      cached: false,
      questionId,
      solution,
      summary: normalized.summary,
      steps: normalized.steps,
      finalAnswer: normalized.finalAnswer,
      tip: normalized.tip,
      model,
    });
  } catch (err) {
    console.error("getStepSolution error", err);
    res.status(500).json({ ok: false, error: "Unable to generate solution." });
  }
};
