(function () {
  const SOUND_FILES = {
    correct: "sounds/correct_answer.mp3",
    wrong: "sounds/wrong_answer.mp3",
    lives: "sounds/lives_lost.mp3",
    lessonComplete: "sounds/lesson_complete.mp3",
    testPassed: "sounds/test_passed_level_complete.mp3",
    closeConfirm: "sounds/lesson_test_app_close_confirmation.mp3",
  };

  const audioMap = {};
  let unlocked = false;

  function loadPrefs() {
    try {
      return JSON.parse(localStorage.getItem("fc_prefs") || "{}");
    } catch {
      return {};
    }
  }

  function isEnabled() {
    const prefs = loadPrefs();
    return prefs.sound !== false;
  }

  function getAudio(name) {
    if (!audioMap[name]) {
      const src = SOUND_FILES[name];
      if (!src) return null;
      const audio = new Audio(src);
      audio.preload = "auto";
      audioMap[name] = audio;
    }
    return audioMap[name];
  }

  function play(name, options) {
    if (!isEnabled()) return;
    const audio = getAudio(name);
    if (!audio) return;
    const volume = typeof options?.volume === "number" ? options.volume : 0.6;
    audio.volume = Math.min(1, Math.max(0, volume));
    try {
      audio.currentTime = 0;
    } catch {
      // ignore
    }
    const playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  }

  function unlock() {
    if (unlocked) return;
    unlocked = true;
    Object.keys(SOUND_FILES).forEach((key) => {
      const audio = getAudio(key);
      if (!audio) return;
      try {
        audio.muted = true;
        const p = audio.play();
        if (p && typeof p.then === "function") {
          p.then(() => {
            audio.pause();
            audio.currentTime = 0;
            audio.muted = false;
          }).catch(() => {
            audio.muted = false;
          });
        } else {
          audio.muted = false;
        }
      } catch {
        audio.muted = false;
      }
    });
  }

  document.addEventListener("pointerdown", unlock, { once: true, passive: true });
  document.addEventListener("keydown", unlock, { once: true });

  window.FCSound = {
    play,
    enabled: isEnabled,
    unlock,
  };
})();
