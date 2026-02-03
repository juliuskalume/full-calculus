# Android Studio project (WebView wrapper)

Open this folder (`android-pwa`) in Android Studio and build a debug APK.

## Change the URL (if needed)
Edit:
- `app/src/main/res/values/strings.xml` → `launch_url`

## Package name
Default: `com.fullcalculus.app`
Change in:
- `app/build.gradle` → `applicationId`
- `app/src/main/AndroidManifest.xml` (package is inferred from namespace)
- `app/src/main/java/com/fullcalculus/app/MainActivity.java` (package path)

## Notes
- This is a WebView wrapper. It renders your web app full-screen without a URL bar.
- Android 13+ requires notification permission at the app level. You can request it in-app if needed.
- WebView does **not** support Web Push; keep that in mind if notifications are critical.

## Build
- Build → Build Bundle(s) / APK(s) → Build APK(s)

