const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { defineString } = require("firebase-functions/params");
const webpush = require("web-push");

admin.initializeApp();

const WEBPUSH_PUBLIC_KEY = defineString("WEBPUSH_PUBLIC_KEY");
const WEBPUSH_PRIVATE_KEY = defineString("WEBPUSH_PRIVATE_KEY");
const WEBPUSH_SUBJECT = defineString("WEBPUSH_SUBJECT");
const WEBPUSH_TIMEZONE = defineString("WEBPUSH_TIMEZONE");
const WEBPUSH_TEST_KEY = defineString("WEBPUSH_TEST_KEY");
const ADMIN_EMAILS_PARAM = defineString("ADMIN_EMAILS");
const GROQ_API_KEY = defineString("GROQ_API_KEY");
const GROQ_MODEL = defineString("GROQ_MODEL");
const DEFAULT_VAPID_SUBJECT = "mailto:juliuskalume906@gmail.com";
const DEFAULT_TIMEZONE = "Etc/UTC";
const DEFAULT_GROQ_MODEL = "llama-3.3-70b-versatile";
const AI_SOLUTIONS_COLLECTION = "ai_step_solutions";
const QUESTION_OVERRIDES_COLLECTION = "question_overrides";

const getRuntimeConfig = () => {
  const publicKey = String(WEBPUSH_PUBLIC_KEY.value() || process.env.WEBPUSH_PUBLIC_KEY || "").trim();
  const privateKey = String(WEBPUSH_PRIVATE_KEY.value() || process.env.WEBPUSH_PRIVATE_KEY || "").trim();
  const subject =
    String(WEBPUSH_SUBJECT.value() || process.env.WEBPUSH_SUBJECT || DEFAULT_VAPID_SUBJECT).trim() ||
    DEFAULT_VAPID_SUBJECT;
  const timeZone =
    String(WEBPUSH_TIMEZONE.value() || process.env.WEBPUSH_TIMEZONE || DEFAULT_TIMEZONE).trim() ||
    DEFAULT_TIMEZONE;
  const testKey = String(WEBPUSH_TEST_KEY.value() || process.env.WEBPUSH_TEST_KEY || "").trim();
  const adminEmails = String(ADMIN_EMAILS_PARAM.value() || process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
  const groqApiKey = String(GROQ_API_KEY.value() || process.env.GROQ_API_KEY || "").trim();
  const groqModel =
    String(GROQ_MODEL.value() || process.env.GROQ_MODEL || DEFAULT_GROQ_MODEL).trim() || DEFAULT_GROQ_MODEL;
  return { publicKey, privateKey, subject, timeZone, testKey, adminEmails, groqApiKey, groqModel };
};

let vapidSignature = "";
const ensureVapidDetails = (runtimeConfig = getRuntimeConfig()) => {
  if (!runtimeConfig.publicKey || !runtimeConfig.privateKey) return false;
  const signature = `${runtimeConfig.subject}|${runtimeConfig.publicKey}|${runtimeConfig.privateKey}`;
  if (vapidSignature !== signature) {
    webpush.setVapidDetails(
      runtimeConfig.subject || DEFAULT_VAPID_SUBJECT,
      runtimeConfig.publicKey,
      runtimeConfig.privateKey
    );
    vapidSignature = signature;
  }
  return true;
};

const LEAGUES = [
  { id: "bronze", name: "Bronze League" },
  { id: "silver", name: "Silver League" },
  { id: "gold", name: "Gold League" },
  { id: "sapphire", name: "Sapphire League" },
  { id: "ruby", name: "Ruby League" },
  { id: "emerald", name: "Emerald League" },
  { id: "amethyst", name: "Amethyst League" },
  { id: "master", name: "Master League" },
  { id: "champion", name: "Champion League" },
  { id: "obsidian", name: "Obsidian League" },
];

const getWeekKey = (date = new Date()) => {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, "0")}`;
};

const COLLECTION = "push_subscriptions";
const FCM_COLLECTION = "fcm_tokens";

const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

const sendFcmBatch = async (items, payload) => {
  if (!items.length) return;
  const message = {
    tokens: items.map((item) => item.token),
    notification: {
      title: payload.title,
      body: payload.body,
    },
    data: {
      url: payload.url || "path.html",
    },
    android: {
      priority: "high",
    },
  };

  const response = await admin.messaging().sendEachForMulticast(message);
  const deletions = [];
  response.responses.forEach((res, idx) => {
    if (!res.success) {
      const code = res.error?.code || "";
      if (code === "messaging/registration-token-not-registered" || code === "messaging/invalid-registration-token") {
        deletions.push(items[idx].ref);
      }
    }
  });

  if (deletions.length) {
    const batch = admin.firestore().batch();
    deletions.forEach((ref) => batch.delete(ref));
    await batch.commit();
  }
};


const getAuthToken = (req) => {
  const header = String(req.headers.authorization || "");
  if (header.startsWith("Bearer ")) return header.slice(7);
  return "";
};

const verifyAdminRequest = async (req) => {
  const token = getAuthToken(req);
  if (!token) return { ok: false, code: 401, message: "Missing auth token" };
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    const { adminEmails } = getRuntimeConfig();
    const email = String(decoded.email || "").toLowerCase();
    if (!email || !adminEmails.includes(email)) {
      return { ok: false, code: 403, message: "Not authorized" };
    }
    return { ok: true, user: decoded };
  } catch (err) {
    return { ok: false, code: 401, message: "Invalid auth token" };
  }
};

const verifyUserRequest = async (req) => {
  const token = getAuthToken(req);
  if (!token) return { ok: false, code: 401, message: "Missing auth token" };
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    return { ok: true, user: decoded };
  } catch (err) {
    return { ok: false, code: 401, message: "Invalid auth token" };
  }
};

const normalizeQuestionId = (value) =>
  String(value || "")
    .trim()
    .replace(/[^\w.-]/g, "")
    .slice(0, 120);

const trimForModel = (value, maxLen) =>
  String(value || "")
    .trim()
    .slice(0, maxLen);

const parseGroqJson = (rawContent) => {
  const text = String(rawContent || "").trim();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch (err) {
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");
    if (start < 0 || end <= start) return null;
    try {
      return JSON.parse(text.slice(start, end + 1));
    } catch (innerErr) {
      return null;
    }
  }
};

const buildSolutionText = (modelPayload) => {
  const data = modelPayload && typeof modelPayload === "object" ? modelPayload : {};
  const summary = trimForModel(data.summary || data.intro || "", 400);
  const stepsRaw = Array.isArray(data.steps) ? data.steps : [];
  const steps = stepsRaw
    .map((step) => trimForModel(step, 400))
    .filter(Boolean)
    .slice(0, 8);
  const finalAnswer = trimForModel(data.finalAnswer || data.answer || "", 250);
  const tip = trimForModel(data.tip || data.commonMistake || "", 300);

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

const normalizeStoredSolution = (record) => {
  const data = record && typeof record === "object" ? record : {};
  const maybeParsed = parseGroqJson(data.solution || data.raw || "");
  const parsedNormalized = maybeParsed ? buildSolutionText(maybeParsed) : null;
  const fromFields = buildSolutionText({
    summary: data.summary || "",
    steps: Array.isArray(data.steps) ? data.steps : [],
    finalAnswer: data.finalAnswer || "",
    tip: data.tip || "",
  });

  const text =
    (parsedNormalized && parsedNormalized.text) ||
    trimForModel(data.solution || "", 8000) ||
    fromFields.text ||
    "";
  const steps = (parsedNormalized && parsedNormalized.steps?.length ? parsedNormalized.steps : fromFields.steps) || [];
  const finalAnswer =
    (parsedNormalized && parsedNormalized.finalAnswer) ||
    fromFields.finalAnswer ||
    trimForModel(data.finalAnswer || "", 250);
  const tip = (parsedNormalized && parsedNormalized.tip) || fromFields.tip || trimForModel(data.tip || "", 300);
  const summary =
    (parsedNormalized && parsedNormalized.summary) ||
    fromFields.summary ||
    trimForModel(data.summary || "", 400);

  return {
    solution: text,
    steps,
    finalAnswer,
    tip,
    summary,
  };
};

const requestGroqSolution = async ({ prompt, correctAnswer, userAnswer, runtimeConfig }) => {
  const apiKey = String(runtimeConfig?.groqApiKey || "").trim();
  if (!apiKey) {
    throw new Error("GROQ_API_KEY is not configured.");
  }
  const model = String(runtimeConfig?.groqModel || DEFAULT_GROQ_MODEL).trim() || DEFAULT_GROQ_MODEL;

  const systemPrompt =
    "You are a precise calculus tutor. Return valid JSON only with keys: summary, steps, finalAnswer, tip. " +
    "Keep steps concise, practical, and aligned to the exact question.";
  const userPrompt = [
    "Question:",
    prompt || "",
    "",
    "Correct answer:",
    correctAnswer || "",
    "",
    "Student answer:",
    userAnswer || "",
    "",
    "Give step-by-step correction. Use plain text. If relevant, include math notation.",
  ].join("\n");

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
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

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Groq request failed (${response.status}): ${errorBody.slice(0, 300)}`);
  }

  const payload = await response.json();
  const content = trimForModel(payload?.choices?.[0]?.message?.content || "", 6000);
  if (!content) {
    throw new Error("Groq returned an empty response.");
  }

  const parsed = parseGroqJson(content);
  if (parsed) {
    const normalized = buildSolutionText(parsed);
    if (normalized.text) {
      return {
        ...normalized,
        raw: content,
        model,
      };
    }
  }

  return {
    summary: "",
    steps: [],
    finalAnswer: "",
    tip: "",
    text: content,
    raw: content,
    model,
  };
};

