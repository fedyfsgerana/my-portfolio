<div align="center">

# My Portfolio

Fedy Fs. Gerana, Fullstack Developer

</div>

## Tentang

Website portofolio satu halaman (_single page_), murni HTML, CSS, dan JavaScript tanpa framework dan tanpa proses build.
Hanya dua layanan luar: **Google Fonts** (Geist) dan **EmailJS** (form kontak).

## Fitur

| Fitur                        | Keterangan                                                                                                  |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Tema Sistem / Terang / Gelap | Mengikuti perangkat secara default, pilihan tersimpan di `localStorage`, tanpa kedip saat dimuat            |
| Dua bahasa (ID / EN)         | Kamus ada di `i18n.js`, pilihan tersimpan                                                                   |
| Layout bento                 | Hero, Tentang, Teknologi, Proyek, Kontak, responsif dari 320px sampai layar lebar                           |
| Form kontak                  | Validasi per kolom, status kirim, dan pengiriman lewat EmailJS                                              |
| Menu                         | Menu atas menempel, menu bawah khusus ponsel, penanda bagian aktif                                          |
| Aksesibilitas                | Tautan lewati-ke-konten, fokus keyboard jelas, area sentuh minimal 44px di ponsel, hormati _reduced motion_ |

## Struktur

```
my-portfolio/
├── index.html    # Struktur & seluruh teks (bahasa Indonesia)
├── styles.css    # Seluruh gaya, token warna ada di bagian paling atas
├── script.js     # Tema, bahasa, salin email, form + EmailJS, tautan proyek
├── i18n.js       # Kamus terjemahan ID -> EN
├── Fedy.webp     # Foto profil (800x1000)
├── CV. Fedy Fs. Gerana.pdf
└── favicon.svg / favicon-32.png / apple-touch-icon.png / logo.svg / logo-512.png
```

Pustaka Tailwind, i18next, dan Font Awesome yang dulu dimuat lewat CDN **sudah tidak dipakai**. `Fedy.png` (3 MB) juga diganti `Fedy.webp` (sekitar 18 KB).

## Cara menjalankan

Buka `index.html` langsung di browser, atau jalankan server lokal:

```bash
python -m http.server 8000     # lalu buka http://localhost:8000
# atau
npx serve .
```

## Mengisi proyek

Kartu proyek ada di `index.html` pada bagian `<section id="proyek">`. Ada tiga kartu; kartu pertama adalah proyek unggulan (lebar).

**Tautan Preview dan GitHub** sudah tersedia di tiap kartu dan **tersembunyi sampai diisi**. Cukup isi `href`:

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

Jika `href` kosong, tombol tampil **redup dan tidak bisa diklik**, supaya tidak ada tautan mati. Untuk menyembunyikan tombol yang kosong sepenuhnya (misalnya proyek perusahaan tanpa GitHub), ubah di `index.html`:

```html
<section id="proyek" ... data-show-empty="false"></section>
```

Dengan `false`, hanya tombol yang `href`-nya terisi yang muncul; jika dua-duanya kosong, baris tombol hilang seluruhnya. Disarankan mengubahnya ke `false` setelah semua proyek terisi.

**Mengganti ilustrasi dengan tangkapan layar asli:** ganti isi `<div class="art">` (blok `<svg>`) dengan

```html
<div class="art">
  <img src="proyek/nama.webp" alt="Tampilan dashboard ..." loading="lazy" />
</div>
```

**Mengganti teks kartu:** ubah judul, deskripsi, `[Isi stack]`, dan `[Tahun]` di kartu. Jika teks baru perlu terjemahan EN, tambahkan pasangannya di `i18n.js` (kunci = teks Indonesia persis seperti di HTML).

### Untuk proyek perusahaan (rahasia)

Jangan tampilkan kode atau data asli. Pakai tangkapan layar yang datanya disamarkan, biarkan tautan GitHub kosong, dan jelaskan **masalah, peran, dan hasil** secara umum di deskripsi.

## Konfigurasi EmailJS

Diatur di bagian atas `script.js`:

```js
var EMAILJS = { publicKey: "...", service: "...", template: "..." };
```

Template EmailJS membaca kolom **`name`, `email`, `subject`, `message`**. Nama kolom di form sudah disesuaikan, dan `subject` diisi otomatis ("Pesan dari website portfolio") lewat input tersembunyi. Jangan ubah atribut `name` pada form kecuali template EmailJS ikut diubah.

> Public key memang aman berada di frontend. Atur _allowed origins_ di dashboard EmailJS supaya form tidak disalahgunakan pihak lain.

## Kustomisasi

| Kebutuhan           | Lokasi                                                                  |
| ------------------- | ----------------------------------------------------------------------- |
| Warna aksen         | Variabel `--c` (dan turunannya) di `styles.css`, cari blok `:root{--c:` |
| Teks dan terjemahan | `index.html` dan `i18n.js`                                              |
| Foto profil         | Ganti `Fedy.webp` (rasio 4:5, sekitar 800x1000)                         |
| Ikon tab            | `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`                 |
| CV                  | Ganti file PDF dengan nama yang sama                                    |

## Catatan

- `styles.css` masih memuat beberapa aturan dari iterasi desain sebelumnya yang tidak dipakai lagi; aman dibersihkan kapan saja.
- Tautan `Unduh CV` mengarah ke `CV. Fedy Fs. Gerana.pdf`. Perbarui isi PDF agar sesuai dengan posisi terbaru.

<div align="center">
<sub>© 2026 Fedy Fs. Gerana. All rights reserved.</sub>
</div>
