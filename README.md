<div align="center">

# My Portfolio

<img src="https://skillicons.dev/icons?i=html,css,js,tailwind" height="40" alt="HTML, CSS, JS, Tailwind"/>

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-Proprietary-blue?style=for-the-badge)

[Tentang](#tentang) &nbsp;·&nbsp;
[Fitur](#fitur) &nbsp;·&nbsp;
[Tech Stack](#tech-stack) &nbsp;·&nbsp;
[Struktur](#struktur-proyek) &nbsp;·&nbsp;
[Instalasi](#cara-menjalankan) &nbsp;·&nbsp;
[EmailJS](#konfigurasi-emailjs) &nbsp;·&nbsp;
[Kustomisasi](#kustomisasi) &nbsp;·&nbsp;
[Pengembang](#pengembang) &nbsp;·&nbsp;
[Lisensi](#lisensi)

</div>

## Tentang

Website portofolio pribadi satu halaman (_single page_) yang menampilkan profil, keahlian, proyek, dan kontak dari **Fedy Fs. Gerana**. Dibangun tanpa framework backend — murni HTML, CSS, dan JavaScript, dengan beberapa library pendukung yang dimuat melalui CDN.

## Fitur

<table style="width:100%; border-collapse:collapse;">
<colgroup><col style="width:25%"><col style="width:75%"></colgroup>
<thead>
<tr><th align="left">Fitur</th><th align="left">Deskripsi</th></tr>
</thead>
<tbody>
<tr><td>Dark / Light / System Mode</td><td>Tema otomatis mengikuti preferensi sistem, tersimpan di <code>localStorage</code>, tanpa efek kedip saat load</td></tr>
<tr><td>Multi-bahasa (ID / EN)</td><td>Terjemahan konten secara dinamis menggunakan i18next</td></tr>
<tr><td>Section lengkap</td><td>Beranda, Tentang Saya, Keahlian, Proyek (dengan filter kategori), dan Kontak</td></tr>
<tr><td>Form kontak fungsional</td><td>Terintegrasi EmailJS, mengirim pesan langsung dari frontend tanpa backend</td></tr>
<tr><td>Responsive design</td><td>Menyesuaikan seluruh ukuran layar, termasuk <em>bottom navigation</em> khusus mobile</td></tr>
<tr><td>Smooth scroll</td><td>Dilengkapi <em>scroll progress bar</em> di bagian atas halaman</td></tr>
<tr><td>Loading screen</td><td>Ditampilkan di awal dengan indikator persentase</td></tr>
</tbody>
</table>

## Tech Stack

<table style="width:100%; border-collapse:collapse;">
<colgroup><col style="width:25%"><col style="width:50%"><col style="width:25%"></colgroup>
<thead>
<tr><th align="left">Layer</th><th align="left">Teknologi</th><th align="left">Catatan</th></tr>
</thead>
<tbody>
<tr><td>Struktur</td><td>HTML5</td><td>—</td></tr>
<tr><td>Styling Dasar</td><td>CSS3</td><td>—</td></tr>
<tr><td>CSS Framework</td><td>Tailwind CSS</td><td>Dimuat via CDN</td></tr>
<tr><td>Interaktivitas</td><td>JavaScript (vanilla)</td><td>—</td></tr>
<tr><td>Font</td><td>Google Fonts — DM Sans, DM Mono, Playfair Display</td><td>Dimuat via CDN</td></tr>
<tr><td>Ikon</td><td>Font Awesome</td><td>v6.4.0</td></tr>
<tr><td>Internasionalisasi</td><td>i18next</td><td>v23.11.5</td></tr>
<tr><td>Pengiriman Form</td><td>EmailJS</td><td>v4</td></tr>
</tbody>
</table>

## Struktur Proyek

```
my-portfolio/
├── index.html    # Struktur utama halaman & konten
├── styles.css    # Styling tambahan di luar Tailwind
├── script.js     # Logika interaktif (tema, filter proyek, form, dsb.)
├── i18n.js       # Konfigurasi & kamus terjemahan (ID/EN)
└── Fedy.png      # Foto profil
```

## Cara Menjalankan

Tidak ada proses build — cukup buka `index.html` langsung di browser, atau jalankan local server sederhana:

```bash
# Menggunakan Python
python -m http.server 8000

# Atau menggunakan Node.js (npx serve)
npx serve .
```

Lalu buka `http://localhost:8000` di browser.

## Konfigurasi EmailJS

Form kontak menggunakan EmailJS, dikonfigurasi di `index.html`:

```js
emailjs.init("PUBLIC_KEY");
```

> **Catatan:** Gunakan Public Key milik akun EmailJS sendiri, dan atur pembatasan domain (_allowed origins_) di dashboard EmailJS agar form tidak disalahgunakan pihak lain.

## Kustomisasi

<table style="width:100%; border-collapse:collapse;">
<colgroup><col style="width:25%"><col style="width:75%"></colgroup>
<thead>
<tr><th align="left">Kebutuhan</th><th align="left">Lokasi Perubahan</th></tr>
</thead>
<tbody>
<tr><td>Ganti konten teks & terjemahan</td><td>Edit <code>i18n.js</code></td></tr>
<tr><td>Ganti data proyek</td><td>Cari elemen <code>id="projects-grid"</code> di <code>index.html</code></td></tr>
<tr><td>Ganti warna tema</td><td>Sesuaikan <code>tailwind.config</code> di <code>&lt;head&gt;</code> pada <code>index.html</code></td></tr>
<tr><td>Ganti foto profil</td><td>Ganti file <code>Fedy.png</code></td></tr>
</tbody>
</table>

## Pengembang

<table style="width:100%; border-collapse:collapse;">
<colgroup><col style="width:25%"><col style="width:75%"></colgroup>
<thead>
<tr><th align="left">Nama</th><th align="left">Peran</th></tr>
</thead>
<tbody>
<tr><td>Fedy Fs. Gerana</td><td>Web Developer</td></tr>
</tbody>
</table>

## Lisensi

Proyek ini bersifat pribadi (_personal portfolio_) dan tidak dipublikasikan sebagai open source untuk digunakan ulang secara bebas.

<div align="center">
<sub>© 2026 Fedy Fs. Gerana. All rights reserved.</sub>
</div>
