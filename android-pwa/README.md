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
- If you stay on `full-calculus.vercel.app`, add your assetlinks.json there when you are ready.

## Build
- Build → Build Bundle(s) / APK(s) → Build APK(s)

