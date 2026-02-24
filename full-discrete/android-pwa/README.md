# Android Studio project (WebView wrapper)

Open this folder (`android-pwa`) in Android Studio and build APK/AAB outputs.

## Change the URL (if needed)
Edit:
- `app/src/main/res/values/strings.xml` -> `launch_url`

## Package name
Default: `com.sentirax.discrete`
Configured in:
- `app/build.gradle` -> `namespace` and `applicationId`
- `app/src/main/java/com/sentirax/discrete/*.java` (package path)

## Firebase requirements
- Use the `full-discrete` Firebase project.
- Add a fresh `android-pwa/app/google-services.json` that matches package `com.sentirax.discrete`.
- If Google sign-in is used, add SHA-1/SHA-256 fingerprints for your debug and release keys in Firebase.

## Release signing / AAB pipeline
- Signing config reads `FULLDISCRETE_*` keys in `gradle.properties`.
- Build command (PowerShell): `./gradlew.bat bundleRelease`
- Output: `app/build/outputs/bundle/release/app-release.aab`

## Notes
- This is a WebView wrapper. It renders your web app full-screen without a URL bar.
- Android 13+ requires notification permission at app level.
- WebView does not support browser Web Push; this app uses native FCM instead.
