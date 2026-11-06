// ==========================================
// 1. SISTEM KEAMANAN GLOBAL (Hanya 1 Listener)
// ==========================================
// Nonaktifkan klik kanan
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

// Blokir shortcut (Ctrl+S, Ctrl+P, Ctrl+U, F12, PrintScreen)
document.addEventListener('keydown', (e) => {
  const isBlockedCombo = (e.ctrlKey || e.metaKey) && ['s', 'p', 'u'].includes(e.key.toLowerCase());
  const isDevTools = e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase()));
  const isPrint = e.key === 'PrintScreen';

  if (isBlockedCombo || isDevTools || isPrint) {
    e.preventDefault();
  }
});

// Sensor Blur saat Tab Hilang Fokus
window.addEventListener('blur', () => {
  document.querySelectorAll('.protected-img').forEach(img => img.classList.add('blur-protection'));
});
window.addEventListener('focus', () => {
  document.querySelectorAll('.protected-img').forEach(img => img.classList.remove('blur-protection'));
});

"use strict";

// ==========================================
// 2. KAMUS TRANSLASI (i18n)
// ==========================================
const i18n = {
  id: {
    skip: "Lewati ke konten utama", openNav: "Buka navigasi", navHome: "Beranda", navAbout: "Tentang Saya",
    navEducation: "Pendidikan", navExperience: "Pengalaman", navWork: "Pengalaman Kerja",
    navOrg: "Pengalaman Organisasi", navStudio: "Studio", navTechnical: "Proyek Technical",
    navCreative: "Desain & Content", navCertifications: "Sertifikasi", navContact: "Kontak", navServices: "Services",
    heroEyebrow: "TERBUKA UNTUK PELUANG KOLABORASI",
    heroSubtitle: "Perencanaan Regional | Analitik Data | Administrasi | Pemasaran Digital",
    heroTagline: "Mengubah Data menjadi Wawasan, Perencanaan menjadi Dampak.",
    viewCv: "Curriculum Vitae", basedIn: "BERBASIS DI", focus: "FOKUS",
    peopleFocused: "& people-focused", scroll: "GULIR UNTUK MENJELAJAH",
    aboutEyebrow: "TENTANG SAYA",
    aboutTitle: 'Perspektif analitis.<br /><span class="accent">Dampak nyata.</span>',
    aboutLead: "Saya Adiesti Nuri Amanda, lulusan Ekonomi Pembangunan Universitas Trunojoyo Madura.",
    aboutBody: "Saya memadukan analisis data, perencanaan regional, administrasi, dan komunikasi digital untuk mendukung keputusan yang berdampak.",
    gpa: "IPK Ekonomi Pembangunan", sipdAccuracy: "Presisi rekonsiliasi SIPD", focusAreas: "Bidang kontribusi", letsTalk: "Mari berbincang",
    educationEyebrow: "PENDIDIKAN & PRESTASI",
    educationTitle: 'Belajar untuk<br /><span class="accent">membangun dampak.</span>',
    educationIntro: "Fondasi akademik dan prestasi yang membentuk rasa ingin tahu serta komitmen saya.",
    degree: "S1 Ekonomi Pembangunan", gpaLabel: "IPK Kumulatif", regionalPlanning: "Perencanaan Wilayah", regionalFinance: "Keuangan Regional",
    scholarship: "BEASISWA · 2025/2026", scholarshipDesc: "Penerima beasiswa UPZ BAZNAS.",
    achievement: "PRESTASI · 2024", finalist: "Finalis LKTI KOMPAS", finalistDesc: "Universitas Jember.",
    workEyebrow: "PENGALAMAN PROFESIONAL", workTitle: 'Kerja & kontribusi<br /><span class="accent">profesional.</span>',
    workIntro: "Pengalaman dalam perencanaan daerah, pengajaran, dan kerja editorial.",
    internship: "MAGANG · PERENCANAAN DAERAH", bappedaRole: "Staf Administrasi & Perencanaan",
    bappedaDesc: "Audit KAK/RSK tahun anggaran 2025–2026, dukungan Musrenbang RPJMD dan Forum Perangkat Daerah, serta rekonsiliasi data SIPD dengan presisi 100%.",
    viewDocumentation: "Dokumentasi", viewCertificate: "Sertifikat",
    teachingAssistant: "ASISTENSI AKADEMIK", assistantRole: "Asisten Lab. Praktikum",
    assistantDesc: "Mendampingi praktikum, membantu mahasiswa memahami materi, dan mendukung kelancaran kegiatan akademik Keuangan Regional.",
    editorialExperience: "EDITORIAL · JURNAL", editorialRole: "Sekretaris Editorial BEP Journal",
    editorialDesc: "Mendukung administrasi editorial, menyiapkan notulensi rapat redaksi, dan membantu koordinasi kegiatan jurnal.",
    orgEyebrow: "PENGALAMAN ORGANISASI", orgTitle: 'Bekerja bersama,<br /><span class="accent">bertumbuh bersama.</span>',
    orgIntro: "Kontribusi di organisasi mahasiswa melalui pengelolaan keuangan, teknologi informasi, dan komunikasi.",
    organization: "ORGANISASI · UKM FEB RATI", treasurerRole: "Bendahara Umum 1",
    treasurerDesc: "Mendukung pencatatan dan pengelolaan keuangan organisasi serta koordinasi kebutuhan anggaran kegiatan.",
    finance: "Keuangan", teamwork: "Kolaborasi", itSecretaryRole: "Sekretaris Bidang IT",
    itSecretaryDesc: "Mendukung kebutuhan digital dan dokumentasi organisasi serta berkontribusi sebagai MC pada Dies Natalis.",
    documentation: "Dokumentasi", studioEyebrow: "STUDIO KARYA", studioTitle: 'Ide menjadi<br /><span class="accent">sesuatu yang nyata.</span>',
    studioIntro: "Eksplorasi proyek data-teknikal dan karya desain komunikasi visual.",
    technicalProjects: "Proyek Technical", sentimentDesc: "Konsep dashboard web interaktif yang memadukan alur AI dan analisis sentimen pelanggan.",
    ChainTitle: "Interactive Import Supply Chain Analytics", ChainDesc: "Eksplorasi performa penjualan melalui dashboard dan visualisasi data interaktif.",
    regionalAudit: "PERENCANAAN REGIONAL", auditTitle: "Audit Data BAPPEDA Mojokerto", auditDesc: "Audit KAK/RSK 2025–2026 dan rekonsiliasi SIPD dengan presisi 100%.",
    creativeContent: "Desain & Content", academicDesign: "DESAIN PUBLIKASI AKADEMIK", publicationTitle: "Academic Publication Collateral", publicationDesc: "Konsep pamflet dan banner Call for Paper BEP Journal Volume 6.",
    socialBranding: "BRANDING MEDIA SOSIAL & EVENT", socialTitle: "Social Media & Event Templates", socialDesc: "Template IG Story live report MPAB dan layout ucapan ulang tahun pengurus.",
    digitalIdentity: "IDENTITAS DIGITAL & VIDEO", identityTitle: "Digital Identity & Video Editing", identityDesc: "Eksplorasi header LinkedIn profesional, Linktree, dan editing video menggunakan CapCut.",
    certEyebrow: "LISENSI & SERTIFIKASI", certTitle: 'Belajar tanpa<br /><span class="accent">berhenti.</span>', certIntro: "Sertifikasi yang memperkuat kompetensi analitik, digital, dan perencanaan (Total 13 Sertifikat).",
    contactEyebrow: "MULAI KONEKSI", contactTitle: 'Mari Terhubung &<br /><span class="accent">Berkolaborasi!</span>', contactDesc: "Punya proyek, peluang, atau ide yang ingin dibahas? Saya senang mendengar kabar dari Anda.",
    backTop: "Kembali ke atas ↑"
  },
  en: {
    skip: "Skip to main content", openNav: "Open navigation", navHome: "Home", navAbout: "About Me",
    navEducation: "Education", navExperience: "Experience", navWork: "Work Experience",
    navOrg: "Organization Experience", navStudio: "Studio", navTechnical: "Technical Projects",
    navCreative: "Design & Content", navCertifications: "Certifications", navContact: "Contact", navServices: "Services",
    heroEyebrow: "OPEN FOR COLLABORATION OPPORTUNITIES",
    heroSubtitle: "Regional Planning | Data Analytics | Administration | Digital Marketing",
    heroTagline: "Turning Data into Insights, Planning into Impact.",
    viewCv: "Curriculum Vitae", basedIn: "BASED IN", focus: "FOCUS",
    peopleFocused: "& people-focused", scroll: "SCROLL TO EXPLORE",
    aboutEyebrow: "ABOUT ME", aboutTitle: 'Analytical perspective.<br /><span class="accent">Real impact.</span>',
    aboutLead: "I am Adiesti Nuri Amanda, a Development Economics graduate from Universitas Trunojoyo Madura.",
    aboutBody: "I combine data analysis, regional planning, administration, and digital communication to support impactful decisions.",
    gpa: "Development Economics GPA", sipdAccuracy: "SIPD Reconciliation Accuracy", focusAreas: "Contribution Areas", letsTalk: "Let's talk",
    educationEyebrow: "EDUCATION & ACHIEVEMENTS", educationTitle: 'Learning to<br /><span class="accent">build impact.</span>',
    educationIntro: "Academic foundations and achievements shaping my curiosity and commitment.",
    degree: "Bachelor of Economics in Development Economics", gpaLabel: "Cumulative GPA", regionalPlanning: "Regional Planning", regionalFinance: "Regional Finance",
    scholarship: "SCHOLARSHIP · 2025/2026", scholarshipDesc: "UPZ BAZNAS scholarship recipient.",
    achievement: "ACHIEVEMENT · 2024", finalist: "KOMPAS Scientific Writing Finalist", finalistDesc: "Universitas Jember.",
    workEyebrow: "PROFESSIONAL EXPERIENCE", workTitle: 'Work & professional<br /><span class="accent">contributions.</span>',
    workIntro: "Experience in regional planning, teaching assistance, and editorial work.",
    internship: "INTERNSHIP · REGIONAL PLANNING", bappedaRole: "Administration & Planning Staff",
    bappedaDesc: "KAK/RSK auditing for FY 2025–2026, supporting RPJMD Musrenbang & Regional Forum, and 100% precision SIPD data reconciliation.",
    viewDocumentation: "Documentation", viewCertificate: "Certificate",
    teachingAssistant: "ACADEMIC ASSISTANTSHIP", assistantRole: "Lab Practical Assistant",
    assistantDesc: "Assisting practical sessions, supporting student comprehension, and ensuring smooth Regional Finance academic operations.",
    editorialExperience: "EDITORIAL · JOURNAL", editorialRole: "Editorial Secretary - BEP Journal",
    editorialDesc: "Supporting editorial administration, preparing meeting minutes, and coordinating journal publishing activities.",
    orgEyebrow: "ORGANIZATION EXPERIENCE", orgTitle: 'Working together,<br /><span class="accent">growing together.</span>',
    orgIntro: "Contributions in student organizations through financial management, IT, and communications.",
    organization: "ORGANIZATION · UKM FEB RATI", treasurerRole: "General Treasurer 1",
    treasurerDesc: "Managing financial records, tracking budgets, and coordinating financial planning for organizational events.",
    finance: "Finance", teamwork: "Collaboration", itSecretaryRole: "IT Division Secretary",
    itSecretaryDesc: "Supporting digital needs, event documentation, and serving as Master of Ceremonies for Anniversary events.",
    documentation: "Documentation", studioEyebrow: "WORKS STUDIO", studioTitle: 'Turning ideas into<br /><span class="accent">something real.</span>',
    studioIntro: "Exploration of data-technical projects and visual communication designs.",
    technicalProjects: "Technical Projects", sentimentDesc: "Interactive web dashboard concept combining AI logic workflows and customer sentiment analysis.",
    ChainTitle: "Interactive Import Supply Chain Analytics", ChainDesc: "Sales performance exploration using interactive dashboards and data visualization.",
    regionalAudit: "REGIONAL PLANNING", auditTitle: "BAPPEDA Mojokerto Data Audit", auditDesc: "KAK/RSK 2025–2026 audit and SIPD reconciliation with 100% precision.",
    creativeContent: "Design & Content", academicDesign: "ACADEMIC PUBLICATION DESIGN", publicationTitle: "Academic Publication Collateral", publicationDesc: "Pamphlet and banner design concept for BEP Journal Volume 6 Call for Paper.",
    socialBranding: "SOCIAL MEDIA & EVENT BRANDING", socialTitle: "Social Media & Event Templates", socialDesc: "Instagram Story templates for MPAB live report and committee birthday announcements.",
    digitalIdentity: "DIGITAL IDENTITY & VIDEO", identityTitle: "Digital Identity & Video Editing", identityDesc: "Professional LinkedIn header design, Linktree customization, and CapCut video editing.",
    certEyebrow: "LICENSES & CERTIFICATIONS", certTitle: 'Learning without<br /><span class="accent">stopping.</span>', certIntro: "Certifications reinforcing analytical, digital, and planning skills (Total 13 Certifications).",
    contactEyebrow: "START A CONNECTION", contactTitle: "Let's Connect &<br /><span class=\"accent\">Collaborate!</span>", contactDesc: "Have a project, opportunity, or idea to discuss? I would love to hear from you.",
    backTop: "Back to top ↑"
  }
};

