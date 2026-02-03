package com.fullcalculus.app;

import android.app.Activity;
import android.content.ComponentName;
import android.net.Uri;
import android.os.Bundle;
import androidx.browser.customtabs.CustomTabsClient;
import androidx.browser.customtabs.CustomTabsIntent;
import androidx.browser.customtabs.CustomTabsServiceConnection;
import androidx.browser.customtabs.CustomTabsSession;
import androidx.browser.trusted.TrustedWebActivityIntent;
import androidx.browser.trusted.TrustedWebActivityIntentBuilder;
import androidx.core.content.ContextCompat;

public class LauncherActivity extends Activity {
  private CustomTabsSession session;
  private CustomTabsServiceConnection connection;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    connection = new CustomTabsServiceConnection() {
      @Override
      public void onCustomTabsServiceConnected(ComponentName name, CustomTabsClient client) {
        client.warmup(0L);
        session = client.newSession(null);
        launchTwa();
      }

      @Override
      public void onServiceDisconnected(ComponentName name) {
        session = null;
      }
    };
  }

  @Override
  protected void onStart() {
    super.onStart();
    boolean bound = CustomTabsClient.bindCustomTabsService(this, "com.android.chrome", connection);
    if (!bound) {
      launchFallback();
    }
  }

  @Override
  protected void onStop() {
    if (connection != null) {
      unbindService(connection);
    }
    super.onStop();
  }

  private void launchTwa() {
    Uri uri = Uri.parse(getString(R.string.launch_url));
    TrustedWebActivityIntentBuilder builder = new TrustedWebActivityIntentBuilder(uri);
    TrustedWebActivityIntent twaIntent = builder.build(session);
    twaIntent.getIntent().putExtra(CustomTabsIntent.EXTRA_TOOLBAR_COLOR,
        ContextCompat.getColor(this, R.color.colorPrimary));
    startActivity(twaIntent.getIntent());
    finish();
  }

  private void launchFallback() {
    Uri uri = Uri.parse(getString(R.string.launch_url));
    CustomTabsIntent intent = new CustomTabsIntent.Builder()
        .setToolbarColor(ContextCompat.getColor(this, R.color.colorPrimary))
        .build();
    intent.launchUrl(this, uri);
    finish();
  }
}
