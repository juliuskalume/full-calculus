const functions = require("firebase-functions");
const admin = require("firebase-admin");
const webpush = require("web-push");

admin.initializeApp();

const config = functions.config().webpush || {};
const authConfig = functions.config().auth || {};
const authApiKey = authConfig.api_key || "";
const publicKey = config.public_key || "";
const privateKey = config.private_key || "";
const subject = config.subject || "mailto:juliuskalume906@gmail.com";
const timeZone = config.timezone || "Etc/UTC";
const testKey = config.test_key || "";
const leagueTimeZone = config.timezone || "Etc/UTC";

const ALLOWED_ORIGINS = new Set([
  "https://calculus.sentirax.com",
  "https://full-calculus.vercel.app",
]);

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

if (publicKey && privateKey) {
  webpush.setVapidDetails(subject, publicKey, privateKey);
}

const COLLECTION = "push_subscriptions";

exports.sendLearningReminder = functions.pubsub
  .schedule("0 18 * * 2,5")
  .timeZone(timeZone)
  .onRun(async () => {
    if (!publicKey || !privateKey) {
      console.warn("Missing VAPID keys. Set functions config before deploying.");
      return null;
    }

    const snapshot = await admin.firestore().collection(COLLECTION).get();
    if (snapshot.empty) return null;

    const payload = JSON.stringify({
      title: "Time to learn",
      body: "A short session keeps your streak strong. Ready for a quick lesson?",
      url: "path.html",
    });

    const tasks = [];
    snapshot.forEach((doc) => {
      const data = doc.data() || {};
      const sub = data.subscription;
      if (!sub || !sub.endpoint) return;
      tasks.push(
        webpush.sendNotification(sub, payload).catch(async (err) => {
          if (err?.statusCode === 404 || err?.statusCode === 410) {
            await doc.ref.delete();
          } else {
            console.error("Push error", err);
          }
        })
      );
    });

    await Promise.all(tasks);
    return null;
  });

exports.sendTestPush = functions.https.onRequest(async (req, res) => {
  try {
    if (!publicKey || !privateKey) {
      res.status(500).send("Missing VAPID keys.");
      return;
    }

    const key = String(req.query.key || req.body?.key || "");
    if (!testKey || key !== testKey) {
      res.status(403).send("Forbidden");
      return;
    }

    const uid = String(req.query.uid || req.body?.uid || "");
    if (!uid) {
      res.status(400).send("Missing uid");
      return;
    }

    const doc = await admin.firestore().collection(COLLECTION).doc(uid).get();
    if (!doc.exists) {
      res.status(404).send("Subscription not found");
      return;
    }

    const sub = doc.data()?.subscription;
    if (!sub || !sub.endpoint) {
      res.status(400).send("Invalid subscription");
      return;
    }

    const payload = JSON.stringify({
      title: "Test reminder",
      body: "Push is working. Ready for a quick session?",
      url: "path.html",
    });

    await webpush.sendNotification(sub, payload);
    res.status(200).send("Sent");
  } catch (err) {
    console.error("Test push error", err);
    res.status(500).send("Error");
  }
});

exports.rotateLeaguesWeekly = functions.pubsub
  .schedule("5 0 * * 1")
  .timeZone(leagueTimeZone)
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

exports.signInWithUsername = functions.https.onRequest(async (req, res) => {
  const origin = req.headers.origin || "";
  if (ALLOWED_ORIGINS.has(origin)) {
    res.set("Access-Control-Allow-Origin", origin);
  } else {
    res.set("Access-Control-Allow-Origin", "https://calculus.sentirax.com");
  }
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ error: "method-not-allowed" });
    return;
  }

  if (!authApiKey) {
    res.status(500).json({ error: "missing-api-key" });
    return;
  }

  const rawUsername = String(req.body?.username || req.query?.username || "").trim();
  const password = String(req.body?.password || req.query?.password || "");
  if (!rawUsername || !password) {
    res.status(400).json({ error: "missing-credentials" });
    return;
  }

  const username = rawUsername.replace(/\s+/g, "").replace(/[^\w]/g, "");
  if (username.length < 3 || username.length > 20) {
    res.status(400).json({ error: "invalid-username" });
    return;
  }

  try {
    const lower = username.toLowerCase();
    const nameDoc = await admin.firestore().collection("name_registry").doc(lower).get();
    let uid = nameDoc.data()?.uid || "";
    if (!uid) {
      const userSnap = await admin
        .firestore()
        .collection("users")
        .where("usernameLower", "==", lower)
        .limit(1)
        .get();
      if (!userSnap.empty) {
        uid = userSnap.docs[0].id;
      }
    }
    if (!uid) {
      const profileSnap = await admin
        .firestore()
        .collection("public_profiles")
        .where("usernameLower", "==", lower)
        .limit(1)
        .get();
      if (!profileSnap.empty) {
        uid = profileSnap.docs[0].id || profileSnap.docs[0].data()?.uid || "";
      }
    }
    if (!uid) {
      res.status(401).json({ error: "invalid-credentials" });
      return;
    }
    const userRecord = await admin.auth().getUser(uid);
    const email = userRecord.email || "";
    if (!email) {
      res.status(400).json({ error: "missing-email" });
      return;
    }

    const verifyRes = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${authApiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, returnSecureToken: true }),
      }
    );

    if (!verifyRes.ok) {
      res.status(401).json({ error: "invalid-credentials" });
      return;
    }

    const customToken = await admin.auth().createCustomToken(uid);
    res.status(200).json({ customToken, email });
  } catch (err) {
    console.error("signInWithUsername error", err);
    res.status(500).json({ error: "internal" });
  }
});
