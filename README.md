<h1 align="center">My Portfolio</h1>

<p align="center">
Personal portfolio website — Fedy Fs. Gerana (Web Developer)
</p>

<p align="center">
<img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5">
<img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
</p>

## Tentang

Website portfolio pribadi satu halaman (single page) yang menampilkan profil, keahlian, proyek, dan kontak. Dibangun tanpa framework backend — murni HTML, CSS, dan JavaScript dengan bantuan beberapa library via CDN.

## Fitur

- **Dark / Light Mode** — tema otomatis mengikuti preferensi sistem, tersimpan di `localStorage`, tanpa efek kedip (flash) saat load.
- **Multi-bahasa (ID / EN)** — menggunakan [i18next](https://www.i18next.com/) untuk terjemahan konten secara dinamis.
- **Section lengkap**:
  - Beranda (Hero)
  - Tentang Saya
  - Keahlian
  - Proyek (dengan filter kategori)
  - Kontak (form pengiriman pesan)
- **Form kontak fungsional** — terintegrasi dengan [EmailJS](https://www.emailjs.com/) untuk mengirim pesan langsung dari frontend tanpa backend.
- **Responsive design** — termasuk bottom navigation khusus tampilan mobile.
- **Smooth scroll & scroll progress bar**.
- **Loading screen** dengan indikator persentase.

## Teknologi yang Digunakan

| Kategori           | Teknologi                                                       |
| ------------------ | --------------------------------------------------------------- |
| Struktur & Style   | HTML5, CSS3, [Tailwind CSS](https://tailwindcss.com/) (via CDN) |
| Interaktivitas     | JavaScript (vanilla)                                            |
| Font               | Google Fonts — DM Sans, DM Mono, Playfair Display               |
| Ikon               | Font Awesome 6                                                  |
| Internasionalisasi | i18next                                                         |
| Pengiriman Form    | EmailJS                                                         |

## Struktur Proyek

```
my-portfolio/
├── index.html      # Struktur utama halaman & konten
├── styles.css       # Styling tambahan di luar Tailwind
├── script.js        # Logika interaktif (tema, filter proyek, form, dsb.)
├── i18n.js           # Konfigurasi & kamus terjemahan (ID/EN)
└── Fedy.png          # Foto profil
```

## Cara Menjalankan

Karena tidak ada proses build, cukup buka `index.html` langsung di browser, atau jalankan local server sederhana:

```bash
# Menggunakan Python
python -m http.server 8000

# Atau menggunakan Node.js (npx serve)
npx serve .
```

Lalu akses melalui `http://localhost:8000`.

## Konfigurasi EmailJS

Form kontak menggunakan EmailJS dengan konfigurasi berikut di `index.html`:

```js
emailjs.init("PUBLIC_KEY");
```

> ⚠️ **Catatan:** Sebaiknya gunakan **Public Key** milik akun EmailJS sendiri, dan atur pembatasan domain (allowed origins) di dashboard EmailJS agar form tidak disalahgunakan pihak lain.

## Kustomisasi

- **Ganti konten teks & terjemahan** → edit `i18n.js`.
- **Ganti data proyek** → cari elemen dengan `id="projects-grid"` di `index.html`.
- **Ganti warna tema** → sesuaikan konfigurasi `tailwind.config` di bagian `<head>` pada `index.html`.
- **Ganti foto profil** → ganti file `Fedy.png`.

## Kontak

- **Developer:** Fedy Fs. Gerana

## Lisensi

Proyek ini bersifat pribadi (personal portfolio) dan tidak dipublikasikan sebagai open source untuk digunakan ulang secara bebas.