const ACCESS_PIN = "1234";
const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const navMenu = document.querySelector("#nav-links");
const menuButton = document.querySelector(".menu-toggle");
const ownerDialog = document.querySelector(".owner-dialog");
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

  updateThemeLabel();
}

function applyTheme(isDark) {
  root.classList.toggle("dark", isDark);
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  updateThemeLabel();
}

function updateThemeLabel() {
  const isDark = root.classList.contains("dark");
  const label = isDark ? (language === "id" ? "Ganti ke mode terang" : "Switch to light mode") : (language === "id" ? "Ganti ke mode gelap" : "Switch to dark mode");
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

// Event Listeners Navigasi
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
  if (!event.target.closest(".nav-dropdown, .nested-dropdown") && !event.target.closest(".menu-toggle")) closeDropdowns();
});

// ==========================================
// 5. MODAL CV (PRATINJAU DUAL BAHASA PDF)
// ==========================================
const cvFiles = {
  id: 'ind-cv-adis.pdf',
  en: 'eng-cv-adis.pdf'
};

function openCVPreview(defaultLang = 'id') {
  const dialog = document.getElementById('cv-preview-dialog');
  if (dialog) {
    dialog.showModal();
    switchCVLanguage(defaultLang);
  }
}

function closeCVPreview() {
  const dialog = document.getElementById('cv-preview-dialog');
  if (dialog) dialog.close();
}

