// ==========================================
// 1. MEMATIKAN FUNGSI KLIK KANAN (CONTEXT MENU)
// ==========================================
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

"use strict";

const i18n = {
  id: {
    // Navigasi & Umum
    skip: "Lewati ke konten utama", openNav: "Buka navigasi", navHome: "Beranda", navAbout: "Tentang Saya",
    navEducation: "Pendidikan", navExperience: "Pengalaman", navWork: "Pengalaman Kerja",
    navOrg: "Pengalaman Organisasi", navStudio: "Studio", navTechnical: "Proyek Technical",
    navCreative: "Desain & Content", navCertifications: "Sertifikasi", navContact: "Kontak", navServices: "Services",
    themeLight: "Ganti ke mode terang", themeDark: "Ganti ke mode gelap", backTop: "Kembali ke atas ↑",

    // Hero Section
    heroEyebrow: "TERBUKA UNTUK PELUANG KOLABORASI",
    heroSubtitle: "Perencanaan Regional | Analitik Data | Administrasi | Pemasaran Digital",
    heroTagline: "Mengubah Data menjadi Wawasan, Perencanaan menjadi Dampak.",
    viewCv: "Curriculum Vitae", basedIn: "BERBASIS DI", focus: "FOKUS",
    peopleFocused: "& people-focused", scroll: "GULIR UNTUK MENJELAJAH",

    // Section 01: Tentang Saya
    aboutEyebrow: "TENTANG SAYA",
    aboutTitle: 'Perspektif analitis.<br /><span class="accent">Dampak nyata.</span>',
    aboutLead: "Saya Adiesti Nuri Amanda, lulusan Ekonomi Pembangunan Universitas Trunojoyo Madura.",
    aboutBody: "Saya memadukan analisis data, perencanaan regional, administrasi, dan komunikasi digital untuk mendukung keputusan yang berdampak.",
    gpa: "IPK Ekonomi Pembangunan", sipdAccuracy: "Presisi rekonsiliasi SIPD", focusAreas: "Bidang kontribusi", letsTalk: "Mari berbincang",

    // Section 02: Pendidikan
    educationEyebrow: "PENDIDIKAN & PRESTASI",
    educationTitle: 'Belajar untuk<br /><span class="accent">membangun dampak.</span>',
    educationIntro: "Fondasi akademik dan prestasi yang membentuk rasa ingin tahu serta komitmen saya.",
    degree: "S1 Ekonomi Pembangunan", gpaLabel: "IPK Kumulatif", regionalPlanning: "Perencanaan Wilayah", regionalFinance: "Keuangan Regional",
    scholarship: "BEASISWA · 2025/2026", scholarshipDesc: "Penerima beasiswa UPZ BAZNAS.",
    achievement: "PRESTASI · 2024", finalist: "Finalis LKTI KOMPAS", finalistDesc: "Universitas Jember.",

    // Section 03: Pengalaman Kerja
    workEyebrow: "PENGALAMAN PROFESIONAL",
    workTitle: 'Kerja & kontribusi<br /><span class="accent">profesional.</span>',
    workIntro: "Pengalaman dalam perencanaan daerah, pengajaran, dan kerja editorial.",
    internship: "MAGANG · PERENCANAAN DAERAH", bappedaRole: "Staf Administrasi & Perencanaan",
    bappedaDesc: "Audit KAK/RSK tahun anggaran 2025–2026, dukungan Musrenbang RPJMD dan Forum Perangkat Daerah, serta rekonsiliasi data SIPD dengan presisi 100%.",
    viewDocumentation: "Dokumentasi", viewCertificate: "Sertifikat",
    teachingAssistant: "ASISTENSI AKADEMIK", assistantRole: "Asisten Lab. Praktikum",
    assistantDesc: "Mendampingi praktikum, membantu mahasiswa memahami materi, dan mendukung kelancaran kegiatan akademik Keuangan Regional.",
    editorialExperience: "EDITORIAL · JURNAL", editorialRole: "Sekretaris Editorial BEP Journal",
    editorialDesc: "Mendukung administrasi editorial, menyiapkan notulensi rapat redaksi, dan membantu koordinasi kegiatan jurnal.",

    // Section 04: Pengalaman Organisasi
    orgEyebrow: "PENGALAMAN ORGANISASI",
    orgTitle: 'Bekerja bersama,<br /><span class="accent">bertumbuh bersama.</span>',
    orgIntro: "Kontribusi di organisasi mahasiswa melalui pengelolaan keuangan, teknologi informasi, dan komunikasi.",
    organization: "ORGANISASI · UKM FEB RATI", treasurerRole: "Bendahara Umum 1",
    treasurerDesc: "Mendukung pencatatan dan pengelolaan keuangan organisasi serta koordinasi kebutuhan anggaran kegiatan.",
    finance: "Keuangan", teamwork: "Kolaborasi", itSecretaryRole: "Sekretaris Bidang IT",
    itSecretaryDesc: "Mendukung kebutuhan digital dan dokumentasi organisasi serta berkontribusi sebagai MC pada Dies Natalis.",
    documentation: "Dokumentasi",

    // Section 05: Studio Karya
    studioEyebrow: "STUDIO KARYA",
    studioTitle: 'Ide menjadi<br /><span class="accent">sesuatu yang nyata.</span>',
    studioIntro: "Eksplorasi proyek data-teknikal dan karya desain komunikasi visual.",
    technicalProjects: "Proyek Technical", sentimentDesc: "Konsep dashboard web interaktif yang memadukan alur AI dan analisis sentimen pelanggan.",
    ChainTitle: "Interactive Import Supply Chain Analytics", ChainDesc: "Eksplorasi performa penjualan melalui dashboard dan visualisasi data interaktif.",
    regionalAudit: "PERENCANAAN REGIONAL", auditTitle: "Audit Data BAPPEDA Mojokerto", auditDesc: "Audit KAK/RSK 2025–2026 dan rekonsiliasi SIPD dengan presisi 100%.",
    creativeContent: "Desain & Content", academicDesign: "DESAIN PUBLIKASI AKADEMIK", publicationTitle: "Academic Publication Collateral", publicationDesc: "Konsep pamflet dan banner Call for Paper BEP Journal Volume 6.",
    socialBranding: "BRANDING MEDIA SOSIAL & EVENT", socialTitle: "Social Media & Event Templates", socialDesc: "Template IG Story live report MPAB dan layout ucapan ulang tahun pengurus.",
    digitalIdentity: "IDENTITAS DIGITAL & VIDEO", identityTitle: "Digital Identity & Video Editing", identityDesc: "Eksplorasi header LinkedIn profesional, Linktree, dan editing video menggunakan CapCut.",

    // Section 06: Sertifikasi & Kontak
    certEyebrow: "LISENSI & SERTIFIKASI", certTitle: 'Belajar tanpa<br /><span class="accent">berhenti.</span>', certIntro: "Sertifikasi yang memperkuat kompetensi analitik, digital, dan perencanaan (Total 13 Sertifikat).",
    contactEyebrow: "MULAI KONEKSI", contactTitle: 'Mari Terhubung &<br /><span class="accent">Berkolaborasi!</span>', contactDesc: "Punya proyek, peluang, atau ide yang ingin dibahas? Saya senang mendengar kabar dari Anda."
  },
  en: {
    // Navigation & General
    skip: "Skip to main content", openNav: "Open navigation", navHome: "Home", navAbout: "About Me",
    navEducation: "Education", navExperience: "Experience", navWork: "Work Experience",
    navOrg: "Organization Experience", navStudio: "Studio", navTechnical: "Technical Projects",
    navCreative: "Design & Content", navCertifications: "Certifications", navContact: "Contact", navServices: "Services",
    themeLight: "Switch to light mode", themeDark: "Switch to dark mode", backTop: "Back to top ↑",

    // Hero Section
    heroEyebrow: "OPEN FOR COLLABORATION OPPORTUNITIES",
    heroSubtitle: "Regional Planning | Data Analytics | Administration | Digital Marketing",
    heroTagline: "Turning Data into Insights, Planning into Impact.",
    viewCv: "Curriculum Vitae", basedIn: "BASED IN", focus: "FOCUS",
    peopleFocused: "& people-focused", scroll: "SCROLL TO EXPLORE",

    // Section 01: About Me
    aboutEyebrow: "ABOUT ME",
    aboutTitle: 'Analytical perspective.<br /><span class="accent">Real impact.</span>',
    aboutLead: "I am Adiesti Nuri Amanda, a Development Economics graduate from Universitas Trunojoyo Madura.",
    aboutBody: "I combine data analysis, regional planning, administration, and digital communication to support impactful decisions.",
    gpa: "Development Economics GPA", sipdAccuracy: "SIPD Reconciliation Accuracy", focusAreas: "Contribution Areas", letsTalk: "Let's talk",

    // Section 02: Education
    educationEyebrow: "EDUCATION & ACHIEVEMENTS",
    educationTitle: 'Learning to<br /><span class="accent">build impact.</span>',
    educationIntro: "Academic foundations and achievements shaping my curiosity and commitment.",
    degree: "Bachelor of Economics in Development Economics", gpaLabel: "Cumulative GPA", regionalPlanning: "Regional Planning", regionalFinance: "Regional Finance",
    scholarship: "SCHOLARSHIP · 2025/2026", scholarshipDesc: "UPZ BAZNAS scholarship recipient.",
    achievement: "ACHIEVEMENT · 2024", finalist: "KOMPAS Scientific Writing Finalist", finalistDesc: "Universitas Jember.",

    // Section 03: Work Experience
    workEyebrow: "PROFESSIONAL EXPERIENCE",
    workTitle: 'Work & professional<br /><span class="accent">contributions.</span>',
    workIntro: "Experience in regional planning, teaching assistance, and editorial work.",
    internship: "INTERNSHIP · REGIONAL PLANNING", bappedaRole: "Administration & Planning Staff",
    bappedaDesc: "KAK/RSK auditing for FY 2025–2026, supporting RPJMD Musrenbang & Regional Forum, and 100% precision SIPD data reconciliation.",
    viewDocumentation: "Documentation", viewCertificate: "Certificate",
    teachingAssistant: "ACADEMIC ASSISTANTSHIP", assistantRole: "Lab Practical Assistant",
    assistantDesc: "Assisting practical sessions, supporting student comprehension, and ensuring smooth Regional Finance academic operations.",
    editorialExperience: "EDITORIAL · JOURNAL", editorialRole: "Editorial Secretary - BEP Journal",
    editorialDesc: "Supporting editorial administration, preparing meeting minutes, and coordinating journal publishing activities.",

    // Section 04: Organization Experience
    orgEyebrow: "ORGANIZATION EXPERIENCE",
    orgTitle: 'Working together,<br /><span class="accent">growing together.</span>',
    orgIntro: "Contributions in student organizations through financial management, IT, and communications.",
    organization: "ORGANIZATION · UKM FEB RATI", treasurerRole: "General Treasurer 1",
    treasurerDesc: "Managing financial records, tracking budgets, and coordinating financial planning for organizational events.",
    finance: "Finance", teamwork: "Collaboration", itSecretaryRole: "IT Division Secretary",
    itSecretaryDesc: "Supporting digital needs, event documentation, and serving as Master of Ceremonies for Anniversary events.",
    documentation: "Documentation",

    // Section 05: Studio
    studioEyebrow: "WORKS STUDIO",
    studioTitle: 'Turning ideas into<br /><span class="accent">something real.</span>',
    studioIntro: "Exploration of data-technical projects and visual communication designs.",
    technicalProjects: "Technical Projects", sentimentDesc: "Interactive web dashboard concept combining AI logic workflows and customer sentiment analysis.",
    ChainTitle: "Interactive Import Supply Chain Analytics", ChainDesc: "Sales performance exploration using interactive dashboards and data visualization.",
    regionalAudit: "REGIONAL PLANNING", auditTitle: "BAPPEDA Mojokerto Data Audit", auditDesc: "KAK/RSK 2025–2026 audit and SIPD reconciliation with 100% precision.",
    creativeContent: "Design & Content", academicDesign: "ACADEMIC PUBLICATION DESIGN", publicationTitle: "Academic Publication Collateral", publicationDesc: "Pamphlet and banner design concept for BEP Journal Volume 6 Call for Paper.",
    socialBranding: "SOCIAL MEDIA & EVENT BRANDING", socialTitle: "Social Media & Event Templates", socialDesc: "Instagram Story templates for MPAB live report and committee birthday announcements.",
    digitalIdentity: "DIGITAL IDENTITY & VIDEO", identityTitle: "Digital Identity & Video Editing", identityDesc: "Professional LinkedIn header design, Linktree customization, and CapCut video editing.",

    // Section 06: Certifications & Contact
    certEyebrow: "LICENSES & CERTIFICATIONS", certTitle: 'Learning without<br /><span class="accent">stopping.</span>', certIntro: "Certifications reinforcing analytical, digital, and planning skills (Total 13 Certifications).",
    contactEyebrow: "START A CONNECTION", contactTitle: "Let's Connect &<br /><span class=\"accent\">Collaborate!</span>", contactDesc: "Have a project, opportunity, or idea to discuss? I would love to hear from you."
  }
};

