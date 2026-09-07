# SI-KEPALA CILEGON
### Sistem Kuesioner & Analitik Persepsi Keberlanjutan Pengelolaan Perikanan Tangkap Pesisir Kota Cilegon

Web application kuesioner interaktif multi-stakeholder dan dashboard analitik terpadu untuk penelitian Tesis **Magister Manajemen Perikanan**, yang mengkaji keberlanjutan pengelolaan perikanan tangkap di kawasan pesisir Kota Cilegon, Provinsi Banten.

---

## 🌟 Fitur Utama

1. **Multi-Stakeholder Persona Bank (210 Pertanyaan Terstruktur)**
   - Mengukur **9 Variabel (42 Indikator)** dalam 5 Dimensi Pengelolaan (*Ekologi, Ekonomi, Sosial, Tata Kelola, Kelembagaan*).
   - Redaksi pertanyaan dirancang dalam **5 gaya bahasa berbeda** menyesuaikan profil responden:
     - 🏛️ **Pemerintah Daerah (DKPP, Bapperida, DLH)** — Bahasa formal & birokratis
     - 🐟 **Pelaku Usaha Perikanan (Nelayan, Juragan, Bakul)** — Bahasa lugas, analogi melaut/pasar, ramah literasi rendah
     - 👥 **Masyarakat Pesisir (Kelurahan, Rukun Nelayan)** — Bahasa komunikatif warga pesisir
     - 🎓 **Akademisi / Pakar & LSM Lingkungan** — Bahasa ilmiah & istilah teknis (*carrying capacity, MSY, governance*)
     - 🏭 **Industri Sekitar Kawasan Pesisir** — Bahasa korporat & standar ESG/CSR
2. **Pengalaman Pengisian Ramah Pengguna (Mobile-First)**
   - **Google 1-Tap Login** via Supabase OAuth (langsung masuk tanpa registrasi berbelit) atau mode entri cepat.
   - **Interactive 42-Question Progress Grid**: Kotak nomor interaktif (Abu-abu: belum, Hijau solid: sudah, Ring biru: aktif) yang bisa diklik untuk loncat langsung ke nomor yang diinginkan.
   - **Dual Display Mode (Toggle)**:
     - *Mode Fokus (1 Soal per layar)* dengan tombol Likert besar dan font sangat mudah dibaca di ponsel.
     - *Mode Dimensi (Semua Soal)* untuk meninjau keseluruhan instrumen dalam satu tampilan.
   - **Incremental Auto-save**: Setiap klik pilihan jawaban langsung tersimpan otomatis ke Supabase dan *LocalStorage* (aman dari koneksi internet lambat / HP terputus).
3. **Mode Cetak PDF Kuesioner Fisik (Offline Ready)**
   - Generator PDF format dokumen A4 resmi per stakeholder (lengkap dengan kop surat penelitian, isian identitas, petunjuk pengisian, dan tabel matriks Likert) untuk wawancara langsung nelayan di pangkalan perahu.
4. **Formulir Entri Manual (Enumerator Mode)**
   - Panel input cepat bagi enumerator untuk memasukkan hasil kuesioner fisik ke sistem dengan validasi instan dan *number keypad*.
5. **Dashboard Analitik & Tabulasi Otomatis (Metodologi Terpadu)**
   - **Radar Chart 5 Dimensi**: Perbandingan multi-stakeholder atau filter individual.
   - **Bar Chart 9 Variabel**: Skor rata-rata komposit V1 sampai V9.
   - **Target Responden Tracker**: Monitoring progres kuota 50 responden (Pemda: 7, Pelaku Usaha: 15, Masyarakat: 15, Akademisi: 3, Industri: 10).
   - **Tabulasi Matriks Otomatis**: Tabel rata-rata per indikator & variabel terhitung real-time.
   - **Export Data Lengkap**:
     - *Excel (.xlsx)* multi-sheet: Profil responden, matriks data mentah, rekap skor variabel, dan kamus 210 bank soal.
     - *CSV Data Mentah* format siap olah untuk SPSS, SmartPLS, atau R.
6. **Panel Admin & Manajemen Peneliti**
   - Terproteksi PIN Keamanan (Default PIN: `1234`).
   - Peninjauan data mentah, pencarian, penghapusan data duplikat/invalid, dan penjelajah bank soal.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS (Desain Maritim Modern: Ocean Blue, Teal & Glassmorphism)
- **Backend & Database**: Supabase (PostgreSQL + Row Level Security + OAuth)
- **Visualisasi Chart**: Recharts (Radar Chart & Bar Chart)
- **Dokumen & Ekspor**: SheetJS (`xlsx`), `jspdf`, `jspdf-autotable`, `canvas-confetti`
- **Target Deploy**: Vercel

---

## 🚀 Panduan Menjalankan Aplikasi Secara Lokal

### 1. Prasyarat
- Node.js versi 18+ atau 20+

### 2. Kloning & Install Dependensi
```bash
npm install
```

### 3. Konfigurasi Lingkungan (`.env.local`)
Buat file `.env.local` di root proyek:
```env
NEXT_PUBLIC_SUPABASE_URL=https://firfggtfmnejwbovveor.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Setup Database Supabase
Jalankan skrip SQL yang telah disediakan di folder `supabase/`:
1. Buka dashboard Supabase -> **SQL Editor**
2. Jalankan isi file `supabase/schema.sql` (membuat tabel & RLS)
3. Jalankan isi file `supabase/seed.sql` (mengisi data 5 stakeholder, 5 dimensi, 9 variabel, 42 indikator)

### 5. Jalankan Server Development
```bash
npm run dev
```
Buka browser di `http://localhost:3000`.

---

## 📊 Struktur 9 Variabel & 5 Dimensi Penelitian

| No | Dimensi | Kode & Nama Variabel | Jml Indikator |
|---|---|---|---|
| 1 | **Ekologi** | `V1` Persepsi Kondisi Ekologi | 4 Indikator |
| 2 | **Ekonomi** | `V2` Persepsi Aspek Ekonomi | 4 Indikator |
| 3 | **Sosial** | `V3` Persepsi Aspek Sosial | 4 Indikator |
| 4 | **Tata Kelola** | `V4` Persepsi Tata Kelola (Governance) | 7 Indikator |
| 5 | **Kelembagaan** | `V5` Persepsi Kelembagaan | 4 Indikator |
| 6 | **Tata Kelola** | `V6` Tingkat Dukungan Stakeholder | 5 Indikator |
| 7 | **Tata Kelola** | `V7` Intensitas Partisipasi Pengambilan Keputusan | 5 Indikator |
| 8 | **Kelembagaan** | `V8` Kepentingan (*Interest*) Stakeholder | 4 Indikator |
| 9 | **Kelembagaan** | `V9` Pengaruh (*Influence*) Stakeholder | 5 Indikator |
| **Total** | **5 Dimensi** | **9 Variabel Penelitian** | **42 Indikator (210 Pertanyaan)** |

---

## 🔒 Akses Panel Peneliti
- **URL**: `/admin`
- **PIN Default**: `1234` atau `cilegon2026`

---

## 🚢 Target Responden Penelitian (N = 50)
- **Pemerintah Daerah (DKPP, Bapperida, DLH)**: 7 Responden
- **Pelaku Usaha Perikanan Tangkap**: 15 Responden
- **Masyarakat Pesisir & Komunitas**: 15 Responden
- **Akademisi / LSM**: 3 Responden
- **Industri Sekitar Pesisir**: 10 Responden
- **Total**: 50 Responden