exports.sendLearningReminder = functions.pubsub
  .schedule("0 18 * * 2,5")
  .timeZone(getRuntimeConfig().timeZone)
  .onRun(async () => {
    const runtimeConfig = getRuntimeConfig();
    const payload = {
      title: "Time to learn",
      body: "A short session keeps your streak strong. Ready for a quick lesson?",
      url: "path.html",
    };

    if (!ensureVapidDetails(runtimeConfig)) {
      console.warn("Missing VAPID keys. Web push will be skipped.");
    } else {
      const snapshot = await admin.firestore().collection(COLLECTION).get();
      if (!snapshot.empty) {
        const webPayload = JSON.stringify(payload);
        const tasks = [];
        snapshot.forEach((doc) => {
          const data = doc.data() || {};
          const sub = data.subscription;
          if (!sub || !sub.endpoint) return;
          tasks.push(
            webpush.sendNotification(sub, webPayload).catch(async (err) => {
              if (err?.statusCode === 404 || err?.statusCode === 410) {
                await doc.ref.delete();
              } else {
                console.error("Push error", err);
              }
            })
          );
        });
        await Promise.all(tasks);
      }
    }

    const fcmSnap = await admin.firestore().collection(FCM_COLLECTION).get();
    if (!fcmSnap.empty) {
      const items = fcmSnap.docs
        .map((doc) => ({ ref: doc.ref, token: doc.data()?.token || "" }))
        .filter((item) => item.token);
      for (const group of chunk(items, 500)) {
        await sendFcmBatch(group, payload);
      }
    }
    return null;
  });

exports.sendTestPush = functions.https.onRequest(async (req, res) => {
  try {
    const runtimeConfig = getRuntimeConfig();
    const hasWebPush = ensureVapidDetails(runtimeConfig);
    if (!hasWebPush) {
      console.warn("Missing VAPID keys. Web push will be skipped.");
    }

    const key = String(req.query.key || req.body?.key || "");
    if (!runtimeConfig.testKey || key !== runtimeConfig.testKey) {
      res.status(403).send("Forbidden");
      return;
    }

    const uid = String(req.query.uid || req.body?.uid || "");
    if (!uid) {
      res.status(400).send("Missing uid");
      return;
    }

    const snap = hasWebPush
      ? await admin.firestore().collection(COLLECTION).where("uid", "==", uid).get()
      : null;

    const payload = {
      title: "Test reminder",
      body: "Calculus is fun. Ready for a quick session?",
      url: "path.html",
    };
    const webPayload = JSON.stringify(payload);

    if (snap && !snap.empty) {
      const tasks = [];
      snap.forEach((doc) => {
        const sub = doc.data()?.subscription;
        if (!sub || !sub.endpoint) return;
        tasks.push(
          webpush.sendNotification(sub, webPayload).catch(async (err) => {
            if (err?.statusCode === 404 || err?.statusCode === 410) {
              await doc.ref.delete();
            } else {
              console.error("Push error", err);
            }
          })
        );
      });
      await Promise.all(tasks);
    }

    const fcmSnap = await admin.firestore().collection(FCM_COLLECTION).where("uid", "==", uid).get();
    if (!fcmSnap.empty) {
      const items = fcmSnap.docs
        .map((doc) => ({ ref: doc.ref, token: doc.data()?.token || "" }))
        .filter((item) => item.token);
      for (const group of chunk(items, 500)) {
        await sendFcmBatch(group, payload);
      }
    }

    if ((!snap || snap.empty) && fcmSnap.empty) {
      res.status(404).send("Subscription not found");
      return;
    }
    res.status(200).send("Sent");
  } catch (err) {
    console.error("Test push error", err);
    res.status(500).send("Error");
  }
});

