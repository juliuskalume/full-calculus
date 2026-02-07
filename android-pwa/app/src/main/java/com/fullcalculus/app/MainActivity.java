package com.fullcalculus.app;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.Manifest;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.net.NetworkInfo;
import android.net.NetworkRequest;
import android.net.Uri;
import android.os.Bundle;
import android.os.Build;
import android.content.SharedPreferences;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.tasks.Task;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.interstitial.InterstitialAd;
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback;
import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.rewarded.RewardedAd;
import com.google.android.gms.ads.rewarded.RewardedAdLoadCallback;
import com.google.firebase.messaging.FirebaseMessaging;

import org.json.JSONObject;
import android.content.pm.PackageManager;

public class MainActivity extends AppCompatActivity {
  private WebView webView;
  private GoogleSignInClient signInClient;
  private ActivityResultLauncher<Intent> signInLauncher;
  private ActivityResultLauncher<String> notificationPermissionLauncher;
  private ConnectivityManager.NetworkCallback networkCallback;
  private SharedPreferences prefs;
  private static final String PREFS_NAME = "fc_prefs";
  private static final String KEY_HAS_LOADED = "hasLoadedOnce";
  private static final String KEY_OFFLINE_MODE = "offlineModeEnabled";
  private static final String KEY_FCM_TOKEN = "fcm_token";
  private static final String KEY_FCM_DEVICE = "fcm_device_id";
  private static final String KEY_NOTIF_PROMPTED = "notifPrompted";
  private InterstitialAd interstitialAd;
  private RewardedAd rewardedAd;

  @SuppressLint("SetJavaScriptEnabled")
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    prefs = getSharedPreferences(PREFS_NAME, MODE_PRIVATE);

    webView = findViewById(R.id.webview);
    webView.addJavascriptInterface(new AuthBridge(), "AndroidAuth");
    webView.addJavascriptInterface(new FcmBridge(), "AndroidFcm");
    webView.addJavascriptInterface(new AdsBridge(), "AndroidAds");
    WebSettings settings = webView.getSettings();
    settings.setJavaScriptEnabled(true);
    settings.setDomStorageEnabled(true);
    settings.setDatabaseEnabled(true);
    settings.setLoadWithOverviewMode(true);
    settings.setUseWideViewPort(true);
    settings.setMediaPlaybackRequiresUserGesture(false);
    settings.setAllowFileAccess(true);
    settings.setAllowContentAccess(true);
    settings.setCacheMode(WebSettings.LOAD_DEFAULT);
    settings.setSupportZoom(false);
    settings.setBuiltInZoomControls(false);
    settings.setDisplayZoomControls(false);

    webView.setWebViewClient(new WebViewClient() {
      @Override
      public boolean shouldOverrideUrlLoading(@NonNull WebView view, @NonNull WebResourceRequest request) {
        Uri uri = request.getUrl();
        String scheme = uri.getScheme();
        if (scheme != null && (scheme.equals("http") || scheme.equals("https"))) {
          return false;
        }
        try {
          Intent intent = new Intent(Intent.ACTION_VIEW, uri);
          startActivity(intent);
        } catch (Exception ignored) {
          // ignore
        }
        return true;
      }

      @Override
      public void onReceivedError(@NonNull WebView view, @NonNull WebResourceRequest request, @NonNull WebResourceError error) {
        if (request != null && request.isForMainFrame()) {
          if (!isOfflineModeEnabled()) {
            loadOfflinePage();
          }
        }
      }

      @Override
      public void onPageFinished(@NonNull WebView view, @NonNull String url) {
        if (url != null && (url.startsWith("http://") || url.startsWith("https://"))) {
          markLoadedOnce();
          syncFcmToWeb();
        }
      }
    });
    webView.setWebChromeClient(new WebChromeClient());

