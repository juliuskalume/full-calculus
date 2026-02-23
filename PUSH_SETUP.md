# Push Notifications Setup (Twice a Week)

This project uses Web Push with Firebase Cloud Functions. The client stores each user's push subscription in Firestore, and a scheduled Cloud Function sends reminders twice a week.

## 1) Install Firebase CLI

```bash
npm install -g firebase-tools
```

## 2) Login + Select Project

```bash
firebase login
firebase use --add
```

Choose your `full-calculus` Firebase project.

## 3) Install Functions Dependencies

```bash
cd functions
npm install
```

## 4) Configure Runtime Params (No `functions.config()`)

Create `functions/.env.full-calculus` from `functions/.env.example` and fill values:

```bash
WEBPUSH_PUBLIC_KEY=BH0mxXqAfmTAP45v5iHf8J2gdyQHlC5qiMiAlTbeR0Q3z_8YSnr17Y7CPQ1v3uWMBIZwZPkABb_HcULAvCUz4wU
WEBPUSH_PRIVATE_KEY=REPLACE_WITH_YOUR_PRIVATE_KEY
WEBPUSH_SUBJECT=mailto:juliuskalume906@gmail.com
WEBPUSH_TIMEZONE=Etc/UTC
WEBPUSH_TEST_KEY=CHANGE_ME
ADMIN_EMAILS=sentira.official@gmail.com,skalmistjulius@gmail.com
```

Notes:
- Public key (client) is also stored in `firebase-config.js`.
- Keep `functions/.env.*` out of git (already ignored).
- Adjust `WEBPUSH_TIMEZONE` if needed (e.g. `Africa/Nairobi`).

## 5) Deploy Firestore Rules + Functions

```bash
firebase deploy --only firestore:rules,functions
```

## 6) Verify

- Open the app, sign in, and enable notifications on the Notify screen.
- A subscription record should appear in Firestore under `push_subscriptions/{uid_hash}` (one per device).
- Reminders are scheduled for Tue/Fri at 18:00 in the configured timezone.

## 7) Test Immediately (optional)

1) Find your UID in Firebase Auth.
2) Call the test endpoint in your browser:

```
https://us-central1-full-calculus.cloudfunctions.net/sendTestPush?uid=YOUR_UID&key=CHANGE_ME
```

## Notes

- If you change the public VAPID key, update `firebase-config.js` as well.
- Users who turn notifications off will unsubscribe and remove their subscription document.