exports.rotateLeaguesWeekly = functions.pubsub
  .schedule("5 0 * * 1")
  .timeZone(getRuntimeConfig().timeZone)
  .onRun(async () => {
    const db = admin.firestore();
    const metaRef = db.collection("leaderboard_meta").doc("rotation");
    const now = new Date();
    const currentWeekKey = getWeekKey(now);
    const prevWeekKey = getWeekKey(new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000));

    const metaSnap = await metaRef.get();
    if (metaSnap.exists) {
      const meta = metaSnap.data() || {};
      if (meta.lastProcessedWeek === prevWeekKey) {
        return null;
      }
    }

    const updates = [];
    for (let i = 0; i < LEAGUES.length; i += 1) {
      const league = LEAGUES[i];
      const snap = await db.collection("leaderboard").where("leagueIndex", "==", i).get();
      if (snap.empty) continue;

      const scored = snap.docs.map((doc) => {
        const data = doc.data() || {};
        const score = Number(data.xp) || 0;
        const updatedAt = Date.parse(data.updatedAt || "") || 0;
        return { doc, data, score, updatedAt };
      });

      scored.sort((a, b) => {
        const diff = b.score - a.score;
        if (diff !== 0) return diff;
        return b.updatedAt - a.updatedAt;
      });

      const top = scored.slice(0, 5);
      const bottom = scored.slice(15, 20);

      if (i < LEAGUES.length - 1) {
        const nextLeague = LEAGUES[i + 1];
        top.forEach(({ doc }) => {
          updates.push({
            ref: doc.ref,
            data: {
              leagueIndex: i + 1,
              leagueId: nextLeague.id,
              leagueName: nextLeague.name,
              leagueUpdatedAt: new Date().toISOString(),
            },
          });
        });
      }

      if (i > 0) {
        const prevLeague = LEAGUES[i - 1];
        bottom.forEach(({ doc }) => {
          updates.push({
            ref: doc.ref,
            data: {
              leagueIndex: i - 1,
              leagueId: prevLeague.id,
              leagueName: prevLeague.name,
              leagueUpdatedAt: new Date().toISOString(),
            },
          });
        });
      }
    }

    const batchSize = 400;
    for (let i = 0; i < updates.length; i += batchSize) {
      const batch = db.batch();
      updates.slice(i, i + batchSize).forEach((update) => {
        batch.set(update.ref, update.data, { merge: true });
      });
      await batch.commit();
    }

    await metaRef.set(
      {
        lastProcessedWeek: prevWeekKey,
        processedAt: new Date().toISOString(),
        currentWeek: currentWeekKey,
      },
      { merge: true }
    );
    return null;
  });

exports.notifyFriendRequest = functions.firestore
  .document("friendships/{friendId}")
  .onCreate(async (snap) => {
    try {
      const data = snap.data() || {};
      if (data.status !== "pending") return null;
      const toUid = String(data.to || "");
      if (!toUid) return null;

      const fromName = String(data.fromName || "A learner");
      const payload = {
        title: "New friend request",
        body: `${fromName} wants to be your friend`,
        url: "profile.html",
      };

      if (ensureVapidDetails(getRuntimeConfig())) {
        const webPayload = JSON.stringify(payload);
        const snapSubs = await admin.firestore().collection(COLLECTION).where("uid", "==", toUid).get();
        if (!snapSubs.empty) {
          const tasks = [];
          snapSubs.forEach((doc) => {
            const sub = doc.data()?.subscription;
            if (!sub || !sub.endpoint) return;
            tasks.push(
              webpush.sendNotification(sub, webPayload).catch(async (err) => {
                if (err?.statusCode === 404 || err?.statusCode === 410) {
                  await doc.ref.delete();
                } else {
                  console.error("Friend request push error", err);
                }
              })
            );
          });
          await Promise.all(tasks);
        }
      }

      const fcmSnap = await admin.firestore().collection(FCM_COLLECTION).where("uid", "==", toUid).get();
      if (!fcmSnap.empty) {
        const items = fcmSnap.docs
          .map((doc) => ({ ref: doc.ref, token: doc.data()?.token || "" }))
          .filter((item) => item.token);
        for (const group of chunk(items, 500)) {
          await sendFcmBatch(group, payload);
        }
      }
      return null;
    } catch (err) {
      console.error("Friend request notification error", err);
      return null;
    }
  });

exports.getStepSolution = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed");
    return;
  }

  try {
    const body = req.body || {};
    const questionId = normalizeQuestionId(body.questionId);
    const prompt = trimForModel(body.prompt, 2500);
    const correctAnswer = trimForModel(body.correctAnswer, 1200);
    const userAnswer = trimForModel(body.userAnswer, 1200);
    const questionType = trimForModel(body.questionType, 40);
    const sectionId = trimForModel(body.sectionId, 120);

    if (!questionId || questionId.length < 3) {
      res.status(400).json({ ok: false, error: "Missing or invalid questionId." });
      return;
    }
    if (!prompt) {
      res.status(400).json({ ok: false, error: "Missing question prompt." });
      return;
    }

    const docRef = admin.firestore().collection(AI_SOLUTIONS_COLLECTION).doc(questionId);
    const existing = await docRef.get();
    if (existing.exists) {
      const data = existing.data() || {};
      const normalized = normalizeStoredSolution(data);
      if (normalized.solution && normalized.solution !== String(data.solution || "")) {
        await docRef.set(
          {
            solution: normalized.solution,
            summary: normalized.summary || "",
            steps: normalized.steps || [],
            finalAnswer: normalized.finalAnswer || "",
            tip: normalized.tip || "",
            updatedAt: new Date().toISOString(),
          },
          { merge: true }
        );
      }
      res.status(200).json({
        ok: true,
        cached: true,
        questionId,
        solution: normalized.solution,
        steps: normalized.steps,
        finalAnswer: normalized.finalAnswer,
        tip: normalized.tip,
        model: String(data.model || ""),
      });
      return;
    }

    const runtimeConfig = getRuntimeConfig();
    if (!runtimeConfig.groqApiKey) {
      res.status(503).json({ ok: false, error: "AI solver is not configured." });
      return;
    }

    const generated = await requestGroqSolution({
      prompt,
      correctAnswer,
      userAnswer,
      runtimeConfig,
    });

    const nowIso = new Date().toISOString();
    const record = {
      questionId,
      prompt,
      correctAnswer,
      questionType,
      sectionId,
      solution: generated.text || "",
      summary: generated.summary || "",
      steps: Array.isArray(generated.steps) ? generated.steps : [],
      finalAnswer: generated.finalAnswer || "",
      tip: generated.tip || "",
      raw: generated.raw || generated.text,
      model: generated.model || runtimeConfig.groqModel || DEFAULT_GROQ_MODEL,
      createdAt: nowIso,
      updatedAt: nowIso,
      requests: 1,
    };
    const normalizedGenerated = normalizeStoredSolution(record);
    const mergedRecord = {
      ...record,
      solution: normalizedGenerated.solution || record.solution,
      summary: normalizedGenerated.summary || record.summary,
      steps: normalizedGenerated.steps || record.steps,
      finalAnswer: normalizedGenerated.finalAnswer || record.finalAnswer,
      tip: normalizedGenerated.tip || record.tip,
    };
    await docRef.set(mergedRecord, { merge: true });

    res.status(200).json({
      ok: true,
      cached: false,
      questionId,
      solution: mergedRecord.solution,
      steps: mergedRecord.steps,
      finalAnswer: mergedRecord.finalAnswer,
      tip: mergedRecord.tip,
      model: mergedRecord.model,
    });
  } catch (err) {
    console.error("getStepSolution error", err);
    res.status(500).json({ ok: false, error: "Unable to generate solution." });
  }
});

