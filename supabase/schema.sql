-- ==================================================================================
-- SKEMA DATABASE KUESIONER PENELITIAN TESIS
-- "Keberlanjutan Pengelolaan Perikanan Tangkap di Kawasan Pesisir Kota Cilegon"
-- ==================================================================================

-- 1. Tabel stakeholder_groups
create table if not exists stakeholder_groups (
  id text primary key,
  nama text not null,
  target_responden int not null default 10,
  deskripsi text,
  tone_label text,
  badge_color text,
  created_at timestamptz default now()
);

-- 2. Tabel dimensi
create table if not exists dimensi (
  id text primary key,
  nama text not null,
  deskripsi text,
  warna text,
  urutan int
);

-- 3. Tabel variabel
create table if not exists variabel (
  id text primary key,
  id_dimensi text references dimensi(id) on delete cascade,
  nama text not null,
  deskripsi text,
  urutan int
);

-- 4. Tabel indikator
create table if not exists indikator (
  id text primary key,
  id_variabel text references variabel(id) on delete cascade,
  kode text not null,
  deskripsi text not null,
  urutan int
);

-- 5. Tabel pertanyaan (Bank Pertanyaan per Stakeholder Persona)
create table if not exists pertanyaan (
  id text primary key,
  id_indikator text references indikator(id) on delete cascade,
  id_stakeholder_group text references stakeholder_groups(id) on delete cascade,
  teks_pertanyaan text not null,
  skala_label jsonb,
  created_at timestamptz default now()
);

-- 6. Tabel responden
create table if not exists responden (
  id uuid primary key default gen_random_uuid(),
  user_id_google text,
  email text,
  nama text not null,
  instansi text not null,
  jabatan text,
  no_hp text,
  id_stakeholder_group text references stakeholder_groups(id),
  is_manual_entry boolean default false,
  status_pengisian text default 'draft', -- 'draft', 'selesai'
  progress_percent int default 0,
  total_dijawab int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 7. Tabel jawaban
create table if not exists jawaban (
  id uuid primary key default gen_random_uuid(),
  id_responden uuid references responden(id) on delete cascade,
  id_pertanyaan text references pertanyaan(id) on delete cascade,
  id_indikator text references indikator(id) on delete cascade,
  skor int check (skor between 1 and 5),
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique (id_responden, id_pertanyaan)
);

-- ==================================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==================================================================================
alter table stakeholder_groups enable row level security;
alter table dimensi enable row level security;
alter table variabel enable row level security;
alter table indikator enable row level security;
alter table pertanyaan enable row level security;
alter table responden enable row level security;
alter table jawaban enable row level security;

-- Public read permissions for reference tables
create policy "Allow public read stakeholder_groups" on stakeholder_groups for select using (true);
create policy "Allow public read dimensi" on dimensi for select using (true);
create policy "Allow public read variabel" on variabel for select using (true);
create policy "Allow public read indikator" on indikator for select using (true);
create policy "Allow public read pertanyaan" on pertanyaan for select using (true);

-- Responden permissions (Insert, Read, Update own record / public survey entry)
create policy "Allow public insert responden" on responden for insert with check (true);
create policy "Allow public select responden" on responden for select using (true);
create policy "Allow update own responden" on responden for update using (true);
create policy "Allow delete responden" on responden for delete using (true);

-- Jawaban permissions
create policy "Allow public insert/update jawaban" on jawaban for all using (true);

-- Indeks untuk performa query analitik
create index if not exists idx_jawaban_responden on jawaban(id_responden);
create index if not exists idx_jawaban_indikator on jawaban(id_indikator);
create index if not exists idx_responden_group on responden(id_stakeholder_group);
create index if not exists idx_pertanyaan_group on pertanyaan(id_stakeholder_group);
