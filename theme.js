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
})();
