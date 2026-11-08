"use strict";

// ==========================================
// 1. SISTEM KEAMANAN & PROTEKSI GLOBAL
// ==========================================
let certTimerTimeout = null;
let certTimerInterval = null;
const CERT_LIMIT_SECONDS = 12;

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

document.addEventListener("keydown", (e) => {
  const isBlockedCombo = (e.ctrlKey || e.metaKey) && ["s", "p", "u"].includes(e.key.toLowerCase());
  const isDevTools = e.key === "F12" || (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase()));
  const isPrint = e.key === "PrintScreen" || e.code === "PrintScreen";

  if (isBlockedCombo || isDevTools || isPrint) {
    e.preventDefault();
    triggerGlobalBlur(true);
  }
});

function triggerGlobalBlur(enable) {
  document.querySelectorAll(".protected-img, .protected-pdf, #cert-viewer-content, .modal-body").forEach((el) => {
    if (enable) {
      el.classList.add("blur-protection");
    } else {
      el.classList.remove("blur-protection");
    }
  });
}

window.addEventListener("blur", () => triggerGlobalBlur(true));
window.addEventListener("focus", () => triggerGlobalBlur(false));
document.addEventListener("visibilitychange", () => {
  triggerGlobalBlur(document.hidden);
});

function getAssetPath(filename) {
  if (!filename) return "";
  return filename;
}

// ==========================================
// 2. KAMUS TRANSLASI LENGKAP (i18n)
// ==========================================
const i18n = {
  id: {
    navServices: "Services",
    navVentures: "✨ Karya & Bisnis",
    navRacun: "🛍️ Racun by Me" // Pastikan tidak ada tanda petik/titik dua yang tertinggal
  },
  en: {
    navServices: "Services",
    navVentures: "✨ Projects & Business",
    navRacun: "🛍️ Racun by Me"
  }
};

const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const navMenu = document.querySelector("#nav-links");
const menuButton = document.querySelector(".menu-toggle");
let language = localStorage.getItem("portfolio-language") || "id";

// ==========================================
// 3. FUNGSI ALIH BAHASA & TEMA
// ==========================================
function translatePage(nextLanguage) {
  language = i18n[nextLanguage] ? nextLanguage : "id";
  document.documentElement.lang = language;
  localStorage.setItem("portfolio-language", language);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (i18n[language] && i18n[language][key] !== undefined) {
      element.innerHTML = i18n[language][key];
    }
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    const selected = button.dataset.language === language;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  const langGroup = document.querySelector(".language-switch");
  if (langGroup) {
    langGroup.setAttribute("aria-label", language === "id" ? "Pilih bahasa" : "Choose language");
  }

  updateThemeLabel();
}

function applyTheme(isDark) {
  root.classList.toggle("dark", isDark);
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  updateThemeLabel();
}

function updateThemeLabel() {
  const isDark = root.classList.contains("dark");
  const label = isDark
    ? language === "id" ? "Ganti ke mode terang" : "Switch to light mode"
    : language === "id" ? "Ganti ke mode gelap" : "Switch to dark mode";
  if (themeButton) {
    themeButton.setAttribute("aria-label", label);
    themeButton.title = label;
  }
}

// ==========================================
// 4. NAVIGASI HEADER & DROPDOWN
// ==========================================
function setDropdownState(dropdown, open) {
  dropdown.classList.toggle("is-open", open);
  const trigger = dropdown.querySelector(":scope > .nav-dropdown-trigger, :scope > .nested-trigger");
  if (trigger) trigger.setAttribute("aria-expanded", String(open));
}

function closeDropdowns() {
  document.querySelectorAll(".nav-dropdown.is-open, .nested-dropdown.is-open").forEach((dropdown) => {
    setDropdownState(dropdown, false);
  });
}

function closeNav() {
  if (navMenu && menuButton) {
    navMenu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    closeDropdowns();
  }
}

// ==========================================
// 5. MODAL CV & SERTIFIKAT
// ==========================================
const cvFiles = {
  id: "ind-cv-adis.pdf",
  en: "eng-cv-adis.pdf"
};

function openCVPreview(defaultLang = "id") {
  const dialog = document.getElementById("cv-preview-dialog");
  if (dialog) {
    if (typeof dialog.showModal === "function") dialog.showModal();
    switchCVLanguage(defaultLang);
  }
}