const ACCESS_PIN = "1234";
const vaultLinks = { cv: "", certificates: "" };
const documentTitles = {
  "bappeda-photo": { id: "Dokumentasi BAPPEDA Mojokerto", en: "BAPPEDA Mojokerto documentation" },
  "bappeda-certificate": { id: "Sertifikat BAPPEDA Mojokerto", en: "BAPPEDA Mojokerto certificate" },
  "assistant-photo": { id: "Dokumentasi Asisten Dosen", en: "Teaching assistant documentation" },
  "assistant-certificate": { id: "Sertifikat Asisten Dosen", en: "Teaching assistant certificate" },
  "bep-photo": { id: "Dokumentasi BEP Journal", en: "BEP Journal documentation" },
  "bep-certificate": { id: "Sertifikat BEP Journal", en: "BEP Journal certificate" },
  "treasurer-photo": { id: "Dokumentasi Bendahara 1 UKM FEB RATI", en: "UKM FEB RATI Treasurer 1 documentation" },
  "treasurer-certificate": { id: "Sertifikat Bendahara 1 UKM FEB RATI", en: "UKM FEB RATI Treasurer 1 certificate" },
  "it-secretary-photo": { id: "Dokumentasi Sekretaris IT UKM FEB RATI", en: "UKM FEB RATI IT Secretary documentation" },
  "it-secretary-certificate": { id: "Sertifikat Sekretaris IT UKM FEB RATI", en: "UKM FEB RATI IT Secretary certificate" }
};

