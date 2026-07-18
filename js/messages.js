/* =========================================================
   MESSAGES.JS
   Content data + rendering for:
   - Timeline
   - Reasons I Love You
   - Sticky Notes
   - Random Love Messages
   - Secret Easter Egg message
   ========================================================= */

(function () {
  "use strict";

  /* -------------------------------------------------------
     TIMELINE
     ------------------------------------------------------- */
  const timelineEvents = [
    { emoji: "❤️", date: "The Beginning", title: "Our First Conversation", text: "I knew we were meant to be from the very first conversation." },
    { emoji: "💌", date: "Soon After", title: "Endless Conversations", text: "I still reminisce about our first week, We went a lil too Fast paced but very special." },
    { emoji: "🌸", date: "A Little Later", title: "First Date", text: "Loved every single second of it. I was smitten by the end of it." },
    { emoji: "✨", date: "Somewhere Along the Way", title: "My Favorite Memory", text: "First time we kissed. Felt like magic." },
    { emoji: "💕", date: "Today", title: "Right Now", text: "I love you more than I loved you yesterday." }
  ];

  const timelineList = document.getElementById("timeline-list");
  if (timelineList) {
    timelineEvents.forEach((ev) => {
      const item = document.createElement("div");
      item.className = "timeline-item";
      item.dataset.emoji = ev.emoji;
      item.innerHTML = `
        <div class="timeline-card">
          <span class="timeline-date">${ev.date}</span>
          <h3>${ev.title}</h3>
          <p>${ev.text}</p>
        </div>
      `;
      timelineList.appendChild(item);
    });
  }

  /* -------------------------------------------------------
     REASONS I LOVE YOU — add/remove/edit freely (30-50+)
     ------------------------------------------------------- */
  const reasons = [
    "The way you always hehe when you're with me",
    "How you make even ordinary days feel so special",
    "You're my goodgirll",
    "The way you say my name",
    "How safe and at home I feel when I'm with you",
    "Your silly lil nicknames that make me smile",
    "The way you get excited about little things",
    "How you always know when something's wrong before I say it",
    "Your hugs that make the world stop for a second",
    "The way you care for me",
    "How you make me want to be a better person",
    "Random Selfies you send me just to make me smile",
    "The way you dance when you think no one's looking",
    "How patient you are with me",
    "Your curiosity about everything",
    "Your strickingly beautiful hazel eyes",
    "How you make your presence feel like home",
    "Your courage, even when you don't feel brave",
    "The sound of your voice",
    "How you always show up for the people you care about",
    "Your honesty, even when it's hard",
    "The way you hum without realizing it",
    "How you make me laugh until my stomach hurts",
    "Your hands, and how perfectly they fit in mine",
    "The way you believe in me, even when I don't",
    "How you turn bad days into something bearable, just by being there",
    "Your songs in our playlists that remind me of you even when you're not around",
    "The way you say 'uss' with every couple reels",
    "How you make plans for a future that includes me",
    "Your ability to handle me even if i become unberable",
    "The way you look at me like I'm your favorite person",
    "How gentle you are with things that matter",
    "Your stubbornness, even when it drives me crazy",
    "The way you comfort me without needing the right words",
    "How you never stop choosing me",
    "Your quiet strength",
    "The way you make ordinary Tuesdays feel special",
    "How you love with your whole heart",
    "The way you laugh at your own jokes before finishing them",
    "The way you laugh mid-sentence and it makes me puzzled out",
    "How every version of you, I love completely"
  ];

  const reasonsGrid = document.getElementById("reasons-grid");
  if (reasonsGrid) {
    reasons.forEach((reason, i) => {
      const card = document.createElement("div");
      card.className = "reason-card";
      card.innerHTML = `<span class="reason-number">#${i + 1}</span>${reason}`;
      reasonsGrid.appendChild(card);
    });
  }

  /* -------------------------------------------------------
     STICKY NOTES — short sweet reminders
     ------------------------------------------------------- */
  const stickyNotes = [
    { text: "You make every day brighter, Maybe because your name itself means Light, My Dipshikha.", color: "#fff3b0" },
    { text: "Your presence to me is like apricity in a cold winter day.", color: "#ffd6e8" },
    { text: "You make my heart giggle from inside and makes me all wobbly.", color: "#d8f3dc" },
    { text: "You're the best girlfriend i could ever ask for, Cheers to our love.", color: "#cdeafe" },
    { text: "Hardest thing with you is to say bye after a great time together.", color: "#ffe0b5" },
    { text: "Your beauty knows no bounds, It feels like a dream.", color: "#f1d6ff" }
  ];

  const notesBoard = document.getElementById("notes-board");
  if (notesBoard) {
    stickyNotes.forEach((note, i) => {
      const el = document.createElement("div");
      el.className = "sticky-note";
      el.style.background = note.color;
      el.style.setProperty("--rot", `${(i % 2 === 0 ? -1 : 1) * (2 + (i % 3))}deg`);
      el.textContent = note.text;
      notesBoard.appendChild(el);
    });
  }

  /* -------------------------------------------------------
     RANDOM LOVE MESSAGES — 100+ messages
     ------------------------------------------------------- */
  const loveMessages = [
    "You are the best thing that has ever happened to me.",
    "Every love song reminds me of uss.",
    "I fall for you a little more every single day.",
    "You're my favorite person ever.",
    "Being with you feels like coming home from a long tiring day.",
    "You make my heart all wobbly inside.",
    "I love you more than yesterday, less than tomorrow.",
    "I am so lucky to have you.",
    "My favorite place in the world is next to you.",
    "You're stuck with me forever, sorry not sorry.",
    "You make ordinary moments feel magical.",
    "I never knew I could love someone this much.",
    "You're my person, always.",
    "I'd choose you in every lifetime.",
    "You are my favorite chapter in this story.",
    "Loving you is the easiest thing I've ever done.",
    "You're proof that good things do happen.",
    "I love the way you love.",
    "You're my calm in every storm.",
    "With you, forever doesn't feel long enough.",
    "You make my world so much softer.",
    "I still get butterflies when I see your name.",
    "You're my favorite kind of trouble.",
    "I'm so lucky to call you mine.",
    "You are my happy place.",
    "Every day with you is my favorite day.",
    "You make me want to be better.",
    "I love you in every color and season.",
    "You're the missing piece I didn't know I needed.",
    "My heart smiles whenever you walk in the room.",
    "You are worth every single 'I love you'.",
    "You make loving you effortless.",
    "I'm endlessly grateful for you.",
    "You're the best part of my everyday.",
    "You feel like sunshine on a cloudy day.",
    "My favorite sound is your laugh.",
    "You are my always and forever.",
    "You're the reason I smile at my phone like an idiot.",
    "I fell for you and I never want to get up.",
    "You're my favorite adventure.",
    "You make my heart feel full.",
    "I love how safe I feel with you.",
    "You are my sweetest distraction.",
    "You're the best decision I ever made.",
    "Loving you feels like a warm hug.",
    "You're my favorite 'good morning' and 'goodnight'.",
    "I could listen to you talk forever.",
    "You are pure magic to me.",
    "You're my definition of home.",
    "I love you more than words can say.",
    "You're my favorite kind of forever.",
    "You make my heart skip a beat, every time.",
    "I never want to stop loving you.",
    "You're the best hug I've ever had.",
    "You're my favorite reason to smile.",
    "I love you today, tomorrow, and always.",
    "You're the calm to my chaos.",
    "You make my heart feel so loved.",
    "I love your heart the most.",
    "You're my favorite everything.",
    "You make my world a better place.",
    "I love the way you see the world.",
    "You are my greatest blessing.",
    "You make me feel unstoppable.",
    "You're my favorite reason to believe in love.",
    "I love you beyond words.",
    "You're the sweetest part of my day.",
    "You're my forever favorite.",
    "I love how you make everything better.",
    "You are my favorite love story.",
    "You make my heart glow.",
    "You're my favorite kind of happy.",
    "I love you with my whole heart.",
    "You're my dream come true.",
    "You make everything feel okay.",
    "My heart beats a little faster whenever I see you.",
    "I love your laugh, your smile, all of you.",
    "You're my favorite place to be.",
    "You make me believe in forever.",
    "You're the sweetest surprise of my life.",
    "I love you a little more every day.",
    "You're my heart's favorite person.",
    "You make my life so much brighter.",
    "You're my favorite kind of love.",
    "I love you endlessly.",
    "You're my sunshine on the darkest days.",
    "You make me feel so lucky.",
    "You're my favorite hug.",
    "I love how you make me feel like home.",
    "You're my favorite 'always'.",
    "You make my heart feel so full.",
    "You're my forever person.",
    "I love you more than I can express.",
    "You're my favorite memory in the making.",
    "You make my world feel complete.",
    "You're my favorite kind of magic.",
    "I love you completely and unconditionally.",
    "You're my favorite reason for everything.",
    "You make my life so much better.",
    "I smile at every couple reels thinking about uss.",
    "I love you more with every heartbeat."
  ];

  const messageTextEl = document.getElementById("random-message-text");
  const messageBtn = document.getElementById("random-message-btn");
  let lastIndex = -1;

  function getRandomMessage() {
    let index;
    do {
      index = Math.floor(Math.random() * loveMessages.length);
    } while (index === lastIndex && loveMessages.length > 1);
    lastIndex = index;
    return loveMessages[index];
  }

  if (messageBtn && messageTextEl) {
    messageBtn.addEventListener("click", () => {
      messageTextEl.style.opacity = "0";
      messageBtn.classList.remove("pulse");
      void messageBtn.offsetWidth; // restart animation
      messageBtn.classList.add("pulse");
      setTimeout(() => {
        messageTextEl.textContent = getRandomMessage();
        messageTextEl.style.transition = "opacity 0.4s ease";
        messageTextEl.style.opacity = "1";
      }, 150);
    });
  }

  /* -------------------------------------------------------
     SECRET MESSAGE — type "love" anywhere to reveal it
     ------------------------------------------------------- */
  const secretMessages = [
    "Since you found this... I just want you to know you're my favorite secret to keep. I love you more than any words on this page could ever say. 💗"
  ];

  const secretOverlay = document.getElementById("secret-message");
  const secretText = document.getElementById("secret-text");
  const secretClose = document.getElementById("secret-close");
  const SECRET_WORD = "love";
  let typedBuffer = "";

  window.addEventListener("keydown", (e) => {
    if (e.key.length !== 1) return;
    typedBuffer = (typedBuffer + e.key.toLowerCase()).slice(-SECRET_WORD.length);
    if (typedBuffer === SECRET_WORD) {
      revealSecret();
      typedBuffer = "";
    }
  });

  function revealSecret() {
    if (!secretOverlay || !secretText) return;
    secretText.textContent =
      secretMessages[Math.floor(Math.random() * secretMessages.length)];
    secretOverlay.hidden = false;
    if (window.__triggerHeartRain) window.__triggerHeartRain(24);
  }

  if (secretClose) {
    secretClose.addEventListener("click", () => {
      secretOverlay.hidden = true;
    });
  }
})();
