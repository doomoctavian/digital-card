/* =========================================================
   PARTICLES.JS
   Handles: cursor trail, ambient floating layer, heart rain
   All animation loops use requestAnimationFrame / CSS transforms
   for performance (GPU accelerated).
   ========================================================= */

(function () {
  "use strict";

  /* -------------------------------------------------------
     1. CURSOR TRAIL (sparkles / hearts / petals / stars)
     ------------------------------------------------------- */
  const canvas = document.getElementById("cursor-canvas");
  const isTouchDevice = window.matchMedia("(hover: none)").matches;

  if (canvas && !isTouchDevice) {
    const ctx = canvas.getContext("2d");
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resizeCanvas() {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const symbols = ["✨", "💗", "🌸", "⭐", "💫"];
    let trailParticles = [];
    let lastSpawn = 0;
    const SPAWN_INTERVAL = 40; // ms, throttles spawn rate for perf
    const MAX_PARTICLES = 60;

    function spawnParticle(x, y) {
      if (trailParticles.length >= MAX_PARTICLES) trailParticles.shift();
      trailParticles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -0.4 - Math.random() * 0.6,
        life: 1,
        size: 10 + Math.random() * 10,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        rotation: (Math.random() - 0.5) * 0.6
      });
    }

    window.addEventListener(
      "pointermove",
      (e) => {
        const now = performance.now();
        if (now - lastSpawn > SPAWN_INTERVAL) {
          spawnParticle(e.clientX, e.clientY);
          lastSpawn = now;
        }
      },
      { passive: true }
    );

    function animateTrail() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      trailParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.018;
        ctx.save();
        ctx.globalAlpha = Math.max(p.life, 0);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `${p.size}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      });
      trailParticles = trailParticles.filter((p) => p.life > 0);
      requestAnimationFrame(animateTrail);
    }
    requestAnimationFrame(animateTrail);
  }

  /* -------------------------------------------------------
     2. AMBIENT FLOATING LAYER (hearts, petals, sparkles, butterflies)
     ------------------------------------------------------- */
  const floatingLayer = document.getElementById("floating-layer");
  const floatingSymbols = ["💗", "🌸", "✨", "🦋", "💮", "🌷", "⭐"];

  function createFloatingItem() {
    if (!floatingLayer) return;
    const el = document.createElement("span");
    el.className = "floating-item";
    el.textContent =
      floatingSymbols[Math.floor(Math.random() * floatingSymbols.length)];

    const startX = Math.random() * 100;
    const size = 14 + Math.random() * 18;
    const duration = 12 + Math.random() * 10;
    const driftX = (Math.random() - 0.5) * 160;
    const driftRot = (Math.random() - 0.5) * 360;

    el.style.left = startX + "vw";
    el.style.bottom = "-40px";
    el.style.fontSize = size + "px";
    el.style.setProperty("--drift-x", driftX + "px");
    el.style.setProperty("--drift-rot", driftRot + "deg");
    el.style.animation = `driftUp ${duration}s linear forwards`;

    floatingLayer.appendChild(el);
    setTimeout(() => el.remove(), duration * 1000 + 500);
  }

  // Spawn ambient particles at a gentle interval (perf-friendly cadence)
  const AMBIENT_INTERVAL = 900;
  let ambientTimer = setInterval(createFloatingItem, AMBIENT_INTERVAL);

  // Pause ambient spawning when tab is hidden (saves CPU/battery)
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      clearInterval(ambientTimer);
    } else {
      ambientTimer = setInterval(createFloatingItem, AMBIENT_INTERVAL);
    }
  });

  /* -------------------------------------------------------
     3. HEART RAIN (occasional magical burst)
     ------------------------------------------------------- */
  const heartRainLayer = document.getElementById("heart-rain");
  const rainSymbols = ["💗", "💕", "💖", "🌸"];

  function triggerHeartRain(count = 26) {
    if (!heartRainLayer) return;
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const el = document.createElement("span");
        el.className = "floating-item";
        el.textContent =
          rainSymbols[Math.floor(Math.random() * rainSymbols.length)];
        const startX = Math.random() * 100;
        const size = 16 + Math.random() * 16;
        const duration = 4 + Math.random() * 3;
        const driftX = (Math.random() - 0.5) * 120;
        const driftRot = (Math.random() - 0.5) * 200;

        el.style.left = startX + "vw";
        el.style.top = "-40px";
        el.style.fontSize = size + "px";
        el.style.setProperty("--drift-x", driftX + "px");
        el.style.setProperty("--drift-rot", driftRot + "deg");
        el.style.animation = `fallDown ${duration}s ease-in forwards`;

        heartRainLayer.appendChild(el);
        setTimeout(() => el.remove(), duration * 1000 + 300);
      }, i * 90);
    }
  }

  // Trigger heart rain occasionally (every ~45s) + once shortly after entry
  window.__triggerHeartRain = triggerHeartRain;
  setInterval(() => {
    if (!document.hidden) triggerHeartRain(18);
  }, 45000);
})();
