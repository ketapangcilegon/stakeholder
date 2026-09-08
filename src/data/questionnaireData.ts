export interface StakeholderGroup {
  id: string;
  nama: string;
  target: number;
  deskripsi: string;
  tone: string;
  badgeColor: string;
  iconName: string;
  contohSubjek: string;
  iconBg?: string;
  iconSelectedBg?: string;
}

export interface Dimensi {
  id: string;
  nama: string;
  deskripsi: string;
  warna: string;
  urutan: number;
}

export interface Variabel {
  id: string;
  id_dimensi: string;
  nama: string;
  deskripsi: string;
  urutan: number;
}

export interface Indikator {
  id: string;
  id_variabel: string;
  kode: string;
  deskripsi: string;
  urutan: number;
}

export interface PertanyaanItem {
  id: string;
  id_indikator: string;
  id_stakeholder_group: string;
  teks: string;
  skala_label: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
}

export const STAKEHOLDER_GROUPS: StakeholderGroup[] = [
  {
    id: "pemda",
    nama: "Pemerintah Daerah (DKPP, Bapperida, DLH)",
    target: 7,
    deskripsi: "Aparatur pemerintah daerah pengelola kebijakan perikanan, perencanaan wilayah, dan lingkungan hidup Kota Cilegon.",
    tone: "Formal & Birokratis",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    iconName: "Landmark",
    contohSubjek: "Dinas Kelautan & Perikanan, Bapperida, Dinas Lingkungan Hidup, Polairud",
    iconBg: "bg-sky-50 text-sky-700 border-sky-200/80",
    iconSelectedBg: "bg-sky-600 text-white"
  },
  {
    id: "pelaku_usaha",
    nama: "Pelaku Usaha Perikanan Tangkap",
    target: 15,
    deskripsi: "Nelayan tradisional, juragan kapal motor, ABK, pengusaha armada perahu, dan pedagang ikan hasil tangkapan di pesisir Cilegon.",
    tone: "Bahasa Keseharian Nelayan",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    iconName: "Fish",
    contohSubjek: "Nelayan Pangkalan Medaksa, Pulomerak, Cigading, Juragan Kapal, Bakul Ikan",
    iconBg: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    iconSelectedBg: "bg-emerald-600 text-white"
  },
  {
    id: "masyarakat_pesisir",
    nama: "Masyarakat Pesisir & Komunitas Lokal",
    target: 15,
    deskripsi: "Tokoh masyarakat pesisir, aparatur kelurahan pesisir, pengurus rukun nelayan, dan pelaku wisata pesisir/bahari.",
    tone: "Komunikatif & Warga Pesisir",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    iconName: "Users",
    contohSubjek: "Kelurahan Pesisir, Ketua Rukun Nelayan, Karang Taruna Pesisir, Pengelola Wisata Pantai",
    iconBg: "bg-amber-50 text-amber-700 border-amber-200/80",
    iconSelectedBg: "bg-amber-600 text-white"
  },
  {
    id: "akademisi_lsm",
    nama: "Akademisi / Pakar & LSM Lingkungan",
    target: 3,
    deskripsi: "Peneliti perguruan tinggi bidang kelautan/perikanan dan aktivis organisasi non-pemerintah penggiat konservasi pesisir.",
    tone: "Ilmiah & Akademis",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    iconName: "GraduationCap",
    contohSubjek: "Dosen/Peneliti Kelautan-Perikanan, LSM Konservasi Laut, Pemerhati Lingkungan Selat Sunda",
    iconBg: "bg-purple-50 text-purple-700 border-purple-200/80",
    iconSelectedBg: "bg-purple-600 text-white"
  },
  {
    id: "industri",
    nama: "Industri Sekitar Kawasan Pesisir",
    target: 10,
    deskripsi: "Manajemen dan perwakilan CSR/K3/HSE industri manufaktur, petrokimia, kepelabuhanan, dan PLTU di pesisir Cilegon.",
    tone: "Formal Korporat & ESG",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-300",
    iconName: "Building2",
    contohSubjek: "Manajemen Pabrik, Divisi CSR, Tim Environment/HSE Industri Pesisir Ciwandan-Merak",
    iconBg: "bg-teal-50 text-teal-800 border-teal-200/80",
    iconSelectedBg: "bg-teal-600 text-white"
  }
];

