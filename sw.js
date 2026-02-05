const STATIC_CACHE = "fc-static-v7";
const RUNTIME_CACHE = "fc-runtime-v2";
const IMAGE_CACHE = "fc-images-v1";

const PRECACHE_URLS = [
  "index.html",
  "login.html",
  "path.html",
  "active-lesson.html",
  "unit-test.html",
  "unit-test-pass.html",
  "unit-test-fail.html",
  "lesson-complete.html",
  "notes.html",
  "practice.html",
  "profile.html",
  "settings.html",
  "privacy.html",
  "terms.html",
  "offline.html",
  "manifest.webmanifest",
  "theme.js",
  "sound.js",
  "app.js",
  "state.js",
  "progress.js",
  "auth.js",
  "firebase-config.js",
  "engine.js",
  "content.js",
  "content-structure.js",
  "content-sections.js",
  "content-examples.js",
  "content-items.js",
  "content-tests.js",
  "fonts/DINNextRounded-Regular.woff2",
  "fonts/DINNextRounded-Regular.woff",
  "fonts/Feather-Bold.woff2",
  "fonts/Feather-Bold.woff",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apologetic-fox.png",
  "icons/exit-confirmation-avatar.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => ![STATIC_CACHE, RUNTIME_CACHE, IMAGE_CACHE].includes(key))
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match("offline.html")))
    );
    return;
  }

  const destination = request.destination;
  if (destination === "image") {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) =>
        cache.match(request).then((cached) => {
          const fetchPromise = fetch(request)
            .then((response) => {
              cache.put(request, response.clone());
              return response;
            })
            .catch(() => cached);
          return cached || fetchPromise;
        })
      )
    );
    return;
  }

  const matchRuntimeThenStatic = async () => {
    const runtime = await caches.open(RUNTIME_CACHE);
    const runtimeMatch = await runtime.match(request);
    if (runtimeMatch) return runtimeMatch;
    const staticCache = await caches.open(STATIC_CACHE);
    return staticCache.match(request);
  };

  if (destination === "script" || destination === "style" || destination === "font") {
    event.respondWith(
      matchRuntimeThenStatic().then((cached) => {
        const fetchPromise = fetch(request)
          .then((response) => {
            const copy = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
            return response;
          })
          .catch(() => cached);
        return cached || fetchPromise;
      })
    );
    return;
  }

  event.respondWith(
    matchRuntimeThenStatic().then((cached) => {
      const fetchPromise = fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});

self.addEventListener("push", (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch {
    data = { title: "Time to learn", body: event.data?.text?.() || "" };
  }

  const title = data.title || "Time to learn";
  const options = {
    body: data.body || "Open Full Calculus to keep your streak alive.",
    icon: data.icon || "icons/icon-192.png",
    badge: data.badge || "icons/icon-192.png",
    data: {
      url: data.url || "path.html",
    },
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = new URL(event.notification?.data?.url || "path.html", self.location.origin).href;

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === targetUrl && "focus" in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
      return undefined;
    })
  );
});
