-- ==================================================================================
-- MIGRATION: IZINKAN SINKRONISASI BANK SOAL & RUBRIK LIKERT DARI PANEL ADMIN
-- Tesis: "Keberlanjutan Pengelolaan Perikanan Tangkap di Kawasan Pesisir Kota Cilegon"
--
-- TUJUAN:
--   Membuka akses insert/update/delete pada tabel `pertanyaan` agar perubahan redaksi
--   soal dan rubrik skala Likert 1-5 yang dilakukan di Panel Admin (/bank-pertanyaan)
--   dapat langsung tersimpan ke Supabase dan otomatis tersinkronisasi ke seluruh gawai
--   responden secara global online.
--
-- CATATAN KEAMANAN DATA RESPONDEN:
--   Script ini HANYA mengatur tabel `pertanyaan`.
--   TIDAK MENYENTUH, TIDAK MENGHAPUS, DAN TIDAK MERESET tabel `responden` maupun `jawaban`.
--   Semua data responden yang sudah masuk 100% AMAN DAN TETAP ADA!
--
-- CARA MENJALANKAN:
--   Supabase Dashboard -> SQL Editor -> New Query -> Paste script ini -> Klik Run.
-- ==================================================================================

-- 1. Pastikan tabel pertanyaan tersedia dan terkonfigurasi dengan benar
create table if not exists public.pertanyaan (
  id text primary key,
  id_indikator text,
  id_stakeholder_group text,
  teks_pertanyaan text not null,
  skala_label jsonb,
  created_at timestamptz default now()
);

-- 2. Kebijakan Row Level Security (RLS) untuk tabel pertanyaan
alter table public.pertanyaan enable row level security;

-- Hapus kebijakan lama jika ada
drop policy if exists "Allow public read pertanyaan" on public.pertanyaan;
drop policy if exists "Allow public insert/update/delete pertanyaan" on public.pertanyaan;
drop policy if exists "Allow public write pertanyaan" on public.pertanyaan;

-- Izinkan pembacaan publik (seluruh responden & pengunjung)
create policy "Allow public read pertanyaan" 
  on public.pertanyaan for select 
  using (true);

-- Izinkan penyimpanan & pembaruan dari panel admin
create policy "Allow public insert/update/delete pertanyaan" 
  on public.pertanyaan for all 
  using (true) 
  with check (true);

-- 3. Berikan izin hak akses API
grant usage on schema public to anon, authenticated;
grant all on public.pertanyaan to anon, authenticated;

-- 4. Reload PostgREST schema cache agar perubahan langsung aktif
notify pgrst, 'reload config';
notify pgrst, 'reload schema';