function switchCVLanguage(lang) {
  const iframe = document.getElementById('cv-iframe');
  const btnId = document.getElementById('btn-cv-id');
  const btnEn = document.getElementById('btn-cv-en');

  if (!iframe || !btnId || !btnEn) return;

  if (lang === 'id') {
    iframe.src = cvFiles.id + '#toolbar=0&navpanes=0';
    btnId.style.backgroundColor = '#fbbf24';
    btnId.style.color = '#0a192f';
    btnId.style.fontWeight = '700';

    btnEn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    btnEn.style.color = '#ffffff';
    btnEn.style.fontWeight = '500';
  } else {
    iframe.src = cvFiles.en + '#toolbar=0&navpanes=0';
    btnEn.style.backgroundColor = '#fbbf24';
    btnEn.style.color = '#0a192f';
    btnEn.style.fontWeight = '700';

    btnId.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    btnId.style.color = '#ffffff';
    btnId.style.fontWeight = '500';
  }
}

// ==========================================
// 6. MODAL DOKUMENTASI (FOTO) & SERTIFIKAT (PDF/GAMBAR)
// ==========================================
function openDocModal(titleText, img1, img2) {
  const modal = document.getElementById('modal-dokumentasi');
  const dokTitle = document.getElementById('dok-title');
  const gallery = document.getElementById('dok-gallery');

  if (modal && gallery) {
    if (dokTitle) dokTitle.innerText = '📷 ' + titleText;
    gallery.innerHTML = `
      <img src="${img1}" alt="${titleText} - Foto 1" class="protected-img" ondragstart="return false;" oncontextmenu="return false;">
      <img src="${img2}" alt="${titleText} - Foto 2" class="protected-img" ondragstart="return false;" oncontextmenu="return false;">
    `;
    modal.showModal();
  }
}

