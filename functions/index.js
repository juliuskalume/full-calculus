const functions = require("firebase-functions");
const admin = require("firebase-admin");
const webpush = require("web-push");
const nodemailer = require("nodemailer");

admin.initializeApp();

const config = functions.config().webpush || {};
const mailConfig = functions.config().smtp || {};
const publicKey = config.public_key || "";
const privateKey = config.private_key || "";
const subject = config.subject || "mailto:juliuskalume906@gmail.com";
const timeZone = config.timezone || "Etc/UTC";
const testKey = config.test_key || "";
const leagueTimeZone = config.timezone || "Etc/UTC";
const adminConfig = functions.config().admin || {};
const adminEmails = String(adminConfig.emails || process.env.ADMIN_EMAILS || "")
  .split(",")
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);

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

const buildMailer = () => {
  const host = mailConfig.host;
  const port = Number(mailConfig.port || 587);
  const user = mailConfig.user;
  const pass = mailConfig.pass;
  if (!host || !user || !pass) return null;
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
};

const sendDeletionEmail = async (toEmail) => {
  const transporter = buildMailer();
  const from = mailConfig.from || mailConfig.user || "";
  if (!transporter || !from || !toEmail) {
    console.warn("SMTP not configured; skipping deletion email.");
    return;
  }
  const subject = "Your Full Calculus account has been deleted";
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#0d121c;">
      <p>Hello,</p>
      <p>Your Full Calculus account and associated data have been deleted as requested.</p>
      <p>If you did not request this, please contact support at sentira.official@gmail.com.</p>
      <p>— Full Calculus Team</p>
    </div>
  `;
  await transporter.sendMail({ from, to: toEmail, subject, html });
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
    const email = String(decoded.email || "").toLowerCase();
    if (!email || !adminEmails.includes(email)) {
      return { ok: false, code: 403, message: "Not authorized" };
    }
    return { ok: true, user: decoded };
  } catch (err) {
    return { ok: false, code: 401, message: "Invalid auth token" };
  }
};

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

    const payload = {
      title: "Time to learn",
      body: "A short session keeps your streak strong. Ready for a quick lesson?",
      url: "path.html",
    };

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

    const snap = await admin.firestore().collection(COLLECTION).where("uid", "==", uid).get();

    const payload = {
      title: "Test reminder",
      body: "Calculus is fun. Ready for a quick session?",
      url: "path.html",
    };
    const webPayload = JSON.stringify(payload);

    const tasks = [];
    if (!snap.empty) {
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
    }

    await Promise.all(tasks);

    const fcmSnap = await admin.firestore().collection(FCM_COLLECTION).where("uid", "==", uid).get();
    if (!fcmSnap.empty) {
      const items = fcmSnap.docs
        .map((doc) => ({ ref: doc.ref, token: doc.data()?.token || "" }))
        .filter((item) => item.token);
      for (const group of chunk(items, 500)) {
        await sendFcmBatch(group, payload);
      }
    }

    if (snap.empty && fcmSnap.empty) {
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
    let query = admin.firestore().collection("account_deletion_requests").orderBy("createdAt", "desc");
    if (status) query = query.where("status", "==", status);
    const snap = await query.limit(200).get();
    const items = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
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
      try {
        await sendDeletionEmail(email);
      } catch (err) {
        console.error("Deletion email failed", err);
      }
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
