(function () {
  const LOCAL_CACHE_KEY = "fc_ai_solution_cache_v1";
  const MAX_LOCAL_CACHE = 200;

  const safeParse = (raw, fallback) => {
    try {
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : fallback;
    } catch {
      return fallback;
    }
  };

  const readLocalCache = () => {
    try {
      return safeParse(localStorage.getItem(LOCAL_CACHE_KEY), {});
    } catch {
      return {};
    }
  };

  const writeLocalCache = (cache) => {
    try {
      localStorage.setItem(LOCAL_CACHE_KEY, JSON.stringify(cache));
    } catch {
      // ignore
    }
  };

  const parseMaybeJson = (value) => {
    const raw = String(value || "").trim();
    if (!raw) return null;
    const fromBlock = raw.match(/```(?:json)?\s*([\s\S]*?)```/i);
    const candidate = fromBlock ? fromBlock[1].trim() : raw;
    const parseDirect = (text) => {
      try {
        const parsed = JSON.parse(text);
        return parsed && typeof parsed === "object" ? parsed : null;
      } catch {
        return null;
      }
    };
    const direct = parseDirect(candidate);
    if (direct) return direct;
    const first = candidate.indexOf("{");
    const last = candidate.lastIndexOf("}");
    if (first < 0 || last <= first) return null;
    return parseDirect(candidate.slice(first, last + 1));
  };

  const buildTextFromObject = (obj) => {
    if (!obj || typeof obj !== "object") return "";
    const summary = String(obj.summary || obj.intro || "").trim();
    const steps = Array.isArray(obj.steps)
      ? obj.steps.map((step) => String(step || "").trim()).filter(Boolean).slice(0, 10)
      : [];
    const finalAnswer = String(obj.finalAnswer || obj.answer || "").trim();
    const tip = String(obj.tip || obj.commonMistake || "").trim();
    const lines = [];
    if (summary) lines.push(summary);
    steps.forEach((step, idx) => lines.push(`${idx + 1}) ${step}`));
    if (finalAnswer) lines.push(`Final answer: ${finalAnswer}`);
    if (tip) lines.push(`Tip: ${tip}`);
    return lines.join("\n").trim();
  };

  const normalizeEscapedMathText = (value) => {
    let text = String(value || "");
    if (!text) return "";
    text = text.replace(/\\n/g, "\n");
    for (let i = 0; i < 4; i += 1) {
      const next = text.replace(/\\\\(?=[()[\]A-Za-z])/g, "\\");
      if (next === text) break;
      text = next;
    }
    return text.trim();
  };

  const normalizeSolution = (payload) => {
    const rawSolution = normalizeEscapedMathText(payload?.solution || "");
    const parsedFromSolution = parseMaybeJson(rawSolution);
    const looksJsonLike = /^[\s`]*\{/.test(rawSolution);
    const parsedText = buildTextFromObject(parsedFromSolution);
    const solution = parsedText || (looksJsonLike ? "" : rawSolution);
    const finalAnswer = normalizeEscapedMathText(payload?.finalAnswer || "");
    const tip = normalizeEscapedMathText(payload?.tip || "");
    const sourceSteps = Array.isArray(payload?.steps)
      ? payload.steps
      : Array.isArray(parsedFromSolution?.steps)
      ? parsedFromSolution.steps
      : [];
    const steps = sourceSteps.map((step) => normalizeEscapedMathText(step || "")).filter(Boolean).slice(0, 10);

    const text = solution || [
      ...steps.map((step, idx) => `${idx + 1}) ${step}`),
      finalAnswer ? `Final answer: ${finalAnswer}` : "",
      tip ? `Tip: ${tip}` : "",
    ]
      .filter(Boolean)
      .join("\n")
      .trim() || "Check your arithmetic and signs, then try again step by step.";

    return {
      solution: text,
      steps,
      finalAnswer,
      tip,
    };
  };

  const getEndpoint = () => {
    const explicit = String(window.FC_AI_SOLVER_ENDPOINT || "").trim();
    if (explicit) return explicit;
    const projectId = String(window.FC_FIREBASE_CONFIG?.projectId || "full-calculus").trim();
    return `https://us-central1-${projectId}.cloudfunctions.net/getStepSolution`;
  };

  const getAuthHeaders = async () => {
    try {
      const user = window.FCAuth?.getRawUser?.();
      if (user && typeof user.getIdToken === "function") {
        const token = await user.getIdToken();
        if (token) return { Authorization: `Bearer ${token}` };
      }
    } catch {
      // ignore
    }
    return {};
  };

  const setCacheEntry = (questionId, value) => {
    const cache = readLocalCache();
    cache[questionId] = {
      ...normalizeSolution(value),
      cachedAt: Date.now(),
    };

    const keys = Object.keys(cache);
    if (keys.length > MAX_LOCAL_CACHE) {
      keys
        .sort((a, b) => Number(cache[a]?.cachedAt || 0) - Number(cache[b]?.cachedAt || 0))
        .slice(0, keys.length - MAX_LOCAL_CACHE)
        .forEach((key) => {
          delete cache[key];
        });
    }
    writeLocalCache(cache);
    return cache[questionId];
  };

  const getCacheEntry = (questionId) => {
    const cache = readLocalCache();
    const entry = cache[questionId];
    if (!entry) return null;
    return normalizeSolution(entry);
  };

  const getStepSolution = async ({ item, userAnswer = "", context = "lesson" } = {}) => {
    const questionId = String(item?.id || "").trim();
    const prompt = String(item?.prompt || "").trim();
    const correctAnswer = String(item?.answer?.value ?? "").trim();
    if (!questionId || !prompt) {
      throw new Error("Invalid question payload.");
    }

    const local = getCacheEntry(questionId);
    if (local?.solution) {
      return { ...local, cached: true, source: "local" };
    }

    const endpoint = getEndpoint();
    const headers = {
      "Content-Type": "application/json",
      ...(await getAuthHeaders()),
    };
    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        questionId,
        prompt,
        correctAnswer,
        userAnswer: String(userAnswer || "").slice(0, 1200),
        questionType: String(item?.type || ""),
        sectionId: String(item?.sectionId || ""),
        context: String(context || "lesson"),
      }),
    });

    let data = {};
    try {
      data = await response.json();
    } catch {
      data = {};
    }

    if (!response.ok || !data?.ok) {
      const message = String(data?.error || `HTTP ${response.status}`).trim();
      throw new Error(message || "AI solver request failed.");
    }

    const normalized = normalizeSolution(data);
    if (!normalized.solution) {
      throw new Error("AI solver returned an empty solution.");
    }

    const stored = setCacheEntry(questionId, normalized);
    return {
      ...stored,
      cached: !!data.cached,
      source: data.cached ? "remote-cache" : "groq",
    };
  };

  window.FCAI = {
    getStepSolution,
  };
})();
