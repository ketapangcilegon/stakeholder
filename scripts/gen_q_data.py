# -*- coding: utf-8 -*-
import json

# We define each indicator with its 5 questions
# id_indikator, name, questions: dict of grp -> {teks, skala}

DATA = []

# =========================================================================
# V1: PERSEPSI KONDISI EKOLOGI (4 Indikator)
# =========================================================================

DATA.append({
    "section": "V1: PERSEPSI KONDISI EKOLOGI (4 Indikator)",
    "ind": "IND_01",
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

DATA.append({
    "section": None,
    "ind": "IND_02",
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

DATA.append({
    "section": None,
    "ind": "IND_03",
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

DATA.append({
    "section": None,
    "ind": "IND_04",
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

print("Part 1 defined.")
