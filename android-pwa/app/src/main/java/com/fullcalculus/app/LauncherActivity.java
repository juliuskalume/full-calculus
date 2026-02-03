package com.fullcalculus.app;

import android.app.Activity;
import android.net.Uri;
import android.os.Bundle;
import androidx.browser.customtabs.CustomTabsIntent;
import androidx.browser.trusted.TrustedWebActivityIntentBuilder;
import androidx.core.content.ContextCompat;

public class LauncherActivity extends Activity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    Uri uri = Uri.parse(getString(R.string.launch_url));
    TrustedWebActivityIntentBuilder builder = new TrustedWebActivityIntentBuilder(uri)
        .setToolbarColor(ContextCompat.getColor(this, R.color.colorPrimary));
    CustomTabsIntent intent = builder.build();
    intent.launchUrl(this, uri);
    finish();
  }
}