function openCertModal(title, fileSrc) {
  const modal = document.getElementById('cert-viewer-modal');
  const modalTitle = document.getElementById('cert-viewer-title');
  const modalContent = document.getElementById('cert-viewer-content');

  if (!modal) return;
  if (modalTitle) modalTitle.textContent = '📜 ' + title;

  const isPDF = fileSrc.toLowerCase().endsWith('.pdf');

  if (modalContent) {
    if (isPDF) {
      modalContent.innerHTML = `
        <div style="position: relative; width: 100%; height: 500px; border-radius: 8px; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 20; background: rgba(0,0,0,0.001);" 
               oncontextmenu="alert('Akses klik kanan dinonaktifkan.'); event.preventDefault(); return false;">
          </div>
          <iframe src="${fileSrc}#toolbar=0&navpanes=0" 
                  style="width: 100%; height: 100%; border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 8px; background: #ffffff;" 
                  title="${title}">
          </iframe>
        </div>`;
    } else {
      modalContent.innerHTML = `
        <img src="${fileSrc}" 
             alt="${title}" 
             class="protected-img"
             style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);" 
             ondragstart="return false;" 
             oncontextmenu="alert('Akses klik kanan dinonaktifkan.'); event.preventDefault(); return false;">`;
    }
  }

  if (typeof modal.showModal === 'function') {
    modal.showModal();
  }
}

