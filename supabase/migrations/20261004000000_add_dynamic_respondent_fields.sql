-- ==================================================================================
-- MIGRATION: Add Dynamic Respondent Fields per Stakeholder Group
-- Tesis: "Keberlanjutan Pengelolaan Perikanan Tangkap di Kawasan Pesisir Kota Cilegon"
-- ==================================================================================

-- 1. Tambah kolom identitas spesifik stakeholder pada tabel responden
alter table responden 
  add column if not exists usia integer,
  add column if not exists pangkalan_nelayan text,
  add column if not exists kelurahan text,
  add column if not exists kecamatan text,
  add column if not exists kub_nelayan text,
  add column if not exists alamat text;

-- 2. Buat index untuk pencarian dan agregasi spasial pesisir Cilegon
create index if not exists idx_responden_pangkalan on responden(pangkalan_nelayan);
create index if not exists idx_responden_kelurahan on responden(kelurahan);
create index if not exists idx_responden_kecamatan on responden(kecamatan);

-- 3. Komentar dokumentasi kolom
comment on column responden.usia is 'Usia responden (khususnya pelaku usaha nelayan tangkap)';
comment on column responden.pangkalan_nelayan is 'Nama 1 dari 9 pangkalan nelayan se-Kota Cilegon';
comment on column responden.kelurahan is 'Kelurahan pangkalan nelayan (otomatis terisi dari master pangkalan)';
comment on column responden.kecamatan is 'Kecamatan pangkalan nelayan (otomatis terisi dari master pangkalan)';
comment on column responden.kub_nelayan is 'Nama Kelompok Usaha Bersama (KUB) nelayan';
comment on column responden.alamat is 'Alamat domisili masyarakat pesisir atau pabrik/industri';
