# Jelajah Lampung

Aplikasi katalog destinasi wisata Lampung, dibuat untuk UTS Pengembangan Aplikasi Web (IF25-22014).

## Identitas

- Nama: Settiani Simanjuntak
- NIM: 124140055
- Kelas: RA
- Tema: Destinasi Wisata Lampung (digit nim terakhir 5)

## URL Deployment

https://settianisimanjuntak.github.io/uts-paw/

## Deskripsi

Web ini berisi daftar tempat wisata di Lampung, misalnya Pantai Mutun, Pulau Pahawang, Teluk Kiluan, dan Way Kambas. Setiap destinasi punya kategori, kabupaten/kota, harga tiket, dan jam buka, jadi pengunjung bisa cek dulu sebelum berangkat.

## Daftar Fitur

- Beranda dengan ringkasan jumlah destinasi dan kategori
- Halaman koleksi, data diambil dengan fetch dari file JSON
- Pencarian destinasi berdasarkan judul
- Filter berdasarkan kategori
- Halaman detail, dengan pesan "tidak ditemukan" kalau id tidak ada
- Form tambah destinasi dengan validasi
- Hapus destinasi dari halaman detail
- Data tersimpan di localStorage
- Halaman statistik berisi tabel jumlah destinasi per kategori
- Halaman tentang berisi nama dan NIM
- Halaman 404 untuk alamat yang tidak dikenal

## Tangkapan Layar

![Beranda](screenshots/beranda.png)

## Teknologi

React, Vite, React Router, Context API, Vitest dan Testing Library, oxlint, GitHub Pages.

## Cara Menjalankan

```
cd app
npm install
npm run dev
```

Buka http://localhost:5173/ di browser. Untuk pengecekan: `npm run lint`, `npm test`, dan `npm run build`.

## Catatan

(Tulis sendiri: kesulitan yang kamu temui dan cara kamu menyelesaikannya.)