// Username-based sign-in removed. Use email + password only.

exports.requestAccountDeletion = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed");
    return;
  }

  try {
    const body = req.body || {};
    const email = String(body.email || "").trim().toLowerCase();
    const uid = String(body.uid || "").trim();
    const reason = String(body.reason || "").trim().slice(0, 120);
    const details = String(body.details || "").trim().slice(0, 1000);
    const source = String(body.source || "web").trim().slice(0, 30);

    if (!email || !email.includes("@")) {
      res.status(400).send("Valid email required");
      return;
    }

    const ip =
      (req.headers["x-forwarded-for"] || "").toString().split(",")[0].trim() || req.ip || "";
    const userAgent = String(req.headers["user-agent"] || "").slice(0, 300);

    await admin.firestore().collection("account_deletion_requests").add({
      email,
      uid: uid || null,
      reason: reason || null,
      details: details || null,
      source,
      status: "pending",
      ip,
      userAgent,
      createdAt: new Date().toISOString(),
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Account deletion request error", err);
    res.status(500).send("Server error");
  }
});

exports.listAccountDeletionRequests = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }
  if (req.method !== "GET") {
    res.status(405).send("Method not allowed");
    return;
  }

  const authResult = await verifyAdminRequest(req);
  if (!authResult.ok) {
    res.status(authResult.code).send(authResult.message);
    return;
  }

  try {
    const status = String(req.query.status || "").trim();
    let query = admin.firestore().collection("account_deletion_requests");
    if (!status) {
      query = query.orderBy("createdAt", "desc");
    } else {
      query = query.where("status", "==", status);
    }
    const snap = await query.limit(200).get();
    const items = snap.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
    res.status(200).json({ ok: true, items });
  } catch (err) {
    console.error("List deletion requests error", err);
    res.status(500).send("Server error");
  }
});

const deleteDocsByQuery = async (query) => {
  const snap = await query.get();
  if (snap.empty) return;
  const batches = [];
  let batch = admin.firestore().batch();
  let count = 0;
  snap.docs.forEach((doc) => {
    batch.delete(doc.ref);
    count += 1;
    if (count >= 400) {
      batches.push(batch);
      batch = admin.firestore().batch();
      count = 0;
    }
  });
  if (count > 0) batches.push(batch);
  for (const b of batches) {
    await b.commit();
  }
};

const deleteUserData = async (uid) => {
  const db = admin.firestore();
  await db.collection("users").doc(uid).delete().catch(() => {});
  await db.collection("leaderboard").doc(uid).delete().catch(() => {});
  await db.collection("public_profiles").doc(uid).delete().catch(() => {});
  await deleteDocsByQuery(db.collection("name_registry").where("uid", "==", uid));
  await deleteDocsByQuery(db.collection("push_subscriptions").where("uid", "==", uid));
  await deleteDocsByQuery(db.collection("fcm_tokens").where("uid", "==", uid));
  await deleteDocsByQuery(db.collection("friendships").where("from", "==", uid));
  await deleteDocsByQuery(db.collection("friendships").where("to", "==", uid));
  await deleteDocsByQuery(db.collection("problem_reports").where("uid", "==", uid));
  await deleteDocsByQuery(db.collection("account_deletion_requests").where("uid", "==", uid));
  await deleteDocsByQuery(db.collection("in_app_notifications").where("targetUid", "==", uid));
};

exports.processAccountDeletion = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed");
    return;
  }

  const authResult = await verifyAdminRequest(req);
  if (!authResult.ok) {
    res.status(authResult.code).send(authResult.message);
    return;
  }

  try {
    const body = req.body || {};
    const requestId = String(body.requestId || "").trim();
    const action = String(body.action || "").trim();
    if (!requestId || !action) {
      res.status(400).send("Missing requestId/action");
      return;
    }

    const reqRef = admin.firestore().collection("account_deletion_requests").doc(requestId);
    const reqSnap = await reqRef.get();
    if (!reqSnap.exists) {
      res.status(404).send("Request not found");
      return;
    }

    const data = reqSnap.data() || {};
    const email = String(data.email || "").trim();
    let uid = String(data.uid || "").trim();

    if (action === "approve_delete") {
      if (!uid && email) {
        try {
          const userRecord = await admin.auth().getUserByEmail(email);
          uid = userRecord.uid;
        } catch (err) {
          // user may already be deleted
        }
      }

      if (uid) {
        await deleteUserData(uid);
        try {
          await admin.auth().deleteUser(uid);
        } catch (err) {
          // ignore auth delete errors
        }
      }

      await reqRef.set(
        {
          status: "deleted",
          handledAt: new Date().toISOString(),
          handledBy: authResult.user?.email || "",
        },
        { merge: true }
      );
      res.status(200).json({ ok: true, status: "deleted" });
      return;
    }

    if (action === "deny") {
      await reqRef.set(
        {
          status: "denied",
          handledAt: new Date().toISOString(),
          handledBy: authResult.user?.email || "",
        },
        { merge: true }
      );
      res.status(200).json({ ok: true, status: "denied" });
      return;
    }

    if (action === "complete") {
      await reqRef.set(
        {
          status: "completed",
          handledAt: new Date().toISOString(),
          handledBy: authResult.user?.email || "",
        },
        { merge: true }
      );
      res.status(200).json({ ok: true, status: "completed" });
      return;
    }

    res.status(400).send("Unknown action");
  } catch (err) {
    console.error("Process deletion request error", err);
    res.status(500).send("Server error");
  }
});