const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const navMenu = document.querySelector("#nav-links");
const menuButton = document.querySelector(".menu-toggle");
const ownerDialog = document.querySelector(".owner-dialog");
const documentDialog = document.querySelector(".document-dialog");
const documentPinView = document.querySelector(".document-pin-view");
const documentPreview = document.querySelector(".document-preview");
const documentPinForm = document.querySelector(".document-pin-form");
const documentPinInput = document.querySelector("#document-pin");
const toast = document.querySelector(".toast");
let language = localStorage.getItem("portfolio-language") || "id";
let pendingDocument = null;
let lastDocumentTrigger = null;
let toastTimeout;

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

  const langSwitch = document.querySelector(".language-switch");
  if (langSwitch) {
    langSwitch.setAttribute("aria-label", language === "id" ? "Pilih bahasa" : "Choose language");
  }

  updateThemeLabel();
}

function applyTheme(isDark) {
  root.classList.toggle("dark", isDark);
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  updateThemeLabel();
}

function updateThemeLabel() {
  const nextKey = root.classList.contains("dark") ? "themeLight" : "themeDark";
  themeButton.setAttribute("aria-label", i18n[language][nextKey]);
  themeButton.title = i18n[language][nextKey];
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function setDropdownState(dropdown, open) {
  dropdown.classList.toggle("is-open", open);
  const trigger = dropdown.querySelector(":scope > .nav-dropdown-trigger, :scope > .nested-trigger");
  trigger.setAttribute("aria-expanded", String(open));
}

function closeDropdowns() {
  document.querySelectorAll(".nav-dropdown.is-open, .nested-dropdown.is-open").forEach((dropdown) => {
    setDropdownState(dropdown, false);
  });
}

function closeNav() {
  navMenu.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  closeDropdowns();
}

function drawDocumentPreview(title, kind) {
  const canvas = document.querySelector("#document-canvas");
  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const dark = root.classList.contains("dark");
  const background = dark ? "#f8fafc" : "#ffffff";
  const ink = "#0f172a";
  const gray = "#64748b";
  const accent = dark ? "#b77908" : "#1e3a8a";

  context.clearRect(0, 0, width, height);
  context.fillStyle = background;
  context.fillRect(0, 0, width, height);
  context.strokeStyle = "#cbd5e1";
  context.lineWidth = 2;
  context.strokeRect(34, 34, width - 68, height - 68);

  context.fillStyle = accent;
  context.fillRect(74, 76, 68, 68);
  context.fillStyle = "#ffffff";
  context.font = "bold 29px sans-serif";
  context.textAlign = "center";
  context.fillText("AN", 108, 119);
  context.textAlign = "left";

  context.fillStyle = ink;
  context.font = "bold 31px sans-serif";
  context.fillText(title, 170, 105, 730);
  context.fillStyle = gray;
  context.font = "18px sans-serif";
  context.fillText(i18n[language].mockDocument, 76, 190);
  context.fillStyle = accent;
  context.fillRect(76, 220, 260, 5);

  context.fillStyle = ink;
  context.font = "20px sans-serif";
  context.fillText(kind === "photo" ? i18n[language].documentTypePhoto : i18n[language].documentTypeCertificate, 76, 278);
  context.fillStyle = gray;
  for (let row = 0; row < 5; row += 1) {
    const y = 323 + row * 42;
    context.fillRect(76, y, row === 1 ? 570 : 790, 5);
  }

  context.save();
  context.translate(width / 2, height / 2);
  context.rotate(-Math.PI / 5.5);
  context.globalAlpha = .16;
  context.fillStyle = "#dc2626";
  context.font = "bold 31px sans-serif";
  context.textAlign = "center";
  context.fillText(i18n[language].watermark, 0, 0);
  context.restore();
  context.globalAlpha = 1;
}

function openDocumentGate(button) {
  pendingDocument = {
    id: button.dataset.document,
    title: documentTitles[button.dataset.document][language],
    kind: button.dataset.kind
  };
  lastDocumentTrigger = button;
  document.querySelector(".document-description").textContent = pendingDocument.title;
  document.querySelector(".document-pin-error").textContent = "";
  documentPinForm.reset();
  documentPinView.hidden = false;
  documentPreview.hidden = true;
  documentDialog.classList.remove("is-sensor-blurred");
  if (!documentDialog.open) documentDialog.showModal();
  window.setTimeout(() => documentPinInput.focus(), 0);
}

function closeDocumentDialog() {
  if (!documentDialog.open) return;
  documentDialog.close();
  documentPinForm.reset();
  documentPinView.hidden = false;
  documentPreview.hidden = true;
  documentDialog.classList.remove("is-sensor-blurred");
  pendingDocument = null;
  if (lastDocumentTrigger?.isConnected) lastDocumentTrigger.focus();
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => translatePage(button.dataset.language));
});

themeButton.addEventListener("click", () => applyTheme(!root.classList.contains("dark")));
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  navMenu.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  if (!open) closeDropdowns();
});

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