function closeCVPreview() {
  const dialog = document.getElementById("cv-preview-dialog");
  if (dialog && typeof dialog.close === "function") dialog.close();
}

function switchCVLanguage(lang) {
  const iframe = document.getElementById("cv-iframe");
  const btnId = document.getElementById("btn-cv-id");
  const btnEn = document.getElementById("btn-cv-en");

  if (!iframe) return;

  const targetFile = lang === "en" ? cvFiles.en : cvFiles.id;
  iframe.src = targetFile + "#toolbar=0&navpanes=0";

  if (btnId && btnEn) {
    if (lang === "id") {
      btnId.style.backgroundColor = "#fbbf24";
      btnId.style.color = "#0a192f";
      btnId.style.fontWeight = "700";
      btnEn.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
      btnEn.style.color = "#ffffff";
      btnEn.style.fontWeight = "500";
    } else {
      btnEn.style.backgroundColor = "#fbbf24";
      btnEn.style.color = "#0a192f";
      btnEn.style.fontWeight = "700";
      btnId.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
      btnId.style.color = "#ffffff";
      btnId.style.fontWeight = "500";
    }
  }
}

function stopCertTimer() {
  if (certTimerInterval) {
    clearInterval(certTimerInterval);
    certTimerInterval = null;
  }
}

function startCertTimer() {
  stopCertTimer();
  let timeRemaining = CERT_LIMIT_SECONDS;
  const timerDisplay = document.getElementById("cert-timer-display");

  function updateTimerUI() {
    const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, "0");
    const seconds = String(timeRemaining % 60).padStart(2, "0");
    if (timerDisplay) {
      timerDisplay.textContent = `⏱️ ${minutes}:${seconds}`;
    }
  }

  updateTimerUI();

  certTimerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerUI();

    if (timeRemaining <= 0) {
      stopCertTimer();
      closeModal("cert-viewer-modal");
      alert("⏱️ Waktu pratinjau sertifikat telah habis. Sertifikat ditutup otomatis demi keamanan dokumen.");
    }
  }, 1000);
}

function openDocModal(titleText, img1, img2) {
  const modal = document.getElementById("modal-dokumentasi");
  const dokTitle = document.getElementById("dok-title");
  const gallery = document.getElementById("dok-gallery");

  if (modal && gallery) {
    if (dokTitle) dokTitle.innerText = "📷 " + titleText;
    const path1 = getAssetPath(img1);
    const path2 = getAssetPath(img2);

    gallery.innerHTML = `
      <img src="${path1}" alt="${titleText} 1" class="protected-img" ondragstart="return false;" oncontextmenu="return false;">
      <img src="${path2}" alt="${titleText} 2" class="protected-img" ondragstart="return false;" oncontextmenu="return false;">
    `;
    if (typeof modal.showModal === "function") modal.showModal();
  }
}

function openCertModal(title, fileSrc) {
  const modal = document.getElementById("cert-viewer-modal");
  const modalTitle = document.getElementById("cert-viewer-title");
  const modalContent = document.getElementById("cert-viewer-content");

  if (!modal) return;
  if (modalTitle) modalTitle.textContent = "📜 " + title;

  const fullPath = getAssetPath(fileSrc);
  const isPDF = fullPath.toLowerCase().endsWith(".pdf");

  if (modalContent) {
    if (isPDF) {
      modalContent.innerHTML = `
        <div style="position: relative; width: 100%; height: 68vh; border-radius: 8px; overflow: hidden; box-sizing: border-box;">
          <iframe src="${fullPath}#toolbar=0&navpanes=0&view=FitH" 
                  class="protected-pdf"
                  style="width: 100%; height: 100%; border: none; background: #ffffff; display: block;" 
                  title="${title}">
          </iframe>
        </div>`;
    } else {
      modalContent.innerHTML = `
        <img src="${fullPath}" 
             alt="${title}" 
             class="protected-img"
             style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);" 
             ondragstart="return false;" 
             oncontextmenu="return false;">`;
    }
  }

  if (typeof modal.showModal === "function") {
    modal.showModal();
    startCertTimer();
  }
}

function openCertModalSingle(titleText, fileSrc) {
  openCertModal(titleText, fileSrc);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal && typeof modal.close === "function") {
    modal.close();
  }
  if (modalId === "cert-viewer-modal") {
    stopCertTimer();
  }
}

