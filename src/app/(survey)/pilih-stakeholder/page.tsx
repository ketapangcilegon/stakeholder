'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { STAKEHOLDER_GROUPS, StakeholderGroup, DAFTAR_PANGKALAN, PangkalanNelayan } from '@/config/constants';
import { SurveyActions } from '@/features/survey/actions';
import StakeholderPicker from '@/features/stakeholder/components/StakeholderPicker';
import { supabase } from '@/lib/supabase/client';
import { ArrowRight, CheckCircle2, HelpCircle, Sparkles, MapPin, Lock, LogOut } from 'lucide-react';

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
  const formSectionRef = React.useRef<HTMLDivElement>(null);

  const handleSelectGroup = (group: StakeholderGroup) => {
    setSelectedGroup(group);
    setTimeout(() => {
      formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 120);
  };

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

  const handleGoogleSignIn = async () => {
    setIsSubmitting(true);
    try {
      const redirectUrl = typeof window !== 'undefined'
        ? `${window.location.origin}/pilih-stakeholder`
        : undefined;

      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl
        }
      });
      if (error) {
        alert('Gagal otentikasi Google: ' + error.message);
      }
    } catch (err: any) {
      alert('Terjadi kesalahan: ' + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setGoogleUser(null);
    setSelectedGroup(null);
    setNama('');
  };

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
      {!googleUser ? (
        <section className="max-w-2xl mx-auto my-6 p-6 sm:p-10 bg-white rounded-3xl border-2 border-ocean-400 shadow-2xl text-center space-y-6 animate-fadeIn relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-ocean-600" />

          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-ocean-50 text-ocean-700 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-sm border border-ocean-200">
            <svg className="w-9 h-9 sm:w-11 sm:h-11" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
          </div>

          <div className="space-y-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-black rounded-full uppercase tracking-wider border border-amber-200 shadow-xs">
              <Lock className="w-3.5 h-3.5 text-amber-700" /> Tahap 1: Verifikasi Akun Gmail
            </span>
            <h1 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Masuk dengan Akun Google / Gmail
            </h1>
          </div>

          <div className="pt-2">
            <button
              onClick={handleGoogleSignIn}
              disabled={isSubmitting}
              className="w-full sm:w-auto mx-auto px-8 sm:px-10 py-4 bg-white hover:bg-slate-50 active:scale-95 text-slate-900 border-2 border-slate-300 hover:border-ocean-500 rounded-2xl font-black text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>{isSubmitting ? 'Menghubungkan...' : 'Masuk Sekarang dengan Google (1-Tap)'}</span>
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 text-left max-w-lg mx-auto flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span>Setelah masuk, nama dan email Anda akan terverifikasi secara resmi, lalu <strong>pilihan 5 kotak stakeholder dan formulir identitas</strong> akan langsung terbuka otomatis.</span>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400">
            <Lock className="w-3.5 h-3.5" />
            <span>Pilihan Stakeholder & Formulir Identitas Terkunci Sebelum Login</span>
          </div>
        </section>
      ) : (
        <>
          {/* Header & Verified User Banner */}
          <div className="flex items-center justify-between gap-3 flex-wrap p-3.5 sm:p-4 rounded-2xl bg-white border border-emerald-300 shadow-sm">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-emerald-700 block uppercase tracking-wider">
                  Akun Google Terverifikasi
                </span>
                <span className="font-bold text-slate-900">{googleUser.user_metadata?.full_name || googleUser.email}</span>
                <span className="text-slate-500 text-xs ml-1.5 hidden sm:inline">({googleUser.email})</span>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg transition-all border border-rose-200"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Ganti Akun</span>
            </button>
          </div>

          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean-100 text-ocean-800 text-[11px] sm:text-xs font-bold border border-ocean-200">
              <Sparkles className="w-3.5 h-3.5 text-ocean-600" />
              <span>Langkah 2 dari 3: Pilih Kelompok Stakeholder</span>
            </div>
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug sm:leading-tight">
              Pilih Kelompok Stakeholder Sasaran Anda
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Klik salah satu dari 5 kotak kelompok stakeholder di bawah ini yang sesuai dengan peran Anda di pesisir Cilegon:
            </p>
          </div>

          <section className="space-y-4">
            <StakeholderPicker
              selectedGroup={selectedGroup}
              onSelectGroup={handleSelectGroup}
            />
          </section>

          {!selectedGroup ? (
            <div className="p-4 sm:p-5 rounded-2xl bg-ocean-50/80 border border-ocean-200 text-ocean-900 text-center text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 max-w-2xl mx-auto shadow-xs">
              <Sparkles className="w-4 h-4 text-ocean-600 flex-shrink-0" />
              <span>Silakan klik salah satu dari <strong>5 kotak kelompok stakeholder</strong> di atas untuk membuka formulir identitas.</span>
            </div>
          ) : (
            <section ref={formSectionRef} className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md p-4 sm:p-8 lg:p-10 space-y-5 sm:space-y-6 animate-fadeIn">
              <div>
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-ocean-600">
                  Langkah 3 dari 3
                </span>
                <h2 className="text-sm sm:text-base font-bold text-slate-800">
                  Identitas Singkat Responden ({selectedGroup.nama}):
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Digunakan untuk validitas data sampel penelitian tesis Magister Manajemen Perikanan.
                </p>
              </div>

              <form onSubmit={handleStartSurvey} className="space-y-4 sm:space-y-5 max-w-xl mx-auto">
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

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 sm:py-4 px-6 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.99] ${
                  isSubmitting
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    : 'bg-ocean-600 hover:bg-ocean-700 text-white hover:shadow-glow'
                }`}
              >
                <span>{isSubmitting ? 'Menyiapkan Kuesioner...' : 'Simpan Identitas & Mulai Kuesioner (42 Pertanyaan)'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </section>
      )}
      </>
    )}
    </div>
  );
}

