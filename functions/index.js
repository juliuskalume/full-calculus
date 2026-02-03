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
