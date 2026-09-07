'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Anchor, 
  Fish, 
  Landmark, 
  Users, 
  GraduationCap, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  HelpCircle,
  Sparkles,
  LogIn,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { STAKEHOLDER_GROUPS, StakeholderGroup } from '@/data/questionnaireData';
import { SurveyService } from '@/lib/surveyService';
import { supabase } from '@/lib/supabaseClient';

export default function HomePage() {
  const router = useRouter();

  // State
  const [selectedGroup, setSelectedGroup] = useState<StakeholderGroup | null>(null);
  const [nama, setNama] = useState('');
  const [instansi, setInstansi] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [noHp, setNoHp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [googleUser, setGoogleUser] = useState<any>(null);
  const [existingRespondent, setExistingRespondent] = useState<any>(null);

  // Check Supabase Auth Session & Local Respondent on mount
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

      // Check local saved respondent
      const localResp = SurveyService.getLocalRespondent();
      if (localResp) {
        setExistingRespondent(localResp);
        setNama(localResp.nama);
        setInstansi(localResp.instansi);
        if (localResp.jabatan) setJabatan(localResp.jabatan);
        if (localResp.no_hp) setNoHp(localResp.no_hp);
        const grp = STAKEHOLDER_GROUPS.find(g => g.id === localResp.id_stakeholder_group);
        if (grp) setSelectedGroup(grp);
      }
    };

    checkSession();
  }, []);

  // Google 1-Tap Sign In
  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: typeof window !== 'undefined' ? `${window.location.origin}/` : undefined
        }
      });
      if (error) {
        alert('Google Sign-In: ' + error.message);
      }
    } catch (err: any) {
      console.warn('OAuth error:', err);
    }
  };

  // Icon mapper
  const getStakeholderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark': return <Landmark className="w-6 h-6" />;
      case 'Fish': return <Fish className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      default: return <Anchor className="w-6 h-6" />;
    }
  };

  // Submit and start questionnaire
  const handleStartSurvey = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedGroup) {
      alert('Silakan pilih salah satu kelompok stakeholder terlebih dahulu!');
      return;
    }
    if (!nama.trim() || !instansi.trim()) {
      alert('Nama dan Instansi/Pangkalan wajib diisi!');
      return;
    }

    setIsSubmitting(true);

    try {
      const respondent = await SurveyService.initRespondent({
        nama: nama.trim(),
        instansi: instansi.trim(),
        jabatan: jabatan.trim() || undefined,
        no_hp: noHp.trim() || undefined,
        id_stakeholder_group: selectedGroup.id,
        user_id_google: googleUser?.id || null,
        email: googleUser?.email || null,
        is_manual_entry: false
      });

      router.push('/survey');
    } catch (err: any) {
      alert('Terjadi kesalahan: ' + err.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-maritime-dark via-ocean-950 to-maritime-deep text-white p-6 sm:p-12 lg:p-16 shadow-2xl border border-ocean-800">
        
        {/* Background ocean pattern accents */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-maritime-teal/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-500/20 border border-ocean-400/30 text-ocean-300 text-xs font-bold tracking-wide uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-ocean-300" />
            <span>Kuesioner Penelitian Tesis Magister</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-tight">
            Keberlanjutan Pengelolaan Perikanan Tangkap Pesisir Kota Cilegon
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Selamat datang di instrumen kuesioner digital penelitian tesis Magister Manajemen Perikanan. Kuesioner ini dirancang secara khusus untuk menggali persepsi, aspirasi, dan kesiapan kolaborasi <strong>5 kelompok pemangku kepentingan (stakeholder)</strong> di kawasan pesisir Kota Cilegon.
          </p>

          {/* Continue survey banner if local session exists */}
          {existingRespondent && existingRespondent.status_pengisian !== 'selesai' && (
            <div className="p-4 rounded-2xl bg-ocean-900/80 border border-ocean-400/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4">
              <div>
                <span className="text-xs font-bold text-ocean-300 block">Sesi Pengisian Terakhir Terdeteksi:</span>
                <p className="text-sm font-bold text-white">
                  {existingRespondent.nama} ({existingRespondent.instansi}) • {existingRespondent.progress_percent || 0}% Selesai
                </p>
              </div>
              <button
                onClick={() => router.push('/survey')}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5"
              >
                <span>Lanjutkan Kuesioner</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Google 1-Tap Login Bar */}
          <div className="pt-2 flex items-center gap-3 flex-wrap">
            {googleUser ? (
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Masuk sebagai: <strong>{googleUser.email}</strong></span>
              </div>
            ) : (
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold shadow-md transition-all group"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Masuk 1-Tap Google (Otomatis)</span>
              </button>
            )}
            <span className="text-xs text-slate-400">
              *Atau langsung isi identitas singkat di bawah tanpa login.
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* STEP 1: PILIH KELOMPOK STAKEHOLDER */}
      {/* ------------------------------------------------------------- */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-ocean-600">
              Langkah 1 dari 2
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Pilih Kelompok Stakeholder Anda
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            Redaksi pertanyaan akan disesuaikan otomatis dengan latar belakang Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STAKEHOLDER_GROUPS.map((group) => {
            const isSelected = selectedGroup?.id === group.id;

            return (
              <div
                key={group.id}
                onClick={() => setSelectedGroup(group)}
                className={`cursor-pointer rounded-2xl p-5 border-2 transition-all relative flex flex-col justify-between ${
                  isSelected
                    ? 'border-ocean-600 bg-ocean-50/70 shadow-lg ring-2 ring-ocean-200 scale-[1.02]'
                    : 'border-slate-200 bg-white hover:border-ocean-300 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-ocean-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {getStakeholderIcon(group.iconName)}
                    </div>

                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${group.badgeColor}`}>
                      Target: {group.target} Org
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-slate-900 mb-1.5 leading-snug">
                    {group.nama}
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {group.deskripsi}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100/80">
                  <span className="text-[11px] font-medium text-slate-400 block truncate" title={group.contohSubjek}>
                    <strong>Contoh:</strong> {group.contohSubjek}
                  </span>
                </div>

                {isSelected && (
                  <div className="absolute top-3 right-3 w-5 h-5 bg-ocean-600 text-white rounded-full flex items-center justify-center shadow">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* STEP 2: FORM IDENTITAS SINGKAT & MULAI */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10 space-y-6">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-ocean-600">
            Langkah 2 dari 2
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Identitas Singkat Responden
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Data identitas digunakan semata-mata untuk validitas data statistik penelitian tesis.
          </p>
        </div>

        <form onSubmit={handleStartSurvey} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Nama Lengkap */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Nama Lengkap / Panggilan <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Contoh: H. Suherman / Pak Sarwani"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all bg-slate-50/50"
              />
            </div>

            {/* Instansi / Pangkalan */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Instansi / Nama Kelompok / Pangkalan Nelayan <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={instansi}
                onChange={(e) => setInstansi(e.target.value)}
                placeholder="Contoh: DKPP Cilegon / Nelayan Medaksa / Kelurahan Gerem"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all bg-slate-50/50"
              />
            </div>

            {/* Jabatan / Peran */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Jabatan / Peran di Lapangan <span className="text-slate-400 font-normal">(Opsional)</span>
              </label>
              <input
                type="text"
                value={jabatan}
                onChange={(e) => setJabatan(e.target.value)}
                placeholder="Contoh: Juragan Kapal / Kabid Perikanan / Ketua RT"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all bg-slate-50/50"
              />
            </div>

            {/* Nomor Kontak */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Nomor WhatsApp / HP <span className="text-slate-400 font-normal">(Opsional untuk konfirmasi cinderamata)</span>
              </label>
              <input
                type="tel"
                value={noHp}
                onChange={(e) => setNoHp(e.target.value)}
                placeholder="Contoh: 0812-xxxx-xxxx"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all bg-slate-50/50"
              />
            </div>

          </div>

          {/* Selected Stakeholder preview notification */}
          {selectedGroup ? (
            <div className="p-4 rounded-xl bg-ocean-50 border border-ocean-200 text-ocean-950 text-xs flex items-center justify-between">
              <div>
                <span className="font-bold block">Kelompok Terpilih: {selectedGroup.nama}</span>
                <span className="text-slate-600">Gaya Bahasa: <strong>{selectedGroup.tone}</strong> (42 Pertanyaan)</span>
              </div>
              <CheckCircle2 className="w-5 h-5 text-ocean-600" />
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>Silakan pilih salah satu dari 5 kotak kelompok stakeholder di Langkah 1 di atas.</span>
            </div>
          )}

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting || !selectedGroup}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 ${
                isSubmitting || !selectedGroup
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  : 'bg-ocean-600 hover:bg-ocean-700 text-white hover:shadow-glow'
              }`}
            >
              <span>{isSubmitting ? 'Menyiapkan Kuesioner...' : 'Mulai Pengisian Kuesioner Sekarang'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </section>

    </div>
  );
}
