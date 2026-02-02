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
})();