    @SuppressWarnings("deprecation")
    GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
        .requestIdToken(getString(R.string.default_web_client_id))
        .requestEmail()
        .build();
    signInClient = GoogleSignIn.getClient(this, gso);
    signInLauncher = registerForActivityResult(new ActivityResultContracts.StartActivityForResult(), result -> {
      Task<GoogleSignInAccount> task = GoogleSignIn.getSignedInAccountFromIntent(result.getData());
      try {
        GoogleSignInAccount account = task.getResult(ApiException.class);
        if (account != null) {
          String idToken = account.getIdToken();
          String accessToken = account.getServerAuthCode();
          sendAuthToWeb(idToken, accessToken);
        } else {
          sendAuthError("Google sign-in failed.", null);
        }
      } catch (ApiException e) {
        sendAuthError("Google sign-in failed.", e);
      }
    });

    notificationPermissionLauncher = registerForActivityResult(
        new ActivityResultContracts.RequestPermission(),
        isGranted -> {
          if (isGranted) {
            fetchFcmToken();
          }
        }
    );

    initFcm();
    initAds();
    maybePromptNotifications();

    if (isOnline()) {
      loadLaunchUrl();
    } else if (!isOfflineModeEnabled() && !hasLoadedOnce()) {
      loadOfflinePage();
    } else {
      loadLaunchUrl();
    }

