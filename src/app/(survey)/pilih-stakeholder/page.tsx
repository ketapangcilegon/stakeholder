'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { STAKEHOLDER_GROUPS, StakeholderGroup } from '@/config/constants';
import { SurveyActions } from '@/features/survey/actions';
import StakeholderPicker from '@/features/stakeholder/components/StakeholderPicker';
import { supabase } from '@/lib/supabase/client';
import { ArrowRight, CheckCircle2, HelpCircle, Sparkles } from 'lucide-react';

export default function PilihStakeholderPage() {
  const router = useRouter();

  const [selectedGroup, setSelectedGroup] = useState<StakeholderGroup | null>(null);
  const [nama, setNama] = useState('');
  const [instansi, setInstansi] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [noHp, setNoHp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [googleUser, setGoogleUser] = useState<any>(null);

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
        const grp = STAKEHOLDER_GROUPS.find(g => g.id === localResp.id_stakeholder_group);
        if (grp) setSelectedGroup(grp);
      }
    };

    checkSession();
  }, []);

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
      await SurveyActions.initRespondent({
        nama: nama.trim(),
        instansi: instansi.trim(),
        jabatan: jabatan.trim() || undefined,
        no_hp: noHp.trim() || undefined,
        id_stakeholder_group: selectedGroup.id,
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

        <form onSubmit={handleStartSurvey} className="space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50 transition-all"
              />
            </div>

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
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50 transition-all"
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
                placeholder="Contoh: Juragan Kapal / Kabid Perikanan / Ketua RT"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50 transition-all"
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
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50 transition-all"
              />
            </div>
          </div>

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
              <span>Silakan pilih salah satu kelompok stakeholder di bagian 1 di atas.</span>
            </div>
          )}

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
        </form>
      </section>
    </div>
  );
}
