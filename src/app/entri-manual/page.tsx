'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  STAKEHOLDER_GROUPS, 
  DIMENSI_LIST, 
  VARIABEL_LIST, 
  INDIKATOR_LIST,
  StakeholderGroup 
} from '@/data/questionnaireData';
import { SurveyService } from '@/lib/surveyService';
import { 
  Edit3, 
  Save, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Sparkles,
  Info,
  RefreshCcw
} from 'lucide-react';

export default function EntriManualPage() {
  const router = useRouter();

  // Form State
  const [selectedGroupId, setSelectedGroupId] = useState<string>('pelaku_usaha');
  const [nama, setNama] = useState('');
  const [instansi, setInstansi] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [noHp, setNoHp] = useState('');
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const selectedGroup = STAKEHOLDER_GROUPS.find(g => g.id === selectedGroupId) || STAKEHOLDER_GROUPS[1];
  const questions = SurveyService.getQuestions(selectedGroup.id);
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(scores).length;

  const handleScoreChange = (qId: string, val: number) => {
    setScores(prev => ({
      ...prev,
      [qId]: val
    }));
  };

  const handleResetForm = () => {
    setNama('');
    setInstansi('');
    setJabatan('');
    setNoHp('');
    setScores({});
    setSuccessMessage(null);
  };

  const handleSubmitManual = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !instansi.trim()) {
      alert('Nama responden dan instansi/pangkalan wajib diisi!');
      return;
    }
    if (answeredCount < totalQuestions) {
      if (!confirm(`Baru ${answeredCount} dari ${totalQuestions} soal yang terisi. Apakah yakin ingin menyimpan entri sebagian ini?`)) {
        return;
      }
    }

    setIsSubmitting(true);

    const result = await SurveyService.submitManualEntry(
      {
        nama: nama.trim(),
        instansi: instansi.trim(),
        jabatan: jabatan.trim() || undefined,
        no_hp: noHp.trim() || undefined,
        id_stakeholder_group: selectedGroup.id
      },
      scores
    );

    setIsSubmitting(false);

    if (result.success) {
      setSuccessMessage(`Berhasil menyimpan data kuesioner fisik atas nama: ${nama} (${selectedGroup.nama})`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert('Gagal menyimpan: ' + (result.error || 'Terjadi kesalahan sistem'));
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
          <Edit3 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Panel Enumerator Lapangan</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Entri Manual Kuesioner Cetak
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Gunakan formulir entri cepat ini untuk memasukkan data dari lembar kuesioner fisik hasil survei/wawancara tatap muka ke dalam basis data penelitian Supabase.
        </p>
      </div>

      {/* Success Notification */}
      {successMessage && (
        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
            <span className="font-bold">{successMessage}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleResetForm}
              className="px-3.5 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-all"
            >
              Input Lembar Baru
            </button>
            <button
              onClick={() => router.push('/dashboard')}
              className="px-3.5 py-1.5 border border-emerald-300 bg-white text-emerald-900 rounded-lg text-xs font-semibold hover:bg-emerald-50 transition-all"
            >
              Lihat Dashboard
            </button>
          </div>
        </div>
      )}

      {/* Main Entry Form */}
      <form onSubmit={handleSubmitManual} className="space-y-8">
        
        {/* IDENTITAS RESPONDEN SECTION */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="font-bold text-lg text-slate-900">
              1. Identitas Responden dari Lembar Kuesioner
            </h3>
            <span className="text-xs font-semibold text-slate-400">
              Wajib diisi sesuai kertas fisik
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Stakeholder Selector */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Kelompok Stakeholder Sasaran <span className="text-rose-500">*</span>
              </label>
              <select
                value={selectedGroupId}
                onChange={(e) => {
                  setSelectedGroupId(e.target.value);
                  setScores({}); // Reset scores when group changes
                }}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-bold text-slate-800 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-ocean-500"
              >
                {STAKEHOLDER_GROUPS.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.nama} (Target: {g.target} Orang)
                  </option>
                ))}
              </select>
            </div>

            {/* Nama Lengkap */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Nama Lengkap Responden <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama di lembar kuesioner"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
              />
            </div>

            {/* Instansi / Pangkalan */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Instansi / Kelompok / Pangkalan Nelayan <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={instansi}
                onChange={(e) => setInstansi(e.target.value)}
                placeholder="Instansi atau pangkalan perahu"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
              />
            </div>

            {/* Jabatan */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Jabatan / Peran di Lapangan
              </label>
              <input
                type="text"
                value={jabatan}
                onChange={(e) => setJabatan(e.target.value)}
                placeholder="Contoh: Nelayan / Juragan / Kabid"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
              />
            </div>

            {/* No Kontak */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Nomor WhatsApp / HP
              </label>
              <input
                type="tel"
                value={noHp}
                onChange={(e) => setNoHp(e.target.value)}
                placeholder="0812-xxxx-xxxx"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
              />
            </div>
          </div>
        </div>

        {/* INPUT SKOR LIKERT 1-42 (RAPID TABLE) */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-lg text-slate-900">
                2. Input Skor Jawaban Likert (42 Indikator)
              </h3>
              <p className="text-xs text-slate-500">
                Pilih angka 1 s/d 5 sesuai tanda centang pada lembar kertas responden.
              </p>
            </div>

            <div className="text-xs font-bold px-3 py-1.5 rounded-xl bg-ocean-50 text-ocean-800 border border-ocean-200 self-start sm:self-auto">
              Terisi: <strong className="text-ocean-950 text-sm">{answeredCount}</strong> / {totalQuestions} Soal
            </div>
          </div>

          {/* Dimension Grouping */}
          <div className="space-y-6">
            {DIMENSI_LIST.map((dim) => {
              const dimVars = VARIABEL_LIST.filter(v => v.id_dimensi === dim.id);
              const varIds = dimVars.map(v => v.id);
              const dimIndicators = INDIKATOR_LIST.filter(i => varIds.includes(i.id_variabel));

              return (
                <div key={dim.id} className="border border-slate-200 rounded-2xl overflow-hidden">
                  <div 
                    className="px-4 py-2.5 text-white font-bold text-xs flex items-center justify-between"
                    style={{ backgroundColor: dim.warna }}
                  >
                    <span>{dim.nama.toUpperCase()}</span>
                    <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded-full">{dimIndicators.length} Butir</span>
                  </div>

                  <div className="divide-y divide-slate-100 bg-white">
                    {dimIndicators.map((ind) => {
                      const q = questions.find(item => item.id_indikator === ind.id);
                      if (!q) return null;
                      const qGlobalIndex = questions.findIndex(item => item.id === q.id);
                      const currentVal = scores[q.id];

                      return (
                        <div key={q.id} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/80 transition-colors">
                          <div className="flex-1 pr-2">
                            <span className="text-[10px] font-bold text-ocean-700 bg-ocean-50 px-2 py-0.5 rounded border border-ocean-200 mr-1.5">
                              #{qGlobalIndex + 1} • {ind.kode}
                            </span>
                            <span className="text-xs font-medium text-slate-800 leading-snug">
                              {q.teks}
                            </span>
                          </div>

                          {/* Quick 1..5 Buttons */}
                          <div className="flex items-center gap-1.5 flex-shrink-0 self-end sm:self-center">
                            {[1, 2, 3, 4, 5].map((num) => {
                              const isChecked = currentVal === num;
                              return (
                                <button
                                  type="button"
                                  key={num}
                                  onClick={() => handleScoreChange(q.id, num)}
                                  className={`w-9 h-9 rounded-lg font-black text-xs transition-all flex items-center justify-center ${
                                    isChecked
                                      ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-200 scale-105'
                                      : 'bg-slate-100 text-slate-600 hover:bg-ocean-100 hover:text-ocean-900 border border-slate-200'
                                  }`}
                                  title={`Skor ${num}: ${q.skala_label[num as 1|2|3|4|5]}`}
                                >
                                  {num}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Submit Action */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={handleResetForm}
              className="px-5 py-3 border border-slate-300 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-1.5"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              <span>Bersihkan Form</span>
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>{isSubmitting ? 'Menyimpan ke Supabase...' : 'Simpan Entri Kuesioner'}</span>
            </button>
          </div>
        </div>

      </form>

    </div>
  );
}
