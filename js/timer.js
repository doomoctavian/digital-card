/* =========================================================
   TIMER.JS
   Live "time together" counter.
   ---------------------------------------------------------
   HOW TO EDIT: change RELATIONSHIP_START_DATE below to the
   date your relationship began, in "YYYY-MM-DDTHH:mm:ss" format.
   ========================================================= */

(function () {
  "use strict";

  // ---- EDIT ME: your relationship start date ----
  const RELATIONSHIP_START_DATE = new Date("2025-11-27T00:00:00");

  const daysEl = document.getElementById("count-days");
  const hoursEl = document.getElementById("count-hours");
  const minutesEl = document.getElementById("count-minutes");
  const secondsEl = document.getElementById("count-seconds");

  function updateCounter() {
    if (!daysEl) return;
    const now = new Date();
    let diff = now - RELATIONSHIP_START_DATE;
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = days.toLocaleString();
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCounter();
  setInterval(updateCounter, 1000);
})();
