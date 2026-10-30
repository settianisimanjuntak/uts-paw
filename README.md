# Jelajah Lampung

Aplikasi katalog destinasi wisata Lampung yang aku buat untuk UTS Pengembangan Aplikasi Web (IF25-22014).

## Identitas

- Nama: [Settiani Simanjuntak]
- NIM: [124140055]
- Kelas: [RA]
- Tema: Destinasi Wisata Lampung (digit terakhir NIM 5)

## Link Deployment

https://settianisimanjuntak.github.io/uts-paw/

## Tentang Aplikasi

Web ini isinya daftar tempat wisata di Lampung, misalnya Pantai Mutun, Pulau Pahawang, Teluk Kiluan, sampai Way Kambas. Tiap destinasi punya data kategori, kabupaten/kota, harga tiket, dan jam buka. Jadi kalau mau jalan-jalan, kita bisa cek dulu tiketnya berapa dan bukanya jam berapa.

## Fitur

- Beranda yang menampilkan jumlah destinasi dan jumlah kategori
- Halaman koleksi untuk melihat semua destinasi (data diambil pakai fetch dari file JSON)
- Pencarian destinasi berdasarkan nama
- Filter berdasarkan kategori
- Halaman detail tiap destinasi, kalau id-nya tidak ada akan muncul pesan tidak ditemukan
- Form tambah destinasi dengan validasi (judul tidak boleh kosong, harga tidak boleh minus, format jam harus seperti 08.00-17.00)
- Hapus destinasi dari halaman detail
- Data yang ditambah atau dihapus disimpan di localStorage, jadi tidak hilang waktu halaman di-refresh
- Halaman statistik berisi tabel jumlah destinasi per kategori
- Halaman tentang berisi nama dan NIM
- Halaman 404 untuk alamat yang tidak ada

## Tangkapan Layar

Beranda
![Beranda](screenshots/beranda.png)

Koleksi
![Koleksi](screenshots/koleksi.png)

Detail
![Detail](screenshots/detail.png)

Form Tambah
![Form Tambah](screenshots/tambah.png)

Statistik
![Statistik](screenshots/statistik.png)

## Teknologi

- React dan Vite
- React Router (BrowserRouter)
- Context API dan custom hook (`useKoleksi`, `useJudulHalaman`)
- Vitest dan Testing Library untuk testing
- oxlint untuk lint
- GitHub Pages untuk deploy

## Cara Menjalankan

```
cd app
npm install
npm run dev
```

Lalu buka `http://localhost:5173/` di browser.

Perintah lain:

```
npm test         # menjalankan test
npm run lint     # cek lint
npm run build    # build untuk production
```

## Struktur Folder

```
app/
  public/data/koleksi.json   data 10 destinasi
  src/
    components/              Layout, Navbar, Footer, KartuItem, KotakPencarian, TabelKategori
    context/                 KoleksiProvider
    hooks/                   useKoleksi, useJudulHalaman
    pages/                   Beranda, Koleksi, Detail, Tambah, Statistik, Tentang, TidakDitemukan
```

## Catatan