navMenu.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) closeNav();
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-dropdown, .nested-dropdown") && !event.target.closest(".menu-toggle")) closeDropdowns();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDropdowns();
    if (documentDialog.open) closeDocumentDialog();
  }
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "a") {
    event.preventDefault();
    const dialog = ownerDialog;
    document.querySelector(".owner-pin-form").reset();
    document.querySelector(".pin-error").textContent = "";
    document.querySelector(".owner-pin-view").hidden = false;
    document.querySelector(".owner-dashboard").hidden = true;
    if (!dialog.open) dialog.showModal();
    window.setTimeout(() => document.querySelector("#owner-pin").focus(), 0);
  }
});

document.querySelector(".owner-trigger").addEventListener("click", () => {
  document.querySelector(".owner-pin-form").reset();
  document.querySelector(".pin-error").textContent = "";
  document.querySelector(".owner-pin-view").hidden = false;
  document.querySelector(".owner-dashboard").hidden = true;
  if (!ownerDialog.open) ownerDialog.showModal();
  window.setTimeout(() => document.querySelector("#owner-pin").focus(), 0);
});
document.querySelector(".dialog-close").addEventListener("click", () => ownerDialog.close());
ownerDialog.addEventListener("click", (event) => {
  if (event.target === ownerDialog) ownerDialog.close();
});
document.querySelector(".owner-pin-form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (document.querySelector("#owner-pin").value !== ACCESS_PIN) {
    document.querySelector(".pin-error").textContent = i18n[language].pinError;
    document.querySelector("#owner-pin").select();
    return;
  }
  document.querySelector(".owner-pin-view").hidden = true;
  document.querySelector(".owner-dashboard").hidden = false;
  document.querySelector(".owner-dashboard h2").focus();
});
document.querySelector(".dashboard-lock").addEventListener("click", () => ownerDialog.close());

document.querySelectorAll(".vault-button").forEach((button) => {
  button.disabled = !vaultLinks[button.dataset.vault];
  button.addEventListener("click", async () => {
    const url = vaultLinks[button.dataset.vault];
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      document.querySelector(".copy-feedback").textContent = i18n[language].copySuccess;
    } catch (error) {
      document.querySelector(".copy-feedback").textContent = i18n[language].copyFailure;
      showToast(i18n[language].copyFailure);
    }
  });
});

document.querySelectorAll(".document-button").forEach((button) => {
  button.addEventListener("click", () => openDocumentGate(button));
});
document.querySelector(".document-close").addEventListener("click", closeDocumentDialog);
document.querySelector(".preview-close").addEventListener("click", closeDocumentDialog);
documentDialog.addEventListener("click", (event) => {
  if (event.target === documentDialog) closeDocumentDialog();
});
documentPinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (documentPinInput.value !== ACCESS_PIN) {
    document.querySelector(".document-pin-error").textContent = i18n[language].documentPinError;
    documentPinInput.select();
    return;
  }
  if (!pendingDocument) return;
  document.querySelector(".document-pin-error").textContent = "";
  documentPinView.hidden = true;
  documentPreview.hidden = false;
  document.querySelector("#document-title").textContent = pendingDocument.title;
  drawDocumentPreview(pendingDocument.title, pendingDocument.kind);
  documentDialog.classList.toggle("is-sensor-blurred", document.hidden);
  document.querySelector(".preview-close").focus();
});

document.addEventListener("contextmenu", (event) => {
  if (documentDialog.open && event.target.closest(".canvas-guard")) event.preventDefault();
});
document.addEventListener("keydown", (event) => {
  if (!documentDialog.open) return;
  const blockedShortcut = event.ctrlKey && ["p", "s", "u", "c"].includes(event.key.toLowerCase());
  const captureKey = event.key === "PrintScreen";
  if (blockedShortcut || captureKey || event.key === "F12") {
    event.preventDefault();
  }
});
function blurDocumentOnFocusLoss() {
  if (documentDialog.open && !documentPreview.hidden) documentDialog.classList.add("is-sensor-blurred");
}
function revealDocumentOnFocus() {
  if (documentDialog.open && !documentPreview.hidden && !document.hidden) documentDialog.classList.remove("is-sensor-blurred");
}
window.addEventListener("blur", blurDocumentOnFocusLoss);
window.addEventListener("focus", revealDocumentOnFocus);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) blurDocumentOnFocusLoss();
  else revealDocumentOnFocus();
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
  }, { threshold: .12 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

document.querySelector("#current-year").textContent = String(new Date().getFullYear());
applyTheme(localStorage.getItem("portfolio-theme") !== "light");
translatePage(language);

// Fungsi Membuka Pratinjau CV
function openCVPreview() {
  const dialog = document.getElementById('cv-preview-dialog');
  if (dialog) {
    dialog.showModal();
  }
}

// Fungsi Menutup Pratinjau CV
function closeCVPreview() {
  const dialog = document.getElementById('cv-preview-dialog');
  if (dialog) {
    dialog.close();
  }
}

// --- FITUR PRATINJAU CV TERPROTEKSI ---

function openCVPreview() {
  const dialog = document.getElementById('cv-preview-dialog');
  if (dialog) {
    dialog.showModal();
    renderProtectedCV();
  }
}

function closeCVPreview() {
  const dialog = document.getElementById('cv-preview-dialog');
  if (dialog) {
    dialog.close();
  }
}

// Render Gambar CV ke Elemen Canvas dengan Watermark
function renderProtectedCV() {
  const canvas = document.getElementById('cv-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const img = new Image();
  
  // Ganti lokasi file gambar CV Anda (Format JPG/PNG)
  img.src = 'assets/CV-Preview-Image.jpg'; 

  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    
    // 1. Gambar dokumen CV asli ke Canvas
    ctx.drawImage(img, 0, 0);

    // 2. Tambahkan Watermark Diagonal Menyilang
    ctx.save();
    ctx.rotate(-45 * Math.PI / 180);
    ctx.font = 'bold ' + (canvas.width / 18) + 'px sans-serif';
    ctx.fillStyle = 'rgba(220, 38, 38, 0.18)'; // Warna merah transparan
    ctx.textAlign = 'center';
    
    for (let y = -canvas.height; y < canvas.height * 2; y += 180) {
      for (let x = -canvas.width; x < canvas.width * 2; x += 400) {
        ctx.fillText('CONFIDENTIAL — NO DOWNLOAD / COPY', x, y);
      }
    }
    ctx.restore();
  };
}

// --- LOGIKA PROTEKSI PENCEGAHAN AKSES & TANGKAPAN LAYAR ---

// 1. Matikan Klik Kanan pada Seluruh Area Pratinjau
document.addEventListener('contextmenu', function(e) {
  if (e.target.closest('#cv-preview-dialog')) {
    e.preventDefault();
  }
});

// 2. Blokir Kombinasi Tombol Pintas Pintar (Pencegahan Download, Print, & DevTools)
document.addEventListener('keydown', function(e) {
  const dialog = document.getElementById('cv-preview-dialog');
  if (!dialog || !dialog.open) return;

  // Cetak (Ctrl+P / Cmd+P), Simpan (Ctrl+S / Cmd+S), Inspect Element (F12, Ctrl+Shift+I, Ctrl+U)
  if (
    (e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 's' || e.key === 'u') ||
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
    e.key === 'PrintScreen'
  ) {
    e.preventDefault();
    triggerBlurSecurity();
  }
});

// 3. Sensor Otomatis (Blur) saat Fokus Layar Berpindah atau Mencoba Screenshot
const blurOverlay = document.getElementById('cv-blur-overlay');

function triggerBlurSecurity() {
  if (blurOverlay) blurOverlay.style.display = 'flex';
}

function removeBlurSecurity() {
  if (blurOverlay) blurOverlay.style.display = 'none';
}

// Deteksi saat tab/aplikasi lain dibuka (Pengguna meninggalkan halaman)
window.addEventListener('blur', triggerBlurSecurity);
window.addEventListener('focus', removeBlurSecurity);

document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    triggerBlurSecurity();
  } else {
    removeBlurSecurity();
  }
});

