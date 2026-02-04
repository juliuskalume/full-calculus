package com.fullcalculus.app;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.net.NetworkRequest;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.tasks.Task;

import org.json.JSONObject;

public class MainActivity extends AppCompatActivity {
  private WebView webView;
  private GoogleSignInClient signInClient;
  private ActivityResultLauncher<Intent> signInLauncher;
  private ConnectivityManager.NetworkCallback networkCallback;

  @SuppressLint("SetJavaScriptEnabled")
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    webView = findViewById(R.id.webview);
    webView.addJavascriptInterface(new AuthBridge(), "AndroidAuth");
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
      public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
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
      public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
        if (request != null && request.isForMainFrame()) {
          loadOfflinePage();
        }
      }
    });
    webView.setWebChromeClient(new WebChromeClient());

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

    if (isOnline()) {
      loadLaunchUrl();
    } else {
      loadOfflinePage();
    }

    registerNetworkCallback();
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

  private boolean isOnline() {
    try {
      ConnectivityManager cm = (ConnectivityManager) getSystemService(CONNECTIVITY_SERVICE);
      if (cm == null) return false;
      Network network = cm.getActiveNetwork();
      if (network == null) return false;
      NetworkCapabilities caps = cm.getNetworkCapabilities(network);
      if (caps == null) return false;
      return caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET);
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
        public void onAvailable(Network network) {
          runOnUiThread(() -> loadLaunchUrl());
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
  public void onBackPressed() {
    if (webView != null) {
      String currentUrl = webView.getUrl();
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
    public void signInWithGoogle() {
      runOnUiThread(() -> startGoogleSignIn());
    }

    @JavascriptInterface
    public void exitApp() {
      runOnUiThread(() -> finish());
    }

    @JavascriptInterface
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
    public void openOfflineMode() {
      runOnUiThread(() -> loadLaunchUrl());
    }
  }
}
