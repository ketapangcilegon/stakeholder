-- ==================================================================================
-- SEED DATA: 5 STAKEHOLDER GROUPS, 5 DIMENSI, 9 VARIABEL, 42 INDIKATOR
-- ==================================================================================

-- 1. Stakeholder Groups
insert into stakeholder_groups (id, nama, target_responden, deskripsi, tone_label, badge_color) values
('pemda', 'Pemerintah Daerah (DKPP, Bapperida, DLH)', 7, 'Aparatur pemerintah daerah pengelola kebijakan perikanan dan lingkungan pesisir Kota Cilegon.', 'Formal & Birokratis', 'bg-blue-100 text-blue-800'),
('pelaku_usaha', 'Pelaku Usaha Perikanan Tangkap', 15, 'Nelayan tradisional, juragan kapal, pengusaha armada perahu, dan pedagang ikan hasil tangkapan.', 'Bahasa Keseharian Nelayan', 'bg-emerald-100 text-emerald-800'),
('masyarakat_pesisir', 'Masyarakat Pesisir & Komunitas Lokal', 15, 'Tokoh masyarakat pesisir, kelurahan pesisir, rukun nelayan, dan pelaku wisata pesisir/bahari.', 'Komunikatif & Warga Pesisir', 'bg-amber-100 text-amber-800'),
('akademisi_lsm', 'Akademisi / Pakar & LSM Lingkungan', 3, 'Peneliti perguruan tinggi kelautan/perikanan dan aktivis organisasi non-pemerintah.', 'Ilmiah & Akademis', 'bg-purple-100 text-purple-800'),
('industri', 'Industri Sekitar Kawasan Pesisir', 10, 'Manajemen CSR/HSE industri manufaktur, petrokimia, kepelabuhanan, dan PLTU di pesisir Cilegon.', 'Formal Korporat & ESG', 'bg-cyan-100 text-cyan-800')
on conflict (id) do nothing;

-- 2. Dimensi
insert into dimensi (id, nama, deskripsi, warna, urutan) values
('ekologi', 'Dimensi Ekologi', 'Kelimpahan stok sumber daya ikan, mutu perairan, dan kelestarian ekosistem pesisir.', '#10b981', 1),
('ekonomi', 'Dimensi Ekonomi', 'Pendapatan nelayan, efisiensi operasional, akses modal/pasar, dan nilai tambah hasil laut.', '#f59e0b', 2),
('sosial', 'Dimensi Sosial', 'Solidaritas nelayan, harmonisasi ruang laut, keadilan akses, dan keberlanjutan profesi.', '#3b82f6', 3),
('tata_kelola', 'Dimensi Tata Kelola (Governance)', 'Transparansi, akuntabilitas, koordinasi lintas pemangku kepentingan, kepatuhan, dan partisipasi.', '#8b5cf6', 4),
('kelembagaan', 'Dimensi Kelembagaan & Relasi Kekuatan', 'Kapasitas organisasi, kejelasan peran instansi/kelompok, pemetaan kepentingan dan pengaruh.', '#06b6d4', 5)
on conflict (id) do nothing;

