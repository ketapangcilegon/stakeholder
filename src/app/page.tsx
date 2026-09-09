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
  BookOpen,
  User,
  UserCheck,
  ClipboardList,
  Shield,
  Waves
} from 'lucide-react';
import { STAKEHOLDER_GROUPS, StakeholderGroup } from '@/data/questionnaireData';
import { SurveyService } from '@/lib/surveyService';
import { supabase } from '@/lib/supabaseClient';
import GoogleAuthNoticeModal from '@/components/GoogleAuthNoticeModal';

export default function HomePage() {
  const router = useRouter();
  const formSectionRef = React.useRef<HTMLDivElement>(null);
  const stakeholderSectionRef = React.useRef<HTMLDivElement>(null);

  // State
  const [selectedGroup, setSelectedGroup] = useState<StakeholderGroup | null>(null);
  const [nama, setNama] = useState('');
  const [instansi, setInstansi] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [noHp, setNoHp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [googleUser, setGoogleUser] = useState<any>(null);
  const [existingRespondent, setExistingRespondent] = useState<any>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authErrorMsg, setAuthErrorMsg] = useState('');

  // Check Supabase Auth Session & Local Respondent on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        if (data.session?.user) {
          setGoogleUser(data.session.user);
          if (data.session.user.user_metadata?.full_name) {
            setNama(data.session.user.user_metadata.full_name);
          }
        }
      } catch (err) {
        console.error('Error checking auth session:', err);
      }
    };
    checkSession();

    // Check local storage for existing session
    const localResp = SurveyService.getLocalRespondent();
    if (localResp) {
      setExistingRespondent(localResp);
      if (localResp.id_stakeholder_group) {
        const found = STAKEHOLDER_GROUPS.find(g => g.id === localResp.id_stakeholder_group);
        if (found) setSelectedGroup(found);
      }
    }
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: typeof window !== 'undefined' ? window.location.origin : undefined
        }
      });
      if (error) {
        setAuthErrorMsg(error.message);
        setAuthModalOpen(true);
      }
    } catch (err: any) {
      setAuthErrorMsg(err?.message || 'Gagal menghubungkan ke Google');
      setAuthModalOpen(true);
    }
  };

  const scrollToStakeholder = () => {
    stakeholderSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Submit and start questionnaire
  const handleStartSurvey = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedGroup) {
      alert('Silakan pilih salah satu kelompok stakeholder terlebih dahulu.');
      return;
    }

    if (!nama.trim()) {
      alert('Silakan isi Nama Lengkap Anda.');
      return;
    }

    if (!instansi.trim()) {
      alert('Silakan isi Nama Instansi / Lembaga / Usaha.');
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

      router.push(`/kuesioner/${selectedGroup.id}`);
    } catch (err: any) {
      alert('Terjadi kesalahan: ' + err.message);
      setIsSubmitting(false);
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
      default: return <Fish className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen">
      
      {/* ------------------------------------------------------------- */}
      {/* HERO & SCENIC BACKGROUND SECTION (Matching Mockup) */}
      {/* ------------------------------------------------------------- */}
      <div className="relative overflow-hidden pt-3 sm:pt-4 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-sky-200/60">
        {/* Background Image (Clean without blur, fit to container) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg_stakeholder.jfif')" }}
        />
        {/* Soft overlay gradient for optimal legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/30 via-white/15 to-sky-900/40 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-4 sm:space-y-6">
          
          {/* Top Title Banner */}
          <div className="pt-0">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-snug sm:leading-tight text-[#072d54] drop-shadow-sm">
              Pengelolaan Perikanan Tangkap Berkelanjutan di Kota Cilegon:
              <span className="block text-[#047857] mt-1">
                Strategi Kebijakan Partisipatif Berbasis Persepsi dan Peran Stakeholder
              </span>
            </h1>

            {/* Green Accent Line */}
            <div className="w-16 h-1.5 bg-[#10b981] rounded-full mt-2.5 shadow-xs" />
          </div>

          {/* ----------------------------------------------------------- */}
          {/* FLOATING WHITE INTRO CARD (Matching Mockup Layout) */}
          {/* ----------------------------------------------------------- */}
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/80 max-w-3xl mx-auto space-y-6 text-slate-800 animate-fadeIn">
            
            {/* 1. Greeting */}
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-sky-100/90 text-sky-600 flex items-center justify-center flex-shrink-0 shadow-xs border border-sky-200/80">
                <User className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-black text-base sm:text-lg text-slate-900 leading-tight">
                  Assalamu’alaikum warahmatullahi wabarakatuh.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Selamat datang dan terima kasih atas kesediaan Bapak/Ibu berpartisipasi dalam penelitian ini.
                </p>
              </div>
            </div>

            {/* 2. Researcher Identity */}
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-indigo-100/90 text-indigo-600 flex items-center justify-center flex-shrink-0 shadow-xs border border-indigo-200/80">
                <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Perkenalkan, saya <strong>Ridwan Sugiarto</strong>, Analis Ketahanan Pangan pada Dinas Ketahanan Pangan dan Pertanian (DKPP) Kota Cilegon, sekaligus mahasiswa Program Magister Manajemen Perikanan Universitas Terbuka.
                </p>
              </div>
            </div>

            {/* 3. Objective & 5 Stakeholder Groups */}
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-100/90 text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-xs border border-emerald-200/80">
                <ClipboardList className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Kuesioner ini dirancang secara khusus untuk menggali <strong className="text-emerald-800">persepsi, aspirasi, dan kesiapan kolaborasi</strong> dari <strong className="text-slate-900">5 kelompok pemangku kepentingan (stakeholder)</strong> yang terkait dengan pengelolaan perikanan berkelanjutan di Kota Cilegon.
                </p>
              </div>
            </div>

            {/* 4. Privacy & Authenticity Callout Box */}
            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200/90 flex items-center gap-3.5 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Shield className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-sky-950 leading-relaxed">
                Mohon Bapak/Ibu memberikan <strong className="text-sky-900 font-bold">jawaban sesuai</strong> dengan pengetahuan, pengalaman, dan <strong className="text-sky-900 font-bold">pandangan yang sebenarnya</strong>.
              </p>
            </div>

            {/* 5. CTA Button (Green Teal Gradient Button from Mockup) */}
            <div className="pt-2 text-center">
              <button
                onClick={scrollToStakeholder}
                className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 active:scale-95 text-white font-black text-sm sm:text-base rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-xl transition-all group"
              >
                <span>Mulai Kuesioner</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* 6. Closing Card Footer Greetings */}
            <div className="text-center pt-2 space-y-1 border-t border-slate-100">
              {/* Decorative wave glyphs */}
              <div className="text-sky-500 flex justify-center py-1 opacity-80">
                <svg className="w-8 h-3" viewBox="0 0 24 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M2 4c2.5-2 5.5 2 8 0s5.5-2 8 0" />
                </svg>
              </div>
              <p className="text-xs italic text-slate-600 font-medium">
                Terima kasih atas waktu dan partisipasi Bapak/Ibu.
              </p>
              <p className="text-xs italic text-slate-700 font-semibold">
                Wassalamu’alaikum warahmatullahi wabarakatuh.
              </p>
            </div>

          </div>

          {/* Continue survey banner ONLY for logged-in respondent with unfinished session */}
          {googleUser && existingRespondent && existingRespondent.status_pengisian !== 'selesai' && (
            <div className="p-4 sm:p-5 rounded-2xl bg-[#084c8d]/95 backdrop-blur-md border border-sky-300/40 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xl max-w-3xl mx-auto">
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-sky-200 block">Sesi Pengisian Terakhir Terdeteksi:</span>
                <p className="text-xs sm:text-sm font-bold text-white mt-0.5">
                  {existingRespondent.nama} ({existingRespondent.instansi}) • {existingRespondent.progress_percent || 0}% Selesai
                </p>
              </div>
              <button
                onClick={() => router.push(`/kuesioner/${existingRespondent.id_stakeholder_group || 'pelaku_usaha'}`)}
                className="w-full sm:w-auto px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <span>Lanjutkan Kuesioner</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Google 1-Tap Login Bar */}
          <div className="flex items-center justify-center gap-3 flex-wrap max-w-3xl mx-auto">
            {googleUser ? (
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200 text-xs text-slate-800 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Masuk sebagai: <strong>{googleUser.email}</strong></span>
              </div>
            ) : (
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold shadow-md transition-all border border-slate-200 group"
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
            <span className="text-[12px] sm:text-xs font-bold text-slate-800 bg-white/85 px-3 py-1.5 rounded-lg shadow-xs border border-white/80">
              *Atau langsung isi identitas singkat di bawah tanpa login.
            </span>
          </div>

        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MAIN SURVEY CONTENT AREA */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 sm:space-y-12">
      
      {/* ------------------------------------------------------------- */}
      {/* STEP 1: PILIH KELOMPOK STAKEHOLDER */}
      {/* ------------------------------------------------------------- */}
      <section ref={stakeholderSectionRef} className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-ocean-600">
              Langkah 1 dari 2
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Pilih Kelompok Stakeholder Anda
            </h2>
          </div>
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
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      isSelected 
                        ? (group.iconSelectedBg || 'bg-ocean-600 text-white') + ' shadow-sm' 
                        : (group.iconBg || 'bg-slate-100 text-slate-700')
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
      <section ref={formSectionRef} id="form-identitas" className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md p-4 sm:p-8 lg:p-10 space-y-5 sm:space-y-6">
        <div>
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-ocean-600">
            Langkah 2 dari 2
          </span>
          <h2 className="text-lg sm:text-2xl font-black text-slate-900">
            Identitas Singkat Responden
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Data identitas digunakan semata-mata untuk validitas data statistik penelitian tesis.
          </p>
        </div>

        <form onSubmit={handleStartSurvey} className="space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            
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
                className="w-full px-4 py-3 sm:py-3 rounded-xl border border-slate-300 text-base sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all bg-slate-50/50"
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
                className="w-full px-4 py-3 sm:py-3 rounded-xl border border-slate-300 text-base sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all bg-slate-50/50"
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
                className="w-full px-4 py-3 sm:py-3 rounded-xl border border-slate-300 text-base sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all bg-slate-50/50"
              />
            </div>

            {/* Nomor Kontak */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Nomor WhatsApp / HP <span className="text-slate-400 font-normal">(Opsional)</span>
              </label>
              <input
                type="tel"
                value={noHp}
                onChange={(e) => setNoHp(e.target.value)}
                placeholder="Contoh: 0812-xxxx-xxxx"
                className="w-full px-4 py-3 sm:py-3 rounded-xl border border-slate-300 text-base sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all bg-slate-50/50"
              />
            </div>

          </div>

          {/* Selected Stakeholder preview notification */}
          {selectedGroup ? (
            <div className="p-3.5 sm:p-4 rounded-xl bg-ocean-50 border border-ocean-200 text-ocean-950 text-xs flex items-center justify-between gap-2">
              <div>
                <span className="font-bold block text-ocean-900">Kelompok Terpilih: {selectedGroup.nama}</span>
                <span className="text-slate-600">Gaya Bahasa: <strong>{selectedGroup.tone}</strong> (42 Pertanyaan)</span>
              </div>
              <CheckCircle2 className="w-5 h-5 text-ocean-600 flex-shrink-0" />
            </div>
          ) : (
            <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>Silakan pilih salah satu dari 5 kotak kelompok stakeholder di Langkah 1 di atas.</span>
            </div>
          )}

          {/* Submit Action */}
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
              <span>{isSubmitting ? 'Menyiapkan Kuesioner...' : 'Mulai Pengisian Kuesioner Sekarang'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </section>

      {/* Google Auth Notice Modal */}
      <GoogleAuthNoticeModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        rawErrorMessage={authErrorMsg}
        onProceedWithoutLogin={() => {
          setAuthModalOpen(false);
          const el = document.getElementById('form-identitas');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      </div>
    </div>
  );
}
