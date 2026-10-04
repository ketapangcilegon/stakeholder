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
    teks: "Bagaimana evaluasi ilmiah dan kajian lapangan Anda terhadap status biomassa serta tren kelimpahan stok sumber daya ikan di perairan pesisir Kota Cilegon saat ini?",
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
    teks: "Bagaimana indeks integritas ekologis, tutupan karang/mangrove, dan parameter mutu perairan laut di wilayah pesisir Kota Cilegon saat ini?",
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
    teks: "Bagaimana tingkat selektivitas alat tangkap dan efektivitas pencegahan penangkapan ikan yang merusak (destructive fishing) pada armada perikanan Cilegon?",
    skala_label: { 1: "Tingkat Destruktif Tinggi", 2: "Selektivitas Rendah", 3: "Selektivitas Sedang", 4: "Alat Tangkap Ramah Lingkungan", 5: "Sangat Selektif & Best Practice" }
  },
  {
    id: "Q_IND_03_industri",
    id_indikator: "IND_03",
    id_stakeholder_group: "industri",
    teks: "Bagaimana pandangan industri terhadap praktik penangkapan ikan di perairan sekitar dermaga/pelabuhan, apakah berlangsung tertib dan ramah lingkungan?",
    skala_label: { 1: "Sering Mengabaikan Kelestarian", 2: "Kurang Tertib", 3: "Cukup Tertib", 4: "Tertib & Bertanggung Jawab", 5: "Sangat Ramah Lingkungan & Aman" }
  },

  // IND_04: Dampak aktivitas industri pesisir
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
    teks: "Sejauh mana aktivitas industri pesisir (seperti buangan limbah pabrik, pipa pendingin, atau lalu lintas kapal tongkang) mengganggu tempat Bapak/Ibu mencari ikan?",
    skala_label: { 1: "Sangat Mengganggu/Ikan Menjauh", 2: "Sering Mengganggu Melaut", 3: "Kadang-kadang Mengganggu", 4: "Jarang Mengganggu", 5: "Sama Sekali Tidak Mengganggu / Aman" }
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
    teks: "Bagaimana evaluasi Anda mengenai tingkat kepatuhan baku mutu lingkungan industri pesisir dan efektivitas pengendalian dampak pencemaran terhadap daerah penangkapan ikan di Cilegon?",
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
    skala_label: { 1: "Sangat Tidak Memadai/Minus", 2: "Kurang Memadai", 3: "Cukup Menopang Hidup", 4: "Memberi Pendapatan Baik", 5: "Sangat Menyejahterakan & Berkelanjutan" }
  },
  {
    id: "Q_IND_05_pelaku_usaha",
    id_indikator: "IND_05",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah penghasilan dari hasil melaut atau menjual ikan saat ini cukup untuk memenuhi kebutuhan sehari-hari keluarga dan biaya sekolah anak?",
    skala_label: { 1: "Sangat Kurang/Terlilit Hutang", 2: "Sering Kurang", 3: "Pas-pasan untuk Dapur", 4: "Cukup & Ada Tabungan", 5: "Sangat Cukup & Sejahtera" }
  },
  {
    id: "Q_IND_05_masyarakat_pesisir",
    id_indikator: "IND_05",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Menurut pandangan warga, apakah usaha perikanan laut mampu memberikan rezeki dan taraf hidup yang layak bagi keluarga nelayan di pesisir Cilegon?",
    skala_label: { 1: "Sangat Miskin/Tertinggal", 2: "Masih Susah", 3: "Cukup Layak", 4: "Taraf Hidup Baik", 5: "Sangat Makmur & Berkecukupan" }
  },
  {
    id: "Q_IND_05_akademisi_lsm",
    id_indikator: "IND_05",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana analisis kelayakan ekonomi dan rata-rata pendapatan bersih (net profit margin) usaha nelayan tangkap skala kecil di Kota Cilegon?",
    skala_label: { 1: "Di Bawah Garis Kemiskinan", 2: "Di Bawah UMK Cilegon", 3: "Mendekati Upah Minimum", 4: "Layak Secara Finansial", 5: "Sangat Layak & Rentabilitas Tinggi" }
  },
  {
    id: "Q_IND_05_industri",
    id_indikator: "IND_05",
    id_stakeholder_group: "industri",
    teks: "Bagaimana peran sektor perikanan tangkap dalam menjaga ketahanan ekonomi dan stabilitas rantai pasok pangan masyarakat sekitar kawasan industri Cilegon?",
    skala_label: { 1: "Sangat Minim/Marginal", 2: "Kurang Berperan", 3: "Cukup Berkontribusi", 4: "Penyangga Ekonomi Penting", 5: "Pilar Ketahanan Pangan Utama" }
  },

  // IND_06: Biaya operasional
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
    teks: "Bagaimana beban pengeluaran untuk membeli solar subsidi, es balok, dan bekal setiap kali melaut, serta kemudahan mendapatkannya di Cilegon?",
    skala_label: { 1: "Sangat Mahal & Solar Susah Sekali", 2: "Memberatkan Biaya Melaut", 3: "Biasa Saja / Masih Terjangkau", 4: "Cukup Terjangkau & Mudah", 5: "Sangat Terjangkau, Mudah & Lancar" }
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
    teks: "Bagaimana rasio biaya operasional terhadap total penerimaan (Revenue-Cost Ratio) usaha perikanan tangkap skala kecil di perairan pesisir Cilegon?",
    skala_label: { 1: "Rasio Sangat Tinggi/Beban Defisit", 2: "Tinggi (Kurang Efisien)", 3: "Moderat Seimbang", 4: "Efisien Menguntungkan", 5: "Sangat Efisien & Hemat Energi" }
  },
  {
    id: "Q_IND_06_industri",
    id_indikator: "IND_06",
    id_stakeholder_group: "industri",
    teks: "Bagaimana stabilitas pasokan logistik energi dan kebutuhan melaut bagi komunitas nelayan pesisir Cilegon menurut pengamatan pihak industri?",
    skala_label: { 1: "Sangat Rawan Gejolak", 2: "Sering Terhambat Biaya", 3: "Cukup Stabil", 4: "Stabil & Terkelola Baik", 5: "Sangat Terjamin & Efisien" }
  },

  // IND_07: Akses terhadap modal dan pasar
  {
    id: "Q_IND_07_pemda",
    id_indikator: "IND_07",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana ketersediaan fasilitas pembiayaan formal (KUR/bank) serta keteraturan tata niaga pasar di Tempat Pelelangan Ikan (TPI) Kota Cilegon?",
    skala_label: { 1: "Sangat Minim & Ijon Marak", 2: "Akses Modal Terbatas", 3: "Cukup Berfungsi", 4: "Pasar & Kredit Sehat", 5: "Inklusi Keuangan & TPI Sangat Maju" }
  },
  {
    id: "Q_IND_07_pelaku_usaha",
    id_indikator: "IND_07",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Bagaimana kemudahan Bapak/Ibu mendapatkan pinjaman modal usaha yang layak serta keadilan harga jual ikan saat bertransaksi di pangkalan/TPI atau pedagang pengumpul?",
    skala_label: { 1: "Sangat Sulit & Harga Sering Dipermainkan", 2: "Kurang Adil & Modal Susah", 3: "Cukup Wajar", 4: "Mudah & Harga Adil", 5: "Sangat Mudah & Harga Menguntungkan" }
  },
  {
    id: "Q_IND_07_masyarakat_pesisir",
    id_indikator: "IND_07",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana kemudahan warga dan keluarga nelayan dalam mendapatkan pinjaman modal serta kelancaran jual beli ikan di pasar pesisir?",
    skala_label: { 1: "Sangat Sulit & Rawan Rentenir", 2: "Kurang Lancar", 3: "Cukup Terbuka", 4: "Lancar & Aman", 5: "Sangat Mudah, Adil & Transparan" }
  },
  {
    id: "Q_IND_07_akademisi_lsm",
    id_indikator: "IND_07",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat inklusi keuangan lembaga pembiayaan mikro serta efisiensi transmisi harga pada rantai pasok pemasaran perikanan di Kota Cilegon?",
    skala_label: { 1: "Asimetri Informasi Akut", 2: "Dominasi Bakul/Tengkulak", 3: "Efisiensi Transmisi Sedang", 4: "Rantai Pasok Sehat", 5: "Sangat Efisien & Berkeadilan Pasar" }
  },
  {
    id: "Q_IND_07_industri",
    id_indikator: "IND_07",
    id_stakeholder_group: "industri",
    teks: "Sejauh mana kemitraan pasar atau dukungan permodalan/CSR dapat diakses oleh pelaku usaha perikanan lokal di kawasan pesisir Cilegon?",
    skala_label: { 1: "Sama Sekali Tidak Ada", 2: "Sangat Terbatas", 3: "Ada Skema Parsial", 4: "Kemitraan Berjalan Baik", 5: "Kemitraan Mandiri & Berkelanjutan" }
  },

  // IND_08: Nilai tambah produk perikanan
  {
    id: "Q_IND_08_pemda",
    id_indikator: "IND_08",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana perkembangan hilirisasi, pengolahan hasil tangkapan, dan diversifikasi produk perikanan (ikan asin, kerupuk, frozen) di Kota Cilegon?",
    skala_label: { 1: "Sama Sekali Belum Ada", 2: "Masih Sangat Tradisional", 3: "Tumbuh Skala Rumah Tangga", 4: "Sentra Olahan Berkembang", 5: "Hilirisasi Modern & Nilai Ekspor" }
  },
  {
    id: "Q_IND_08_pelaku_usaha",
    id_indikator: "IND_08",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Sejauh mana hasil tangkapan ikan dapat diolah menjadi produk olahan bernilai tambah (ikan asin, presto, kerupuk) sehingga memberikan harga jual yang lebih menguntungkan?",
    skala_label: { 1: "Tidak Bisa / Langsung Dibuang Murah", 2: "Jarang Diolah Lebih Lanjut", 3: "Sebagian Diolah Sederhana", 4: "Bisa Diolah Bernilai Tambah", 5: "Sangat Menguntungkan Hasil Olahannya" }
  },
  {
    id: "Q_IND_08_masyarakat_pesisir",
    id_indikator: "IND_08",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Sejauh mana kelompok ibu-ibu atau warga pesisir aktif membuat oleh-oleh/kuliner olahan ikan khas Cilegon yang laku dijual ke wisatawan?",
    skala_label: { 1: "Belum Ada Kegiatan", 2: "Masih Sedikit Sekali", 3: "Ada Beberapa Kelompok", 4: "Aktif Berproduksi & Laku", 5: "Sangat Maju Menjadi Produk Unggulan" }
  },
  {
    id: "Q_IND_08_akademisi_lsm",
    id_indikator: "IND_08",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat adopsi teknologi pascapanen (cold chain & food processing) dalam menciptakan nilai tambah (value-added) komoditas perikanan di Cilegon?",
    skala_label: { 1: "Susut Pascapanen Sangat Tinggi", 2: "Teknologi Minimal", 3: "Adopsi Moderat", 4: "Nilai Tambah Baik", 5: "Agroindustri Maritim Terpadu" }
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

  // IND_10: Konflik pemanfaatan ruang
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
    teks: "Sejauh mana wilayah tangkap Bapak/Ibu bebas dari konflik atau gesekan ruang laut dengan kapal tongkang industri, jalur kapal besar, maupun alat tangkap luar?",
    skala_label: { 1: "Sering Terjadi Konflik / Sering Terusir", 2: "Kerap Ada Gesekan Jalur", 3: "Sesekali Ada Gesekan Kecil", 4: "Jarang Berselisih / Kondusif", 5: "Sangat Aman, Damai & Tidak Pernah Berselisih" }
  },
  {
    id: "Q_IND_10_masyarakat_pesisir",
    id_indikator: "IND_10",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana efektivitas penyelesaian perselisihan apabila terjadi gesekan pemanfaatan ruang pantai antara nelayan, pengembang industri, atau pengelola wisata pesisir?",
    skala_label: { 1: "Sering Ricuh & Nelayan Dirugikan", 2: "Sulit Titik Temu", 3: "Bisa Selesai Damai", 4: "Selalu Musyawarah Mufakat", 5: "Sangat Damai & Saling Menghormati" }
  },
  {
    id: "Q_IND_10_akademisi_lsm",
    id_indikator: "IND_10",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat kerentanan konflik tata ruang pesisir (coastal spatial conflict) dan efektivitas resolusi konflik multipihak di Kota Cilegon?",
    skala_label: { 1: "Eskalasi Konflik Kronis", 2: "Rentan Gesekan Ruang", 3: "Resolusi Cukup Berjalan", 4: "Mitigasi Konflik Efektif", 5: "Tata Ruang Sangat Harmonis & Inklusif" }
  },
  {
    id: "Q_IND_10_industri",
    id_indikator: "IND_10",
    id_stakeholder_group: "industri",
    teks: "Seberapa minim potensi gesekan atau perselisihan operasional pelabuhan/pabrik industri dengan aktivitas penangkapan nelayan tradisional?",
    skala_label: { 1: "Sering Terjadi Klaim & Gesekan", 2: "Masih Ada Gesekan", 3: "Cukup Terkendali Komunikasi", 4: "Jarang Berselisih", 5: "Zero Dispute / Hubungan Sangat Rukun" }
  },

  // IND_11: Keadilan akses sumber daya
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
    teks: "Sejauh mana nelayan kecil dan perahu motor tradisional mendapatkan kebebasan serta perlindungan hak yang adil untuk mencari ikan di perairan pesisir Cilegon?",
    skala_label: { 1: "Sangat Tidak Terlindungi / Terpinggirkan", 2: "Ruang Tangkap Terbatas Sekali", 3: "Masih Bisa Melaut Cukup Bebas", 4: "Akses Adil & Dihargai Baik", 5: "Sangat Terlindungi & Berkeadilan Penuh" }
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
    teks: "Bagaimana jaminan keadilan distributif (distributive justice) dan perlindungan hak akses nelayan tradisional atas perairan tangkap di Cilegon?",
    skala_label: { 1: "Ocean Grabbing / Marginalisasi Parah", 2: "Akses Kurang Berkeadilan", 3: "Cukup Terakomodasi", 4: "Hak Akses Terlindungi Baik", 5: "Prinsip Human Rights-Based Sangat Kuat" }
  },
  {
    id: "Q_IND_11_industri",
    id_indikator: "IND_11",
    id_stakeholder_group: "industri",
    teks: "Sejauh mana penataan batas zona keamanan industri di perairan tetap memberikan ruang koridor yang adil bagi jalur lalu lintas nelayan tradisional?",
    skala_label: { 1: "Menutup Total Jalur Nelayan", 2: "Kurang Memperhatikan Koridor", 3: "Memberikan Koridor Minimal", 4: "Menata Koridor dengan Baik", 5: "Sangat Menghormati Akses Jalur Nelayan" }
  },

  // IND_12: Keberlanjutan mata pencaharian nelayan
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
    teks: "Apakah anak-anak muda di keluarga atau kampung Bapak/Ibu masih mau melanjutkan menjadi nelayan karena merasa pekerjaan di laut menjanjikan masa depan?",
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
  // V4: PERSEPSI TATA KELOLA (GOVERNANCE) (7 Indikator)
  // =========================================================================
  // IND_13: Transparansi informasi
  {
    id: "Q_IND_13_pemda",
    id_indikator: "IND_13",
    id_stakeholder_group: "pemda",
    teks: "Sejauh mana keterbukaan informasi publik mengenai program, alokasi bantuan, dan perizinan kelautan-perikanan disampaikan secara transparan di Cilegon?",
    skala_label: { 1: "Sangat Tertutup", 2: "Kurang Terbuka", 3: "Cukup Transparan", 4: "Transparan & Terbuka", 5: "Sangat Transparan & Akuntabel" }
  },
  {
    id: "Q_IND_13_pelaku_usaha",
    id_indikator: "IND_13",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah informasi tentang bantuan perahu, mesin tempel, subsidi solar, dan aturan melaut selalu diberitahukan secara jelas dan jujur kepada semua nelayan?",
    skala_label: { 1: "Sangat Tertutup / Dibagi Sembunyi-sembunyi", 2: "Hanya Tahu Sedikit", 3: "Cukup Diberitahukan", 4: "Jelas & Terbuka", 5: "Sangat Jelas, Jujur & Merata" }
  },
  {
    id: "Q_IND_13_masyarakat_pesisir",
    id_indikator: "IND_13",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana kemudahan warga pesisir dalam mendapatkan berita atau pengumuman resmi mengenai kegiatan dan bantuan perikanan dari pemerintah?",
    skala_label: { 1: "Sangat Gelap / Tidak Pernah Tahu", 2: "Sulit Dapat Info", 3: "Cukup Tahu dari Mulut ke Mulut", 4: "Mudah Diketahui Warga", 5: "Sangat Terbuka & Mudah Diakses Semua Orang" }
  },
  {
    id: "Q_IND_13_akademisi_lsm",
    id_indikator: "IND_13",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat akuntabilitas dan transparansi keterbukaan data publik sektor kelautan dan perikanan tangkap Kota Cilegon?",
    skala_label: { 1: "Informasi Sangat Tertutup", 2: "Asimetri Informasi Tinggi", 3: "Transparansi Parsial", 4: "Akses Data Terbuka Baik", 5: "Sistem Open Data Sangat Kredibel" }
  },
  {
    id: "Q_IND_13_industri",
    id_indikator: "IND_13",
    id_stakeholder_group: "industri",
    teks: "Sejauh mana transparansi regulasi dan sosialisasi kebijakan zonasi maritim oleh pemerintah daerah dapat diakses secara cepat oleh kalangan industri?",
    skala_label: { 1: "Sangat Sulit Diakses", 2: "Kurang Transparan", 3: "Cukup Terbuka", 4: "Transparan & Teratur", 5: "Sangat Terbuka & Informasi Real-time" }
  },

  // IND_14: Keterbukaan pengambilan keputusan
  {
    id: "Q_IND_14_pemda",
    id_indikator: "IND_14",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana mekanisme pelibatan berbagai pihak (nelayan, asosiasi, industri, pakar) dalam proses musyawarah pengambilan kebijakan pengelolaan pesisir?",
    skala_label: { 1: "Top-Down Tanpa Pelibatan", 2: "Pelibatan Simbolis/Formalitas", 3: "Cukup Melibatkan Pihak Luar", 4: "Partisipatif & Dialogis", 5: "Sangat Kolaboratif & Co-Management" }
  },
  {
    id: "Q_IND_14_pelaku_usaha",
    id_indikator: "IND_14",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Ketika pemerintah membuat aturan baru tentang laut di Cilegon, apakah suara dan usulan para nelayan didengar dan diajak rembukan terlebih dahulu?",
    skala_label: { 1: "Tidak Pernah Ditanya / Tiba-tiba Dilarang", 2: "Jarang Diajak Bicara", 3: "Kadang-kadang Diajak Kumpul", 4: "Sering Dimintai Pendapat", 5: "Selalu Diajak Musyawarah Bersama" }
  },
  {
    id: "Q_IND_14_masyarakat_pesisir",
    id_indikator: "IND_14",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Apakah tokoh masyarakat pesisir dan pengurus rukun nelayan dilibatkan saat penetapan program pembangunan pantai di Cilegon?",
    skala_label: { 1: "Ditinggalkan Sepihak", 2: "Hanya Diberitahu Saja", 3: "Cukup Diajak Rembukan", 4: "Dilibatkan Baik", 5: "Selalu Jadi Mitra Utama Musyawarah" }
  },
  {
    id: "Q_IND_14_akademisi_lsm",
    id_indikator: "IND_14",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana derajat keterbukaan dan inklusivitas proses pengambilan keputusan dalam pengelolaan perikanan dan penataan ruang laut pesisir Cilegon?",
    skala_label: { 1: "Proses Sangat Eksklusif / Tertutup", 2: "Partisipasi Semu (Tokenism)", 3: "Konsultatif Terbatas", 4: "Inklusif & Partisipatif", 5: "Deliberatif & Berorientasi Konsensus" }
  },
  {
    id: "Q_IND_14_industri",
    id_indikator: "IND_14",
    id_stakeholder_group: "industri",
    teks: "Sejauh mana kalangan industri diundang dan didengar aspirasinya dalam perumusan kebijakan tata ruang perairan dan kelautan Cilegon?",
    skala_label: { 1: "Tidak Pernah Dilibatkan", 2: "Hanya Dikirimi Surat Edaran", 3: "Cukup Dilibatkan", 4: "Rutin Dilibatkan FGD", 5: "Kemitraan Strategis Perumusan Kebijakan" }
  },

  // IND_15: Akuntabilitas regulasi
  {
    id: "Q_IND_15_pemda",
    id_indikator: "IND_15",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana efektivitas pengawasan terpadu (Wasmas/Polairud/DKPP) dan ketegasan sanksi hukum terhadap pelanggaran aturan di laut Cilegon?",
    skala_label: { 1: "Sangat Lemah / Hukum Tumpul", 2: "Kurang Efektif & Tebang Pilih", 3: "Cukup Berjalan", 4: "Tegas & Akuntabel", 5: "Sangat Tegas, Adil & Penegakan Hukum Prima" }
  },
  {
    id: "Q_IND_15_pelaku_usaha",
    id_indikator: "IND_15",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah aparat patroli laut adil dan tegas menindak kapal yang pakai alat tangkap terlarang atau kapal luar yang merusak wilayah tangkap Cilegon?",
    skala_label: { 1: "Dibiarkan Saja / Tidak Tegas", 2: "Kurang Tegas", 3: "Kadang Ada Razia", 4: "Tegas Menindak Pelanggar", 5: "Sangat Adil, Tegas & Laut Sangat Aman" }
  },
  {
    id: "Q_IND_15_masyarakat_pesisir",
    id_indikator: "IND_15",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana ketegasan aparat dalam menjaga keamanan laut dan menertibkan pihak-pihak yang membuang limbah atau merusak pantai di Cilegon?",
    skala_label: { 1: "Sama Sekali Tidak Ada Tindakan", 2: "Kurang Ketat", 3: "Cukup Menjaga", 4: "Tegas Menertibkan", 5: "Sangat Sigap, Tegas & Bersih" }
  },
  {
    id: "Q_IND_15_akademisi_lsm",
    id_indikator: "IND_15",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat kepatuhan hukum (law compliance) dan integritas sistem monitoring, controlling, and surveillance (MCS) di perairan Cilegon?",
    skala_label: { 1: "Impuniti / MCS Tidak Berfungsi", 2: "Pengawasan Lemah & Parsial", 3: "Kepatuhan Sedang", 4: "MCS Berjalan Efektif", 5: "Sistem MCS Sangat Terintegrasi & Tegas" }
  },
  {
    id: "Q_IND_15_industri",
    id_indikator: "IND_15",
    id_stakeholder_group: "industri",
    teks: "Bagaimana konsistensi penegakan aturan keselamatan pelayaran dan kepatuhan lingkungan laut bagi seluruh entitas di pesisir Cilegon?",
    skala_label: { 1: "Banyak Pelanggaran Tak Ditindak", 2: "Kurang Konsisten", 3: "Cukup Tertib", 4: "Konsisten & Tertib", 5: "Sangat Taat Asas & Standar Keselamatan Tinggi" }
  },

  // IND_16: Koordinasi lintas sektor
  {
    id: "Q_IND_16_pemda",
    id_indikator: "IND_16",
    id_stakeholder_group: "pemda",
    teks: "Sejauh mana sinergi dan koordinasi antar-OPD (DKPP, BAPPERIDA, DLH) serta instansi vertikal (KSOP Banten, Polairud) dalam tata kelola pesisir Cilegon?",
    skala_label: { 1: "Sangat Tersekat / Ego Sektoral Parah", 2: "Koordinasi Sering Macet", 3: "Cukup Terjalin", 4: "Koordinasi Kompak & Terpadu", 5: "Kolaborasi Sangat Harmonis & Sinergis" }
  },
  {
    id: "Q_IND_16_pelaku_usaha",
    id_indikator: "IND_16",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah urusan perizinan melaut, pas kecil kapal, dan urusan dinas tidak berbelit-belit serta instansi pemerintah kompak membantu nelayan?",
    skala_label: { 1: "Sangat Dipersulit / Dilempar Sana-sini", 2: "Sering Berbelit-belit", 3: "Cukup Lumayan", 4: "Mudah & Instansi Kompak", 5: "Sangat Mudah, Cepat & Sangat Membantu" }
  },
  {
    id: "Q_IND_16_masyarakat_pesisir",
    id_indikator: "IND_16",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana kekompakan dinas perikanan, kelurahan, dan dinas lingkungan hidup dalam menyelesaikan masalah sampah dan tata kelola pesisir?",
    skala_label: { 1: "Saling Lempar Tanggung Jawab", 2: "Kurang Kompak", 3: "Cukup Mau Mengurus", 4: "Kompak Bekerja Sama", 5: "Sangat Kompak & Cepat Tanggap Bersama" }
  },
  {
    id: "Q_IND_16_akademisi_lsm",
    id_indikator: "IND_16",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana efektivitas koordinasi kelembagaan multisektoral (Integrated Coastal Zone Management) antara Pemkot Cilegon, otoritas pelabuhan (KSOP), dan dinas terkait?",
    skala_label: { 1: "Fragmentasi Institusi Akut", 2: "Koordinasi Lemah", 3: "Sinkronisasi Cukup Berjalan", 4: "Tata Kelola Multisektor Baik", 5: "Tata Kelola ICZM Terpadu Sempurna" }
  },
  {
    id: "Q_IND_16_industri",
    id_indikator: "IND_16",
    id_stakeholder_group: "industri",
    teks: "Seberapa efisien koordinasi antara pihak regulator pelabuhan (KSOP), pemerintah daerah, dan pengelola kawasan industri dalam penataan maritim Cilegon?",
    skala_label: { 1: "Sangat Tidak Efisien / Tumpang Tindih", 2: "Kurang Efisien", 3: "Cukup Selaras", 4: "Efisien & Komunikatif", 5: "Sangat Cepat, Efisien & Terintegrasi Satu Pintu" }
  },

  // IND_17: Integrasi kepentingan stakeholder
  {
    id: "Q_IND_17_pemda",
    id_indikator: "IND_17",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana kebijakan perikanan Pemkot Cilegon mampu menyeimbangkan kepentingan ekonomi nelayan, ekspansi industri, dan konservasi alam?",
    skala_label: { 1: "Sangat Timpang Berat Sebelah", 2: "Kurang Seimbang", 3: "Cukup Mengakomodasi", 4: "Keseimbangan Terjaga Baik", 5: "Sangat Seimbang, Adil & Harmonis" }
  },
  {
    id: "Q_IND_17_pelaku_usaha",
    id_indikator: "IND_17",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah aturan yang dibuat pemerintah kota adil untuk nelayan kecil dan tidak hanya menguntungkan pabrik besar di pesisir?",
    skala_label: { 1: "Hanya Bela Pabrik / Nelayan Dikorbankan", 2: "Kurang Membela Nelayan", 3: "Cukup Adil", 4: "Adil Membela Hak Nelayan", 5: "Sangat Berkeadilan & Melindungi Nelayan Kecil" }
  },
  {
    id: "Q_IND_17_masyarakat_pesisir",
    id_indikator: "IND_17",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Sejauh mana kebijakan pembangunan pantai Cilegon mampu mengakomodasi kebutuhan tempat tinggal warga, tempat nelayan melaut, dan industri?",
    skala_label: { 1: "Warga Terusir / Diabaikan", 2: "Kurang Akomodatif", 3: "Cukup Diperhatikan", 4: "Semua Tertata Adil", 5: "Sangat Serasi & Seluruh Kepentingan Terlindungi" }
  },
  {
    id: "Q_IND_17_akademisi_lsm",
    id_indikator: "IND_17",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana keterpaduan integrasi kepentingan multi-stakeholder (nelayan kecil, industri, pemerintah) dalam perumusan kebijakan perikanan di Cilegon?",
    skala_label: { 1: "Dominasi Hegemoni Korporasi", 2: "Kompromi Timpang", 3: "Konsensus Memadai", 4: "Trade-off Berkeadilan", 5: "Integrasi Win-Win Solution Sempurna" }
  },
  {
    id: "Q_IND_17_industri",
    id_indikator: "IND_17",
    id_stakeholder_group: "industri",
    teks: "Sejauh mana kebijakan pemerintah daerah memfasilitasi titik temu kepentingan investasi industri dengan perlindungan mata pencaharian nelayan sekitar?",
    skala_label: { 1: "Sering Memunculkan Ketegangan", 2: "Kurang Seimbang", 3: "Cukup Terakomodir", 4: "Titik Temu Sangat Baik", 5: "Sinergi Kemitraan Sangat Optimal" }
  },

  // IND_18: Konsistensi kebijakan
  {
    id: "Q_IND_18_pemda",
    id_indikator: "IND_18",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana konsistensi dan kesinambungan arah rencana induk (masterplan) keberlanjutan perikanan tangkap Cilegon di tengah pergantian periode kepemimpinan?",
    skala_label: { 1: "Sangat Tidak Konsisten / Selalu Berubah", 2: "Kurang Berkesinambungan", 3: "Cukup Stabil", 4: "Konsisten Terencana", 5: "Sangat Konsisten, Kokoh & Berkelanjutan" }
  },
  {
    id: "Q_IND_18_pelaku_usaha",
    id_indikator: "IND_18",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah program bantuan sarana penangkapan, pendampingan, dan aturan bagi nelayan dijalankan oleh pemerintah secara konsisten dan berkesinambungan dari tahun ke tahun?",
    skala_label: { 1: "Sangat Tidak Konsisten / Musiman", 2: "Sering Terputus-putus", 3: "Cukup Berkesinambungan", 4: "Konsisten Berkelanjutan", 5: "Sangat Konsisten, Terarah & Berkelanjutan" }
  },
  {
    id: "Q_IND_18_masyarakat_pesisir",
    id_indikator: "IND_18",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Apakah program penataan kampung pesisir dan pemberdayaan nelayan terus dijalankan secara berkesinambungan oleh dinas terkait?",
    skala_label: { 1: "Terhenti di Tengah Jalan", 2: "Kurang Terurus", 3: "Cukup Berlanjut", 4: "Rutin Dijalankan", 5: "Sangat Berkelanjutan & Makin Maju" }
  },
  {
    id: "Q_IND_18_akademisi_lsm",
    id_indikator: "IND_18",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana stabilitas regulasi dan konsistensi arah kebijakan pengelolaan perikanan tangkap berkelanjutan di Kota Cilegon?",
    skala_label: { 1: "Volatilitas Kebijakan Sangat Tinggi", 2: "Inkonsistensi Regulasi Kerap Terjadi", 3: "Cukup Terjaga", 4: "Stabilitas Regulasi Baik", 5: "Trajectory Kebijakan Sangat Solid & Predictable" }
  },
  {
    id: "Q_IND_18_industri",
    id_indikator: "IND_18",
    id_stakeholder_group: "industri",
    teks: "Bagaimana kepastian hukum dan konsistensi regulasi pemanfaatan ruang perairan yang diterbitkan pemerintah daerah bagi dunia usaha?",
    skala_label: { 1: "Sangat Tidak Pasti / Berisiko Tinggi", 2: "Kerap Berubah Menimbulkan Keraguan", 3: "Cukup Memberi Kepastian", 4: "Kepastian Hukum Terjamin", 5: "Sangat Stabil, Pasti & Ramah Investasi" }
  },

  // IND_19: Penggunaan data ilmiah (evidence-based)
  {
    id: "Q_IND_19_pemda",
    id_indikator: "IND_19",
    id_stakeholder_group: "pemda",
    teks: "Sejauh mana penyusunan program dan regulasi perikanan tangkap di Kota Cilegon didasarkan pada basis data ilmiah dan kajian stok terukur (evidence-based policy)?",
    skala_label: { 1: "Asal Buat Tanpa Data (0%)", 2: "Data Sangat Minim", 3: "Cukup Memakai Data Dasar", 4: "Berbasis Data Riset Lapangan", 5: "Evidence-Based Policy Sangat Ketat & Matang" }
  },
  {
    id: "Q_IND_19_pelaku_usaha",
    id_indikator: "IND_19",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Ketika dinas membuat aturan, apakah petugas benar-benar turun ke laut mengecek kondisi kapal dan hasil tangkapan nelayan yang sesungguhnya?",
    skala_label: { 1: "Hanya Asal Buat di Kantor", 2: "Jarang Turun ke Laut", 3: "Kadang Datang Mencatat", 4: "Sering Turun & Cocok Datanya", 5: "Selalu Turun Memeriksa Kondisi Riil Lapangan" }
  },
  {
    id: "Q_IND_19_masyarakat_pesisir",
    id_indikator: "IND_19",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Apakah program bantuan yang turun ke pesisir tepat sasaran sesuai data riil keluarga nelayan yang memang membutuhkan?",
    skala_label: { 1: "Salah Sasaran Total", 2: "Banyak Salah Sasaran", 3: "Cukup Sesuai Data", 4: "Tepat Sasaran", 5: "Sangat Tepat Sasaran & Adil Transparan" }
  },
  {
    id: "Q_IND_19_akademisi_lsm",
    id_indikator: "IND_19",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat pemanfaatan data riset ilmiah, kajian potensi stok ikan, dan data sosial-ekonomi riil dalam penyusunan kebijakan perikanan di Kota Cilegon?",
    skala_label: { 1: "Kebijakan Tanpa Dasar Ilmiah", 2: "Pemanfaatan Riset Rendah", 3: "Pemanfaatan Data Moderat", 4: "Berbasis Riset Ilmiah Baik", 5: "Sains dan Data Lapangan Menjadi Fondasi Utama" }
  },
  {
    id: "Q_IND_19_industri",
    id_indikator: "IND_19",
    id_stakeholder_group: "industri",
    teks: "Sejauh mana kajian lingkungan ilmiah (AMDAL/RKL-RPL) dan monitoring berkala dijadikan dasar bersama dalam penataan perairan industri-pesisir?",
    skala_label: { 1: "Hanya Formalitas Kertas", 2: "Kurang Dijadikan Rujukan", 3: "Cukup Digunakan", 4: "Dijadikan Panduan Bersama", 5: "Kajian Ilmiah Menjadi Dasar Mutlak Pengambilan Keputusan" }
  },

  // =========================================================================
  // V5: PERSEPSI KELEMBAGAAN (4 Indikator)
  // =========================================================================
  // IND_20: Kapasitas kelembagaan dinas
  {
    id: "Q_IND_20_pemda",
    id_indikator: "IND_20",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana penilaian Anda terhadap kapasitas SDM, ketersediaan anggaran, dan sarana prasarana dinas dalam mengelola sektor perikanan di Cilegon?",
    skala_label: { 1: "Sangat Minim/Defisit Akut", 2: "Kurang Memadai", 3: "Cukup Memadai", 4: "Kapasitas Sangat Baik", 5: "Kapasitas Lembaga Sangat Unggul & Modern" }
  },
  {
    id: "Q_IND_20_pelaku_usaha",
    id_indikator: "IND_20",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Bagaimana kesigapan dan kemampuan petugas dinas perikanan di Cilegon saat melayani keluhan, mengurus surat kapal, atau membantu nelayan?",
    skala_label: { 1: "Sangat Lambat / Tidak Mau Bantu", 2: "Kurang Tanggap", 3: "Cukup Membantu", 4: "Sigap & Ramah", 5: "Sangat Cepat, Sigap & Peduli Nelayan" }
  },
  {
    id: "Q_IND_20_masyarakat_pesisir",
    id_indikator: "IND_20",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana kemampuan dan fasilitas kantor kelurahan/pos pelayanan pesisir dalam menampung urusan dan kebutuhan masyarakat nelayan?",
    skala_label: { 1: "Sangat Buruk / Tidak Berfungsi", 2: "Kurang Memadai", 3: "Cukup Berfungsi", 4: "Pelayanan Baik", 5: "Pelayanan Sangat Prima & Sigap" }
  },
  {
    id: "Q_IND_20_akademisi_lsm",
    id_indikator: "IND_20",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana kapasitas kelembagaan aparatur teknis Pemkot Cilegon serta kelembagaan lokal dalam mengelola perikanan tangkap berkelanjutan?",
    skala_label: { 1: "Institutional Incapability Akut", 2: "Kapasitas Rendah", 3: "Kapasitas Moderat", 4: "Kapasitas Kelembagaan Baik", 5: "Kapasitas Sangat Adaptif & Profesional" }
  },
  {
    id: "Q_IND_20_industri",
    id_indikator: "IND_20",
    id_stakeholder_group: "industri",
    teks: "Bagaimana profesionalitas dan kapabilitas tim dinas terkait dalam bermitra dengan korporasi mengelola kawasan maritim pesisir Cilegon?",
    skala_label: { 1: "Sangat Tidak Profesional", 2: "Kurang Responsif", 3: "Cukup Profesional", 4: "Profesional & Kooperatif", 5: "Sangat Profesional & Standar Tinggi" }
  },

  // IND_21: Efektivitas kelompok nelayan (KUB/HNSI)
  {
    id: "Q_IND_21_pemda",
    id_indikator: "IND_21",
    id_stakeholder_group: "pemda",
    teks: "Seberapa efektif peran Kelompok Usaha Bersama (KUB), Himpunan Nelayan Seluruh Indonesia (HNSI), dan koperasi perikanan dalam mengorganisir anggotanya secara mandiri di Cilegon?",
    skala_label: { 1: "Kelompok Pasif / Hanya Nama (Mati Suri)", 2: "Kurang Berfungsi", 3: "Cukup Berjalan", 4: "Organisasi Mandiri & Aktif", 5: "Sangat Solid, Mandiri & Berdaya Maju" }
  },
  {
    id: "Q_IND_21_pelaku_usaha",
    id_indikator: "IND_21",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa aktif kelompok nelayan (KUB atau Rukun Nelayan HNSI) tempat Bapak/Ibu bernaung dalam mengadakan pertemuan rutin, usaha bersama, dan membantu menyelesaikan kesulitan anggota?",
    skala_label: { 1: "Tidak Aktif / Hanya Nama Saja", 2: "Kurang Berjalan", 3: "Cukup Aktif Berkala", 4: "Aktif Membantu Anggota", 5: "Sangat Aktif, Solid & Mandiri" }
  },
  {
    id: "Q_IND_21_masyarakat_pesisir",
    id_indikator: "IND_21",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana keaktifan pengurus rukun nelayan dan ketua KUB dalam memimpin warga serta menjaga ketertiban pangkalan nelayan di wilayah sekitar?",
    skala_label: { 1: "Sangat Pasif / Tidak Peduli", 2: "Kurang Berperan", 3: "Cukup Memimpin", 4: "Aktif & Mengayomi Warga", 5: "Sangat Berwibawa, Kompak & Mengayomi" }
  },
  {
    id: "Q_IND_21_akademisi_lsm",
    id_indikator: "IND_21",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat efektivitas tata kelola organisasi, akuntabilitas, dan peran representasi kelompok nelayan (KUB dan HNSI Kota Cilegon) dalam memperjuangkan anggotanya?",
    skala_label: { 1: "Kelembagaan Nelayan Lumpuh", 2: "Tata Kelola Lemah", 3: "Cukup Berfungsi Representatif", 4: "Organisasi Efektif & Solid", 5: "Self-Governance Sangat Kuat & Berdaya Tawar Tinggi" }
  },
  {
    id: "Q_IND_21_industri",
    id_indikator: "IND_21",
    id_stakeholder_group: "industri",
    teks: "Seberapa terstruktur dan komunikatif kelompok nelayan (KUB) maupun pengurus HNSI saat industri hendak menyalurkan program CSR atau melakukan mediasi di lapangan?",
    skala_label: { 1: "Sangat Sulit Berkomunikasi", 2: "Kurang Terstruktur", 3: "Cukup Kooperatif", 4: "Terstruktur & Mudah Berkomunikasi", 5: "Kemitraan Sangat Rapi, Terbuka & Solutif" }
  },

  // IND_22: Efektivitas lembaga pendukung (penyuluh/kampus)
  {
    id: "Q_IND_22_pemda",
    id_indikator: "IND_22",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana kontribusi lembaga pendukung seperti Penyuluh Perikanan Lapangan (PPL), perguruan tinggi, dan perbankan dalam memajukan perikanan Cilegon?",
    skala_label: { 1: "Sama Sekali Tidak Ada Peran", 2: "Peran Sangat Minim", 3: "Cukup Membantu", 4: "Pendampingan Sangat Baik", 5: "Sinergi Lembaga Pendukung Sangat Berdampak Luas" }
  },
  {
    id: "Q_IND_22_pelaku_usaha",
    id_indikator: "IND_22",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah petugas penyuluh perikanan sering datang menemui nelayan untuk mengajari teknik baru, merawat mesin, atau memberi info cuaca laut?",
    skala_label: { 1: "Tidak Pernah Muncul Sama Sekali", 2: "Sangat Jarang Datang", 3: "Kadang Datang Berkunjung", 4: "Rutin Datang Membantu", 5: "Selalu Hadir Mendampingi Nelayan" }
  },
  {
    id: "Q_IND_22_masyarakat_pesisir",
    id_indikator: "IND_22",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Sejauh mana kehadiran petugas penyuluh, puskesmas pesisir, dan lembaga pelatihan terasa manfaatnya bagi kemajuan warga pesisir Cilegon?",
    skala_label: { 1: "Tidak Ada Manfaatnya", 2: "Kurang Terasa", 3: "Cukup Bermanfaat", 4: "Sangat Bermanfaat Nyata", 5: "Sangat Dirasakan Memajukan Warga Pesisir" }
  },
  {
    id: "Q_IND_22_akademisi_lsm",
    id_indikator: "IND_22",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana efektivitas fungsi intermediasi, pembinaan penyuluh, dan transfer ilmu pengetahuan oleh lembaga pendukung (kampus, penyuluh, perbankan) di Cilegon?",
    skala_label: { 1: "Intermediasi Gagal Total", 2: "Transfer Ilmu Rendah", 3: "Cukup Berjalan", 4: "Fungsi Pendampingan Berjalan Baik", 5: "Ekosistem Inovasi Pesisir Sangat Efektif" }
  },
  {
    id: "Q_IND_22_industri",
    id_indikator: "IND_22",
    id_stakeholder_group: "industri",
    teks: "Sejauh mana kelembagaan pendukung seperti balai riset atau dinas terkait memfasilitasi program sinergi lingkungan industri-pesisir?",
    skala_label: { 1: "Tidak Pernah Memfasilitasi", 2: "Fasilitasi Minim", 3: "Cukup Membantu", 4: "Aktif Menjembatani Kemitraan", 5: "Fasilitator Sangat Solutif & Terpercaya" }
  },

  // IND_23: Kejelasan pembagian peran dan wewenang (UU 23/2014)
  {
    id: "Q_IND_23_pemda",
    id_indikator: "IND_23",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana kejelasan regulasi terkait pembagian kewenangan antara Pemerintah Kota (DKPP) dan Pemerintah Provinsi Banten (UU 23/2014) di wilayah perairan?",
    skala_label: { 1: "Sangat Tumpang Tindih & Membingungkan", 2: "Kerap Menimbulkan Keraguan", 3: "Cukup Jelas Batasannya", 4: "Sangat Jelas & Terkoordinasi", 5: "Harmonisasi Kewenangan Sangat Teratur & Tuntas" }
  },
  {
    id: "Q_IND_23_pelaku_usaha",
    id_indikator: "IND_23",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa jelas dan mudah dipahami pembagian tempat pengurusan izin atau kelengkapan surat kapal antara dinas perikanan kota dan kantor provinsi/syahbandar?",
    skala_label: { 1: "Sangat Membingungkan & Berbelit", 2: "Kurang Jelas Prosedurnya", 3: "Cukup Jelas Dipahami", 4: "Jelas & Mudah Diurus", 5: "Sangat Jelas, Mudah & Cepat" }
  },
  {
    id: "Q_IND_23_masyarakat_pesisir",
    id_indikator: "IND_23",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Apakah warga pesisir memahami secara jelas tugas kelurahan, dinas perikanan, dan aparat laut sehingga mudah saat butuh pertolongan?",
    skala_label: { 1: "Sama Sekali Tidak Paham", 2: "Sering Bingung", 3: "Cukup Tahu Kemana Melapor", 4: "Paham Jelas Alurnya", 5: "Sangat Paham & Layanan Sangat Jelas" }
  },
  {
    id: "Q_IND_23_akademisi_lsm",
    id_indikator: "IND_23",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana kejelasan jurisdiksi dan sinkronisasi pembagian wewenang antara Pemkot Cilegon dan Pemprov Banten (UU 23/2014) dalam tata kelola perikanan pesisir?",
    skala_label: { 1: "Vakum Regulasi / Tumpang Tindih Berat", 2: "Sinkronisasi Rendah", 3: "Cukup Jelas Pembagiannya", 4: "Batas Jurisdiksi Jelas", 5: "Tata Kelola Kolaboratif Lintas Hirarki Sangat Terpadu" }
  },
  {
    id: "Q_IND_23_industri",
    id_indikator: "IND_23",
    id_stakeholder_group: "industri",
    teks: "Bagaimana kejelasan batas wewenang perizinan kelautan antara Pemda Cilegon, Pemprov Banten, dan Kementerian Perhubungan (KSOP) bagi operasional industri?",
    skala_label: { 1: "Birokrasi Tumpang Tindih Parah", 2: "Sering Timbul Ketidakpastian", 3: "Cukup Jelas Alurnya", 4: "Jelas & Tertib Regulasi", 5: "Kepastian Regulasi Sangat Gamblang & Terpadu" }
  },

  // =========================================================================
  // V6: TINGKAT DUKUNGAN STAKEHOLDER (5 Indikator)
  // =========================================================================
  // IND_24: Penerimaan terhadap regulasi keberlanjutan
  {
    id: "Q_IND_24_pemda",
    id_indikator: "IND_24",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana komitmen instansi Anda dalam mendukung dan merealisasikan regulasi daerah tentang perlindungan dan keberlanjutan perikanan tangkap di Cilegon?",
    skala_label: { 1: "Sangat Tidak Berkomitmen", 2: "Dukungan Sangat Pasif", 3: "Cukup Mendukung", 4: "Komitmen Kuat Mendukung", 5: "Sangat Berkomitmen Menjadi Garda Terdepan" }
  },
  {
    id: "Q_IND_24_pelaku_usaha",
    id_indikator: "IND_24",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah Bapak/Ibu setuju dan menerima jika pemerintah membuat aturan pengelolaan laut demi kebaikan bersama dan rezeki nelayan ke depan?",
    skala_label: { 1: "Sangat Menolak Aturan Baru", 2: "Kurang Menerima", 3: "Menerima Asal Tidak Rugi", 4: "Setuju & Menerima Baik", 5: "Sangat Setuju, Ikhlas & Mendukung Penuh" }
  },
  {
    id: "Q_IND_24_masyarakat_pesisir",
    id_indikator: "IND_24",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana dukungan warga pesisir terhadap aturan dan kebijakan pemerintah dalam menata lingkungan pantai dan pelabuhan perikanan Cilegon?",
    skala_label: { 1: "Banyak yang Menolak/Protes", 2: "Kurang Mendukung", 3: "Cukup Menerima", 4: "Mendukung Tertib Pantai", 5: "Sangat Mendukung Penuh Kebijakan Pemda" }
  },
  {
    id: "Q_IND_24_akademisi_lsm",
    id_indikator: "IND_24",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana tingkat akseptabilitas dan komitmen institusi Anda (kampus / organisasi nelayan HNSI) terhadap kebijakan pengelolaan perikanan tangkap berkelanjutan di Cilegon?",
    skala_label: { 1: "Sangat Menolak / Skeptis", 2: "Kurang Mendukung", 3: "Mendukung Bersyarat", 4: "Menerima & Mendukung Baik", 5: "Sangat Mendukung Penuh & Berkomitmen Kuat" }
  },
  {
    id: "Q_IND_24_industri",
    id_indikator: "IND_24",
    id_stakeholder_group: "industri",
    teks: "Bagaimana komitmen manajemen korporasi dalam mendukung arah kebijakan pemda terkait pelestarian kawasan maritim dan perikanan tangkap pesisir?",
    skala_label: { 1: "Mengabaikan Kebijakan Pemda", 2: "Kepatuhan Terpaksa", 3: "Cukup Patuh Standar", 4: "Komitmen Manajemen Tinggi", 5: "Integrasi Penuh dalam Kebijakan Strategis Korporasi" }
  },

  // IND_25: Persetujuan tujuan keberlanjutan
  {
    id: "Q_IND_25_pemda",
    id_indikator: "IND_25",
    id_stakeholder_group: "pemda",
    teks: "Seberapa kuat persetujuan Anda bahwa perikanan tangkap Kota Cilegon harus dikelola dengan prinsip keberlanjutan demi anak cucu?",
    skala_label: { 1: "Sangat Tidak Setuju", 2: "Kurang Setuju", 3: "Netral/Cukup Setuju", 4: "Sangat Setuju", 5: "Mutlak Setuju Menjadi Amanah Bersama" }
  },
  {
    id: "Q_IND_25_pelaku_usaha",
    id_indikator: "IND_25",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah Bapak/Ibu setuju bahwa laut Cilegon harus dijaga agar ikannya tidak habis supaya anak cucu kita kelak masih bisa melaut dan makan ikan?",
    skala_label: { 1: "Sangat Tidak Setuju / Habiskan Saja", 2: "Kurang Peduli Masa Depan", 3: "Cukup Setuju", 4: "Setuju Harus Dijaga", 5: "Sangat Setuju Wajib Dijaga Demi Anak Cucu" }
  },
  {
    id: "Q_IND_25_masyarakat_pesisir",
    id_indikator: "IND_25",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Apakah warga sepakat bahwa menjaga kelestarian laut pesisir Cilegon sangat penting agar sumber rezeki nelayan tidak punah?",
    skala_label: { 1: "Tidak Peduli Laut", 2: "Kurang Peduli", 3: "Cukup Sepakat", 4: "Sepakat Wajib Dilindungi", 5: "Sangat Sepakat Menjadi Harga Mati" }
  },
  {
    id: "Q_IND_25_akademisi_lsm",
    id_indikator: "IND_25",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana keselarasan visi institusi Anda terhadap tujuan keberlanjutan perikanan tangkap dan perlindungan ekosistem laut di kawasan pesisir Cilegon?",
    skala_label: { 1: "Sangat Bertentangan / Tidak Selaras", 2: "Kurang Selaras", 3: "Cukup Selaras", 4: "Sangat Selaras & Sejalan", 5: "Sangat Sinergis Menjadi Visi Utama" }
  },
  {
    id: "Q_IND_25_industri",
    id_indikator: "IND_25",
    id_stakeholder_group: "industri",
    teks: "Seberapa sejalan tujuan keberlanjutan perikanan pesisir Cilegon dengan pilar Sustainability / CSR yang dicanangkan oleh korporasi Anda?",
    skala_label: { 1: "Bertolak Belakang", 2: "Kurang Relevan", 3: "Cukup Selaras", 4: "Sangat Sejalan", 5: "Menjadi KPI Utama Keberlanjutan Perusahaan" }
  },

  // IND_26: Kepatuhan terhadap aturan penangkapan
  {
    id: "Q_IND_26_pemda",
    id_indikator: "IND_26",
    id_stakeholder_group: "pemda",
    teks: "Sejauh mana aparatur instansi Anda mematuhi standar operasional prosedur dan etika pelayanan dalam tata kelola perikanan pesisir?",
    skala_label: { 1: "Sering Terjadi Pelanggaran SOP", 2: "Kepatuhan Kurang Konsisten", 3: "Sesuai Standar Minimal", 4: "Kepatuhan Tinggi & Tertib", 5: "Kepatuhan Sangat Tinggi / Zero Tolerance Pelanggaran" }
  },
  {
    id: "Q_IND_26_pelaku_usaha",
    id_indikator: "IND_26",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Sejauh mana kesediaan dan keikhlasan Bapak/Ibu untuk selalu mematuhi aturan melaut ramah lingkungan (tidak menangkap anakan ikan dan tidak merusak terumbu karang)?",
    skala_label: { 1: "Sangat Berat / Kerap Terpaksa Melanggar", 2: "Kurang Rela Mematuhi", 3: "Bersedia Patuh Sebagian", 4: "Ikhlas & Patuh Aturan", 5: "Sangat Rela, Ikhlas & Berkomitmen Penuh" }
  },
  {
    id: "Q_IND_26_masyarakat_pesisir",
    id_indikator: "IND_26",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana kepatuhan warga sekitar pantai untuk tidak membuang sampah ke laut dan menaati batas sempadan pantai?",
    skala_label: { 1: "Sampah Selalu Dibuang ke Laut", 2: "Kepatuhan Masih Rendah", 3: "Cukup Sadar Kebersihan", 4: "Warga Tertib Menjaga Pantai", 5: "Budaya Bersih Pantai Sangat Kuat" }
  },
  {
    id: "Q_IND_26_akademisi_lsm",
    id_indikator: "IND_26",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana komitmen institusi Anda dalam mendorong kepatuhan terhadap aturan perikanan ramah lingkungan serta perlindungan ruang laut di Cilegon?",
    skala_label: { 1: "Sangat Rendah / Diabaikan", 2: "Rendah", 3: "Cukup Berkomitmen", 4: "Tinggi & Disiplin", 5: "Sangat Tinggi & Menjadi Teladan Advokasi" }
  },
  {
    id: "Q_IND_26_industri",
    id_indikator: "IND_26",
    id_stakeholder_group: "industri",
    teks: "Bagaimana tingkat kepatuhan perusahaan Anda terhadap izin pembuangan limbah cair (IPLC), izin zonasi terminal khusus, dan baku mutu perairan?",
    skala_label: { 1: "Sering Ditegur DLH/KLHK", 2: "Masih Ada Catatan Audit", 3: "Memenuhi Syarat Minimal", 4: "Kepatuhan Tinggi (Proper Biru/Hijau)", 5: "Proper Emas / Kepatuhan Lingkungan Teladan" }
  },

  // IND_27: Kesediaan berkontribusi aktif
  {
    id: "Q_IND_27_pemda",
    id_indikator: "IND_27",
    id_stakeholder_group: "pemda",
    teks: "Seberapa besar kesiapan instansi Anda mengalokasikan anggaran, program aksi, dan pendampingan lapangan bagi kelestarian perikanan tangkap?",
    skala_label: { 1: "Tidak Ada Alokasi Anggaran", 2: "Dukungan Anggaran Minim", 3: "Anggaran Terbatas Standar", 4: "Alokasi Program Cukup Besar", 5: "Dukungan Anggaran & Fasilitas Sangat Maksimal" }
  },
  {
    id: "Q_IND_27_pelaku_usaha",
    id_indikator: "IND_27",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah Bapak/Ibu bersedia ikut serta membantu jika ada program penanaman mangrove, pemasangan rumpon bersama, atau bersih pantai?",
    skala_label: { 1: "Menolak Ikut Serta", 2: "Malas / Tidak Sempat", 3: "Ikut Jika Diberi Uang Lelah", 4: "Siap Menyumbang Tenaga", 5: "Sangat Siap Menjadi Relawan Terdepan" }
  },
  {
    id: "Q_IND_27_masyarakat_pesisir",
    id_indikator: "IND_27",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Apakah warga bersedia menyumbangkan tenaga dan waktu untuk menyukseskan program kebersihan dan kelestarian pantai kampung pesisir?",
    skala_label: { 1: "Cuek / Tidak Bersedia", 2: "Hanya Sedikit yang Mau", 3: "Mau Ikut Bergiliran", 4: "Guyub Turun Kerja Bakti", 5: "Semangat Swadaya Warga Sangat Tinggi" }
  },
  {
    id: "Q_IND_27_akademisi_lsm",
    id_indikator: "IND_27",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa siap institusi perguruan tinggi atau organisasi nelayan (HNSI) Anda menyediakan narasumber pakar, kajian kebijakan, atau pendampingan langsung bagi nelayan pesisir Cilegon?",
    skala_label: { 1: "Sama Sekali Belum Siap", 2: "Kurang Siap / Terkendala Sumber Daya", 3: "Cukup Siap", 4: "Siap Berkontribusi Aktif", 5: "Sangat Siap & Proaktif Mendampingi" }
  },
  {
    id: "Q_IND_27_industri",
    id_indikator: "IND_27",
    id_stakeholder_group: "industri",
    teks: "Seberapa besar kesiapan korporasi mengalokasikan dana CSR / program kemitraan untuk konservasi laut dan pemberdayaan nelayan Cilegon?",
    skala_label: { 1: "Nol Alokasi CSR Nelayan", 2: "Alokasi Sangat Kecil", 3: "Ada Program Reguler", 4: "Program CSR Berdampak Besar", 5: "Program Berkelanjutan Jangka Panjang & Anggaran Besar" }
  },

  // IND_28: Kesiapan berkolaborasi
  {
    id: "Q_IND_28_pemda",
    id_indikator: "IND_28",
    id_stakeholder_group: "pemda",
    teks: "Bagaimana keterbukaan instansi Anda untuk membentuk forum kemitraan kolaboratif (Pentahelix) pengelola pesisir bersama industri, kampus, dan nelayan?",
    skala_label: { 1: "Sangat Tertutup / Enggan Kolaborasi", 2: "Kurang Terbuka", 3: "Cukup Terbuka", 4: "Sangat Terbuka Berkolaborasi", 5: "Inisiator Utama Forum Kemitraan Multipihak" }
  },
  {
    id: "Q_IND_28_pelaku_usaha",
    id_indikator: "IND_28",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Apakah nelayan siap duduk bersama satu meja dengan pihak pabrik industri, dinas, dan pakar untuk mencari solusi masalah laut Cilegon?",
    skala_label: { 1: "Tidak Mau Bertemu Pihak Luar", 2: "Kurang Berminat", 3: "Bersedia Jika Dijamin Adil", 4: "Siap Duduk Musyawarah", 5: "Sangat Siap, Antusias & Terbuka Bekerja Sama" }
  },
  {
    id: "Q_IND_28_masyarakat_pesisir",
    id_indikator: "IND_28",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Bagaimana kesiapan tokoh masyarakat pesisir untuk bekerja sama dengan pihak luar demi kemajuan ekonomi pantai Cilegon?",
    skala_label: { 1: "Menutup Diri", 2: "Kurang Percaya Pihak Luar", 3: "Cukup Menyambut Baik", 4: "Terbuka Menjalin Kerja Sama", 5: "Sangat Terbuka & Ramah Bermitra" }
  },
  {
    id: "Q_IND_28_akademisi_lsm",
    id_indikator: "IND_28",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Bagaimana kesiapan institusi Anda untuk menjadi mitra strategis, penyalur aspirasi, dan fasilitator dalam forum kemitraan multipihak (Pentahelix) di Kota Cilegon?",
    skala_label: { 1: "Sangat Tidak Siap / Enggan Bergabung", 2: "Kurang Berminat", 3: "Cukup Siap Bekerja Sama", 4: "Siap Menjadi Mitra Konstruktif", 5: "Sangat Siap Memimpin Kolaborasi Multipihak" }
  },
  {
    id: "Q_IND_28_industri",
    id_indikator: "IND_28",
    id_stakeholder_group: "industri",
    teks: "Seberapa siap korporasi bergabung dalam forum komunikasi berkala bersama kelompok nelayan, akademisi, dan pemda di kawasan pesisir Cilegon?",
    skala_label: { 1: "Menolak Bergabung", 2: "Kurang Berminat Terikat Forum", 3: "Siap Hadir Pasif", 4: "Siap Berperan Aktif", 5: "Sangat Berkomitmen Menjadi Sponsor & Mitra Aktif" }
  },

  // =========================================================================
  // V7: INTENSITAS PARTISIPASI DALAM PENGAMBILAN KEPUTUSAN (5 Indikator)
  // =========================================================================
  // IND_29: Frekuensi kehadiran dalam rapat
  {
    id: "Q_IND_29_pemda",
    id_indikator: "IND_29",
    id_stakeholder_group: "pemda",
    teks: "Seberapa sering Anda menghadiri atau menyelenggarakan rapat koordinasi berkala terkait pengelolaan sektor kelautan dan perikanan tangkap?",
    skala_label: { 1: "Tidak Pernah (0%)", 2: "Jarang Sekali (1-2x/tahun)", 3: "Kadang-kadang (Tiap Triwulan)", 4: "Sering (Tiap Bulan)", 5: "Sangat Sering (Rutin Mingguan)" }
  },
  {
    id: "Q_IND_29_pelaku_usaha",
    id_indikator: "IND_29",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa sering Bapak/Ibu ikut kumpul rapat, musyawarah pangkalan, atau pertemuan kelompok nelayan di kampung?",
    skala_label: { 1: "Tidak Pernah Ikut Kumpul", 2: "Jarang Sekali", 3: "Kadang-kadang Ikut", 4: "Sering Hadir", 5: "Sangat Sering / Selalu Hadir Aktif" }
  },
  {
    id: "Q_IND_29_masyarakat_pesisir",
    id_indikator: "IND_29",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa sering Anda hadir dalam musyawarah warga kelurahan atau rembuk warga terkait isu-isu pesisir dan pantai?",
    skala_label: { 1: "Tidak Pernah Datang", 2: "Jarang Sekali", 3: "Kadang Hadir", 4: "Sering Mengikuti", 5: "Selalu Hadir Aktif di Garis Depan" }
  },
  {
    id: "Q_IND_29_akademisi_lsm",
    id_indikator: "IND_29",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa sering Anda atau perwakilan institusi menghadiri rapat koordinasi kebijakan, forum ilmiah, atau pertemuan nelayan mengenai kelautan Selat Sunda dan Kota Cilegon?",
    skala_label: { 1: "Tidak Pernah (0%)", 2: "Jarang Sekali", 3: "Kadang-kadang Hadir", 4: "Sering Berpartisipasi", 5: "Sangat Sering & Selalu Hadir Aktif" }
  },
  {
    id: "Q_IND_29_industri",
    id_indikator: "IND_29",
    id_stakeholder_group: "industri",
    teks: "Seberapa intens perwakilan perusahaan menghadiri pertemuan koordinasi pemangku kepentingan maritim yang difasilitasi pemda/otoritas pelabuhan?",
    skala_label: { 1: "Tidak Pernah Hadir", 2: "Jarang Mengirim Utusan", 3: "Hadir Jika Diwajibkan Saja", 4: "Rutin Menghadiri", 5: "Selalu Hadir Proaktif & Memberi Masukan" }
  },

  // IND_30: Keterlibatan dalam konsultasi publik
  {
    id: "Q_IND_30_pemda",
    id_indikator: "IND_30",
    id_stakeholder_group: "pemda",
    teks: "Sejauh mana Anda terlibat aktif dalam penyelenggaraan konsultasi publik perumusan rancangan Perda, RTRW pesisir, atau zonasi laut Cilegon?",
    skala_label: { 1: "Tidak Pernah Terlibat", 2: "Hanya Panitia Pasif", 3: "Terlibat Terbatas", 4: "Terlibat Sangat Aktif", 5: "Penanggung Jawab / Narasumber Kunci" }
  },
  {
    id: "Q_IND_30_pelaku_usaha",
    id_indikator: "IND_30",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa sering Bapak/Ibu atau perwakilan KUB diundang dalam musyawarah atau konsultasi publik oleh pemerintah untuk membahas rencana aturan kelautan di Cilegon?",
    skala_label: { 1: "Tidak Pernah Diundang (0%)", 2: "Jarang Sekali", 3: "Kadang-kadang Diundang", 4: "Sering Diundang Rembukan", 5: "Sangat Sering & Selalu Jadi Utusan Utama" }
  },
  {
    id: "Q_IND_30_masyarakat_pesisir",
    id_indikator: "IND_30",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa sering perwakilan warga atau tokoh masyarakat pesisir diikutsertakan dalam forum konsultasi publik penataan pantai dan perizinan kelautan di Cilegon?",
    skala_label: { 1: "Tidak Pernah Diundang", 2: "Jarang Sekali", 3: "Kadang Diberi Tahu", 4: "Sering Diajak Bicara", 5: "Selalu Jadi Peserta Utama Konsultasi" }
  },
  {
    id: "Q_IND_30_akademisi_lsm",
    id_indikator: "IND_30",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa sering institusi Anda diundang sebagai narasumber ahli atau perwakilan organisasi nelayan dalam konsultasi publik kebijakan dan penataan ruang pesisir Cilegon?",
    skala_label: { 1: "Tidak Pernah Diundang", 2: "Jarang Sekali Diundang", 3: "Kadang-kadang Diundang", 4: "Sering Dimintai Masukan", 5: "Sangat Sering & Menjadi Rujukan Utama" }
  },
  {
    id: "Q_IND_30_industri",
    id_indikator: "IND_30",
    id_stakeholder_group: "industri",
    teks: "Seberapa aktif perwakilan korporasi memberikan telaah teknis dalam agenda konsultasi publik regulasi lingkungan pesisir di Kota Cilegon?",
    skala_label: { 1: "Pasif Total / Tanpa Tanggapan", 2: "Tanggapan Formalitas", 3: "Memberi Catatan Terbatas", 4: "Aktif Memberi Telaah Kritis", 5: "Mitra Konsultasi Sangat Strategis" }
  },

  // IND_31: Keaktifan menyampaikan aspirasi
  {
    id: "Q_IND_31_pemda",
    id_indikator: "IND_31",
    id_stakeholder_group: "pemda",
    teks: "Seberapa aktif Anda menindaklanjuti dan mengadvokasikan aspirasi nelayan pesisir dalam rapat-rapat pimpinan Pemkot Cilegon?",
    skala_label: { 1: "Tidak Pernah Membawa Masalah Nelayan", 2: "Jarang Diperjuangkan", 3: "Kadang Disampaikan", 4: "Sering Memperjuangkan", 5: "Selalu Jadi Prioritas Usulan Dinas" }
  },
  {
    id: "Q_IND_31_pelaku_usaha",
    id_indikator: "IND_31",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa sering Bapak/Ibu atau kelompok nelayan menyampaikan aspirasi, keluhan masalah melaut, atau usulan kebutuhan kepada pihak dinas maupun wakil rakyat?",
    skala_label: { 1: "Tidak Pernah Menyampaikan", 2: "Jarang Sekali", 3: "Kadang-kadang Bersuara", 4: "Sering Menyampaikan Usulan", 5: "Sangat Sering & Aktif Bersuara" }
  },
  {
    id: "Q_IND_31_masyarakat_pesisir",
    id_indikator: "IND_31",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa sering warga atau tokoh masyarakat pesisir menyampaikan aspirasi dan kebutuhan pembangunan kampung nelayan kepada kelurahan maupun dinas terkait?",
    skala_label: { 1: "Diam Saja / Pasrah", 2: "Jarang Mengadu", 3: "Kadang Menyampaikan Keluhan", 4: "Rajin Mengusulkan Program", 5: "Sangat Aktif, Kritis & Gigih Memperjuangkan Hak Warga" }
  },
  {
    id: "Q_IND_31_akademisi_lsm",
    id_indikator: "IND_31",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa intensif Anda menyampaikan telaah akademis, rekomendasi kebijakan, atau pernyataan advokasi publik menyuarakan hak nelayan dan isu kelautan di Cilegon?",
    skala_label: { 1: "Tidak Pernah Menyampaikan", 2: "Jarang Sekali Menyampaikan", 3: "Kadang-kadang Memberi Telaah", 4: "Sering Menyampaikan Masukan Kritis", 5: "Sangat Intensif & Konsisten Beradvokasi" }
  },
  {
    id: "Q_IND_31_industri",
    id_indikator: "IND_31",
    id_stakeholder_group: "industri",
    teks: "Seberapa sering industri menyampaikan saran teknis, data emisi/limbah, atau masukan penataan laut kepada Pemkot dan otoritas pelabuhan?",
    skala_label: { 1: "Tidak Pernah Bersurat", 2: "Jarang Memberi Masukan", 3: "Memberi Laporan Berkala Saja", 4: "Proaktif Menyampaikan Rekomendasi", 5: "Sangat Intensif Berkoordinasi Teknis" }
  },

  // IND_32: Keterlibatan dalam perumusan kebijakan
  {
    id: "Q_IND_32_pemda",
    id_indikator: "IND_32",
    id_stakeholder_group: "pemda",
    teks: "Sejauh mana Anda terlibat langsung dalam penyusunan draf regulasi daerah (Perda/Perwal/Kepdis) terkait pengelolaan perikanan tangkap?",
    skala_label: { 1: "Tidak Pernah Terlibat", 2: "Hanya Mengetahui Hasil Akhir", 3: "Memberi Masukan Parsial", 4: "Tim Inti Perumus Regulasi", 5: "Inisiator Utama & Pengonsep Kebijakan" }
  },
  {
    id: "Q_IND_32_pelaku_usaha",
    id_indikator: "IND_32",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa sering usulan dan masukan nyata dari kalangan nelayan diakomodasi dan dijadikan dasar pertimbangan dalam penyusunan aturan atau program perikanan Cilegon?",
    skala_label: { 1: "Tidak Pernah Diakomodasi", 2: "Jarang Sekali Diakomodasi", 3: "Kadang-kadang Dipertimbangkan", 4: "Sering Diterima Baik", 5: "Selalu Diakomodasi & Diwujudkan Nyata" }
  },
  {
    id: "Q_IND_32_masyarakat_pesisir",
    id_indikator: "IND_32",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa sering perwakilan warga pesisir dilibatkan sejak tahap perencanaan awal dalam merumuskan program penataan dan pemberdayaan pesisir Cilegon?",
    skala_label: { 1: "Sama Sekali Tidak Pernah", 2: "Jarang Dilibatkan Sejak Awal", 3: "Kadang Diajak Urun Rembuk", 4: "Sering Diajak Menyusun Usulan", 5: "Selalu Jadi Mitra Kunci Perencanaan Lapangan" }
  },
  {
    id: "Q_IND_32_akademisi_lsm",
    id_indikator: "IND_32",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Sejauh mana Anda terlibat sebagai tim pakar, narasumber perumus, atau penyusun aspirasi dalam proses perumusan regulasi pengelolaan perikanan di Cilegon?",
    skala_label: { 1: "Sama Sekali Tidak Terlibat", 2: "Keterlibatan Sangat Minim", 3: "Terlibat dalam Tahap Tertentu", 4: "Terlibat Aktif Memberi Masukan", 5: "Terlibat Sangat Intensif Sejak Awal" }
  },
  {
    id: "Q_IND_32_industri",
    id_indikator: "IND_32",
    id_stakeholder_group: "industri",
    teks: "Sejauh mana perwakilan industri dilibatkan dalam Focus Group Discussion (FGD) atau perumusan regulasi maritim bersama regulator daerah?",
    skala_label: { 1: "Tidak Pernah Diundang", 2: "Hanya Hadir Pasif", 3: "Memberi Pandangan Terbatas", 4: "Kontributor Aktif Solusi Maritim", 5: "Mitra Kunci Perumusan Blueprint Regulasi" }
  },

  // IND_33: Keterlibatan pengawasan dan monev
  {
    id: "Q_IND_33_pemda",
    id_indikator: "IND_33",
    id_stakeholder_group: "pemda",
    teks: "Seberapa sering Anda melaksanakan kegiatan monitoring dan evaluasi (Monev) berkala terhadap implementasi program kelautan-perikanan di lapangan?",
    skala_label: { 1: "Tidak Pernah Monev Lapangan", 2: "Jarang Sekali (Tahunan)", 3: "Monev Semesteran", 4: "Rutin Tiap Triwulan", 5: "Inspeksi Lapangan Sangat Rutin & Berkelanjutan" }
  },
  {
    id: "Q_IND_33_pelaku_usaha",
    id_indikator: "IND_33",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa aktif Bapak/Ibu ikut terlibat dalam menjaga kelestarian laut (seperti Pokmaswas, ronda laut, atau melaporkan pencemaran dan kapal perusak)?",
    skala_label: { 1: "Tidak Pernah Terlibat", 2: "Jarang Sekali Terlibat", 3: "Kadang-kadang Ikut Ronda", 4: "Sering Aktif Memantau", 5: "Sangat Sering & Selalu Siaga Menjaga Laut" }
  },
  {
    id: "Q_IND_33_masyarakat_pesisir",
    id_indikator: "IND_33",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa aktif warga pesisir dilibatkan dalam kegiatan pengawasan lingkungan pantai dan evaluasi pelaksanaan program perikanan di lingkungannya?",
    skala_label: { 1: "Tidak Pernah Dilibatkan", 2: "Kurang Berperan", 3: "Kadang Ikut Meninjau", 4: "Sering Dilibatkan Pengawasan", 5: "Menjadi Pengawas Lapangan Utama yang Sangat Kritis" }
  },
  {
    id: "Q_IND_33_akademisi_lsm",
    id_indikator: "IND_33",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa intensif Anda melakukan pemantauan lapangan, evaluasi independen, atau pengawasan terhadap implementasi kebijakan perikanan tangkap di Cilegon?",
    skala_label: { 1: "Tidak Pernah Melakukan", 2: "Jarang Sekali", 3: "Kadang-kadang Memantau", 4: "Rutin Melakukan Monev/Kajian", 5: "Sangat Intensif Melakukan Pengawasan & Evaluasi" }
  },
  {
    id: "Q_IND_33_industri",
    id_indikator: "IND_33",
    id_stakeholder_group: "industri",
    teks: "Seberapa intensif korporasi terlibat dalam program monitoring lingkungan bersama dan audit berkala perairan pesisir Cilegon?",
    skala_label: { 1: "Tidak Pernah Mengikuti Audit Bersama", 2: "Audit Minimal Internal", 3: "Ikut Audit Berkala Standar", 4: "Aktif dalam Monitoring Terpadu", 5: "Pelopor Sistem Monitoring Lingkungan Real-Time" }
  },

  // =========================================================================
  // V8: KEPENTINGAN (INTEREST) STAKEHOLDER (4 Indikator)
  // =========================================================================
  // IND_34: Ketergantungan terhadap sumber daya perikanan
  {
    id: "Q_IND_34_pemda",
    id_indikator: "IND_34",
    id_stakeholder_group: "pemda",
    teks: "Seberapa penting keberhasilan pembangunan perikanan tangkap pesisir dalam menunjang pencapaian indikator kinerja utama (IKU) Pemkot Cilegon?",
    skala_label: { 1: "Sangat Rendah / Tidak Signifikan", 2: "Rendah", 3: "Sedang", 4: "Tinggi / Prioritas Daerah", 5: "Sangat Tinggi / Sektor Strategis Kunci" }
  },
  {
    id: "Q_IND_34_pelaku_usaha",
    id_indikator: "IND_34",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa besar pemenuhan kebutuhan ekonomi dan kelangsungan hidup keluarga Bapak/Ibu bergantung sepenuhnya pada hasil melaut di perairan Cilegon?",
    skala_label: { 1: "Sangat Rendah (Bukan Sumber Pokok)", 2: "Rendah (Hanya Sampingan)", 3: "Sedang (Sekitar 50%)", 4: "Tinggi (Sumber Pendapatan Utama)", 5: "Sangat Tinggi (100% Menggantungkan Hidup)" }
  },
  {
    id: "Q_IND_34_masyarakat_pesisir",
    id_indikator: "IND_34",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa besar roda perputaran ekonomi warung, kontrakan, dan pasar di kampung pesisir bergantung pada hasil tangkapan nelayan?",
    skala_label: { 1: "Tidak Bergantung Sama Sekali", 2: "Pengaruh Kecil", 3: "Cukup Berpengaruh", 4: "Sangat Berpengaruh", 5: "Sangat Bergantung Total pada Denyut Nelayan" }
  },
  {
    id: "Q_IND_34_akademisi_lsm",
    id_indikator: "IND_34",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa tinggi keterkaitan mandat keorganisasian atau fokus riset institusi Anda terhadap dinamika sumber daya dan aktivitas perikanan pesisir Cilegon?",
    skala_label: { 1: "Sangat Rendah / Tidak Relevan", 2: "Rendah", 3: "Sedang", 4: "Tinggi / Menjadi Fokus Utama", 5: "Sangat Tinggi / Merupakan Mandat Pokok" }
  },
  {
    id: "Q_IND_34_industri",
    id_indikator: "IND_34",
    id_stakeholder_group: "industri",
    teks: "Seberapa krusial kelancaran pemanfaatan alur laut dan kondisi perairan pesisir bagi kelangsungan operasional pabrik/dermaga korporasi Anda?",
    skala_label: { 1: "Tidak Berpengaruh Langsung", 2: "Tingkat Ketergantungan Rendah", 3: "Cukup Penting", 4: "Sangat Krusial bagi Logistik", 5: "Vital & Menentukan Mati-Hidupnya Operasional Pabrik" }
  },

  // IND_35: Kepentingan sosial budaya & eksistensi
  {
    id: "Q_IND_35_pemda",
    id_indikator: "IND_35",
    id_stakeholder_group: "pemda",
    teks: "Seberapa penting pelestarian kearifan lokal maritim dan tradisi pesisir Cilegon sebagai identitas budaya daerah dalam perspektif Pemkot?",
    skala_label: { 1: "Sangat Rendah", 2: "Kurang Penting", 3: "Cukup Penting", 4: "Penting / Aset Budaya", 5: "Sangat Penting Menjadi Warisan Luhur Daerah" }
  },
  {
    id: "Q_IND_35_pelaku_usaha",
    id_indikator: "IND_35",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa berharga profesi nelayan dan tradisi adat laut bagi Bapak/Ibu sebagai kehormatan dan warisan leluhur orang pesisir Cilegon?",
    skala_label: { 1: "Tidak Berharga / Terpaksa Saja", 2: "Kurang Bermakna", 3: "Cukup Berharga", 4: "Sangat Dihargai & Bernilai", 5: "Kehormatan Tertinggi Warisan Leluhur Pesisir" }
  },
  {
    id: "Q_IND_35_masyarakat_pesisir",
    id_indikator: "IND_35",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa penting menjaga tradisi kampung nelayan dan kebersamaan warga pantai Cilegon agar tidak hilang digerus zaman?",
    skala_label: { 1: "Biar Hilang Saja", 2: "Kurang Penting", 3: "Cukup Penting", 4: "Penting Dilestarikan", 5: "Mutlak Dijaga Demi Harga Diri Warga Kampung" }
  },
  {
    id: "Q_IND_35_akademisi_lsm",
    id_indikator: "IND_35",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa penting pelestarian kearifan lokal, tradisi melaut, dan perlindungan hak nelayan pesisir Cilegon dalam pandangan institusi Anda?",
    skala_label: { 1: "Sangat Tidak Penting", 2: "Kurang Penting", 3: "Cukup Penting", 4: "Sangat Penting Dilindungi", 5: "Sangat Krusial / Wajib Dipertahankan" }
  },
  {
    id: "Q_IND_35_industri",
    id_indikator: "IND_35",
    id_stakeholder_group: "industri",
    teks: "Seberapa penting bagi korporasi untuk menjaga citra sosial, harmoni budaya, dan penerimaan masyarakat lokal di pesisir Cilegon (Social License to Operate)?",
    skala_label: { 1: "Tidak Dianggap Penting", 2: "Kurang Signifikan", 3: "Cukup Penting", 4: "Sangat Penting bagi Reputasi", 5: "Harga Mutlak bagi Keberlanjutan Investasi Perusahaan" }
  },

  // IND_36: Keterdampakan oleh perubahan regulasi
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
    teks: "Jika terjadi perubahan kebijakan (seperti penataan jalur lintas kapal industri atau penyesuaian harga solar subsidi), seberapa besar dampaknya langsung terhadap kegiatan dan pendapatan melaut Bapak/Ibu?",
    skala_label: { 1: "Sama Sekali Tidak Terdampak", 2: "Dampak Ringan", 3: "Cukup Berdampak", 4: "Berdampak Sangat Besar", 5: "Dampak Sangat Kritis Mengancam Usaha Melaut" }
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
    teks: "Seberapa besar kebijakan pengelolaan laut Cilegon memengaruhi efektivitas advokasi nelayan atau ketercapaian luaran program riset institusi Anda?",
    skala_label: { 1: "Sama Sekali Tidak Berpengaruh", 2: "Pengaruh Kecil", 3: "Cukup Memengaruhi", 4: "Berpengaruh Besar pada Luaran Program", 5: "Sangat Berpengaruh Strategis Menentukan Keberhasilan" }
  },
  {
    id: "Q_IND_36_industri",
    id_indikator: "IND_36",
    id_stakeholder_group: "industri",
    teks: "Seberapa besar pengaruh perubahan regulasi tata ruang laut dan lingkungan terhadap struktur biaya operasional dan kepatuhan korporasi?",
    skala_label: { 1: "Tidak Berpengaruh", 2: "Pengaruh Minor", 3: "Pengaruh Sedang", 4: "Berpengaruh Signifikan", 5: "Sangat Berdampak Kritis pada Kelangsungan Investasi" }
  },

  // IND_37: Tingkat perhatian pada dinamika kebijakan
  {
    id: "Q_IND_37_pemda",
    id_indikator: "IND_37",
    id_stakeholder_group: "pemda",
    teks: "Seberapa tinggi antusiasme instansi Anda dalam memantau dan mengkaji setiap terbitnya regulasi baru terkait kelautan dan perikanan?",
    skala_label: { 1: "Sangat Pasif / Mengabaikan", 2: "Kurang Mengikuti", 3: "Memantau Rutin Standar", 4: "Sangat Antusias Mengkaji", 5: "Proaktif Melakukan Telaah Regulasi Cepat" }
  },
  {
    id: "Q_IND_37_pelaku_usaha",
    id_indikator: "IND_37",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa sering Bapak/Ibu mencari tahu kabar terbaru soal aturan melaut, bantuan pemerintah, atau harga solar laut?",
    skala_label: { 1: "Masa Bodoh / Tidak Mau Tahu", 2: "Jarang Mencari Tahu", 3: "Menunggu Kabar Rekan", 4: "Rajin Bertanya & Mencari Tahu", 5: "Selalu Siaga Mengikuti Setiap Perkembangan" }
  },
  {
    id: "Q_IND_37_masyarakat_pesisir",
    id_indikator: "IND_37",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa besar rasa ingin tahu dan perhatian warga kampung terhadap berita rencana pembangunan baru di pesisir Cilegon?",
    skala_label: { 1: "Cuek Saja", 2: "Kurang Tertarik", 3: "Cukup Menyimak", 4: "Sangat Ingin Tahu", 5: "Selalu Mengikuti Perkembangan dengan Sangat Teliti" }
  },
  {
    id: "Q_IND_37_akademisi_lsm",
    id_indikator: "IND_37",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa intensif Anda memonitor tren kebijakan nasional (seperti Penangkapan Ikan Terukur - PIT dan zonasi perairan) serta dampaknya di Kota Cilegon?",
    skala_label: { 1: "Tidak Pernah Memonitor", 2: "Jarang Memperhatikan", 3: "Cukup Memonitor Isu Pokok", 4: "Rutin Mengkaji Perkembangan", 5: "Sangat Intensif & Menjadi Bahan Analisis Utama" }
  },
  {
    id: "Q_IND_37_industri",
    id_indikator: "IND_37",
    id_stakeholder_group: "industri",
    teks: "Seberapa proaktif tim legal/HSE korporasi melakukan regulatory compliance tracking terkait regulasi maritim dan pesisir daerah?",
    skala_label: { 1: "Sangat Reaktif (Menunggu Sanksi)", 2: "Kurang Proaktif", 3: "Memantau Standar", 4: "Proaktif & Teratur", 5: "Sistem Compliance Tracking Sangat Terintegrasi & Cepat" }
  },

  // =========================================================================
  // V9: PENGARUH (INFLUENCE) STAKEHOLDER (5 Indikator)
  // =========================================================================
  // IND_38: Kekuatan kewenangan formal
  {
    id: "Q_IND_38_pemda",
    id_indikator: "IND_38",
    id_stakeholder_group: "pemda",
    teks: "Seberapa kuat mandat hukum dan kewenangan legal yang dimiliki instansi Anda dalam mengatur, mengendalikan, dan menerbitkan izin sektor perikanan pesisir Cilegon?",
    skala_label: { 1: "Sangat Lemah / Tidak Punya Wewenang", 2: "Wewenang Sangat Terbatas", 3: "Kewenangan Cukup Memadai", 4: "Kewenangan Kuat", 5: "Kewenangan Sangat Mutlak & Menentukan Regulasi" }
  },
  {
    id: "Q_IND_38_pelaku_usaha",
    id_indikator: "IND_38",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa dipatuhi aturan bersama, etika melaut, dan kesepakatan pangkalan nelayan oleh rekan-rekan nelayan di lingkungan Bapak/Ibu?",
    skala_label: { 1: "Sangat Lemah / Sering Diabaikan", 2: "Kurang Dipatuhi", 3: "Cukup Ditaati", 4: "Kuat Ditaati Sebagian Besar", 5: "Sangat Kuat & Disegani Seluruh Nelayan" }
  },
  {
    id: "Q_IND_38_masyarakat_pesisir",
    id_indikator: "IND_38",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa besar pengaruh wibawa tokoh sesepuh pesisir dan lurah dalam mengatur ketertiban lingkungan kampung nelayan?",
    skala_label: { 1: "Tidak Punya Wibawa", 2: "Kurang Didengar", 3: "Cukup Dihormati", 4: "Sangat Disegani Warga", 5: "Kharisma & Wibawa Sangat Mutlak Dipatuhi" }
  },
  {
    id: "Q_IND_38_akademisi_lsm",
    id_indikator: "IND_38",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa kuat legitimasi keilmuan atau mandat keorganisasian nelayan yang dimiliki institusi Anda dalam memengaruhi arah kebijakan perikanan di Cilegon?",
    skala_label: { 1: "Sangat Lemah / Tidak Didengar", 2: "Kurang Kuat Pengaruhnya", 3: "Cukup Diperhitungkan", 4: "Kuat & Memiliki Bobot Pengaruh", 5: "Sangat Kuat, Memiliki Otoritas Keilmuan/Mandat Tinggi" }
  },
  {
    id: "Q_IND_38_industri",
    id_indikator: "IND_38",
    id_stakeholder_group: "industri",
    teks: "Seberapa kuat legalitas hak pengelolaan lahan/perairan pelabuhan yang dipegang perusahaan dalam mengatur zona operasional industri?",
    skala_label: { 1: "Banyak Masalah Legalitas", 2: "Hak Terbatas", 3: "Izin Standar Terpenuhi", 4: "Dasar Hukum Kuat", 5: "Konsesi/Hak Legal Sangat Eksklusif & Dilindungi Negara" }
  },

  // IND_39: Akses langsung ke pengambil keputusan
  {
    id: "Q_IND_39_pemda",
    id_indikator: "IND_39",
    id_stakeholder_group: "pemda",
    teks: "Seberapa mudah Anda berkoordinasi dan mengakses pengambil keputusan puncak (Walikota/Sekda/DPRD) untuk meloloskan kebijakan perikanan?",
    skala_label: { 1: "Sangat Sulit / Ditolak Terus", 2: "Akses Cukup Berliku", 3: "Akses Formal Terbuka", 4: "Mudah Mengakses Pimpinan", 5: "Sangat Dekat & Pengambil Keputusan Sangat Responsif" }
  },
  {
    id: "Q_IND_39_pelaku_usaha",
    id_indikator: "IND_39",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa mudah bagi perwakilan nelayan atau ketua KUB untuk berkomunikasi dan menyampaikan aspirasi langsung kepada pejabat dinas atau pimpinan daerah?",
    skala_label: { 1: "Sangat Sulit / Tertutup Rapat", 2: "Sulit Mendapat Akses", 3: "Cukup Bisa Ditemui", 4: "Mudah Ditemui & Responsif", 5: "Sangat Mudah, Terbuka & Cepat Direspons" }
  },
  {
    id: "Q_IND_39_masyarakat_pesisir",
    id_indikator: "IND_39",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa mudah bagi perwakilan warga pesisir untuk berkomunikasi dan mendapatkan respons dari aparat kelurahan maupun dinas perikanan saat menghadapi persoalan pesisir?",
    skala_label: { 1: "Sangat Sulit Menghubungi", 2: "Lambat Direspons", 3: "Bisa Dihubungi Jam Kerja", 4: "Mudah Berkomunikasi", 5: "Akses 24 Jam Cepat & Selalu Ditanggapi" }
  },
  {
    id: "Q_IND_39_akademisi_lsm",
    id_indikator: "IND_39",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa terbuka akses komunikasi dan audiensi institusi Anda dengan pimpinan pengambil kebijakan di Pemkot Cilegon maupun instansi maritim terkait?",
    skala_label: { 1: "Sangat Tertutup / Sulit Berkomunikasi", 2: "Akses Cukup Terbatas", 3: "Cukup Terbuka Melalui Jalur Formal", 4: "Akses Terbuka & Komunikasi Lancar", 5: "Sangat Terbuka, Cepat & Memiliki Akses Langsung" }
  },
  {
    id: "Q_IND_39_industri",
    id_indikator: "IND_39",
    id_stakeholder_group: "industri",
    teks: "Seberapa lancar akses jalur komunikasi tingkat pimpinan korporasi dengan Walikota, Kementerian, dan Forkopimda Cilegon?",
    skala_label: { 1: "Jalur Birokrasi Tertutup", 2: "Kurang Lancar", 3: "Jalur Formal Standar", 4: "Komunikasi Sangat Lancar", 5: "Akses Langsung ke Para Pengambil Keputusan Puncak" }
  },

  // IND_40: Penguasaan data riset & teknologi informasi
  {
    id: "Q_IND_40_pemda",
    id_indikator: "IND_40",
    id_stakeholder_group: "pemda",
    teks: "Seberapa lengkap penguasaan basis data statistik, sistem informasi geospasial kelautan (GIS), dan keahlian teknis staf perikanan dinas?",
    skala_label: { 1: "Sangat Minim / Tidak Punya Database", 2: "Data Manual Tercecer", 3: "Database Cukup Memadai", 4: "Sistem GIS & Data Lengkap", 5: "Big Data Kelautan Sangat Modern & Akurat" }
  },
  {
    id: "Q_IND_40_pelaku_usaha",
    id_indikator: "IND_40",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa baik pemahaman dan keterampilan nelayan di kelompok Bapak/Ibu dalam menguasai navigasi laut, informasi perkiraan cuaca BMKG, serta alat bantu penangkapan ikan?",
    skala_label: { 1: "Sangat Terbatas / Buta Navigasi Modern", 2: "Kurang Menguasai", 3: "Cukup Paham Navigasi Dasar", 4: "Paham Baik & Terampil", 5: "Sangat Mahir, Terampil & Berpengalaman Luas" }
  },
  {
    id: "Q_IND_40_masyarakat_pesisir",
    id_indikator: "IND_40",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa cepat dan mudah warga pesisir mendapatkan informasi resmi peringatan dini cuaca laut, pasang rob, maupun arahan keselamatan dari instansi berwenang?",
    skala_label: { 1: "Tidak Pernah Dapat Peringatan", 2: "Sering Terlambat Tahu", 3: "Cukup Cepat Melalui HP/Pengeras", 4: "Informasi Cepat Diterima", 5: "Peringatan Dini Real-Time & Sangat Sigap" }
  },
  {
    id: "Q_IND_40_akademisi_lsm",
    id_indikator: "IND_40",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa unggul penguasaan data ilmiah, kajian teknis, atau pemahaman mendalam tentang kondisi riil perikanan pesisir Cilegon pada institusi Anda?",
    skala_label: { 1: "Sangat Terbatas / Minim Data", 2: "Kurang Lengkap Datanya", 3: "Cukup Memadai untuk Analisis Dasar", 4: "Lengkap, Berbasis Data Riset/Lapangan", 5: "Sangat Komprehensif, Akurat & Menjadi Pusat Rujukan" }
  },
  {
    id: "Q_IND_40_industri",
    id_indikator: "IND_40",
    id_stakeholder_group: "industri",
    teks: "Seberapa mutakhir instrumen teknologi monitoring lingkungan, sensor real-time, dan keahlian teknis HSE yang dimiliki korporasi?",
    skala_label: { 1: "Teknologi Usang", 2: "Instrumen Masih Manual", 3: "Memenuhi Standar Audit", 4: "Sensor Modern & Canggih", 5: "Teknologi Smart Monitoring Terdepan & Presisi Tinggi" }
  },

  // IND_41: Kapasitas mobilisasi sumber daya
  {
    id: "Q_IND_41_pemda",
    id_indikator: "IND_41",
    id_stakeholder_group: "pemda",
    teks: "Seberapa besar kekuatan dinas dalam menggerakkan alokasi anggaran APBD/APBN dan pengerahan personel pengawas di wilayah pesisir?",
    skala_label: { 1: "Sangat Lemah / Nol Anggaran", 2: "Kapasitas Mobilisasi Rendah", 3: "Cukup Mampu Menggerakkan", 4: "Kapasitas Mobilisasi Kuat", 5: "Kapasitas Mobilisasi Sangat Besar & Efektif" }
  },
  {
    id: "Q_IND_41_pelaku_usaha",
    id_indikator: "IND_41",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa kompak dan cepat rekan-rekan nelayan dapat berkumpul dan bergotong royong apabila ada musyawarah bersama, kegiatan adat laut, atau upaya membela hak nelayan?",
    skala_label: { 1: "Sangat Sulit Kumpul / Renggang", 2: "Lambat & Sedikit yang Datang", 3: "Cukup Kompak Berkumpul", 4: "Kompak & Cepat Tanggap", 5: "Sangat Kompak, Cepat & Siaga Penuh" }
  },
  {
    id: "Q_IND_41_masyarakat_pesisir",
    id_indikator: "IND_41",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa kuat semangat gotong royong dan kesiapan warga pesisir Cilegon jika dikerahkan untuk kegiatan kerja bakti massal?",
    skala_label: { 1: "Sangat Pasif / Tidak Mau Turun", 2: "Sedikit yang Ikut", 3: "Cukup Ramai", 4: "Kompak Turun ke Lapangan", 5: "Semangat Solidaritas Warga Sangat Dahsyat" }
  },
  {
    id: "Q_IND_41_akademisi_lsm",
    id_indikator: "IND_41",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa mampu institusi Anda memobilisasi sumber daya (tenaga ahli, peneliti, jaringan pengurus/anggota nelayan) untuk mendukung perikanan berkelanjutan di Cilegon?",
    skala_label: { 1: "Sama Sekali Tidak Mampu", 2: "Kapasitas Mobilisasi Rendah", 3: "Cukup Mampu Menggerakkan Anggota/Pakar", 4: "Mampu Memobilisasi Sumber Daya dengan Baik", 5: "Sangat Mampu Menggerakkan Jaringan Luas & Solid" }
  },
  {
    id: "Q_IND_41_industri",
    id_indikator: "IND_41",
    id_stakeholder_group: "industri",
    teks: "Seberapa besar kemampuan korporasi mengerahkan sumber daya finansial, armada kapal tunda, dan peralatan tanggap darurat tumpahan minyak di laut?",
    skala_label: { 1: "Sangat Terbatas", 2: "Kapasitas Minimum", 3: "Cukup Memadai", 4: "Kapasitas Peralatan Sangat Lengkap", 5: "Armada & Sumber Daya Tanggap Darurat Sangat Unggul" }
  },

  // IND_42: Daya tawar dan jejaring lintas sektor
  {
    id: "Q_IND_42_pemda",
    id_indikator: "IND_42",
    id_stakeholder_group: "pemda",
    teks: "Seberapa kuat posisi tawar (bargaining power) Pemkot Cilegon dalam forum antar-daerah dan kerja sama kemitraan strategis maritim Selat Sunda?",
    skala_label: { 1: "Sangat Lemah / Diabaikan", 2: "Posisi Tawar Rendah", 3: "Cukup Diperhitungkan", 4: "Posisi Tawar Sangat Kuat", 5: "Menjadi Poros Pengendali Kebijakan Maritim Regional" }
  },
  {
    id: "Q_IND_42_pelaku_usaha",
    id_indikator: "IND_42",
    id_stakeholder_group: "pelaku_usaha",
    teks: "Seberapa kuat posisi tawar dan kekompakan kelompok nelayan Cilegon dalam menentukan harga jual ikan maupun saat bernegosiasi memperjuangkan kepentingan nelayan?",
    skala_label: { 1: "Sangat Lemah / Selalu Pasrah", 2: "Posisi Tawar Rendah", 3: "Cukup Punya Daya Tawar", 4: "Posisi Tawar Kuat & Kompak", 5: "Sangat Kuat, Disegani & Berpengaruh" }
  },
  {
    id: "Q_IND_42_masyarakat_pesisir",
    id_indikator: "IND_42",
    id_stakeholder_group: "masyarakat_pesisir",
    teks: "Seberapa kuat posisi tawar dan kekompakan warga kampung pesisir dalam menjaga kelestarian ruang hidup pantai dan memperjuangkan aspirasi mereka?",
    skala_label: { 1: "Lemah & Mudah Dipecah Belah", 2: "Kurang Kuat", 3: "Cukup Kompak", 4: "Kompak & Didengar Luas", 5: "Sangat Solid, Kuat & Suara Warga Menang" }
  },
  {
    id: "Q_IND_42_akademisi_lsm",
    id_indikator: "IND_42",
    id_stakeholder_group: "akademisi_lsm",
    teks: "Seberapa luas jejaring kerja sama institusi Anda dengan kalangan akademisi, asosiasi nelayan tingkat provinsi/nasional, atau kementerian/lembaga mitra?",
    skala_label: { 1: "Sangat Terisolasi / Tanpa Jejaring", 2: "Jejaring Sangat Terbatas", 3: "Cukup Terhubung Tingkat Lokal", 4: "Jejaring Luas Tingkat Regional & Nasional", 5: "Sangat Luas, Kuat & Memiliki Kolaborasi Strategis Aktif" }
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
