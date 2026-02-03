# Android Studio project (Trusted Web Activity)

Open this folder (`android-pwa`) in Android Studio and build a debug APK.

## Change the URL (if needed)
Edit:
- `app/src/main/res/values/strings.xml` → `launch_url`

## Package name
Default: `com.fullcalculus.app`
Change in:
- `app/build.gradle` → `applicationId`
- `app/src/main/AndroidManifest.xml` (package is inferred from namespace)
- `app/src/main/java/com/fullcalculus/app/LauncherActivity.java` (package path)

## Notes
- This uses a Trusted Web Activity (TWA). For full-screen mode without browser UI, you must host the Digital Asset Links file on your domain.
- The repo includes `.well-known/assetlinks.json` with a placeholder fingerprint. You must replace it and deploy it on `https://full-calculus.vercel.app/.well-known/assetlinks.json`.

### Get SHA-256 fingerprint
Run from `android-pwa/`:
```
gradlew signingReport
```
Use the **SHA-256** value under `debug` (or your release key).

## Build
- Build → Build Bundle(s) / APK(s) → Build APK(s)

