# -*- coding: utf-8 -*-
"""
Script to generate the complete, revised questionBank.ts with all 210 questions,
perfectly aligned with Proposal_tesis.docx.
"""

import json

# Define the complete dataset of 42 indicators
ALL_INDICATORS = []

# =========================================================================
# V1: PERSEPSI KONDISI EKOLOGI (4 Indikator)
# =========================================================================

ALL_INDICATORS.append({
    "section": "V1: PERSEPSI KONDISI EKOLOGI (4 Indikator)",
    "id": "IND_01",
    "name": "Ketersediaan stok ikan",
    "questions": {
        "pemda": {
            "teks": "Bagaimana penilaian Anda terhadap tren kelimpahan dan ketersediaan stok sumber daya ikan di wilayah perairan Kota Cilegon saat ini dibandingkan target daya dukung lestari (MSY)?",
            "skala": {1: "Sangat Menipis/Kritis", 2: "Menurun", 3: "Moderat/Sedang", 4: "Mencukupi", 5: "Sangat Melimpah & Lestari"}
        },
        "pelaku_usaha": {
            "teks": "Menurut Bapak/Ibu, apakah jumlah ikan yang bisa ditangkap di laut Cilegon saat ini masih banyak dan mudah didapat seperti beberapa tahun lalu?",
            "skala": {1: "Sangat Sedikit & Susah Sekali", 2: "Mulai Berkurang", 3: "Biasa Saja / Pas-pasan", 4: "Masih Lumayan Banyak", 5: "Sangat Banyak & Melimpah"}
        },
        "masyarakat_pesisir": {
            "teks": "Bagaimana pandangan warga terhadap ketersediaan hasil tangkapan ikan laut segar yang dibawa pulang oleh para nelayan di lingkungan pesisir Cilegon saat ini?",
            "skala": {1: "Sangat Langka/Sulit", 2: "Berkurang", 3: "Cukup Tersedia", 4: "Banyak Tersedia", 5: "Sangat Melimpah"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana evaluasi ilmiah dan kajian lapangan Anda terhadap status biomassa serta tren kelimpahan stok sumber daya ikan di perairan pesisir Kota Cilegon saat ini?",
            "skala": {1: "Mengalami Overfished Akut", 2: "Terindikasi Menurun", 3: "Mendekati Batas MSY", 4: "Kondisi Sehat Terjaga", 5: "Sangat Berkelanjutan"}
        },
        "industri": {
            "teks": "Bagaimana observasi perusahaan Anda terhadap kelangsungan stok biota laut dan perikanan tangkap di perairan sekitar kawasan operasional pesisir Cilegon?",
            "skala": {1: "Sangat Menurun Drastis", 2: "Cenderung Menurun", 3: "Stabil / Cukup", 4: "Kondisi Baik", 5: "Sangat Baik & Terjaga"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_02",
    "name": "Kualitas ekosistem pesisir",
    "questions": {
        "pemda": {
            "teks": "Bagaimana penilaian Anda terhadap baku mutu perairan laut serta kondisi habitat pesisir (terumbu karang, mangrove, estuari) di pesisir Cilegon?",
            "skala": {1: "Sangat Rusak/Tercemar Berat", 2: "Kurang Baik/Terdegradasi", 3: "Cukup Memadai", 4: "Kondisi Baik", 5: "Sangat Sehat & Terawat Prima"}
        },
        "pelaku_usaha": {
            "teks": "Bagaimana kejernihan air laut, karang tempat sarang ikan, dan kebersihan pantai di wilayah tempat Bapak/Ibu biasa melaut atau menyandarkan perahu?",
            "skala": {1: "Sangat Keruh/Kotor/Rusak", 2: "Kurang Bersih", 3: "Sedang-sedang Saja", 4: "Bersih & Ikan Betah", 5: "Sangat Jernih, Karang Bagus"}
        },
        "masyarakat_pesisir": {
            "teks": "Bagaimana kondisi kebersihan air laut dan kelestarian lingkungan pantai di sekitar pemukiman warga pesisir Cilegon saat ini?",
            "skala": {1: "Sangat Tercemar & Rusak", 2: "Banyak Sampah/Limbah", 3: "Cukup Terawat", 4: "Bersih & Nyaman", 5: "Sangat Asri & Alami"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana indeks integritas ekologis, tutupan karang/mangrove, dan parameter mutu perairan laut di wilayah pesisir Kota Cilegon saat ini?",
            "skala": {1: "Degradasi Sangat Kritis", 2: "Kualitas Menurun", 3: "Toleransi Ambang Batas", 4: "Kualitas Ekosistem Baik", 5: "Ekosistem Sangat Prima"}
        },
        "industri": {
            "teks": "Sejauh mana kualitas lingkungan perairan laut dan sempadan pantai di sekitar wilayah kerja korporasi berada dalam kondisi ekologis yang prima?",
            "skala": {1: "Sangat Memprihatinkan", 2: "Perlu Banyak Perbaikan", 3: "Memenuhi Standar Minimal", 4: "Kondisi Lingkungan Baik", 5: "Sangat Baik Melampaui Baku Mutu"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_03",
    "name": "Dampak aktivitas penangkapan",
    "questions": {
        "pemda": {
            "teks": "Sejauh mana aktivitas penangkapan ikan oleh armada perikanan di perairan Cilegon dinilai tetap ramah lingkungan dan tidak merusak habitat laut?",
            "skala": {1: "Sangat Merusak/Banyak Pelanggaran", 2: "Cenderung Merusak", 3: "Cukup Terkendali", 4: "Ramah Lingkungan", 5: "Sangat Ramah & Tertib Regulasi"}
        },
        "pelaku_usaha": {
            "teks": "Apakah cara dan alat tangkap (jaring, pancing, bubu) yang dipakai rekan-rekan nelayan di Cilegon aman dan tidak merusak anakan ikan atau karang?",
            "skala": {1: "Banyak yang Merusak Karang", 2: "Masih Ada yang Merusak", 3: "Sebagian Besar Aman", 4: "Tertib Pakai Alat Ramah", 5: "Semua Tertib Menjaga Laut"}
        },
        "masyarakat_pesisir": {
            "teks": "Bagaimana penilaian warga terhadap cara menangkap ikan yang dilakukan nelayan lokal, apakah menjaga kelestarian bibit ikan dan laut?",
            "skala": {1: "Sering Merusak Laut", 2: "Kurang Peduli Kelestarian", 3: "Cukup Baik", 4: "Peduli Kelestarian Laut", 5: "Sangat Peduli & Berkelanjutan"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana tingkat selektivitas alat tangkap dan efektivitas pencegahan penangkapan ikan yang merusak (destructive fishing) pada armada perikanan Cilegon?",
            "skala": {1: "Tingkat Destruktif Tinggi", 2: "Selektivitas Rendah", 3: "Selektivitas Sedang", 4: "Alat Tangkap Ramah Lingkungan", 5: "Sangat Selektif & Best Practice"}
        },
        "industri": {
            "teks": "Bagaimana pandangan industri terhadap praktik penangkapan ikan di perairan sekitar dermaga/pelabuhan, apakah berlangsung tertib dan ramah lingkungan?",
            "skala": {1: "Sering Mengabaikan Kelestarian", 2: "Kurang Tertib", 3: "Cukup Tertib", 4: "Tertib & Bertanggung Jawab", 5: "Sangat Ramah Lingkungan & Aman"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_04",
    "name": "Dampak aktivitas industri pesisir",
    "questions": {
        "pemda": {
            "teks": "Sejauh mana pengelolaan limbah cair, limpasan bahang, dan lalu lintas perkapalan industri di pesisir Cilegon tidak mengganggu ekosistem perikanan tangkap?",
            "skala": {1: "Dampak Negatif Sangat Berat", 2: "Dampak Cukup Mengganggu", 3: "Terkendali Standar Minimum", 4: "Dikelola dengan Sangat Baik", 5: "Nol Gangguan / Sangat Aman"}
        },
        "pelaku_usaha": {
            "teks": "Sejauh mana aktivitas industri pesisir (seperti buangan limbah pabrik, pipa pendingin, atau lalu lintas kapal tongkang) mengganggu tempat Bapak/Ibu mencari ikan?",
            "skala": {1: "Sangat Mengganggu/Ikan Menjauh", 2: "Sering Mengganggu Melaut", 3: "Kadang-kadang Mengganggu", 4: "Jarang Mengganggu", 5: "Sama Sekali Tidak Mengganggu / Aman"}
        },
        "masyarakat_pesisir": {
            "teks": "Sejauh mana keberadaan kawasan industri di sepanjang pantai Cilegon mempengaruhi kenyamanan warga dan kelestarian ikan di laut sekitar?",
            "skala": {1: "Berdampak Sangat Buruk", 2: "Banyak Mengurangi Ikan", 3: "Ada Dampak Namun Wajar", 4: "Dampak Terkelola Baik", 5: "Lingkungan Pesisir Tetap Asri"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana evaluasi Anda mengenai tingkat kepatuhan baku mutu lingkungan industri pesisir dan efektivitas pengendalian dampak pencemaran terhadap daerah penangkapan ikan di Cilegon?",
            "skala": {1: "Tekanan Polusi Sangat Tinggi", 2: "Banyak Titik Kritis Limbah", 3: "Memenuhi Baku Mutu Minimal", 4: "Mitigasi Berjalan Efektif", 5: "Sistem Pengelolaan Limbah Unggul"}
        },
        "industri": {
            "teks": "Seberapa efektif sistem pengelolaan limbah cair, termal, dan program perlindungan lingkungan laut yang diterapkan industri perusahaan Anda di pesisir Cilegon?",
            "skala": {1: "Masih Memerlukan Banyak Audit", 2: "Cukup Berpotensi Terdampak", 3: "Sesuai Regulasi Standar", 4: "Sangat Ketat & Terkendali", 5: "Zero Discharge & Best ESG Standard"}
        }
    }
})

# =========================================================================
# V2: PERSEPSI ASPEK EKONOMI (4 Indikator)
# =========================================================================

ALL_INDICATORS.append({
    "section": "V2: PERSEPSI ASPEK EKONOMI (4 Indikator)",
    "id": "IND_05",
    "name": "Kontribusi perikanan terhadap pendapatan",
    "questions": {
        "pemda": {
            "teks": "Bagaimana penilaian Anda terhadap kontribusi sektor perikanan tangkap dalam menopang perekonomian keluarga nelayan dan PAD Kota Cilegon?",
            "skala": {1: "Sangat Tidak Memadai/Minus", 2: "Kurang Memadai", 3: "Cukup Menopang Hidup", 4: "Memberi Pendapatan Baik", 5: "Sangat Menyejahterakan & Berkelanjutan"}
        },
        "pelaku_usaha": {
            "teks": "Apakah penghasilan dari hasil melaut atau menjual ikan saat ini cukup untuk memenuhi kebutuhan sehari-hari keluarga dan biaya sekolah anak?",
            "skala": {1: "Sangat Kurang/Terlilit Hutang", 2: "Sering Kurang", 3: "Pas-pasan untuk Dapur", 4: "Cukup & Ada Tabungan", 5: "Sangat Cukup & Sejahtera"}
        },
        "masyarakat_pesisir": {
            "teks": "Menurut pandangan warga, apakah usaha perikanan laut mampu memberikan rezeki dan taraf hidup yang layak bagi keluarga nelayan di pesisir Cilegon?",
            "skala": {1: "Sangat Miskin/Tertinggal", 2: "Masih Susah", 3: "Cukup Layak", 4: "Taraf Hidup Baik", 5: "Sangat Makmur & Berkecukupan"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana analisis kelayakan ekonomi dan rata-rata pendapatan bersih (net profit margin) usaha nelayan tangkap skala kecil di Kota Cilegon?",
            "skala": {1: "Di Bawah Garis Kemiskinan", 2: "Di Bawah UMK Cilegon", 3: "Mendekati Upah Minimum", 4: "Layak Secara Finansial", 5: "Sangat Layak & Rentabilitas Tinggi"}
        },
        "industri": {
            "teks": "Bagaimana peran sektor perikanan tangkap dalam menjaga ketahanan ekonomi dan stabilitas rantai pasok pangan masyarakat sekitar kawasan industri Cilegon?",
            "skala": {1: "Sangat Minim/Marginal", 2: "Kurang Berperan", 3: "Cukup Berkontribusi", 4: "Penyangga Ekonomi Penting", 5: "Pilar Ketahanan Pangan Utama"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_06",
    "name": "Biaya operasional",
    "questions": {
        "pemda": {
            "teks": "Bagaimana tingkat keterjangkauan dan efisiensi biaya operasional (BBM solar subsidi, es balok, perbekalan) bagi nelayan tangkap di Cilegon?",
            "skala": {1: "Sangat Mahal/Sangat Berat", 2: "Cukup Memberatkan", 3: "Wajar/Sedang", 4: "Terjangkau & Efisien", 5: "Sangat Terjangkau & Efisien"}
        },
        "pelaku_usaha": {
            "teks": "Bagaimana beban pengeluaran untuk membeli solar subsidi, es balok, dan bekal setiap kali melaut, serta kemudahan mendapatkannya di Cilegon?",
            "skala": {1: "Sangat Mahal & Solar Susah Sekali", 2: "Memberatkan Biaya Melaut", 3: "Biasa Saja / Masih Terjangkau", 4: "Cukup Terjangkau & Mudah", 5: "Sangat Terjangkau, Mudah & Lancar"}
        },
        "masyarakat_pesisir": {
            "teks": "Bagaimana kemudahan nelayan di lingkungan sekitar dalam memperoleh solar subsidi dan es balok untuk melaut dengan harga terjangkau?",
            "skala": {1: "Sangat Sulit & Mahal Sekali", 2: "Sering Terkendala", 3: "Cukup Tersedia", 4: "Mudah & Terjangkau", 5: "Sangat Mudah, Murah & Terjamin"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana rasio biaya operasional terhadap total penerimaan (Revenue-Cost Ratio) usaha perikanan tangkap skala kecil di perairan pesisir Cilegon?",
            "skala": {1: "Rasio Sangat Tinggi/Beban Defisit", 2: "Tinggi (Kurang Efisien)", 3: "Moderat Seimbang", 4: "Efisien Menguntungkan", 5: "Sangat Efisien & Hemat Energi"}
        },
        "industri": {
            "teks": "Bagaimana stabilitas pasokan logistik energi dan kebutuhan melaut bagi komunitas nelayan pesisir Cilegon menurut pengamatan pihak industri?",
            "skala": {1: "Sangat Rawan Gejolak", 2: "Sering Terhambat Biaya", 3: "Cukup Stabil", 4: "Stabil & Terkelola Baik", 5: "Sangat Terjamin & Efisien"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_07",
    "name": "Akses terhadap modal dan pasar",
    "questions": {
        "pemda": {
            "teks": "Bagaimana ketersediaan fasilitas pembiayaan formal (KUR/bank) serta keteraturan tata niaga pasar di Tempat Pelelangan Ikan (TPI) Kota Cilegon?",
            "skala": {1: "Sangat Minim & Ijon Marak", 2: "Akses Modal Terbatas", 3: "Cukup Berfungsi", 4: "Pasar & Kredit Sehat", 5: "Inklusi Keuangan & TPI Sangat Maju"}
        },
        "pelaku_usaha": {
            "teks": "Bagaimana kemudahan Bapak/Ibu mendapatkan pinjaman modal usaha yang layak serta keadilan harga jual ikan saat bertransaksi di pangkalan/TPI atau pedagang pengumpul?",
            "skala": {1: "Sangat Sulit & Harga Sering Dipermainkan", 2: "Kurang Adil & Modal Susah", 3: "Cukup Wajar", 4: "Mudah & Harga Adil", 5: "Sangat Mudah & Harga Menguntungkan"}
        },
        "masyarakat_pesisir": {
            "teks": "Bagaimana kemudahan warga dan keluarga nelayan dalam mendapatkan pinjaman modal serta kelancaran jual beli ikan di pasar pesisir?",
            "skala": {1: "Sangat Sulit & Rawan Rentenir", 2: "Kurang Lancar", 3: "Cukup Terbuka", 4: "Lancar & Aman", 5: "Sangat Mudah, Adil & Transparan"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana tingkat inklusi keuangan lembaga pembiayaan mikro serta efisiensi transmisi harga pada rantai pasok pemasaran perikanan di Kota Cilegon?",
            "skala": {1: "Asimetri Informasi Akut", 2: "Dominasi Bakul/Tengkulak", 3: "Efisiensi Transmisi Sedang", 4: "Rantai Pasok Sehat", 5: "Sangat Efisien & Berkeadilan Pasar"}
        },
        "industri": {
            "teks": "Sejauh mana kemitraan pasar atau dukungan permodalan/CSR dapat diakses oleh pelaku usaha perikanan lokal di kawasan pesisir Cilegon?",
            "skala": {1: "Sama Sekali Tidak Ada", 2: "Sangat Terbatas", 3: "Ada Skema Parsial", 4: "Kemitraan Berjalan Baik", 5: "Kemitraan Mandiri & Berkelanjutan"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_08",
    "name": "Nilai tambah produk perikanan",
    "questions": {
        "pemda": {
            "teks": "Bagaimana perkembangan hilirisasi, pengolahan hasil tangkapan, dan diversifikasi produk perikanan (ikan asin, kerupuk, frozen) di Kota Cilegon?",
            "skala": {1: "Sama Sekali Belum Ada", 2: "Masih Sangat Tradisional", 3: "Tumbuh Skala Rumah Tangga", 4: "Sentra Olahan Berkembang", 5: "Hilirisasi Modern & Nilai Ekspor"}
        },
        "pelaku_usaha": {
            "teks": "Sejauh mana hasil tangkapan ikan dapat diolah menjadi produk olahan bernilai tambah (ikan asin, presto, kerupuk) sehingga memberikan harga jual yang lebih menguntungkan?",
            "skala": {1: "Tidak Bisa / Langsung Dibuang Murah", 2: "Jarang Diolah Lebih Lanjut", 3: "Sebagian Diolah Sederhana", 4: "Bisa Diolah Bernilai Tambah", 5: "Sangat Menguntungkan Hasil Olahannya"}
        },
        "masyarakat_pesisir": {
            "teks": "Sejauh mana kelompok ibu-ibu atau warga pesisir aktif membuat oleh-oleh/kuliner olahan ikan khas Cilegon yang laku dijual ke wisatawan?",
            "skala": {1: "Belum Ada Kegiatan", 2: "Masih Sedikit Sekali", 3: "Ada Beberapa Kelompok", 4: "Aktif Berproduksi & Laku", 5: "Sangat Maju Menjadi Produk Unggulan"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana tingkat adopsi teknologi pascapanen (cold chain & food processing) dalam menciptakan nilai tambah (value-added) komoditas perikanan di Cilegon?",
            "skala": {1: "Susut Pascapanen Sangat Tinggi", 2: "Teknologi Minimal", 3: "Adopsi Moderat", 4: "Nilai Tambah Baik", 5: "Agroindustri Maritim Terpadu"}
        },
        "industri": {
            "teks": "Sejauh mana potensi produk olahan perikanan lokal diserap oleh pasar kantin industri, katering pabrik, atau program pembinaan UMKM korporasi?",
            "skala": {1: "Belum Pernah Diserap", 2: "Penyerapan Sangat Minim", 3: "Cukup Terserap Berkala", 4: "Penyerapan Rutin & Baik", 5: "Kemitraan Rantai Pasok Berkelanjutan"}
        }
    }
})

print("Part 2 defined.")
