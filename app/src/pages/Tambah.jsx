import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Pantai', Kabupaten: '', hargaTiket: '',jamBuka: '08.00-17.00' }
const POLA_JAM = /^([01]\d|2[0-3])\.[0-5]\d-([01]\d|2[0-3])\.[0-5]\d$/

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    const baru = {}
    if (form.judul.trim().length < 3) baru.judul = 'Judul wajib diisi, minimal 3 karakter.'
    if (form.kabupaten.trim() === '') baru.kabupaten = 'Kabupaten/Kota wajib diisi.'
    if (form.hargaTiket === '' || Number(form.hargaTiket) < 0)
      baru.hargaTiket = 'Harga tiket wajib diisi, minimal 0.'
    if (!POLA_JAM.test(form.jamBuka.trim())) baru.jamBuka = 'Gunakan format 08.00-17.00.'

    setGalat(baru)
    if (Object.keys(baru).length > 0) return

    tambah({
      ...form,
      judul: form.judul.trim(),
      kabupaten: form.kabupaten.trim(),
      hargaTiket: Number(form.hargaTiket),
      jamBuka: form.jamBuka.trim(),
    })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Destinasi</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat.judul && <p role="alert">{galat.judul}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Pantai</option>
        <option>Pulau</option>
        <option>Wisata Bahari</option>
        <option>Wisata Budaya</option>
        <option>Wisata Alam</option>
        <option>Air Terjun</option>
        <option>Wisata Rekreasi</option>
      </select>

      <label htmlFor="kabupaten">Kabupaten/Kota</label>
      <input id="kabupaten" name="kabupaten" value={form.kabupaten} onChange={ubah} />
      {galat.kabupaten && <p role="alert">{galat.kabupaten}</p>}

      <label htmlFor="hargaTiket">Harga Tiket (Rp)</label>
      <input
        id="hargaTiket"
        name="hargaTiket"
        type="number"
        min="0"
        value={form.hargaTiket}
        onChange={ubah}
      />
      {galat.hargaTiket && <p role="alert">{galat.hargaTiket}</p>}

      <label htmlFor="jamBuka">Jam Buka</label>
      <input
        id="jamBuka"
        name="jamBuka"
        placeholder="08.00-17.00"
        value={form.jamBuka}
        onChange={ubah}
      />
      {galat.jamBuka && <p role="alert">{galat.jamBuka}</p>}


      <button type="submit">Simpan</button>
    </form>
  )
  
}
