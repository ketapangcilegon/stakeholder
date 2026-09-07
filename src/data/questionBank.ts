import { PertanyaanItem } from './questionnaireData';

export const LIKERT_LABELS = {
  standard: {
    1: "Sangat Tidak Setuju / Sangat Buruk",
    2: "Tidak Setuju / Kurang Baik",
    3: "Cukup / Netral / Ragu-ragu",
    4: "Setuju / Baik",
    5: "Sangat Setuju / Sangat Baik"
  },
  frequency: {
    1: "Tidak Pernah (0%)",
    2: "Jarang Sekali",
    3: "Kadang-kadang",
    4: "Sering",
    5: "Sangat Sering / Selalu Aktif"
  },
  influence: {
    1: "Sangat Rendah / Tidak Berpengaruh",
    2: "Rendah",
    3: "Sedang / Cukup",
    4: "Tinggi / Berpengaruh Kuat",
    5: "Sangat Tinggi / Sangat Menentukan"
  },
  interest: {
    1: "Sangat Rendah / Tidak Berkepentingan",
    2: "Rendah",
    3: "Sedang",
    4: "Tinggi / Sangat Berkepentingan",
    5: "Sangat Tinggi / Vital & Menentukan Hidup"
  }
};

export const QUESTION_BANK: PertanyaanItem[] = [
  // =========================================================================
  // V1: PERSEPSI KONDISI EKOLOGI (4 Indikator)
  // =========================================================================
  // IND_01: Ketersediaan stok ikan
  {
    id: "Q_IND_01_pemda",
    id_indikator: "IND_01",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana penilaian Anda terhadap tren kelimpahan dan ketersediaan stok sumber daya ikan di wilayah perairan Kota Cilegon saat ini dibandingkan target daya dukung lestari (MSY)?",
    skala_label: { 1: "Sangat Menipis/Kritis", 2: "Menurun", 3: "Moderat/Sedang", 4: "Mencukupi", 5: "Sangat Melimpah & Lestari" }
  },
  {
    id: "Q_IND_01_pelaku_usaha",
    id_indikator: "IND_01",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Menurut Bapak/Ibu, apakah jumlah ikan yang bisa ditangkap di laut Cilegon saat ini masih banyak dan mudah didapat seperti beberapa tahun lalu?",
    skala_label: { 1: "Sangat Sedikit & Susah Sekali", 2: "Mulai Berkurang", 3: "Biasa Saja / Pas-pasan", 4: "Masih Lumayan Banyak", 5: "Sangat Banyak & Melimpah" }
  },
  {
    id: "Q_IND_01_masyarakat_pesisir",
    id_indikator: "IND_01",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana pandangan warga terhadap ketersediaan hasil tangkapan ikan laut segar yang dibawa pulang oleh para nelayan di lingkungan pesisir Cilegon saat ini?",
    skala_label: { 1: "Sangat Langka/Sulit", 2: "Berkurang", 3: "Cukup Tersedia", 4: "Banyak Tersedia", 5: "Sangat Melimpah" }
  },
  {
    id: "Q_IND_01_akademisi_lsm",
    id_indikator: "IND_01",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana evaluasi ilmiah Anda terhadap status biomassa dan estimasi ketersediaan stok sumber daya ikan di perairan pesisir Cilegon saat ini?",
    skala_label: { 1: "Mengalami Overfished Akut", 2: "Terindikasi Menurun", 3: "Mendekati Batas MSY", 4: "Kondisi Sehat Terjaga", 5: "Sangat Berkelanjutan" }
  },
  {
    id: "Q_IND_01_industri",
    id_indikator: "IND_01",
    id_stakeholder_group: "industri",
    teks: "Bagaimana observasi perusahaan Anda terhadap kelangsungan stok biota laut dan perikanan tangkap di perairan sekitar kawasan operasional pesisir Cilegon?",
    skala_label: { 1: "Sangat Menurun Drastis", 2: "Cenderung Menurun", 3: "Stabil / Cukup", 4: "Kondisi Baik", 5: "Sangat Baik & Terjaga" }
  },

  // IND_02: Kualitas ekosistem pesisir
  {
    id: "Q_IND_02_pemda",
    id_indikator: "IND_02",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana penilaian Anda terhadap baku mutu perairan laut serta kondisi habitat pesisir (terumbu karang, mangrove, estuari) di pesisir Cilegon?",
    skala_label: { 1: "Sangat Rusak/Tercemar Berat", 2: "Kurang Baik/Terdegradasi", 3: "Cukup Memadai", 4: "Kondisi Baik", 5: "Sangat Sehat & Terawat Prima" }
  },
  {
    id: "Q_IND_02_pelaku_usaha",
    id_indikator: "IND_02",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Bagaimana kejernihan air laut, karang tempat sarang ikan, dan kebersihan pantai di wilayah tempat Bapak/Ibu biasa melaut atau menyandarkan perahu?",
    skala_label: { 1: "Sangat Keruh/Kotor/Rusak", 2: "Kurang Bersih", 3: "Sedang-sedang Saja", 4: "Bersih & Ikan Betah", 5: "Sangat Jernih, Karang Bagus" }
  },
  {
    id: "Q_IND_02_masyarakat_pesisir",
    id_indikator: "IND_02",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana kondisi kebersihan air laut dan kelestarian lingkungan pantai di sekitar pemukiman warga pesisir Cilegon saat ini?",
    skala_label: { 1: "Sangat Tercemar & Rusak", 2: "Banyak Sampah/Limbah", 3: "Cukup Terawat", 4: "Bersih & Nyaman", 5: "Sangat Asri & Alami" }
  },
  {
    id: "Q_IND_02_akademisi_lsm",
    id_indikator: "IND_02",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana indeks integritas ekologis dan daya dukung habitat bentik serta parameter oseanografi perairan pesisir Kota Cilegon saat ini?",
    skala_label: { 1: "Degradasi Sangat Kritis", 2: "Kualitas Menurun", 3: "Toleransi Ambang Batas", 4: "Kualitas Ekosistem Baik", 5: "Ekosistem Sangat Prima" }
  },
  {
    id: "Q_IND_02_industri",
    id_indikator: "IND_02",
    id_stakeholder_group: "industri",
    teks: "Sejauh mana kualitas lingkungan perairan laut dan sempadan pantai di sekitar wilayah kerja korporasi berada dalam kondisi ekologis yang prima?",
    skala_label: { 1: "Sangat Memprihatinkan", 2: "Perlu Banyak Perbaikan", 3: "Memenuhi Standar Minimal", 4: "Kondisi Lingkungan Baik", 5: "Sangat Baik Melampaui Baku Mutu" }
  },

  // IND_03: Dampak aktivitas penangkapan
  {
    id: "Q_IND_03_pemda",
    id_indikator: "IND_03",
    id_stakeholder_group: "pemda",
    teks: "Sejauh mana aktivitas penangkapan ikan oleh armada perikanan di perairan Cilegon dinilai tetap ramah lingkungan dan tidak merusak habitat laut?",
    skala_label: { 1: "Sangat Merusak/Banyak Pelanggaran", 2: "Cenderung Merusak", 3: "Cukup Terkendali", 4: "Ramah Lingkungan", 5: "Sangat Ramah & Tertib Regulasi" }
  },
  {
    id: "Q_IND_03_pelaku_usaha",
    id_indikator: "IND_03",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah cara dan alat tangkap (jaring, pancing, bubu) yang dipakai rekan-rekan nelayan di Cilegon aman dan tidak merusak anakan ikan atau karang?",
    skala_label: { 1: "Banyak yang Merusak Karang", 2: "Masih Ada yang Merusak", 3: "Sebagian Besar Aman", 4: "Tertib Pakai Alat Ramah", 5: "Semua Tertib Menjaga Laut" }
  },
  {
    id: "Q_IND_03_masyarakat_pesisir",
    id_indikator: "IND_03",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana penilaian warga terhadap cara menangkap ikan yang dilakukan nelayan lokal, apakah menjaga kelestarian bibit ikan dan laut?",
    skala_label: { 1: "Sering Merusak Laut", 2: "Kurang Peduli Kelestarian", 3: "Cukup Baik", 4: "Peduli Kelestarian Laut", 5: "Sangat Peduli & Berkelanjutan" }
  },
  {
    id: "Q_IND_03_akademisi_lsm",
    id_indikator: "IND_03",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat selektivitas alat tangkap dan mitigasi risiko destruktif (destructive fishing) pada perikanan skala kecil/menengah di perairan Cilegon?",
    skala_label: { 1: "Tingkat Destruktif Tinggi", 2: "Selektivitas Rendah", 3: "Selektivitas Sedang", 4: "Alat Tangkap Ramah Lingkungan", 5: "Sangat Selektif & Best Practice" }
  },
  {
    id: "Q_IND_03_industri",
    id_indikator: "IND_03",
    id_stakeholder_group: "industri",
    teks: "Bagaimana pandangan industri terhadap praktik penangkapan ikan di perairan sekitar dermaga/pelabuhan, apakah berlangsung tertib dan ramah lingkungan?",
    skala_label: { 1: "Sering Mengabaikan Kelestarian", 2: "Kurang Tertib", 3: "Cukup Tertib", 4: "Tertib & Bertanggung Jawab", 5: "Sangat Ramah Lingkungan & Aman" }
  },

  // IND_04: Dampak aktivitas industri terhadap lingkungan perairan
  {
    id: "Q_IND_04_pemda",
    id_indikator: "IND_04",
    id_stakeholder_group: "pemda",
    teks: "Sejauh mana pengelolaan limbah cair, limpasan bahang, dan lalu lintas perkapalan industri di pesisir Cilegon tidak mengganggu ekosistem perikanan tangkap?",
    skala_label: { 1: "Dampak Negatif Sangat Berat", 2: "Dampak Cukup Mengganggu", 3: "Terkendali Standar Minimum", 4: "Dikelola dengan Sangat Baik", 5: "Nol Gangguan / Sangat Aman" }
  },
  {
    id: "Q_IND_04_pelaku_usaha",
    id_indikator: "IND_04",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah asap, air buangan pabrik, pipa pendingin, atau kapal-kapal tongkang industri mengganggu tempat mencari ikan Bapak/Ibu?",
    skala_label: { 1: "Sangat Mengganggu/Ikan Menjauh", 2: "Sering Mengganggu Melaut", 3: "Kadang-kadang Mengganggu", 4: "Jarang Mengganggu", 5: "Sama Sekali Tidak Mengganggu" }
  },
  {
    id: "Q_IND_04_masyarakat_pesisir",
    id_indikator: "IND_04",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Sejauh mana keberadaan kawasan industri di sepanjang pantai Cilegon mempengaruhi kenyamanan warga dan kelestarian ikan di laut sekitar?",
    skala_label: { 1: "Berdampak Sangat Buruk", 2: "Banyak Mengurangi Ikan", 3: "Ada Dampak Namun Wajar", 4: "Dampak Terkelola Baik", 5: "Lingkungan Pesisir Tetap Asri" }
  },
  {
    id: "Q_IND_04_akademisi_lsm",
    id_indikator: "IND_04",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana evaluasi Anda mengenai tingkat kepatuhan baku mutu limbah industri maritim dan efektivitas mitigasi pencemaran perairan pesisir Cilegon?",
    skala_label: { 1: "Tekanan Polusi Sangat Tinggi", 2: "Banyak Titik Kritis Limbah", 3: "Memenuhi Baku Mutu Minimal", 4: "Mitigasi Berjalan Efektif", 5: "Sistem Pengelolaan Limbah Unggul" }
  },
  {
    id: "Q_IND_04_industri",
    id_indikator: "IND_04",
    id_stakeholder_group: "industri",
    teks: "Seberapa efektif sistem pengelolaan limbah cair, termal, dan program perlindungan lingkungan laut yang diterapkan industri perusahaan Anda di pesisir Cilegon?",
    skala_label: { 1: "Masih Memerlukan Banyak Audit", 2: "Cukup Berpotensi Terdampak", 3: "Sesuai Regulasi Standar", 4: "Sangat Ketat & Terkendali", 5: "Zero Discharge & Best ESG Standard" }
  },

  // =========================================================================
  // V2: PERSEPSI ASPEK EKONOMI (4 Indikator)
  // =========================================================================
  // IND_05: Kontribusi perikanan terhadap pendapatan
  {
    id: "Q_IND_05_pemda",
    id_indikator: "IND_05",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana penilaian Anda terhadap kontribusi sektor perikanan tangkap dalam menopang perekonomian keluarga nelayan dan PAD Kota Cilegon?",
    skala_label: { 1: "Sangat Minim/Defisit", 2: "Kurang Berkontribusi", 3: "Cukup Menopang", 4: "Berkontribusi Signifikan", 5: "Sangat Kuat & Sejahtera" }
  },
  {
    id: "Q_IND_05_pelaku_usaha",
    id_indikator: "IND_05",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah penghasilan dari hasil melaut/jual ikan saat ini cukup untuk memenuhi kebutuhan sehari-hari, dapur, dan biaya sekolah anak?",
    skala_label: { 1: "Sangat Kurang/Sering Nombor", 2: "Kurang Mencukupi", 3: "Cukup Pas-pasan", 4: "Mencukupi & Ada Tabungan", 5: "Sangat Cukup & Sejahtera" }
  },
  {
    id: "Q_IND_05_masyarakat_pesisir",
    id_indikator: "IND_05",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Menurut pandangan warga, apakah usaha perikanan laut mampu memberikan rezeki dan taraf hidup yang layak bagi keluarga nelayan di pesisir Cilegon?",
    skala_label: { 1: "Sangat Sulit/Banyak Miskin", 2: "Kurang Mencukupi", 3: "Cukup untuk Bertahan", 4: "Mampu Sejahtera", 5: "Sangat Makmur" }
  },
  {
    id: "Q_IND_05_akademisi_lsm",
    id_indikator: "IND_05",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana analisis kelayakan ekonomi dan pendapatan bersih (net profit margin) usaha perikanan tangkap skala kecil di Kota Cilegon?",
    skala_label: { 1: "Berada di Bawah Garis Kemiskinan", 2: "Marjinal Rendah", 3: "Tingkat Subsisten Cukup", 4: "Layak Secara Finansial", 5: "Sangat Menguntungkan & Tangguh" }
  },
  {
    id: "Q_IND_05_industri",
    id_indikator: "IND_05",
    id_stakeholder_group: "industri",
    teks: "Bagaimana peran sektor perikanan tangkap dalam menjaga ketahanan ekonomi dan stabilitas rantai pasok pangan masyarakat sekitar kawasan industri Cilegon?",
    skala_label: { 1: "Sangat Rentan/Lemah", 2: "Kurang Berperan", 3: "Cukup Menopang", 4: "Berperan Nyata", 5: "Sangat Strategis & Kokoh" }
  },

  // IND_06: Beban biaya operasional
  {
    id: "Q_IND_06_pemda",
    id_indikator: "IND_06",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana tingkat keterjangkauan dan efisiensi biaya operasional (BBM solar subsidi, es balok, perbekalan) bagi nelayan tangkap di Cilegon?",
    skala_label: { 1: "Sangat Mahal/Sangat Berat", 2: "Cukup Memberatkan", 3: "Wajar/Sedang", 4: "Terjangkau & Efisien", 5: "Sangat Terjangkau & Efisien" }
  },
  {
    id: "Q_IND_06_pelaku_usaha",
    id_indikator: "IND_06",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Bagaimana pengeluaran untuk beli solar, es, dan bekal setiap kali berangkat melaut, apakah harganya murah dan barangnya mudah didapat?",
    skala_label: { 1: "Sangat Mahal & Solar Susah", 2: "Memberatkan Biaya Melaut", 3: "Biasa Saja / Masih Bisa", 4: "Cukup Terjangkau & Mudah", 5: "Sangat Murah, Lancar & Ringan" }
  },
  {
    id: "Q_IND_06_masyarakat_pesisir",
    id_indikator: "IND_06",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana kemudahan nelayan di lingkungan sekitar dalam memperoleh solar subsidi dan es balok untuk melaut dengan harga terjangkau?",
    skala_label: { 1: "Sangat Sulit & Mahal Sekali", 2: "Sering Terkendala", 3: "Cukup Tersedia", 4: "Mudah & Terjangkau", 5: "Sangat Mudah, Murah & Terjamin" }
  },
  {
    id: "Q_IND_06_akademisi_lsm",
    id_indikator: "IND_06",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana rasio biaya operasional terhadap total pendapatan kotor (Revenue-Cost Ratio) armada perikanan tangkap pesisir Cilegon?",
    skala_label: { 1: "Rasio Sangat Tinggi/Beban Defisit", 2: "Tinggi (Kurang Efisien)", 3: "Moderat Seimbang", 4: "Efisien Menguntungkan", 5: "Sangat Efisien & Hemat Energi" }
  },
  {
    id: "Q_IND_06_industri",
    id_indikator: "IND_06",
    id_stakeholder_group: "industri",
    teks: "Bagaimana stabilitas pasokan logistik energi dan kebutuhan melaut bagi komunitas nelayan pesisir Cilegon menurut pengamatan pihak industri?",
    skala_label: { 1: "Sangat Rawan Gejolak", 2: "Sering Terhambat Biaya", 3: "Cukup Stabil", 4: "Stabil & Terkelola Baik", 5: "Sangat Terjamin & Efisien" }
  },

  // IND_07: Akses modal & pasar
  {
    id: "Q_IND_07_pemda",
    id_indikator: "IND_07",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana ketersediaan fasilitas pembiayaan formal (KUR/bank) serta keteraturan tata niaga pasar di Tempat Pelelangan Ikan (TPI) Kota Cilegon?",
    skala_label: { 1: "Sangat Tertutup & Monopolistik", 2: "Akses Terbatas", 3: "Cukup Memadai", 4: "Akses Terbuka & Pasar Adil", 5: "Sangat Prima, Adil & Modern" }
  },
  {
    id: "Q_IND_07_pelaku_usaha",
    id_indikator: "IND_07",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah Bapak/Ibu mudah mendapatkan pinjaman modal usaha (tanpa terjerat rentenir) dan harga jual ikan di TPI/bakul selalu adil dan tidak dipermainkan?",
    skala_label: { 1: "Sangat Susah Modal & Harga Dipermainkan", 2: "Masih Kerap Dijerat Utang", 3: "Kadang Mudah Kadang Susah", 4: "Mudah Modal & Harga Adil", 5: "Sangat Mudah Pinjam, Harga Sangat Bagus" }
  },
  {
    id: "Q_IND_07_masyarakat_pesisir",
    id_indikator: "IND_07",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana kemudahan warga dan keluarga nelayan dalam mendapatkan pinjaman modal serta kelancaran jual beli ikan di pasar pesisir?",
    skala_label: { 1: "Sangat Susah & Rawan Rentenir", 2: "Modal Terbatas", 3: "Cukup Membantu", 4: "Mudah & Transaksi Ramai", 5: "Sangat Terbuka & Menguntungkan" }
  },
  {
    id: "Q_IND_07_akademisi_lsm",
    id_indikator: "IND_07",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat inklusi keuangan lembaga mikro serta efisiensi transmisi harga pada rantai pasok pemasaran perikanan di Kota Cilegon?",
    skala_label: { 1: "Asimetri Informasi & Rentenir Tinggi", 2: "Inklusi Rendah", 3: "Efisiensi Rantai Cukup", 4: "Inklusi Keuangan Terbuka", 5: "Struktur Pasar Sangat Efisien & Berkeadilan" }
  },
  {
    id: "Q_IND_07_industri",
    id_indikator: "IND_07",
    id_stakeholder_group: "industri",
    teks: "Sejauh mana kemitraan pasar atau dukungan permodalan/CSR dapat diakses oleh pelaku usaha perikanan lokal di kawasan pesisir Cilegon?",
    skala_label: { 1: "Sangat Minim/Tidak Ada", 2: "Terbatas Beberapa Kelompok", 3: "Cukup Terlaksana", 4: "Program Kemitraan Aktif", 5: "Sinergi Kemitraan Sangat Kuat & Luas" }
  },

  // IND_08: Nilai tambah produk perikanan
  {
    id: "Q_IND_08_pemda",
    id_indikator: "IND_08",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana perkembangan hilirisasi, pengolahan hasil tangkapan, dan diversifikasi produk perikanan (ikan asin, kerupuk, frozen) di Kota Cilegon?",
    skala_label: { 1: "Sangat Tradisional/Tanpa Olahan", 2: "Masih Minim Diversifikasi", 3: "Cukup Berkembang", 4: "Nilai Tambah Tinggi", 5: "Sangat Maju & Berdaya Saing Ekspor" }
  },
  {
    id: "Q_IND_08_pelaku_usaha",
    id_indikator: "IND_08",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah ikan hasil tangkapan atau ikan yang tidak habis bisa diolah jadi produk lain (ikan asin, presto, kerupuk) yang harganya lebih mahal?",
    skala_label: { 1: "Tidak Bisa Diolah/Sering Busuk", 2: "Hanya Dijual Mentah", 3: "Bisa Diolah Sedikit", 4: "Banyak Olahan Menguntungkan", 5: "Sangat Menguntungkan Jadi Produk Unggulan" }
  },
  {
    id: "Q_IND_08_masyarakat_pesisir",
    id_indikator: "IND_08",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Sejauh mana kelompok ibu-ibu atau warga pesisir aktif membuat oleh-oleh/kuliner olahan ikan khas Cilegon yang laku dijual ke wisatawan?",
    skala_label: { 1: "Tidak Ada Usaha Olahan", 2: "Masih Sedikit Sekali", 3: "Mulai Berkembang", 4: "Banyak Kelompok Olahan Sukses", 5: "Sangat Terkenal & Maju Pesat" }
  },
  {
    id: "Q_IND_08_akademisi_lsm",
    id_indikator: "IND_08",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat adopsi teknologi pascapanen (cold chain & food processing) dalam menciptakan nilai tambah (value-added) komoditas perikanan Cilegon?",
    skala_label: { 1: "Post-Harvest Losses Sangat Tinggi", 2: "Adopsi Teknologi Rendah", 3: "Teknologi Menengah Cukup", 4: "Nilai Tambah Tinggi", 5: "Hilirisasi Modern Berstandar Mutu" }
  },
  {
    id: "Q_IND_08_industri",
    id_indikator: "IND_08",
    id_stakeholder_group: "industri",
    teks: "Sejauh mana potensi produk olahan perikanan lokal diserap oleh pasar kantin industri, katering pabrik, atau program pembinaan UMKM korporasi?",
    skala_label: { 1: "Belum Pernah Diserap", 2: "Penyerapan Sangat Minim", 3: "Cukup Terserap Berkala", 4: "Penyerapan Rutin & Baik", 5: "Kemitraan Rantai Pasok Berkelanjutan" }
  },

  // =========================================================================
  // V3: PERSEPSI ASPEK SOSIAL (4 Indikator)
  // =========================================================================
  // IND_09: Kohesi sosial nelayan
  {
    id: "Q_IND_09_pemda",
    id_indikator: "IND_09",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana penilaian Anda terhadap tingkat solidaritas sosial, tradisi gotong royong, dan kerukunan antarkelompok nelayan di Kota Cilegon?",
    skala_label: { 1: "Sangat Renggang/Individualistis", 2: "Kurang Kompak", 3: "Cukup Harmonis", 4: "Kompak & Gotong Royong", 5: "Sangat Guyub, Kuat & Solid" }
  },
  {
    id: "Q_IND_09_pelaku_usaha",
    id_indikator: "IND_09",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Bagaimana rasa persaudaraan dan tolong-menolong antar sesama nelayan saat ada perahu mogok di laut, kenduri laut, atau anggota tertimpa musibah?",
    skala_label: { 1: "Masa Bodoh / Tidak Ada Tolong Menolong", 2: "Kurang Kompak", 3: "Terkadang Saling Bantu", 4: "Saling Membantu & Kompak", 5: "Sangat Kompak & Selalu Tolong Menolong" }
  },
  {
    id: "Q_IND_09_masyarakat_pesisir",
    id_indikator: "IND_09",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana kerukunan dan kekompakan warga di kampung pesisir dalam kegiatan gotong royong, bersih pantai, dan acara adat sedekah laut?",
    skala_label: { 1: "Sangat Renggang & Cuek", 2: "Jarang Kompak", 3: "Cukup Terjalin", 4: "Rukun & Suka Gotong Royong", 5: "Sangat Rukun & Solid Penuh Kekeluargaan" }
  },
  {
    id: "Q_IND_09_akademisi_lsm",
    id_indikator: "IND_09",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat modal sosial (social capital), kepercayaan (trust), dan norma resiprositas di kalangan komunitas perikanan pesisir Cilegon?",
    skala_label: { 1: "Modal Sosial Tererosi Parah", 2: "Kohesi Sosial Rendah", 3: "Tingkat Resiprositas Moderat", 4: "Modal Sosial Tinggi", 5: "Social Capital Sangat Tangguh" }
  },
  {
    id: "Q_IND_09_industri",
    id_indikator: "IND_09",
    id_stakeholder_group: "industri",
    teks: "Bagaimana pandangan industri terhadap stabilitas keharmonisan sosial dan kekompakan komunitas masyarakat nelayan di sekitar kawasan operasional?",
    skala_label: { 1: "Sering Terjadi Gesekan", 2: "Kurang Kondusif", 3: "Cukup Kondusif", 4: "Hubungan Sosial Harmonis", 5: "Sangat Harmonis & Kondusif" }
  },

  // IND_10: Potensi konflik antarpemangku kepentingan
  {
    id: "Q_IND_10_pemda",
    id_indikator: "IND_10",
    id_stakeholder_group: "pemda",
    teks: "Seberapa efektif mekanisme pencegahan dan penyelesaian konflik ruang laut (antara nelayan, kapal industri, jalur pelayaran, dan wisata) di Cilegon?",
    skala_label: { 1: "Konflik Sering Terjadi & Tak Teratasi", 2: "Sering Tegang", 3: "Bisa Dimusyawarahkan", 4: "Sangat Jarang Konflik", 5: "Nol Konflik / Ruang Laut Sangat Tertib" }
  },
  {
    id: "Q_IND_10_pelaku_usaha",
    id_indikator: "IND_10",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah di laut sering terjadi senggolan/ribut rebutan jalur mancing antara nelayan kecil dengan kapal besar, kapal tongkang industri, atau bagan luar?",
    skala_label: { 1: "Sering Ribut/Sering Terusir", 2: "Kerap Ada Masalah", 3: "Sesekali Ada Gesekan", 4: "Jarang Berselisih", 5: "Aman, Damai, Tidak Pernah Ribut" }
  },
  {
    id: "Q_IND_10_masyarakat_pesisir",
    id_indikator: "IND_10",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana penyelesaian jika ada perselisihan antara nelayan dengan pihak pengembang industri atau pengelola wisata di wilayah pesisir?",
    skala_label: { 1: "Sering Ricuh & Nelayan Dirugikan", 2: "Sulit Titik Temu", 3: "Bisa Selesai Damai", 4: "Selalu Musyawarah Mufakat", 5: "Sangat Damai & Saling Menghormati" }
  },
  {
    id: "Q_IND_10_akademisi_lsm",
    id_indikator: "IND_10",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat kerentanan konflik tata ruang pesisir (coastal spatial conflict) dan efektivitas resolusi konflik multipihak di Cilegon?",
    skala_label: { 1: "Eskalasi Konflik Kronis", 2: "Rentan Gesekan Ruang", 3: "Resolusi Cukup Berjalan", 4: "Mitigasi Konflik Efektif", 5: "Tata Ruang Sangat Harmonis & Inklusif" }
  },
  {
    id: "Q_IND_10_industri",
    id_indikator: "IND_10",
    id_stakeholder_group: "industri",
    teks: "Seberapa minim potensi gesekan atau perselisihan operasional pelabuhan/pabrik industri dengan aktivitas penangkapan nelayan tradisional?",
    skala_label: { 1: "Sering Terjadi Klaim & Gesekan", 2: "Masih Ada Gesekan", 3: "Cukup Terkendali Komunikasi", 4: "Jarang Berselisih", 5: "Zero Dispute / Hubungan Sangat Rukun" }
  },

  // IND_11: Kesetaraan akses sumber daya
  {
    id: "Q_IND_11_pemda",
    id_indikator: "IND_11",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana jaminan keadilan dan kesetaraan hak bagi nelayan kecil tradisional untuk memanfaatkan ruang perairan dan sumber daya ikan di Kota Cilegon?",
    skala_label: { 1: "Sangat Tidak Adil/Terpinggirkan", 2: "Kurang Setara", 3: "Cukup Terlindungi", 4: "Akses Adil & Terlindungi", 5: "Sangat Adil, Setara & Terbuka Luas" }
  },
  {
    id: "Q_IND_11_pelaku_usaha",
    id_indikator: "IND_11",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah nelayan kecil perahu kecil diberi kebebasan dan perlindungan yang sama untuk mencari ikan tanpa diserobot kapal besar atau dilarang sepihak?",
    skala_label: { 1: "Nelayan Kecil Kalah & Terusir", 2: "Akses Terbatas Sekali", 3: "Masih Bisa Melaut Biasa", 4: "Akses Adil & Dihargai", 5: "Sangat Merdeka & Terlindungi Penuh" }
  },
  {
    id: "Q_IND_11_masyarakat_pesisir",
    id_indikator: "IND_11",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Apakah semua warga pesisir mendapatkan hak yang adil dalam memanfaatkan pantai dan laut untuk mencari nafkah?",
    skala_label: { 1: "Banyak Pantai Ditutup Pagar", 2: "Kurang Merata", 3: "Cukup Adil", 4: "Adil & Terbuka", 5: "Sangat Adil & Setara untuk Semua" }
  },
  {
    id: "Q_IND_11_akademisi_lsm",
    id_indikator: "IND_11",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat keadilan distributif (distributive justice) dan perlindungan hak tenurial nelayan tradisional atas perairan tangkap di Cilegon?",
    skala_label: { 1: "Ocean Grabbing / Marginalisasi Parah", 2: "Akses Kurang Berkeadilan", 3: "Cukup Terakomodasi", 4: "Hak Tenurial Terlindungi", 5: "Prinsip Human Rights-Based Sangat Kuat" }
  },
  {
    id: "Q_IND_11_industri",
    id_indikator: "IND_11",
    id_stakeholder_group: "industri",
    teks: "Sejauh mana penataan batas zona keamanan industri di perairan tetap memberikan ruang koridor yang adil bagi jalur lalu lintas nelayan tradisional?",
    skala_label: { 1: "Menutup Total Jalur Nelayan", 2: "Kurang Memperhatikan Koridor", 3: "Memberikan Koridor Minimal", 4: "Menata Koridor dengan Baik", 5: "Sangat Menghormati Akses Jalur Nelayan" }
  },

  // IND_12: Keberlanjutan mata pencaharian
  {
    id: "Q_IND_12_pemda",
    id_indikator: "IND_12",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana optimisme Anda terhadap kepastian keberlanjutan profesi nelayan dan ketertarikan generasi muda pesisir untuk melanjutkan usaha perikanan di Cilegon?",
    skala_label: { 1: "Sangat Terancam Punah", 2: "Cenderung Ditinggalkan", 3: "Cukup Bertahan", 4: "Prospektif & Diminati", 5: "Sangat Menjanjikan & Regenerasi Kuat" }
  },
  {
    id: "Q_IND_12_pelaku_usaha",
    id_indikator: "IND_12",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah anak-anak muda di keluarga/kampung Bapak/Ibu masih mau melanjutkan menjadi nelayan karena merasa pekerjaan di laut menjanjikan masa depan?",
    skala_label: { 1: "Sama Sekali Tidak Mau/Tinggalkan Laut", 2: "Hanya Sedikit Sekali", 3: "Sebagian Masih Mau", 4: "Banyak yang Minat Melaut", 5: "Sangat Bangga & Semangat Meneruskan" }
  },
  {
    id: "Q_IND_12_masyarakat_pesisir",
    id_indikator: "IND_12",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana keyakinan warga terhadap masa depan kehidupan kampung nelayan pesisir Cilegon dalam 10-20 tahun yang akan datang?",
    skala_label: { 1: "Sangat Khawatir Tergusur", 2: "Masa Depan Kurang Jelas", 3: "Cukup Optimis Bertahan", 4: "Yakin Tetap Makmur", 5: "Sangat Optimis Maju & Lestari" }
  },
  {
    id: "Q_IND_12_akademisi_lsm",
    id_indikator: "IND_12",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat ketahanan penghidupan (livelihood resilience) dan prospek suksesi generasi penerus perikanan tangkap di Kota Cilegon?",
    skala_label: { 1: "Krisis Regenerasi Akut", 2: "Resiliensi Penghidupan Rendah", 3: "Daya Tahan Moderat", 4: "Resiliensi Baik", 5: "Livelihood Sangat Tangguh & Adaptif" }
  },
  {
    id: "Q_IND_12_industri",
    id_indikator: "IND_12",
    id_stakeholder_group: "industri",
    teks: "Bagaimana penilaian korporasi mengenai pentingnya menjaga kelangsungan hidup profesi nelayan sebagai kearifan lokal pesisir Cilegon berdampingan dengan industri?",
    skala_label: { 1: "Tidak Relevan bagi Industri", 2: "Kurang Diprioritaskan", 3: "Cukup Penting", 4: "Sangat Penting Dijaga", 5: "Prioritas Utama Simbiosis Keberlanjutan" }
  },

  // =========================================================================
  // V4: PERSEPSI TATA KELOLA / GOVERNANCE (7 Indikator)
  // =========================================================================
  // IND_13: Transparansi informasi
  {
    id: "Q_IND_13_pemda",
    id_indikator: "IND_13",
    id_stakeholder_group: "pemda",
    teks: "Sejauh mana keterbukaan informasi publik mengenai program, alokasi bantuan, dan perizinan kelautan-perikanan disampaikan secara transparan di Cilegon?",
    skala_label: { 1: "Sangat Tertutup", 2: "Kurang Transparan", 3: "Cukup Terbuka", 4: "Transparan & Mudah Diakses", 5: "Sangat Terbuka & Real-time" }
  },
  {
    id: "Q_IND_13_pelaku_usaha",
    id_indikator: "IND_13",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah informasi tentang bantuan perahu, mesin tempel, subsidi solar, dan aturan melaut selalu diberitahukan secara jelas dan jujur kepada semua nelayan?",
    skala_label: { 1: "Sangat Rahasia/Hanya Orang Dekat", 2: "Kurang Jelas/Kerap Simpang Siur", 3: "Kadang Diberitahu", 4: "Jelas & Diberitahukan", 5: "Sangat Jelas, Jujur & Semua Tahu" }
  },
  {
    id: "Q_IND_13_masyarakat_pesisir",
    id_indikator: "IND_13",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana kemudahan warga pesisir dalam mendapatkan berita atau pengumuman resmi mengenai kegiatan dan bantuan perikanan dari pemerintah?",
    skala_label: { 1: "Sangat Sulit/Tidak Pernah Tahu", 2: "Jarang Ada Info", 3: "Cukup Ada Pengumuman", 4: "Mudah Diketahui Warga", 5: "Sangat Terbuka & Jelas di Kelurahan" }
  },
  {
    id: "Q_IND_13_akademisi_lsm",
    id_indikator: "IND_13",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat akuntabilitas dan transparansi keterbukaan data publik sektor kelautan dan perikanan tangkap Kota Cilegon?",
    skala_label: { 1: "Sangat Tertutup (Black Box)", 2: "Akses Data Rendah", 3: "Cukup Transparan", 4: "Keterbukaan Data Baik", 5: "Sangat Transparan & Open Data" }
  },
  {
    id: "Q_IND_13_industri",
    id_indikator: "IND_13",
    id_stakeholder_group: "industri",
    teks: "Sejauh mana transparansi regulasi dan sosialisasi kebijakan zonasi maritim oleh pemerintah daerah dapat diakses secara cepat oleh kalangan industri?",
    skala_label: { 1: "Sangat Tertutup", 2: "Kurang Tersosialisasi", 3: "Cukup Terbuka", 4: "Transparan & Informatif", 5: "Sangat Transparan & Terpadu" }
  },

  // IND_14: Keterbukaan pengambilan keputusan
  {
    id: "Q_IND_14_pemda",
    id_indikator: "IND_14",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana mekanisme pelibatan berbagai pihak (nelayan, asosiasi, industri, pakar) dalam proses musyawarah pengambilan kebijakan pengelolaan pesisir?",
    skala_label: { 1: "Satu Arah (Top-down Kaku)", 2: "Minim Pelibatan", 3: "Cukup Akomodatif", 4: "Partisipatif & Terbuka", 5: "Sangat Demokratis & Kolaboratif" }
  },
  {
    id: "Q_IND_14_pelaku_usaha",
    id_indikator: "IND_14",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Ketika pemerintah membuat aturan baru tentang laut di Cilegon, apakah suara dan usulan para nelayan didengar dan diajak rembukan terlebih dahulu?",
    skala_label: { 1: "Sama Sekali Tidak Pernah Diajak", 2: "Hanya Tiba-tiba Diberi Tahu Aturan", 3: "Pernah Diajak Sesekali", 4: "Selalu Diajak Rembukan", 5: "Sangat Dihargai & Usulan Nelayan Dipakai" }
  },
  {
    id: "Q_IND_14_masyarakat_pesisir",
    id_indikator: "IND_14",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Apakah tokoh masyarakat pesisir dan pengurus rukun nelayan dilibatkan saat penetapan program pembangunan pantai di Cilegon?",
    skala_label: { 1: "Tidak Pernah Dilibatkan", 2: "Jarang Diajak Bicara", 3: "Cukup Sering Diajak", 4: "Aktif Dilibatkan", 5: "Selalu Dilibatkan Penuh" }
  },
  {
    id: "Q_IND_14_akademisi_lsm",
    id_indikator: "IND_14",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana derajat inklusivitas proses deliberasi kebijakan tata kelola perikanan dan penataan ruang laut (RZWP3K) di Kota Cilegon?",
    skala_label: { 1: "Eksklusif & Teknokrasi Kaku", 2: "Pelibatan Simbolis (Tokenism)", 3: "Deliberasi Cukup", 4: "Inklusif & Partisipatif", 5: "Genuine Co-management" }
  },
  {
    id: "Q_IND_14_industri",
    id_indikator: "IND_14",
    id_stakeholder_group: "industri",
    teks: "Sejauh mana kalangan industri diundang dan didengar aspirasinya dalam perumusan kebijakan tata ruang perairan dan kelautan Cilegon?",
    skala_label: { 1: "Tidak Pernah Diajak", 2: "Jarang Dimintai Masukan", 3: "Cukup Dilibatkan", 4: "Rutin Dilibatkan", 5: "Selalu Dilibatkan Secara Komprehensif" }
  },

  // IND_15: Akuntabilitas & penegakan hukum
  {
    id: "Q_IND_15_pemda",
    id_indikator: "IND_15",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana efektivitas pengawasan terpadu (Wasmas/Polairud/DKPP) dan ketegasan sanksi hukum terhadap pelanggaran aturan di laut Cilegon?",
    skala_label: { 1: "Lemah & Banyak Pembiaran", 2: "Kurang Konsisten", 3: "Cukup Berjalan", 4: "Tegas & Akuntabel", 5: "Sangat Ketat, Adil & Tanpa Pandang Bulu" }
  },
  {
    id: "Q_IND_15_pelaku_usaha",
    id_indikator: "IND_15",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah aparat patroli laut adil dan tegas menindak kapal yang pakai alat tangkap terlarang atau kapal luar yang merusak wilayah tangkap Cilegon?",
    skala_label: { 1: "Tidak Ada Tindakan/Pilih Kasih", 2: "Kurang Tegas", 3: "Cukup Ada Patroli", 4: "Tegas & Melindungi Nelayan", 5: "Sangat Tegas, Adil & Laut Sangat Aman" }
  },
  {
    id: "Q_IND_15_masyarakat_pesisir",
    id_indikator: "IND_15",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana ketegasan aparat dalam menjaga keamanan laut dan menertibkan pihak-pihak yang membuang limbah atau merusak pantai di Cilegon?",
    skala_label: { 1: "Sangat Lemah", 2: "Kurang Ada Sanksi", 3: "Cukup Ditindak", 4: "Tegas Menertibkan", 5: "Sangat Tegas & Bertanggung Jawab" }
  },
  {
    id: "Q_IND_15_akademisi_lsm",
    id_indikator: "IND_15",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat kepatuhan hukum (law compliance) dan integritas sistem monitoring, controlling, and surveillance (MCS) di perairan Cilegon?",
    skala_label: { 1: "MCS Lumpuh/Inefektif", 2: "Penegakan Lemah", 3: "Tingkat MCS Cukup", 4: "Penegakan Hukum Efektif", 5: "MCS Unggul Berbasis Bukti" }
  },
  {
    id: "Q_IND_15_industri",
    id_indikator: "IND_15",
    id_stakeholder_group: "industri",
    teks: "Bagaimana konsistensi penegakan aturan keselamatan pelayaran dan kepatuhan lingkungan laut bagi seluruh entitas di pesisir Cilegon?",
    skala_label: { 1: "Sangat Tidak Konsisten", 2: "Perlu Peningkatan Ketegasan", 3: "Cukup Berjalan", 4: "Tegas & Profesional", 5: "Sangat Profesional & Berkepastian Hukum" }
  },

  // IND_16: Koordinasi lintas sektor
  {
    id: "Q_IND_16_pemda",
    id_indikator: "IND_16",
    id_stakeholder_group: "pemda",
    teks: "Sejauh mana sinergi dan koordinasi antar-OPD (DKPP, Bapperida, DLH, Disperindag) serta instansi vertikal (KSOP, Polairud) dalam tata kelola pesisir?",
    skala_label: { 1: "Ego Sektoral Akut", 2: "Kurang Sinkron", 3: "Cukup Terkoordinasi", 4: "Sinergis & Terpadu", 5: "Sangat Padu & Terintegrasi Sempurna" }
  },
  {
    id: "Q_IND_16_pelaku_usaha",
    id_indikator: "IND_16",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah urusan perizinan melaut, pas kapal, dan urusan dinas tidak berbelit-belit dan instansi pemerintah kompak membantu nelayan?",
    skala_label: { 1: "Sangat Ruwet & Saling Lempar", 2: "Masih Berbelit-belit", 3: "Cukup Mudah", 4: "Kompak & Mempermudah", 5: "Sangat Cepat, Mudah & Satu Pintu" }
  },
  {
    id: "Q_IND_16_masyarakat_pesisir",
    id_indikator: "IND_16",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana kekompakan dinas kelautan, kelurahan, dan dinas lingkungan hidup dalam menyelesaikan masalah sampah dan tata kelola pesisir?",
    skala_label: { 1: "Saling Lempar Tanggung Jawab", 2: "Kurang Kompak", 3: "Cukup Bekerja Sama", 4: "Kompak Turun ke Lapangan", 5: "Sangat Kompak & Cepat Tanggap" }
  },
  {
    id: "Q_IND_16_akademisi_lsm",
    id_indikator: "IND_16",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana efektivitas koordinasi kelembagaan multisektoral (Integrated Coastal Zone Management - ICZM) di kawasan pesisir Kota Cilegon?",
    skala_label: { 1: "Fragmentasi Kebijakan Parah", 2: "Koordinasi Lemah", 3: "ICZM Cukup Terwujud", 4: "Koordinasi Terpadu Baik", 5: "ICZM Sangat Terpadu & Sinergis" }
  },
  {
    id: "Q_IND_16_industri",
    id_indikator: "IND_16",
    id_stakeholder_group: "industri",
    teks: "Seberapa efisien koordinasi antara pihak regulator pelabuhan, pemerintah daerah, dan pengelola kawasan industri dalam penataan maritim Cilegon?",
    skala_label: { 1: "Sangat Tumpang Tindih", 2: "Banyak Hambatan Birokrasi", 3: "Cukup Efisien", 4: "Efisien & Sinergis", 5: "Sangat Cepat, Efisien & Terintegrasi" }
  },

  // IND_17: Integrasi kepentingan stakeholder
  {
    id: "Q_IND_17_pemda",
    id_indikator: "IND_17",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana kebijakan perikanan Pemkot Cilegon mampu menyeimbangkan kepentingan ekonomi nelayan, ekspansi industri, dan konservasi alam?",
    skala_label: { 1: "Sangat Berat Sebelah", 2: "Kurang Seimbang", 3: "Cukup Berimbang", 4: "Keseimbangan Terjaga", 5: "Sangat Adil, Berimbang & Berkelanjutan" }
  },
  {
    id: "Q_IND_17_pelaku_usaha",
    id_indikator: "IND_17",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah aturan yang dibuat pemerintah kota adil untuk nelayan kecil dan tidak hanya menguntungkan pabrik besar di pesisir?",
    skala_label: { 1: "Hanya Bela Pabrik/Nelayan Diabaikan", 2: "Nelayan Kurang Diperhatikan", 3: "Cukup Imbang", 4: "Memperhatikan Kepentingan Nelayan", 5: "Sangat Adil Menjaga Hak Nelayan & Semua Pihak" }
  },
  {
    id: "Q_IND_17_masyarakat_pesisir",
    id_indikator: "IND_17",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Sejauh mana kebijakan pembangunan pantai Cilegon mampu mengakomodasi kebutuhan tempat tinggal warga, tempat nelayan melaut, dan industri?",
    skala_label: { 1: "Warga Sering Dirugikan", 2: "Kurang Seimbang", 3: "Cukup Menengahi", 4: "Akomodatif Terhadap Warga", 5: "Sangat Harmonis Menyelaraskan Semua" }
  },
  {
    id: "Q_IND_17_akademisi_lsm",
    id_indikator: "IND_17",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana implementasi pendekatan trade-off analysis dan win-win solution antarstakeholder dalam tata kelola ruang pesisir Cilegon?",
    skala_label: { 1: "Zero-Sum Game / Ketimpangan Kuasa", 2: "Kurang Mengintegrasikan Kepentingan", 3: "Kompromi Cukup", 4: "Trade-off Terkelola Baik", 5: "Integrasi Kepentingan Optimal" }
  },
  {
    id: "Q_IND_17_industri",
    id_indikator: "IND_17",
    id_stakeholder_group: "industri",
    teks: "Sejauh mana kebijakan pemerintah daerah memfasilitasi titik temu kepentingan investasi industri dengan perlindungan livelihood nelayan sekitar?",
    skala_label: { 1: "Sering Memunculkan Ketegangan", 2: "Kurang Akomodatif", 3: "Cukup Menjembatani", 4: "Menjembatani dengan Baik", 5: "Solusi Kemitraan Saling Menguntungkan" }
  },

  // IND_18: Konsistensi kebijakan
  {
    id: "Q_IND_18_pemda",
    id_indikator: "IND_18",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana konsistensi dan kesinambungan arah rencana induk (masterplan) keberlanjutan perikanan tangkap Cilegon di tengah pergantian periode kepemimpinan?",
    skala_label: { 1: "Sering Berubah Drastis/Ganti Pemimpin Ganti Kebijakan", 2: "Kurang Konsisten", 3: "Cukup Berkelanjutan", 4: "Konsisten Sesuai Roadmap", 5: "Sangat Konsisten & Kokoh Berjangka Panjang" }
  },
  {
    id: "Q_IND_18_pelaku_usaha",
    id_indikator: "IND_18",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah program bantuan, aturan melaut, dan pembinaan nelayan berjalan terus-menerus dan tidak cuma hangat-hangat tahi ayam saat mau pemilu saja?",
    skala_label: { 1: "Cuma Janji/Hangat-hangat Tahi Ayam", 2: "Sering Putus di Tengah Jalan", 3: "Cukup Berjalan", 4: "Rutin & Berkelanjutan", 5: "Sangat Konsisten & Selalu Ada Pendampingan" }
  },
  {
    id: "Q_IND_18_masyarakat_pesisir",
    id_indikator: "IND_18",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Apakah program penataan kampung pesisir dan pemberdayaan nelayan terus dijalankan secara berkesinambungan oleh dinas terkait?",
    skala_label: { 1: "Sering Mangkrak/Ganti Pejabat Hilang", 2: "Kurang Berkesinambungan", 3: "Cukup Dilanjutkan", 4: "Berkesinambungan", 5: "Sangat Konsisten & Berdampak Jangka Panjang" }
  },
  {
    id: "Q_IND_18_akademisi_lsm",
    id_indikator: "IND_18",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana stabilitas regulasi dan konsistensi trajectory kebijakan pengelolaan perikanan tangkap berkelanjutan di Kota Cilegon?",
    skala_label: { 1: "Volatilitas Regulasi Tinggi/Inkonsisten", 2: "Cenderung Inkonsisten", 3: "Cukup Stabil", 4: "Regulasi Konsisten", 5: "Policy Trajectory Sangat Matang & Stabil" }
  },
  {
    id: "Q_IND_18_industri",
    id_indikator: "IND_18",
    id_stakeholder_group: "industri",
    teks: "Bagaimana kepastian hukum dan konsistensi regulasi pemanfaatan ruang perairan yang diterbitkan pemerintah daerah bagi dunia usaha?",
    skala_label: { 1: "Sangat Tidak Menentu", 2: "Kurang Kepastian Hukum", 3: "Cukup Memberi Kepastian", 4: "Konsisten & Berkepastian", 5: "Sangat Pasti, Stabil & Kredibel" }
  },

  // IND_19: Penggunaan data dalam pengambilan keputusan
  {
    id: "Q_IND_19_pemda",
    id_indikator: "IND_19",
    id_stakeholder_group: "pemda",
    teks: "Sejauh mana penyusunan program dan regulasi perikanan tangkap di Kota Cilegon didasarkan pada basis data ilmiah dan kajian stok terukur (evidence-based policy)?",
    skala_label: { 1: "Tanpa Data Ilmiah/Hanya Asumsi", 2: "Minim Kajian", 3: "Cukup Berbasis Data", 4: "Menggunakan Kajian Riset", 5: "100% Evidence-Based & Mutakhir" }
  },
  {
    id: "Q_IND_19_pelaku_usaha",
    id_indikator: "IND_19",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Ketika dinas membuat aturan, apakah petugas benar-benar turun ke laut mengecek kondisi kapal dan hasil tangkapan nelayan yang sesungguhnya?",
    skala_label: { 1: "Cuma Duduk di Kantor/Asal Buat Aturan", 2: "Jarang Turun Cek Lapangan", 3: "Sesekali Cek Lapangan", 4: "Rutin Cek Kondisi Nyata", 5: "Selalu Turun Mengkaji Kondisi Laut" }
  },
  {
    id: "Q_IND_19_masyarakat_pesisir",
    id_indikator: "IND_19",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Apakah program bantuan yang turun ke pesisir tepat sasaran sesuai data riil keluarga nelayan yang memang membutuhkan?",
    skala_label: { 1: "Sangat Salah Sasaran", 2: "Banyak Salah Sasaran", 3: "Cukup Tepat", 4: "Tepat Sasaran Sesuai Fakta", 5: "Sangat Tepat Sasaran & Berbasis Data Riil" }
  },
  {
    id: "Q_IND_19_akademisi_lsm",
    id_indikator: "IND_19",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat pemanfaatan data riset oseanografi, stok perikanan, dan analisis sosial-ekonomi (evidence-based policy) dalam regulasi daerah Cilegon?",
    skala_label: { 1: "Politik Transaksional Tanpa Data", 2: "Pemanfaatan Riset Rendah", 3: "Cukup Mengacu Data", 4: "Berbasis Kajian Akademik Baik", 5: "Sains Menjadi Basis Utama Kebijakan" }
  },
  {
    id: "Q_IND_19_industri",
    id_indikator: "IND_19",
    id_stakeholder_group: "industri",
    teks: "Sejauh mana kajian lingkungan ilmiah (AMDAL/RKL-RPL) dan monitoring berkala dijadikan dasar bersama dalam penataan perairan industri-pesisir?",
    skala_label: { 1: "Hanya Dokumen Formalitas", 2: "Kurang Dijadikan Rujukan", 3: "Cukup Dijadikan Acuan", 4: "Kajian Data Ditaati Bersama", 5: "Sangat Berbasis Data Ilmiah Presisi" }
  },

  // =========================================================================
  // V5: PERSEPSI KELEMBAGAAN (4 Indikator)
  // =========================================================================
  // IND_20: Kapasitas kelembagaan formal & informal
  {
    id: "Q_IND_20_pemda",
    id_indikator: "IND_20",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana penilaian Anda terhadap kapasitas SDM, ketersediaan anggaran, dan sarana prasarana dinas dalam mengelola sektor perikanan di Cilegon?",
    skala_label: { 1: "Sangat Terbatas & Tidak Memadai", 2: "Kurang Memadai", 3: "Cukup Memadai", 4: "Kapasitas SDM & Sarpras Baik", 5: "Sangat Prima, Kompeten & Lengkap" }
  },
  {
    id: "Q_IND_20_pelaku_usaha",
    id_indikator: "IND_20",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Bagaimana kesigapan dan kemampuan petugas dinas perikanan di Cilegon saat melayani keluhan, mengurus surat kapal, atau membantu nelayan?",
    skala_label: { 1: "Sangat Lambat & Tidak Mampu Membantu", 2: "Kurang Tanggap", 3: "Cukup Membantu", 4: "Sigap & Ramah Melayani", 5: "Sangat Cepat, Paham Masalah & Selalu Membantu" }
  },
  {
    id: "Q_IND_20_masyarakat_pesisir",
    id_indikator: "IND_20",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana kemampuan dan fasilitas kantor kelurahan/pos pelayanan pesisir dalam menampung urusan dan kebutuhan masyarakat nelayan?",
    skala_label: { 1: "Sangat Kurang Siap", 2: "Fasilitas Terbatas", 3: "Cukup Melayani", 4: "Pelayanan Baik & Sigap", 5: "Sangat Memuaskan & Fasilitas Lengkap" }
  },
  {
    id: "Q_IND_20_akademisi_lsm",
    id_indikator: "IND_20",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana kapasitas kelembagaan aparatur teknis (institutional capability) Pemkot Cilegon dalam tata kelola perikanan tangkap modern?",
    skala_label: { 1: "Under-capacity Kritis", 2: "Kapasitas Kelembagaan Rendah", 3: "Kapasitas Cukup", 4: "Kapasitas Kelembagaan Baik", 5: "Institusi Berdaya Saing & Adaptif Tinggi" }
  },
  {
    id: "Q_IND_20_industri",
    id_indikator: "IND_20",
    id_stakeholder_group: "industri",
    teks: "Bagaimana profesionalitas dan kapabilitas tim dinas terkait dalam bermitra dengan korporasi mengelola kawasan maritim pesisir Cilegon?",
    skala_label: { 1: "Sangat Kurang Profesional", 2: "Kurang Responsif", 3: "Cukup Profesional", 4: "Profesional & Proaktif", 5: "Sangat Profesional & Standar Tinggi" }
  },

  // IND_21: Efektivitas kelompok nelayan / rukun nelayan
  {
    id: "Q_IND_21_pemda",
    id_indikator: "IND_21",
    id_stakeholder_group: "pemda",
    teks: "Seberapa efektif peran Kelompok Usaha Bersama (KUB), Rukun Nelayan (HNSI), dan Koperasi dalam mengorganisir anggotanya secara mandiri di Cilegon?",
    skala_label: { 1: "Pasif/Hanya Nama di Kertas", 2: "Kurang Berjalan", 3: "Cukup Aktif", 4: "Aktif & Mandiri", 5: "Sangat Efektif, Mandiri & Berdaya" }
  },
  {
    id: "Q_IND_21_pelaku_usaha",
    id_indikator: "IND_21",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah kelompok nelayan (KUB/Rukun Nelayan) tempat Bapak/Ibu bergabung aktif mengadakan arisan, simpan pinjam, atau memperjuangkan hak anggota?",
    skala_label: { 1: "Mati Suri/Cuma Formalitas", 2: "Jarang Ada Kegiatan", 3: "Cukup Aktif", 4: "Aktif Membantu Anggota", 5: "Sangat Hidup, Kuat & Kompak Luar Biasa" }
  },
  {
    id: "Q_IND_21_masyarakat_pesisir",
    id_indikator: "IND_21",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana keaktifan pengurus rukun nelayan dalam memimpin warga dan menjaga ketenteraman pangkalan nelayan di wilayah sekitar?",
    skala_label: { 1: "Pengurus Tidak Aktif", 2: "Kurang Berperan", 3: "Cukup Berperan", 4: "Aktif Membina Warga", 5: "Sangat Berwibawa & Aktif Mengayomi" }
  },
  {
    id: "Q_IND_21_akademisi_lsm",
    id_indikator: "IND_21",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat keaktifan tata kelola internal, akuntabilitas organisasi, dan kekuatan self-governance pada asosiasi/kelompok nelayan di Cilegon?",
    skala_label: { 1: "Disfungsional / Mati Suri", 2: "Tata Kelola Internal Lemah", 3: "Self-governance Moderat", 4: "Kelompok Berfungsi Baik", 5: "Self-governance Mandiri & Sangat Kuat" }
  },
  {
    id: "Q_IND_21_industri",
    id_indikator: "IND_21",
    id_stakeholder_group: "industri",
    teks: "Seberapa terstruktur dan mudah diajak berkomunikasi kelompok nelayan/HNSI saat korporasi ingin menyalurkan program CSR atau mediasi lapangan?",
    skala_label: { 1: "Sangat Sulit Terorganisir", 2: "Kurang Terstruktur", 3: "Cukup Kooperatif", 4: "Terorganisir & Kooperatif", 5: "Sangat Solid, Jelas & Kredibel" }
  },

  // IND_22: Efektivitas kelembagaan pendukung
  {
    id: "Q_IND_22_pemda",
    id_indikator: "IND_22",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana kontribusi lembaga pendukung seperti Penyuluh Perikanan Lapangan (PPL), perguruan tinggi, dan perbankan dalam memajukan perikanan Cilegon?",
    skala_label: { 1: "Sangat Minim Kontribusi", 2: "Kurang Optimal", 3: "Cukup Berkontribusi", 4: "Aktif Mendampingi", 5: "Sangat Berdampak Positif & Nyata" }
  },
  {
    id: "Q_IND_22_pelaku_usaha",
    id_indikator: "IND_22",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah petugas penyuluh perikanan sering datang menemui nelayan untuk mengajari teknik baru, merawat mesin, atau memberi info cuaca laut?",
    skala_label: { 1: "Tidak Pernah Datang Sama Sekali", 2: "Sangat Jarang Muncul", 3: "Kadang-kadang Datang", 4: "Rutin Datang Membina", 5: "Sangat Rajin & Selalu Mendampingi Nelayan" }
  },
  {
    id: "Q_IND_22_masyarakat_pesisir",
    id_indikator: "IND_22",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Sejauh mana kehadiran petugas penyuluh, puskesmas pesisir, dan lembaga pelatihan terasa manfaatnya bagi kemajuan warga pesisir Cilegon?",
    skala_label: { 1: "Tidak Terasa Manfaatnya", 2: "Kurang Dirasakan", 3: "Cukup Membantu", 4: "Banyak Membantu Warga", 5: "Sangat Bermanfaat & Membimbing Warga" }
  },
  {
    id: "Q_IND_22_akademisi_lsm",
    id_indikator: "IND_22",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana efektivitas fungsi intermediasi dan transfer pengetahuan/teknologi oleh lembaga pendukung (PPL, balai riset, inkubator bisnis) di Cilegon?",
    skala_label: { 1: "Transfer Teknologi Mandek", 2: "Intermediasi Lemah", 3: "Cukup Berfungsi", 4: "Transfer Pengetahuan Efektif", 5: "Ekosistem Inovasi Sangat Produktif" }
  },
  {
    id: "Q_IND_22_industri",
    id_indikator: "IND_22",
    id_stakeholder_group: "industri",
    teks: "Sejauh mana kelembagaan pendukung seperti balai riset atau dinas terkait memfasilitasi program sinergi lingkungan industri-pesisir?",
    skala_label: { 1: "Sama Sekali Tidak Ada Fasilitasi", 2: "Kurang Berperan", 3: "Cukup Memfasilitasi", 4: "Aktif Menjembatani", 5: "Sangat Proaktif & Solutif" }
  },

  // IND_23: Kejelasan pembagian peran & tupoksi
  {
    id: "Q_IND_23_pemda",
    id_indikator: "IND_23",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana kejelasan regulasi terkait pembagian kewenangan antara Pemerintah Kota (DKPP) dan Pemerintah Provinsi Banten (UU 23/2014) di wilayah perairan?",
    skala_label: { 1: "Sangat Tumpang Tindih/Membingungkan", 2: "Kurang Jelas", 3: "Cukup Dipahami", 4: "Pembagian Wewenang Jelas", 5: "Sangat Gamblang, Jelas & Sinkron" }
  },
  {
    id: "Q_IND_23_pelaku_usaha",
    id_indikator: "IND_23",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Ketika nelayan mengurus surat kapal atau izin tangkap, apakah nelayan tidak dibuat bingung harus ke kantor mana (dinas kota atau provinsi)?",
    skala_label: { 1: "Sangat Bingung & Dipimpong", 2: "Masih Kerap Membingungkan", 3: "Cukup Jelas", 4: "Jelas & Tahu Tempatnya", 5: "Sangat Jelas, Mudah & Tidak Dipimpong" }
  },
  {
    id: "Q_IND_23_masyarakat_pesisir",
    id_indikator: "IND_23",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Apakah warga pesisir memahami secara jelas tugas kelurahan, dinas perikanan, dan aparat laut sehingga mudah saat butuh pertolongan?",
    skala_label: { 1: "Sangat Tidak Tahu/Bingung", 2: "Kurang Jelas", 3: "Cukup Mengerti", 4: "Mengerti dengan Jelas", 5: "Sangat Paham & Jelas Siapa Bertanggung Jawab" }
  },
  {
    id: "Q_IND_23_akademisi_lsm",
    id_indikator: "IND_23",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana kejelasan jurisdiksi dan eliminasi tumpang tindih kewenangan (institutional overlaps) dalam tata kelola ruang laut pesisir Cilegon?",
    skala_label: { 1: "Tumpang Tindih Kewenangan Akut", 2: "Banyak Grey Area Regulasi", 3: "Jurisdiksi Cukup Terbagi", 4: "Pembagian Tupoksi Jelas", 5: "Jurisdiksi Sangat Harmonious & Rapi" }
  },
  {
    id: "Q_IND_23_industri",
    id_indikator: "IND_23",
    id_stakeholder_group: "industri",
    teks: "Bagaimana kejelasan batas wewenang perizinan kelautan antara Pemda Cilegon, Pemprov Banten, dan Kementerian Perhubungan bagi operasional industri?",
    skala_label: { 1: "Sangat Membingungkan & Tumpang Tindih", 2: "Kurang Jelas", 3: "Cukup Terdefinisikan", 4: "Regulasi & Wewenang Jelas", 5: "Sangat Jelas, Rapi & Pasti" }
  },

  // =========================================================================
  // V6: TINGKAT DUKUNGAN STAKEHOLDER (5 Indikator)
  // =========================================================================
  // IND_24: Penerimaan kebijakan
  {
    id: "Q_IND_24_pemda",
    id_indikator: "IND_24",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana komitmen instansi Anda dalam mendukung dan merealisasikan regulasi daerah tentang perlindungan dan keberlanjutan perikanan tangkap di Cilegon?",
    skala_label: { 1: "Sangat Rendah / Tidak Mendukung", 2: "Rendah", 3: "Cukup Mendukung", 4: "Tinggi / Sangat Mendukung", 5: "Komitmen Penuh & Prioritas Utama" }
  },
  {
    id: "Q_IND_24_pelaku_usaha",
    id_indikator: "IND_24",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah Bapak/Ibu setuju dan menerima jika pemerintah membuat aturan pengelolaan laut demi kebaikan bersama dan rezeki nelayan ke depan?",
    skala_label: { 1: "Sangat Menolak Aturan", 2: "Kurang Setuju", 3: "Menerima Saja", 4: "Setuju & Mendukung", 5: "Sangat Setuju & Siap Mendukung Penuh" }
  },
  {
    id: "Q_IND_24_masyarakat_pesisir",
    id_indikator: "IND_24",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana dukungan warga pesisir terhadap aturan dan kebijakan pemerintah dalam menata lingkungan pantai dan pelabuhan perikanan Cilegon?",
    skala_label: { 1: "Banyak Menolak", 2: "Kurang Mendukung", 3: "Cukup Mendukung", 4: "Mendukung Positif", 5: "Sangat Mendukung Penuh" }
  },
  {
    id: "Q_IND_24_akademisi_lsm",
    id_indikator: "IND_24",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat akseptabilitas dan advokasi institusi Anda terhadap instrumen kebijakan pengelolaan perikanan berkelanjutan di Cilegon?",
    skala_label: { 1: "Menolak karena Cacat Substansi", 2: "Kurang Mendukung", 3: "Mendukung Bersyarat", 4: "Mendukung Kebijakan", 5: "Sangat Mendukung & Aktif Mengadvokasi" }
  },
  {
    id: "Q_IND_24_industri",
    id_indikator: "IND_24",
    id_stakeholder_group: "industri",
    teks: "Bagaimana komitmen manajemen korporasi dalam mendukung arah kebijakan pemda terkait pelestarian kawasan maritim dan perikanan tangkap pesisir?",
    skala_label: { 1: "Tidak Menjadi Perhatian Perusahaan", 2: "Dukungan Minimal", 3: "Cukup Mendukung", 4: "Mendukung Penuh", 5: "Sangat Berkomitmen dalam Kebijakan ESG" }
  },

  // IND_25: Persetujuan tujuan keberlanjutan
  {
    id: "Q_IND_25_pemda",
    id_indikator: "IND_25",
    id_stakeholder_group: "pemda",
    teks: "Seberapa kuat persetujuan Anda bahwa perikanan tangkap Kota Cilegon harus dikelola dengan prinsip keberlanjutan demi anak cucu?",
    skala_label: { 1: "Sangat Tidak Setuju", 2: "Kurang Setuju", 3: "Cukup Setuju", 4: "Setuju", 5: "Sangat Setuju Mutlak" }
  },
  {
    id: "Q_IND_25_pelaku_usaha",
    id_indikator: "IND_25",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah Bapak/Ibu setuju bahwa laut Cilegon harus dijaga agar ikannya tidak habis supaya anak cucu kita kelak masih bisa melaut dan makan ikan?",
    skala_label: { 1: "Tidak Pikir Anak Cucu/Yang Penting Hari Ini", 2: "Kurang Peduli", 3: "Cukup Setuju", 4: "Setuju Laut Harus Dijaga", 5: "Sangat Setuju Mutlak Laut Harus Dijaga Lestari" }
  },
  {
    id: "Q_IND_25_masyarakat_pesisir",
    id_indikator: "IND_25",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Apakah warga sepakat bahwa menjaga kelestarian laut pesisir Cilegon sangat penting agar sumber rezeki nelayan tidak punah?",
    skala_label: { 1: "Tidak Sepakat", 2: "Kurang Sepakat", 3: "Cukup Sepakat", 4: "Sepakat", 5: "Sangat Sepakat Mutlak" }
  },
  {
    id: "Q_IND_25_akademisi_lsm",
    id_indikator: "IND_25",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana keselarasan visi kelembagaan Anda terhadap target pencapaian SDG-14 (Life Below Water) di kawasan perairan Cilegon?",
    skala_label: { 1: "Sangat Tidak Selaras", 2: "Kurang Selaras", 3: "Cukup Selaras", 4: "Selaras Penuh", 5: "Sangat Kongruen & Menjadi Visi Inti" }
  },
  {
    id: "Q_IND_25_industri",
    id_indikator: "IND_25",
    id_stakeholder_group: "industri",
    teks: "Seberapa sejalan tujuan keberlanjutan perikanan pesisir Cilegon dengan pilar *Sustainability / CSR* yang dicanangkan oleh korporasi Anda?",
    skala_label: { 1: "Tidak Sejalan", 2: "Kurang Sejalan", 3: "Cukup Sejalan", 4: "Sejalan", 5: "Sangat Sejalan & Terintegrasi Rencana Strategis" }
  },

  // IND_26: Kesediaan mematuhi kebijakan
  {
    id: "Q_IND_26_pemda",
    id_indikator: "IND_26",
    id_stakeholder_group: "pemda",
    teks: "Sejauh mana aparatur instansi Anda mematuhi standar operasional prosedur dan etika pelayanan dalam tata kelola perikanan pesisir?",
    skala_label: { 1: "Kepatuhan Sangat Rendah", 2: "Kurang Patuh", 3: "Cukup Patuh SOP", 4: "Patuh & Disiplin", 5: "Sangat Disiplin & Menjadi Teladan" }
  },
  {
    id: "Q_IND_26_pelaku_usaha",
    id_indikator: "IND_26",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah Bapak/Ibu rela dan ikhlas mematuhi aturan tidak menangkap ikan kecil-kecil atau tidak melaut di tempat karang yang dilindungi?",
    skala_label: { 1: "Sama Sekali Tidak Rela/Tetap Melanggar", 2: "Berat Hati/Kerap Melanggar", 3: "Kadang Melanggar Jika Terpaksa", 4: "Rela Mematuhi", 5: "Sangat Ikhlas & Disiplin Mematuhi Aturan Laut" }
  },
  {
    id: "Q_IND_26_masyarakat_pesisir",
    id_indikator: "IND_26",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana kepatuhan warga sekitar pantai untuk tidak membuang sampah ke laut dan menaati batas sempadan pantai?",
    skala_label: { 1: "Sering Melanggar & Buang Sampah", 2: "Masih Banyak Melanggar", 3: "Cukup Taat", 4: "Taat Aturan Pantai", 5: "Sangat Tertib & Berbudaya Bersih" }
  },
  {
    id: "Q_IND_26_akademisi_lsm",
    id_indikator: "IND_26",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana komitmen moral institusi Anda untuk menegakkan etika riset ilmiah dan mengawal kepatuhan norma regulasi kelautan di Cilegon?",
    skala_label: { 1: "Sangat Rendah", 2: "Kurang Berkomitmen", 3: "Cukup Berkomitmen", 4: "Komitmen Tinggi", 5: "Sangat Berintegritas & Konsisten Mengawal" }
  },
  {
    id: "Q_IND_26_industri",
    id_indikator: "IND_26",
    id_stakeholder_group: "industri",
    teks: "Bagaimana tingkat kepatuhan perusahaan Anda terhadap izin pembuangan limbah cair (IPLC), izin zonasi terminal khusus, dan baku mutu perairan?",
    skala_label: { 1: "Sering Terjadi Deviasi/Teguran", 2: "Kadang Terkendala", 3: "Memenuhi Standar Wajib", 4: "Patuh Sesuai Regulasi", 5: "100% Compliant & Proper Hijau/Emas" }
  },

  // IND_27: Kesediaan mendukung implementasi
  {
    id: "Q_IND_27_pemda",
    id_indikator: "IND_27",
    id_stakeholder_group: "pemda",
    teks: "Seberapa besar kesiapan instansi Anda mengalokasikan anggaran, program aksi, dan pendampingan lapangan bagi kelestarian perikanan tangkap?",
    skala_label: { 1: "Nol Alokasi / Tidak Siap", 2: "Alokasi Sangat Minim", 3: "Cukup Siap", 4: "Siap & Mengalokasikan", 5: "Sangat Siap Mendukung Penuh Segala Sumber Daya" }
  },
  {
    id: "Q_IND_27_pelaku_usaha",
    id_indikator: "IND_27",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah Bapak/Ibu bersedia ikut serta membantu jika ada program penanaman mangrove, pemasangan rumpon bersama, atau bersih pantai?",
    skala_label: { 1: "Tidak Mau Ikut", 2: "Enggan Ikut", 3: "Ikut Jika Diberi Uang Lelah", 4: "Mau Ikut Serta", 5: "Sangat Bersedia & Semangat Membantu" }
  },
  {
    id: "Q_IND_27_masyarakat_pesisir",
    id_indikator: "IND_27",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Apakah warga bersedia menyumbangkan tenaga dan waktu untuk menyukseskan program kebersihan dan kelestarian pantai kampung pesisir?",
    skala_label: { 1: "Tidak Bersedia", 2: "Kurang Berminat", 3: "Bersedia Seadanya", 4: "Bersedia Ikut Serta", 5: "Sangat Siap & Antusias Menyokong" }
  },
  {
    id: "Q_IND_27_akademisi_lsm",
    id_indikator: "IND_27",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa siap perguruan tinggi / LSM Anda menyediakan narasumber pakar, pengabdian masyarakat, atau pendampingan program di pesisir Cilegon?",
    skala_label: { 1: "Tidak Memiliki Rencana", 2: "Kapasitas Minim", 3: "Cukup Siap Terbatas", 4: "Siap Menyediakan Program", 5: "Sangat Siap Berdedikasi Penuh" }
  },
  {
    id: "Q_IND_27_industri",
    id_indikator: "IND_27",
    id_stakeholder_group: "industri",
    teks: "Seberapa besar kesiapan korporasi mengalokasikan dana CSR / program kemitraan untuk konservasi laut dan pemberdayaan nelayan Cilegon?",
    skala_label: { 1: "Tidak Ada Alokasi CSR Laut", 2: "Alokasi Sangat Kecil", 3: "Cukup Mengalokasikan", 4: "Siap Mengalokasikan Rutin", 5: "Alokasi Khusus Signifikan & Prioritas" }
  },

  // IND_28: Kesiapan berkolaborasi
  {
    id: "Q_IND_28_pemda",
    id_indikator: "IND_28",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana keterbukaan instansi Anda untuk membentuk forum kemitraan kolaboratif (Pentahelix) pengelola pesisir bersama industri, kampus, dan nelayan?",
    skala_label: { 1: "Sangat Tertutup / Enggan", 2: "Kurang Siap", 3: "Cukup Terbuka", 4: "Siap Membentuk Kemitraan", 5: "Sangat Proaktif Menginisiasi Kolaborasi Pentahelix" }
  },
  {
    id: "Q_IND_28_pelaku_usaha",
    id_indikator: "IND_28",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah nelayan siap duduk bersama satu meja dengan pihak pabrik industri, dinas, dan pakar untuk mencari solusi masalah laut Cilegon?",
    skala_label: { 1: "Tidak Mau Duduk Bersama", 2: "Kurang Percaya", 3: "Bersedia Jika Diundang", 4: "Siap Duduk Bersama", 5: "Sangat Siap & Terbuka Bekerja Sama" }
  },
  {
    id: "Q_IND_28_masyarakat_pesisir",
    id_indikator: "IND_28",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana kesiapan tokoh masyarakat pesisir untuk bekerja sama dengan pihak luar demi kemajuan ekonomi pantai Cilegon?",
    skala_label: { 1: "Menutup Diri", 2: "Kurang Percaya", 3: "Cukup Terbuka", 4: "Siap Bekerja Sama", 5: "Sangat Terbuka & Siap Berkolaborasi Erat" }
  },
  {
    id: "Q_IND_28_akademisi_lsm",
    id_indikator: "IND_28",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana kesiapan institusi Anda untuk menjadi fasilitator independen dan mitra riset aksi dalam forum multipihak di Kota Cilegon?",
    skala_label: { 1: "Tidak Bersedia", 2: "Kurang Siap", 3: "Cukup Bersedia", 4: "Siap Menjadi Fasilitator", 5: "Sangat Siap Memimpin Sinergi Kolaboratif" }
  },
  {
    id: "Q_IND_28_industri",
    id_indikator: "IND_28",
    id_stakeholder_group: "industri",
    teks: "Seberapa siap korporasi bergabung dalam forum komunikasi berkala bersama kelompok nelayan, akademisi, dan pemda di kawasan pesisir Cilegon?",
    skala_label: { 1: "Tidak Bersedia Bergabung", 2: "Cenderung Pasif", 3: "Bersedia Bergabung", 4: "Siap Terlibat Aktif", 5: "Sangat Siap Menjadi Penggerak Kolaborasi" }
  },

  // =========================================================================
  // V7: INTENSITAS PARTISIPASI (5 Indikator)
  // =========================================================================
  // IND_29: Frekuensi rapat / musyawarah
  {
    id: "Q_IND_29_pemda",
    id_indikator: "IND_29",
    id_stakeholder_group: "pemda",
    teks: "Seberapa sering Anda menghadiri atau menyelenggarakan rapat koordinasi berkala terkait pengelolaan sektor kelautan dan perikanan tangkap?",
    skala_label: { 1: "Tidak Pernah (0x/tahun)", 2: "Jarang (1-2x/tahun)", 3: "Cukup Sering (3-5x/tahun)", 4: "Sering (Tiap 2 Bulan)", 5: "Sangat Rutin (Tiap Bulan/Lebih)" }
  },
  {
    id: "Q_IND_29_pelaku_usaha",
    id_indikator: "IND_29",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa sering Bapak/Ibu ikut kumpul rapat, musyawarah pangkalan, atau pertemuan kelompok nelayan di kampung?",
    skala_label: { 1: "Tidak Pernah Ikut", 2: "Sangat Jarang", 3: "Kadang-kadang Ikut", 4: "Sering Hadir", 5: "Selalu Hadir Tiap Ada Pertemuan" }
  },
  {
    id: "Q_IND_29_masyarakat_pesisir",
    id_indikator: "IND_29",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa sering Anda hadir dalam musyawarah warga kelurahan atau rembuk warga terkait isu-isu pesisir dan pantai?",
    skala_label: { 1: "Tidak Pernah Hadir", 2: "Jarang Sekali", 3: "Kadang-kadang Hadir", 4: "Sering Hadir", 5: "Selalu Aktif Hadir Setiap Musyawarah" }
  },
  {
    id: "Q_IND_29_akademisi_lsm",
    id_indikator: "IND_29",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa sering Anda atau tim menghadiri forum ilmiah, seminar, atau rapat koordinasi teknis mengenai perairan Selat Sunda/Cilegon?",
    skala_label: { 1: "Tidak Pernah Terlibat", 2: "Jarang (1x setahun)", 3: "Cukup Rutin (2-3x setahun)", 4: "Rutin Berpartisipasi", 5: "Sangat Aktif & Menjadi Rujukan Utama" }
  },
  {
    id: "Q_IND_29_industri",
    id_indikator: "IND_29",
    id_stakeholder_group: "industri",
    teks: "Seberapa intens perwakilan perusahaan menghadiri pertemuan koordinasi pemangku kepentingan maritim yang difasilitasi pemda/otoritas pelabuhan?",
    skala_label: { 1: "Tidak Pernah Mengutus", 2: "Jarang Hadir", 3: "Cukup Teratur Hadir", 4: "Rutin Hadir", 5: "Selalu Hadir Terdepan Mengawal Agenda" }
  },

  // IND_30: Keterlibatan konsultasi publik
  {
    id: "Q_IND_30_pemda",
    id_indikator: "IND_30",
    id_stakeholder_group: "pemda",
    teks: "Sejauh mana Anda terlibat aktif dalam penyelenggaraan konsultasi publik perumusan rancangan Perda, RTRW pesisir, atau zonasi laut Cilegon?",
    skala_label: { 1: "Tidak Pernah Terlibat", 2: "Sekadar Hadir Absen", 3: "Cukup Berpartisipasi", 4: "Aktif Memberi Masukan", 5: "Sangat Aktif Memimpin Konsultasi Publik" }
  },
  {
    id: "Q_IND_30_pelaku_usaha",
    id_indikator: "IND_30",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Pernahkah Bapak/Ibu diundang resmi oleh dinas/kelurahan untuk dimintai pendapat tentang rencana pembuatan aturan laut baru di Cilegon?",
    skala_label: { 1: "Tidak Pernah Sama Sekali", 2: "Pernah 1 Kali Tapi Tak Ada Suara", 3: "Kadang Diundang", 4: "Pernah Diundang & Dimintai Pendapat", 5: "Sering Diundang & Aktif Mengusulkan" }
  },
  {
    id: "Q_IND_30_masyarakat_pesisir",
    id_indikator: "IND_30",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa sering perwakilan warga diajak dalam acara konsultasi publik oleh pemerintah terkait AMDAL pabrik atau proyek pantai?",
    skala_label: { 1: "Tidak Pernah Diajak", 2: "Sangat Jarang", 3: "Pernah Sesekali", 4: "Cukup Sering Diajak", 5: "Selalu Diajak & Suara Warga Didengar" }
  },
  {
    id: "Q_IND_30_akademisi_lsm",
    id_indikator: "IND_30",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa sering institusi Anda diundang sebagai tim ahli / penanggap kritis dalam konsultasi publik dokumen tata ruang pesisir Cilegon?",
    skala_label: { 1: "Tidak Pernah Diundang", 2: "Jarang Diundang", 3: "Cukup Sering Memberi Catatan", 4: "Rutin Sebagai Narasumber Ahli", 5: "Selalu Menjadi Lead Expert/Penelaah Kunci" }
  },
  {
    id: "Q_IND_30_industri",
    id_indikator: "IND_30",
    id_stakeholder_group: "industri",
    teks: "Seberapa aktif perwakilan korporasi memberikan telaah teknis dalam agenda konsultasi publik regulasi lingkungan pesisir di Kota Cilegon?",
    skala_label: { 1: "Tidak Pernah Berpartisipasi", 2: "Hadir Pasif", 3: "Cukup Memberikan Pandangan", 4: "Aktif Berpendapat", 5: "Sangat Proaktif Menyusun Rekomendasi Bersama" }
  },

  // IND_31: Keaktifan menyampaikan aspirasi
  {
    id: "Q_IND_31_pemda",
    id_indikator: "IND_31",
    id_stakeholder_group: "pemda",
    teks: "Seberapa aktif Anda menyampaikan telaah telaah staf, nota dinas, atau usulan terobosan program perikanan kepada pimpinan daerah?",
    skala_label: { 1: "Sangat Pasif / Hanya Menunggu Perintah", 2: "Jarang Mengusulkan", 3: "Cukup Rutin Mengusulkan", 4: "Aktif Memberi Inovasi", 5: "Sangat Proaktif & Konsisten Mengawal Usulan" }
  },
  {
    id: "Q_IND_31_pelaku_usaha",
    id_indikator: "IND_31",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Jika ada masalah (solar langka, harga ikan anjlok, perahu rusak), seberapa berani dan sering Bapak/Ibu melapor dan mengadu ke dinas/DPRD?",
    skala_label: { 1: "Diam Saja/Takut Melapor", 2: "Pasrah Hanya Mengeluh Sesama Nelayan", 3: "Kadang Melapor Lewat Pengurus", 4: "Berani & Aktif Bersuara", 5: "Sangat Aktif, Kritis & Berjuang Menyampaikan Aspirasi" }
  },
  {
    id: "Q_IND_31_masyarakat_pesisir",
    id_indikator: "IND_31",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa aktif warga pesisir menyampaikan keluhan atau usulan pembangunan kepada lurah, camat, atau anggota dewan?",
    skala_label: { 1: "Pasif/Tidak Pernah Menyampaikan", 2: "Jarang Bersuara", 3: "Kadang Mengusulkan", 4: "Aktif Menyampaikan Usulan", 5: "Sangat Vokal & Gigih Memperjuangkan Kampung" }
  },
  {
    id: "Q_IND_31_akademisi_lsm",
    id_indikator: "IND_31",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa intensif Anda menerbitkan policy brief, artikel opini, atau rilis advokasi publik menyuarakan isu kelautan Cilegon?",
    skala_label: { 1: "Tidak Pernah Menerbitkan", 2: "Jarang (Hanya Internal Kampus)", 3: "Cukup Rutin Publikasi", 4: "Rutin Menulis Policy Brief", 5: "Sangat Vokal, Masif & Menjadi Rujukan Media" }
  },
  {
    id: "Q_IND_31_industri",
    id_indikator: "IND_31",
    id_stakeholder_group: "industri",
    teks: "Seberapa aktif pihak industri menyampaikan masukan atau surat resmi asosiasi usaha kepada pemerintah terkait hambatan operasional maritim?",
    skala_label: { 1: "Sangat Pasif", 2: "Jarang Menyampaikan", 3: "Cukup Komunikatif", 4: "Aktif Menyampaikan Masukan", 5: "Sangat Proaktif Berdialog Tingkat Tinggi" }
  },

  // IND_32: Keterlibatan perumusan kebijakan
  {
    id: "Q_IND_32_pemda",
    id_indikator: "IND_32",
    id_stakeholder_group: "pemda",
    teks: "Sejauh mana Anda terlibat langsung dalam tim teknis penyusunan draf naskah akademis, rancangan renstra dinas, atau roadmap perikanan Cilegon?",
    skala_label: { 1: "Tidak Pernah Terlibat", 2: "Hanya Administratif Ringan", 3: "Cukup Terlibat Tim Pokja", 4: "Penyusun Utama Draf", 5: "Memimpin Langsung Perumusan Kebijakan" }
  },
  {
    id: "Q_IND_32_pelaku_usaha",
    id_indikator: "IND_32",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah aturan adat laut atau usulan dari nelayan asli pernah dimasukkan menjadi aturan resmi dinas di Cilegon?",
    skala_label: { 1: "Sama Sekali Tidak Pernah", 2: "Hampir Tidak Pernah", 3: "Pernah Ada Sedikit", 4: "Cukup Sering Diadopsi", 5: "Selalu Dijadikan Dasar Aturan Resmi" }
  },
  {
    id: "Q_IND_32_masyarakat_pesisir",
    id_indikator: "IND_32",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Apakah gagasan warga dalam musrenbang kelurahan pesisir benar-benar lolos dan direalisasikan dalam anggaran pembangunan daerah?",
    skala_label: { 1: "Tidak Pernah Lolos / Cuma Formalitas", 2: "Jarang Sekali Tembus", 3: "Sebagian Kecil Tembus", 4: "Banyak Usulan Diterima", 5: "Hampir Semua Aspirasi Direalisasikan Nyata" }
  },
  {
    id: "Q_IND_32_akademisi_lsm",
    id_indikator: "IND_32",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Sejauh mana Anda terlibat sebagai tim pakar penyusun naskah akademik atau tim ad-hoc perumusan regulasi pengelolaan perikanan Cilegon?",
    skala_label: { 1: "Tidak Terlibat Sama Sekali", 2: "Hanya Review Ringan", 3: "Terlibat Anggota Tim Pokja", 4: "Drafter Utama Kebijakan", 5: "Lead Author & Inisiator Regulasi Kunci" }
  },
  {
    id: "Q_IND_32_industri",
    id_indikator: "IND_32",
    id_stakeholder_group: "industri",
    teks: "Seberapa sering usulan mitigasi atau draft standar operasional pelabuhan industri diadopsi ke dalam regulasi maritim daerah?",
    skala_label: { 1: "Tidak Pernah Diadopsi", 2: "Jarang Diadopsi", 3: "Cukup Diakomodasi", 4: "Sering Diadopsi", 5: "Selalu Menjadi Rujukan Baku Regulasi" }
  },

  // IND_33: Keterlibatan pengawasan & evaluasi
  {
    id: "Q_IND_33_pemda",
    id_indikator: "IND_33",
    id_stakeholder_group: "pemda",
    teks: "Seberapa rutin Anda melaksanakan kegiatan monitoring lapangan, inspeksi perairan, dan evaluasi capaian indikator kinerja perikanan tangkap?",
    skala_label: { 1: "Tidak Pernah Terjun Evaluasi", 2: "Jarang (1x setahun)", 3: "Cukup Rutin (Per Semester)", 4: "Rutin (Tiap Triwulan)", 5: "Sangat Intensif & Real-time Monitoring" }
  },
  {
    id: "Q_IND_33_pelaku_usaha",
    id_indikator: "IND_33",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah para nelayan ikut menjaga laut dan segera melapor kepada pihak berwenang jika melihat kapal nakal yang merusak karang atau membuang limbah?",
    skala_label: { 1: "Tidak Pernah Ikut Jaga/Masa Bodoh", 2: "Kurang Peduli", 3: "Kadang Melapor Jika Parah", 4: "Aktif Mengawasi & Melapor", 5: "Sangat Berani, Kompak Menjaga & Mengawal Laut" }
  },
  {
    id: "Q_IND_33_masyarakat_pesisir",
    id_indikator: "IND_33",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana keaktifan warga pesisir dalam mengawasi proyek pantai atau memantau kebersihan pantai di lingkungan sekitar?",
    skala_label: { 1: "Tidak Pernah Mengawasi", 2: "Jarang Mengawasi", 3: "Cukup Memperhatikan", 4: "Aktif Mengawasi", 5: "Sangat Ketat & Sigap Menegur Pelanggar" }
  },
  {
    id: "Q_IND_33_akademisi_lsm",
    id_indikator: "IND_33",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa intensif Anda melakukan riset evaluasi independen (policy evaluation) dan citizen science monitoring pada perairan Cilegon?",
    skala_label: { 1: "Tidak Pernah Melakukan Monitoring", 2: "Jarang Evaluasi", 3: "Cukup Melakukan Riset Evaluasi", 4: "Rutin Monitoring Berkala", 5: "Sangat Intensif, Kredibel & Komprehensif" }
  },
  {
    id: "Q_IND_33_industri",
    id_indikator: "IND_33",
    id_stakeholder_group: "industri",
    teks: "Seberapa ketat pengawasan internal dan audit berkala yang dilakukan perusahaan untuk memastikan tidak ada pencemaran ke laut Cilegon?",
    skala_label: { 1: "Audit Sangat Jarang", 2: "Hanya Formalitas", 3: "Audit Sesuai Jadwal", 4: "Monitoring Rutin & Ketat", 5: "Continuous Monitoring Sensor 24/7 & Zero Tolerance" }
  },

  // =========================================================================
  // V8: KEPENTINGAN (INTEREST) STAKEHOLDER (4 Indikator)
  // =========================================================================
  // IND_34: Ketergantungan ekonomi langsung
  {
    id: "Q_IND_34_pemda",
    id_indikator: "IND_34",
    id_stakeholder_group: "pemda",
    teks: "Seberapa besar ketergantungan pencapaian target kinerja institusi Anda terhadap stabilitas produksi dan kelestarian perikanan tangkap di Cilegon?",
    skala_label: { 1: "Sangat Tidak Bergantung", 2: "Tingkat Ketergantungan Rendah", 3: "Cukup Menjadi Indikator", 4: "Sangat Bergantung pada Kinerja Ini", 5: "Indikator Kinerja Utama Mutlak" }
  },
  {
    id: "Q_IND_34_pelaku_usaha",
    id_indikator: "IND_34",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa besar ketergantungan hidup dan makan sehari-hari keluarga Bapak/Ibu hanya dari hasil melaut mencari ikan di laut Cilegon?",
    skala_label: { 1: "Punya Usaha Lain Lebih Besar", 2: "Ada Kerja Sampingan", 3: "Separuh Hidup dari Laut", 4: "Hampir Seluruhnya dari Laut", 5: "100% Menggantungkan Hidup dari Laut (Satu-satunya Sumber Rezeki)" }
  },
  {
    id: "Q_IND_34_masyarakat_pesisir",
    id_indikator: "IND_34",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa besar roda perputaran ekonomi warung, kontrakan, dan pasar di kampung pesisir bergantung pada hasil tangkapan nelayan?",
    skala_label: { 1: "Sama Sekali Tidak Bergantung", 2: "Pengaruh Sangat Kecil", 3: "Cukup Berpengaruh", 4: "Sangat Bergantung", 5: "Sangat Vital Menjadi Urat Nadi Ekonomi Warga" }
  },
  {
    id: "Q_IND_34_akademisi_lsm",
    id_indikator: "IND_34",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa tinggi ketergantungan agenda riset, publikasi, atau mandat organisasi Anda terhadap dinamika perikanan laut pesisir Cilegon?",
    skala_label: { 1: "Bukan Fokus Riset", 2: "Fokus Sampingan Rendah", 3: "Cukup Relevan", 4: "Menjadi Lokus Riset Utama", 5: "Mandat Inti Riset Strategis Jangka Panjang" }
  },
  {
    id: "Q_IND_34_industri",
    id_indikator: "IND_34",
    id_stakeholder_group: "industri",
    teks: "Seberapa krusial kelancaran pemanfaatan alur laut dan kondisi perairan pesisir bagi kelangsungan operasional pabrik/dermaga korporasi Anda?",
    skala_label: { 1: "Tidak Berpengaruh Langsung", 2: "Pengaruh Kecil", 3: "Cukup Krusial", 4: "Sangat Krusial bagi Operasional", 5: "Urat Nadi Logistik & Bisnis Perusahaan" }
  },

  // IND_35: Kepentingan sosial-budaya
  {
    id: "Q_IND_35_pemda",
    id_indikator: "IND_35",
    id_stakeholder_group: "pemda",
    teks: "Seberapa penting pelestarian kearifan lokal maritim dan tradisi pesisir Cilegon sebagai identitas budaya daerah dalam perspektif Pemkot?",
    skala_label: { 1: "Tidak Terlalu Penting", 2: "Kurang Menjadi Prioritas", 3: "Cukup Penting Dijaga", 4: "Sangat Penting Sebagai Warisan", 5: "Prioritas Warisan Budaya Daerah Utama" }
  },
  {
    id: "Q_IND_35_pelaku_usaha",
    id_indikator: "IND_35",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa berharga profesi nelayan dan tradisi adat laut bagi Bapak/Ibu sebagai kehormatan dan warisan leluhur orang pesisir Cilegon?",
    skala_label: { 1: "Biasa Saja/Mau Pindah Profesi Lain", 2: "Kurang Bernilai", 3: "Cukup Menghargai Adat", 4: "Sangat Bangga Menjadi Nelayan", 5: "Kehormatan Jiwa Raga & Warisan Leluhur Mutlak" }
  },
  {
    id: "Q_IND_35_masyarakat_pesisir",
    id_indikator: "IND_35",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa penting menjaga tradisi kampung nelayan dan kebersamaan warga pantai Cilegon agar tidak hilang digerus zaman?",
    skala_label: { 1: "Tidak Penting", 2: "Kurang Penting", 3: "Cukup Penting", 4: "Sangat Penting", 5: "Harga Mati Identitas Kampung Pesisir" }
  },
  {
    id: "Q_IND_35_akademisi_lsm",
    id_indikator: "IND_35",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa penting konservasi kearifan lokal (local ecological knowledge) masyarakat perikanan Cilegon dalam khazanah keilmuan?",
    skala_label: { 1: "Tidak Relevan", 2: "Kurang Signifikan", 3: "Cukup Penting", 4: "Sangat Signifikan Dipelajari", 5: "Khazanah Vital Warisan Maritim Nusantara" }
  },
  {
    id: "Q_IND_35_industri",
    id_indikator: "IND_35",
    id_stakeholder_group: "industri",
    teks: "Seberapa penting bagi korporasi untuk menjaga citra sosial, harmoni budaya, dan penerimaan masyarakat lokal di pesisir Cilegon (*Social License to Operate*)?",
    skala_label: { 1: "Bukan Kepentingan Utama", 2: "Penting Sederhana", 3: "Cukup Penting", 4: "Sangat Penting bagi Reputasi", 5: "Social License to Operate Mutlak bagi Perusahaan" }
  },

  // IND_36: Tingkat keterdampakan oleh kebijakan
  {
    id: "Q_IND_36_pemda",
    id_indikator: "IND_36",
    id_stakeholder_group: "pemda",
    teks: "Seberapa besar dampak perubahan kebijakan perikanan provinsi/pusat terhadap beban kerja dan strategi dinas di Cilegon?",
    skala_label: { 1: "Tidak Berdampak Sama Sekali", 2: "Dampak Ringan", 3: "Dampak Moderat", 4: "Berdampak Besar pada Tupoksi", 5: "Sangat Mengubah Total Pola Kerja Dinas" }
  },
  {
    id: "Q_IND_36_pelaku_usaha",
    id_indikator: "IND_36",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Jika ada aturan baru (misal harga BBM naik atau jalur melaut dialihkan), seberapa besar hal itu langsung memukul rezeki melaut Bapak/Ibu?",
    skala_label: { 1: "Sama Sekali Tidak Terasa", 2: "Pengaruh Kecil Saja", 3: "Cukup Terasa Dampaknya", 4: "Sangat Terpukul & Berdampak Berat", 5: "Sangat Hancur / Langsung Mengancam Kelangsungan Dapur" }
  },
  {
    id: "Q_IND_36_masyarakat_pesisir",
    id_indikator: "IND_36",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa besar dampak keputusan pemerintah atau pembangunan pabrik di pesisir terhadap ketenteraman hidup keluarga warga sekitar?",
    skala_label: { 1: "Tidak Berdampak", 2: "Dampak Kecil", 3: "Cukup Berdampak", 4: "Berdampak Nyata", 5: "Sangat Berdampak Langsung pada Nasib Warga" }
  },
  {
    id: "Q_IND_36_akademisi_lsm",
    id_indikator: "IND_36",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa besar kebijakan pengelolaan laut Cilegon mempengaruhi keberhasilan program advokasi dan akreditasi penelitian institusi Anda?",
    skala_label: { 1: "Tidak Terdampak", 2: "Terdampak Minim", 3: "Cukup Terdampak", 4: "Berdampak Signifikan", 5: "Sangat Strategis Menentukan Dampak Luaran Riset" }
  },
  {
    id: "Q_IND_36_industri",
    id_indikator: "IND_36",
    id_stakeholder_group: "industri",
    teks: "Seberapa besar pengaruh perubahan regulasi tata ruang laut dan lingkungan terhadap struktur biaya operasional dan kepatuhan korporasi?",
    skala_label: { 1: "Tidak Berpengaruh", 2: "Pengaruh Minor", 3: "Pengaruh Sedang", 4: "Berpengaruh Signifikan", 5: "Sangat Berdampak Kritis pada Kelangsungan Investasi" }
  },

  // IND_37: Perhatian terhadap perubahan kebijakan
  {
    id: "Q_IND_37_pemda",
    id_indikator: "IND_37",
    id_stakeholder_group: "pemda",
    teks: "Seberapa tinggi antusiasme instansi Anda dalam memantau dan mengkaji setiap terbitnya regulasi baru terkait kelautan dan perikanan?",
    skala_label: { 1: "Sangat Pasif / Tidak Memperhatikan", 2: "Kurang Mengikuti", 3: "Cukup Mengikuti", 4: "Aktif Mempelajari Regulasi Baru", 5: "Sangat Intensif & Menjadi Fokus Utama Telaah" }
  },
  {
    id: "Q_IND_37_pelaku_usaha",
    id_indikator: "IND_37",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa sering Bapak/Ibu mencari tahu kabar terbaru soal aturan melaut, bantuan pemerintah, atau harga solar laut?",
    skala_label: { 1: "Masa Bodoh / Tidak Pernah Mau Tahu", 2: "Jarang Mencari Tahu", 3: "Kadang Bertanya ke Kawan", 4: "Rajin Mencari Kabar Baru", 5: "Sangat Selalu Pasang Telinga & Memperhatikan" }
  },
  {
    id: "Q_IND_37_masyarakat_pesisir",
    id_indikator: "IND_37",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa besar rasa ingin tahu dan perhatian warga kampung terhadap berita rencana pembangunan baru di pesisir Cilegon?",
    skala_label: { 1: "Tidak Peduli", 2: "Kurang Memperhatikan", 3: "Cukup Mengamati", 4: "Sangat Peduli & Mengikuti", 5: "Sangat Antusias Menyimak Setiap Perkembangan" }
  },
  {
    id: "Q_IND_37_akademisi_lsm",
    id_indikator: "IND_37",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa intensif Anda memonitor tren kebijakan nasional (misal Penangkapan Ikan Terukur - PIT) dan dampaknya di perairan lokal Cilegon?",
    skala_label: { 1: "Tidak Memonitor", 2: "Memonitor Sekilas", 3: "Cukup Mengikuti Isu", 4: "Memonitor Rutin & Kritis", 5: "Sangat Intensif Menjadi Sentra Analisis Kebijakan" }
  },
  {
    id: "Q_IND_37_industri",
    id_indikator: "IND_37",
    id_stakeholder_group: "industri",
    teks: "Seberapa proaktif tim legal/HSE korporasi melakukan regulatory compliance tracking terkait regulasi maritim dan pesisir daerah?",
    skala_label: { 1: "Reaktif Pasif", 2: "Kadang-kadang Cek Regulasi", 3: "Cukup Rutin Tracking", 4: "Rutin & Proaktif", 5: "Sangat Proaktif dengan Sistem Pemantauan Khusus" }
  },

  // =========================================================================
  // V9: PENGARUH (INFLUENCE) STAKEHOLDER (5 Indikator)
  // =========================================================================
  // IND_38: Kewenangan formal & regulasi
  {
    id: "Q_IND_38_pemda",
    id_indikator: "IND_38",
    id_stakeholder_group: "pemda",
    teks: "Seberapa kuat mandat hukum dan kewenangan legal yang dimiliki instansi Anda dalam mengatur, mengendalikan, dan menerbitkan izin sektor perikanan pesisir Cilegon?",
    skala_label: { 1: "Sangat Lemah / Nol Kewenangan", 2: "Kewenangan Terbatas", 3: "Cukup Memiliki Otoritas", 4: "Otoritas Regulasi Kuat", 5: "Otoritas Hukum & Regulasi Tertinggi di Daerah" }
  },
  {
    id: "Q_IND_38_pelaku_usaha",
    id_indikator: "IND_38",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa kuat aturan adat melaut dan kesepakatan pangkalan nelayan dipatuhi oleh seluruh kawan nelayan di laut Cilegon?",
    skala_label: { 1: "Tidak Dihargai/Diabaikan", 2: "Kurang Ditaati", 3: "Cukup Ditaati", 4: "Ditaati Kuat", 5: "Sangat Dihormati & Menjadi Hukum Laut Mengikat" }
  },
  {
    id: "Q_IND_38_masyarakat_pesisir",
    id_indikator: "IND_38",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa besar pengaruh wibawa tokoh sesepuh pesisir dan lurah dalam mengatur ketertiban lingkungan kampung nelayan?",
    skala_label: { 1: "Tidak Berpengaruh", 2: "Pengaruh Lemah", 3: "Cukup Dihargai", 4: "Sangat Dihormati & Didengar", 5: "Sangat Berwibawa & Menjadi Panutan Utama" }
  },
  {
    id: "Q_IND_38_akademisi_lsm",
    id_indikator: "IND_38",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa kuat legitimasi keilmuan dan dasar hukum independensi institusi Anda dalam memberikan telaah kritis kebijakan publik di Cilegon?",
    skala_label: { 1: "Sangat Lemah", 2: "Kurang Memiliki Kekuatan", 3: "Cukup Kredibel", 4: "Legitimasi Kuat Diakui", 5: "Sangat Otoritatif Berbasis Integritas Ilmiah" }
  },
  {
    id: "Q_IND_38_industri",
    id_indikator: "IND_38",
    id_stakeholder_group: "industri",
    teks: "Seberapa kuat legalitas hak pengelolaan lahan/perairan pelabuhan yang dipegang perusahaan dalam mengatur zona operasional industri?",
    skala_label: { 1: "Sangat Lemah / Belum Jelas", 2: "Legalitas Terbatas", 3: "Cukup Berkepastian Hukum", 4: "Hak Legal Kuat", 5: "Hak Konsesi/Legal Sangat Kuat & Mengikat Mutlak" }
  },

  // IND_39: Akses pengambilan keputusan
  {
    id: "Q_IND_39_pemda",
    id_indikator: "IND_39",
    id_stakeholder_group: "pemda",
    teks: "Seberapa mudah Anda berkoordinasi dan mengakses pengambil keputusan puncak (Walikota/Sekda/DPRD) untuk meloloskan kebijakan perikanan?",
    skala_label: { 1: "Sangat Sulit / Terhalang Birokrasi", 2: "Akses Terbatas", 3: "Cukup Lancar", 4: "Akses Sangat Mudah", 5: "Jalur Komunikasi Langsung & Prioritas Tinggi" }
  },
  {
    id: "Q_IND_39_pelaku_usaha",
    id_indikator: "IND_39",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah pengurus kelompok nelayan mudah menemui Kepala Dinas atau Walikota jika ingin menyampaikan masalah genting di laut?",
    skala_label: { 1: "Sangat Mustahil Ditemui/Ditolak", 2: "Sangat Susah Menghadap", 3: "Bisa Bertemu Jika Lewat Jalur Resmi", 4: "Mudah Diterima & Didengar", 5: "Sangat Mudah Menemui Pejabat Kapan Saja" }
  },
  {
    id: "Q_IND_39_masyarakat_pesisir",
    id_indikator: "IND_39",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa mudah tokoh warga pesisir menghubungi pejabat dinas atau lurah saat terjadi keadaan darurat di pemukiman pantai?",
    skala_label: { 1: "Sangat Susah Dihubungi", 2: "Jarang Merespons", 3: "Cukup Mudah Dihubungi", 4: "Cepat Merespons", 5: "Sangat Mudah & Langsung Turun Tangan" }
  },
  {
    id: "Q_IND_39_akademisi_lsm",
    id_indikator: "IND_39",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa terbuka akses institusi Anda dalam forum formal steering committee maupun jalur informal pengambil kebijakan Pemkot Cilegon?",
    skala_label: { 1: "Akses Tertutup Rapat", 2: "Akses Marginal", 3: "Cukup Memiliki Akses", 4: "Akses Langsung ke Pengambil Kebijakan", 5: "Menjadi Penasihat Khusus Pengambil Kebijakan" }
  },
  {
    id: "Q_IND_39_industri",
    id_indikator: "IND_39",
    id_stakeholder_group: "industri",
    teks: "Seberapa lancar akses jalur komunikasi tingkat pimpinan korporasi dengan Walikota, Kementerian, dan Forkopimda Cilegon?",
    skala_label: { 1: "Akses Terbatas", 2: "Birokrasi Lambat", 3: "Cukup Lancar", 4: "Akses Sangat Baik", 5: "Jalur Komunikasi Strategis Sangat Terbuka Cepat" }
  },

  // IND_40: Akses informasi & keahlian teknis
  {
    id: "Q_IND_40_pemda",
    id_indikator: "IND_40",
    id_stakeholder_group: "pemda",
    teks: "Seberapa lengkap penguasaan basis data statistik, sistem informasi geospasial kelautan (GIS), dan keahlian teknis staf perikanan dinas?",
    skala_label: { 1: "Sangat Minim Data & Ketinggalan", 2: "Data Kurang Lengkap", 3: "Cukup Memadai", 4: "Sistem Data Baik & Akurat", 5: "Sistem Informasi Geospasial Modern & Terintegrasi" }
  },
  {
    id: "Q_IND_40_pelaku_usaha",
    id_indikator: "IND_40",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa paham para nelayan tentang ilmu membaca tanda alam laut, GPS, alat pendeteksi ikan (fish finder), dan perkiraan cuaca BMKG?",
    skala_label: { 1: "Cuma Mengira-ngira Buta", 2: "Kurang Mengerti Alat Modern", 3: "Paham Tanda Alam Cukup", 4: "Paham Tanda Alam & Pakai GPS/HP", 5: "Sangat Mahir Membaca Laut & Alat Canggih" }
  },
  {
    id: "Q_IND_40_masyarakat_pesisir",
    id_indikator: "IND_40",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa cepat warga pesisir mendapatkan peringatan dini jika ada ombak tinggi, cuaca buruk, atau pasang rob dari pihak berwenang?",
    skala_label: { 1: "Tidak Pernah Ada Info/Sering Kaget", 2: "Info Lambat Masuk", 3: "Cukup Cepat Diberitahu", 4: "Cepat & Waspada", 5: "Sangat Cepat Lewat WA/Pengeras Suara Masjid" }
  },
  {
    id: "Q_IND_40_akademisi_lsm",
    id_indikator: "IND_40",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa unggul penguasaan metodologi analisis stok, pemodelan spasial oseanografi, dan literatur mutakhir pada institusi Anda?",
    skala_label: { 1: "Kapasitas Riset Terbatas", 2: "Metodologi Standar", 3: "Kapasitas Analisis Cukup", 4: "Penguasaan Riset Unggul", 5: "Pusat Keunggulan Ilmiah (Center of Excellence)" }
  },
  {
    id: "Q_IND_40_industri",
    id_indikator: "IND_40",
    id_stakeholder_group: "industri",
    teks: "Seberapa mutakhir instrumen teknologi monitoring lingkungan, sensor real-time, dan keahlian teknis HSE yang dimiliki korporasi?",
    skala_label: { 1: "Teknologi Konvensional", 2: "Alat Terbatas", 3: "Sesuai Standar Minimal", 4: "Teknologi Modern & Akurat", 5: "Teknologi Canggih Standar Internasional" }
  },

  // IND_41: Kapasitas mobilisasi sumber daya
  {
    id: "Q_IND_41_pemda",
    id_indikator: "IND_41",
    id_stakeholder_group: "pemda",
    teks: "Seberapa besar kekuatan dinas dalam menggerakkan alokasi anggaran APBD/APBN dan pengerahan personel pengawas di wilayah pesisir?",
    skala_label: { 1: "Sangat Terbatas & Tidak Berdaya", 2: "Kapasitas Mobilisasi Rendah", 3: "Cukup Mampu Mobilisasi", 4: "Kapasitas Mobilisasi Kuat", 5: "Sangat Kuat Mengerahkan Anggaran & Personel Penuh" }
  },
  {
    id: "Q_IND_41_pelaku_usaha",
    id_indikator: "IND_41",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa kompak dan cepat para nelayan berkumpul bersama dalam jumlah banyak jika dipanggil untuk membela hak atau mengadakan acara laut?",
    skala_label: { 1: "Susah Dikumpulkan/Masing-masing", 2: "Sedikit yang Datang", 3: "Cukup Kompak Kumpul", 4: "Kompak & Cepat Kumpul Ratusan Nelayan", 5: "Sangat Solid, Kompak Kilat & Ratusan Perahu Bergerak Bersama" }
  },
  {
    id: "Q_IND_41_masyarakat_pesisir",
    id_indikator: "IND_41",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa kuat semangat gotong royong dan kesiapan warga pesisir Cilegon jika dikerahkan untuk kegiatan kerja bakti massal?",
    skala_label: { 1: "Sangat Enggan / Tidak Mau Bergerak", 2: "Kurang Bergerak", 3: "Cukup Mudah Bergerak", 4: "Semangat & Cepat Kumpul", 5: "Sangat Kompak, Massal & Penuh Antusiasme" }
  },
  {
    id: "Q_IND_41_akademisi_lsm",
    id_indikator: "IND_41",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa mampu institusi Anda memobilisasi hibah penelitian eksternal, jaringan relawan konservasi, dan mahasiswa dalam program pesisir?",
    skala_label: { 1: "Mobilisasi Sangat Rendah", 2: "Relawan Terbatas", 3: "Cukup Mampu Menggerakkan", 4: "Mampu Mobilisasi Luas", 5: "Sangat Kuat Menggerakkan Jaringan Riset & Relawan" }
  },
  {
    id: "Q_IND_41_industri",
    id_indikator: "IND_41",
    id_stakeholder_group: "industri",
    teks: "Seberapa besar kemampuan korporasi mengerahkan sumber daya finansial, armada kapal tunda, dan peralatan tanggap darurat tumpahan minyak di laut?",
    skala_label: { 1: "Sangat Bergantung Pihak Luar", 2: "Kapasitas Terbatas", 3: "Cukup Memadai Mandiri", 4: "Kapasitas Sumber Daya Kuat", 5: "Kapasitas Armada & Fasilitas Tanggap Darurat Kelas Satu" }
  },

  // IND_42: Daya tawar & jejaring kolaborasi
  {
    id: "Q_IND_42_pemda",
    id_indikator: "IND_42",
    id_stakeholder_group: "pemda",
    teks: "Seberapa kuat posisi tawar (bargaining power) Pemkot Cilegon dalam forum antar-daerah dan kerja sama kemitraan strategis maritim Selat Sunda?",
    skala_label: { 1: "Posisi Tawar Lemah", 2: "Kurang Diperhitungkan", 3: "Cukup Diperhitungkan", 4: "Daya Tawar Kuat", 5: "Posisi Tawar Sangat Kuat & Menjadi Pemimpin Kolaborasi" }
  },
  {
    id: "Q_IND_42_pelaku_usaha",
    id_indikator: "IND_42",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa kuat suara dan kekompakan paguyuban nelayan Cilegon saat bernegosiasi harga ikan dengan pedagang besar atau menyampaikan keluhan?",
    skala_label: { 1: "Nelayan Selalu Kalah & Diatur", 2: "Daya Tawar Lemah", 3: "Cukup Bisa Menawar", 4: "Kompak & Dihargai Lawan Bicara", 5: "Sangat Kuat, Dihormati & Memiliki Daya Tawar Tinggi" }
  },
  {
    id: "Q_IND_42_masyarakat_pesisir",
    id_indikator: "IND_42",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa kuat kekompakan warga kampung pesisir Cilegon dalam memperjuangkan hak tanah, akses pantai, dan bantuan desa?",
    skala_label: { 1: "Lemah & Mudah Dipecah Belah", 2: "Kurang Kuat", 3: "Cukup Kompak", 4: "Kompak & Didengar Luas", 5: "Sangat Solid, Kuat & Suara Warga Menang" }
  },
  {
    id: "Q_IND_42_akademisi_lsm",
    id_indikator: "IND_42",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa luas jejaring kemitraan institusi Anda dengan lembaga internasional (donor, pakar kelautan global, koalisi LSM maritim)?",
    skala_label: { 1: "Jejaring Sangat Terisolasi", 2: "Jejaring Lokal Saja", 3: "Cukup Terhubung Nasional", 4: "Jejaring Kolaboratif Kuat", 5: "Jejaring Internasional Sangat Kuat & Berpengaruh" }
  },
  {
    id: "Q_IND_42_industri",
    id_indikator: "IND_42",
    id_stakeholder_group: "industri",
    teks: "Seberapa kuat posisi tawar dan jejaring asosiasi industri maritim Cilegon dalam mempengaruhi arah kebijakan iklim usaha kelautan daerah?",
    skala_label: { 1: "Tidak Berpengaruh", 2: "Pengaruh Minor", 3: "Cukup Diperhitungkan", 4: "Pengaruh Sangat Kuat", 5: "Daya Tawar Strategis Utama dalam Perekonomian Daerah" }
  }
];

export function getQuestionsForStakeholder(stakeholderId: string): PertanyaanItem[] {
  return QUESTION_BANK.filter(q => q.id_stakeholder_group === stakeholderId);
}
