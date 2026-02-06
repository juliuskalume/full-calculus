package com.fullcalculus.app;

import android.content.Context;
import android.content.SharedPreferences;

import androidx.annotation.NonNull;

import com.google.firebase.messaging.FirebaseMessagingService;

public class FcmService extends FirebaseMessagingService {
  private static final String PREFS_NAME = "fc_prefs";
  private static final String KEY_FCM_TOKEN = "fcm_token";
  private static final String KEY_DEVICE_ID = "fcm_device_id";

  @Override
  public void onNewToken(@NonNull String token) {
    super.onNewToken(token);
    storeToken(token);
  }

  private void storeToken(String token) {
    try {
      SharedPreferences prefs = getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
      if (prefs == null) return;
      if (!prefs.contains(KEY_DEVICE_ID)) {
        String deviceId = "dev_" + System.currentTimeMillis();
        prefs.edit().putString(KEY_DEVICE_ID, deviceId).apply();
      }
      prefs.edit().putString(KEY_FCM_TOKEN, token).apply();
    } catch (Exception ignored) {
      // ignore
    }
  }
}
