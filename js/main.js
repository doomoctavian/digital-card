/* =========================================================
   MAIN.JS
   Orchestrates: welcome -> content reveal, scroll-in animations,
   and a delayed welcome heart-rain moment.
   ========================================================= */

(function () {
  "use strict";

  const enterBtn = document.getElementById("enter-btn");
  const mainContent = document.getElementById("main-content");
  const welcomeSection = document.getElementById("welcome");

  if (enterBtn && mainContent) {
    enterBtn.addEventListener("click", () => {
      mainContent.classList.add("revealed");
      mainContent.scrollIntoView({ behavior: "smooth", block: "start" });

      // A little celebratory heart rain when the gift is "opened"
      if (window.__triggerHeartRain) {
        setTimeout(() => window.__triggerHeartRain(20), 500);
      }

      // Try starting music on this clear user gesture (helps with autoplay policies)
      const audio = document.getElementById("bg-music");
      const toggleBtn = document.getElementById("music-toggle");
      if (audio && audio.paused) {
        audio.play().then(() => {
          if (toggleBtn) {
            toggleBtn.classList.add("playing");
            const label = toggleBtn.querySelector(".music-label");
            const icon = toggleBtn.querySelector(".music-icon");
            if (label) label.textContent = "Pause Our Song";
            if (icon) icon.textContent = "🎶";
          }
        }).catch(() => {});
      }
    });
  }

  // Reveal content immediately if JS somehow loads late / for keyboard users
  // tabbing past the button without clicking — content still reachable.
  if (mainContent) {
    mainContent.style.opacity = mainContent.style.opacity || "";
  }

  /* -------------------------------------------------------
     Scroll-reveal for timeline items & reason cards
     ------------------------------------------------------- */
  const revealTargets = () =>
    document.querySelectorAll(".timeline-item, .reason-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  function observeAll() {
    revealTargets().forEach((el) => observer.observe(el));
  }

  // Elements are injected by messages.js which runs before this script
  // (script order in index.html), so DOM should be ready by now.
  document.addEventListener("DOMContentLoaded", observeAll);
  // Fallback in case DOMContentLoaded already fired
  if (document.readyState !== "loading") observeAll();

  /* -------------------------------------------------------
     A warm heart-rain moment shortly after page load, so the
     site feels alive even before scrolling starts.
     ------------------------------------------------------- */
  window.addEventListener("load", () => {
    setTimeout(() => {
      if (window.__triggerHeartRain) window.__triggerHeartRain(10);
    }, 1200);
  });
})();