    registerNetworkCallback();
  }

  private void initFcm() {
    fetchFcmToken();
  }

  private void initAds() {
    try {
      MobileAds.initialize(this);
      loadInterstitial();
      loadRewarded();
    } catch (Exception ignored) {
      // ignore
    }
  }

  private void loadInterstitial() {
    try {
      String adUnit = getString(R.string.admob_interstitial_id);
      AdRequest request = new AdRequest.Builder().build();
      InterstitialAd.load(
          this,
          adUnit,
          request,
          new InterstitialAdLoadCallback() {
            @Override
            public void onAdLoaded(@NonNull InterstitialAd ad) {
              interstitialAd = ad;
            }

            @Override
            public void onAdFailedToLoad(@NonNull LoadAdError error) {
              interstitialAd = null;
            }
          }
      );
    } catch (Exception ignored) {
      interstitialAd = null;
    }
  }

  private void loadRewarded() {
    try {
      String adUnit = getString(R.string.admob_rewarded_id);
      AdRequest request = new AdRequest.Builder().build();
      RewardedAd.load(
          this,
          adUnit,
          request,
          new RewardedAdLoadCallback() {
            @Override
            public void onAdLoaded(@NonNull RewardedAd ad) {
              rewardedAd = ad;
            }

            @Override
            public void onAdFailedToLoad(@NonNull LoadAdError error) {
              rewardedAd = null;
            }
          }
      );
    } catch (Exception ignored) {
      rewardedAd = null;
    }
  }

  private String toAbsoluteUrl(String nextUrl) {
    if (nextUrl == null || nextUrl.isEmpty()) return getString(R.string.launch_url);
    if (nextUrl.startsWith("http://") || nextUrl.startsWith("https://") || nextUrl.startsWith("file://")) {
      return nextUrl;
    }
    String base = getString(R.string.launch_url);
    if (!base.endsWith("/")) base = base + "/";
    String trimmed = nextUrl.startsWith("/") ? nextUrl.substring(1) : nextUrl;
    return base + trimmed;
  }

  private void navigateAfterAd(String nextUrl) {
    String url = toAbsoluteUrl(nextUrl);
    runOnUiThread(() -> webView.loadUrl(url));
  }

  private void showInterstitial(String nextUrl) {
    if (interstitialAd == null) {
      navigateAfterAd(nextUrl);
      loadInterstitial();
      return;
    }
    interstitialAd.setFullScreenContentCallback(new FullScreenContentCallback() {
      @Override
      public void onAdDismissedFullScreenContent() {
        interstitialAd = null;
        loadInterstitial();
        navigateAfterAd(nextUrl);
      }

      @Override
      public void onAdFailedToShowFullScreenContent(@NonNull com.google.android.gms.ads.AdError adError) {
        interstitialAd = null;
        loadInterstitial();
        navigateAfterAd(nextUrl);
      }
    });
    interstitialAd.show(this);
  }

  private void showRewarded(String nextUrl) {
    if (rewardedAd == null) {
      navigateAfterAd(nextUrl);
      loadRewarded();
      return;
    }
    rewardedAd.setFullScreenContentCallback(new FullScreenContentCallback() {
      @Override
      public void onAdDismissedFullScreenContent() {
        rewardedAd = null;
        loadRewarded();
        navigateAfterAd(nextUrl);
      }

      @Override
      public void onAdFailedToShowFullScreenContent(@NonNull com.google.android.gms.ads.AdError adError) {
        rewardedAd = null;
        loadRewarded();
        navigateAfterAd(nextUrl);
      }
    });
    rewardedAd.show(this, rewardItem -> markRewardEarned());
  }

  private void markRewardEarned() {
    try {
      String js = "try{localStorage.setItem('fc_reward_refill','1');}catch(e){}";
      runOnUiThread(() -> webView.evaluateJavascript(js, null));
    } catch (Exception ignored) {
      // ignore
    }
  }

  private String ensureDeviceId() {
    try {
      if (prefs == null) return "";
      String deviceId = prefs.getString(KEY_FCM_DEVICE, "");
      if (deviceId == null || deviceId.isEmpty()) {
        deviceId = "dev_" + System.currentTimeMillis();
        prefs.edit().putString(KEY_FCM_DEVICE, deviceId).apply();
      }
      return deviceId;
    } catch (Exception ignored) {
      return "";
    }
  }

  private void fetchFcmToken() {
    try {
      FirebaseMessaging.getInstance().getToken().addOnCompleteListener(task -> {
        if (!task.isSuccessful()) return;
        String token = task.getResult();
        if (token == null || token.isEmpty()) return;
        if (prefs != null) {
          prefs.edit().putString(KEY_FCM_TOKEN, token).apply();
          ensureDeviceId();
        }
        syncFcmToWeb();
      });
    } catch (Exception ignored) {
      // ignore
    }
  }

  private void maybePromptNotifications() {
    try {
      if (Build.VERSION.SDK_INT < Build.VERSION_CODES.TIRAMISU) return;
      if (prefs == null) return;
      boolean prompted = prefs.getBoolean(KEY_NOTIF_PROMPTED, false);
      if (prompted) return;
      prefs.edit().putBoolean(KEY_NOTIF_PROMPTED, true).apply();
      requestNotificationPermission();
    } catch (Exception ignored) {
      // ignore
    }
  }

  private void requestNotificationPermission() {
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.TIRAMISU) return;
    if (ContextCompat.checkSelfPermission(this, Manifest.permission.POST_NOTIFICATIONS)
        == PackageManager.PERMISSION_GRANTED) {
      return;
    }
    if (notificationPermissionLauncher != null) {
      notificationPermissionLauncher.launch(Manifest.permission.POST_NOTIFICATIONS);
    }
  }

  private void syncFcmToWeb() {
    try {
      if (webView == null || prefs == null) return;
      String token = prefs.getString(KEY_FCM_TOKEN, "");
      if (token == null || token.isEmpty()) return;
      String deviceId = ensureDeviceId();
      String safeToken = JSONObject.quote(token);
      String safeDevice = JSONObject.quote(deviceId == null ? "" : deviceId);
      String js = "window.fcNativeFcmToken && window.fcNativeFcmToken(" + safeToken + "," + safeDevice + ");";
      runOnUiThread(() -> webView.evaluateJavascript(js, null));
    } catch (Exception ignored) {
      // ignore
    }
  }

  private void startGoogleSignIn() {
    if (signInClient == null || signInLauncher == null) {
      sendAuthError("Google sign-in is not available.", null);
      return;
    }
    signInLauncher.launch(signInClient.getSignInIntent());
  }

  private void sendAuthToWeb(String idToken, String accessToken) {
    try {
      String safeId = JSONObject.quote(idToken == null ? "" : idToken);
      String safeAccess = JSONObject.quote(accessToken == null ? "" : accessToken);
      String js = "window.fcNativeAuth && window.fcNativeAuth(" + safeId + "," + safeAccess + ");";
      runOnUiThread(() -> webView.evaluateJavascript(js, null));
    } catch (Exception ignored) {
      // ignore
    }
  }

  private void sendAuthError(String message, Exception error) {
    try {
      String base = message == null ? "Sign-in failed." : message;
      String detail = "";
      if (error instanceof ApiException) {
        int code = ((ApiException) error).getStatusCode();
        detail = " (code: " + code + ")";
      } else if (error != null) {
        detail = " (" + error.getClass().getSimpleName() + ")";
      }
      String safeMsg = JSONObject.quote(base + detail);
      String js = "window.fcNativeAuthError && window.fcNativeAuthError(" + safeMsg + ");";
      runOnUiThread(() -> webView.evaluateJavascript(js, null));
    } catch (Exception ignored) {
      // ignore
    }
  }

  private void loadLaunchUrl() {
    webView.loadUrl(getString(R.string.launch_url));
  }

  private void loadOfflinePage() {
    webView.loadUrl("file:///android_asset/offline.html");
  }

  private boolean isOfflineModeEnabled() {
    try {
      return prefs != null && prefs.getBoolean(KEY_OFFLINE_MODE, false);
    } catch (Exception ignored) {
      return false;
    }
  }

  private void setOfflineModeEnabled(boolean enabled) {
    try {
      if (prefs != null) {
        prefs.edit().putBoolean(KEY_OFFLINE_MODE, enabled).apply();
      }
    } catch (Exception ignored) {
      // ignore
    }
  }

  private boolean hasLoadedOnce() {
    try {
      return prefs != null && prefs.getBoolean(KEY_HAS_LOADED, false);
    } catch (Exception ignored) {
      return false;
    }
  }

  private void markLoadedOnce() {
    try {
      if (prefs != null) {
        prefs.edit().putBoolean(KEY_HAS_LOADED, true).apply();
      }
    } catch (Exception ignored) {
      // ignore
    }
  }

  private boolean isOnline() {
    try {
      ConnectivityManager cm = (ConnectivityManager) getSystemService(CONNECTIVITY_SERVICE);
      if (cm == null) return false;
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
        Network network = cm.getActiveNetwork();
        if (network == null) return false;
        NetworkCapabilities caps = cm.getNetworkCapabilities(network);
        if (caps == null) return false;
        return caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET);
      }
      @SuppressWarnings("deprecation")
      NetworkInfo info = cm.getActiveNetworkInfo();
      return info != null && info.isConnected();
    } catch (Exception ignored) {
      return false;
    }
  }

  private void registerNetworkCallback() {
    try {
      ConnectivityManager cm = (ConnectivityManager) getSystemService(CONNECTIVITY_SERVICE);
      if (cm == null) return;
      NetworkRequest request = new NetworkRequest.Builder()
          .addCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
          .build();
      networkCallback = new ConnectivityManager.NetworkCallback() {
        @Override
        public void onAvailable(@NonNull Network network) {
          runOnUiThread(() -> {
            String current = webView != null ? webView.getUrl() : "";
            if (current != null && current.startsWith("file:///android_asset/offline.html")) {
              loadLaunchUrl();
            }
          });
        }
      };
      cm.registerNetworkCallback(request, networkCallback);
    } catch (Exception ignored) {
      // ignore
    }
  }

  @Override
  protected void onDestroy() {
    super.onDestroy();
    try {
      ConnectivityManager cm = (ConnectivityManager) getSystemService(CONNECTIVITY_SERVICE);
      if (cm != null && networkCallback != null) {
        cm.unregisterNetworkCallback(networkCallback);
      }
    } catch (Exception ignored) {
      // ignore
    }
  }

  @Override
  @SuppressWarnings("deprecation")
  public void onBackPressed() {
    if (webView != null) {
      String currentUrl = webView.getUrl();
      if (shouldBackToPath(currentUrl)) {
        webView.loadUrl(getPathUrl());
        return;
      }
      if (isHomeUrl(currentUrl)) {
        try {
          webView.evaluateJavascript("window.fcShowExitPrompt && window.fcShowExitPrompt();", null);
          return;
        } catch (Exception ignored) {
          // fall through
        }
      }
      if (webView.canGoBack()) {
        webView.goBack();
        return;
      }
      // Trigger in-app exit confirmation when there's no history
      try {
        webView.evaluateJavascript("window.fcShowExitPrompt && window.fcShowExitPrompt();", null);
        return;
      } catch (Exception ignored) {
        // fall through
      }
    }
    super.onBackPressed();
  }

  @Override
  protected void onResume() {
    super.onResume();
    syncFcmToWeb();
  }

  private boolean shouldBackToPath(String url) {
    if (url == null) return false;
    try {
      Uri uri = Uri.parse(url);
      String path = uri.getPath();
      if (path == null) return false;
      return path.endsWith("/practice.html")
          || path.endsWith("/leaderboard.html")
          || path.endsWith("/notes.html")
          || path.endsWith("/profile.html");
    } catch (Exception ignored) {
      return false;
    }
  }

  private String getPathUrl() {
    String base = getString(R.string.launch_url);
    if (!base.endsWith("/")) base = base + "/";
    return base + "path.html";
  }

  private boolean isHomeUrl(String url) {
    if (url == null) return false;
    try {
      Uri uri = Uri.parse(url);
      String path = uri.getPath();
      if (path == null || path.equals("/") || path.equals("/index.html")) return true;
      return path.endsWith("/path.html");
    } catch (Exception ignored) {
      return false;
    }
  }

  private class AuthBridge {
    @JavascriptInterface
    @SuppressWarnings("unused")
    public void signInWithGoogle() {
      runOnUiThread(() -> startGoogleSignIn());
    }

    @JavascriptInterface
    @SuppressWarnings("unused")
    public void exitApp() {
      runOnUiThread(() -> finish());
    }

    @JavascriptInterface
    @SuppressWarnings("unused")
    public void retryConnection() {
      runOnUiThread(() -> {
        if (isOnline()) {
          loadLaunchUrl();
        } else {
          loadOfflinePage();
        }
      });
    }

    @JavascriptInterface
    @SuppressWarnings("unused")
    public void openOfflineMode() {
      runOnUiThread(() -> loadLaunchUrl());
    }

    @JavascriptInterface
    @SuppressWarnings("unused")
    public void setOfflineMode(boolean enabled) {
      runOnUiThread(() -> setOfflineModeEnabled(enabled));
    }
  }

  private class FcmBridge {
    @JavascriptInterface
    @SuppressWarnings("unused")
    public String getToken() {
      try {
        if (prefs == null) return "";
        String token = prefs.getString(KEY_FCM_TOKEN, "");
        return token == null ? "" : token;
      } catch (Exception ignored) {
        return "";
      }
    }

    @JavascriptInterface
    @SuppressWarnings("unused")
    public String getDeviceId() {
      return ensureDeviceId();
    }

    @JavascriptInterface
    @SuppressWarnings("unused")
    public void requestPermission() {
      runOnUiThread(() -> requestNotificationPermission());
    }
  }

  private class AdsBridge {
    @JavascriptInterface
    @SuppressWarnings("unused")
    public void showAd(String type, String nextUrl) {
      runOnUiThread(() -> {
        String kind = type == null ? "" : type.toLowerCase();
        if (kind.contains("reward")) {
          showRewarded(nextUrl);
        } else {
          showInterstitial(nextUrl);
        }
      });
    }
  }
}