// Jalur Berkas Gambar CV Masing-Masing Bahasa
const cvSources = {
  id: 'assets/CV-Preview-ID.jpg', // Berkas gambar CV Bahasa Indonesia
  en: 'assets/CV-Preview-EN.jpg'  // Berkas gambar CV Bahasa Inggris
};

let currentCVLang = 'id';

function openCVPreview(lang = 'id') {
  const dialog = document.getElementById('cv-preview-dialog');
  if (dialog) {
    dialog.showModal();
    switchCVLanguage(lang);
  }
}

function closeCVPreview() {
  const dialog = document.getElementById('cv-preview-dialog');
  if (dialog) {
    dialog.close();
  }
}

// Fungsi Pengalih Versi Bahasa CV
function switchCVLanguage(lang) {
  currentCVLang = lang;
  
  const btnId = document.getElementById('btn-cv-id');
  const btnEn = document.getElementById('btn-cv-en');
  
  // Penanda Visual Tombol Aktif
  if (btnId && btnEn) {
    if (lang === 'id') {
      btnId.style.backgroundColor = '#fbbf24';
      btnId.style.color = '#0a192f';
      btnId.style.fontWeight = 'bold';
      
      btnEn.style.backgroundColor = '';
      btnEn.style.color = '';
      btnEn.style.fontWeight = 'normal';
    } else {
      btnEn.style.backgroundColor = '#fbbf24';
      btnEn.style.color = '#0a192f';
      btnEn.style.fontWeight = 'bold';
      
      btnId.style.backgroundColor = '';
      btnId.style.color = '';
      btnId.style.fontWeight = 'normal';
    }
  }

  // Render Ulang Kanvas Sesuai Gambar CV Pilihan
  renderProtectedCV(cvSources[lang]);
}

// Render Gambar CV ke Kanvas dengan Watermark Keamanan
function renderProtectedCV(imagePath) {
  const canvas = document.getElementById('cv-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const img = new Image();
  
  img.src = imagePath;

  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    
    // Draw Image
    ctx.drawImage(img, 0, 0);

    // Add Watermark
    ctx.save();
    ctx.rotate(-45 * Math.PI / 180);
    ctx.font = 'bold ' + (canvas.width / 18) + 'px sans-serif';
    ctx.fillStyle = 'rgba(220, 38, 38, 0.18)';
    ctx.textAlign = 'center';
    
    for (let y = -canvas.height; y < canvas.height * 2; y += 180) {
      for (let x = -canvas.width; x < canvas.width * 2; x += 400) {
        ctx.fillText('CONFIDENTIAL — NO DOWNLOAD / COPY', x, y);
      }
    }
    ctx.restore();
  };
}

// Data Gambar Dokumentasi (4 Foto per Pengalaman)
const documentationData = {
  'bappeda-photo': {
    title: 'Dokumentasi — BAPPEDA Kabupaten Mojokerto',
    images: ['bappeda1.jpg', 'bappeda2.jpg', 'bappeda3.jpg', 'bappeda4.jpg']
  },
  'assistant-photo': {
    title: 'Dokumentasi — Asistensi Akademik Keuangan Regional',
    images: ['asisten1.jpg', 'asisten2.jpg', 'asisten3.jpg', 'asisten4.jpg']
  },
  'bep-photo': {
    title: 'Dokumentasi — Sekretaris Editorial BEP Journal',
    images: ['bep1.jpg', 'bep2.jpg', 'bep3.jpg', 'bep4.jpg']
  },
  'treasurer-photo': {
    title: 'Dokumentasi — Bendahara Umum UKM FEB RATI',
    images: ['rati1.jpg', 'rati2.jpg', 'rati3.jpg', 'rati4.jpg']
  },
  'it-secretary-photo': {
    title: 'Dokumentasi — Sekretaris Bidang IT UKM FEB RATI',
    images: ['it1.jpg', 'it2.jpg', 'it3.jpg', 'it4.jpg']
  }
};

// Data Sertifikat
const certificateData = {
  'bappeda-certificate': { title: 'Sertifikat Magang BAPPEDA Mojokerto', src: 'cert-bappeda.jpg' },
  'assistant-certificate': { title: 'Sertifikat Asisten Dosen Keuangan Regional', src: 'cert-assistant.jpg' },
  'bep-certificate': { title: 'Sertifikat Editorial BEP Journal', src: 'cert-bep.jpg' },
  'treasurer-certificate': { title: 'Sertifikat Pengurus UKM FEB RATI', src: 'cert-treasurer.jpg' },
  'it-secretary-certificate': { title: 'Sertifikat Sekretaris IT UKM FEB RATI', src: 'cert-it.jpg' }
};

// 1. Fungsi Buka Modal Dokumentasi (Render 4 Foto ke Canvas)
function openDocModal(key) {
  const data = documentationData[key];
  if (!data) return;

  document.getElementById('doc-modal-title').innerText = data.title;
  const grid = document.getElementById('doc-gallery-grid');
  grid.innerHTML = '';

  data.images.forEach((imgSrc, index) => {
    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.borderRadius = '8px';
    canvas.style.background = '#1e293b';
    grid.appendChild(canvas);

    renderProtectedCanvas(canvas, imgSrc, `CONFIDENTIAL PHOTO ${index + 1}`);
  });

  document.getElementById('documentation-modal').showModal();
}

