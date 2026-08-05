<h1 align="center">My Portfolio</h1>
<p align="center"><i>Personal Portfolio Website — Fedy Fs. Gerana (Web Developer)</i></p>

<p align="center">
<img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5">
<img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/status-active-success" alt="Status">
</p>

<p align="center">
<img src="https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS Version">
<img src="https://img.shields.io/badge/FontAwesome-6.4.0-528DD7?logo=fontawesome&logoColor=white" alt="Font Awesome Version">
<img src="https://img.shields.io/badge/i18next-23.11.5-26A69A?logo=i18next&logoColor=white" alt="i18next Version">
<img src="https://img.shields.io/badge/EmailJS-4.x-FF6C37?logo=maildotru&logoColor=white" alt="EmailJS Version">
</p>

<p align="center">
  <a href="#-tentang">Tentang</a> •
  <a href="#-fitur">Fitur</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-struktur-proyek">Struktur</a> •
  <a href="#-cara-menjalankan">Instalasi</a> •
  <a href="#-konfigurasi-emailjs">EmailJS</a> •
  <a href="#-kontak">Kontak</a>
</p>

---

## <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/user-circle.svg" width="20" height="20" style="vertical-align:middle"> Tentang

**My Portfolio** adalah website portofolio pribadi satu halaman (_single page_) yang menampilkan profil, keahlian, proyek, dan kontak dari **Fedy Fs. Gerana**. Dibangun tanpa framework backend — murni **HTML, CSS, dan JavaScript** dengan bantuan beberapa library via CDN.

---

## <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/sparkles.svg" width="20" height="20" style="vertical-align:middle"> Fitur

<details open>
<summary><b>Klik untuk lihat daftar lengkap</b></summary>
<br>

- <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/moon-stars.svg" width="14" height="14" style="vertical-align:middle"> **Dark / Light / System Mode** — tema otomatis mengikuti preferensi sistem, tersimpan di `localStorage`, tanpa efek kedip (_flash_) saat load
- <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/language.svg" width="14" height="14" style="vertical-align:middle"> **Multi-bahasa (ID / EN)** — menggunakan [i18next](https://www.i18next.com/) untuk terjemahan konten secara dinamis
- <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/layout-grid.svg" width="14" height="14" style="vertical-align:middle"> **Section lengkap** — Beranda (Hero), Tentang Saya, Keahlian, Proyek (dengan filter kategori), dan Kontak
- <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/send.svg" width="14" height="14" style="vertical-align:middle"> **Form kontak fungsional** — terintegrasi dengan [EmailJS](https://www.emailjs.com/) untuk mengirim pesan langsung dari frontend tanpa backend
- <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/devices.svg" width="14" height="14" style="vertical-align:middle"> **Responsive design** — termasuk _bottom navigation_ khusus tampilan mobile
- <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/arrows-vertical.svg" width="14" height="14" style="vertical-align:middle"> **Smooth scroll** & _scroll progress bar_ di bagian atas halaman
- <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/loader.svg" width="14" height="14" style="vertical-align:middle"> **Loading screen** dengan indikator persentase

</details>

---

## <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/settings.svg" width="20" height="20" style="vertical-align:middle"> Tech Stack

| Komponen                                                                                                                                                          | Teknologi                                                                       | Versi     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------- |
| <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/file-code.svg" width="16" height="16" style="vertical-align:middle"> Struktur           | [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)                      | —         |
| <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/brush.svg" width="16" height="16" style="vertical-align:middle"> Style Dasar            | [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)                        | —         |
| <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/puzzle.svg" width="16" height="16" style="vertical-align:middle"> CSS Framework         | [Tailwind CSS](https://tailwindcss.com/docs/installation)                       | via CDN   |
| <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/code.svg" width="16" height="16" style="vertical-align:middle"> Interaktivitas          | [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (vanilla) | —         |
| <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/typography.svg" width="16" height="16" style="vertical-align:middle"> Font              | [Google Fonts](https://fonts.google.com/) — DM Sans, DM Mono, Playfair Display  | —         |
| <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/icons.svg" width="16" height="16" style="vertical-align:middle"> Ikon                   | [Font Awesome](https://fontawesome.com/download)                                | `6.4.0`   |
| <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/world.svg" width="16" height="16" style="vertical-align:middle"> Internasionalisasi     | [i18next](https://www.i18next.com/)                                             | `23.11.5` |
| <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/mail-forward.svg" width="16" height="16" style="vertical-align:middle"> Pengiriman Form | [EmailJS](https://www.emailjs.com/docs/sdk/installation/)                       | `v4`      |

---

## <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/folder.svg" width="20" height="20" style="vertical-align:middle"> Struktur Proyek

```
my-portfolio/
├── index.html    # Struktur utama halaman & konten
├── styles.css    # Styling tambahan di luar Tailwind
├── script.js     # Logika interaktif (tema, filter proyek, form, dsb.)
├── i18n.js       # Konfigurasi & kamus terjemahan (ID/EN)
└── Fedy.png      # Foto profil
```

---

## <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/rocket.svg" width="20" height="20" style="vertical-align:middle"> Cara Menjalankan

<details open>
<summary><b>Langkah-langkah menjalankan secara lokal</b></summary>

Karena tidak ada proses build, cukup buka `index.html` langsung di browser, atau jalankan local server sederhana:

```bash
# Menggunakan Python
python -m http.server 8000

# Atau menggunakan Node.js (npx serve)
npx serve .
```

Lalu akses melalui `http://localhost:8000`.

</details>

---

## <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/mail.svg" width="20" height="20" style="vertical-align:middle"> Konfigurasi EmailJS

Form kontak menggunakan EmailJS dengan konfigurasi berikut di `index.html`:

```js
emailjs.init("PUBLIC_KEY");
```

> <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/alert-triangle.svg" width="14" height="14" style="vertical-align:middle"> **Catatan:** Sebaiknya gunakan **Public Key** milik akun EmailJS sendiri, dan atur pembatasan domain (_allowed origins_) di dashboard EmailJS agar form tidak disalahgunakan pihak lain.

---

## <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/adjustments.svg" width="20" height="20" style="vertical-align:middle"> Kustomisasi

- <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/language.svg" width="14" height="14" style="vertical-align:middle"> **Ganti konten teks & terjemahan** → edit `i18n.js`
- <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/briefcase.svg" width="14" height="14" style="vertical-align:middle"> **Ganti data proyek** → cari elemen dengan `id="projects-grid"` di `index.html`
- <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/palette.svg" width="14" height="14" style="vertical-align:middle"> **Ganti warna tema** → sesuaikan konfigurasi `tailwind.config` di bagian `<head>` pada `index.html`
- <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/photo.svg" width="14" height="14" style="vertical-align:middle"> **Ganti foto profil** → ganti file `Fedy.png`

---

## <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/users.svg" width="20" height="20" style="vertical-align:middle"> Kontak

| Nama            | Peran         |
| --------------- | ------------- |
| Fedy Fs. Gerana | Web Developer |

---

## <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@3.46.0/icons/outline/file-text.svg" width="20" height="20" style="vertical-align:middle"> Lisensi

Proyek ini bersifat pribadi (_personal portfolio_) dan **tidak dipublikasikan sebagai open source** untuk digunakan ulang secara bebas.

<p align="center"><sub>© 2026 Fedy Fs. Gerana. All rights reserved.</sub></p>
