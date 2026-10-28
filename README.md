<div align="center">

# My Portfolio

Website portofolio pribadi **Fedy Fs. Gerana**, Fullstack Developer.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![EmailJS](https://img.shields.io/badge/EmailJS-v4-6C63FF?style=flat-square)
![Build](https://img.shields.io/badge/build-none-lightgrey?style=flat-square)
![License](https://img.shields.io/badge/license-proprietary-blue?style=flat-square)

</div>

## Daftar Isi

- [Tentang](#tentang)
- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Struktur Proyek](#struktur-proyek)
- [Memulai](#memulai)
- [Konfigurasi](#konfigurasi)
- [Deployment](#deployment)
- [Aksesibilitas dan Kompatibilitas](#aksesibilitas-dan-kompatibilitas)
- [Lisensi](#lisensi)
- [Kontak](#kontak)

## Tentang

Website satu halaman (_single page_) yang menampilkan profil, teknologi, proyek, dan kontak. Dibangun dengan HTML, CSS, dan JavaScript murni: **tanpa framework, tanpa dependensi npm, dan tanpa proses build**. Cukup salin berkasnya ke hosting statis mana pun.

Layanan luar yang dipakai hanya dua: **Google Fonts** (Geist dan Geist Mono) dan **EmailJS** (pengiriman form kontak).

## Fitur

| Fitur                        | Keterangan                                                                                                     |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Tema Sistem / Terang / Gelap | Mengikuti pengaturan perangkat, pilihan tersimpan di `localStorage` (`theme`), tanpa kedip saat halaman dimuat |
| Dua bahasa (ID / EN)         | Terjemahan seluruh halaman, pilihan tersimpan (`lang`), kamus ada di `i18n.js`                                 |
| Layout bento responsif       | Hero, Tentang, Teknologi, Proyek, dan Kontak; diuji dari lebar 320px sampai 2560px                             |
| Navigasi                     | Menu atas yang menempel, menu bawah khusus ponsel, dan penanda bagian aktif saat menggulir                     |
| Form kontak                  | Validasi per kolom, status mengirim, pesan sukses atau gagal, dan pengiriman lewat EmailJS                     |
| Salin email                  | Satu klik, dengan konfirmasi                                                                                   |
| Kartu proyek                 | Tombol **Preview** dan **GitHub** per proyek, susunan menyesuaikan jumlah kartu secara otomatis                |
| Efek sorot kursor            | Hanya saat _hover_ pada perangkat dengan kursor                                                                |

## Teknologi

| Lapisan  | Teknologi                                                       | Catatan                                                   |
| -------- | --------------------------------------------------------------- | --------------------------------------------------------- |
| Struktur | HTML5                                                           | Semantik: `header`, `main`, `section`, `figure`, `footer` |
| Gaya     | CSS3                                                            | Variabel CSS, `grid`, `color-mix()`, tanpa preprocessor   |
| Perilaku | JavaScript (vanilla)                                            | Tanpa pustaka tambahan                                    |
| Font     | [Geist](https://fonts.google.com/specimen/Geist) dan Geist Mono | Google Fonts, dengan font sistem sebagai cadangan         |
| Form     | [EmailJS](https://www.emailjs.com/) Browser SDK v4              | Dimuat dari CDN jsDelivr                                  |

## Struktur Proyek

```
my-portfolio/
├── index.html                 # Struktur dan seluruh teks (bahasa Indonesia)
├── styles.css                 # Seluruh gaya; token warna ada di bagian atas
├── script.js                  # Tema, bahasa, salin email, form + EmailJS, tautan proyek
├── i18n.js                    # Kamus terjemahan ID -> EN
├── Fedy.webp                  # Foto profil (800 x 1000)
├── CV. Fedy Fs. Gerana.pdf    # Berkas CV yang diunduh dari halaman
├── favicon.svg                # Ikon tab (vektor)
├── favicon-32.png
├── apple-touch-icon.png
├── logo.svg
├── logo-512.png
└── README.md
```

## Memulai

### Prasyarat

Cukup sebuah browser modern. Server lokal bersifat opsional, tetapi disarankan agar perilakunya sama dengan saat dipublikasikan (misalnya batas domain EmailJS).

### Menjalankan secara lokal

```bash
git clone https://github.com/fedyfsgerana/my-portfolio.git
cd my-portfolio

# pilih salah satu
python -m http.server 8000
npx serve .
```

Lalu buka `http://localhost:8000`. Membuka `index.html` langsung dari folder juga bisa.

## Konfigurasi

### EmailJS

Diatur di bagian atas `script.js`:

```js
var EMAILJS = { publicKey: "...", service: "...", template: "..." };
```

Template EmailJS membaca empat variabel, sehingga atribut `name` pada form **tidak boleh diubah** kecuali template ikut diubah:

| Variabel  | Sumber                                                     |
| --------- | ---------------------------------------------------------- |
| `name`    | Kolom Nama                                                 |
| `email`   | Kolom Email                                                |
| `message` | Kolom Pesan                                                |
| `subject` | Input tersembunyi, nilainya "Pesan dari website portfolio" |

> Public key memang aman berada di frontend. Atur **allowed origins** di dashboard EmailJS agar form tidak disalahgunakan pihak lain.

### Proyek

Kartu proyek ada di `index.html`, di dalam `<div class="pgrid2">` pada `<section id="proyek">`.

**Menambah proyek:** salin satu blok `<article class="card spot"> ... </article>` lalu ubah judul, deskripsi, stack, tahun, dan tautannya. Susunan menyesuaikan otomatis:

| Jumlah kartu          | Tampilan di desktop dan tablet                                         |
| --------------------- | ---------------------------------------------------------------------- |
| Genap (2, 4, ...)     | Semua kartu sama lebar, dua kolom                                      |
| Ganjil (1, 3, 5, ...) | Kartu pertama menjadi proyek unggulan selebar penuh, sisanya dua kolom |

Di ponsel semua kartu tersusun satu kolom. Jika kartu disalin lengkap dengan ilustrasi `<svg>`, ubah `id` gradient-nya agar unik, atau ganti ilustrasi dengan gambar.

**Tautan Preview dan GitHub:** isi `href` pada tombol di dalam kartu.

```html
<a class="plink" data-kind="preview" href="https://nama-proyek.vercel.app"
  >Preview</a
>
<a
  class="plink"
  data-kind="repo"
  href="https://github.com/fedyfsgerana/nama-repo"
  >GitHub</a
>
```

- `href` terisi: tombol aktif dan terbuka di tab baru.
- `href` kosong: tombol tampil redup dan tidak bisa diklik.
- Untuk menyembunyikan tombol yang kosong sepenuhnya, ubah atribut pada bagian proyek:

  ```html
  <section id="proyek" ... data-show-empty="false"></section>
  ```

  Jika kedua tombol kosong, baris tombolnya ikut hilang.

**Mengganti ilustrasi dengan tangkapan layar:**

```html
<div class="art">
  <img
    src="proyek/nama.webp"
    alt="Deskripsi tampilan aplikasi"
    loading="lazy"
  />
</div>
```

> Untuk aplikasi internal perusahaan, jangan tampilkan kode atau data asli. Gunakan tangkapan layar dengan data yang disamarkan dan biarkan tautan GitHub kosong.

### Bahasa

Teks Indonesia ada di `index.html`. Terjemahan Inggrisnya ada di `i18n.js`:

```js
'Teks Indonesia persis seperti di HTML': 'English translation',
```

Kunci harus sama persis dengan teks di HTML. Teks yang tidak ada di kamus tampil apa adanya di kedua bahasa.

### Tema dan warna

Warna aksen dikendalikan variabel CSS di `styles.css`: `--c` dan `--c-strong`, yang didefinisikan terpisah untuk tema terang (blok `:root`) dan tema gelap. Komponen memakai variabel ini, sehingga mengganti nilainya di kedua tempat sudah cukup untuk mengubah aksen.

### Foto dan CV

| Berkas                    | Ketentuan                            |
| ------------------------- | ------------------------------------ |
| `Fedy.webp`               | Rasio 4:5, sekitar 800 x 1000 piksel |
| `CV. Fedy Fs. Gerana.pdf` | Ganti dengan nama berkas yang sama   |

## Deployment

Karena situs ini statis, semua hosting statis dapat dipakai. Tidak ada perintah build; direktori yang dipublikasikan adalah akar repositori.

| Layanan          | Langkah singkat                                                          |
| ---------------- | ------------------------------------------------------------------------ |
| GitHub Pages     | _Settings_ → _Pages_ → _Deploy from a branch_ → `main` / `(root)`        |
| Netlify          | Hubungkan repositori, kosongkan _build command_, _publish directory_ `.` |
| Vercel           | Impor repositori, _Framework Preset_ **Other**, tanpa _build command_    |
| Cloudflare Pages | Hubungkan repositori, kosongkan _build command_, _output directory_ `/`  |

Setelah dipublikasikan, tambahkan domain situs ke **allowed origins** di dashboard EmailJS.

## Aksesibilitas dan Kompatibilitas

**Aksesibilitas**

- Tautan "Lewati ke konten" untuk pengguna keyboard dan pembaca layar.
- Indikator fokus yang jelas pada semua kontrol.
- Pesan galat form terhubung ke kolomnya (`aria-describedby`), dan galat tidak hanya mengandalkan warna.
- Area sentuh minimal 44px di ponsel.
- Gerakan dikurangi otomatis bagi pengguna dengan pengaturan _reduced motion_.
- Kontras pasangan warna utama (teks isi, tombol, chip, dan pesan galat) sudah diperiksa terhadap standar WCAG AA pada tema terang dan gelap.

**Browser yang didukung** (versi terbaru; batas minimum perkiraan berdasarkan fitur CSS yang dipakai)

| Browser      | Versi |
| ------------ | ----- |
| Chrome, Edge | 111+  |
| Safari       | 16.4+ |
| Firefox      | 121+  |

Browser yang lebih lama tetap menampilkan konten, tetapi sebagian aksen visual (misalnya warna turunan dan efek kaca) bisa tidak muncul.

## Lisensi

Proyek ini adalah portofolio pribadi dan **tidak dilisensikan untuk digunakan ulang**. Seluruh kode, desain, foto, dan konten adalah milik Fedy Fs. Gerana. © 2026 Fedy Fs. Gerana. All rights reserved.

## Kontak

**Fedy Fs. Gerana**, Fullstack Developer

- Email: [fedfg30@gmail.com](mailto:fedfg30@gmail.com)
- GitHub: [@fedyfsgerana](https://github.com/fedyfsgerana)
