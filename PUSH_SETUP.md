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

## 4) Configure Web Push Keys

Use the keys generated in this repo:

- Public key (client): already stored in `firebase-config.js`
- Private key (server): set below

```bash
firebase functions:config:set \
  webpush.public_key="BH0mxXqAfmTAP45v5iHf8J2gdyQHlC5qiMiAlTbeR0Q3z_8YSnr17Y7CPQ1v3uWMBIZwZPkABb_HcULAvCUz4wU" \
  webpush.private_key="XWgmQ0AIIwK0OokXGfiuRRuNKK3gP43jBLN9dES26ww" \
  webpush.subject="mailto:juliuskalume906@gmail.com" \
  webpush.timezone="Etc/UTC"
```

Adjust `webpush.timezone` if you want a different local time for reminders (e.g. `Africa/Nairobi`).

## 5) Deploy Firestore Rules + Functions

```bash
firebase deploy --only firestore:rules,functions
```

## 6) Verify

- Open the app, sign in, and enable notifications on the Notify screen.
- A subscription record should appear in Firestore under `push_subscriptions/{uid}`.
- Reminders are scheduled for Tue/Fri at 18:00 in the configured timezone.

## Notes

- If you change the public VAPID key, update `firebase-config.js` as well.
- Users who turn notifications off will unsubscribe and remove their subscription document.
