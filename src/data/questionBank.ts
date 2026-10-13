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
    teks: "Menurut pengamatan Bapak/Ibu sebagai warga pesisir, bagaimana ketersediaan ikan laut hasil tangkapan nelayan di wilayah Cilegon saat ini dibandingkan dengan beberapa tahun sebelumnya?",
    skala_label: { 1: "Sangat Menurun", 2: "Menurun", 3: "Relatif Tetap", 4: "Meningkat", 5: "Sangat Meningkat" }
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
    teks: "Berdasarkan pengamatan atau informasi lingkungan yang dimiliki perusahaan, bagaimana perubahan ketersediaan dan kelimpahan sumber daya ikan di perairan pesisir Cilegon dalam beberapa tahun terakhir?",
    skala_label: { 1: "Menurun Drastis", 2: "Menurun", 3: "Relatif Stabil", 4: "Meningkat", 5: "Meningkat Drastis" }
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
    teks: "Menurut pengamatan Bapak/Ibu, bagaimana kondisi kebersihan air laut, kebersihan pantai, serta kelestarian habitat pesisir seperti mangrove dan terumbu karang di sekitar wilayah pesisir Cilegon?",
    skala_label: { 1: "Sangat Buruk", 2: "Buruk", 3: "Sedang", 4: "Baik", 5: "Sangat Baik" }
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
    teks: "Berdasarkan hasil pemantauan, pengamatan, atau informasi lingkungan yang dimiliki perusahaan, bagaimana kondisi kualitas perairan laut dan ekosistem pesisir, termasuk mangrove dan terumbu karang, di sekitar wilayah operasional perusahaan di Kota Cilegon?",
    skala_label: { 1: "Sangat Buruk", 2: "Buruk", 3: "Sedang", 4: "Baik", 5: "Sangat Baik" }
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
    teks: "Menurut pengamatan Bapak/Ibu, sejauh mana kegiatan penangkapan ikan oleh nelayan lokal menimbulkan dampak terhadap kelestarian lingkungan laut, seperti kerusakan habitat laut atau tertangkapnya ikan berukuran kecil?",
    skala_label: { 1: "Dampak Sangat Berat", 2: "Dampak Berat", 3: "Dampak Sedang", 4: "Dampak Ringan", 5: "Dampak Sangat Ringan atau Tidak Ada" }
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
    teks: "Berdasarkan pengamatan atau informasi yang dimiliki perusahaan, sejauh mana praktik penangkapan ikan di perairan pesisir Cilegon menimbulkan dampak terhadap kelestarian lingkungan laut, seperti kerusakan habitat atau tertangkapnya ikan berukuran kecil?",
    skala_label: { 1: "Dampak Sangat Berat", 2: "Dampak Berat", 3: "Dampak Sedang", 4: "Dampak Ringan", 5: "Dampak Sangat Ringan atau Tidak Ada" }
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
    teks: "Menurut pengamatan Bapak/Ibu, sejauh mana aktivitas industri di sepanjang pesisir Cilegon memengaruhi kualitas lingkungan perairan laut, termasuk potensi pencemaran dan kondisi habitat ikan?",
    skala_label: { 1: "Dampak Sangat Berat", 2: "Dampak Berat", 3: "Dampak Sedang", 4: "Dampak Ringan", 5: "Tidak Ada Dampak Berarti" }
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
    teks: "Sejauh mana penerapan pengelolaan lingkungan oleh perusahaan, termasuk pengoperasian instalasi pengolahan air limbah (IPAL), pemantauan kualitas efluen, dan pelaksanaan komitmen lingkungan sesuai dokumen AMDAL atau persetujuan lingkungan, berkontribusi dalam mengendalikan dampak operasional terhadap kualitas perairan pesisir dan ekosistem laut?",
    skala_label: { 1: "Sangat Tidak Efektif", 2: "Kurang Efektif", 3: "Cukup Efektif", 4: "Efektif", 5: "Sangat Efektif" }
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
    teks: "Menurut pengamatan Bapak/Ibu, sejauh mana usaha perikanan tangkap mampu memberikan pendapatan dan mendukung kesejahteraan keluarga nelayan di wilayah pesisir Kota Cilegon?",
    skala_label: { 1: "Sangat Rendah", 2: "Rendah", 3: "Sedang", 4: "Tinggi", 5: "Sangat Tinggi" }
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
    teks: "Menurut pengamatan atau informasi yang dimiliki perusahaan, sejauh mana sektor perikanan tangkap berkontribusi terhadap pendapatan masyarakat pesisir dan mendukung ketersediaan pasokan pangan berbasis ikan di Kota Cilegon?",
    skala_label: { 1: "Sangat Rendah", 2: "Rendah", 3: "Sedang", 4: "Tinggi", 5: "Sangat Tinggi" }
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
    teks: "Menurut pengamatan Bapak/Ibu, sejauh mana nelayan di lingkungan sekitar dapat memperoleh kebutuhan operasional melaut, seperti BBM, es balok, dan perbekalan, dengan mudah dan harga terjangkau?",
    skala_label: { 1: "Sangat Sulit", 2: "Sulit", 3: "Cukup Mudah", 4: "Mudah", 5: "Sangat Mudah" }
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
    teks: "Berdasarkan pengamatan atau informasi yang dimiliki perusahaan, bagaimana kondisi keterjangkauan dan ketersediaan kebutuhan operasional melaut nelayan di pesisir Cilegon, terutama BBM, es, dan perbekalan?",
    skala_label: { 1: "Sangat Tidak Terjangkau", 2: "Tidak Terjangkau", 3: "Cukup Terjangkau", 4: "Terjangkau", 5: "Sangat Terjangkau" }
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
    teks: "Menurut pengamatan Bapak/Ibu, bagaimana kemudahan nelayan di lingkungan sekitar dalam memperoleh akses permodalan usaha serta menjual hasil tangkapan dengan harga yang relatif stabil dan wajar?",
    skala_label: { 1: "Sangat Sulit", 2: "Sulit", 3: "Cukup", 4: "Mudah", 5: "Sangat Mudah" }
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
    teks: "Sejauh mana perusahaan memiliki atau mengetahui akses kemitraan usaha, dukungan permodalan, maupun program CSR yang membantu pelaku usaha perikanan lokal di Cilegon memperoleh akses pasar dan menjaga kestabilan pemasaran hasil tangkapan?",
    skala_label: { 1: "Sangat Terbatas", 2: "Terbatas", 3: "Cukup Tersedia", 4: "Tersedia dengan Baik", 5: "Sangat Tersedia dan Berkelanjutan" }
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
    teks: "Menurut pengamatan Bapak/Ibu, sejauh mana masyarakat atau kelompok usaha di wilayah pesisir Cilegon mengembangkan produk olahan ikan, seperti makanan khas atau oleh-oleh, untuk meningkatkan nilai jual hasil perikanan?",
    skala_label: { 1: "Sangat Rendah", 2: "Rendah", 3: "Sedang", 4: "Tinggi", 5: "Sangat Tinggi" }
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
    teks: "Sejauh mana perusahaan membuka atau memfasilitasi peluang pemasaran dan peningkatan nilai tambah produk perikanan lokal, misalnya melalui pengadaan untuk kantin atau katering industri, penggunaan fasilitas rantai dingin, pengolahan produk, atau pembinaan UMKM perikanan?",
    skala_label: { 1: "Sangat Rendah", 2: "Rendah", 3: "Sedang", 4: "Tinggi", 5: "Sangat Tinggi" }
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
    teks: "Menurut pengamatan Bapak/Ibu, bagaimana tingkat kerukunan, solidaritas, dan kebersamaan warga di kampung pesisir dalam kegiatan gotong royong, kebersihan pantai, serta kegiatan sosial dan budaya setempat?",
    skala_label: { 1: "Sangat Rendah", 2: "Rendah", 3: "Sedang", 4: "Tinggi", 5: "Sangat Tinggi" }
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
    teks: "Berdasarkan pengamatan atau interaksi perusahaan dengan masyarakat pesisir, bagaimana kondisi keharmonisan hubungan sosial dan solidaritas di antara komunitas nelayan di sekitar kawasan operasional perusahaan?",
    skala_label: { 1: "Sangat Tidak Harmonis", 2: "Kurang Harmonis", 3: "Cukup Harmonis", 4: "Harmonis", 5: "Sangat Harmonis" }
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
    teks: "Menurut pengalaman atau pengamatan Bapak/Ibu, bagaimana penyelesaian perselisihan pemanfaatan ruang pesisir dan laut apabila terjadi konflik antara nelayan, pihak industri, atau pengelola wisata pesisir di Kota Cilegon?",
    skala_label: { 1: "Sangat Tidak Efektif", 2: "Tidak Efektif", 3: "Cukup Efektif", 4: "Efektif", 5: "Sangat Efektif" }
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
    teks: "Berdasarkan pengalaman atau informasi yang dimiliki perusahaan, bagaimana kondisi potensi konflik dan penyelesaian perselisihan antara kegiatan operasional industri, termasuk pelabuhan, dengan aktivitas penangkapan ikan oleh nelayan tradisional di perairan pesisir Cilegon?",
    skala_label: { 1: "Sangat Tidak Kondusif", 2: "Tidak Kondusif", 3: "Cukup Kondusif", 4: "Kondusif", 5: "Sangat Kondusif" }
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
    teks: "Menurut pengamatan Bapak/Ibu, sejauh mana masyarakat pesisir, khususnya nelayan kecil, memiliki kesempatan yang adil untuk mengakses pantai dan sumber daya laut guna memenuhi kebutuhan hidup dan mencari nafkah?",
    skala_label: { 1: "Sangat Tidak Adil", 2: "Tidak Adil", 3: "Cukup Adil", 4: "Adil", 5: "Sangat Adil" }
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
    teks: "Sejauh mana pengaturan zona keamanan dan operasional perusahaan di wilayah pesisir Cilegon memperhatikan keadilan akses nelayan tradisional terhadap jalur pelayaran dan wilayah penangkapan ikan yang diperbolehkan?",
    skala_label: { 1: "Sangat Tidak Memadai", 2: "Tidak Memadai", 3: "Cukup Memadai", 4: "Memadai", 5: "Sangat Memadai" }
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
    teks: "Menurut pandangan Bapak/Ibu, seberapa besar keyakinan bahwa mata pencaharian perikanan tangkap dan kehidupan komunitas nelayan di pesisir Cilegon dapat terus berlanjut serta menarik minat generasi muda dalam 10–20 tahun mendatang?",
    skala_label: { 1: "Sangat Tidak Yakin", 2: "Tidak Yakin", 3: "Cukup Yakin", 4: "Yakin", 5: "Sangat Yakin" }
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
    teks: "Sejauh mana perusahaan memandang penting keberlanjutan mata pencaharian nelayan dan regenerasi profesi nelayan sebagai bagian dari kehidupan sosial, ekonomi, dan kearifan lokal masyarakat pesisir Cilegon yang berdampingan dengan kegiatan industri?",
    skala_label: { 1: "Sangat Tidak Penting", 2: "Kurang Penting", 3: "Cukup Penting", 4: "Penting", 5: "Sangat Penting" }
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
    teks: "Menurut pengalaman Bapak/Ibu, seberapa jelas dan terbuka informasi mengenai kebijakan, program pemerintah, serta bantuan sektor perikanan disampaikan kepada masyarakat pesisir di Kota Cilegon?",
    skala_label: { 1: "Sangat Tidak Terbuka", 2: "Kurang Terbuka", 3: "Cukup Terbuka", 4: "Terbuka", 5: "Sangat Terbuka" }
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
    teks: "Sejauh mana perusahaan dapat mengakses informasi kebijakan, regulasi, program, dan keputusan pemerintah yang berkaitan dengan pengelolaan perikanan pesisir serta penataan ruang laut di Kota Cilegon secara jelas dan tepat waktu?",
    skala_label: { 1: "Sangat Tidak Transparan", 2: "Kurang Transparan", 3: "Cukup Transparan", 4: "Transparan", 5: "Sangat Transparan" }
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
    teks: "Menurut pengamatan Bapak/Ibu, sejauh mana masyarakat pesisir atau perwakilannya dilibatkan dalam musyawarah dan konsultasi sebelum pemerintah menetapkan kebijakan atau program pengelolaan wilayah pesisir dan perikanan di Kota Cilegon?",
    skala_label: { 1: "Tidak Pernah Dilibatkan", 2: "Jarang Dilibatkan", 3: "Kadang-kadang Dilibatkan", 4: "Sering Dilibatkan", 5: "Selalu Dilibatkan" }
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
    teks: "Sejauh mana perusahaan dilibatkan dan memperoleh kesempatan untuk menyampaikan aspirasi dalam proses perumusan kebijakan tata ruang perairan, pengelolaan pesisir, dan perikanan di Kota Cilegon?",
    skala_label: { 1: "Tidak Dilibatkan", 2: "Sangat Terbatas", 3: "Cukup Terlibat", 4: "Terlibat Aktif", 5: "Sangat Terlibat" }
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
    teks: "Menurut pengamatan Bapak/Ibu, bagaimana ketegasan aparat berwenang dalam mengawasi dan menindak pelanggaran aturan di wilayah pesisir dan perairan Cilegon, seperti pembuangan limbah ilegal atau kegiatan yang merusak lingkungan laut?",
    skala_label: { 1: "Sangat Tidak Tegas", 2: "Kurang Tegas", 3: "Cukup Tegas", 4: "Tegas", 5: "Sangat Tegas dan Konsisten" }
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
    teks: "Berdasarkan pengalaman atau informasi yang dimiliki perusahaan, bagaimana konsistensi penegakan peraturan keselamatan pelayaran, perlindungan lingkungan laut, dan ketentuan pemanfaatan wilayah pesisir di Kota Cilegon?",
    skala_label: { 1: "Sangat Tidak Konsisten", 2: "Kurang Konsisten", 3: "Cukup Konsisten", 4: "Konsisten", 5: "Sangat Konsisten dan Akuntabel" }
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
    teks: "Menurut pengamatan Bapak/Ibu, seberapa baik koordinasi antara pemerintah daerah, kelurahan, dinas terkait, aparat berwenang, dan pihak industri dalam menangani permasalahan lingkungan serta pengelolaan wilayah pesisir Cilegon?",
    skala_label: { 1: "Sangat Buruk", 2: "Buruk", 3: "Cukup", 4: "Baik", 5: "Sangat Baik" }
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
    teks: "Sejauh mana koordinasi antara pemerintah daerah, instansi pengelola dan pengawas pelabuhan, instansi lingkungan hidup, aparat penegak hukum perairan, dan perusahaan berjalan efektif dalam pengelolaan wilayah pesisir serta kegiatan maritim di Kota Cilegon?",
    skala_label: { 1: "Sangat Tidak Efektif", 2: "Kurang Efektif", 3: "Cukup Efektif", 4: "Efektif", 5: "Sangat Efektif" }
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
    teks: "Menurut Bapak/Ibu, sejauh mana kebijakan pengelolaan wilayah pesisir Cilegon telah mempertimbangkan secara adil dan seimbang kepentingan masyarakat pesisir, nelayan, pelaku usaha, dan sektor industri?",
    skala_label: { 1: "Sangat Tidak Terpadu", 2: "Kurang Terpadu", 3: "Cukup Terpadu", 4: "Terpadu", 5: "Sangat Terpadu" }
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
    teks: "Sejauh mana kebijakan dan proses koordinasi pemerintah memfasilitasi keseimbangan antara kepentingan investasi serta operasional industri dan perlindungan akses serta mata pencaharian nelayan di wilayah pesisir Kota Cilegon?",
    skala_label: { 1: "Sangat Tidak Seimbang", 2: "Kurang Seimbang", 3: "Cukup Seimbang", 4: "Seimbang", 5: "Sangat Seimbang dan Terpadu" }
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
    teks: "Menurut pengamatan Bapak/Ibu, seberapa konsisten dan berkesinambungan program penataan wilayah pesisir, pemberdayaan masyarakat, serta pengelolaan perikanan tangkap di Kota Cilegon dilaksanakan dari tahun ke tahun?",
    skala_label: { 1: "Sangat Tidak Konsisten", 2: "Tidak Konsisten", 3: "Cukup Konsisten", 4: "Konsisten", 5: "Sangat Konsisten dan Terarah" }
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
    teks: "Berdasarkan pengalaman perusahaan, bagaimana konsistensi dan kepastian regulasi mengenai pemanfaatan ruang perairan serta pengelolaan pesisir yang menjadi acuan kegiatan usaha di Kota Cilegon?",
    skala_label: { 1: "Sangat Tidak Pasti", 2: "Kurang Pasti", 3: "Cukup Pasti", 4: "Pasti dan Konsisten", 5: "Sangat Pasti dan Konsisten" }
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
    teks: "Menurut pengamatan Bapak/Ibu, sejauh mana pemerintah menggunakan data kondisi nelayan, kebutuhan masyarakat pesisir, serta hasil pendataan atau kajian lapangan sebagai dasar penyusunan kebijakan dan program perikanan di Kota Cilegon?",
    skala_label: { 1: "Sangat Tidak Memadai", 2: "Kurang Memadai", 3: "Cukup Memadai", 4: "Memadai", 5: "Sangat Memadai" }
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
    teks: "Sejauh mana data pemantauan lingkungan, hasil kajian ilmiah, dokumen AMDAL, serta pelaksanaan RKL-RPL digunakan sebagai dasar dalam pengambilan keputusan dan koordinasi pengelolaan wilayah pesisir serta perairan di Kota Cilegon?",
    skala_label: { 1: "Sangat Minim", 2: "Minim", 3: "Cukup", 4: "Baik", 5: "Sangat Baik" }
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
    teks: "Menurut pengalaman Bapak/Ibu, bagaimana kemampuan dan kesiapan kantor kelurahan, dinas terkait, serta kelompok masyarakat pesisir dalam memberikan pelayanan, menampung aspirasi, dan membantu menyelesaikan permasalahan warga pesisir?",
    skala_label: { 1: "Sangat Rendah", 2: "Rendah", 3: "Sedang", 4: "Baik", 5: "Sangat Baik" }
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
    teks: "Berdasarkan pengalaman perusahaan dalam berkoordinasi, bagaimana kapasitas, profesionalitas, dan responsivitas instansi pemerintah serta kelembagaan masyarakat pesisir dalam mendukung pengelolaan kawasan maritim di Kota Cilegon?",
    skala_label: { 1: "Sangat Rendah", 2: "Rendah", 3: "Sedang", 4: "Tinggi", 5: "Sangat Tinggi" }
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
    teks: "Menurut pengamatan Bapak/Ibu, seberapa efektif kelompok nelayan atau organisasi masyarakat pesisir, seperti KUB, Rukun Nelayan, atau koperasi, dalam mengadakan kegiatan bersama, membina anggota, dan membantu menyelesaikan permasalahan masyarakat?",
    skala_label: { 1: "Sangat Tidak Efektif", 2: "Tidak Efektif", 3: "Cukup Efektif", 4: "Efektif", 5: "Sangat Efektif" }
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
    teks: "Berdasarkan interaksi perusahaan dengan kelompok nelayan, koperasi, atau organisasi nelayan seperti HNSI, bagaimana kemampuan kelembagaan tersebut dalam berkomunikasi, mengoordinasikan anggota, dan memfasilitasi kemitraan atau penyelesaian persoalan di lapangan?",
    skala_label: { 1: "Sangat Rendah", 2: "Rendah", 3: "Sedang", 4: "Tinggi", 5: "Sangat Tinggi" }
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
    teks: "Menurut pengalaman Bapak/Ibu, sejauh mana lembaga pendukung, seperti penyuluh perikanan, lembaga keuangan, perguruan tinggi, dan lembaga pelatihan, memberikan manfaat bagi peningkatan pengetahuan, keterampilan, akses permodalan, atau pengembangan usaha masyarakat pesisir Cilegon?",
    skala_label: { 1: "Sangat Tidak Bermanfaat", 2: "Kurang Bermanfaat", 3: "Cukup Bermanfaat", 4: "Bermanfaat", 5: "Sangat Bermanfaat" }
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
    teks: "Sejauh mana lembaga pendukung, seperti instansi teknis, perguruan tinggi, lembaga penelitian, penyuluh, dan lembaga pembiayaan, berperan dalam memfasilitasi kerja sama antara perusahaan dan masyarakat pesisir untuk mendukung pengelolaan lingkungan serta pembangunan maritim berkelanjutan?",
    skala_label: { 1: "Sangat Tidak Efektif", 2: "Kurang Efektif", 3: "Cukup Efektif", 4: "Efektif", 5: "Sangat Efektif" }
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
    teks: "Menurut pengalaman Bapak/Ibu, seberapa jelas pembagian tugas dan tanggung jawab antara kelurahan, dinas terkait, dan aparat berwenang dalam menangani kebutuhan serta permasalahan masyarakat pesisir di Kota Cilegon?",
    skala_label: { 1: "Sangat Tidak Jelas", 2: "Tidak Jelas", 3: "Cukup Jelas", 4: "Jelas", 5: "Sangat Jelas" }
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
    teks: "Berdasarkan pengalaman perusahaan dalam mengurus perizinan dan berkoordinasi, bagaimana kejelasan pembagian kewenangan antara pemerintah daerah, Pemerintah Provinsi Banten, dan instansi pusat atau otoritas pelabuhan dalam pengelolaan ruang laut serta kegiatan operasional maritim di Kota Cilegon?",
    skala_label: { 1: "Sangat Tidak Jelas", 2: "Kurang Jelas", 3: "Cukup Jelas", 4: "Jelas", 5: "Sangat Jelas dan Terkoordinasi" }
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
    teks: "Sejauh mana Bapak/Ibu menerima dan menyetujui peraturan pemerintah terkait pengelolaan perikanan tangkap dan penataan wilayah pesisir di Kota Cilegon?",
    skala_label: { 1: "Sangat Tidak Setuju", 2: "Tidak Setuju", 3: "Netral atau Ragu-ragu", 4: "Setuju", 5: "Sangat Setuju" }
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
    teks: "Sejauh mana manajemen perusahaan menerima dan mendukung kebijakan pemerintah yang berkaitan dengan pelestarian lingkungan laut, pengelolaan wilayah pesisir, dan keberlanjutan perikanan tangkap di Kota Cilegon?",
    skala_label: { 1: "Sangat Rendah", 2: "Rendah", 3: "Sedang", 4: "Tinggi", 5: "Sangat Tinggi" }
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
    teks: "Sejauh mana Bapak/Ibu setuju bahwa sumber daya ikan dan lingkungan laut pesisir Cilegon perlu dijaga secara berkelanjutan agar tetap mendukung mata pencaharian nelayan dan kebutuhan generasi mendatang?",
    skala_label: { 1: "Sangat Tidak Setuju", 2: "Tidak Setuju", 3: "Netral atau Ragu-ragu", 4: "Setuju", 5: "Sangat Setuju" }
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
    teks: "Sejauh mana tujuan keberlanjutan perikanan tangkap dan pelestarian ekosistem pesisir Cilegon selaras dengan kebijakan keberlanjutan perusahaan, termasuk program tanggung jawab sosial dan lingkungan (TJSL/CSR)?",
    skala_label: { 1: "Sangat Tidak Selaras", 2: "Kurang Selaras", 3: "Cukup Selaras", 4: "Selaras", 5: "Sangat Selaras" }
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
    teks: "Menurut pengamatan Bapak/Ibu, sejauh mana nelayan di lingkungan pesisir Cilegon mematuhi ketentuan wilayah penangkapan ikan, perizinan, dan penggunaan alat tangkap yang diperbolehkan?",
    skala_label: { 1: "Sangat Tidak Patuh", 2: "Kurang Patuh", 3: "Cukup Patuh", 4: "Patuh", 5: "Sangat Patuh" }
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
    teks: "Bagaimana tingkat kepatuhan perusahaan terhadap ketentuan perizinan dan persetujuan lingkungan, pengelolaan air limbah, pemantauan baku mutu lingkungan, serta ketentuan pemanfaatan ruang perairan yang relevan dengan kegiatan operasional perusahaan?",
    skala_label: { 1: "Sangat Rendah", 2: "Rendah", 3: "Sedang", 4: "Tinggi", 5: "Sangat Tinggi" }
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
    teks: "Seberapa besar kesediaan Bapak/Ibu untuk menyumbangkan waktu, tenaga, atau sumber daya sesuai kemampuan dalam kegiatan perlindungan lingkungan laut dan pesisir Cilegon, seperti kerja bakti pantai, penanaman mangrove, atau kegiatan pelestarian lingkungan lainnya?",
    skala_label: { 1: "Tidak Bersedia", 2: "Kurang Bersedia", 3: "Cukup Bersedia", 4: "Bersedia", 5: "Sangat Bersedia" }
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
    teks: "Sejauh mana kesediaan perusahaan untuk berkontribusi dalam program perlindungan ekosistem laut dan pemberdayaan nelayan di Kota Cilegon melalui pendanaan, program TJSL/CSR, dukungan teknis, atau kemitraan dengan pemangku kepentingan terkait?",
    skala_label: { 1: "Sangat Rendah", 2: "Rendah", 3: "Sedang", 4: "Tinggi", 5: "Sangat Tinggi" }
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
    teks: "Seberapa siap Bapak/Ibu atau perwakilan masyarakat pesisir untuk bekerja sama dengan pemerintah, pihak industri, akademisi, dan komunitas lainnya dalam forum bersama guna mencari solusi bagi permasalahan serta pengembangan wilayah pesisir Cilegon?",
    skala_label: { 1: "Sangat Tidak Siap", 2: "Kurang Siap", 3: "Cukup Siap", 4: "Siap", 5: "Sangat Siap" }
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
    teks: "Sejauh mana kesiapan perusahaan untuk berkolaborasi secara berkelanjutan dalam forum komunikasi multipihak yang melibatkan pemerintah daerah, kelompok nelayan, akademisi, dan pemangku kepentingan lainnya untuk pengelolaan pesisir Cilegon?",
    skala_label: { 1: "Tidak Bersedia", 2: "Kurang Bersedia", 3: "Cukup Bersedia", 4: "Bersedia Aktif", 5: "Sangat Bersedia dan Berkomitmen" }
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
    teks: "Dalam 12 bulan terakhir, seberapa sering Bapak/Ibu menghadiri musyawarah warga, pertemuan kelurahan, atau forum bersama yang membahas permasalahan dan pengelolaan wilayah pesisir di Kota Cilegon?",
    skala_label: { 1: "Tidak Pernah", 2: "Jarang", 3: "Kadang-kadang", 4: "Sering", 5: "Sangat Sering" }
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
    teks: "Dalam 12 bulan terakhir, seberapa sering perwakilan perusahaan menghadiri forum pertemuan atau rapat koordinasi terkait pengelolaan wilayah pesisir, pelabuhan, lingkungan laut, atau perikanan yang diselenggarakan oleh pemerintah daerah maupun otoritas terkait?",
    skala_label: { 1: "Tidak Pernah", 2: "Jarang", 3: "Cukup Sering", 4: "Sering", 5: "Sangat Sering" }
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
    teks: "Dalam 12 bulan terakhir, seberapa sering Bapak/Ibu atau perwakilan masyarakat pesisir di lingkungan Bapak/Ibu mengikuti konsultasi publik atau forum resmi pemerintah untuk membahas perencanaan dan pengelolaan wilayah pesisir di Kota Cilegon?",
    skala_label: { 1: "Tidak Pernah Terlibat", 2: "Jarang Terlibat", 3: "Kadang-kadang Terlibat", 4: "Sering Terlibat", 5: "Sangat Sering Terlibat" }
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
    teks: "Dalam 12 bulan terakhir, seberapa sering perusahaan berpartisipasi dalam konsultasi publik terkait perencanaan wilayah pesisir, tata ruang perairan, atau regulasi lingkungan di Kota Cilegon, termasuk dengan menyampaikan masukan teknis?",
    skala_label: { 1: "Tidak Pernah", 2: "Jarang", 3: "Cukup Sering", 4: "Sering", 5: "Sangat Sering" }
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
    teks: "Dalam 12 bulan terakhir, seberapa sering Bapak/Ibu menyampaikan aspirasi, usulan, atau pengaduan mengenai permasalahan lingkungan dan kebutuhan masyarakat pesisir kepada pemerintah kelurahan, dinas terkait, atau pihak berwenang lainnya?",
    skala_label: { 1: "Tidak Pernah", 2: "Jarang", 3: "Kadang-kadang", 4: "Sering", 5: "Sangat Sering" }
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
    teks: "Dalam 12 bulan terakhir, seberapa sering perusahaan menyampaikan masukan, rekomendasi teknis, data pemantauan lingkungan, atau tanggapan atas permasalahan pengelolaan pesisir dan perairan kepada pemerintah daerah maupun otoritas terkait?",
    skala_label: { 1: "Tidak Pernah", 2: "Jarang", 3: "Cukup Sering", 4: "Sering", 5: "Sangat Sering" }
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
    teks: "Dalam 12 bulan terakhir, seberapa sering Bapak/Ibu atau perwakilan masyarakat pesisir dilibatkan dalam pembahasan gagasan, perumusan rencana, atau penyusunan program terkait pengelolaan dan pemberdayaan masyarakat pesisir di Kota Cilegon?",
    skala_label: { 1: "Tidak Pernah Dilibatkan", 2: "Jarang Dilibatkan", 3: "Kadang-kadang Dilibatkan", 4: "Sering Dilibatkan", 5: "Sangat Sering Dilibatkan" }
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
    teks: "Dalam 12 bulan terakhir, seberapa sering perwakilan perusahaan dilibatkan dalam FGD, rapat teknis, atau forum perumusan program dan kebijakan terkait pengelolaan perikanan, wilayah pesisir, maupun tata ruang perairan di Kota Cilegon?",
    skala_label: { 1: "Tidak Pernah", 2: "Jarang", 3: "Cukup Sering", 4: "Sering", 5: "Sangat Sering" }
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
    teks: "Dalam 12 bulan terakhir, seberapa sering Bapak/Ibu terlibat dalam pemantauan atau pengawasan lingkungan pesisir, pelaporan pencemaran atau kerusakan pantai, serta evaluasi program pengelolaan wilayah pesisir di Kota Cilegon?",
    skala_label: { 1: "Tidak Pernah Terlibat", 2: "Jarang Terlibat", 3: "Kadang-kadang Terlibat", 4: "Sering Terlibat", 5: "Sangat Sering Terlibat" }
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
    teks: "Dalam 12 bulan terakhir, seberapa sering perusahaan terlibat dalam kegiatan pemantauan lingkungan pesisir, pertukaran data kualitas lingkungan, pengawasan bersama sesuai kewenangan, atau evaluasi program pengelolaan pesisir bersama instansi dan pemangku kepentingan terkait?",
    skala_label: { 1: "Tidak Pernah", 2: "Jarang", 3: "Cukup Sering", 4: "Sering", 5: "Sangat Sering" }
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
    teks: "Menurut pengamatan Bapak/Ibu, seberapa besar aktivitas ekonomi masyarakat di lingkungan pesisir, seperti warung, usaha penyewaan tempat tinggal, perdagangan, dan jasa, bergantung pada kegiatan serta hasil tangkapan nelayan?",
    skala_label: { 1: "Sangat Rendah", 2: "Rendah", 3: "Sedang", 4: "Tinggi", 5: "Sangat Tinggi" }
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
    teks: "Sejauh mana kelancaran pemanfaatan alur pelayaran dan kondisi perairan pesisir memengaruhi kelangsungan operasional serta kegiatan logistik perusahaan, termasuk aktivitas dermaga atau terminal khusus jika relevan?",
    skala_label: { 1: "Sangat Rendah", 2: "Rendah", 3: "Sedang", 4: "Tinggi", 5: "Sangat Tinggi" }
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
    teks: "Menurut Bapak/Ibu, seberapa penting pelestarian tradisi, kebersamaan, dan identitas budaya masyarakat kampung nelayan untuk menjaga keberlanjutan komunitas pesisir Cilegon?",
    skala_label: { 1: "Sangat Tidak Penting", 2: "Tidak Penting", 3: "Cukup Penting", 4: "Penting", 5: "Sangat Penting" }
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
    teks: "Sejauh mana perusahaan memandang penting penghormatan terhadap nilai sosial-budaya, keberadaan komunitas maritim, dan hubungan harmonis dengan masyarakat pesisir Cilegon dalam menjaga penerimaan sosial terhadap kegiatan operasional perusahaan (Social License to Operate)?",
    skala_label: { 1: "Sangat Tidak Penting", 2: "Kurang Penting", 3: "Cukup Penting", 4: "Penting", 5: "Sangat Penting" }
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
    teks: "Seberapa besar dampak kebijakan tata ruang laut, perubahan zonasi pesisir, atau pembangunan kawasan industri terhadap akses masyarakat ke pantai, aktivitas sehari-hari, dan sumber penghidupan warga pesisir Cilegon?",
    skala_label: { 1: "Tidak Terdampak", 2: "Dampak Ringan", 3: "Cukup Berdampak", 4: "Dampak Besar", 5: "Dampak Sangat Besar" }
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
    teks: "Sejauh mana perubahan kebijakan tata ruang laut, zonasi pesisir, dan ketentuan lingkungan memengaruhi biaya kepatuhan, perencanaan investasi, serta kegiatan operasional perusahaan di Kota Cilegon?",
    skala_label: { 1: "Sangat Rendah", 2: "Rendah", 3: "Sedang", 4: "Tinggi", 5: "Sangat Tinggi" }
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
    teks: "Dalam 3 bulan terakhir, seberapa sering Bapak/Ibu mencari atau mengikuti informasi mengenai kebijakan perikanan tangkap, penataan wilayah pesisir, atau rencana pembangunan yang berpotensi memengaruhi kehidupan masyarakat pesisir Cilegon?",
    skala_label: { 1: "Tidak Pernah", 2: "Jarang", 3: "Kadang-kadang", 4: "Sering", 5: "Sangat Sering" }
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
    teks: "Dalam 3 bulan terakhir, seberapa sering tim legal, HSE, atau unit terkait di perusahaan memantau dan menelaah perkembangan regulasi mengenai lingkungan laut, tata ruang perairan, pelabuhan, dan pengelolaan pesisir yang relevan dengan kegiatan perusahaan?",
    skala_label: { 1: "Tidak Pernah", 2: "Jarang", 3: "Cukup Sering", 4: "Sering", 5: "Sangat Sering" }
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
    teks: "Menurut pengamatan Bapak/Ibu, sejauh mana kewenangan formal dan pengakuan hukum yang dimiliki pemerintah kelurahan serta lembaga atau organisasi masyarakat pesisir dalam mengatur urusan lingkungan dan memperjuangkan kepentingan warga?",
    skala_label: { 1: "Sangat Lemah", 2: "Lemah", 3: "Cukup", 4: "Kuat", 5: "Sangat Kuat" }
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
    teks: "Sejauh mana perusahaan memiliki dasar hukum, perizinan, persetujuan, atau hak pemanfaatan lahan dan perairan yang sah serta jelas untuk mendukung kegiatan operasionalnya di wilayah pesisir dan pelabuhan Cilegon?",
    skala_label: { 1: "Sangat Lemah", 2: "Lemah", 3: "Cukup Memadai", 4: "Kuat", 5: "Sangat Kuat" }
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
    teks: "Menurut pengalaman Bapak/Ibu, seberapa mudah masyarakat atau perwakilan warga pesisir berkomunikasi secara langsung dengan pejabat kelurahan, dinas terkait, atau pimpinan berwenang untuk menyampaikan persoalan pesisir dan memperoleh tanggapan?",
    skala_label: { 1: "Sangat Sulit", 2: "Sulit", 3: "Cukup Mudah", 4: "Mudah", 5: "Sangat Mudah" }
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
    teks: "Sejauh mana perusahaan memiliki akses komunikasi yang efektif dengan pejabat atau pimpinan instansi pemerintah dan otoritas terkait untuk membahas persoalan perizinan, pengelolaan pesisir, lingkungan, dan kegiatan maritim sesuai mekanisme yang berlaku?",
    skala_label: { 1: "Sangat Sulit", 2: "Sulit", 3: "Cukup Mudah", 4: "Mudah", 5: "Sangat Mudah dan Efektif" }
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
    teks: "Menurut pengalaman Bapak/Ibu, sejauh mana masyarakat pesisir memiliki akses terhadap informasi strategis dan teknis, seperti peringatan dini cuaca laut, informasi pasang rob, serta arahan keselamatan dari instansi berwenang?",
    skala_label: { 1: "Sangat Terbatas", 2: "Terbatas", 3: "Cukup", 4: "Baik", 5: "Sangat Baik" }
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
    teks: "Sejauh mana perusahaan memiliki akses terhadap data pemantauan lingkungan, informasi teknis, keahlian personel HSE, dan teknologi pemantauan yang relevan untuk mendukung pengelolaan dampak operasional terhadap lingkungan pesisir dan laut?",
    skala_label: { 1: "Sangat Terbatas", 2: "Terbatas", 3: "Cukup Memadai", 4: "Memadai dan Modern", 5: "Sangat Memadai dan Terintegrasi" }
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
    teks: "Menurut pengamatan Bapak/Ibu, sejauh mana masyarakat pesisir mampu menghimpun dan mengerahkan warga, tenaga, serta sumber daya yang tersedia untuk melaksanakan kegiatan bersama, seperti kerja bakti, penanganan bencana, atau perlindungan lingkungan pesisir?",
    skala_label: { 1: "Sangat Rendah", 2: "Rendah", 3: "Sedang", 4: "Tinggi", 5: "Sangat Tinggi" }
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
    teks: "Sejauh mana kemampuan perusahaan memobilisasi anggaran, personel terlatih, peralatan, dan sarana operasional untuk menangani keadaan darurat lingkungan laut, termasuk insiden tumpahan minyak, sesuai dengan risiko dan tanggung jawab operasionalnya?",
    skala_label: { 1: "Sangat Terbatas", 2: "Terbatas", 3: "Cukup Memadai", 4: "Memadai", 5: "Sangat Memadai dan Siap Dikerahkan" }
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
    teks: "Menurut pengalaman Bapak/Ibu, sejauh mana masyarakat pesisir memiliki posisi tawar dan jejaring kerja sama yang kuat untuk menyampaikan aspirasi, memperjuangkan kepentingan warga, serta berkolaborasi dengan pemerintah, pihak industri, dan pemangku kepentingan lainnya dalam pengelolaan wilayah pesisir Cilegon?",
    skala_label: { 1: "Sangat Lemah", 2: "Lemah", 3: "Cukup", 4: "Kuat", 5: "Sangat Kuat" }
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
    teks: "Sejauh mana perusahaan, baik secara mandiri maupun melalui asosiasi industri, memiliki kemampuan menyampaikan aspirasi, membangun jejaring lintas sektor, dan berkontribusi dalam dialog kebijakan terkait pengelolaan maritim, pesisir, dan iklim usaha di Kota Cilegon?",
    skala_label: { 1: "Sangat Rendah", 2: "Rendah", 3: "Sedang", 4: "Tinggi", 5: "Sangat Tinggi" }
  }

];

export function getQuestionsForStakeholder(stakeholderId: string): PertanyaanItem[] {
  return QUESTION_BANK.filter(q => q.id_stakeholder_group === stakeholderId);
}