function closeDocModal() {
  document.getElementById('documentation-modal').close();
}

// 2. Fungsi Buka Modal Sertifikat
function openCertModal(key) {
  const data = certificateData[key];
  if (!data) return;

  document.getElementById('cert-modal-title').innerText = data.title;
  const canvas = document.getElementById('cert-canvas');
  renderProtectedCanvas(canvas, data.src, 'PROTECTED CERTIFICATE - ADIESTI NURI AMANDA');

  document.getElementById('certificate-modal').showModal();
}

function closeCertModal() {
  document.getElementById('certificate-modal').close();
}

// 3. Render Gambar ke Canvas dengan Watermark Menyilang
function renderProtectedCanvas(canvas, imageSrc, watermarkText) {
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = imageSrc;

  img.onload = () => {
    canvas.width = img.width || 800;
    canvas.height = img.height || 600;

    // Gambar Foto Asli ke Kanvas
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Tambah Teks Watermark Menyilang (Diagonal)
    ctx.save();
    ctx.rotate((-25 * Math.PI) / 180);
    ctx.font = 'bold 24px DM Sans, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
    ctx.textAlign = 'center';

    const stepX = 250;
    const stepY = 120;
    for (let x = -canvas.width; x < canvas.width * 2; x += stepX) {
      for (let y = -canvas.height; y < canvas.height * 2; y += stepY) {
        ctx.fillText(watermarkText, x, y);
      }
    }
    ctx.restore();
  };
}

// 4. Mendaftarkan Event Listener pada Tombol Dokumentasi & Sertifikat
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.document-button').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const docKey = button.getAttribute('data-document');
      const kind = button.getAttribute('data-kind');

      if (kind === 'photo') {
        openDocModal(docKey);
      } else if (kind === 'certificate') {
        openCertModal(docKey);
      }
    });
  });
});

// ==========================================
// SYSTEM PROTEKSI KEAMANAN KETAT
// ==========================================

// Blokir Klik Kanan
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Blokir Kombinasi Tombol Pintas (Ctrl+S, Ctrl+P, Ctrl+U, F12, PrintScreen)
document.addEventListener('keydown', (e) => {
  if (
    e.key === 'F12' ||
    e.key === 'PrintScreen' ||
    (e.ctrlKey && ['s', 'p', 'u', 'S', 'P', 'U'].includes(e.key)) ||
    (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key))
  ) {
    e.preventDefault();
    triggerBlurOverlay();
  }
});

// Sensor Otomatis saat Jendela Kehilangan Fokus / Beralih Tab
function triggerBlurOverlay() {
  const overlays = document.querySelectorAll('.security-blur-overlay');
  overlays.forEach((el) => (el.style.display = 'flex'));
}

function hideBlurOverlay() {
  const overlays = document.querySelectorAll('.security-blur-overlay');
  overlays.forEach((el) => (el.style.display = 'none'));
}

window.addEventListener('blur', triggerBlurOverlay);
window.addEventListener('focus', hideBlurOverlay);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    triggerBlurOverlay();
  } else {
    hideBlurOverlay();
  }
});

// ==========================================
// 2. LOGIKA VERIFIKASI PIN / KATA SANDI
// ==========================================
const CORRECT_PIN = "1234"; // 🔑 Ganti dengan PIN pilihan Anda

function verifyPin(event) {
  event.preventDefault();
  const inputPin = document.getElementById('input-pin').value;
  const errorMsg = document.getElementById('pin-error-msg');
  const pinModal = document.getElementById('pin-lock-modal');

  if (inputPin === CORRECT_PIN) {
    errorMsg.style.display = 'none';
    pinModal.close(); // Menutup modal pengunci jika PIN benar
  } else {
    errorMsg.style.display = 'block';
    document.getElementById('input-pin').value = '';
  }
}

document.querySelectorAll('.document-button').forEach(button => {
  button.addEventListener('click', () => {
    const kind = button.getAttribute('data-kind');
    
    if (kind === 'photo') {
      const docModal = document.getElementById('documentation-modal');
      if (docModal) docModal.showModal();
    } else if (kind === 'certificate') {
      const certModal = document.getElementById('certificate-modal');
      if (certModal) certModal.showModal();
    }
  });
});

// Fungsi Membuka Modal Pop-Up
function openModal(modalId, titleText) {
  const modal = document.getElementById(modalId);
  if (modal) {
    if (titleText && modalId === 'modal-dokumentasi') {
      document.getElementById('dok-title').innerText = '📷 ' + titleText;
    } else if (titleText && modalId === 'modal-sertifikat') {
      document.getElementById('cert-title').innerText = '📜 ' + titleText;
    }
    modal.showModal();
  }
}

// Fungsi Menutup Modal Pop-Up
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.close();
  }
}

// ==========================================
// SISTEM PROTEKSI KEAMANAN DATA PRIBADI
// ==========================================

// 1. Mematikan Klik Kanan pada Seluruh Halaman Modal
document.addEventListener('contextmenu', function (e) {
  if (e.target.closest('.protected-modal') || e.target.classList.contains('protected-img')) {
    e.preventDefault();
    alert('Akses klik kanan dinonaktifkan untuk melindungi kerahasiaan dokumen pribadi.');
  }
});

// 2. Mematikan Kombinasi Tombol Pintas (Ctrl+S, Ctrl+P, Ctrl+U, F12, PrintScreen)
document.addEventListener('keydown', function (e) {
  // Blokir Ctrl+S (Save), Ctrl+P (Print), Ctrl+U (View Source), Ctrl+Shift+I (Inspect element), F12
  if (
    (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P' || e.key === 'u' || e.key === 'U')) ||
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) ||
    e.key === 'F12'
  ) {
    e.preventDefault();
    alert('Fitur ini dinonaktifkan demi perlindungan data pribadi.');
    return false;
  }

  // Efek Blur Sementara Jika Menekan Tombol PrintScreen
  if (e.key === 'PrintScreen') {
    const images = document.querySelectorAll('.protected-img');
    images.forEach(img => img.classList.add('blur-protection'));
    navigator.clipboard.writeText(''); // Kosongkan clipboard
    alert('Tangkapan layar dibatasi untuk menjaga keamanan dokumen.');
    setTimeout(() => {
      images.forEach(img => img.classList.remove('blur-protection'));
    }, 3000);
  }
});

