"use strict";

// ==========================================
// 1. SISTEM KEAMANAN & PROTEKSI GLOBAL
// ==========================================
let certTimerInterval = null;
const CERT_LIMIT_SECONDS = 8;

document.addEventListener("contextmenu", (e) => e.preventDefault());

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
document.addEventListener("visibilitychange", () => triggerGlobalBlur(document.hidden));

function getAssetPath(filename) {
  return filename || "";
}

// ==========================================
// 2. KAMUS TRANSLASI (i18n) LENGKAP & TERPUSAT
// ==========================================
const i18n = {
  id: {
    // Navigasi & Umum
    skip: "Lewati ke konten utama",
    openNav: "Buka navigasi",
    navHome: "Beranda",
    navAbout: "Tentang Saya",
    navEducation: "Pendidikan",
    navExperience: "Pengalaman",
    navWork: "Pengalaman Kerja",
    navOrg: "Pengalaman Organisasi",
    navStudio: "Studio",
    navTechnical: "Proyek Technical",
    navCreative: "Desain & Content",
    navCertifications: "Sertifikasi",
    navContact: "Kontak",
    navServices: "Services",
    navkoleksi: "Koleksi",

    // Hero Section (index.html)
    heroEyebrow: "TERBUKA UNTUK PELUANG KOLABORASI",
    heroSubtitle: "Perencanaan Regional | Analitik Data | Administrasi | Pemasaran Digital",
    heroTagline: "Mengubah Data menjadi Wawasan, Perencanaan menjadi Dampak.",
    basedIn: "BERBASIS DI",
    focus: "FOKUS",
    peopleFocused: "& people-focused",
    scroll: "GULIR UNTUK MENJELAJAH",

    // About Section (index.html)
    aboutEyebrow: "TENTANG SAYA",
    aboutTitle: "Perspektif analitis.<br /><span class=\"accent\">Dampak nyata.</span>",
    aboutLead: "Saya Adiesti Nuri Amanda, Mahasiswa Sarjana Program Studi Ekonomi Pembangunan Universitas Trunodjoyo Madura.",
    aboutBody: "Saya memadukan analisis data, perencanaan regional, administrasi, dan komunikasi digital untuk mendukung keputusan yang berdampak.",
    gpa: "IPK Ekonomi Pembangunan",
    sipdAccuracy: "Presisi rekonsiliasi SIPD",
    focusAreas: "Bidang kontribusi",
    letsTalk: "Mari berbincang",

    // Education Section (index.html)
    educationEyebrow: "PENDIDIKAN & PRESTASI",
    educationTitle: "Belajar untuk<br /><span class=\"accent\">membangun dampak.</span>",
    educationIntro: "Fondasi akademik dan prestasi yang membentuk rasa ingin tahu serta komitmen saya.",
    degree: "S1 Ekonomi Pembangunan",
    gpaLabel: "IPK Kumulatif",
    regionalPlanning: "Perencanaan Wilayah",
    regionalFinance: "Keuangan Regional",
    scholarship: "BEASISWA · 2025/2026",
    scholarshipDesc: "Penerima beasiswa UPZ BAZNAS.",
    achievement: "PRESTASI · 2024",
    finalist: "Finalis LKTI KOMPAS",
    finalistDesc: "Universitas Jember.",

    // Work Experience (index.html)
    workEyebrow: "PENGALAMAN PROFESIONAL",
    workTitle: "Kerja & kontribusi<br /><span class=\"accent\">profesional.</span>",
    workIntro: "Pengalaman dalam perencanaan daerah, pengajaran, dan kerja editorial.",
    internship: "MAGANG · PERENCANAAN DAERAH",
    bappedaRole: "Staf Administrasi & Perencanaan",
    bappedaDesc: "Audit KAK/RSK tahun anggaran 2025–2026, dukungan Musrenbang RPJMD dan Forum Perangkat Daerah, serta rekonsiliasi data SIPD dengan presisi 100%.",
    viewDocumentation: "Dokumentasi",
    viewCertificate: "Sertifikat",
    teachingAssistant: "ASISTENSI AKADEMIK",
    assistantRole: "Asisten Lab. Praktikum",
    assistantDesc: "Mendampingi praktikum, membantu mahasiswa memahami materi, dan mendukung kelancaran kegiatan akademik Keuangan Regional.",
    teaching: "Pengajaran",
    editorialExperience: "EDITORIAL · JURNAL",
    editorialRole: "Sekretaris Editorial BEP Journal",
    editorialDesc: "Mendukung administrasi editorial, menyiapkan notulensi rapat redaksi, dan membantu koordinasi kegiatan jurnal.",

    // Org Experience (index.html)
    orgEyebrow: "PENGALAMAN ORGANISASI",
    orgTitle: "Bekerja bersama,<br /><span class=\"accent\">bertumbuh bersama.</span>",
    orgIntro: "Kontribusi di organisasi mahasiswa melalui pengelolaan keuangan, teknologi informasi, dan komunikasi.",
    organization: "ORGANISASI · UKM FEB RATI",
    treasurerRole: "Bendahara Umum 1",
    treasurerDesc: "Mendukung pencatatan dan pengelolaan keuangan organisasi serta koordinasi kebutuhan anggaran kegiatan.",
    finance: "Keuangan",
    teamwork: "Kolaborasi",
    itSecretaryRole: "Sekretaris Bidang IT",
    itSecretaryDesc: "Mendukung kebutuhan digital dan dokumentasi organisasi serta berkontribusi sebagai MC pada Dies Natalis.",
    documentation: "Dokumentasi",

    // Studio Karya (index.html)
    studioEyebrow: "STUDIO KARYA",
    studioTitle: "Ide menjadi<br /><span class=\"accent\">sesuatu yang nyata.</span>",
    studioIntro: "Eksplorasi proyek data-teknikal dan desain komunikasi visual.",
    technicalProjects: "Proyek Technical",
    sentimentDesc: "Konsep dashboard web interaktif yang memadukan alur AI dan analisis sentimen pelanggan.",
    ChainTitle: "Interactive Import Supply Chain Analytics",
    ChainDesc: "Eksplorasi performa penjualan melalui dashboard dan visualisasi data interaktif.",
    regionalAudit: "PERENCANAAN REGIONAL",
    auditTitle: "Audit Data BAPPEDA Mojokerto",
    auditDesc: "Audit KAK/RSK 2025–2026 dan rekonsiliasi SIPD dengan presisi 100%.",
    creativeContent: "Desain & Content",
    academicDesign: "DESAIN PUBLIKASI AKADEMIK",
    publicationTitle: "Academic Publication Collateral",
    publicationDesc: "Konsep pamflet dan banner Call for Paper BEP Journal Volume 6.",
    socialBranding: "BRANDING MEDIA SOSIAL & EVENT",
    socialTitle: "Social Media & Event Templates",
    socialDesc: "Template IG Story live report MPAB dan layout ucapan ulang tahun pengurus.",
    digitalIdentity: "IDENTITAS DIGITAL & VIDEO",
    identityTitle: "Digital Identity & Video Editing",
    identityDesc: "Eksplorasi header LinkedIn profesional, Linktree, dan editing video menggunakan CapCut.",

    // Certifications & Contact (index.html)
    certEyebrow: "LISENSI & SERTIFIKASI",
    certTitle: "Belajar tanpa<br /><span class=\"accent\">berhenti.</span>",
    certIntro: "Sertifikasi yang memperkuat kompetensi analitik, digital, dan perencanaan (Total 13 Sertifikat).",
    contactEyebrow: "MULAI KONEKSI",
    contactTitle: "Mari Terhubung &<br /><span class=\"accent\">Berkolaborasi!</span>",
    contactDesc: "Punya proyek, peluang, atau ide yang ingin dibahas? Saya senang mendengar kabar dari Anda.",
    backTop: "Kembali ke atas ↑",

    // Services Page (services.html)
    svcEyebrow: "SERVICES & EXPERTISE",
    svcHeroTitle: "Layanan Profesional <br /><span class=\"accent\">& Solusi Terintegrasi</span>",
    svcHeroIntro: "Membantu kebutuhan bisnis, instansi, dan proyek Anda melalui integrasi analisis data, perencanaan wilayah, operasional administrasi, hingga komunikasi digital.",
    svc1Kicker: "DATA & BUSINESS INTELLIGENCE",
    svc1Title: "Data Analytics & Interactive Dashboard",
    svc1Desc: "Pengolahan dan pembersihan data mentah (CSV/Excel) menjadi dashboard interaktif serta laporan insight analitis untuk mendukung pengambilan keputusan bisnis.",
    svc1Item1: "Pembersihan & Manipulasi Data (Power Query, Pivot Table, VLOOKUP)",
    svc1Item2: "Pembuatan Dashboard Interaktif (Microsoft Excel & Power BI)",
    svc1Item3: "AI Sentiment Analysis (Langflow & Prompting LLM)",
    svcDiscuss: "Diskusi Layanan ↗",
    svc2Kicker: "PERENCANAAN & OPERASIONAL",
    svc2Title: "Regional Planning & Office Administration",
    svc2Desc: "Dukungan operasional administrasi perkantoran, penyusunan berkas perencanaan daerah, audit anggaran, serta penyortiran kearsipan berskala besar.",
    svc2Item1: "Audit KAK/RSK & Rekonsiliasi Sistem SIPD (Presisi 100%)",
    svc2Item2: "Pengelolaan & Penyusunan Berkas Administrasi Kantor / Organisasi",
    svc2Item3: "Pengarsipan Digital & Manajemen Database Terstruktur",
    svc2Item4: "Penyusunan Notulensi Rapat & Korespondensi Resmi",
    svc3Kicker: "KREATIF & MEDIA SOSIAL",
    svc3Title: "Digital Marketing & Creative Content",
    svc3Desc: "Perancangan strategi media sosial, pembuatan aset konten visual, copywriting, serta penyuntingan video promosi untuk mengoptimalkan impresi brand.",
    svc3Item1: "Manajemen Strategi Kampanye Media Sosial (Tersertifikasi BNSP)",
    svc3Item2: "Desain Grafis Konten (Feeds Instagram, Banner, Poster, Pamflet)",
    svc3Item3: "Video Editing Konten Vertikal (Reels / TikTok / CapCut)",
    svc3Item4: "Copywriting & Optimization Identitas Digital (Linktree / Bio / Profile)",
    svc4Kicker: "KOMUNIKASI & ACARA",
    svc4Title: "Public Speaking & Event Master of Ceremony",
    svc4Desc: "Jasa pemandu acara (MC) formal maupun non-formal, fasilitasi orientasi/kegiatan publik, serta pelayanan relasi pelanggan (Customer Service/Frontliner).",
    svc4Item1: "Master of Ceremonies (MC) Acara Formal & Non-Formal",
    svc4Item2: "Fasilitator Sesi Orientasi & Public Relations",
    svc4Item3: "Service Excellence & Customer Relationship Handling",
    freelanceEyebrow: "HIRE ME ON FREELANCE PLATFORMS",
    freelanceTitle: "Profil & Akun <br /><span class=\"accent\">Freelancer Resmi</span>",
    freelanceIntro: "Anda dapat merekrut saya atau berdiskusi proyek secara langsung melalui platform freelance tepercaya berikut:",
    fwDesc: "Platform Freelance Indonesia",
    svcCtaEyebrow: "MULAI KOLABORASI",
    svcCtaTitle: "Punya Proyek yang Ingin <br /><span class=\"accent\">Didiskusikan?</span>",
    svcCtaDesc: "Hubungi saya untuk membahas kebutuhan layanan atau peluang kerja sama.",

    // Koleksi Page (Koleksi.html)
    etalaseEyebrow: "PERSONAL RECOMMENDATIONS · NON-ENDORSE",
    etalaseTitle: "Koleksi & Rekomendasi Produk",
    etalaseSubtitle: "Kumpulan produk favorit yang saya gunakan sehari-hari. Klik tombol marketplace pilihan Anda untuk membeli melalui tautan affiliate resmi saya!",
    filterAll: "Semua",
    filterWorkspace: "Workspace",
    filterGadget: "Gadget & Aksesoris",
    filterLifestyle: "Lifestyle",
    filterBuku: "Buku & Bacaan",
    noProducts: "🔍 Produk yang Anda cari tidak ditemukan."
  },
  en: {
    // Navigation & General
    skip: "Skip to main content",
    openNav: "Open navigation",
    navHome: "Home",
    navAbout: "About Me",
    navEducation: "Education",
    navExperience: "Experience",
    navWork: "Work Experience",
    navOrg: "Organization Experience",
    navStudio: "Studio",
    navTechnical: "Technical Projects",
    navCreative: "Design & Content",
    navCertifications: "Certifications",
    navContact: "Contact",
    navServices: "Services",
    navkoleksi: "Collections",

    // Hero Section (index.html)
    heroEyebrow: "OPEN FOR COLLABORATION OPPORTUNITIES",
    heroSubtitle: "Regional Planning | Data Analytics | Administration | Digital Marketing",
    heroTagline: "Turning Data into Insights, Planning into Impact.",
    basedIn: "BASED IN",
    focus: "FOCUS",
    peopleFocused: "& people-focused",
    scroll: "SCROLL TO EXPLORE",

    // About Section (index.html)
    aboutEyebrow: "ABOUT ME",
    aboutTitle: "Analytical perspective.<br /><span class=\"accent\">Real impact.</span>",
    aboutLead: "I am Adiesti Nuri Amanda, an Undergraduate Student in Development Economics at Trunojoyo Madura University.",
    aboutBody: "I combine data analytics, regional planning, administration, and digital communication to support impactful decision-making.",
    gpa: "Development Economics GPA",
    sipdAccuracy: "SIPD Reconciliation Accuracy",
    focusAreas: "Contribution Areas",
    letsTalk: "Let's talk",

    // Education Section (index.html)
    educationEyebrow: "EDUCATION & ACHIEVEMENTS",
    educationTitle: "Learning to<br /><span class=\"accent\">build impact.</span>",
    educationIntro: "Academic foundation and achievements that shape my curiosity and commitment.",
    degree: "B.S. in Development Economics",
    gpaLabel: "Cumulative GPA",
    regionalPlanning: "Regional Planning",
    regionalFinance: "Regional Finance",
    scholarship: "SCHOLARSHIP · 2025/2026",
    scholarshipDesc: "UPZ BAZNAS scholarship recipient.",
    achievement: "ACHIEVEMENT · 2024",
    finalist: "LKTI KOMPAS Finalist",
    finalistDesc: "Jember University.",

    // Work Experience (index.html)
    workEyebrow: "PROFESSIONAL EXPERIENCE",
    workTitle: "Work & professional<br /><span class=\"accent\">contributions.</span>",
    workIntro: "Experience in regional planning, teaching, and editorial work.",
    internship: "INTERNSHIP · REGIONAL PLANNING",
    bappedaRole: "Administration & Planning Staff",
    bappedaDesc: "Auditing 2025–2026 fiscal year KAK/RSK, supporting RPJMD Musrenbang and Regional Device Forums, and reconciling SIPD data with 100% precision.",
    viewDocumentation: "Documentation",
    viewCertificate: "Certificate",
    teachingAssistant: "ACADEMIC ASSISTANTSHIP",
    assistantRole: "Lab Practicum Assistant",
    assistantDesc: "Assisting practicums, helping students understand course material, and supporting Regional Finance academic operations.",
    teaching: "Teaching",
    editorialExperience: "EDITORIAL · JOURNAL",
    editorialRole: "Editorial Secretary of BEP Journal",
    editorialDesc: "Supporting editorial administration, preparing meeting minutes, and assisting journal activity coordination.",

    // Org Experience (index.html)
    orgEyebrow: "ORGANIZATION EXPERIENCE",
    orgTitle: "Working together,<br /><span class=\"accent\">growing together.</span>",
    orgIntro: "Contributions to student organizations through financial management, IT, and communication.",
    organization: "ORGANIZATION · UKM FEB RATI",
    treasurerRole: "General Treasurer 1",
    treasurerDesc: "Supporting organization financial recordkeeping and management as well as activity budget coordination.",
    finance: "Finance",
    teamwork: "Collaboration",
    itSecretaryRole: "IT Division Secretary",
    itSecretaryDesc: "Supporting digital and documentation needs of the organization and serving as MC for the Anniversary event.",
    documentation: "Documentation",

    // Studio Karya (index.html)
    studioEyebrow: "WORK STUDIO",
    studioTitle: "Ideas into<br /><span class=\"accent\">something real.</span>",
    studioIntro: "Exploration of data-technical projects and visual communication design.",
    technicalProjects: "Technical Projects",
    sentimentDesc: "Interactive web dashboard concept combining AI workflows and customer sentiment analysis.",
    ChainTitle: "Interactive Import Supply Chain Analytics",
    ChainDesc: "Exploration of sales performance through interactive dashboards and data visualization.",
    regionalAudit: "REGIONAL PLANNING",
    auditTitle: "BAPPEDA Mojokerto Data Audit",
    auditDesc: "2025–2026 KAK/RSK audit and SIPD data reconciliation with 100% accuracy.",
    creativeContent: "Design & Content",
    academicDesign: "ACADEMIC PUBLICATION DESIGN",
    publicationTitle: "Academic Publication Collateral",
    publicationDesc: "Pamphlet and banner concept for BEP Journal Volume 6 Call for Paper.",
    socialBranding: "SOCIAL MEDIA & EVENT BRANDING",
    socialTitle: "Social Media & Event Templates",
    socialDesc: "IG Story live report templates for MPAB and birthday greeting layouts for board members.",
    digitalIdentity: "DIGITAL IDENTITY & VIDEO",
    identityTitle: "Digital Identity & Video Editing",
    identityDesc: "Exploration of professional LinkedIn headers, Linktree, and video editing using CapCut.",

    // Certifications & Contact (index.html)
    certEyebrow: "LICENSES & CERTIFICATIONS",
    certTitle: "Never stop<br /><span class=\"accent\">learning.</span>",
    certIntro: "Certifications strengthening analytics, digital, and planning skills (Total 13 Certificates).",
    contactEyebrow: "START CONNECTING",
    contactTitle: "Let's Connect &<br /><span class=\"accent\">Collaborate!</span>",
    contactDesc: "Have a project, opportunity, or idea to discuss? I'd love to hear from you.",
    backTop: "Back to top ↑",

    // Services Page (services.html)
    svcEyebrow: "SERVICES & EXPERTISE",
    svcHeroTitle: "Professional Services <br /><span class=\"accent\">& Integrated Solutions</span>",
    svcHeroIntro: "Assisting your business, institutional, and project needs through integrated data analytics, regional planning, administrative operations, and digital communication.",
    svc1Kicker: "DATA & BUSINESS INTELLIGENCE",
    svc1Title: "Data Analytics & Interactive Dashboard",
    svc1Desc: "Processing and cleaning raw data (CSV/Excel) into interactive dashboards and analytical insight reports to support business decision making.",
    svc1Item1: "Data Cleaning & Manipulation (Power Query, Pivot Table, VLOOKUP)",
    svc1Item2: "Interactive Dashboard Creation (Microsoft Excel & Power BI)",
    svc1Item3: "AI Sentiment Analysis (Langflow & LLM Prompting)",
    svcDiscuss: "Discuss Service ↗",
    svc2Kicker: "PLANNING & OPERATIONS",
    svc2Title: "Regional Planning & Office Administration",
    svc2Desc: "Operational support for office administration, regional planning document preparation, budget auditing, and large-scale archive sorting.",
    svc2Item1: "KAK/RSK Audit & SIPD System Reconciliation (100% Precision)",
    svc2Item2: "Management & Preparation of Office/Organization Administrative Files",
    svc2Item3: "Digital Archiving & Structured Database Management",
    svc2Item4: "Meeting Minutes Preparation & Official Correspondence",
    svc3Kicker: "CREATIVE & SOCIAL MEDIA",
    svc3Title: "Digital Marketing & Creative Content",
    svc3Desc: "Designing social media strategies, creating visual content assets, copywriting, and editing promotional videos to optimize brand impressions.",
    svc3Item1: "Social Media Campaign Strategy Management (BNSP Certified)",
    svc3Item2: "Content Graphic Design (Instagram Feeds, Banners, Posters, Pamphlets)",
    svc3Item3: "Vertical Video Content Editing (Reels / TikTok / CapCut)",
    svc3Item4: "Copywriting & Digital Identity Optimization (Linktree / Bio / Profile)",
    svc4Kicker: "COMMUNICATION & EVENTS",
    svc4Title: "Public Speaking & Event Master of Ceremony",
    svc4Desc: "Master of Ceremonies (MC) services for formal and informal events, orientation/public activity facilitation, and customer relations services (Customer Service/Frontliner).",
    svc4Item1: "Master of Ceremonies (MC) for Formal & Informal Events",
    svc4Item2: "Orientation Session Facilitator & Public Relations",
    svc4Item3: "Service Excellence & Customer Relationship Handling",
    freelanceEyebrow: "HIRE ME ON FREELANCE PLATFORMS",
    freelanceTitle: "Official Freelancer <br /><span class=\"accent\">Profiles & Accounts</span>",
    freelanceIntro: "You can hire me or discuss projects directly through the following trusted freelance platforms:",
    fwDesc: "Indonesian Freelance Platform",
    svcCtaEyebrow: "START COLLABORATION",
    svcCtaTitle: "Have a Project You Want to <br /><span class=\"accent\">Discuss?</span>",
    svcCtaDesc: "Contact me to discuss service needs or collaboration opportunities.",

    // Koleksi Page (Koleksi.html)
    etalaseEyebrow: "PERSONAL RECOMMENDATIONS · NON-ENDORSE",
    etalaseTitle: "Collections & Product Recommendations",
    etalaseSubtitle: "A curated list of my daily favorite products. Click your preferred marketplace button to purchase via my official affiliate links!",
    filterAll: "All",
    filterWorkspace: "Workspace",
    filterGadget: "Gadget & Accessories",
    filterLifestyle: "Lifestyle",
    filterBuku: "Books & Reading",
    noProducts: "🔍 The product you are searching for was not found."
  }
};