const setAdminCors = (res, methods) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", methods || "GET, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
};

const toBool = (value, fallback = false) => {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") {
    const v = value.trim().toLowerCase();
    if (v === "true" || v === "1" || v === "yes") return true;
    if (v === "false" || v === "0" || v === "no") return false;
  }
  return fallback;
};

const trimText = (value, maxLen = 500) =>
  String(value || "")
    .trim()
    .slice(0, maxLen);

const normalizeRoute = (value) => {
  const raw = trimText(value, 300);
  if (!raw) return "path.html";
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  const clean = raw.startsWith("/") ? raw.slice(1) : raw;
  return clean || "path.html";
};

const normalizeLines = (value, maxItems = 20, maxLen = 400) => {
  const raw = Array.isArray(value)
    ? value
    : typeof value === "string"
      ? value.split(/\r?\n/)
      : [];
  return raw
    .map((entry) => trimText(entry, maxLen))
    .filter(Boolean)
    .slice(0, maxItems);
};

const normalizeOptionalNumber = (value, min = 0, max = 1000) => {
  if (value == null) return null;
  const raw = String(value).trim();
  if (!raw) return null;
  const num = Number(raw);
  if (!Number.isFinite(num)) return null;
  if (num < min || num > max) return null;
  return num;
};

const sanitizeQuestionOverride = (data) => {
  const source = data && typeof data === "object" ? data : {};
  const itemId = normalizeQuestionId(source.itemId);
  return {
    itemId,
    active: source.active !== false,
    prompt: trimText(source.prompt, 2500),
    answerValue: trimText(source.answerValue, 1200),
    alternateAnswers: normalizeLines(source.alternateAnswers, 24, 600),
    tolerance: normalizeOptionalNumber(source.tolerance, 0, 1000),
    wrongResponse: trimText(source.wrongResponse, 1200),
    solutionSteps: normalizeLines(source.solutionSteps, 12, 800),
    choices: normalizeLines(source.choices, 8, 400),
    updatedAt: trimText(source.updatedAt, 64),
    updatedBy: trimText(source.updatedBy, 320),
  };
};

const countQuery = async (queryRef) => {
  try {
    const agg = await queryRef.count().get();
    if (typeof agg?.data === "function") {
      const data = agg.data();
      if (typeof data?.count === "number") return data.count;
    }
  } catch (err) {
    // fall through to full read
  }
  const snap = await queryRef.get();
  return snap.size;
};

const fetchPublicProfilesByUid = async (uids) => {
  const db = admin.firestore();
  const map = new Map();
  const idField = admin.firestore.FieldPath.documentId();
  for (const group of chunk(uids, 10)) {
    if (!group.length) continue;
    const snap = await db
      .collection("public_profiles")
      .where(idField, "in", group)
      .get();
    snap.forEach((doc) => {
      map.set(doc.id, doc.data() || {});
    });
  }
  return map;
};

const fetchUserDocsByUid = async (uids) => {
  const db = admin.firestore();
  const map = new Map();
  const idField = admin.firestore.FieldPath.documentId();
  for (const group of chunk(uids, 10)) {
    if (!group.length) continue;
    const snap = await db
      .collection("users")
      .where(idField, "in", group)
      .get();
    snap.forEach((doc) => {
      map.set(doc.id, doc.data() || {});
    });
  }
  return map;
};

const toMillis = (value) => {
  if (!value) return 0;
  if (typeof value?.toMillis === "function") return value.toMillis();
  if (value instanceof Date) return value.getTime();
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "object") {
    const seconds = Number(value._seconds ?? value.seconds);
    const nanos = Number(value._nanoseconds ?? value.nanoseconds ?? 0);
    if (Number.isFinite(seconds)) return seconds * 1000 + Math.floor(nanos / 1e6);
  }
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const listTokensByTarget = async (targetType, targetUid) => {
  const db = admin.firestore();
  const webRef =
    targetType === "user"
      ? db.collection(COLLECTION).where("uid", "==", targetUid)
      : db.collection(COLLECTION);
  const fcmRef =
    targetType === "user"
      ? db.collection(FCM_COLLECTION).where("uid", "==", targetUid)
      : db.collection(FCM_COLLECTION);

  const [webSnap, fcmSnap] = await Promise.all([webRef.get(), fcmRef.get()]);
  const webItems = webSnap.docs.map((doc) => ({ ref: doc.ref, data: doc.data() || {} }));
  const fcmItems = fcmSnap.docs
    .map((doc) => ({ ref: doc.ref, token: String(doc.data()?.token || "") }))
    .filter((item) => item.token);
  return { webItems, fcmItems };
};

const sendWebPushItems = async (items, payload) => {
  if (!items.length) return { sent: 0, failed: 0 };
  if (!ensureVapidDetails(getRuntimeConfig())) return { sent: 0, failed: 0 };
  const webPayload = JSON.stringify(payload);
  let sent = 0;
  let failed = 0;
  const tasks = items.map(async (item) => {
    const sub = item.data?.subscription;
    if (!sub || !sub.endpoint) return;
    try {
      await webpush.sendNotification(sub, webPayload);
      sent += 1;
    } catch (err) {
      failed += 1;
      if (err?.statusCode === 404 || err?.statusCode === 410) {
        await item.ref.delete().catch(() => {});
      }
    }
  });
  await Promise.all(tasks);
  return { sent, failed };
};

const sendFcmItems = async (items, payload) => {
  if (!items.length) return { sent: 0, failed: 0 };
  let sent = 0;
  let failed = 0;
  for (const group of chunk(items, 500)) {
    const message = {
      tokens: group.map((item) => item.token),
      notification: {
        title: payload.title,
        body: payload.body,
      },
      data: {
        url: payload.url || "path.html",
      },
      android: {
        priority: "high",
      },
    };
    const response = await admin.messaging().sendEachForMulticast(message);
    response.responses.forEach((res, idx) => {
      if (res.success) {
        sent += 1;
      } else {
        failed += 1;
        const code = res.error?.code || "";
        if (code === "messaging/registration-token-not-registered" || code === "messaging/invalid-registration-token") {
          group[idx].ref.delete().catch(() => {});
        }
      }
    });
  }
  return { sent, failed };
};