export const DIMENSI_LIST: Dimensi[] = [
  {
    id: "ekologi",
    nama: "Dimensi Ekologi",
    deskripsi: "Kelimpahan stok sumber daya ikan, kualitas perairan Selat Sunda, dan kelestarian ekosistem pesisir.",
    warna: "#10b981", // emerald
    urutan: 1
  },
  {
    id: "ekonomi",
    nama: "Dimensi Ekonomi",
    deskripsi: "Pendapatan nelayan, efisiensi operasional melaut, akses permodalan/pasar, dan nilai tambah hasil laut.",
    warna: "#f59e0b", // amber
    urutan: 2
  },
  {
    id: "sosial",
    nama: "Dimensi Sosial",
    deskripsi: "Solidaritas nelayan, harmonisasi antarpengguna ruang laut, kesetaraan akses, dan keberlanjutan profesi nelayan.",
    warna: "#3b82f6", // blue
    urutan: 3
  },
  {
    id: "tata_kelola",
    nama: "Dimensi Tata Kelola (Governance)",
    deskripsi: "Transparansi, akuntabilitas regulasi, koordinasi lintas pemangku kepentingan, kepatuhan aturan, dan partisipasi.",
    warna: "#8b5cf6", // purple
    urutan: 4
  },
  {
    id: "kelembagaan",
    nama: "Dimensi Kelembagaan & Relasi Kekuatan",
    deskripsi: "Kapasitas organisasi, kejelasan peran instansi/kelompok nelayan, serta pemetaan kepentingan dan pengaruh stakeholder.",
    warna: "#06b6d4", // cyan
    urutan: 5
  }
];

export const VARIABEL_LIST: Variabel[] = [
  {
    id: "V1",
    id_dimensi: "ekologi",
    nama: "Persepsi Kondisi Ekologi",
    deskripsi: "Kondisi stok ikan, mutu perairan, dampak penangkapan, dan dampak aktivitas industri terhadap ekosistem pesisir.",
    urutan: 1
  },
  {
    id: "V2",
    id_dimensi: "ekonomi",
    nama: "Persepsi Aspek Ekonomi",
    deskripsi: "Kontribusi ekonomi perikanan, beban operasional melaut, stabilitas harga/pasar TPI, dan nilai tambah produk.",
    urutan: 2
  },
  {
    id: "V3",
    id_dimensi: "sosial",
    nama: "Persepsi Aspek Sosial",
    deskripsi: "Kohesi sosial nelayan, mitigasi konflik pemanfaatan ruang perairan, keadilan akses, dan regenerasi nelayan.",
    urutan: 3
  },
  {
    id: "V4",
    id_dimensi: "tata_kelola",
    nama: "Persepsi Tata Kelola (Governance)",
    deskripsi: "Transparansi, keterbukaan pengambilan keputusan, koordinasi terpadu lintas sektor, konsistensi regulasi, dan basis data.",
    urutan: 4
  },
  {
    id: "V5",
    id_dimensi: "kelembagaan",
    nama: "Persepsi Kelembagaan",
    deskripsi: "Kapasitas kelembagaan formal/informal, efektivitas kelompok nelayan/koperasi, peran penyuluh, dan kejelasan wewenang.",
    urutan: 5
  },
  {
    id: "V6",
    id_dimensi: "tata_kelola",
    nama: "Tingkat Dukungan Stakeholder",
    deskripsi: "Penerimaan kebijakan keberlanjutan, kepatuhan terhadap aturan penangkapan, dan kesediaan berkolaborasi.",
    urutan: 6
  },
  {
    id: "V7",
    id_dimensi: "tata_kelola",
    nama: "Intensitas Partisipasi",
    deskripsi: "Keikutsertaan dalam musyawarah/rapat, konsultasi publik, penyampaian aspirasi, perumusan, dan pengawasan kebijakan.",
    urutan: 7
  },
  {
    id: "V8",
    id_dimensi: "kelembagaan",
    nama: "Kepentingan (Interest) Stakeholder",
    deskripsi: "Ketergantungan ekonomi, kepentingan sosial budaya, dampak kebijakan terhadap aktivitas, dan atensi regulasi.",
    urutan: 8
  },
  {
    id: "V9",
    id_dimensi: "kelembagaan",
    nama: "Pengaruh (Influence) Stakeholder",
    deskripsi: "Kewenangan hukum, akses langsung ke penentu kebijakan, penguasaan informasi/riset, mobilisasi sumber daya, dan daya tawar.",
    urutan: 9
  }
];