function openCertModalSingle(titleText, fileSrc) {
  openCertModal(titleText, fileSrc);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal && typeof modal.close === 'function') {
    modal.close();
  }
}

// Global window exposure
window.openCVPreview = openCVPreview;
window.closeCVPreview = closeCVPreview;
window.switchCVLanguage = switchCVLanguage;
window.openDocModal = openDocModal;
window.openCertModal = openCertModal;
window.openCertModalSingle = openCertModalSingle;
window.closeModal = closeModal;

// ==========================================
// 7. SLIDER SERTIFIKASI (SECTION 06)
// ==========================================
let currentCertSlide = 0;
const totalCertSlides = 4;

function updateCertSlider() {
  const slides = document.querySelectorAll('#certifications .cert-slide');
  const dots = document.querySelectorAll('#certifications .cert-dot');
  const prevBtn = document.getElementById('cert-prev-btn');
  const nextBtn = document.getElementById('cert-next-btn');
  const indicator = document.getElementById('cert-slide-indicator');

  slides.forEach((slide, index) => {
    slide.classList.toggle('cert-slide-active', index === currentCertSlide);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle('cert-dot-active', index === currentCertSlide);
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
// 8. INISIALISASI HALAMAN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector("#current-year").textContent = String(new Date().getFullYear());
  applyTheme(localStorage.getItem("portfolio-theme") !== "light");
  translatePage(language);
});