window.openCVPreview = openCVPreview;
window.closeCVPreview = closeCVPreview;
window.switchCVLanguage = switchCVLanguage;
window.openDocModal = openDocModal;
window.openCertModal = openCertModal;
window.openCertModalSingle = openCertModalSingle;
window.closeModal = closeModal;

// ==========================================
// 6. SLIDER SERTIFIKASI
// ==========================================
let currentCertSlide = 0;
const totalCertSlides = 4;

function updateCertSlider() {
  const slides = document.querySelectorAll("#certifications .cert-slide");
  const dots = document.querySelectorAll("#certifications .cert-dot");
  const prevBtn = document.getElementById("cert-prev-btn");
  const nextBtn = document.getElementById("cert-next-btn");
  const indicator = document.getElementById("cert-slide-indicator");

  slides.forEach((slide, index) => {
    slide.classList.toggle("cert-slide-active", index === currentCertSlide);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("cert-dot-active", index === currentCertSlide);
  });

  if (indicator) indicator.innerText = `${currentCertSlide + 1} / ${totalCertSlides}`;
  if (prevBtn) prevBtn.disabled = currentCertSlide === 0;
  if (nextBtn) nextBtn.disabled = currentCertSlide === totalCertSlides - 1;
}

function moveCertSlide(direction) {
  currentCertSlide += direction;
  if (currentCertSlide < 0) currentCertSlide = 0;
  if (currentCertSlide >= totalCertSlides) currentCertSlide = totalCertSlides - 1;
  updateCertSlider();
}

function goToCertSlide(slideIndex) {
  currentCertSlide = slideIndex;
  updateCertSlider();
}

window.moveCertSlide = moveCertSlide;
window.goToCertSlide = goToCertSlide;

// ==========================================
// 7. DATA MEDIA SOSIAL & KARYA DINAMIS (DRY)
// ==========================================
const socialLinksData = [
  { title: "Telegram", icon: "📲", url: "https://t.me/diessnaa" },
  { title: "Instagram", icon: "📸", url: "https://instagram.com/diessnaaww" },
  { title: "TikTok", icon: "🎵", url: "https://tiktok.com/@diessnaaww" },
  { title: "Lemon8", icon: "🍋", url: "https://lemon8-app.com/diessnaaww" },
  { title: "Threads", icon: "🧵", url: "https://threads.net/@diessnaaww" },
  { title: "YouTube", icon: "▶️", url: "https://youtube.com/@adiestinuriamanda1276" }
];

function renderSocialMedia() {
  const containers = document.querySelectorAll(".footer-socials");
  containers.forEach((container) => {
    container.innerHTML = socialLinksData
      .map((item) => `<a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.name} ↗</a>`)
      .join("");
  });
}

const venturesData = [
  {
    icon: "🚀",
    kicker: "ENTREPRENEURSHIP",
    title: "Founder & Owner Bisnis",
    desc: "Mengelola dan mengembangkan bisnis mandiri dari perencanaan strategi, operasional, pemasaran digital hingga manajemen keuangan.",
    tags: ["Business Strategy", "Brand Owner", "Digital Sales"],
    actionText: "Hubungi Founder",
    actionUrl: "index.html#contact"
  },
  {
    icon: "📚",
    kicker: "CREATIVE WRITING",
    title: "Penulis Buku Fiksi (Ongoing Novel)",
    desc: "Sedang dalam proses menyusun dan menulis karya buku fiksi/novel bertema naratif yang menggabungkan pembentukan karakter mendalam serta alur cerita imajinatif.",
    tags: ["Fiction Novel", "Storytelling", "Drafting Process"],
    badge: "⏳ Sedang Dalam Proses Penulisan"
  },
  {
    icon: "✍️",
    kicker: "PERSONAL BLOG",
    title: "Blog & Catatan Pemikiran",
    desc: "Wadah publikasi tulisan opini, esai bebas, serta catatan perjalanan pemikiran mengenai analisis sosial, ekonomi, hingga pandangan personal.",
    tags: ["Articles", "Personal Opinion", "Insights"],
    actionText: "Kunjungi Blog / Saluran ↗",
    actionUrl: "https://t.me/diessnaa"
  }
];