const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const navMenu = document.querySelector("#nav-links");
const menuButton = document.querySelector(".menu-toggle");
let language = localStorage.getItem("portfolio-language") || "id";

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

  updateThemeLabel();
  renderEtalase();
}

function applyTheme(isDark) {
  root.classList.toggle("dark", isDark);
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  updateThemeLabel();
}

function updateThemeLabel() {
  const isDark = root.classList.contains("dark");
  const label = isDark
    ? (language === "id" ? "Ganti ke mode terang" : "Switch to light mode")
    : (language === "id" ? "Ganti ke mode gelap" : "Switch to dark mode");
  if (themeButton) {
    themeButton.setAttribute("aria-label", label);
    themeButton.title = label;
  }
}

// ==========================================
// 3. KONTROL MODAL & TIMER SERTIFIKAT
// ==========================================
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
  const timerDisplay = document.getElementById("cert-timer-display");
  const footerNote = document.getElementById("cert-footer-note");

  if (!modal) return;
  if (modalTitle) modalTitle.textContent = title.startsWith("📜") || title.startsWith("🖼️") ? title : "📜 " + title;

  const fullPath = getAssetPath(fileSrc);
  const isPDF = fullPath.toLowerCase().endsWith(".pdf");

  if (modalContent) {
    if (isPDF) {
      modalContent.innerHTML = `
        <div style="position: relative; width: 100%; height: 68vh; border-radius: 8px; overflow: hidden;">
          <iframe src="${fullPath}#toolbar=0&navpanes=0&view=FitH" 
                  class="protected-pdf"
                  style="width: 100%; height: 100%; border: none; background: #ffffff; display: block;" 
                  title="${title}">
          </iframe>
        </div>`;
    } else {
      modalContent.innerHTML = `
        <div style="display: inline-block; min-width: 100%; text-align: center;">
          <img src="${fullPath}" 
               alt="${title}" 
               class="protected-img"
               style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); display: block;" 
               ondragstart="return false;" 
               oncontextmenu="return false;">
        </div>`;
    }
  }

  if (isPDF) {
    if (timerDisplay) timerDisplay.style.display = "inline-block";
    if (footerNote) footerNote.textContent = `🔒 Mode Lihat Saja. Sertifikat akan ditutup otomatis dalam ${CERT_LIMIT_SECONDS} detik.`;
    startCertTimer();
  } else {
    stopCertTimer();
    if (timerDisplay) timerDisplay.style.display = "none";
    if (footerNote) footerNote.textContent = "🔒 Mode Lihat Saja.";
  }

  if (typeof modal.showModal === "function") {
    modal.showModal();
    const modalBody = modal.querySelector(".modal-body");
    if (modalBody) {
      modalBody.scrollTop = 0;
      modalBody.scrollLeft = 0;
    }
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

window.openDocModal = openDocModal;
window.openCertModal = openCertModal;
window.openCertModalSingle = openCertModalSingle;
window.closeModal = closeModal;

// ==========================================
// 4. SLIDER SERTIFIKASI
// ==========================================
let currentCertSlide = 0;
const totalCertSlides = 4;

function updateCertSlider() {
  const slides = document.querySelectorAll("#certifications .cert-slide");
  const dots = document.querySelectorAll("#certifications .cert-dot");
  const prevBtn = document.getElementById("cert-prev-btn");
  const nextBtn = document.getElementById("cert-next-btn");
  const indicator = document.getElementById("cert-slide-indicator");

  slides.forEach((slide, index) => slide.classList.toggle("cert-slide-active", index === currentCertSlide));
  dots.forEach((dot, index) => dot.classList.toggle("cert-dot-active", index === currentCertSlide));

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
// 5. ETALASE PRODUK AFFILIATE
// ==========================================
const platformConfig = {
  shopee: { label: "🛍️ Shopee", class: "btn-shopee" },
  tokopedia: { label: "🟢 Tokopedia", class: "btn-tokopedia" },
  tiktok: { label: "🎵 TikTok", class: "btn-tiktok" },
  lazada: { label: "💙 Lazada", class: "btn-lazada" }
};

const affiliateProducts = [
  {
    id: "prod-1",
    name: "Desk Mat Leather Setup Premium",
    category: "workspace",
    price: "Rp 85.000",
    rating: "4.9",
    badge: "Best Seller 🔥",
    image: "laptop.png",
    desc: "Alas meja kerja kulit sintetis premium, tahan air, dan sangat nyaman untuk penggunaan mouse harian.",
    links: {
      shopee: "https://shope.ee/KODE_AFFILIATE_SHOPEE_1",
      tokopedia: "https://tokopedia.link/KODE_AFFILIATE_TOKOPEDIA_1",
      tiktok: "https://vt.tiktok.com/KODE_AFFILIATE_TIKTOK_1"
    }
  },
  {
    id: "prod-2",
    name: "Stand Laptop Aluminium Ergonomis Lipat",
    category: "gadget",
    price: "Rp 120.000",
    rating: "4.8",
    badge: "Honest Review 💯",
    image: "laptop.png",
    desc: "Stand laptop aluminium kokoh lipat yang membantu menjaga posisi leher dan postur tubuh tetap tegak.",
    links: {
      shopee: "https://shope.ee/KODE_AFFILIATE_SHOPEE_2",
      tokopedia: "https://tokopedia.link/KODE_AFFILIATE_TOKOPEDIA_2"
    }
  }
];

let currentCategory = "all";
let searchQuery = "";

function renderEtalase() {
  const gridContainer = document.getElementById("etalase-grid");
  const countContainer = document.getElementById("etalase-count");
  if (!gridContainer) return;

  const filteredProducts = affiliateProducts.filter((prod) => {
    const matchCategory = currentCategory === "all" || prod.category === currentCategory;
    const matchSearch =
      prod.name.toLowerCase().includes(searchQuery) ||
      prod.desc.toLowerCase().includes(searchQuery);
    return matchCategory && matchSearch;
  });

  if (countContainer) {
    const textCount = language === "en" 
      ? `Showing ${filteredProducts.length} products` 
      : `Menampilkan ${filteredProducts.length} produk`;
    countContainer.textContent = textCount;
  }

  if (filteredProducts.length === 0) {
    const emptyText = i18n[language] && i18n[language].noProducts 
      ? i18n[language].noProducts 
      : "🔍 Produk yang Anda cari tidak ditemukan.";
    gridContainer.innerHTML = `<div class="etalase-empty"><p>${emptyText}</p></div>`;
    return;
  }

  gridContainer.innerHTML = filteredProducts
    .map((prod) => {
      const buttonsHtml = Object.entries(prod.links)
        .filter(([platform, url]) => url && platformConfig[platform])
        .map(([platform, url]) => {
          const { label, class: btnClass } = platformConfig[platform];
          return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="btn-affiliate ${btnClass}">${label}</a>`;
        })
        .join("");

      return `
        <article class="koleksi-card etalase-card">
          <div class="koleksi-img-wrap">
            <img src="${prod.image}" alt="${prod.name}" class="koleksi-img" loading="lazy" />
            ${prod.badge ? `<span class="koleksi-badge">${prod.badge}</span>` : ""}
          </div>
          <div class="koleksi-content">
            <div class="card-meta">
              <span class="card-price">${prod.price}</span>
              <span class="card-rating">⭐ ${prod.rating}</span>
            </div>
            <h3>${prod.name}</h3>
            <p class="muted">${prod.desc}</p>
            <div class="koleksi-affiliate-buttons">
              ${buttonsHtml}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

// ==========================================
// 6. INISIALISASI SAAT DOM SIAP
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.querySelector("#current-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  renderEtalase();

  const searchInput = document.getElementById("etalase-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase();
      renderEtalase();
    });
  }

  // ==========================================
  // RENDER OTOMATIS SOCIAL MEDIA FOOTER
  // ==========================================
  const socialContainer = document.querySelector(".footer-socials");
  if (socialContainer) {
    socialContainer.innerHTML = `
      <a href="https://www.instagram.com/diessnaaww" target="_blank" rel="noopener noreferrer">📷 Instagram</a>
      <a href="https://www.threads.net/@diessnaaww" target="_blank" rel="noopener noreferrer">🧵 Threads</a>
      <a href="https://www.tiktok.com/@diessnaaww" target="_blank" rel="noopener noreferrer">🎵 TikTok</a>
    `;
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      renderEtalase();
    });
  });

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
    });
  }

  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  applyTheme(localStorage.getItem("portfolio-theme") !== "light");
  translatePage(language);
});

