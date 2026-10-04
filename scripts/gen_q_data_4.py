# -*- coding: utf-8 -*-
ALL_INDICATORS = []

# =========================================================================
# V5: PERSEPSI KELEMBAGAAN (4 Indikator)
# =========================================================================

ALL_INDICATORS.append({
    "section": "V5: PERSEPSI KELEMBAGAAN (4 Indikator)",
    "id": "IND_20",
    "name": "Kapasitas kelembagaan dinas",
    "questions": {
        "pemda": {
            "teks": "Bagaimana penilaian Anda terhadap kapasitas SDM, ketersediaan anggaran, dan sarana prasarana dinas dalam mengelola sektor perikanan di Cilegon?",
            "skala": {1: "Sangat Minim/Defisit Akut", 2: "Kurang Memadai", 3: "Cukup Memadai", 4: "Kapasitas Sangat Baik", 5: "Kapasitas Lembaga Sangat Unggul & Modern"}
        },
        "pelaku_usaha": {
            "teks": "Bagaimana kesigapan dan kemampuan petugas dinas perikanan di Cilegon saat melayani keluhan, mengurus surat kapal, atau membantu nelayan?",
            "skala": {1: "Sangat Lambat / Tidak Mau Bantu", 2: "Kurang Tanggap", 3: "Cukup Membantu", 4: "Sigap & Ramah", 5: "Sangat Cepat, Sigap & Peduli Nelayan"}
        },
        "masyarakat_pesisir": {
            "teks": "Bagaimana kemampuan dan fasilitas kantor kelurahan/pos pelayanan pesisir dalam menampung urusan dan kebutuhan masyarakat nelayan?",
            "skala": {1: "Sangat Buruk / Tidak Berfungsi", 2: "Kurang Memadai", 3: "Cukup Berfungsi", 4: "Pelayanan Baik", 5: "Pelayanan Sangat Prima & Sigap"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana kapasitas kelembagaan aparatur teknis Pemkot Cilegon serta kelembagaan lokal dalam mengelola perikanan tangkap berkelanjutan?",
            "skala": {1: "Institutional Incapability Akut", 2: "Kapasitas Rendah", 3: "Kapasitas Moderat", 4: "Kapasitas Kelembagaan Baik", 5: "Kapasitas Sangat Adaptif & Profesional"}
        },
        "industri": {
            "teks": "Bagaimana profesionalitas dan kapabilitas tim dinas terkait dalam bermitra dengan korporasi mengelola kawasan maritim pesisir Cilegon?",
            "skala": {1: "Sangat Tidak Profesional", 2: "Kurang Responsif", 3: "Cukup Profesional", 4: "Profesional & Kooperatif", 5: "Sangat Profesional & Standar Tinggi"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_21",
    "name": "Efektivitas kelompok nelayan (KUB/HNSI)",
    "questions": {
        "pemda": {
            "teks": "Seberapa efektif peran Kelompok Usaha Bersama (KUB), Himpunan Nelayan Seluruh Indonesia (HNSI), dan koperasi perikanan dalam mengorganisir anggotanya secara mandiri di Cilegon?",
            "skala": {1: "Kelompok Pasif / Hanya Nama (Mati Suri)", 2: "Kurang Berfungsi", 3: "Cukup Berjalan", 4: "Organisasi Mandiri & Aktif", 5: "Sangat Solid, Mandiri & Berdaya Maju"}
        },
        "pelaku_usaha": {
            "teks": "Seberapa aktif kelompok nelayan (KUB atau Rukun Nelayan HNSI) tempat Bapak/Ibu bernaung dalam mengadakan pertemuan rutin, usaha bersama, dan membantu menyelesaikan kesulitan anggota?",
            "skala": {1: "Tidak Aktif / Hanya Nama Saja", 2: "Kurang Berjalan", 3: "Cukup Aktif Berkala", 4: "Aktif Membantu Anggota", 5: "Sangat Aktif, Solid & Mandiri"}
        },
        "masyarakat_pesisir": {
            "teks": "Bagaimana keaktifan pengurus rukun nelayan dan ketua KUB dalam memimpin warga serta menjaga ketertiban pangkalan nelayan di wilayah sekitar?",
            "skala": {1: "Sangat Pasif / Tidak Peduli", 2: "Kurang Berperan", 3: "Cukup Memimpin", 4: "Aktif & Mengayomi Warga", 5: "Sangat Berwibawa, Kompak & Mengayomi"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana tingkat efektivitas tata kelola organisasi, akuntabilitas, dan peran representasi kelompok nelayan (KUB dan HNSI Kota Cilegon) dalam memperjuangkan anggotanya?",
            "skala": {1: "Kelembagaan Nelayan Lumpuh", 2: "Tata Kelola Lemah", 3: "Cukup Berfungsi Representatif", 4: "Organisasi Efektif & Solid", 5: "Self-Governance Sangat Kuat & Berdaya Tawar Tinggi"}
        },
        "industri": {
            "teks": "Seberapa terstruktur dan komunikatif kelompok nelayan (KUB) maupun pengurus HNSI saat industri hendak menyalurkan program CSR atau melakukan mediasi di lapangan?",
            "skala": {1: "Sangat Sulit Berkomunikasi", 2: "Kurang Terstruktur", 3: "Cukup Kooperatif", 4: "Terstruktur & Mudah Berkomunikasi", 5: "Kemitraan Sangat Rapi, Terbuka & Solutif"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_22",
    "name": "Efektivitas lembaga pendukung (penyuluh/kampus)",
    "questions": {
        "pemda": {
            "teks": "Bagaimana kontribusi lembaga pendukung seperti Penyuluh Perikanan Lapangan (PPL), perguruan tinggi, dan perbankan dalam memajukan perikanan Cilegon?",
            "skala": {1: "Sama Sekali Tidak Ada Peran", 2: "Peran Sangat Minim", 3: "Cukup Membantu", 4: "Pendampingan Sangat Baik", 5: "Sinergi Lembaga Pendukung Sangat Berdampak Luas"}
        },
        "pelaku_usaha": {
            "teks": "Apakah petugas penyuluh perikanan sering datang menemui nelayan untuk mengajari teknik baru, merawat mesin, atau memberi info cuaca laut?",
            "skala": {1: "Tidak Pernah Muncul Sama Sekali", 2: "Sangat Jarang Datang", 3: "Kadang Datang Berkunjung", 4: "Rutin Datang Membantu", 5: "Selalu Hadir Mendampingi Nelayan"}
        },
        "masyarakat_pesisir": {
            "teks": "Sejauh mana kehadiran petugas penyuluh, puskesmas pesisir, dan lembaga pelatihan terasa manfaatnya bagi kemajuan warga pesisir Cilegon?",
            "skala": {1: "Tidak Ada Manfaatnya", 2: "Kurang Terasa", 3: "Cukup Bermanfaat", 4: "Sangat Bermanfaat Nyata", 5: "Sangat Dirasakan Memajukan Warga Pesisir"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana efektivitas fungsi intermediasi, pembinaan penyuluh, dan transfer ilmu pengetahuan oleh lembaga pendukung (kampus, penyuluh, perbankan) di Cilegon?",
            "skala": {1: "Intermediasi Gagal Total", 2: "Transfer Ilmu Rendah", 3: "Cukup Berjalan", 4: "Fungsi Pendampingan Berjalan Baik", 5: "Ekosistem Inovasi Pesisir Sangat Efektif"}
        },
        "industri": {
            "teks": "Sejauh mana kelembagaan pendukung seperti balai riset atau dinas terkait memfasilitasi program sinergi lingkungan industri-pesisir?",
            "skala": {1: "Tidak Pernah Memfasilitasi", 2: "Fasilitasi Minim", 3: "Cukup Membantu", 4: "Aktif Menjembatani Kemitraan", 5: "Fasilitator Sangat Solutif & Terpercaya"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_23",
    "name": "Kejelasan pembagian peran dan wewenang (UU 23/2014)",
    "questions": {
        "pemda": {
            "teks": "Bagaimana kejelasan regulasi terkait pembagian kewenangan antara Pemerintah Kota (DKPP) dan Pemerintah Provinsi Banten (UU 23/2014) di wilayah perairan?",
            "skala": {1: "Sangat Tumpang Tindih & Membingungkan", 2: "Kerap Menimbulkan Keraguan", 3: "Cukup Jelas Batasannya", 4: "Sangat Jelas & Terkoordinasi", 5: "Harmonisasi Kewenangan Sangat Teratur & Tuntas"}
        },
        "pelaku_usaha": {
            "teks": "Seberapa jelas dan mudah dipahami pembagian tempat pengurusan izin atau kelengkapan surat kapal antara dinas perikanan kota dan kantor provinsi/syahbandar?",
            "skala": {1: "Sangat Membingungkan & Berbelit", 2: "Kurang Jelas Prosedurnya", 3: "Cukup Jelas Dipahami", 4: "Jelas & Mudah Diurus", 5: "Sangat Jelas, Mudah & Cepat"}
        },
        "masyarakat_pesisir": {
            "teks": "Apakah warga pesisir memahami secara jelas tugas kelurahan, dinas perikanan, dan aparat laut sehingga mudah saat butuh pertolongan?",
            "skala": {1: "Sama Sekali Tidak Paham", 2: "Sering Bingung", 3: "Cukup Tahu Kemana Melapor", 4: "Paham Jelas Alurnya", 5: "Sangat Paham & Layanan Sangat Jelas"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana kejelasan jurisdiksi dan sinkronisasi pembagian wewenang antara Pemkot Cilegon dan Pemprov Banten (UU 23/2014) dalam tata kelola perikanan pesisir?",
            "skala": {1: "Vakum Regulasi / Tumpang Tindih Berat", 2: "Sinkronisasi Rendah", 3: "Cukup Jelas Pembagiannya", 4: "Batas Jurisdiksi Jelas", 5: "Tata Kelola Kolaboratif Lintas Hirarki Sangat Terpadu"}
        },
        "industri": {
            "teks": "Bagaimana kejelasan batas wewenang perizinan kelautan antara Pemda Cilegon, Pemprov Banten, dan Kementerian Perhubungan (KSOP) bagi operasional industri?",
            "skala": {1: "Birokrasi Tumpang Tindih Parah", 2: "Sering Timbul Ketidakpastian", 3: "Cukup Jelas Alurnya", 4: "Jelas & Tertib Regulasi", 5: "Kepastian Regulasi Sangat Gamblang & Terpadu"}
        }
    }
})

# =========================================================================
# V6: TINGKAT DUKUNGAN STAKEHOLDER (5 Indikator)
# =========================================================================

ALL_INDICATORS.append({
    "section": "V6: TINGKAT DUKUNGAN STAKEHOLDER (5 Indikator)",
    "id": "IND_24",
    "name": "Penerimaan terhadap regulasi keberlanjutan",
    "questions": {
        "pemda": {
            "teks": "Bagaimana komitmen instansi Anda dalam mendukung dan merealisasikan regulasi daerah tentang perlindungan dan keberlanjutan perikanan tangkap di Cilegon?",
            "skala": {1: "Sangat Tidak Berkomitmen", 2: "Dukungan Sangat Pasif", 3: "Cukup Mendukung", 4: "Komitmen Kuat Mendukung", 5: "Sangat Berkomitmen Menjadi Garda Terdepan"}
        },
        "pelaku_usaha": {
            "teks": "Apakah Bapak/Ibu setuju dan menerima jika pemerintah membuat aturan pengelolaan laut demi kebaikan bersama dan rezeki nelayan ke depan?",
            "skala": {1: "Sangat Menolak Aturan Baru", 2: "Kurang Menerima", 3: "Menerima Asal Tidak Rugi", 4: "Setuju & Menerima Baik", 5: "Sangat Setuju, Ikhlas & Mendukung Penuh"}
        },
        "masyarakat_pesisir": {
            "teks": "Bagaimana dukungan warga pesisir terhadap aturan dan kebijakan pemerintah dalam menata lingkungan pantai dan pelabuhan perikanan Cilegon?",
            "skala": {1: "Banyak yang Menolak/Protes", 2: "Kurang Mendukung", 3: "Cukup Menerima", 4: "Mendukung Tertib Pantai", 5: "Sangat Mendukung Penuh Kebijakan Pemda"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana tingkat akseptabilitas dan komitmen institusi Anda (kampus / organisasi nelayan HNSI) terhadap kebijakan pengelolaan perikanan tangkap berkelanjutan di Cilegon?",
            "skala": {1: "Sangat Menolak / Skeptis", 2: "Kurang Mendukung", 3: "Mendukung Bersyarat", 4: "Menerima & Mendukung Baik", 5: "Sangat Mendukung Penuh & Berkomitmen Kuat"}
        },
        "industri": {
            "teks": "Bagaimana komitmen manajemen korporasi dalam mendukung arah kebijakan pemda terkait pelestarian kawasan maritim dan perikanan tangkap pesisir?",
            "skala": {1: "Mengabaikan Kebijakan Pemda", 2: "Kepatuhan Terpaksa", 3: "Cukup Patuh Standar", 4: "Komitmen Manajemen Tinggi", 5: "Integrasi Penuh dalam Kebijakan Strategis Korporasi"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_25",
    "name": "Persetujuan tujuan keberlanjutan",
    "questions": {
        "pemda": {
            "teks": "Seberapa kuat persetujuan Anda bahwa perikanan tangkap Kota Cilegon harus dikelola dengan prinsip keberlanjutan demi anak cucu?",
            "skala": {1: "Sangat Tidak Setuju", 2: "Kurang Setuju", 3: "Netral/Cukup Setuju", 4: "Sangat Setuju", 5: "Mutlak Setuju Menjadi Amanah Bersama"}
        },
        "pelaku_usaha": {
            "teks": "Apakah Bapak/Ibu setuju bahwa laut Cilegon harus dijaga agar ikannya tidak habis supaya anak cucu kita kelak masih bisa melaut dan makan ikan?",
            "skala": {1: "Sangat Tidak Setuju / Habiskan Saja", 2: "Kurang Peduli Masa Depan", 3: "Cukup Setuju", 4: "Setuju Harus Dijaga", 5: "Sangat Setuju Wajib Dijaga Demi Anak Cucu"}
        },
        "masyarakat_pesisir": {
            "teks": "Apakah warga sepakat bahwa menjaga kelestarian laut pesisir Cilegon sangat penting agar sumber rezeki nelayan tidak punah?",
            "skala": {1: "Tidak Peduli Laut", 2: "Kurang Peduli", 3: "Cukup Sepakat", 4: "Sepakat Wajib Dilindungi", 5: "Sangat Sepakat Menjadi Harga Mati"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana keselarasan visi institusi Anda terhadap tujuan keberlanjutan perikanan tangkap dan perlindungan ekosistem laut di kawasan pesisir Cilegon?",
            "skala": {1: "Sangat Bertentangan / Tidak Selaras", 2: "Kurang Selaras", 3: "Cukup Selaras", 4: "Sangat Selaras & Sejalan", 5: "Sangat Sinergis Menjadi Visi Utama"}
        },
        "industri": {
            "teks": "Seberapa sejalan tujuan keberlanjutan perikanan pesisir Cilegon dengan pilar Sustainability / CSR yang dicanangkan oleh korporasi Anda?",
            "skala": {1: "Bertolak Belakang", 2: "Kurang Relevan", 3: "Cukup Selaras", 4: "Sangat Sejalan", 5: "Menjadi KPI Utama Keberlanjutan Perusahaan"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_26",
    "name": "Kepatuhan terhadap aturan penangkapan",
    "questions": {
        "pemda": {
            "teks": "Sejauh mana aparatur instansi Anda mematuhi standar operasional prosedur dan etika pelayanan dalam tata kelola perikanan pesisir?",
            "skala": {1: "Sering Terjadi Pelanggaran SOP", 2: "Kepatuhan Kurang Konsisten", 3: "Sesuai Standar Minimal", 4: "Kepatuhan Tinggi & Tertib", 5: "Kepatuhan Sangat Tinggi / Zero Tolerance Pelanggaran"}
        },
        "pelaku_usaha": {
            "teks": "Sejauh mana kesediaan dan keikhlasan Bapak/Ibu untuk selalu mematuhi aturan melaut ramah lingkungan (tidak menangkap anakan ikan dan tidak merusak terumbu karang)?",
            "skala": {1: "Sangat Berat / Kerap Terpaksa Melanggar", 2: "Kurang Rela Mematuhi", 3: "Bersedia Patuh Sebagian", 4: "Ikhlas & Patuh Aturan", 5: "Sangat Rela, Ikhlas & Berkomitmen Penuh"}
        },
        "masyarakat_pesisir": {
            "teks": "Bagaimana kepatuhan warga sekitar pantai untuk tidak membuang sampah ke laut dan menaati batas sempadan pantai?",
            "skala": {1: "Sampah Selalu Dibuang ke Laut", 2: "Kepatuhan Masih Rendah", 3: "Cukup Sadar Kebersihan", 4: "Warga Tertib Menjaga Pantai", 5: "Budaya Bersih Pantai Sangat Kuat"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana komitmen institusi Anda dalam mendorong kepatuhan terhadap aturan perikanan ramah lingkungan serta perlindungan ruang laut di Cilegon?",
            "skala": {1: "Sangat Rendah / Diabaikan", 2: "Rendah", 3: "Cukup Berkomitmen", 4: "Tinggi & Disiplin", 5: "Sangat Tinggi & Menjadi Teladan Advokasi"}
        },
        "industri": {
            "teks": "Bagaimana tingkat kepatuhan perusahaan Anda terhadap izin pembuangan limbah cair (IPLC), izin zonasi terminal khusus, dan baku mutu perairan?",
            "skala": {1: "Sering Ditegur DLH/KLHK", 2: "Masih Ada Catatan Audit", 3: "Memenuhi Syarat Minimal", 4: "Kepatuhan Tinggi (Proper Biru/Hijau)", 5: "Proper Emas / Kepatuhan Lingkungan Teladan"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_27",
    "name": "Kesediaan berkontribusi aktif",
    "questions": {
        "pemda": {
            "teks": "Seberapa besar kesiapan instansi Anda mengalokasikan anggaran, program aksi, dan pendampingan lapangan bagi kelestarian perikanan tangkap?",
            "skala": {1: "Tidak Ada Alokasi Anggaran", 2: "Dukungan Anggaran Minim", 3: "Anggaran Terbatas Standar", 4: "Alokasi Program Cukup Besar", 5: "Dukungan Anggaran & Fasilitas Sangat Maksimal"}
        },
        "pelaku_usaha": {
            "teks": "Apakah Bapak/Ibu bersedia ikut serta membantu jika ada program penanaman mangrove, pemasangan rumpon bersama, atau bersih pantai?",
            "skala": {1: "Menolak Ikut Serta", 2: "Malas / Tidak Sempat", 3: "Ikut Jika Diberi Uang Lelah", 4: "Siap Menyumbang Tenaga", 5: "Sangat Siap Menjadi Relawan Terdepan"}
        },
        "masyarakat_pesisir": {
            "teks": "Apakah warga bersedia menyumbangkan tenaga dan waktu untuk menyukseskan program kebersihan dan kelestarian pantai kampung pesisir?",
            "skala": {1: "Cuek / Tidak Bersedia", 2: "Hanya Sedikit yang Mau", 3: "Mau Ikut Bergiliran", 4: "Guyub Turun Kerja Bakti", 5: "Semangat Swadaya Warga Sangat Tinggi"}
        },
        "akademisi_lsm": {
            "teks": "Seberapa siap institusi perguruan tinggi atau organisasi nelayan (HNSI) Anda menyediakan narasumber pakar, kajian kebijakan, atau pendampingan langsung bagi nelayan pesisir Cilegon?",
            "skala": {1: "Sama Sekali Belum Siap", 2: "Kurang Siap / Terkendala Sumber Daya", 3: "Cukup Siap", 4: "Siap Berkontribusi Aktif", 5: "Sangat Siap & Proaktif Mendampingi"}
        },
        "industri": {
            "teks": "Seberapa besar kesiapan korporasi mengalokasikan dana CSR / program kemitraan untuk konservasi laut dan pemberdayaan nelayan Cilegon?",
            "skala": {1: "Nol Alokasi CSR Nelayan", 2: "Alokasi Sangat Kecil", 3: "Ada Program Reguler", 4: "Program CSR Berdampak Besar", 5: "Program Berkelanjutan Jangka Panjang & Anggaran Besar"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_28",
    "name": "Kesiapan berkolaborasi",
    "questions": {
        "pemda": {
            "teks": "Bagaimana keterbukaan instansi Anda untuk membentuk forum kemitraan kolaboratif (Pentahelix) pengelola pesisir bersama industri, kampus, dan nelayan?",
            "skala": {1: "Sangat Tertutup / Enggan Kolaborasi", 2: "Kurang Terbuka", 3: "Cukup Terbuka", 4: "Sangat Terbuka Berkolaborasi", 5: "Inisiator Utama Forum Kemitraan Multipihak"}
        },
        "pelaku_usaha": {
            "teks": "Apakah nelayan siap duduk bersama satu meja dengan pihak pabrik industri, dinas, dan pakar untuk mencari solusi masalah laut Cilegon?",
            "skala": {1: "Tidak Mau Bertemu Pihak Luar", 2: "Kurang Berminat", 3: "Bersedia Jika Dijamin Adil", 4: "Siap Duduk Musyawarah", 5: "Sangat Siap, Antusias & Terbuka Bekerja Sama"}
        },
        "masyarakat_pesisir": {
            "teks": "Bagaimana kesiapan tokoh masyarakat pesisir untuk bekerja sama dengan pihak luar demi kemajuan ekonomi pantai Cilegon?",
            "skala": {1: "Menutup Diri", 2: "Kurang Percaya Pihak Luar", 3: "Cukup Menyambut Baik", 4: "Terbuka Menjalin Kerja Sama", 5: "Sangat Terbuka & Ramah Bermitra"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana kesiapan institusi Anda untuk menjadi mitra strategis, penyalur aspirasi, dan fasilitator dalam forum kemitraan multipihak (Pentahelix) di Kota Cilegon?",
            "skala": {1: "Sangat Tidak Siap / Enggan Bergabung", 2: "Kurang Berminat", 3: "Cukup Siap Bekerja Sama", 4: "Siap Menjadi Mitra Konstruktif", 5: "Sangat Siap Memimpin Kolaborasi Multipihak"}
        },
        "industri": {
            "teks": "Seberapa siap korporasi bergabung dalam forum komunikasi berkala bersama kelompok nelayan, akademisi, dan pemda di kawasan pesisir Cilegon?",
            "skala": {1: "Menolak Bergabung", 2: "Kurang Berminat Terikat Forum", 3: "Siap Hadir Pasif", 4: "Siap Berperan Aktif", 5: "Sangat Berkomitmen Menjadi Sponsor & Mitra Aktif"}
        }
    }
})

print("Part 4 defined.")