// 3. Sensor Otomatis (Blur) Saat Peramban Kehilangan Fokus / Pengunjung Berpindah Aplikasi
window.addEventListener('blur', function () {
  const images = document.querySelectorAll('.protected-img');
  images.forEach(img => img.classList.add('blur-protection'));
});

window.addEventListener('focus', function () {
  const images = document.querySelectorAll('.protected-img');
  images.forEach(img => img.classList.remove('blur-protection'));
});

// Fungsi untuk membuka modal pop-up
function openModal(modalId, titleText) {
  const modal = document.getElementById(modalId);
  if (modal) {
    if (titleText && modalId === 'modal-dokumentasi') {
      const dokTitle = document.getElementById('dok-title');
      if (dokTitle) dokTitle.innerText = '📷 ' + titleText;
    } else if (titleText && modalId === 'modal-sertifikat') {
      const certTitle = document.getElementById('cert-title');
      if (certTitle) certTitle.innerText = '📜 ' + titleText;
    }
    modal.showModal();
  }
}

// Fungsi untuk menutup modal pop-up
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.close();
  }
}

// ==========================================
// 1. LOGIKA SLIDER SERTIFIKASI (4 SLIDE)
// ==========================================
let currentCertSlide = 0;
const totalCertSlides = 4; // 13 sertifikat (4 + 4 + 4 + 1)

function updateCertSlider() {
  const slides = document.querySelectorAll('#certifications .cert-slide');
  const dots = document.querySelectorAll('#certifications .cert-dot');
  const prevBtn = document.getElementById('cert-prev-btn');
  const nextBtn = document.getElementById('cert-next-btn');
  const indicator = document.getElementById('cert-slide-indicator');

  slides.forEach((slide, index) => {
    if (index === currentCertSlide) {
      slide.classList.add('cert-slide-active');
    } else {
      slide.classList.remove('cert-slide-active');
    }
  });

  dots.forEach((dot, index) => {
    if (index === currentCertSlide) {
      dot.classList.add('cert-dot-active');
    } else {
      dot.classList.remove('cert-dot-active');
    }
  });

  if (indicator) {
    indicator.innerText = `${currentCertSlide + 1} / ${totalCertSlides}`;
  }

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

// ==========================================
// 2. MODAL & KEAMANAN SERTIFIKAT TERPROTEKSI
// ==========================================
function openCertModal(title, imageSrc) {
  const modal = document.getElementById('cert-viewer-modal');
  const modalTitle = document.getElementById('cert-viewer-title');
  const modalImg = document.getElementById('cert-viewer-img');

  if (modal) {
    if (modalTitle) modalTitle.innerText = '📜 ' + title;
    if (modalImg) modalImg.src = imageSrc;
    modal.showModal();
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.close();
}

// Block Klik Kanan pada Modal & Foto
document.addEventListener('contextmenu', function (e) {
  if (e.target.closest('#cert-viewer-modal') || e.target.classList.contains('protected-img')) {
    e.preventDefault();
    alert('Akses klik kanan dinonaktifkan untuk melindungi kerahasiaan dokumen pribadi.');
  }
});

// Block Tombol Pintas Keyboard (Print, Save, Inspect, PrintScreen)
document.addEventListener('keydown', function (e) {
  if (
    (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P' || e.key === 'u' || e.key === 'U')) ||
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) ||
    e.key === 'F12'
  ) {
    e.preventDefault();
    alert('Fitur ini dinonaktifkan demi perlindungan data pribadi.');
    return false;
  }

  // Sensor Blur Saat Menekan Tombol PrintScreen
  if (e.key === 'PrintScreen') {
    const images = document.querySelectorAll('.protected-img');
    images.forEach(img => img.classList.add('blur-protection'));
    navigator.clipboard.writeText('');
    alert('Tangkapan layar dibatasi untuk menjaga keamanan dokumen.');
    setTimeout(() => {
      images.forEach(img => img.classList.remove('blur-protection'));
    }, 3000);
  }
});

// Sensor Blur Otomatis Saat Peramban Kehilangan Fokus / Pengunjung Berpindah Aplikasi
window.addEventListener('blur', function () {
  const images = document.querySelectorAll('.protected-img');
  images.forEach(img => img.classList.add('blur-protection'));
});

window.addEventListener('focus', function () {
  const images = document.querySelectorAll('.protected-img');
  images.forEach(img => img.classList.remove('blur-protection'));
});

// Fungsi untuk membuka Modal Sertifikat di Section 06
function openCertModal(title, imageSrc) {
  const modal = document.getElementById('cert-viewer-modal');
  const modalTitle = document.getElementById('cert-viewer-title');
  const modalImg = document.getElementById('cert-viewer-img');

  if (modal) {
    if (modalTitle) modalTitle.textContent = '📜 ' + title;
    if (modalImg) modalImg.src = imageSrc;

    // Membuka dialog modal (native HTML5 dialog)
    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }
  } else {
    console.error('Modal #cert-viewer-modal tidak ditemukan di HTML.');
  }
}

// Fungsi umum untuk menutup modal dialog
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    if (typeof modal.close === 'function') {
      modal.close();
    } else {
      modal.removeAttribute('open');
    }
  }
}

// Menutup modal jika pengguna mengklik area luar modal (backdrop)
document.addEventListener('click', (event) => {
  const modal = document.getElementById('cert-viewer-modal');
  if (modal && event.target === modal) {
    closeModal('cert-viewer-modal');
  }
});

// Memastikan fungsi terdaftar secara global di window
window.openCertModal = function(title, imageSrc) {
  const modal = document.getElementById('cert-viewer-modal');
  const modalTitle = document.getElementById('cert-viewer-title');
  const modalImg = document.getElementById('cert-viewer-img');

  if (!modal) {
    console.error('Modal #cert-viewer-modal tidak ditemukan.');
    return;
  }

  if (modalTitle) modalTitle.textContent = '📜 ' + title;
  if (modalImg) modalImg.src = imageSrc;

  if (typeof modal.showModal === 'function') {
    modal.showModal();
  } else {
    modal.setAttribute('open', '');
  }
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    if (typeof modal.close === 'function') {
      modal.close();
    } else {
      modal.removeAttribute('open');
    }
  }
};

// Menutup modal ketika area luar (backdrop) diklik
document.addEventListener('click', function(event) {
  const modal = document.getElementById('cert-viewer-modal');
  if (modal && event.target === modal) {
    window.closeModal('cert-viewer-modal');
  }
});

