/* =========================================================
   MUSIC.JS
   Handles background music playback.
   ---------------------------------------------------------
   HOW TO REPLACE THE SONG:
   Put an mp3 file at assets/music/our-song.mp3
   (or edit the <source> path in index.html).
   Autoplay is attempted on load but most browsers block it
   until the user interacts with the page — the floating
   button lets them start it manually either way.
   ========================================================= */

(function () {
  "use strict";

  const audio = document.getElementById("bg-music");
  const toggleBtn = document.getElementById("music-toggle");
  const label = toggleBtn ? toggleBtn.querySelector(".music-label") : null;
  const icon = toggleBtn ? toggleBtn.querySelector(".music-icon") : null;

  let isPlaying = false;
  let hasAudioSource = false;

  function setPlayingUI(playing) {
    isPlaying = playing;
    if (!toggleBtn) return;
    toggleBtn.classList.toggle("playing", playing);
    if (label) label.textContent = playing ? "Pause Our Song" : "Play Our Song";
    if (icon) icon.textContent = playing ? "🎶" : "🎵";
    toggleBtn.setAttribute(
      "aria-label",
      playing ? "Pause our song" : "Play our song"
    );
  }

  function tryAutoplay() {
    if (!audio) return;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setPlayingUI(true))
        .catch(() => {
          // Autoplay blocked — normal in most browsers.
          setPlayingUI(false);
        });
    }
  }

  if (toggleBtn && audio) {
    toggleBtn.addEventListener("click", () => {
      if (isPlaying) {
        audio.pause();
        setPlayingUI(false);
      } else {
        audio.play().then(() => setPlayingUI(true)).catch(() => {
          setPlayingUI(false);
        });
      }
    });

    // Gracefully handle a missing/placeholder audio file
    audio.addEventListener("error", () => {
      hasAudioSource = false;
      toggleBtn.setAttribute("title", "Add your song at assets/music/our-song.mp3");
    });

    window.addEventListener("load", () => {
      tryAutoplay();
    });
  }
})();
