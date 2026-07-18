(function () {
  "use strict";

  const photos = [
    { src: "assets/images/image1.jpeg", caption: "Best Birthday Everrrr" },
    { src: "assets/images/image2.jpeg", caption: "Our most favourite picture" },
    { src: "assets/images/image3.jpeg", caption: "You, being effortlessly beautiful as always" },
    { src: "assets/images/image4.jpeg", caption: "My Baddie slaying as always" },
    { src: "assets/images/image5.jpeg", caption: "My sweet little girl" },
    { src: "assets/images/image6.jpeg", caption: "One of our best date ever" },
    { src: "assets/images/image7.jpeg", caption: "Awww, We look like couples from 2016" },
    { src: "assets/images/image8.jpeg", caption: "My hand will always be next to yours" }
  ];

  const galleryEl = document.getElementById("gallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  let currentIndex = 0;

  function renderGallery() {
    if (!galleryEl) return;
    const frag = document.createDocumentFragment();

    photos.forEach((photo, i) => {
      const item = document.createElement("figure");
      item.className = "gallery-item";
      item.tabIndex = 0;
      item.setAttribute("role", "button");
      item.setAttribute("aria-label", `View photo: ${photo.caption}`);

      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = photo.caption;
      img.loading = "lazy";
      img.decoding = "async";

      const heart = document.createElement("span");
      heart.className = "gallery-heart";
      heart.textContent = "💗";
      heart.setAttribute("aria-hidden", "true");

      const caption = document.createElement("figcaption");
      caption.className = "gallery-caption";
      caption.textContent = photo.caption;

      item.appendChild(img);
      item.appendChild(heart);
      item.appendChild(caption);

      const open = () => openLightbox(i);
      item.addEventListener("click", open);
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });

      frag.appendChild(item);
    });

    galleryEl.appendChild(frag);
  }

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  function updateLightbox() {
    const photo = photos[currentIndex];
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.caption;
    lightboxCaption.textContent = photo.caption;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % photos.length;
    updateLightbox();
  }
  function showPrev() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updateLightbox();
  }

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", showNext);
  if (prevBtn) prevBtn.addEventListener("click", showPrev);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (lightbox && !lightbox.hidden) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    }
  });

  renderGallery();
})();