export const INDIKATOR_LIST: Indikator[] = [
  // V1: Persepsi Kondisi Ekologi (4)
  { id: "IND_01", id_variabel: "V1", kode: "EKO-01", deskripsi: "Ketersediaan dan kelimpahan stok sumber daya ikan di perairan Cilegon", urutan: 1 },
  { id: "IND_02", id_variabel: "V1", kode: "EKO-02", deskripsi: "Kualitas dan kesehatan ekosistem perairan pesisir (kejernihan, terumbu karang/mangrove)", urutan: 2 },
  { id: "IND_03", id_variabel: "V1", kode: "EKO-03", deskripsi: "Dampak aktivitas penangkapan ikan terhadap kelestarian lingkungan laut", urutan: 3 },
  { id: "IND_04", id_variabel: "V1", kode: "EKO-04", deskripsi: "Dampak aktivitas industri pesisir terhadap kualitas lingkungan perairan tangkap", urutan: 4 },

  // V2: Persepsi Aspek Ekonomi (4)
  { id: "IND_05", id_variabel: "V2", kode: "EKN-01", deskripsi: "Kontribusi sektor perikanan tangkap terhadap tingkat pendapatan dan kesejahteraan", urutan: 5 },
  { id: "IND_06", id_variabel: "V2", kode: "EKN-02", deskripsi: "Tingkat beban biaya operasional penangkapan (BBM solar, es, perbekalan)", urutan: 6 },
  { id: "IND_07", id_variabel: "V2", kode: "EKN-03", deskripsi: "Akses terhadap permodalan usaha dan stabilitas harga jual di pasar/TPI", urutan: 7 },
  { id: "IND_08", id_variabel: "V2", kode: "EKN-04", deskripsi: "Peluang nilai tambah produk perikanan (pengolahan, rantai dingin, diversifikasi)", urutan: 8 },

  // V3: Persepsi Aspek Sosial (4)
  { id: "IND_09", id_variabel: "V3", kode: "SOS-01", deskripsi: "Tingkat kohesi sosial, keguyuban, dan solidaritas antarnelayan pesisir", urutan: 9 },
  { id: "IND_10", id_variabel: "V3", kode: "SOS-02", deskripsi: "Potensi dan resolusi konflik pemanfaatan ruang laut antarstakeholder", urutan: 10 },
  { id: "IND_11", id_variabel: "V3", kode: "SOS-03", deskripsi: "Keadilan dan kesetaraan akses terhadap wilayah tangkap dan sumber daya laut", urutan: 11 },
  { id: "IND_12", id_variabel: "V3", kode: "SOS-04", deskripsi: "Jaminan keberlanjutan mata pencaharian nelayan dan minat generasi penerus", urutan: 12 },

  // V4: Persepsi Tata Kelola (7)
  { id: "IND_13", id_variabel: "V4", kode: "GOV-01", deskripsi: "Transparansi informasi kebijakan, program, dan bantuan sektor perikanan", urutan: 13 },
  { id: "IND_14", id_variabel: "V4", kode: "GOV-02", deskripsi: "Keterbukaan proses pengambilan keputusan tata kelola perikanan pesisir", urutan: 14 },
  { id: "IND_15", id_variabel: "V4", kode: "GOV-03", deskripsi: "Akuntabilitas dan ketegasan penegakan regulasi di wilayah perairan", urutan: 15 },
  { id: "IND_16", id_variabel: "V4", kode: "GOV-04", deskripsi: "Efektivitas koordinasi lintas instansi/sektor (Pemda, DLH, Polairud, Industri)", urutan: 16 },
  { id: "IND_17", id_variabel: "V4", kode: "GOV-05", deskripsi: "Keterpaduan dan integrasi kepentingan seluruh stakeholder dalam kebijakan", urutan: 17 },
  { id: "IND_18", id_variabel: "V4", kode: "GOV-06", deskripsi: "Konsistensi dan kepastian arah kebijakan pengelolaan jangka panjang", urutan: 18 },
  { id: "IND_19", id_variabel: "V4", kode: "GOV-07", deskripsi: "Pemanfaatan data ilmiah dan kajian lapangan dalam penyusunan kebijakan", urutan: 19 },

  // V5: Persepsi Kelembagaan (4)
  { id: "IND_20", id_variabel: "V5", kode: "KLB-01", deskripsi: "Kapasitas kelembagaan formal (dinas) dan non-formal (kelompok masyarakat)", urutan: 20 },
  { id: "IND_21", id_variabel: "V5", kode: "KLB-02", deskripsi: "Efektivitas kelompok nelayan (KUB, Rukun Nelayan, Koperasi) dalam membina anggota", urutan: 21 },
  { id: "IND_22", id_variabel: "V5", kode: "KLB-03", deskripsi: "Peran dan efektivitas lembaga pendukung (Penyuluh, Perbankan, Akademisi)", urutan: 22 },
  { id: "IND_23", id_variabel: "V5", kode: "KLB-04", deskripsi: "Kejelasan pembagian peran, tugas, dan tanggung jawab antarlembaga", urutan: 23 },

  // V6: Tingkat Dukungan Stakeholder (5)
  { id: "IND_24", id_variabel: "V6", kode: "DUK-01", deskripsi: "Penerimaan dan persetujuan terhadap regulasi pengelolaan perikanan tangkap", urutan: 24 },
  { id: "IND_25", id_variabel: "V6", kode: "DUK-02", deskripsi: "Dukungan terhadap target pengelolaan perikanan yang berkelanjutan dan ramah lingkungan", urutan: 25 },
  { id: "IND_26", id_variabel: "V6", kode: "DUK-03", deskripsi: "Kepatuhan terhadap batas zonasi melaut, perizinan, dan alat tangkap yang diizinkan", urutan: 26 },
  { id: "IND_27", id_variabel: "V6", kode: "DUK-04", deskripsi: "Kesediaan berkontribusi aktif mendukung program perlindungan laut di Cilegon", urutan: 27 },
  { id: "IND_28", id_variabel: "V6", kode: "DUK-05", deskripsi: "Kesiapan berkolaborasi dalam forum kemitraan multipihak pengelolaan pesisir", urutan: 28 },

  // V7: Intensitas Partisipasi (5)
  { id: "IND_29", id_variabel: "V7", kode: "PAR-01", deskripsi: "Frekuensi kehadiran dalam forum pertemuan, rapat koordinasi, atau musyawarah nelayan", urutan: 29 },
  { id: "IND_30", id_variabel: "V7", kode: "PAR-02", deskripsi: "Keterlibatan dalam konsultasi publik perencanaan wilayah pesisir Cilegon", urutan: 30 },
  { id: "IND_31", id_variabel: "V7", kode: "PAR-03", deskripsi: "Keaktifan menyuarakan pendapat, aspirasi, atau pengaduan masalah pesisir", urutan: 31 },
  { id: "IND_32", id_variabel: "V7", kode: "PAR-04", deskripsi: "Keterlibatan dalam tahap perumusan gagasan dan penyusunan program perikanan", urutan: 32 },
  { id: "IND_33", id_variabel: "V7", kode: "PAR-05", deskripsi: "Keterlibatan dalam pemantauan, pengawasan laut, dan evaluasi hasil program", urutan: 33 },

  // V8: Kepentingan (Interest) Stakeholder (4)
  { id: "IND_34", id_variabel: "V8", kode: "INT-01", deskripsi: "Tingkat ketergantungan operasional/ekonomi terhadap keberadaan sumber daya ikan", urutan: 34 },
  { id: "IND_35", id_variabel: "V8", kode: "INT-02", deskripsi: "Kepentingan sosial-budaya dan eksistensi komunitas maritim pesisir", urutan: 35 },
  { id: "IND_36", id_variabel: "V8", kode: "INT-03", deskripsi: "Tingkat keterdampakan langsung oleh kebijakan tata ruang laut dan zonasi pesisir", urutan: 36 },
  { id: "IND_37", id_variabel: "V8", kode: "INT-04", deskripsi: "Tingkat perhatian/antusiasme dalam mencermati dinamika kebijakan perikanan tangkap", urutan: 37 },

  // V9: Pengaruh (Influence) Stakeholder (5)
  { id: "IND_38", id_variabel: "V9", kode: "INF-01", deskripsi: "Kekuatan kewenangan formal, hak regulasi, atau landasan hukum yang dimiliki", urutan: 38 },
  { id: "IND_39", id_variabel: "V9", kode: "INF-02", deskripsi: "Kemudahan akses komunikasi langsung dengan pimpinan pengambil kebijakan kunci", urutan: 39 },
  { id: "IND_40", id_variabel: "V9", kode: "INF-03", deskripsi: "Akses terhadap penguasaan data riset, keahlian teknis, dan informasi strategis", urutan: 40 },
  { id: "IND_41", id_variabel: "V9", kode: "INF-04", deskripsi: "Kapasitas memobilisasi sumber daya (anggaran, personel, armada kapal, massa)", urutan: 41 },
  { id: "IND_42", id_variabel: "V9", kode: "INF-05", deskripsi: "Daya tawar posisi (bargaining power) dan kekuatan jejaring kolaborasi lintas sektor", urutan: 42 }
];
