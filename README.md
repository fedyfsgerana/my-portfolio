# My Portfolio

Website portofolio pribadi **Fedy Fs. Gerana**, Fullstack Developer: profil, teknologi, proyek, dan kontak dalam satu halaman.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![EmailJS](https://img.shields.io/badge/EmailJS-v4-6C63FF)
![License](https://img.shields.io/badge/License-Proprietary-blue)

**[Buka website](https://fedyfsgerana.github.io/my-portfolio/)**

## Daftar Isi

- [Fitur](#fitur)
- [Proyek](#proyek)
- [Tech Stack](#tech-stack)
- [Memulai](#memulai)
- [Konfigurasi](#konfigurasi)
- [Struktur Proyek](#struktur-proyek)
- [Deployment](#deployment)
- [Aksesibilitas dan Kompatibilitas](#aksesibilitas-dan-kompatibilitas)
- [Lisensi](#lisensi)
- [Pembuat](#pembuat)

## Fitur

| Fitur | Deskripsi |
| --- | --- |
| Tema Sistem / Terang / Gelap | Mengikuti pengaturan perangkat. Pilihan tersimpan di `localStorage` (`theme`) dan diterapkan tanpa kedip saat halaman dimuat |
| Dua bahasa (ID / EN) | Seluruh halaman bisa diterjemahkan. Pilihan tersimpan (`lang`), kamus ada di `i18n.js` |
| Layout bento responsif | Hero, Tentang, Teknologi, Proyek, dan Kontak. Diuji dari lebar 320 px sampai 2560 px |
| Navigasi | Menu atas yang menempel, menu bawah khusus ponsel, dan penanda bagian aktif saat menggulir |
| Kartu proyek | Tombol **Coba demo** dan **GitHub** per proyek. Susunan kartu menyesuaikan jumlahnya secara otomatis |
| Form kontak | Validasi per kolom, status mengirim, pesan sukses atau gagal, dan pengiriman lewat EmailJS |
| Salin email | Satu klik, dengan konfirmasi |
| Efek sorot kursor | Hanya aktif saat _hover_ pada perangkat dengan kursor |

## Proyek

Proyek yang ditampilkan di website ini, masing-masing dengan demo interaktif dan kode sumber publik:

| Proyek | Deskripsi | Stack | Tautan |
| --- | --- | --- | --- |
| SSO Launcher | Portal login tunggal (SSO) dan peluncur aplikasi dengan akses berbasis grup, sesi lintas aplikasi, dan audit trail | .NET 10, Next.js, TypeScript, PostgreSQL | [Demo](https://fedyfsgerana.github.io/sso-launcher/) · [GitHub](https://github.com/fedyfsgerana/sso-launcher) |
| Meeting Room Booking | Pemesanan ruang meeting dengan persetujuan bertingkat, pengecekan kesiapan ruang, monitoring, dan riwayat aktivitas | Next.js, React, TypeScript, PostgreSQL | [Demo](https://fedyfsgerana.github.io/meeting-room-booking/) · [GitHub](https://github.com/fedyfsgerana/meeting-room-booking) |

## Tech Stack

| Lapisan | Teknologi | Catatan |
| --- | --- | --- |
| Struktur | HTML5 | Semantik: `header`, `main`, `section`, `figure`, `footer` |
| Gaya | CSS3 | Variabel CSS, `grid`, `color-mix()`, tanpa preprocessor |
| Perilaku | JavaScript (vanilla) | Tanpa framework dan pustaka tambahan |
| Font | [Geist](https://fonts.google.com/specimen/Geist) dan Geist Mono | Dari Google Fonts, dengan font sistem sebagai cadangan |
| Form | [EmailJS](https://www.emailjs.com/) Browser SDK v4 | Dimuat dari CDN jsDelivr |

Tidak ada dependensi npm dan tidak ada proses build. Layanan luar yang dipakai hanya **Google Fonts** dan **EmailJS**.

## Memulai

### Prasyarat

- Browser modern
- Opsional: Python 3 atau Node.js untuk server lokal, supaya perilakunya sama dengan saat dipublikasikan (misalnya batas domain EmailJS)

### Menjalankan secara lokal

1. Clone repository.

   ```bash
   git clone https://github.com/fedyfsgerana/my-portfolio.git
   cd my-portfolio
   ```

2. Jalankan server lokal, pilih salah satu.

   ```bash
   python -m http.server 8000
   ```

   ```bash
   npx serve .
   ```

3. Buka `http://localhost:8000`.

Membuka `index.html` langsung dari folder juga bisa, tetapi form kontak mungkin ditolak EmailJS karena alamatnya bukan domain yang diizinkan.

## Konfigurasi

### EmailJS

Diatur di bagian atas `script.js`:

```js
var EMAILJS = { publicKey: "...", service: "...", template: "..." };
```

Template EmailJS membaca empat variabel. Atribut `name` pada form **tidak boleh diubah** kecuali template ikut diubah.

| Variabel | Sumber |
| --- | --- |
| `name` | Kolom Nama |
| `email` | Kolom Email |
| `message` | Kolom Pesan |
| `subject` | Input tersembunyi, nilainya "Pesan dari website portfolio" |

> **Catatan:** Public key memang aman berada di frontend. Atur **allowed origins** di dashboard EmailJS supaya form tidak disalahgunakan pihak lain.

### Kartu proyek

Kartu proyek ada di `index.html`, di dalam `<div class="pgrid2">` pada `<section id="proyek">`. Untuk menambah proyek, salin satu blok `<article class="card spot"> ... </article>`, lalu ubah judul, deskripsi, chip stack, tahun, dan tautannya.

| Jumlah kartu | Tampilan di desktop dan tablet |
| --- | --- |
| Genap (2, 4, ...) | Semua kartu sama lebar, dua kolom |
| Ganjil (1, 3, 5, ...) | Kartu pertama menjadi proyek unggulan selebar penuh, sisanya dua kolom |

Di ponsel, semua kartu tersusun satu kolom. Kalau kartu disalin lengkap dengan ilustrasi `<svg>`, ubah `id` gradient-nya supaya unik, atau ganti ilustrasi dengan gambar.

Tautan diisi lewat `href` pada tombol di dalam kartu:

```html
<a class="plink" data-kind="preview" href="https://fedyfsgerana.github.io/nama-repo/">Coba demo</a>
<a class="plink" data-kind="repo" href="https://github.com/fedyfsgerana/nama-repo">GitHub</a>
```

| Kondisi `href` | Perilaku tombol |
| --- | --- |
| Terisi | Aktif dan terbuka di tab baru |
| Kosong | Tampil redup dan tidak bisa diklik |

Untuk menyembunyikan tombol yang kosong sepenuhnya, tambahkan `data-show-empty="false"` pada `<section id="proyek">`. Kalau kedua tombol kosong, baris tombolnya ikut hilang.

Ilustrasi kartu bisa diganti tangkapan layar:

```html
<div class="art">
  <img src="proyek/nama.webp" alt="Deskripsi tampilan aplikasi" loading="lazy" />
</div>
```

> **Catatan:** Untuk aplikasi internal perusahaan, jangan tampilkan kode atau data asli. Pakai tangkapan layar dengan data yang disamarkan, dan biarkan tautan GitHub kosong.

### Bahasa

Teks Indonesia ada di `index.html`, terjemahan Inggrisnya di `i18n.js`:

```js
"Teks Indonesia persis seperti di HTML": "English translation",
```

Kunci harus sama persis dengan teks di HTML. Teks yang tidak ada di kamus tampil apa adanya di kedua bahasa.

### Tema dan warna

Warna aksen dikendalikan variabel `--c` dan `--c-strong` di `styles.css`, yang didefinisikan terpisah untuk tema terang (blok `:root`) dan tema gelap. Mengganti nilai di kedua tempat sudah cukup untuk mengubah aksen di seluruh halaman.

### Foto dan CV

| Berkas | Ketentuan |
| --- | --- |
| `Fedy.webp` | Rasio 4:5, sekitar 800 x 1000 piksel |
| `CV. Fedy Fs. Gerana.pdf` | Ganti dengan berkas baru bernama sama |

## Struktur Proyek

```text
my-portfolio/
├── index.html                 # Struktur dan seluruh teks (bahasa Indonesia)
├── styles.css                 # Seluruh gaya; token warna di bagian atas
├── script.js                  # Tema, bahasa, salin email, form EmailJS, tautan proyek
├── i18n.js                    # Kamus terjemahan ID → EN
├── Fedy.webp                  # Foto profil
├── CV. Fedy Fs. Gerana.pdf    # CV yang diunduh dari halaman
├── favicon.svg                # Ikon tab (vektor)
├── favicon-32.png
├── apple-touch-icon.png
├── logo.svg
├── logo-512.png
└── README.md
```

## Deployment

Situs ini statis, jadi semua hosting statis bisa dipakai. Tidak ada perintah build, dan folder yang dipublikasikan adalah akar repository.

| Layanan | Langkah singkat |
| --- | --- |
| GitHub Pages | **Settings** → **Pages** → *Deploy from a branch* → `main` / `(root)` |
| Netlify | Hubungkan repository, kosongkan *build command*, *publish directory* `.` |
| Vercel | Impor repository, *Framework Preset* **Other**, tanpa *build command* |
| Cloudflare Pages | Hubungkan repository, kosongkan *build command*, *output directory* `/` |

Setelah dipublikasikan, tambahkan domain situs ke **allowed origins** di dashboard EmailJS.

## Aksesibilitas dan Kompatibilitas

### Aksesibilitas

| Aspek | Penerapan |
| --- | --- |
| Navigasi keyboard | Tautan "Lewati ke konten" dan indikator fokus yang jelas pada semua kontrol |
| Form | Pesan galat terhubung ke kolomnya (`aria-describedby`) dan tidak hanya mengandalkan warna |
| Ponsel | Area sentuh minimal 44 px |
| Gerakan | Animasi dikurangi otomatis untuk pengguna dengan pengaturan _reduced motion_ |
| Kontras | Pasangan warna utama sudah diperiksa terhadap WCAG AA di tema terang dan gelap |

### Browser yang didukung

| Browser | Versi minimum |
| --- | --- |
| Chrome, Edge | 111+ |
| Safari | 16.4+ |
| Firefox | 121+ |

Browser yang lebih lama tetap menampilkan konten, tetapi sebagian aksen visual (misalnya warna turunan dan efek kaca) bisa tidak muncul.

## Lisensi

Proyek ini adalah portofolio pribadi dan **tidak dilisensikan untuk digunakan ulang**. Seluruh kode, desain, foto, dan konten adalah milik Fedy Fs. Gerana. © 2026 Fedy Fs. Gerana. All rights reserved.

## Pembuat

**Fedy Fs. Gerana** — Fullstack Developer

- Email: [fedfg30@gmail.com](mailto:fedfg30@gmail.com)
- GitHub: [@fedyfsgerana](https://github.com/fedyfsgerana)