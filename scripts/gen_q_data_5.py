# -*- coding: utf-8 -*-
ALL_INDICATORS = []

# =========================================================================
# V7: INTENSITAS PARTISIPASI DALAM PENGAMBILAN KEPUTUSAN (5 Indikator)
# =========================================================================

ALL_INDICATORS.append({
    "section": "V7: INTENSITAS PARTISIPASI DALAM PENGAMBILAN KEPUTUSAN (5 Indikator)",
    "id": "IND_29",
    "name": "Frekuensi kehadiran dalam rapat",
    "questions": {
        "pemda": {
            "teks": "Seberapa sering Anda menghadiri atau menyelenggarakan rapat koordinasi berkala terkait pengelolaan sektor kelautan dan perikanan tangkap?",
            "skala": {1: "Tidak Pernah (0%)", 2: "Jarang Sekali (1-2x/tahun)", 3: "Kadang-kadang (Tiap Triwulan)", 4: "Sering (Tiap Bulan)", 5: "Sangat Sering (Rutin Mingguan)"}
        },
        "pelaku_usaha": {
            "teks": "Seberapa sering Bapak/Ibu ikut kumpul rapat, musyawarah pangkalan, atau pertemuan kelompok nelayan di kampung?",
            "skala": {1: "Tidak Pernah Ikut Kumpul", 2: "Jarang Sekali", 3: "Kadang-kadang Ikut", 4: "Sering Hadir", 5: "Sangat Sering / Selalu Hadir Aktif"}
        },
        "masyarakat_pesisir": {
            "teks": "Seberapa sering Anda hadir dalam musyawarah warga kelurahan atau rembuk warga terkait isu-isu pesisir dan pantai?",
            "skala": {1: "Tidak Pernah Datang", 2: "Jarang Sekali", 3: "Kadang Hadir", 4: "Sering Mengikuti", 5: "Selalu Hadir Aktif di Garis Depan"}
        },
        "akademisi_lsm": {
            "teks": "Seberapa sering Anda atau perwakilan institusi menghadiri rapat koordinasi kebijakan, forum ilmiah, atau pertemuan nelayan mengenai kelautan Selat Sunda dan Kota Cilegon?",
            "skala": {1: "Tidak Pernah (0%)", 2: "Jarang Sekali", 3: "Kadang-kadang Hadir", 4: "Sering Berpartisipasi", 5: "Sangat Sering & Selalu Hadir Aktif"}
        },
        "industri": {
            "teks": "Seberapa intens perwakilan perusahaan menghadiri pertemuan koordinasi pemangku kepentingan maritim yang difasilitasi pemda/otoritas pelabuhan?",
            "skala": {1: "Tidak Pernah Hadir", 2: "Jarang Mengirim Utusan", 3: "Hadir Jika Diwajibkan Saja", 4: "Rutin Menghadiri", 5: "Selalu Hadir Proaktif & Memberi Masukan"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_30",
    "name": "Keterlibatan dalam konsultasi publik",
    "questions": {
        "pemda": {
            "teks": "Sejauh mana Anda terlibat aktif dalam penyelenggaraan konsultasi publik perumusan rancangan Perda, RTRW pesisir, atau zonasi laut Cilegon?",
            "skala": {1: "Tidak Pernah Terlibat", 2: "Hanya Panitia Pasif", 3: "Terlibat Terbatas", 4: "Terlibat Sangat Aktif", 5: "Penanggung Jawab / Narasumber Kunci"}
        },
        "pelaku_usaha": {
            "teks": "Seberapa sering Bapak/Ibu atau perwakilan KUB diundang dalam musyawarah atau konsultasi publik oleh pemerintah untuk membahas rencana aturan kelautan di Cilegon?",
            "skala": {1: "Tidak Pernah Diundang (0%)", 2: "Jarang Sekali", 3: "Kadang-kadang Diundang", 4: "Sering Diundang Rembukan", 5: "Sangat Sering & Selalu Jadi Utusan Utama"}
        },
        "masyarakat_pesisir": {
            "teks": "Seberapa sering perwakilan warga atau tokoh masyarakat pesisir diikutsertakan dalam forum konsultasi publik penataan pantai dan perizinan kelautan di Cilegon?",
            "skala": {1: "Tidak Pernah Diundang", 2: "Jarang Sekali", 3: "Kadang Diberi Tahu", 4: "Sering Diajak Bicara", 5: "Selalu Jadi Peserta Utama Konsultasi"}
        },
        "akademisi_lsm": {
            "teks": "Seberapa sering institusi Anda diundang sebagai narasumber ahli atau perwakilan organisasi nelayan dalam konsultasi publik kebijakan dan penataan ruang pesisir Cilegon?",
            "skala": {1: "Tidak Pernah Diundang", 2: "Jarang Sekali Diundang", 3: "Kadang-kadang Diundang", 4: "Sering Dimintai Masukan", 5: "Sangat Sering & Menjadi Rujukan Utama"}
        },
        "industri": {
            "teks": "Seberapa aktif perwakilan korporasi memberikan telaah teknis dalam agenda konsultasi publik regulasi lingkungan pesisir di Kota Cilegon?",
            "skala": {1: "Pasif Total / Tanpa Tanggapan", 2: "Tanggapan Formalitas", 3: "Memberi Catatan Terbatas", 4: "Aktif Memberi Telaah Kritis", 5: "Mitra Konsultasi Sangat Strategis"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_31",
    "name": "Keaktifan menyampaikan aspirasi",
    "questions": {
        "pemda": {
            "teks": "Seberapa aktif Anda menindaklanjuti dan mengadvokasikan aspirasi nelayan pesisir dalam rapat-rapat pimpinan Pemkot Cilegon?",
            "skala": {1: "Tidak Pernah Membawa Masalah Nelayan", 2: "Jarang Diperjuangkan", 3: "Kadang Disampaikan", 4: "Sering Memperjuangkan", 5: "Selalu Jadi Prioritas Usulan Dinas"}
        },
        "pelaku_usaha": {
            "teks": "Seberapa sering Bapak/Ibu atau kelompok nelayan menyampaikan aspirasi, keluhan masalah melaut, atau usulan kebutuhan kepada pihak dinas maupun wakil rakyat?",
            "skala": {1: "Tidak Pernah Menyampaikan", 2: "Jarang Sekali", 3: "Kadang-kadang Bersuara", 4: "Sering Menyampaikan Usulan", 5: "Sangat Sering & Aktif Bersuara"}
        },
        "masyarakat_pesisir": {
            "teks": "Seberapa sering warga atau tokoh masyarakat pesisir menyampaikan aspirasi dan kebutuhan pembangunan kampung nelayan kepada kelurahan maupun dinas terkait?",
            "skala": {1: "Diam Saja / Pasrah", 2: "Jarang Mengadu", 3: "Kadang Menyampaikan Keluhan", 4: "Rajin Mengusulkan Program", 5: "Sangat Aktif, Kritis & Gigih Memperjuangkan Hak Warga"}
        },
        "akademisi_lsm": {
            "teks": "Seberapa intensif Anda menyampaikan telaah akademis, rekomendasi kebijakan, atau pernyataan advokasi publik menyuarakan hak nelayan dan isu kelautan di Cilegon?",
            "skala": {1: "Tidak Pernah Menyampaikan", 2: "Jarang Sekali Menyampaikan", 3: "Kadang-kadang Memberi Telaah", 4: "Sering Menyampaikan Masukan Kritis", 5: "Sangat Intensif & Konsisten Beradvokasi"}
        },
        "industri": {
            "teks": "Seberapa sering industri menyampaikan saran teknis, data emisi/limbah, atau masukan penataan laut kepada Pemkot dan otoritas pelabuhan?",
            "skala": {1: "Tidak Pernah Bersurat", 2: "Jarang Memberi Masukan", 3: "Memberi Laporan Berkala Saja", 4: "Proaktif Menyampaikan Rekomendasi", 5: "Sangat Intensif Berkoordinasi Teknis"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_32",
    "name": "Keterlibatan dalam perumusan kebijakan",
    "questions": {
        "pemda": {
            "teks": "Sejauh mana Anda terlibat langsung dalam penyusunan draf regulasi daerah (Perda/Perwal/Kepdis) terkait pengelolaan perikanan tangkap?",
            "skala": {1: "Tidak Pernah Terlibat", 2: "Hanya Mengetahui Hasil Akhir", 3: "Memberi Masukan Parsial", 4: "Tim Inti Perumus Regulasi", 5: "Inisiator Utama & Pengonsep Kebijakan"}
        },
        "pelaku_usaha": {
            "teks": "Seberapa sering usulan dan masukan nyata dari kalangan nelayan diakomodasi dan dijadikan dasar pertimbangan dalam penyusunan aturan atau program perikanan Cilegon?",
            "skala": {1: "Tidak Pernah Diakomodasi", 2: "Jarang Sekali Diakomodasi", 3: "Kadang-kadang Dipertimbangkan", 4: "Sering Diterima Baik", 5: "Selalu Diakomodasi & Diwujudkan Nyata"}
        },
        "masyarakat_pesisir": {
            "teks": "Seberapa sering perwakilan warga pesisir dilibatkan sejak tahap perencanaan awal dalam merumuskan program penataan dan pemberdayaan pesisir Cilegon?",
            "skala": {1: "Sama Sekali Tidak Pernah", 2: "Jarang Dilibatkan Sejak Awal", 3: "Kadang Diajak Urun Rembuk", 4: "Sering Diajak Menyusun Usulan", 5: "Selalu Jadi Mitra Kunci Perencanaan Lapangan"}
        },
        "akademisi_lsm": {
            "teks": "Sejauh mana Anda terlibat sebagai tim pakar, narasumber perumus, atau penyusun aspirasi dalam proses perumusan regulasi pengelolaan perikanan di Cilegon?",
            "skala": {1: "Sama Sekali Tidak Terlibat", 2: "Keterlibatan Sangat Minim", 3: "Terlibat dalam Tahap Tertentu", 4: "Terlibat Aktif Memberi Masukan", 5: "Terlibat Sangat Intensif Sejak Awal"}
        },
        "industri": {
            "teks": "Sejauh mana perwakilan industri dilibatkan dalam Focus Group Discussion (FGD) atau perumusan regulasi maritim bersama regulator daerah?",
            "skala": {1: "Tidak Pernah Diundang", 2: "Hanya Hadir Pasif", 3: "Memberi Pandangan Terbatas", 4: "Kontributor Aktif Solusi Maritim", 5: "Mitra Kunci Perumusan Blueprint Regulasi"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_33",
    "name": "Keterlibatan pengawasan dan monev",
    "questions": {
        "pemda": {
            "teks": "Seberapa sering Anda melaksanakan kegiatan monitoring dan evaluasi (Monev) berkala terhadap implementasi program kelautan-perikanan di lapangan?",
            "skala": {1: "Tidak Pernah Monev Lapangan", 2: "Jarang Sekali (Tahunan)", 3: "Monev Semesteran", 4: "Rutin Tiap Triwulan", 5: "Inspeksi Lapangan Sangat Rutin & Berkelanjutan"}
        },
        "pelaku_usaha": {
            "teks": "Seberapa aktif Bapak/Ibu ikut terlibat dalam menjaga kelestarian laut (seperti Pokmaswas, ronda laut, atau melaporkan pencemaran dan kapal perusak)?",
            "skala": {1: "Tidak Pernah Terlibat", 2: "Jarang Sekali Terlibat", 3: "Kadang-kadang Ikut Ronda", 4: "Sering Aktif Memantau", 5: "Sangat Sering & Selalu Siaga Menjaga Laut"}
        },
        "masyarakat_pesisir": {
            "teks": "Seberapa aktif warga pesisir dilibatkan dalam kegiatan pengawasan lingkungan pantai dan evaluasi pelaksanaan program perikanan di lingkungannya?",
            "skala": {1: "Tidak Pernah Dilibatkan", 2: "Kurang Berperan", 3: "Kadang Ikut Meninjau", 4: "Sering Dilibatkan Pengawasan", 5: "Menjadi Pengawas Lapangan Utama yang Sangat Kritis"}
        },
        "akademisi_lsm": {
            "teks": "Seberapa intensif Anda melakukan pemantauan lapangan, evaluasi independen, atau pengawasan terhadap implementasi kebijakan perikanan tangkap di Cilegon?",
            "skala": {1: "Tidak Pernah Melakukan", 2: "Jarang Sekali", 3: "Kadang-kadang Memantau", 4: "Rutin Melakukan Monev/Kajian", 5: "Sangat Intensif Melakukan Pengawasan & Evaluasi"}
        },
        "industri": {
            "teks": "Seberapa intensif korporasi terlibat dalam program monitoring lingkungan bersama dan audit berkala perairan pesisir Cilegon?",
            "skala": {1: "Tidak Pernah Mengikuti Audit Bersama", 2: "Audit Minimal Internal", 3: "Ikut Audit Berkala Standar", 4: "Aktif dalam Monitoring Terpadu", 5: "Pelopor Sistem Monitoring Lingkungan Real-Time"}
        }
    }
})

# =========================================================================
# V8: KEPENTINGAN (INTEREST) STAKEHOLDER (4 Indikator)
# =========================================================================

ALL_INDICATORS.append({
    "section": "V8: KEPENTINGAN (INTEREST) STAKEHOLDER (4 Indikator)",
    "id": "IND_34",
    "name": "Ketergantungan terhadap sumber daya perikanan",
    "questions": {
        "pemda": {
            "teks": "Seberapa penting keberhasilan pembangunan perikanan tangkap pesisir dalam menunjang pencapaian indikator kinerja utama (IKU) Pemkot Cilegon?",
            "skala": {1: "Sangat Rendah / Tidak Signifikan", 2: "Rendah", 3: "Sedang", 4: "Tinggi / Prioritas Daerah", 5: "Sangat Tinggi / Sektor Strategis Kunci"}
        },
        "pelaku_usaha": {
            "teks": "Seberapa besar pemenuhan kebutuhan ekonomi dan kelangsungan hidup keluarga Bapak/Ibu bergantung sepenuhnya pada hasil melaut di perairan Cilegon?",
            "skala": {1: "Sangat Rendah (Bukan Sumber Pokok)", 2: "Rendah (Hanya Sampingan)", 3: "Sedang (Sekitar 50%)", 4: "Tinggi (Sumber Pendapatan Utama)", 5: "Sangat Tinggi (100% Menggantungkan Hidup)"}
        },
        "masyarakat_pesisir": {
            "teks": "Seberapa besar roda perputaran ekonomi warung, kontrakan, dan pasar di kampung pesisir bergantung pada hasil tangkapan nelayan?",
            "skala": {1: "Tidak Bergantung Sama Sekali", 2: "Pengaruh Kecil", 3: "Cukup Berpengaruh", 4: "Sangat Berpengaruh", 5: "Sangat Bergantung Total pada Denyut Nelayan"}
        },
        "akademisi_lsm": {
            "teks": "Seberapa tinggi keterkaitan mandat keorganisasian atau fokus riset institusi Anda terhadap dinamika sumber daya dan aktivitas perikanan pesisir Cilegon?",
            "skala": {1: "Sangat Rendah / Tidak Relevan", 2: "Rendah", 3: "Sedang", 4: "Tinggi / Menjadi Fokus Utama", 5: "Sangat Tinggi / Merupakan Mandat Pokok"}
        },
        "industri": {
            "teks": "Seberapa krusial kelancaran pemanfaatan alur laut dan kondisi perairan pesisir bagi kelangsungan operasional pabrik/dermaga korporasi Anda?",
            "skala": {1: "Tidak Berpengaruh Langsung", 2: "Tingkat Ketergantungan Rendah", 3: "Cukup Penting", 4: "Sangat Krusial bagi Logistik", 5: "Vital & Menentukan Mati-Hidupnya Operasional Pabrik"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_35",
    "name": "Kepentingan sosial budaya & eksistensi",
    "questions": {
        "pemda": {
            "teks": "Seberapa penting pelestarian kearifan lokal maritim dan tradisi pesisir Cilegon sebagai identitas budaya daerah dalam perspektif Pemkot?",
            "skala": {1: "Sangat Rendah", 2: "Kurang Penting", 3: "Cukup Penting", 4: "Penting / Aset Budaya", 5: "Sangat Penting Menjadi Warisan Luhur Daerah"}
        },
        "pelaku_usaha": {
            "teks": "Seberapa berharga profesi nelayan dan tradisi adat laut bagi Bapak/Ibu sebagai kehormatan dan warisan leluhur orang pesisir Cilegon?",
            "skala": {1: "Tidak Berharga / Terpaksa Saja", 2: "Kurang Bermakna", 3: "Cukup Berharga", 4: "Sangat Dihargai & Bernilai", 5: "Kehormatan Tertinggi Warisan Leluhur Pesisir"}
        },
        "masyarakat_pesisir": {
            "teks": "Seberapa penting menjaga tradisi kampung nelayan dan kebersamaan warga pantai Cilegon agar tidak hilang digerus zaman?",
            "skala": {1: "Biar Hilang Saja", 2: "Kurang Penting", 3: "Cukup Penting", 4: "Penting Dilestarikan", 5: "Mutlak Dijaga Demi Harga Diri Warga Kampung"}
        },
        "akademisi_lsm": {
            "teks": "Seberapa penting pelestarian kearifan lokal, tradisi melaut, dan perlindungan hak nelayan pesisir Cilegon dalam pandangan institusi Anda?",
            "skala": {1: "Sangat Tidak Penting", 2: "Kurang Penting", 3: "Cukup Penting", 4: "Sangat Penting Dilindungi", 5: "Sangat Krusial / Wajib Dipertahankan"}
        },
        "industri": {
            "teks": "Seberapa penting bagi korporasi untuk menjaga citra sosial, harmoni budaya, dan penerimaan masyarakat lokal di pesisir Cilegon (Social License to Operate)?",
            "skala": {1: "Tidak Dianggap Penting", 2: "Kurang Signifikan", 3: "Cukup Penting", 4: "Sangat Penting bagi Reputasi", 5: "Harga Mutlak bagi Keberlanjutan Investasi Perusahaan"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_36",
    "name": "Keterdampakan oleh perubahan regulasi",
    "questions": {
        "pemda": {
            "teks": "Seberapa besar dampak perubahan kebijakan perikanan provinsi/pusat terhadap beban kerja dan strategi dinas di Cilegon?",
            "skala": {1: "Tidak Berdampak Sama Sekali", 2: "Dampak Ringan", 3: "Dampak Moderat", 4: "Berdampak Besar pada Tupoksi", 5: "Sangat Mengubah Total Pola Kerja Dinas"}
        },
        "pelaku_usaha": {
            "teks": "Jika terjadi perubahan kebijakan (seperti penataan jalur lintas kapal industri atau penyesuaian harga solar subsidi), seberapa besar dampaknya langsung terhadap kegiatan dan pendapatan melaut Bapak/Ibu?",
            "skala": {1: "Sama Sekali Tidak Terdampak", 2: "Dampak Ringan", 3: "Cukup Berdampak", 4: "Berdampak Sangat Besar", 5: "Dampak Sangat Kritis Mengancam Usaha Melaut"}
        },
        "masyarakat_pesisir": {
            "teks": "Seberapa besar dampak keputusan pemerintah atau pembangunan pabrik di pesisir terhadap ketenteraman hidup keluarga warga sekitar?",
            "skala": {1: "Tidak Berdampak", 2: "Dampak Kecil", 3: "Cukup Berdampak", 4: "Berdampak Nyata", 5: "Sangat Berdampak Langsung pada Nasib Warga"}
        },
        "akademisi_lsm": {
            "teks": "Seberapa besar kebijakan pengelolaan laut Cilegon memengaruhi efektivitas advokasi nelayan atau ketercapaian luaran program riset institusi Anda?",
            "skala": {1: "Sama Sekali Tidak Berpengaruh", 2: "Pengaruh Kecil", 3: "Cukup Memengaruhi", 4: "Berpengaruh Besar pada Luaran Program", 5: "Sangat Berpengaruh Strategis Menentukan Keberhasilan"}
        },
        "industri": {
            "teks": "Seberapa besar pengaruh perubahan regulasi tata ruang laut dan lingkungan terhadap struktur biaya operasional dan kepatuhan korporasi?",
            "skala": {1: "Tidak Berpengaruh", 2: "Pengaruh Minor", 3: "Pengaruh Sedang", 4: "Berpengaruh Signifikan", 5: "Sangat Berdampak Kritis pada Kelangsungan Investasi"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_37",
    "name": "Tingkat perhatian pada dinamika kebijakan",
    "questions": {
        "pemda": {
            "teks": "Seberapa tinggi antusiasme instansi Anda dalam memantau dan mengkaji setiap terbitnya regulasi baru terkait kelautan dan perikanan?",
            "skala": {1: "Sangat Pasif / Mengabaikan", 2: "Kurang Mengikuti", 3: "Memantau Rutin Standar", 4: "Sangat Antusias Mengkaji", 5: "Proaktif Melakukan Telaah Regulasi Cepat"}
        },
        "pelaku_usaha": {
            "teks": "Seberapa sering Bapak/Ibu mencari tahu kabar terbaru soal aturan melaut, bantuan pemerintah, atau harga solar laut?",
            "skala": {1: "Masa Bodoh / Tidak Mau Tahu", 2: "Jarang Mencari Tahu", 3: "Menunggu Kabar Rekan", 4: "Rajin Bertanya & Mencari Tahu", 5: "Selalu Siaga Mengikuti Setiap Perkembangan"}
        },
        "masyarakat_pesisir": {
            "teks": "Seberapa besar rasa ingin tahu dan perhatian warga kampung terhadap berita rencana pembangunan baru di pesisir Cilegon?",
            "skala": {1: "Cuek Saja", 2: "Kurang Tertarik", 3: "Cukup Menyimak", 4: "Sangat Ingin Tahu", 5: "Selalu Mengikuti Perkembangan dengan Sangat Teliti"}
        },
        "akademisi_lsm": {
            "teks": "Seberapa intensif Anda memonitor tren kebijakan nasional (seperti Penangkapan Ikan Terukur - PIT dan zonasi perairan) serta dampaknya di Kota Cilegon?",
            "skala": {1: "Tidak Pernah Memonitor", 2: "Jarang Memperhatikan", 3: "Cukup Memonitor Isu Pokok", 4: "Rutin Mengkaji Perkembangan", 5: "Sangat Intensif & Menjadi Bahan Analisis Utama"}
        },
        "industri": {
            "teks": "Seberapa proaktif tim legal/HSE korporasi melakukan regulatory compliance tracking terkait regulasi maritim dan pesisir daerah?",
            "skala": {1: "Sangat Reaktif (Menunggu Sanksi)", 2: "Kurang Proaktif", 3: "Memantau Standar", 4: "Proaktif & Teratur", 5: "Sistem Compliance Tracking Sangat Terintegrasi & Cepat"}
        }
    }
})

# =========================================================================
# V9: PENGARUH (INFLUENCE) STAKEHOLDER (5 Indikator)
# =========================================================================

ALL_INDICATORS.append({
    "section": "V9: PENGARUH (INFLUENCE) STAKEHOLDER (5 Indikator)",
    "id": "IND_38",
    "name": "Kekuatan kewenangan formal",
    "questions": {
        "pemda": {
            "teks": "Seberapa kuat mandat hukum dan kewenangan legal yang dimiliki instansi Anda dalam mengatur, mengendalikan, dan menerbitkan izin sektor perikanan pesisir Cilegon?",
            "skala": {1: "Sangat Lemah / Tidak Punya Wewenang", 2: "Wewenang Sangat Terbatas", 3: "Kewenangan Cukup Memadai", 4: "Kewenangan Kuat", 5: "Kewenangan Sangat Mutlak & Menentukan Regulasi"}
        },
        "pelaku_usaha": {
            "teks": "Seberapa dipatuhi aturan bersama, etika melaut, dan kesepakatan pangkalan nelayan oleh rekan-rekan nelayan di lingkungan Bapak/Ibu?",
            "skala": {1: "Sangat Lemah / Sering Diabaikan", 2: "Kurang Dipatuhi", 3: "Cukup Ditaati", 4: "Kuat Ditaati Sebagian Besar", 5: "Sangat Kuat & Disegani Seluruh Nelayan"}
        },
        "masyarakat_pesisir": {
            "teks": "Seberapa besar pengaruh wibawa tokoh sesepuh pesisir dan lurah dalam mengatur ketertiban lingkungan kampung nelayan?",
            "skala": {1: "Tidak Punya Wibawa", 2: "Kurang Didengar", 3: "Cukup Dihormati", 4: "Sangat Disegani Warga", 5: "Kharisma & Wibawa Sangat Mutlak Dipatuhi"}
        },
        "akademisi_lsm": {
            "teks": "Seberapa kuat legitimasi keilmuan atau mandat keorganisasian nelayan yang dimiliki institusi Anda dalam memengaruhi arah kebijakan perikanan di Cilegon?",
            "skala": {1: "Sangat Lemah / Tidak Didengar", 2: "Kurang Kuat Pengaruhnya", 3: "Cukup Diperhitungkan", 4: "Kuat & Memiliki Bobot Pengaruh", 5: "Sangat Kuat, Memiliki Otoritas Keilmuan/Mandat Tinggi"}
        },
        "industri": {
            "teks": "Seberapa kuat legalitas hak pengelolaan lahan/perairan pelabuhan yang dipegang perusahaan dalam mengatur zona operasional industri?",
            "skala": {1: "Banyak Masalah Legalitas", 2: "Hak Terbatas", 3: "Izin Standar Terpenuhi", 4: "Dasar Hukum Kuat", 5: "Konsesi/Hak Legal Sangat Eksklusif & Dilindungi Negara"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_39",
    "name": "Akses langsung ke pengambil keputusan",
    "questions": {
        "pemda": {
            "teks": "Seberapa mudah Anda berkoordinasi dan mengakses pengambil keputusan puncak (Walikota/Sekda/DPRD) untuk meloloskan kebijakan perikanan?",
            "skala": {1: "Sangat Sulit / Ditolak Terus", 2: "Akses Cukup Berliku", 3: "Akses Formal Terbuka", 4: "Mudah Mengakses Pimpinan", 5: "Sangat Dekat & Pengambil Keputusan Sangat Responsif"}
        },
        "pelaku_usaha": {
            "teks": "Seberapa mudah bagi perwakilan nelayan atau ketua KUB untuk berkomunikasi dan menyampaikan aspirasi langsung kepada pejabat dinas atau pimpinan daerah?",
            "skala": {1: "Sangat Sulit / Tertutup Rapat", 2: "Sulit Mendapat Akses", 3: "Cukup Bisa Ditemui", 4: "Mudah Ditemui & Responsif", 5: "Sangat Mudah, Terbuka & Cepat Direspons"}
        },
        "masyarakat_pesisir": {
            "teks": "Seberapa mudah bagi perwakilan warga pesisir untuk berkomunikasi dan mendapatkan respons dari aparat kelurahan maupun dinas perikanan saat menghadapi persoalan pesisir?",
            "skala": {1: "Sangat Sulit Menghubungi", 2: "Lambat Direspons", 3: "Bisa Dihubungi Jam Kerja", 4: "Mudah Berkomunikasi", 5: "Akses 24 Jam Cepat & Selalu Ditanggapi"}
        },
        "akademisi_lsm": {
            "teks": "Seberapa terbuka akses komunikasi dan audiensi institusi Anda dengan pimpinan pengambil kebijakan di Pemkot Cilegon maupun instansi maritim terkait?",
            "skala": {1: "Sangat Tertutup / Sulit Berkomunikasi", 2: "Akses Cukup Terbatas", 3: "Cukup Terbuka Melalui Jalur Formal", 4: "Akses Terbuka & Komunikasi Lancar", 5: "Sangat Terbuka, Cepat & Memiliki Akses Langsung"}
        },
        "industri": {
            "teks": "Seberapa lancar akses jalur komunikasi tingkat pimpinan korporasi dengan Walikota, Kementerian, dan Forkopimda Cilegon?",
            "skala": {1: "Jalur Birokrasi Tertutup", 2: "Kurang Lancar", 3: "Jalur Formal Standar", 4: "Komunikasi Sangat Lancar", 5: "Akses Langsung ke Para Pengambil Keputusan Puncak"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_40",
    "name": "Penguasaan data riset & teknologi informasi",
    "questions": {
        "pemda": {
            "teks": "Seberapa lengkap penguasaan basis data statistik, sistem informasi geospasial kelautan (GIS), dan keahlian teknis staf perikanan dinas?",
            "skala": {1: "Sangat Minim / Tidak Punya Database", 2: "Data Manual Tercecer", 3: "Database Cukup Memadai", 4: "Sistem GIS & Data Lengkap", 5: "Big Data Kelautan Sangat Modern & Akurat"}
        },
        "pelaku_usaha": {
            "teks": "Seberapa baik pemahaman dan keterampilan nelayan di kelompok Bapak/Ibu dalam menguasai navigasi laut, informasi perkiraan cuaca BMKG, serta alat bantu penangkapan ikan?",
            "skala": {1: "Sangat Terbatas / Buta Navigasi Modern", 2: "Kurang Menguasai", 3: "Cukup Paham Navigasi Dasar", 4: "Paham Baik & Terampil", 5: "Sangat Mahir, Terampil & Berpengalaman Luas"}
        },
        "masyarakat_pesisir": {
            "teks": "Seberapa cepat dan mudah warga pesisir mendapatkan informasi resmi peringatan dini cuaca laut, pasang rob, maupun arahan keselamatan dari instansi berwenang?",
            "skala": {1: "Tidak Pernah Dapat Peringatan", 2: "Sering Terlambat Tahu", 3: "Cukup Cepat Melalui HP/Pengeras", 4: "Informasi Cepat Diterima", 5: "Peringatan Dini Real-Time & Sangat Sigap"}
        },
        "akademisi_lsm": {
            "teks": "Seberapa unggul penguasaan data ilmiah, kajian teknis, atau pemahaman mendalam tentang kondisi riil perikanan pesisir Cilegon pada institusi Anda?",
            "skala": {1: "Sangat Terbatas / Minim Data", 2: "Kurang Lengkap Datanya", 3: "Cukup Memadai untuk Analisis Dasar", 4: "Lengkap, Berbasis Data Riset/Lapangan", 5: "Sangat Komprehensif, Akurat & Menjadi Pusat Rujukan"}
        },
        "industri": {
            "teks": "Seberapa mutakhir instrumen teknologi monitoring lingkungan, sensor real-time, dan keahlian teknis HSE yang dimiliki korporasi?",
            "skala": {1: "Teknologi Usang", 2: "Instrumen Masih Manual", 3: "Memenuhi Standar Audit", 4: "Sensor Modern & Canggih", 5: "Teknologi Smart Monitoring Terdepan & Presisi Tinggi"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_41",
    "name": "Kapasitas mobilisasi sumber daya",
    "questions": {
        "pemda": {
            "teks": "Seberapa besar kekuatan dinas dalam menggerakkan alokasi anggaran APBD/APBN dan pengerahan personel pengawas di wilayah pesisir?",
            "skala": {1: "Sangat Lemah / Nol Anggaran", 2: "Kapasitas Mobilisasi Rendah", 3: "Cukup Mampu Menggerakkan", 4: "Kapasitas Mobilisasi Kuat", 5: "Kapasitas Mobilisasi Sangat Besar & Efektif"}
        },
        "pelaku_usaha": {
            "teks": "Seberapa kompak dan cepat rekan-rekan nelayan dapat berkumpul dan bergotong royong apabila ada musyawarah bersama, kegiatan adat laut, atau upaya membela hak nelayan?",
            "skala": {1: "Sangat Sulit Kumpul / Renggang", 2: "Lambat & Sedikit yang Datang", 3: "Cukup Kompak Berkumpul", 4: "Kompak & Cepat Tanggap", 5: "Sangat Kompak, Cepat & Siaga Penuh"}
        },
        "masyarakat_pesisir": {
            "teks": "Seberapa kuat semangat gotong royong dan kesiapan warga pesisir Cilegon jika dikerahkan untuk kegiatan kerja bakti massal?",
            "skala": {1: "Sangat Pasif / Tidak Mau Turun", 2: "Sedikit yang Ikut", 3: "Cukup Ramai", 4: "Kompak Turun ke Lapangan", 5: "Semangat Solidaritas Warga Sangat Dahsyat"}
        },
        "akademisi_lsm": {
            "teks": "Seberapa mampu institusi Anda memobilisasi sumber daya (tenaga ahli, peneliti, jaringan pengurus/anggota nelayan) untuk mendukung perikanan berkelanjutan di Cilegon?",
            "skala": {1: "Sama Sekali Tidak Mampu", 2: "Kapasitas Mobilisasi Rendah", 3: "Cukup Mampu Menggerakkan Anggota/Pakar", 4: "Mampu Memobilisasi Sumber Daya dengan Baik", 5: "Sangat Mampu Menggerakkan Jaringan Luas & Solid"}
        },
        "industri": {
            "teks": "Seberapa besar kemampuan korporasi mengerahkan sumber daya finansial, armada kapal tunda, dan peralatan tanggap darurat tumpahan minyak di laut?",
            "skala": {1: "Sangat Terbatas", 2: "Kapasitas Minimum", 3: "Cukup Memadai", 4: "Kapasitas Peralatan Sangat Lengkap", 5: "Armada & Sumber Daya Tanggap Darurat Sangat Unggul"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_42",
    "name": "Daya tawar dan jejaring lintas sektor",
    "questions": {
        "pemda": {
            "teks": "Seberapa kuat posisi tawar (bargaining power) Pemkot Cilegon dalam forum antar-daerah dan kerja sama kemitraan strategis maritim Selat Sunda?",
            "skala": {1: "Sangat Lemah / Diabaikan", 2: "Posisi Tawar Rendah", 3: "Cukup Diperhitungkan", 4: "Posisi Tawar Sangat Kuat", 5: "Menjadi Poros Pengendali Kebijakan Maritim Regional"}
        },
        "pelaku_usaha": {
            "teks": "Seberapa kuat posisi tawar dan kekompakan kelompok nelayan Cilegon dalam menentukan harga jual ikan maupun saat bernegosiasi memperjuangkan kepentingan nelayan?",
            "skala": {1: "Sangat Lemah / Selalu Pasrah", 2: "Posisi Tawar Rendah", 3: "Cukup Punya Daya Tawar", 4: "Posisi Tawar Kuat & Kompak", 5: "Sangat Kuat, Disegani & Berpengaruh"}
        },
        "masyarakat_pesisir": {
            "teks": "Seberapa kuat posisi tawar dan kekompakan warga kampung pesisir dalam menjaga kelestarian ruang hidup pantai dan memperjuangkan aspirasi mereka?",
            "skala": {1: "Lemah & Mudah Dipecah Belah", 2: "Kurang Kuat", 3: "Cukup Kompak", 4: "Kompak & Didengar Luas", 5: "Sangat Solid, Kuat & Suara Warga Menang"}
        },
        "akademisi_lsm": {
            "teks": "Seberapa luas jejaring kerja sama institusi Anda dengan kalangan akademisi, asosiasi nelayan tingkat provinsi/nasional, atau kementerian/lembaga mitra?",
            "skala": {1: "Sangat Terisolasi / Tanpa Jejaring", 2: "Jejaring Sangat Terbatas", 3: "Cukup Terhubung Tingkat Lokal", 4: "Jejaring Luas Tingkat Regional & Nasional", 5: "Sangat Luas, Kuat & Memiliki Kolaborasi Strategis Aktif"}
        },
        "industri": {
            "teks": "Seberapa kuat posisi tawar dan jejaring asosiasi industri maritim Cilegon dalam mempengaruhi arah kebijakan iklim usaha kelautan daerah?",
            "skala": {1: "Tidak Berpengaruh", 2: "Pengaruh Minor", 3: "Cukup Diperhitungkan", 4: "Pengaruh Sangat Kuat", 5: "Daya Tawar Strategis Utama dalam Perekonomian Daerah"}
        }
    }
})

print("Part 5 defined.")