// Path lokasi file PDF CV Bahasa Indonesia & Inggris
const cvFiles = {
  id: 'ind-cv-adis.pdf', 
  en: 'eng-cv-adis.pdf'
};

// Fungsi Membuka Modal CV (Default memuat versi Bahasa Indonesia)
function openCVPreview(defaultLang = 'id') {
  const dialog = document.getElementById('cv-preview-dialog');
  if (dialog) {
    dialog.showModal();
    switchCVLanguage(defaultLang);
  }
}

// Fungsi Menutup Modal CV
function closeCVPreview() {
  const dialog = document.getElementById('cv-preview-dialog');
  if (dialog) {
    dialog.close();
  }
}

// Fungsi Mengganti Versi Bahasa CV & Highlight Tombol Aktif
function switchCVLanguage(lang) {
  const iframe = document.getElementById('cv-iframe');
  const btnId = document.getElementById('btn-cv-id');
  const btnEn = document.getElementById('btn-cv-en');

  if (!iframe || !btnId || !btnEn) return;

  if (lang === 'id') {
    // Memuat file PDF versi Bahasa Indonesia ke dalam iFrame
    iframe.src = cvFiles.id + '#toolbar=0&navpanes=0';

    // Highlight visual tombol CV Indonesia (Aktif)
    btnId.style.backgroundColor = '#fbbf24';
    btnId.style.color = '#0a192f';
    btnId.style.fontWeight = '700';

    // Reset gaya tombol CV Inggris (Non-Aktif)
    btnEn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    btnEn.style.color = '#ffffff';
    btnEn.style.fontWeight = '500';

  } else if (lang === 'en') {
    // Memuat file PDF versi Bahasa Inggris ke dalam iFrame
    iframe.src = cvFiles.en + '#toolbar=0&navpanes=0';

    // Highlight visual tombol CV Inggris (Aktif)
    btnEn.style.backgroundColor = '#fbbf24';
    btnEn.style.color = '#0a192f';
    btnEn.style.fontWeight = '700';

    // Reset gaya tombol CV Indonesia (Non-Aktif)
    btnId.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    btnId.style.color = '#ffffff';
    btnId.style.fontWeight = '500';
  }
}

// ==========================================
// FUNGSI DINAMIS DOKUMENTASI (2 FOTO) & SERTIFIKAT (1 FOTO)
// ==========================================

/**
 * Membuka Modal Dokumentasi dan merender 2 foto kegiatan
 * @param {string} titleText - Judul dokumentasi
 * @param {string} img1 - Path/URL foto pertama
 * @param {string} img2 - Path/URL foto kedua
 */
function openDocModal(titleText, img1, img2) {
  const modal = document.getElementById('modal-dokumentasi');
  const dokTitle = document.getElementById('dok-title');
  const gallery = document.getElementById('dok-gallery');

  if (modal && gallery) {
    if (dokTitle) dokTitle.innerText = '📷 ' + titleText;
    
    // Masukkan 2 foto ke dalam galeri modal
    gallery.innerHTML = `
      <img src="${img1}" alt="${titleText} - Foto 1" class="protected-img" ondragstart="return false;" oncontextmenu="return false;">
      <img src="${img2}" alt="${titleText} - Foto 2" class="protected-img" ondragstart="return false;" oncontextmenu="return false;">
    `;
    
    modal.showModal();
  }
}

/**
 * Membuka Modal Sertifikat dan merender 1 foto sertifikat
 * @param {string} titleText - Judul sertifikat
 * @param {string} certImg - Path/URL foto sertifikat
 */
function openCertModalSingle(titleText, certImg) {
  const modal = document.getElementById('modal-sertifikat');
  const certTitle = document.getElementById('cert-title');
  const gallery = document.getElementById('cert-gallery');

  if (modal && gallery) {
    if (certTitle) certTitle.innerText = '📜 ' + titleText;
    
    // Masukkan 1 foto sertifikat ke dalam galeri modal
    gallery.innerHTML = `
      <img src="${certImg}" alt="${titleText}" class="protected-img" ondragstart="return false;" oncontextmenu="return false;">
    `;
    
    modal.showModal();
  }
}

/**
 * Menutup Modal berdasarkan ID
 * @param {string} modalId - ID elemen dialog modal
 */
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.close();
  }
}

// ==========================================
// FUNGSI MEMBUKA MODAL SERTIFIKAT (PDF & GAMBAR TERPROTEKSI)
// ==========================================
window.openCertModal = function(title, fileSrc) {
  const modal = document.getElementById('cert-viewer-modal');
  const modalTitle = document.getElementById('cert-viewer-title');
  const modalContent = document.getElementById('cert-viewer-content');

  if (!modal) {
    console.error('Modal #cert-viewer-modal tidak ditemukan.');
    return;
  }

  if (modalTitle) modalTitle.textContent = '📜 ' + title;

  // Memeriksa apakah berkas berformat PDF
  const isPDF = fileSrc.toLowerCase().endsWith('.pdf');

  if (modalContent) {
    if (isPDF) {
      // Tampilkan PDF dengan Lapisan Pelindung Transparan di atasnya
      modalContent.innerHTML = `
        <div style="position: relative; width: 100%; height: 500px; border-radius: 8px; overflow: hidden;">
          <!-- Lapisan Pelindung Transparan (Menangkap Klik Kanan & Memunculkan Alert) -->
          <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 20; background: rgba(0,0,0,0.001);" 
               oncontextmenu="alert('Akses klik kanan dinonaktifkan untuk melindungi kerahasiaan dokumen pribadi.'); event.preventDefault(); event.stopPropagation(); return false;">
          </div>
          <iframe src="${fileSrc}#toolbar=0&navpanes=0" 
                  style="width: 100%; height: 100%; border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 8px; background: #ffffff;" 
                  title="${title}">
          </iframe>
        </div>`;
    } else {
      // Tampilkan sebagai elemen gambar jika formatnya JPG/PNG
      modalContent.innerHTML = `
        <img src="${fileSrc}" 
             alt="${title}" 
             class="protected-img"
             style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);" 
             ondragstart="return false;" 
             oncontextmenu="alert('Akses klik kanan dinonaktifkan untuk melindungi kerahasiaan dokumen pribadi.'); event.preventDefault(); return false;">`;
    }
  }

  // Tampilkan dialog modal
  if (typeof modal.showModal === 'function') {
    modal.showModal();
  } else {
    modal.setAttribute('open', '');
  }
};

// Aliaskan ke openCertModalSingle agar kompatibel dengan pemanggilan dari bagian lain
window.openCertModalSingle = function(titleText, fileSrc) {
  window.openCertModal(titleText, fileSrc);
};

