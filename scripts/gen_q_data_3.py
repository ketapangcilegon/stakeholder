# -*- coding: utf-8 -*-
ALL_INDICATORS = []

# =========================================================================
# V3: PERSEPSI ASPEK SOSIAL (4 Indikator)
# =========================================================================

ALL_INDICATORS.append({
    "section": "V3: PERSEPSI ASPEK SOSIAL (4 Indikator)",
    "id": "IND_09",
    "name": "Kohesi sosial nelayan",
    "questions": {
        "pemda": {
            "teks": "Bagaimana penilaian Anda terhadap tingkat solidaritas sosial, tradisi gotong royong, dan kerukunan antarkelompok nelayan di Kota Cilegon?",
            "skala": {1: "Sangat Renggang/Individualistis", 2: "Kurang Kompak", 3: "Cukup Harmonis", 4: "Kompak & Gotong Royong", 5: "Sangat Guyub, Kuat & Solid"}
        },
        "pelaku_usaha": {
            "teks": "Bagaimana rasa persaudaraan dan tolong-menolong antar sesama nelayan saat ada perahu mogok di laut, kenduri laut, atau anggota tertimpa musibah?",
            "skala": {1: "Masa Bodoh / Tidak Ada Tolong Menolong", 2: "Kurang Kompak", 3: "Terkadang Saling Bantu", 4: "Saling Membantu & Kompak", 5: "Sangat Kompak & Selalu Tolong Menolong"}
        },
        "masyarakat_pesisir": {
            "teks": "Bagaimana kerukunan dan kekompakan warga di kampung pesisir dalam kegiatan gotong royong, bersih pantai, dan acara adat sedekah laut?",
            "skala": {1: "Sangat Renggang & Cuek", 2: "Jarang Kompak", 3: "Cukup Terjalin", 4: "Rukun & Suka Gotong Royong", 5: "Sangat Rukun & Solid Penuh Kekeluargaan"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana tingkat modal sosial (social capital), kepercayaan (trust), dan norma resiprositas di kalangan komunitas perikanan pesisir Cilegon?",
            "skala": {1: "Modal Sosial Tererosi Parah", 2: "Kohesi Sosial Rendah", 3: "Tingkat Resiprositas Moderat", 4: "Modal Sosial Tinggi", 5: "Social Capital Sangat Tangguh"}
        },
        "industri": {
            "teks": "Bagaimana pandangan industri terhadap stabilitas keharmonisan sosial dan kekompakan komunitas masyarakat nelayan di sekitar kawasan operasional?",
            "skala": {1: "Sering Terjadi Gesekan", 2: "Kurang Kondusif", 3: "Cukup Kondusif", 4: "Hubungan Sosial Harmonis", 5: "Sangat Harmonis & Kondusif"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_10",
    "name": "Konflik pemanfaatan ruang",
    "questions": {
        "pemda": {
            "teks": "Seberapa efektif mekanisme pencegahan dan penyelesaian konflik ruang laut (antara nelayan, kapal industri, jalur pelayaran, dan wisata) di Cilegon?",
            "skala": {1: "Konflik Sering Terjadi & Tak Teratasi", 2: "Sering Tegang", 3: "Bisa Dimusyawarahkan", 4: "Sangat Jarang Konflik", 5: "Nol Konflik / Ruang Laut Sangat Tertib"}
        },
        "pelaku_usaha": {
            "teks": "Sejauh mana wilayah tangkap Bapak/Ibu bebas dari konflik atau gesekan ruang laut dengan kapal tongkang industri, jalur kapal besar, maupun alat tangkap luar?",
            "skala": {1: "Sering Terjadi Konflik / Sering Terusir", 2: "Kerap Ada Gesekan Jalur", 3: "Sesekali Ada Gesekan Kecil", 4: "Jarang Berselisih / Kondusif", 5: "Sangat Aman, Damai & Tidak Pernah Berselisih"}
        },
        "masyarakat_pesisir": {
            "teks": "Bagaimana efektivitas penyelesaian perselisihan apabila terjadi gesekan pemanfaatan ruang pantai antara nelayan, pengembang industri, atau pengelola wisata pesisir?",
            "skala": {1: "Sering Ricuh & Nelayan Dirugikan", 2: "Sulit Titik Temu", 3: "Bisa Selesai Damai", 4: "Selalu Musyawarah Mufakat", 5: "Sangat Damai & Saling Menghormati"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana tingkat kerentanan konflik tata ruang pesisir (coastal spatial conflict) dan efektivitas resolusi konflik multipihak di Kota Cilegon?",
            "skala": {1: "Eskalasi Konflik Kronis", 2: "Rentan Gesekan Ruang", 3: "Resolusi Cukup Berjalan", 4: "Mitigasi Konflik Efektif", 5: "Tata Ruang Sangat Harmonis & Inklusif"}
        },
        "industri": {
            "teks": "Seberapa minim potensi gesekan atau perselisihan operasional pelabuhan/pabrik industri dengan aktivitas penangkapan nelayan tradisional?",
            "skala": {1: "Sering Terjadi Klaim & Gesekan", 2: "Masih Ada Gesekan", 3: "Cukup Terkendali Komunikasi", 4: "Jarang Berselisih", 5: "Zero Dispute / Hubungan Sangat Rukun"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_11",
    "name": "Keadilan akses sumber daya",
    "questions": {
        "pemda": {
            "teks": "Bagaimana jaminan keadilan dan kesetaraan hak bagi nelayan kecil tradisional untuk memanfaatkan ruang perairan dan sumber daya ikan di Kota Cilegon?",
            "skala": {1: "Sangat Tidak Adil/Terpinggirkan", 2: "Kurang Setara", 3: "Cukup Terlindungi", 4: "Akses Adil & Terlindungi", 5: "Sangat Adil, Setara & Terbuka Luas"}
        },
        "pelaku_usaha": {
            "teks": "Sejauh mana nelayan kecil dan perahu motor tradisional mendapatkan kebebasan serta perlindungan hak yang adil untuk mencari ikan di perairan pesisir Cilegon?",
            "skala": {1: "Sangat Tidak Terlindungi / Terpinggirkan", 2: "Ruang Tangkap Terbatas Sekali", 3: "Masih Bisa Melaut Cukup Bebas", 4: "Akses Adil & Dihargai Baik", 5: "Sangat Terlindungi & Berkeadilan Penuh"}
        },
        "masyarakat_pesisir": {
            "teks": "Apakah semua warga pesisir mendapatkan hak yang adil dalam memanfaatkan pantai dan laut untuk mencari nafkah?",
            "skala": {1: "Banyak Pantai Ditutup Pagar", 2: "Kurang Merata", 3: "Cukup Adil", 4: "Adil & Terbuka", 5: "Sangat Adil & Setara untuk Semua"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana jaminan keadilan distributif (distributive justice) dan perlindungan hak akses nelayan tradisional atas perairan tangkap di Cilegon?",
            "skala": {1: "Ocean Grabbing / Marginalisasi Parah", 2: "Akses Kurang Berkeadilan", 3: "Cukup Terakomodasi", 4: "Hak Akses Terlindungi Baik", 5: "Prinsip Human Rights-Based Sangat Kuat"}
        },
        "industri": {
            "teks": "Sejauh mana penataan batas zona keamanan industri di perairan tetap memberikan ruang koridor yang adil bagi jalur lalu lintas nelayan tradisional?",
            "skala": {1: "Menutup Total Jalur Nelayan", 2: "Kurang Memperhatikan Koridor", 3: "Memberikan Koridor Minimal", 4: "Menata Koridor dengan Baik", 5: "Sangat Menghormati Akses Jalur Nelayan"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_12",
    "name": "Keberlanjutan mata pencaharian nelayan",
    "questions": {
        "pemda": {
            "teks": "Bagaimana optimisme Anda terhadap kepastian keberlanjutan profesi nelayan dan ketertarikan generasi muda pesisir untuk melanjutkan usaha perikanan di Cilegon?",
            "skala": {1: "Sangat Terancam Punah", 2: "Cenderung Ditinggalkan", 3: "Cukup Bertahan", 4: "Prospektif & Diminati", 5: "Sangat Menjanjikan & Regenerasi Kuat"}
        },
        "pelaku_usaha": {
            "teks": "Apakah anak-anak muda di keluarga atau kampung Bapak/Ibu masih mau melanjutkan menjadi nelayan karena merasa pekerjaan di laut menjanjikan masa depan?",
            "skala": {1: "Sama Sekali Tidak Mau/Tinggalkan Laut", 2: "Hanya Sedikit Sekali", 3: "Sebagian Masih Mau", 4: "Banyak yang Minat Melaut", 5: "Sangat Bangga & Semangat Meneruskan"}
        },
        "masyarakat_pesisir": {
            "teks": "Bagaimana keyakinan warga terhadap masa depan kehidupan kampung nelayan pesisir Cilegon dalam 10-20 tahun yang akan datang?",
            "skala": {1: "Sangat Khawatir Tergusur", 2: "Masa Depan Kurang Jelas", 3: "Cukup Optimis Bertahan", 4: "Yakin Tetap Makmur", 5: "Sangat Optimis Maju & Lestari"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana tingkat ketahanan penghidupan (livelihood resilience) dan prospek suksesi generasi penerus perikanan tangkap di Kota Cilegon?",
            "skala": {1: "Krisis Regenerasi Akut", 2: "Resiliensi Penghidupan Rendah", 3: "Daya Tahan Moderat", 4: "Resiliensi Baik", 5: "Livelihood Sangat Tangguh & Adaptif"}
        },
        "industri": {
            "teks": "Bagaimana penilaian korporasi mengenai pentingnya menjaga kelangsungan hidup profesi nelayan sebagai kearifan lokal pesisir Cilegon berdampingan dengan industri?",
            "skala": {1: "Tidak Relevan bagi Industri", 2: "Kurang Diprioritaskan", 3: "Cukup Penting", 4: "Sangat Penting Dijaga", 5: "Prioritas Utama Simbiosis Keberlanjutan"}
        }
    }
})

# =========================================================================
# V4: PERSEPSI TATA KELOLA (GOVERNANCE) (7 Indikator)
# =========================================================================

ALL_INDICATORS.append({
    "section": "V4: PERSEPSI TATA KELOLA (GOVERNANCE) (7 Indikator)",
    "id": "IND_13",
    "name": "Transparansi informasi",
    "questions": {
        "pemda": {
            "teks": "Sejauh mana keterbukaan informasi publik mengenai program, alokasi bantuan, dan perizinan kelautan-perikanan disampaikan secara transparan di Cilegon?",
            "skala": {1: "Sangat Tertutup", 2: "Kurang Terbuka", 3: "Cukup Transparan", 4: "Transparan & Terbuka", 5: "Sangat Transparan & Akuntabel"}
        },
        "pelaku_usaha": {
            "teks": "Apakah informasi tentang bantuan perahu, mesin tempel, subsidi solar, dan aturan melaut selalu diberitahukan secara jelas dan jujur kepada semua nelayan?",
            "skala": {1: "Sangat Tertutup / Dibagi Sembunyi-sembunyi", 2: "Hanya Tahu Sedikit", 3: "Cukup Diberitahukan", 4: "Jelas & Terbuka", 5: "Sangat Jelas, Jujur & Merata"}
        },
        "masyarakat_pesisir": {
            "teks": "Bagaimana kemudahan warga pesisir dalam mendapatkan berita atau pengumuman resmi mengenai kegiatan dan bantuan perikanan dari pemerintah?",
            "skala": {1: "Sangat Gelap / Tidak Pernah Tahu", 2: "Sulit Dapat Info", 3: "Cukup Tahu dari Mulut ke Mulut", 4: "Mudah Diketahui Warga", 5: "Sangat Terbuka & Mudah Diakses Semua Orang"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana tingkat akuntabilitas dan transparansi keterbukaan data publik sektor kelautan dan perikanan tangkap Kota Cilegon?",
            "skala": {1: "Informasi Sangat Tertutup", 2: "Asimetri Informasi Tinggi", 3: "Transparansi Parsial", 4: "Akses Data Terbuka Baik", 5: "Sistem Open Data Sangat Kredibel"}
        },
        "industri": {
            "teks": "Sejauh mana transparansi regulasi dan sosialisasi kebijakan zonasi maritim oleh pemerintah daerah dapat diakses secara cepat oleh kalangan industri?",
            "skala": {1: "Sangat Sulit Diakses", 2: "Kurang Transparan", 3: "Cukup Terbuka", 4: "Transparan & Teratur", 5: "Sangat Terbuka & Informasi Real-time"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_14",
    "name": "Keterbukaan pengambilan keputusan",
    "questions": {
        "pemda": {
            "teks": "Bagaimana mekanisme pelibatan berbagai pihak (nelayan, asosiasi, industri, pakar) dalam proses musyawarah pengambilan kebijakan pengelolaan pesisir?",
            "skala": {1: "Top-Down Tanpa Pelibatan", 2: "Pelibatan Simbolis/Formalitas", 3: "Cukup Melibatkan Pihak Luar", 4: "Partisipatif & Dialogis", 5: "Sangat Kolaboratif & Co-Management"}
        },
        "pelaku_usaha": {
            "teks": "Ketika pemerintah membuat aturan baru tentang laut di Cilegon, apakah suara dan usulan para nelayan didengar dan diajak rembukan terlebih dahulu?",
            "skala": {1: "Tidak Pernah Ditanya / Tiba-tiba Dilarang", 2: "Jarang Diajak Bicara", 3: "Kadang-kadang Diajak Kumpul", 4: "Sering Dimintai Pendapat", 5: "Selalu Diajak Musyawarah Bersama"}
        },
        "masyarakat_pesisir": {
            "teks": "Apakah tokoh masyarakat pesisir dan pengurus rukun nelayan dilibatkan saat penetapan program pembangunan pantai di Cilegon?",
            "skala": {1: "Ditinggalkan Sepihak", 2: "Hanya Diberitahu Saja", 3: "Cukup Diajak Rembukan", 4: "Dilibatkan Baik", 5: "Selalu Jadi Mitra Utama Musyawarah"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana derajat keterbukaan dan inklusivitas proses pengambilan keputusan dalam pengelolaan perikanan dan penataan ruang laut pesisir Cilegon?",
            "skala": {1: "Proses Sangat Eksklusif / Tertutup", 2: "Partisipasi Semu (Tokenism)", 3: "Konsultatif Terbatas", 4: "Inklusif & Partisipatif", 5: "Deliberatif & Berorientasi Konsensus"}
        },
        "industri": {
            "teks": "Sejauh mana kalangan industri diundang dan didengar aspirasinya dalam perumusan kebijakan tata ruang perairan dan kelautan Cilegon?",
            "skala": {1: "Tidak Pernah Dilibatkan", 2: "Hanya Dikirimi Surat Edaran", 3: "Cukup Dilibatkan", 4: "Rutin Dilibatkan FGD", 5: "Kemitraan Strategis Perumusan Kebijakan"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_15",
    "name": "Akuntabilitas regulasi",
    "questions": {
        "pemda": {
            "teks": "Bagaimana efektivitas pengawasan terpadu (Wasmas/Polairud/DKPP) dan ketegasan sanksi hukum terhadap pelanggaran aturan di laut Cilegon?",
            "skala": {1: "Sangat Lemah / Hukum Tumpul", 2: "Kurang Efektif & Tebang Pilih", 3: "Cukup Berjalan", 4: "Tegas & Akuntabel", 5: "Sangat Tegas, Adil & Penegakan Hukum Prima"}
        },
        "pelaku_usaha": {
            "teks": "Apakah aparat patroli laut adil dan tegas menindak kapal yang pakai alat tangkap terlarang atau kapal luar yang merusak wilayah tangkap Cilegon?",
            "skala": {1: "Dibiarkan Saja / Tidak Tegas", 2: "Kurang Tegas", 3: "Kadang Ada Razia", 4: "Tegas Menindak Pelanggar", 5: "Sangat Adil, Tegas & Laut Sangat Aman"}
        },
        "masyarakat_pesisir": {
            "teks": "Bagaimana ketegasan aparat dalam menjaga keamanan laut dan menertibkan pihak-pihak yang membuang limbah atau merusak pantai di Cilegon?",
            "skala": {1: "Sama Sekali Tidak Ada Tindakan", 2: "Kurang Ketat", 3: "Cukup Menjaga", 4: "Tegas Menertibkan", 5: "Sangat Sigap, Tegas & Bersih"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana tingkat kepatuhan hukum (law compliance) dan integritas sistem monitoring, controlling, and surveillance (MCS) di perairan Cilegon?",
            "skala": {1: "Impuniti / MCS Tidak Berfungsi", 2: "Pengawasan Lemah & Parsial", 3: "Kepatuhan Sedang", 4: "MCS Berjalan Efektif", 5: "Sistem MCS Sangat Terintegrasi & Tegas"}
        },
        "industri": {
            "teks": "Bagaimana konsistensi penegakan aturan keselamatan pelayaran dan kepatuhan lingkungan laut bagi seluruh entitas di pesisir Cilegon?",
            "skala": {1: "Banyak Pelanggaran Tak Ditindak", 2: "Kurang Konsisten", 3: "Cukup Tertib", 4: "Konsisten & Tertib", 5: "Sangat Taat Asas & Standar Keselamatan Tinggi"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_16",
    "name": "Koordinasi lintas sektor",
    "questions": {
        "pemda": {
            "teks": "Sejauh mana sinergi dan koordinasi antar-OPD (DKPP, BAPPERIDA, DLH) serta instansi vertikal (KSOP Banten, Polairud) dalam tata kelola pesisir Cilegon?",
            "skala": {1: "Sangat Tersekat / Ego Sektoral Parah", 2: "Koordinasi Sering Macet", 3: "Cukup Terjalin", 4: "Koordinasi Kompak & Terpadu", 5: "Kolaborasi Sangat Harmonis & Sinergis"}
        },
        "pelaku_usaha": {
            "teks": "Apakah urusan perizinan melaut, pas kecil kapal, dan urusan dinas tidak berbelit-belit serta instansi pemerintah kompak membantu nelayan?",
            "skala": {1: "Sangat Dipersulit / Dilempar Sana-sini", 2: "Sering Berbelit-belit", 3: "Cukup Lumayan", 4: "Mudah & Instansi Kompak", 5: "Sangat Mudah, Cepat & Sangat Membantu"}
        },
        "masyarakat_pesisir": {
            "teks": "Bagaimana kekompakan dinas perikanan, kelurahan, dan dinas lingkungan hidup dalam menyelesaikan masalah sampah dan tata kelola pesisir?",
            "skala": {1: "Saling Lempar Tanggung Jawab", 2: "Kurang Kompak", 3: "Cukup Mau Mengurus", 4: "Kompak Bekerja Sama", 5: "Sangat Kompak & Cepat Tanggap Bersama"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana efektivitas koordinasi kelembagaan multisektoral (Integrated Coastal Zone Management) antara Pemkot Cilegon, otoritas pelabuhan (KSOP), dan dinas terkait?",
            "skala": {1: "Fragmentasi Institusi Akut", 2: "Koordinasi Lemah", 3: "Sinkronisasi Cukup Berjalan", 4: "Tata Kelola Multisektor Baik", 5: "Tata Kelola ICZM Terpadu Sempurna"}
        },
        "industri": {
            "teks": "Seberapa efisien koordinasi antara pihak regulator pelabuhan (KSOP), pemerintah daerah, dan pengelola kawasan industri dalam penataan maritim Cilegon?",
            "skala": {1: "Sangat Tidak Efisien / Tumpang Tindih", 2: "Kurang Efisien", 3: "Cukup Selaras", 4: "Efisien & Komunikatif", 5: "Sangat Cepat, Efisien & Terintegrasi Satu Pintu"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_17",
    "name": "Integrasi kepentingan stakeholder",
    "questions": {
        "pemda": {
            "teks": "Bagaimana kebijakan perikanan Pemkot Cilegon mampu menyeimbangkan kepentingan ekonomi nelayan, ekspansi industri, dan konservasi alam?",
            "skala": {1: "Sangat Timpang Berat Sebelah", 2: "Kurang Seimbang", 3: "Cukup Mengakomodasi", 4: "Keseimbangan Terjaga Baik", 5: "Sangat Seimbang, Adil & Harmonis"}
        },
        "pelaku_usaha": {
            "teks": "Apakah aturan yang dibuat pemerintah kota adil untuk nelayan kecil dan tidak hanya menguntungkan pabrik besar di pesisir?",
            "skala": {1: "Hanya Bela Pabrik / Nelayan Dikorbankan", 2: "Kurang Membela Nelayan", 3: "Cukup Adil", 4: "Adil Membela Hak Nelayan", 5: "Sangat Berkeadilan & Melindungi Nelayan Kecil"}
        },
        "masyarakat_pesisir": {
            "teks": "Sejauh mana kebijakan pembangunan pantai Cilegon mampu mengakomodasi kebutuhan tempat tinggal warga, tempat nelayan melaut, dan industri?",
            "skala": {1: "Warga Terusir / Diabaikan", 2: "Kurang Akomodatif", 3: "Cukup Diperhatikan", 4: "Semua Tertata Adil", 5: "Sangat Serasi & Seluruh Kepentingan Terlindungi"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana keterpaduan integrasi kepentingan multi-stakeholder (nelayan kecil, industri, pemerintah) dalam perumusan kebijakan perikanan di Cilegon?",
            "skala": {1: "Dominasi Hegemoni Korporasi", 2: "Kompromi Timpang", 3: "Konsensus Memadai", 4: "Trade-off Berkeadilan", 5: "Integrasi Win-Win Solution Sempurna"}
        },
        "industri": {
            "teks": "Sejauh mana kebijakan pemerintah daerah memfasilitasi titik temu kepentingan investasi industri dengan perlindungan mata pencaharian nelayan sekitar?",
            "skala": {1: "Sering Memunculkan Ketegangan", 2: "Kurang Seimbang", 3: "Cukup Terakomodir", 4: "Titik Temu Sangat Baik", 5: "Sinergi Kemitraan Sangat Optimal"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_18",
    "name": "Konsistensi kebijakan",
    "questions": {
        "pemda": {
            "teks": "Bagaimana konsistensi dan kesinambungan arah rencana induk (masterplan) keberlanjutan perikanan tangkap Cilegon di tengah pergantian periode kepemimpinan?",
            "skala": {1: "Sangat Tidak Konsisten / Selalu Berubah", 2: "Kurang Berkesinambungan", 3: "Cukup Stabil", 4: "Konsisten Terencana", 5: "Sangat Konsisten, Kokoh & Berkelanjutan"}
        },
        "pelaku_usaha": {
            "teks": "Apakah program bantuan sarana penangkapan, pendampingan, dan aturan bagi nelayan dijalankan oleh pemerintah secara konsisten dan berkesinambungan dari tahun ke tahun?",
            "skala": {1: "Sangat Tidak Konsisten / Musiman", 2: "Sering Terputus-putus", 3: "Cukup Berkesinambungan", 4: "Konsisten Berkelanjutan", 5: "Sangat Konsisten, Terarah & Berkelanjutan"}
        },
        "masyarakat_pesisir": {
            "teks": "Apakah program penataan kampung pesisir dan pemberdayaan nelayan terus dijalankan secara berkesinambungan oleh dinas terkait?",
            "skala": {1: "Terhenti di Tengah Jalan", 2: "Kurang Terurus", 3: "Cukup Berlanjut", 4: "Rutin Dijalankan", 5: "Sangat Berkelanjutan & Makin Maju"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana stabilitas regulasi dan konsistensi arah kebijakan pengelolaan perikanan tangkap berkelanjutan di Kota Cilegon?",
            "skala": {1: "Volatilitas Kebijakan Sangat Tinggi", 2: "Inkonsistensi Regulasi Kerap Terjadi", 3: "Cukup Terjaga", 4: "Stabilitas Regulasi Baik", 5: "Trajectory Kebijakan Sangat Solid & Predictable"}
        },
        "industri": {
            "teks": "Bagaimana kepastian hukum dan konsistensi regulasi pemanfaatan ruang perairan yang diterbitkan pemerintah daerah bagi dunia usaha?",
            "skala": {1: "Sangat Tidak Pasti / Berisiko Tinggi", 2: "Kerap Berubah Menimbulkan Keraguan", 3: "Cukup Memberi Kepastian", 4: "Kepastian Hukum Terjamin", 5: "Sangat Stabil, Pasti & Ramah Investasi"}
        }
    }
})

ALL_INDICATORS.append({
    "section": None,
    "id": "IND_19",
    "name": "Penggunaan data ilmiah (evidence-based)",
    "questions": {
        "pemda": {
            "teks": "Sejauh mana penyusunan program dan regulasi perikanan tangkap di Kota Cilegon didasarkan pada basis data ilmiah dan kajian stok terukur (evidence-based policy)?",
            "skala": {1: "Asal Buat Tanpa Data (0%)", 2: "Data Sangat Minim", 3: "Cukup Memakai Data Dasar", 4: "Berbasis Data Riset Lapangan", 5: "Evidence-Based Policy Sangat Ketat & Matang"}
        },
        "pelaku_usaha": {
            "teks": "Ketika dinas membuat aturan, apakah petugas benar-benar turun ke laut mengecek kondisi kapal dan hasil tangkapan nelayan yang sesungguhnya?",
            "skala": {1: "Hanya Asal Buat di Kantor", 2: "Jarang Turun ke Laut", 3: "Kadang Datang Mencatat", 4: "Sering Turun & Cocok Datanya", 5: "Selalu Turun Memeriksa Kondisi Riil Lapangan"}
        },
        "masyarakat_pesisir": {
            "teks": "Apakah program bantuan yang turun ke pesisir tepat sasaran sesuai data riil keluarga nelayan yang memang membutuhkan?",
            "skala": {1: "Salah Sasaran Total", 2: "Banyak Salah Sasaran", 3: "Cukup Sesuai Data", 4: "Tepat Sasaran", 5: "Sangat Tepat Sasaran & Adil Transparan"}
        },
        "akademisi_lsm": {
            "teks": "Bagaimana tingkat pemanfaatan data riset ilmiah, kajian potensi stok ikan, dan data sosial-ekonomi riil dalam penyusunan kebijakan perikanan di Kota Cilegon?",
            "skala": {1: "Kebijakan Tanpa Dasar Ilmiah", 2: "Pemanfaatan Riset Rendah", 3: "Pemanfaatan Data Moderat", 4: "Berbasis Riset Ilmiah Baik", 5: "Sains dan Data Lapangan Menjadi Fondasi Utama"}
        },
        "industri": {
            "teks": "Sejauh mana kajian lingkungan ilmiah (AMDAL/RKL-RPL) dan monitoring berkala dijadikan dasar bersama dalam penataan perairan industri-pesisir?",
            "skala": {1: "Hanya Formalitas Kertas", 2: "Kurang Dijadikan Rujukan", 3: "Cukup Digunakan", 4: "Dijadikan Panduan Bersama", 5: "Kajian Ilmiah Menjadi Dasar Mutlak Pengambilan Keputusan"}
        }
    }
})

print("Part 3 defined.")
