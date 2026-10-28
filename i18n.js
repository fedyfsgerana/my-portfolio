/* Kamus terjemahan ID -> EN.
 * Kunci = teks Indonesia persis seperti di index.html. Tambah teks baru di sini agar ikut diterjemahkan.
 * T  : teks umum, atribut (placeholder, aria-label, alt)
 * TD : label di dalam <dt> (jika ada)
 * M  : pesan dinamis (validasi form, salin email)
 */
window.I18N = (function () {
  var T = {
    "Lewati ke konten": "Skip to content",
    Beranda: "Home",
    Tentang: "About",
    Keahlian: "Skills",
    Proyek: "Projects",
    "Hubungi saya": "Contact me",
    "Saya membangun aplikasi web untuk kebutuhan bisnis.":
      "I build web applications for business needs.",
    "Fedy Fs. Gerana, Fullstack Developer. Mengerjakan frontend, backend, dan database.":
      "Fedy Fs. Gerana, Fullstack Developer. Working across frontend, backend, and database.",
    "Stack utama": "Main stack",
    "Lihat proyek": "View projects",
    "Unduh CV (PDF)": "Download CV (PDF)",
    "Terbuka untuk proyek": "Open to projects",
    "Kode yang mudah dirawat.": "Code that is easy to maintain.",
    "Sejak Juni 2024 saya membangun dan merawat aplikasi internal untuk operasional perusahaan.":
      "Since June 2024 I have been building and maintaining internal applications for company operations.",
    "Saya memilih teknologi sesuai kebutuhan proyek dan menulis kode yang mudah dipahami tim.":
      "I choose technology to fit the project and write code the whole team can understand.",
    "Kontak saya": "Contact me",
    Teknologi: "Technology",
    Utama: "Primary",
    Pendukung: "Supporting",
    "Vue.js dan Nuxt.js": "Vue.js and Nuxt.js",
    "React dan Next.js": "React and Next.js",
    "Pinia dan Zustand": "Pinia and Zustand",
    "ASP.NET Core dan C#": "ASP.NET Core and C#",
    "NestJS dan Express.js": "NestJS and Express.js",
    "Laravel dan CodeIgniter": "Laravel and CodeIgniter",
    "JWT dan ASP.NET Identity": "JWT and ASP.NET Identity",
    "Jest dan Playwright": "Jest and Playwright",
    "ESLint dan Prettier": "ESLint and Prettier",
    "Aplikasi yang saya bangun dan rawat.":
      "Applications I build and maintain.",
    "Portal untuk membuka aplikasi perusahaan dengan satu kali login.":
      "A portal to open company applications with a single login.",
    "Booking Room Meeting": "Meeting Room Booking",
    "Aplikasi untuk memesan dan mengatur jadwal ruang rapat.":
      "An application to book and manage meeting room schedules.",
    "Sketsa peluncur aplikasi dengan deretan ubin aplikasi":
      "Sketch of an app launcher with a grid of application tiles",
    "Sketsa jadwal ruang rapat dengan blok pemesanan":
      "Sketch of a meeting room schedule with booking blocks",
    "Lihat detail": "View details",
    "[Nama proyek]": "[Project name]",
    "[Isi stack]": "[Add stack]",
    "[Tahun]": "[Year]",
    "Mari diskusikan proyek Anda.": "Let\u2019s discuss your project.",
    "Salin email": "Copy email",
    "Atau kirim pesan lewat form.": "Or send a message using the form.",
    Nama: "Name",
    Pesan: "Message",
    "Kirim pesan": "Send message",
    "Mengirim\u2026": "Sending\u2026",
    "Pesan terkirim": "Message sent",
    "Terima kasih. Saya akan membalas lewat email yang Anda tulis.":
      "Thank you. I will reply to the email address you entered.",
    "Kirim pesan lain": "Send another message",
    "Pesan gagal terkirim. Silakan coba lagi atau kirim lewat email.":
      "The message could not be sent. Please try again or email me directly.",
    Kontak: "Contact",
    "Kembali ke atas": "Back to top",
    "Fedy Fs. Gerana, kembali ke beranda": "Fedy Fs. Gerana, back to home",
    "Navigasi utama": "Main navigation",
    Bahasa: "Language",
    "Tema tampilan": "Display theme",
    "Ikuti sistem": "Follow system",
    "Tema terang": "Light theme",
    Terang: "Light",
    "Tema gelap": "Dark theme",
    Gelap: "Dark",
    "Foto Fedy Fs. Gerana": "Photo of Fedy Fs. Gerana",
    "Fedy Fs. Gerana mengenakan setelan jas hitam, dasi, dan kacamata hitam":
      "Fedy Fs. Gerana wearing a black suit, tie, and sunglasses",
    "Nama lengkap": "Full name",
    "nama@perusahaan.com": "name@company.com",
    "Ceritakan singkat kebutuhan Anda": "Briefly describe what you need",
    "Fedy Fs. Gerana, kembali ke atas": "Fedy Fs. Gerana, back to top",
    "Tautan cepat": "Quick links",
    "Navigasi bawah": "Bottom navigation",
  };
  var TD = {
    Proyek: "Project",
    Peran: "Role",
    Nama: "Name",
    "Saat ini": "Currently",
    Tahun: "Year",
  }; /* label di blok keterangan */
  var M = {
    id: {
      nama: "Nama wajib diisi.",
      email_req: "Email wajib diisi.",
      email_bad: "Format email belum benar.",
      pesan_req: "Pesan wajib diisi.",
      pesan_short: "Pesan minimal 10 karakter.",
      copied: "Email tersalin",
      copyfail: "Gagal menyalin, salin secara manual.",
    },
    en: {
      nama: "Name is required.",
      email_req: "Email is required.",
      email_bad: "Enter a valid email address.",
      pesan_req: "Message is required.",
      pesan_short: "Message must be at least 10 characters.",
      copied: "Email copied",
      copyfail: "Could not copy. Please copy it manually.",
    },
  };
  return { T: T, TD: TD, M: M };
})();
