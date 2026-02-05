const functions = require("firebase-functions");
const admin = require("firebase-admin");
const webpush = require("web-push");

admin.initializeApp();

const config = functions.config().webpush || {};
const publicKey = config.public_key || "";
const privateKey = config.private_key || "";
const subject = config.subject || "mailto:juliuskalume906@gmail.com";
const timeZone = config.timezone || "Etc/UTC";
const testKey = config.test_key || "";
const leagueTimeZone = config.timezone || "Etc/UTC";

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
        let score = 0;
        if (data.weekKey === prevWeekKey) {
          score = Number(data.weeklyXp) || 0;
        } else if (data.lastWeekKey === prevWeekKey) {
          score = Number(data.lastWeekXp) || 0;
        }
        const updatedAt = Date.parse(data.updatedAt || "") || 0;
        return { doc, data, score, updatedAt };
      });

      scored.sort((a, b) => {
        const diff = b.score - a.score;
        if (diff !== 0) return diff;
        return b.updatedAt - a.updatedAt;
      });

      const top = scored.slice(0, 10);
      const bottom = scored.slice(10, 20);

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