-- 3. Variabel
insert into variabel (id, id_dimensi, nama, deskripsi, urutan) values
('V1', 'ekologi', 'Persepsi Kondisi Ekologi', 'Kondisi stok ikan, mutu perairan, dampak penangkapan, dan dampak aktivitas industri.', 1),
('V2', 'ekonomi', 'Persepsi Aspek Ekonomi', 'Kontribusi ekonomi perikanan, beban operasional melaut, stabilitas pasar TPI, dan nilai tambah.', 2),
('V3', 'sosial', 'Persepsi Aspek Sosial', 'Kohesi sosial nelayan, mitigasi konflik ruang perairan, keadilan akses, dan regenerasi.', 3),
('V4', 'tata_kelola', 'Persepsi Tata Kelola (Governance)', 'Transparansi, keterbukaan keputusan, koordinasi lintas sektor, konsistensi regulasi, dan basis data.', 4),
('V5', 'kelembagaan', 'Persepsi Kelembagaan', 'Kapasitas kelembagaan, efektivitas kelompok nelayan/koperasi, peran penyuluh, dan kejelasan wewenang.', 5),
('V6', 'tata_kelola', 'Tingkat Dukungan Stakeholder', 'Penerimaan kebijakan keberlanjutan, kepatuhan aturan penangkapan, dan kesediaan kolaborasi.', 6),
('V7', 'tata_kelola', 'Intensitas Partisipasi', 'Keikutsertaan dalam musyawarah, konsultasi publik, penyampaian aspirasi, perumusan, dan pengawasan.', 7),
('V8', 'kelembagaan', 'Kepentingan (Interest) Stakeholder', 'Ketergantungan ekonomi, kepentingan sosial budaya, dampak kebijakan, dan atensi regulasi.', 8),
('V9', 'kelembagaan', 'Pengaruh (Influence) Stakeholder', 'Kewenangan hukum, akses ke penentu kebijakan, penguasaan informasi/riset, dan mobilisasi sumber daya.', 9)
on conflict (id) do nothing;