const racunProducts = [
  {
    name: "Desk Mat Aesthetic & Leather Setup",
    category: "Workplace Setup",
    desc: "Alas meja kerja kualitas premium, tahan air, dan sangat nyaman untuk penggunaan mouse harian.",
    image: "laptop.png",
    links: {
      shopee: "https://shopee.co.id/",
      tokopedia: "https://tokopedia.com/",
      tiktok: "https://tiktok.com/"
    }
  },
  {
    name: "Stand Laptop Aluminium Ergonomis",
    category: "Gadget Accessories",
    desc: "Stand laptop kokoh yang membantu menjaga postur tubuh saat bekerja lama di depan laptop.",
    image: "laptop.png",
    links: {
      shopee: "https://shopee.co.id/",
      tokopedia: "https://tokopedia.com/"
    }
  }
];

function renderVenturesModal() {
  const container = document.getElementById("ventures-render-container");
  if (!container) return;

  container.innerHTML = venturesData.map(item => `
    <article class="experience-card">
      <div class="experience-head">
        <span class="experience-icon">${item.icon}</span>
        <span class="card-kicker">${item.kicker}</span>
      </div>
      <h3>${item.title}</h3>
      <p class="muted">${item.desc}</p>
      <div class="tag-list" style="margin-top: 0.75rem;">
        ${item.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>
      <div style="margin-top: 1.25rem;">
        ${item.badge 
          ? `<span style="font-size: 0.78rem; color: #fbbf24; font-weight: 600;">${item.badge}</span>`
          : `<a class="button button-secondary" href="${item.actionUrl}" target="_blank" rel="noopener noreferrer">${item.actionText}</a>`
        }
      </div>
    </article>
  `).join("");
}

function renderRacunModal() {
  const container = document.getElementById("racun-render-container");
  if (!container) return;

  container.innerHTML = racunProducts.map(prod => `
    <article class="racun-card">
      <div class="racun-img-wrap">
        <img src="${prod.image}" alt="${prod.name}" class="racun-img" loading="lazy">
        <span class="racun-badge">Honest Review 💯</span>
      </div>
      <div class="racun-content">
        <span class="card-kicker">${prod.category}</span>
        <h3>${prod.name}</h3>
        <p class="muted">${prod.desc}</p>
        
        <div class="racun-affiliate-buttons">
          ${prod.links.shopee ? `<a href="${prod.links.shopee}" target="_blank" rel="noopener noreferrer" class="btn-affiliate btn-shopee">🛍️ Shopee</a>` : ''}
          ${prod.links.tokopedia ? `<a href="${prod.links.tokopedia}" target="_blank" rel="noopener noreferrer" class="btn-affiliate btn-tokopedia">🟢 Tokopedia</a>` : ''}
          ${prod.links.tiktok ? `<a href="${prod.links.tiktok}" target="_blank" rel="noopener noreferrer" class="btn-affiliate btn-tiktok">🎵 TikTok</a>` : ''}
        </div>
      </div>
    </article>
  `).join("");
}

// ==========================================
// 8. INISIALISASI HALAMAN & ANIMASI REVEAL
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.querySelector("#current-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  renderSocialMedia();
  renderVenturesModal();
  renderRacunModal();

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => translatePage(button.dataset.language));
  });

  if (themeButton) {
    themeButton.addEventListener("click", () => applyTheme(!root.classList.contains("dark")));
  }

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      navMenu.classList.toggle("is-open", open);
      menuButton.setAttribute("aria-expanded", String(open));
      if (!open) closeDropdowns();
    });
  }

  document.querySelectorAll(".nav-dropdown-trigger, .nested-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const dropdown = trigger.parentElement;
      const open = trigger.getAttribute("aria-expanded") !== "true";
      if (trigger.matches(".nav-dropdown-trigger")) {
        document.querySelectorAll(".nav-dropdown").forEach((item) => {
          if (item !== dropdown) setDropdownState(item, false);
        });
      }
      setDropdownState(dropdown, open);
    });
  });

  if (navMenu) {
    navMenu.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) closeNav();
    });
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-dropdown, .nested-dropdown") && !event.target.closest(".menu-toggle")) {
      closeDropdowns();
    }
  });

  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

 applyTheme(localStorage.getItem("portfolio-theme") !== "light");
  translatePage(language);
});