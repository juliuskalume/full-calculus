(function () {
  const applyTheme = () => {
    const html = document.documentElement;
    let prefs = {};
    try {
      prefs = JSON.parse(localStorage.getItem("fc_prefs") || "{}");
    } catch {
      prefs = {};
    }

    let darkPref = prefs?.darkMode;

    if (darkPref !== true && darkPref !== false) {
      const legacy = localStorage.getItem("fc_dark");
      if (legacy === "1" || legacy === "0") {
        darkPref = legacy === "1";
        prefs.darkMode = darkPref;
        try {
          localStorage.setItem("fc_prefs", JSON.stringify(prefs));
          localStorage.removeItem("fc_dark");
        } catch {
          // ignore
        }
      }
    }

    if (darkPref === true) {
      html.classList.add("dark");
      html.classList.remove("light");
    } else if (darkPref === false) {
      html.classList.remove("dark");
      html.classList.add("light");
    } else {
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        html.classList.add("dark");
        html.classList.remove("light");
      } else {
        html.classList.remove("dark");
        html.classList.add("light");
      }
    }
  };

  applyTheme();

  const registerServiceWorker = () => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    if (window.location.protocol === "file:") {
      return;
    }

    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {
        // ignore registration failures
      });
    });
  };

  registerServiceWorker();

  const initPageLoader = () => {
    const LOADER_ID = "fc-page-loader";
    const STYLE_ID = "fc-page-loader-style";

    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.textContent = `
        #${LOADER_ID} {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f6f8;
          transition: opacity 0.2s ease;
        }
        #${LOADER_ID}.hidden {
          opacity: 0;
          pointer-events: none;
        }
        #${LOADER_ID} .fc-loader-ring {
          width: 42px;
          height: 42px;
          border-radius: 9999px;
          border: 4px solid rgba(0, 0, 0, 0.12);
          border-top-color: #0df26c;
          animation: fc-spin 0.8s linear infinite;
        }
        @keyframes fc-spin {
          to { transform: rotate(360deg); }
        }
        .dark #${LOADER_ID} {
          background: #101622;
        }
        .dark #${LOADER_ID} .fc-loader-ring {
          border-color: rgba(255, 255, 255, 0.18);
          border-top-color: #0df26c;
        }
      `;
      document.head.appendChild(style);
    }

    const create = () => {
      if (document.getElementById(LOADER_ID)) return;
      const loader = document.createElement("div");
      loader.id = LOADER_ID;
      loader.innerHTML = `<div class="fc-loader-ring" aria-label="Loading"></div>`;
      document.body.appendChild(loader);
    };

    if (document.body) {
      create();
    } else {
      document.addEventListener("DOMContentLoaded", create, { once: true });
    }

    const show = () => {
      const el = document.getElementById(LOADER_ID);
      if (el) el.classList.remove("hidden");
    };
    const hide = () => {
      const el = document.getElementById(LOADER_ID);
      if (el) el.classList.add("hidden");
    };

    window.addEventListener("load", hide);
    window.addEventListener("pageshow", (e) => {
      if (e.persisted) hide();
    });
    window.addEventListener("beforeunload", show);
  };

  initPageLoader();

  const initComingSoonModal = () => {
    const MODAL_ID = "fc-coming-soon-modal";
    const STYLE_ID = "fc-coming-soon-style";

    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.textContent = `
        #${MODAL_ID} {
          position: fixed;
          inset: 0;
          z-index: 9998;
          display: none;
        }
        #${MODAL_ID}.show {
          display: flex;
        }
        #${MODAL_ID} .fc-grid {
          background-image: radial-gradient(circle, rgba(226,232,240,0.9) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .dark #${MODAL_ID} .fc-grid {
          background-image: radial-gradient(circle, rgba(30,41,59,0.9) 1px, transparent 1px);
        }
      `;
      document.head.appendChild(style);
    }

    const ensure = () => {
      if (document.getElementById(MODAL_ID)) return;
      const wrap = document.createElement("div");
      wrap.id = MODAL_ID;
      wrap.innerHTML = `
        <div class="absolute inset-0 fc-grid opacity-50 pointer-events-none"></div>
        <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
        <div class="relative z-10 w-full flex items-center justify-center p-5">
          <div class="relative w-full max-w-[340px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center text-center p-6 gap-6">
            <button
              type="button"
              data-fc-close
              class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              aria-label="Close"
            >
              <span class="material-symbols-outlined">close</span>
            </button>
            <div class="relative w-full flex items-center justify-center pt-2">
              <span class="absolute top-0 left-8 material-symbols-outlined text-yellow-400 text-xl animate-bounce" style="animation-delay: 0.1s;">star</span>
              <span class="absolute top-10 right-10 material-symbols-outlined text-primary text-sm animate-pulse">star</span>
              <span class="absolute bottom-2 left-12 material-symbols-outlined text-primary/40 text-xs rotate-12">pentagon</span>
              <div class="relative z-10 w-40 h-40 bg-contain bg-center bg-no-repeat" id="fc-coming-soon-hero"></div>
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-0"></div>
            </div>
            <div class="flex flex-col items-center gap-3 w-full">
              <h2 id="fc-coming-soon-title" class="text-2xl font-bold text-primary leading-tight tracking-tight">Coming Soon!</h2>
              <p id="fc-coming-soon-body" class="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed">
                We're still perfecting this part of the path.
              </p>
            </div>
            <div class="flex flex-col w-full gap-3 mt-2">
              <button
                type="button"
                data-fc-primary
                class="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold leading-normal tracking-wide shadow-lg shadow-primary/25 active:scale-[0.98]"
              >
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                  <span class="material-symbols-outlined">notifications_active</span>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 group-hover:translate-x-full ease">Notify Me</span>
                <span class="relative invisible">Notify Me</span>
              </button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(wrap);
    };

    const show = (options = {}) => {
      ensure();
      const modal = document.getElementById(MODAL_ID);
      if (!modal) return;
      const title = modal.querySelector("#fc-coming-soon-title");
      const body = modal.querySelector("#fc-coming-soon-body");
      const hero = modal.querySelector("#fc-coming-soon-hero");
      const closeBtn = modal.querySelector("[data-fc-close]");
      const primaryBtn = modal.querySelector("[data-fc-primary]");

      if (title) title.textContent = options.title || "Coming Soon!";
      if (body) body.innerHTML = options.message || "We're still perfecting this part of the path.";
      if (hero) {
        const img = options.image || "icons/apologetic-fox.png";
        hero.style.backgroundImage = `url('${img}')`;
      }

      const onClose = () => {
        modal.classList.remove("show");
        document.body.classList.remove("overflow-hidden");
      };

      const onPrimary = () => {
        if (typeof options.onPrimary === "function") {
          options.onPrimary();
          onClose();
          return;
        }
        try {
          const prefs = JSON.parse(localStorage.getItem("fc_prefs") || "{}");
          prefs.sound = prefs.sound !== false ? prefs.sound : true;
          prefs.motivation = prefs.motivation !== false ? prefs.motivation : true;
          prefs.darkMode = prefs.darkMode;
          localStorage.setItem("fc_prefs", JSON.stringify(prefs));
        } catch {
          // ignore
        }
        try {
          const state = JSON.parse(localStorage.getItem("fc_state") || "{}");
          state.notifications = true;
          localStorage.setItem("fc_state", JSON.stringify(state));
        } catch {
          // ignore
        }
        if (window.FCPush?.requestPermissionAndSubscribe) {
          window.FCPush.requestPermissionAndSubscribe().catch(() => {});
        }
        onClose();
      };

      const onSecondary = () => {
        if (typeof options.onSecondary === "function") {
          options.onSecondary();
        }
        onClose();
      };

      closeBtn?.addEventListener("click", onClose, { once: true });
      primaryBtn?.addEventListener("click", onPrimary, { once: true });
      // no secondary button

      modal.classList.add("show");
      document.body.classList.add("overflow-hidden");
    };

    window.FCUI = window.FCUI || {};
    window.FCUI.showComingSoon = show;
  };

  const whenReady = () => initComingSoonModal();
  if (document.body) {
    whenReady();
  } else {
    document.addEventListener("DOMContentLoaded", whenReady, { once: true });
  }

  const initHaptics = () => {
    const shouldVibrate = () => {
      try {
        const prefs = JSON.parse(localStorage.getItem("fc_prefs") || "{}");
        return prefs.vibration !== false;
      } catch {
        return true;
      }
    };

    document.addEventListener(
      "click",
      (event) => {
        if (!shouldVibrate()) return;
        if (!navigator.vibrate) return;
        const target = event.target?.closest?.(
          "button, a, [role='button'], input[type='button'], input[type='submit'], label, summary, [onclick], .press"
        );
        if (!target) return;
        navigator.vibrate(20);
      },
      { passive: true }
    );
  };

  initHaptics();
})();