exports.adminDashboard = functions.https.onRequest(async (req, res) => {
  setAdminCors(res, "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(204).send("");
  if (req.method !== "GET") return res.status(405).send("Method not allowed");

  const authResult = await verifyAdminRequest(req);
  if (!authResult.ok) return res.status(authResult.code).send(authResult.message);

  try {
    const db = admin.firestore();
    const [usersCount, pendingDeletion, pendingReports, openReports, webSubs, fcmTokens] = await Promise.all([
      countQuery(db.collection("public_profiles")),
      countQuery(db.collection("account_deletion_requests").where("status", "==", "pending")),
      countQuery(db.collection("problem_reports").where("status", "==", "pending")),
      countQuery(db.collection("problem_reports")),
      countQuery(db.collection(COLLECTION)),
      countQuery(db.collection(FCM_COLLECTION)),
    ]);

    res.status(200).json({
      ok: true,
      stats: {
        users: usersCount,
        pendingDeletionRequests: pendingDeletion,
        pendingProblemReports: pendingReports,
        totalProblemReports: openReports,
        pushSubscriptions: webSubs,
        fcmTokens,
      },
    });
  } catch (err) {
    console.error("adminDashboard error", err);
    res.status(500).send("Server error");
  }
});

exports.adminListUsers = functions.https.onRequest(async (req, res) => {
  setAdminCors(res, "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(204).send("");
  if (req.method !== "GET") return res.status(405).send("Method not allowed");

  const authResult = await verifyAdminRequest(req);
  if (!authResult.ok) return res.status(authResult.code).send(authResult.message);

  try {
    const limit = Math.max(1, Math.min(200, Number(req.query.limit) || 50));
    const pageToken = trimText(req.query.pageToken, 1000) || undefined;
    const q = trimText(req.query.q, 120).toLowerCase();
    const usersResult = await admin.auth().listUsers(limit, pageToken);
    const authUsers = usersResult.users || [];
    const uids = authUsers.map((u) => u.uid);
    const profileMap = await fetchPublicProfilesByUid(uids);

    let items = authUsers.map((u) => {
      const profile = profileMap.get(u.uid) || {};
      return {
        uid: u.uid,
        email: u.email || "",
        emailVerified: !!u.emailVerified,
        disabled: !!u.disabled,
        displayName: u.displayName || "",
        photoURL: u.photoURL || profile.avatarUrl || "",
        createdAt: u.metadata?.creationTime || "",
        lastSignInAt: u.metadata?.lastSignInTime || "",
        providerIds: (u.providerData || []).map((p) => p.providerId).filter(Boolean),
        username: profile.username || "",
        fullName: profile.fullName || "",
        nationality: profile.nationality || "",
        nationalityFlag: profile.nationalityFlag || "",
        xp: Number(profile.xp) || 0,
        streak: Number(profile.streak) || 0,
        leagueName: profile.leagueName || "",
      };
    });

    if (q) {
      items = items.filter((item) => {
        const combined = [
          item.uid,
          item.email,
          item.displayName,
          item.username,
          item.fullName,
          item.nationality,
        ]
          .join(" ")
          .toLowerCase();
        return combined.includes(q);
      });
    }

    res.status(200).json({
      ok: true,
      items,
      nextPageToken: usersResult.pageToken || "",
    });
  } catch (err) {
    console.error("adminListUsers error", err);
    res.status(500).send("Server error");
  }
});

const handleAdminUserAction = async (req, res, functionName = "adminUserAction") => {
  setAdminCors(res, "POST, OPTIONS");
  if (req.method === "OPTIONS") return res.status(204).send("");
  if (req.method !== "POST") return res.status(405).send("Method not allowed");

  const authResult = await verifyAdminRequest(req);
  if (!authResult.ok) return res.status(authResult.code).send(authResult.message);

  try {
    const body = req.body || {};
    const action = trimText(body.action, 60);
    const uid = trimText(body.uid, 128);
    const email = trimText(body.email, 320).toLowerCase();

    if (!action) return res.status(400).send("Missing action");
    if (!uid && action !== "reset_password" && action !== "send_verification") {
      return res.status(400).send("Missing uid");
    }

    if (action === "disable") {
      await admin.auth().updateUser(uid, { disabled: true });
      return res.status(200).json({ ok: true });
    }
    if (action === "enable") {
      await admin.auth().updateUser(uid, { disabled: false });
      return res.status(200).json({ ok: true });
    }
    if (action === "delete") {
      await deleteUserData(uid);
      await admin.auth().deleteUser(uid).catch(() => {});
      return res.status(200).json({ ok: true });
    }
    if (action === "reset_password") {
      const targetEmail = email || (uid ? (await admin.auth().getUser(uid)).email || "" : "");
      if (!targetEmail) return res.status(400).send("Missing email");
      const link = await admin.auth().generatePasswordResetLink(targetEmail);
      return res.status(200).json({ ok: true, link });
    }
    if (action === "send_verification") {
      const targetEmail = email || (uid ? (await admin.auth().getUser(uid)).email || "" : "");
      if (!targetEmail) return res.status(400).send("Missing email");
      const link = await admin.auth().generateEmailVerificationLink(targetEmail);
      return res.status(200).json({ ok: true, link });
    }
    if (action === "grant_admin" || action === "revoke_admin") {
      const userRecord = await admin.auth().getUser(uid);
      const claims = { ...(userRecord.customClaims || {}) };
      if (action === "grant_admin") claims.admin = true;
      if (action === "revoke_admin") delete claims.admin;
      await admin.auth().setCustomUserClaims(uid, claims);
      return res.status(200).json({ ok: true });
    }

    return res.status(400).send("Unknown action");
  } catch (err) {
    console.error(`${functionName} error`, err);
    res.status(500).send("Server error");
  }
};

exports.adminUserAction = functions.https.onRequest(async (req, res) =>
  handleAdminUserAction(req, res, "adminUserAction")
);

// Mirror endpoint for browsers hitting CORS or IAM edge-cases on the legacy route.
exports.adminApplyUserAction = functions.https.onRequest(async (req, res) =>
  handleAdminUserAction(req, res, "adminApplyUserAction")
);

exports.getQuestionOverride = functions.https.onRequest(async (req, res) => {
  setAdminCors(res, "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(204).send("");
  if (req.method !== "GET") return res.status(405).send("Method not allowed");

  try {
    const itemId = normalizeQuestionId(req.query.itemId);
    if (!itemId) return res.status(400).send("Missing itemId");

    const doc = await admin.firestore().collection(QUESTION_OVERRIDES_COLLECTION).doc(itemId).get();
    if (!doc.exists) return res.status(200).json({ ok: true, found: false });

    const override = sanitizeQuestionOverride({ itemId, ...doc.data() });
    if (!override.active) return res.status(200).json({ ok: true, found: false });
    res.status(200).json({ ok: true, found: true, override });
  } catch (err) {
    console.error("getQuestionOverride error", err);
    res.status(500).send("Server error");
  }
});

exports.adminGetQuestionOverride = functions.https.onRequest(async (req, res) => {
  setAdminCors(res, "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(204).send("");
  if (req.method !== "GET") return res.status(405).send("Method not allowed");

  const authResult = await verifyAdminRequest(req);
  if (!authResult.ok) return res.status(authResult.code).send(authResult.message);

  try {
    const itemId = normalizeQuestionId(req.query.itemId);
    if (!itemId) return res.status(400).send("Missing itemId");

    const doc = await admin.firestore().collection(QUESTION_OVERRIDES_COLLECTION).doc(itemId).get();
    if (!doc.exists) return res.status(200).json({ ok: true, found: false, override: { itemId, active: true } });

    const override = sanitizeQuestionOverride({ itemId, ...doc.data() });
    res.status(200).json({ ok: true, found: true, override });
  } catch (err) {
    console.error("adminGetQuestionOverride error", err);
    res.status(500).send("Server error");
  }
});

exports.adminUpsertQuestionOverride = functions.https.onRequest(async (req, res) => {
  setAdminCors(res, "POST, OPTIONS");
  if (req.method === "OPTIONS") return res.status(204).send("");
  if (req.method !== "POST") return res.status(405).send("Method not allowed");

  const authResult = await verifyAdminRequest(req);
  if (!authResult.ok) return res.status(authResult.code).send(authResult.message);

  try {
    const body = req.body || {};
    const itemId = normalizeQuestionId(body.itemId);
    if (!itemId) return res.status(400).send("Missing itemId");

    const nowIso = new Date().toISOString();
    const existingDoc = await admin.firestore().collection(QUESTION_OVERRIDES_COLLECTION).doc(itemId).get();
    const existingData = existingDoc.exists ? existingDoc.data() || {} : {};

    const next = sanitizeQuestionOverride({
      ...existingData,
      ...body,
      itemId,
      updatedAt: nowIso,
      updatedBy: authResult.user?.email || "",
    });

    const payload = {
      itemId,
      active: next.active,
      prompt: next.prompt,
      answerValue: next.answerValue,
      alternateAnswers: next.alternateAnswers,
      wrongResponse: next.wrongResponse,
      solutionSteps: next.solutionSteps,
      choices: next.choices,
      updatedAt: nowIso,
      updatedBy: authResult.user?.email || "",
    };
    if (typeof next.tolerance === "number" && Number.isFinite(next.tolerance)) {
      payload.tolerance = next.tolerance;
    } else {
      payload.tolerance = admin.firestore.FieldValue.delete();
    }
    if (!existingDoc.exists) payload.createdAt = nowIso;

    await admin.firestore().collection(QUESTION_OVERRIDES_COLLECTION).doc(itemId).set(payload, { merge: true });

    const reportId = trimText(body.reportId, 128);
    if (reportId) {
      await admin
        .firestore()
        .collection("problem_reports")
        .doc(reportId)
        .set(
          {
            overrideItemId: itemId,
            overrideUpdatedAt: nowIso,
            overrideUpdatedBy: authResult.user?.email || "",
          },
          { merge: true }
        );
    }

    res.status(200).json({
      ok: true,
      override: sanitizeQuestionOverride({
        ...payload,
        itemId,
      }),
    });
  } catch (err) {
    console.error("adminUpsertQuestionOverride error", err);
    res.status(500).send("Server error");
  }
});

exports.adminListProblemReports = functions.https.onRequest(async (req, res) => {
  setAdminCors(res, "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(204).send("");
  if (req.method !== "GET") return res.status(405).send("Method not allowed");

  const authResult = await verifyAdminRequest(req);
  if (!authResult.ok) return res.status(authResult.code).send(authResult.message);

  try {
    const status = trimText(req.query.status, 40);
    let query = admin.firestore().collection("problem_reports");
    if (!status) {
      query = query.orderBy("createdAt", "desc");
    } else {
      query = query.where("status", "==", status);
    }
    const snap = await query.limit(250).get();
    const baseItems = snap.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => toMillis(b.createdAt || b.clientCreatedAt) - toMillis(a.createdAt || a.clientCreatedAt));
    const uids = Array.from(
      new Set(
        baseItems
          .map((item) => trimText(item.uid, 128))
          .filter(Boolean)
      )
    );
    const [userDocs, publicProfiles] = await Promise.all([
      fetchUserDocsByUid(uids),
      fetchPublicProfilesByUid(uids),
    ]);
    const items = baseItems.map((item) => {
      const uid = trimText(item.uid, 128);
      const userData = uid ? userDocs.get(uid) || {} : {};
      const publicData = uid ? publicProfiles.get(uid) || {} : {};
      return {
        ...item,
        email: trimText(item.email, 320) || trimText(userData.email, 320),
        username:
          trimText(item.username, 120) ||
          trimText(item.reporterUsername, 120) ||
          trimText(userData.username, 120) ||
          trimText(publicData.username, 120) ||
          trimText(userData.displayName, 120) ||
          trimText(publicData.displayName, 120),
        fullName:
          trimText(item.fullName, 160) ||
          trimText(item.reporterName, 160) ||
          trimText(userData.fullName, 160) ||
          trimText(publicData.fullName, 160),
      };
    });
    res.status(200).json({ ok: true, items });
  } catch (err) {
    console.error("adminListProblemReports error", err);
    res.status(500).send("Server error");
  }
});

exports.adminUpdateProblemReport = functions.https.onRequest(async (req, res) => {
  setAdminCors(res, "POST, OPTIONS");
  if (req.method === "OPTIONS") return res.status(204).send("");
  if (req.method !== "POST") return res.status(405).send("Method not allowed");

  const authResult = await verifyAdminRequest(req);
  if (!authResult.ok) return res.status(authResult.code).send(authResult.message);

  try {
    const body = req.body || {};
    const reportId = trimText(body.reportId, 128);
    const status = trimText(body.status, 40) || "pending";
    const adminNote = trimText(body.adminNote, 1000);
    if (!reportId) return res.status(400).send("Missing reportId");

    await admin
      .firestore()
      .collection("problem_reports")
      .doc(reportId)
      .set(
        {
          status,
          adminNote,
          handledAt: new Date().toISOString(),
          handledBy: authResult.user?.email || "",
        },
        { merge: true }
      );

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("adminUpdateProblemReport error", err);
    res.status(500).send("Server error");
  }
});

exports.adminSendNotification = functions.https.onRequest(async (req, res) => {
  setAdminCors(res, "POST, OPTIONS");
  if (req.method === "OPTIONS") return res.status(204).send("");
  if (req.method !== "POST") return res.status(405).send("Method not allowed");

  const authResult = await verifyAdminRequest(req);
  if (!authResult.ok) return res.status(authResult.code).send(authResult.message);

  try {
    const body = req.body || {};
    const targetType = trimText(body.targetType, 10) === "user" ? "user" : "all";
    const targetUid = trimText(body.uid, 128);
    const sendInApp = toBool(body.inApp, true);
    const sendOffApp = toBool(body.offApp, true);
    const title = trimText(body.title, 80);
    const message = trimText(body.body, 240);
    const url = normalizeRoute(body.url);

    if (!title || !message) return res.status(400).send("Missing title/body");
    if (targetType === "user" && !targetUid) return res.status(400).send("Missing uid for user target");

    const payload = { title, body: message, url };
    const nowIso = new Date().toISOString();

    let webSent = 0;
    let webFailed = 0;
    let fcmSent = 0;
    let fcmFailed = 0;

    if (sendOffApp) {
      const { webItems, fcmItems } = await listTokensByTarget(targetType, targetUid);
      const webResult = await sendWebPushItems(webItems, payload);
      webSent = webResult.sent;
      webFailed = webResult.failed;
      const fcmResult = await sendFcmItems(fcmItems, payload);
      fcmSent = fcmResult.sent;
      fcmFailed = fcmResult.failed;
    }

    let inAppId = "";
    if (sendInApp) {
      const ref = await admin.firestore().collection("in_app_notifications").add({
        targetType,
        targetUid: targetType === "user" ? targetUid : null,
        title,
        body: message,
        url,
        active: true,
        createdAt: nowIso,
        createdBy: authResult.user?.email || "",
      });
      inAppId = ref.id;
    }

    res.status(200).json({
      ok: true,
      targetType,
      targetUid: targetType === "user" ? targetUid : null,
      webSent,
      webFailed,
      fcmSent,
      fcmFailed,
      inAppId,
    });
  } catch (err) {
    console.error("adminSendNotification error", err);
    res.status(500).send("Server error");
  }
});

exports.adminListNotifications = functions.https.onRequest(async (req, res) => {
  setAdminCors(res, "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(204).send("");
  if (req.method !== "GET") return res.status(405).send("Method not allowed");

  const authResult = await verifyAdminRequest(req);
  if (!authResult.ok) return res.status(authResult.code).send(authResult.message);

  try {
    const status = trimText(req.query.status, 20).toLowerCase();
    const targetType = trimText(req.query.targetType, 10).toLowerCase();
    let query = admin.firestore().collection("in_app_notifications");
    if (status === "active") query = query.where("active", "==", true);
    if (status === "inactive") query = query.where("active", "==", false);
    if (targetType === "all" || targetType === "user") query = query.where("targetType", "==", targetType);
    const snap = await query.limit(300).get();
    const items = snap.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
    res.status(200).json({ ok: true, items });
  } catch (err) {
    console.error("adminListNotifications error", err);
    res.status(500).send("Server error");
  }
});

exports.adminUpdateNotification = functions.https.onRequest(async (req, res) => {
  setAdminCors(res, "POST, OPTIONS");
  if (req.method === "OPTIONS") return res.status(204).send("");
  if (req.method !== "POST") return res.status(405).send("Method not allowed");

  const authResult = await verifyAdminRequest(req);
  if (!authResult.ok) return res.status(authResult.code).send(authResult.message);

  try {
    const body = req.body || {};
    const notificationId = trimText(body.notificationId, 128);
    const action = trimText(body.action, 40);
    if (!notificationId || !action) return res.status(400).send("Missing notificationId/action");

    const ref = admin.firestore().collection("in_app_notifications").doc(notificationId);
    if (action === "activate") {
      await ref.set(
        {
          active: true,
          updatedAt: new Date().toISOString(),
          updatedBy: authResult.user?.email || "",
        },
        { merge: true }
      );
      return res.status(200).json({ ok: true, active: true });
    }
    if (action === "deactivate") {
      await ref.set(
        {
          active: false,
          updatedAt: new Date().toISOString(),
          updatedBy: authResult.user?.email || "",
        },
        { merge: true }
      );
      return res.status(200).json({ ok: true, active: false });
    }
    if (action === "delete") {
      await ref.delete();
      return res.status(200).json({ ok: true, deleted: true });
    }

    return res.status(400).send("Unknown action");
  } catch (err) {
    console.error("adminUpdateNotification error", err);
    res.status(500).send("Server error");
  }
});

exports.getInAppNotifications = functions.https.onRequest(async (req, res) => {
  setAdminCors(res, "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(204).send("");
  if (req.method !== "GET") return res.status(405).send("Method not allowed");

  const authResult = await verifyUserRequest(req);
  if (!authResult.ok) return res.status(authResult.code).send(authResult.message);

  try {
    const uid = String(authResult.user?.uid || "");
    if (!uid) return res.status(401).send("Invalid auth token");

    const [allSnap, userSnap] = await Promise.all([
      admin
        .firestore()
        .collection("in_app_notifications")
        .where("active", "==", true)
        .where("targetType", "==", "all")
        .limit(25)
        .get(),
      admin
        .firestore()
        .collection("in_app_notifications")
        .where("active", "==", true)
        .where("targetType", "==", "user")
        .where("targetUid", "==", uid)
        .limit(25)
        .get(),
    ]);

    const map = new Map();
    allSnap.forEach((doc) => map.set(doc.id, { id: doc.id, ...doc.data() }));
    userSnap.forEach((doc) => map.set(doc.id, { id: doc.id, ...doc.data() }));

    const items = Array.from(map.values())
      .sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")))
      .slice(0, 30);
    res.status(200).json({ ok: true, items });
  } catch (err) {
    console.error("getInAppNotifications error", err);
    res.status(500).send("Server error");
  }
});
