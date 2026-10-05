-- ==================================================================================
-- MIGRATION PEMULIHAN PRODUKSI (2026-10-05)
-- Tesis: "Keberlanjutan Pengelolaan Perikanan Tangkap di Kawasan Pesisir Kota Cilegon"
--
-- LATAR BELAKANG INSIDEN:
--   Database Supabase produksi TIDAK memiliki tabel `responden` & `jawaban`
--   (PostgREST: PGRST205 "Could not find the table 'public.responden'").
--   Akibatnya semua insert dari responden gagal diam-diam dan data hanya tertinggal
--   di localStorage perangkat masing-masing responden.
--
-- PERBAIKAN DALAM FILE INI:
--   1. Membuat ulang seluruh tabel (idempoten, aman dijalankan berulang kali).
--   2. Kolom id_pertanyaan / id_indikator / id_stakeholder_group pada data responden
--      sengaja TIDAK diberi foreign key ke tabel referensi. Bank soal (210 butir)
--      dikelola di kode aplikasi, bukan di tabel `pertanyaan`, sehingga FK akan
--      menolak setiap jawaban. Integritas inti tetap dijaga: jawaban -> responden.
--   3. RLS policy dibuat ulang agar pengunjung anonim (tanpa login Gmail) bisa menyimpan.
--   4. Reload schema cache PostgREST.
--
-- CARA MENJALANKAN: Supabase Dashboard -> SQL Editor -> New query -> paste -> Run.
-- ==================================================================================

-- 1. Tabel referensi -------------------------------------------------------------
create table if not exists public.stakeholder_groups (
  id text primary key,
  nama text not null,
  target_responden int not null default 10,
  deskripsi text,
  tone_label text,
  badge_color text,
  created_at timestamptz default now()
);

create table if not exists public.dimensi (
  id text primary key,
  nama text not null,
  deskripsi text,
  warna text,
  urutan int
);

create table if not exists public.variabel (
  id text primary key,
  id_dimensi text,
  nama text not null,
  deskripsi text,
  urutan int
);

create table if not exists public.indikator (
  id text primary key,
  id_variabel text,
  kode text not null,
  deskripsi text not null,
  urutan int
);

create table if not exists public.pertanyaan (
  id text primary key,
  id_indikator text,
  id_stakeholder_group text,
  teks_pertanyaan text not null,
  skala_label jsonb,
  created_at timestamptz default now()
);

-- 2. Tabel data responden (INTI PENELITIAN) ---------------------------------------
create table if not exists public.responden (
  id uuid primary key default gen_random_uuid(),
  user_id_google text,
  email text,
  nama text not null,
  instansi text not null default '-',
  jabatan text,
  no_hp text,
  id_stakeholder_group text,
  usia int,
  pangkalan_nelayan text,
  kelurahan text,
  kecamatan text,
  kub_nelayan text,
  alamat text,
  is_manual_entry boolean default false,
  status_pengisian text default 'draft',
  progress_percent int default 0,
  total_dijawab int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Jika tabel sudah ada dari skema lama, pastikan seluruh kolom tersedia
alter table public.responden
  add column if not exists user_id_google text,
  add column if not exists email text,
  add column if not exists jabatan text,
  add column if not exists no_hp text,
  add column if not exists id_stakeholder_group text,
  add column if not exists usia int,
  add column if not exists pangkalan_nelayan text,
  add column if not exists kelurahan text,
  add column if not exists kecamatan text,
  add column if not exists kub_nelayan text,
  add column if not exists alamat text,
  add column if not exists is_manual_entry boolean default false,
  add column if not exists status_pengisian text default 'draft',
  add column if not exists progress_percent int default 0,
  add column if not exists total_dijawab int default 0,
  add column if not exists created_at timestamptz default now(),
  add column if not exists updated_at timestamptz default now();

-- Lepas FK lama yang dapat menolak data responden (jika ada)
alter table public.responden drop constraint if exists responden_id_stakeholder_group_fkey;

create table if not exists public.jawaban (
  id uuid primary key default gen_random_uuid(),
  id_responden uuid not null references public.responden(id) on delete cascade,
  id_pertanyaan text not null,
  id_indikator text,
  skor int check (skor between 1 and 5),
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique (id_responden, id_pertanyaan)
);

alter table public.jawaban drop constraint if exists jawaban_id_pertanyaan_fkey;
alter table public.jawaban drop constraint if exists jawaban_id_indikator_fkey;

-- 3. Row Level Security -----------------------------------------------------------
alter table public.stakeholder_groups enable row level security;
alter table public.dimensi enable row level security;
alter table public.variabel enable row level security;
alter table public.indikator enable row level security;
alter table public.pertanyaan enable row level security;
alter table public.responden enable row level security;
alter table public.jawaban enable row level security;

drop policy if exists "Allow public read stakeholder_groups" on public.stakeholder_groups;
drop policy if exists "Allow public read dimensi" on public.dimensi;
drop policy if exists "Allow public read variabel" on public.variabel;
drop policy if exists "Allow public read indikator" on public.indikator;
drop policy if exists "Allow public read pertanyaan" on public.pertanyaan;
create policy "Allow public read stakeholder_groups" on public.stakeholder_groups for select using (true);
create policy "Allow public read dimensi" on public.dimensi for select using (true);
create policy "Allow public read variabel" on public.variabel for select using (true);
create policy "Allow public read indikator" on public.indikator for select using (true);
create policy "Allow public read pertanyaan" on public.pertanyaan for select using (true);

drop policy if exists "Allow public insert responden" on public.responden;
drop policy if exists "Allow public select responden" on public.responden;
drop policy if exists "Allow update own responden" on public.responden;
drop policy if exists "Allow delete responden" on public.responden;
create policy "Allow public insert responden" on public.responden for insert with check (true);
create policy "Allow public select responden" on public.responden for select using (true);
create policy "Allow update own responden" on public.responden for update using (true) with check (true);
create policy "Allow delete responden" on public.responden for delete using (true);

drop policy if exists "Allow public insert/update jawaban" on public.jawaban;
create policy "Allow public insert/update jawaban" on public.jawaban for all using (true) with check (true);

-- Hak akses role API (anon = pengunjung tanpa login, authenticated = login Gmail)
grant usage on schema public to anon, authenticated;
grant select on public.stakeholder_groups, public.dimensi, public.variabel, public.indikator, public.pertanyaan to anon, authenticated;
grant select, insert, update, delete on public.responden, public.jawaban to anon, authenticated;

-- 4. Indeks -----------------------------------------------------------------------
create index if not exists idx_jawaban_responden on public.jawaban(id_responden);
create index if not exists idx_jawaban_indikator on public.jawaban(id_indikator);
create index if not exists idx_responden_group on public.responden(id_stakeholder_group);
create index if not exists idx_responden_created on public.responden(created_at);
create index if not exists idx_responden_pangkalan on public.responden(pangkalan_nelayan);

-- 5. Data referensi kelompok stakeholder -------------------------------------------
insert into public.stakeholder_groups (id, nama, target_responden) values
  ('pemda', 'Pemerintah Daerah', 7),
  ('pelaku_usaha', 'Pelaku Usaha Perikanan Tangkap', 15),
  ('masyarakat_pesisir', 'Masyarakat Pesisir & Komunitas Lokal', 15),
  ('akademisi_lsm', 'Akademisi & Organisasi Nelayan', 3),
  ('industri', 'Industri Sekitar Kawasan Pesisir', 10)
on conflict (id) do nothing;

-- 6. Muat ulang schema cache PostgREST agar tabel langsung terbaca oleh API
notify pgrst, 'reload schema';
