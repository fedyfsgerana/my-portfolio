// ============================================================
//  i18n.js — Data terjemahan Bahasa Indonesia & English
//
//  Cara pakai di HTML:
//    data-i18n="key"       → textContent biasa
//    data-i18n-html="key"  → innerHTML (boleh ada tag HTML)
//    data-i18n-ph="key"    → placeholder input/textarea
//    data-i18n-aria="key"  → aria-label (aksesibilitas)
//    data-i18n-title="key" → title tooltip
//
//  Diakses di script.js via: window.translations["id"] / ["en"]
// ============================================================

window.translations = {
  // ==========================================================
  //  BAHASA INDONESIA
  // ==========================================================
  id: {
    // ── Navbar ────────────────────────────────────────────────
    nav_tentang: "Tentang",
    nav_keahlian: "Keahlian",
    nav_proyek: "Proyek",
    nav_kontak: "Kontak",
    nav_hubungi: "Hubungi Saya",

    // ── Bottom Nav (Mobile) ───────────────────────────────────
    bnav_beranda: "Beranda",
    bnav_tentang: "Tentang",
    bnav_keahlian: "Keahlian",
    bnav_proyek: "Proyek",
    bnav_tema: "Tema",

    // ── Hero ──────────────────────────────────────────────────
    hero_role: "Web Developer",
    hero_greeting: "Halo, saya",
    hero_desc:
      "Saya seorang web developer yang mengerjakan proyek dari sisi tampilan hingga logika di baliknya — dengan fokus pada hasil yang bersih dan fungsional.",
    hero_cta_proyek: "Lihat Karya Saya",
    hero_cta_kontak: "Hubungi Saya",
    hero_find: "Temukan saya",
    hero_status: "Tersedia untuk proyek",
    hero_exp_label: "Pengalaman",
    hero_exp_unit: "tahun",
    hero_stat_proyek: "Proyek selesai",
    hero_stat_tahun: "Tahun pengalaman",
    hero_stat_klien: "Klien puas",

    // ── Tentang ───────────────────────────────────────────────
    about_label: "Tentang Saya",
    about_heading: "Bekerja dengan baik,",
    about_heading_sub: "dibaca dengan mudah",
    about_location: "Riau, Indonesia",
    // HTML diperbolehkan karena ada tag <strong>
    about_p1:
      'Sudah lebih dari <strong class="font-medium text-stone-800">2 tahun</strong> saya mengerjakan proyek web secara menyeluruh — merancang antarmuka yang nyaman dipakai sekaligus membangun backend yang stabil dan mudah dirawat.',
    about_p2:
      "Saya percaya kualitas kode terlihat bukan hanya saat pertama kali jalan, tapi saat proyek berkembang dan orang lain ikut terlibat.",
    about_p3:
      "Stack yang sering saya gunakan mencakup Vue.js, React, Node.js, dan Laravel — dipilih sesuai kebutuhan proyek, bukan sekadar kebiasaan.",
    about_tag1: "Pemecah Masalah",
    about_tag2: "Berorientasi Detail",
    about_tag3: "Pengembang Web",
    about_tag4: "Konsisten & Terstruktur",
    about_cv: "Unduh CV",
    about_contact: "Kontak Saya",

    // ── Keahlian ──────────────────────────────────────────────
    skill_label: "Keahlian",
    skill_heading: "Teknologi & Stack",

    // ── Proyek ────────────────────────────────────────────────
    project_label: "Karya Pilihan",
    project_heading: "Proyek Unggulan",
    filter_all: "Semua",
    filter_web: "Aplikasi Web",
    proj1_title: "Platform E-Commerce",
    proj1_desc:
      "Platform modern dengan pembayaran terintegrasi, inventaris real-time, dan dashboard analitik lengkap.",
    proj2_title: "Pelacak Kebugaran",
    proj2_desc:
      "Aplikasi web pelacakan latihan dengan dashboard statistik personal dan progress harian.",
    proj3_title: "UI Dashboard Perbankan",
    proj3_desc:
      "Dashboard admin fintech dengan aksesibilitas tinggi, sistem desain konsisten, dan laporan keuangan interaktif.",
    proj4_title: "Analitik Real-time",
    proj4_desc:
      "Dashboard intelijen bisnis dengan visualisasi data interaktif dan pelaporan otomatis berbasis Vue.js.",
    proj5_title: "Sistem Manajemen Toko",
    proj5_desc:
      "Aplikasi manajemen inventaris dan penjualan toko dengan laporan harian dan notifikasi stok otomatis.",
    proj6_title: "Platform Belajar Online",
    proj6_desc:
      "LMS sederhana dengan manajemen kursus, quiz interaktif, dan tracking progress siswa secara real-time.",

    // ── Kontak ────────────────────────────────────────────────
    contact_label: "Mari Berkolaborasi",
    contact_heading: "Punya proyek",
    contact_heading_sub: "yang ingin diwujudkan?",
    contact_desc:
      "Saya terbuka untuk kolaborasi maupun freelance — kirimkan pesan dan kita bisa mulai dari sana.",
    contact_email_label: "Email",
    contact_phone_label: "Telepon",
    contact_loc_label: "Lokasi",
    contact_loc_val: "Riau, Indonesia",
    contact_response: "Waktu respons rata-rata",
    contact_response_unit: "jam pada hari kerja",

    // ── Form ──────────────────────────────────────────────────
    form_send_label: "Kirim pesan",
    form_name: "Nama",
    form_name_ph: "Nama lengkap Anda",
    form_email: "Email",
    form_email_ph: "email@anda.com",
    form_subject: "Subjek",
    form_subject_ph: "Diskusi proyek / Konsultasi",
    form_message: "Pesan",
    form_message_ph: "Ceritakan tentang proyek Anda...",
    form_submit: "Kirim Pesan",
    form_sending: "Mengirim...",
    form_err_name: "Mohon isi nama Anda.",
    form_err_email: "Mohon isi email yang valid.",

    // ── Toast ─────────────────────────────────────────────────
    toast_success:
      "Pesan berhasil terkirim! Saya akan segera menghubungi Anda.",
    toast_error: "Mohon lengkapi form dengan benar.",

    // ── Footer & Misc ─────────────────────────────────────────
    footer_credit: "Dibuat dengan perhatian pada detail.",
    loader_text: "Memuat portofolio",
    theme_light: "Mode terang",
    theme_system: "Sistem",
    theme_dark: "Mode gelap",
  },

  // ==========================================================
  //  ENGLISH
  // ==========================================================
  en: {
    // ── Navbar ────────────────────────────────────────────────
    nav_tentang: "About",
    nav_keahlian: "Skills",
    nav_proyek: "Projects",
    nav_kontak: "Contact",
    nav_hubungi: "Contact Me",

    // ── Bottom Nav (Mobile) ───────────────────────────────────
    bnav_beranda: "Home",
    bnav_tentang: "About",
    bnav_keahlian: "Skills",
    bnav_proyek: "Projects",
    bnav_tema: "Theme",

    // ── Hero ──────────────────────────────────────────────────
    hero_role: "Web Developer",
    hero_greeting: "Hi, I'm",
    hero_desc:
      "I build web projects from the interface down to the backend — focused on clean, functional results.",
    hero_cta_proyek: "View My Work",
    hero_cta_kontak: "Contact Me",
    hero_find: "Find me on",
    hero_status: "Available for projects",
    hero_exp_label: "Experience",
    hero_exp_unit: "years",
    hero_stat_proyek: "Projects done",
    hero_stat_tahun: "Years experience",
    hero_stat_klien: "Happy clients",

    // ── About ─────────────────────────────────────────────────
    about_label: "About Me",
    about_heading: "Works well,",
    about_heading_sub: "easy to read",
    about_location: "Riau, Indonesia",
    // HTML diperbolehkan karena ada tag <strong>
    about_p1:
      'For over <strong class="font-medium text-stone-800">2 years</strong> I\'ve been building web projects end-to-end — crafting intuitive interfaces and stable, maintainable backends.',
    about_p2:
      "I believe code quality shows not just when it first runs, but as the project grows and others get involved.",
    about_p3:
      "My go-to stack includes Vue.js, React, Node.js, and Laravel — chosen based on project needs, not habit.",
    about_tag1: "Problem Solver",
    about_tag2: "Detail Oriented",
    about_tag3: "Web Developer",
    about_tag4: "Consistent & Structured",
    about_cv: "Download CV",
    about_contact: "Contact Me",

    // ── Skills ────────────────────────────────────────────────
    skill_label: "Skills",
    skill_heading: "Technologies & Stack",

    // ── Projects ──────────────────────────────────────────────
    project_label: "Selected Works",
    project_heading: "Featured Projects",
    filter_all: "All",
    filter_web: "Web App",
    proj1_title: "E-Commerce Platform",
    proj1_desc:
      "Modern platform with integrated payments, real-time inventory, and a complete analytics dashboard.",
    proj2_title: "Fitness Tracker",
    proj2_desc:
      "Web app for workout tracking with a personal statistics dashboard and daily progress monitoring.",
    proj3_title: "Banking UI Dashboard",
    proj3_desc:
      "Fintech admin dashboard with high accessibility, consistent design system, and interactive financial reports.",
    proj4_title: "Real-time Analytics",
    proj4_desc:
      "Business intelligence dashboard with interactive data visualizations and automated Vue.js-based reporting.",
    proj5_title: "Store Management System",
    proj5_desc:
      "Store inventory and sales management app with daily reports and automatic stock notifications.",
    proj6_title: "Online Learning Platform",
    proj6_desc:
      "Simple LMS with course management, interactive quizzes, and real-time student progress tracking.",

    // ── Contact ───────────────────────────────────────────────
    contact_label: "Let's Collaborate",
    contact_heading: "Have a project",
    contact_heading_sub: "you'd like to build?",
    contact_desc:
      "I'm open to collaboration and freelance work — send a message and we can start from there.",
    contact_email_label: "Email",
    contact_phone_label: "Phone",
    contact_loc_label: "Location",
    contact_loc_val: "Riau, Indonesia",
    contact_response: "Average response time",
    contact_response_unit: "hours on weekdays",

    // ── Form ──────────────────────────────────────────────────
    form_send_label: "Send a message",
    form_name: "Name",
    form_name_ph: "Your full name",
    form_email: "Email",
    form_email_ph: "email@you.com",
    form_subject: "Subject",
    form_subject_ph: "Project discussion / Consultation",
    form_message: "Message",
    form_message_ph: "Tell me about your project...",
    form_submit: "Send Message",
    form_sending: "Sending...",
    form_err_name: "Please fill in your name.",
    form_err_email: "Please enter a valid email.",

    // ── Toast ─────────────────────────────────────────────────
    toast_success: "Message sent! I'll get back to you shortly.",
    toast_error: "Please complete the form correctly.",

    // ── Footer & Misc ─────────────────────────────────────────
    footer_credit: "Crafted with attention to detail.",
    loader_text: "Loading portfolio",
    theme_light: "Light mode",
    theme_system: "System",
    theme_dark: "Dark mode",
  },
};
