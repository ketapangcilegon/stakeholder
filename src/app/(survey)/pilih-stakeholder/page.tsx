'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { STAKEHOLDER_GROUPS, StakeholderGroup, DAFTAR_PANGKALAN, PangkalanNelayan } from '@/config/constants';
import { SurveyActions } from '@/features/survey/actions';
import StakeholderPicker from '@/features/stakeholder/components/StakeholderPicker';
import { supabase } from '@/lib/supabase/client';
import { ArrowRight, CheckCircle2, HelpCircle, Sparkles, MapPin } from 'lucide-react';

export default function PilihStakeholderPage() {
  const router = useRouter();

  const [selectedGroup, setSelectedGroup] = useState<StakeholderGroup | null>(null);
  const [nama, setNama] = useState('');
  const [instansi, setInstansi] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [noHp, setNoHp] = useState('');
  
  // Dynamic fields per persona
  const [usia, setUsia] = useState('');
  const [pangkalanNelayan, setPangkalanNelayan] = useState('');
  const [kelurahan, setKelurahan] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [kubNelayan, setKubNelayan] = useState('');
  const [alamat, setAlamat] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [googleUser, setGoogleUser] = useState<any>(null);

  // Auto-fill kelurahan & kecamatan when pangkalan is selected
  const handlePangkalanChange = (namaPangkalan: string) => {
    setPangkalanNelayan(namaPangkalan);
    const found = DAFTAR_PANGKALAN.find(p => p.nama === namaPangkalan);
    if (found) {
      setKelurahan(found.kelurahan);
      setKecamatan(found.kecamatan);
    } else {
      setKelurahan('');
      setKecamatan('');
    }
  };

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setGoogleUser(session.user);
          if (session.user.user_metadata?.full_name) {
            setNama(session.user.user_metadata.full_name);
          }
        }
      } catch (err) {
        console.log('Session check skipped:', err);
      }

      const localResp = SurveyActions.getLocalRespondent();
      if (localResp) {
        setNama(localResp.nama);
        setInstansi(localResp.instansi);
        if (localResp.jabatan) setJabatan(localResp.jabatan);
        if (localResp.no_hp) setNoHp(localResp.no_hp);
        if (localResp.usia) setUsia(String(localResp.usia));
        if (localResp.pangkalan_nelayan) {
          setPangkalanNelayan(localResp.pangkalan_nelayan);
          const found = DAFTAR_PANGKALAN.find(p => p.nama === localResp.pangkalan_nelayan);
          if (found) {
            setKelurahan(found.kelurahan);
            setKecamatan(found.kecamatan);
          }
        }
        if (localResp.kelurahan) setKelurahan(localResp.kelurahan);
        if (localResp.kecamatan) setKecamatan(localResp.kecamatan);
        if (localResp.kub_nelayan) setKubNelayan(localResp.kub_nelayan);
        if (localResp.alamat) setAlamat(localResp.alamat);
        const grp = STAKEHOLDER_GROUPS.find(g => g.id === localResp.id_stakeholder_group);
        if (grp) setSelectedGroup(grp);
      }
    };

    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setGoogleUser(session.user);
        if (session.user.user_metadata?.full_name) {
          setNama(prev => prev || session.user.user_metadata.full_name);
        }
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleStartSurvey = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedGroup) {
      alert('Silakan pilih salah satu kelompok stakeholder terlebih dahulu!');
      return;
    }
    if (!nama.trim()) {
      alert('Silakan isi Nama Lengkap Anda!');
      return;
    }

    // Validasi per kelompok stakeholder
    if (selectedGroup.id === 'pelaku_usaha') {
      if (!usia.trim() || isNaN(Number(usia)) || Number(usia) <= 0) {
        alert('Silakan isi Usia Anda dengan angka yang valid!');
        return;
      }
      if (!pangkalanNelayan.trim()) {
        alert('Silakan pilih salah satu Pangkalan Nelayan dari 9 pilihan!');
        return;
      }
    } else if (selectedGroup.id === 'pemda') {
      if (!instansi.trim()) {
        alert('Silakan isi OPD / Instansi Pemerintah Daerah!');
        return;
      }
      if (!jabatan.trim()) {
        alert('Silakan isi Jabatan / Eselon Anda!');
        return;
      }
    } else if (selectedGroup.id === 'masyarakat_pesisir') {
      if (!instansi.trim()) {
        alert('Silakan isi Nama Instansi / Nama Usaha / Komunitas!');
        return;
      }
      if (!alamat.trim()) {
        alert('Silakan isi Alamat Anda!');
        return;
      }
    } else if (selectedGroup.id === 'akademisi_lsm') {
      if (!instansi.trim()) {
        alert('Silakan isi Instansi / Lembaga!');
        return;
      }
      if (!jabatan.trim()) {
        alert('Silakan isi Jabatan / Peran Anda!');
        return;
      }
    } else if (selectedGroup.id === 'industri') {
      if (!jabatan.trim()) {
        alert('Silakan isi Jabatan Anda di perusahaan!');
        return;
      }
      if (!instansi.trim()) {
        alert('Silakan isi Nama Perusahaan / Industri!');
        return;
      }
      if (!alamat.trim()) {
        alert('Silakan isi Alamat Pabrik / Kawasan Industri!');
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const finalInstansi = selectedGroup.id === 'pelaku_usaha'
        ? (kubNelayan.trim() ? `KUB ${kubNelayan.trim()} (Pangkalan ${pangkalanNelayan})` : `Pangkalan ${pangkalanNelayan}`)
        : instansi.trim();

      await SurveyActions.initRespondent({
        nama: nama.trim(),
        instansi: finalInstansi,
        jabatan: jabatan.trim() || undefined,
        no_hp: noHp.trim() || undefined,
        id_stakeholder_group: selectedGroup.id,
        usia: (selectedGroup.id === 'pelaku_usaha' && usia.trim()) ? parseInt(usia, 10) : undefined,
        pangkalan_nelayan: selectedGroup.id === 'pelaku_usaha' ? pangkalanNelayan : undefined,
        kelurahan: selectedGroup.id === 'pelaku_usaha' ? kelurahan : undefined,
        kecamatan: selectedGroup.id === 'pelaku_usaha' ? kecamatan : undefined,
        kub_nelayan: selectedGroup.id === 'pelaku_usaha' ? (kubNelayan.trim() || undefined) : undefined,
        alamat: (selectedGroup.id === 'masyarakat_pesisir' || selectedGroup.id === 'industri') ? (alamat.trim() || undefined) : undefined,
        email: googleUser?.email || null,
        user_id_google: googleUser?.id || null
      });

      router.push(`/kuesioner/${selectedGroup.id}`);
    } catch (err: any) {
      alert('Terjadi kesalahan: ' + err.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-8 sm:space-y-10">
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean-100 text-ocean-800 text-[11px] sm:text-xs font-bold border border-ocean-200">
          <Sparkles className="w-3.5 h-3.5 text-ocean-600" />
          <span>Langkah 1: Identifikasi Responden Penelitian</span>
        </div>
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug sm:leading-tight">
          Pilih Kelompok Stakeholder & Masukkan Identitas
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Pilih persona kelompok yang paling menggambarkan peran Anda di pesisir Cilegon agar redaksi pertanyaan ditampilkan dalam bahasa yang tepat dan relevan.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-sm sm:text-base font-bold text-slate-800">
          1. Pilih Kelompok Stakeholder Sasaran:
        </h2>
        <StakeholderPicker
          selectedGroup={selectedGroup}
          onSelectGroup={setSelectedGroup}
        />
      </section>

      <section className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md p-4 sm:p-8 lg:p-10 space-y-5 sm:space-y-6">
        <div>
          <h2 className="text-sm sm:text-base font-bold text-slate-800">
            2. Identitas Singkat Responden:
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Digunakan untuk validitas data sampel penelitian tesis Magister Manajemen Perikanan.
          </p>
        </div>

        <form onSubmit={handleStartSurvey} className="space-y-4 sm:space-y-5 max-w-xl mx-auto">
          {!selectedGroup ? (
            <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-center space-y-2">
              <HelpCircle className="w-8 h-8 text-amber-600 mx-auto" />
              <p className="font-bold text-sm">Silakan Pilih Kelompok Stakeholder Terlebih Dahulu</p>
              <p className="text-xs text-amber-700">
                Pilih salah satu dari 5 kartu kelompok stakeholder pada Langkah 1 di atas agar formulir identitas singkat otomatis disesuaikan dengan peran Anda.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Info banner kelompok terpilih */}
              <div className="p-3.5 rounded-xl bg-ocean-50 border border-ocean-200 text-ocean-950 text-xs flex items-center justify-between gap-2">
                <div>
                  <span className="font-bold block text-ocean-900">Kelompok: {selectedGroup.nama}</span>
                  <span className="text-slate-600">Formulir Identitas Khusus • Gaya Bahasa: <strong>{selectedGroup.tone}</strong></span>
                </div>
                <CheckCircle2 className="w-5 h-5 text-ocean-600 flex-shrink-0" />
              </div>

              {/* 1. PELAKU USAHA PERIKANAN TANGKAP */}
              {selectedGroup.id === 'pelaku_usaha' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nama Lengkap / Panggilan Nelayan <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Contoh: H. Sarwani / Pak Usman"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Usia Responden (Tahun) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="number"
                      required
                      min="15"
                      max="100"
                      value={usia}
                      onChange={(e) => setUsia(e.target.value)}
                      placeholder="Contoh: 42"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Pangkalan Nelayan di Kota Cilegon (9 Pangkalan) <span className="text-rose-500">*</span>
                    </label>
                    <select
                      required
                      value={pangkalanNelayan}
                      onChange={(e) => handlePangkalanChange(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-white"
                    >
                      <option value="">-- Pilih Salah Satu Pangkalan Nelayan --</option>
                      {DAFTAR_PANGKALAN.map((p, idx) => (
                        <option key={p.id} value={p.nama}>
                          {idx + 1}. Pangkalan {p.nama} (Kel. {p.kelurahan}, Kec. {p.kecamatan})
                        </option>
                      ))}
                    </select>

                    {pangkalanNelayan && (
                      <div className="mt-2.5 p-3 bg-emerald-50/90 border border-emerald-200 rounded-xl text-xs space-y-1.5 animate-fadeIn">
                        <div className="flex items-center gap-1.5 text-emerald-900 font-bold">
                          <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>Data Administrasi Pangkalan Terpilih:</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-slate-700 font-medium pl-5">
                          <div>
                            <span className="text-slate-400 block text-[10px] uppercase font-bold">Kelurahan:</span>
                            <span className="text-slate-900 font-bold">{kelurahan}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[10px] uppercase font-bold">Kecamatan:</span>
                            <span className="text-slate-900 font-bold">{kecamatan}</span>
                          </div>
                        </div>
                        <p className="text-[10px] text-emerald-700 pl-5 font-semibold">
                          ✓ Otomatis tercatat di Supabase: Nama Responden, Kelurahan ({kelurahan}), dan Kecamatan ({kecamatan}).
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      KUB Nelayan (Kelompok Usaha Bersama) <span className="text-slate-400 font-normal">(Isian Bebas)</span>
                    </label>
                    <input
                      type="text"
                      value={kubNelayan}
                      onChange={(e) => setKubNelayan(e.target.value)}
                      placeholder="Contoh: KUB Sinar Bahari / KUB Samudera Jaya (kosongkan jika mandiri)"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Jabatan / Peran di Lapangan <span className="text-slate-400 font-normal">(Opsional)</span>
                    </label>
                    <input
                      type="text"
                      value={jabatan}
                      onChange={(e) => setJabatan(e.target.value)}
                      placeholder="Contoh: Juragan Kapal / Pemilik Perahu / ABK / Bakul Ikan"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nomor WhatsApp / HP <span className="text-slate-400 font-normal">(Opsional)</span>
                    </label>
                    <input
                      type="tel"
                      value={noHp}
                      onChange={(e) => setNoHp(e.target.value)}
                      placeholder="Contoh: 0812-xxxx-xxxx"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>
                </>
              )}

              {/* 2. PEMERINTAH DAERAH */}
              {selectedGroup.id === 'pemda' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nama Lengkap & Gelar <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Contoh: Ir. H. Ahmad Fauzi, M.Si"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      OPD / Instansi Pemerintah Daerah <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={instansi}
                      onChange={(e) => setInstansi(e.target.value)}
                      placeholder="Contoh: Dinas Ketahanan Pangan & Pertanian (DKPP) Cilegon / Bapperida / DLH"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Jabatan / Eselon / Peran <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={jabatan}
                      onChange={(e) => setJabatan(e.target.value)}
                      placeholder="Contoh: Kepala Bidang Perikanan Tangkap / Pengawas Perikanan / Perencana"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nomor WhatsApp / HP <span className="text-slate-400 font-normal">(Opsional)</span>
                    </label>
                    <input
                      type="tel"
                      value={noHp}
                      onChange={(e) => setNoHp(e.target.value)}
                      placeholder="Contoh: 0812-xxxx-xxxx"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>
                </>
              )}

              {/* 3. MASYARAKAT PESISIR */}
              {selectedGroup.id === 'masyarakat_pesisir' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nama Lengkap <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Contoh: Bapak Tb. Mulyadi"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Instansi / Nama Usaha / Komunitas <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={instansi}
                      onChange={(e) => setInstansi(e.target.value)}
                      placeholder="Contoh: Tokoh Warga Pesisir / Rukun Nelayan / Usaha Olahan Ikan / Pokdarwis"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Alamat Domisili Pesisir <span className="text-rose-500">*</span> <span className="text-slate-400 font-normal">(Isian Bebas)</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                      placeholder="Contoh: Kp. Medaksa RT 02/05 Kel. Tamansari, Pulomerak"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nomor WhatsApp / HP <span className="text-slate-400 font-normal">(Opsional)</span>
                    </label>
                    <input
                      type="tel"
                      value={noHp}
                      onChange={(e) => setNoHp(e.target.value)}
                      placeholder="Contoh: 0812-xxxx-xxxx"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>
                </>
              )}

              {/* 4. AKADEMISI & ORGANISASI NELAYAN */}
              {selectedGroup.id === 'akademisi_lsm' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nama Lengkap & Gelar <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Contoh: Dr. Ir. H. Hendra Gunawan, M.Si"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Instansi / Lembaga <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={instansi}
                      onChange={(e) => setInstansi(e.target.value)}
                      placeholder="Contoh: Fakultas Perikanan & Kelautan UNTIRTA / DPC HNSI Kota Cilegon"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Jabatan / Peran <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={jabatan}
                      onChange={(e) => setJabatan(e.target.value)}
                      placeholder="Contoh: Dosen Peneliti / Ketua Cabang HNSI Cilegon / Dewan Pakar"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nomor WhatsApp / HP <span className="text-slate-400 font-normal">(Opsional)</span>
                    </label>
                    <input
                      type="tel"
                      value={noHp}
                      onChange={(e) => setNoHp(e.target.value)}
                      placeholder="Contoh: 0812-xxxx-xxxx"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>
                </>
              )}

              {/* 5. INDUSTRI SEKITAR PESISIR */}
              {selectedGroup.id === 'industri' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nama Lengkap Perwakilan Industri <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Contoh: Bpk. Bambang Trihatmojo"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Jabatan di Perusahaan <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={jabatan}
                      onChange={(e) => setJabatan(e.target.value)}
                      placeholder="Contoh: Manager CSR / Head of Environmental HSE / Humas"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nama Perusahaan / Industri <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={instansi}
                      onChange={(e) => setInstansi(e.target.value)}
                      placeholder="Contoh: PT Krakatau Steel / PT Chandra Asri Pacific / PLTU Suralaya"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Alamat Pabrik / Kawasan Industri Pesisir <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                      placeholder="Contoh: Kawasan Industri Krakatau / Pesisir Ciwandan"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nomor WhatsApp / HP <span className="text-slate-400 font-normal">(Opsional)</span>
                    </label>
                    <input
                      type="tel"
                      value={noHp}
                      onChange={(e) => setNoHp(e.target.value)}
                      placeholder="Contoh: 0812-xxxx-xxxx"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                    />
                  </div>
                </>
              )}
            </div>
          )}

          {/* Selected Stakeholder preview notification */}
          {selectedGroup && (
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting || !selectedGroup}
                className={`w-full py-3.5 sm:py-4 px-6 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.99] ${
                  isSubmitting || !selectedGroup
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    : 'bg-ocean-600 hover:bg-ocean-700 text-white hover:shadow-glow'
                }`}
              >
                <span>{isSubmitting ? 'Menyiapkan Kuesioner...' : 'Lanjut Mengisi Kuesioner'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </form>
      </section>
    </div>
  );
}