-- 4. Indikator (42 Indikator)
insert into indikator (id, id_variabel, kode, deskripsi, urutan) values
('IND_01', 'V1', 'EKO-01', 'Ketersediaan dan kelimpahan stok sumber daya ikan di perairan Cilegon', 1),
('IND_02', 'V1', 'EKO-02', 'Kualitas dan kesehatan ekosistem perairan pesisir (kejernihan, terumbu karang/mangrove)', 2),
('IND_03', 'V1', 'EKO-03', 'Dampak aktivitas penangkapan ikan terhadap kelestarian lingkungan laut', 3),
('IND_04', 'V1', 'EKO-04', 'Dampak aktivitas industri pesisir terhadap kualitas lingkungan perairan tangkap', 4),
('IND_05', 'V2', 'EKN-01', 'Kontribusi sektor perikanan tangkap terhadap tingkat pendapatan dan kesejahteraan', 5),
('IND_06', 'V2', 'EKN-02', 'Tingkat beban biaya operasional penangkapan (BBM solar, es, perbekalan)', 6),
('IND_07', 'V2', 'EKN-03', 'Akses terhadap permodalan usaha dan stabilitas harga jual di pasar/TPI', 7),
('IND_08', 'V2', 'EKN-04', 'Peluang nilai tambah produk perikanan (pengolahan, rantai dingin, diversifikasi)', 8),
('IND_09', 'V3', 'SOS-01', 'Tingkat kohesi sosial, keguyuban, dan solidaritas antarnelayan pesisir', 9),
('IND_10', 'V3', 'SOS-02', 'Potensi dan resolusi konflik pemanfaatan ruang laut antarstakeholder', 10),
('IND_11', 'V3', 'SOS-03', 'Keadilan dan kesetaraan akses terhadap wilayah tangkap dan sumber daya laut', 11),
('IND_12', 'V3', 'SOS-04', 'Jaminan keberlanjutan mata pencaharian nelayan dan minat generasi penerus', 12),
('IND_13', 'V4', 'GOV-01', 'Transparansi informasi kebijakan, program, dan bantuan sektor perikanan', 13),
('IND_14', 'V4', 'GOV-02', 'Keterbukaan proses pengambilan keputusan tata kelola perikanan pesisir', 14),
('IND_15', 'V4', 'GOV-03', 'Akuntabilitas dan ketegasan penegakan regulasi di wilayah perairan', 15),
('IND_16', 'V4', 'GOV-04', 'Efektivitas koordinasi lintas instansi/sektor (Pemda, DLH, Polairud, Industri)', 16),
('IND_17', 'V4', 'GOV-05', 'Keterpaduan dan integrasi kepentingan seluruh stakeholder dalam kebijakan', 17),
('IND_18', 'V4', 'GOV-06', 'Konsistensi dan kepastian arah kebijakan pengelolaan jangka panjang', 18),
('IND_19', 'V4', 'GOV-07', 'Pemanfaatan data ilmiah dan kajian lapangan dalam penyusunan kebijakan', 19),
('IND_20', 'V5', 'KLB-01', 'Kapasitas kelembagaan formal (dinas) dan non-formal (kelompok masyarakat)', 20),
('IND_21', 'V5', 'KLB-02', 'Efektivitas kelompok nelayan (KUB, Rukun Nelayan, Koperasi) dalam membina anggota', 21),
('IND_22', 'V5', 'KLB-03', 'Peran dan efektivitas lembaga pendukung (Penyuluh, Perbankan, Akademisi)', 22),
('IND_23', 'V5', 'KLB-04', 'Kejelasan pembagian peran, tugas, dan tanggung jawab antarlembaga', 23),
('IND_24', 'V6', 'DUK-01', 'Penerimaan dan persetujuan terhadap regulasi pengelolaan perikanan tangkap', 24),
('IND_25', 'V6', 'DUK-02', 'Dukungan terhadap target pengelolaan perikanan yang berkelanjutan', 25),
('IND_26', 'V6', 'DUK-03', 'Kepatuhan terhadap batas zonasi melaut, perizinan, dan alat tangkap legal', 26),
('IND_27', 'V6', 'DUK-04', 'Kesediaan berkontribusi aktif mendukung program perlindungan laut Cilegon', 27),
('IND_28', 'V6', 'DUK-05', 'Kesiapan berkolaborasi dalam forum kemitraan multipihak pengelolaan pesisir', 28),
('IND_29', 'V7', 'PAR-01', 'Frekuensi kehadiran dalam forum pertemuan, rapat koordinasi, atau musyawarah nelayan', 29),
('IND_30', 'V7', 'PAR-02', 'Keterlibatan dalam konsultasi publik perencanaan wilayah pesisir Cilegon', 30),
('IND_31', 'V7', 'PAR-03', 'Keaktifan menyuarakan pendapat, aspirasi, atau pengaduan masalah pesisir', 31),
('IND_32', 'V7', 'PAR-04', 'Keterlibatan dalam tahap perumusan gagasan dan penyusunan program perikanan', 32),
('IND_33', 'V7', 'PAR-05', 'Keterlibatan dalam pemantauan, pengawasan laut, dan evaluasi hasil program', 33),
('IND_34', 'V8', 'INT-01', 'Tingkat ketergantungan operasional/ekonomi terhadap keberadaan sumber daya ikan', 34),
('IND_35', 'V8', 'INT-02', 'Kepentingan sosial-budaya dan eksistensi komunitas maritim pesisir', 35),
('IND_36', 'V8', 'INT-03', 'Tingkat keterdampakan langsung oleh kebijakan tata ruang laut dan zonasi pesisir', 36),
('IND_37', 'V8', 'INT-04', 'Tingkat perhatian/antusiasme dalam mencermati dinamika kebijakan perikanan tangkap', 37),
('IND_38', 'V9', 'INF-01', 'Kekuatan kewenangan formal, hak regulasi, atau landasan hukum yang dimiliki', 38),
('IND_39', 'V9', 'INF-02', 'Kemudahan akses komunikasi langsung dengan pimpinan pengambil kebijakan kunci', 39),
('IND_40', 'V9', 'INF-03', 'Akses terhadap penguasaan data riset, keahlian teknis, dan informasi strategis', 40),
('IND_41', 'V9', 'INF-04', 'Kapasitas memobilisasi sumber daya (anggaran, personel, armada kapal, massa)', 41),
('IND_42', 'V9', 'INF-05', 'Daya tawar posisi (bargaining power) dan kekuatan jejaring kolaborasi lintas sektor', 42)
on conflict (id) do nothing;
