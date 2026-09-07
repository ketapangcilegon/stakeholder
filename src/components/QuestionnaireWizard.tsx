'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Cloud, 
  Layers, 
  Eye, 
  Save, 
  Send, 
  AlertCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Info
} from 'lucide-react';
import { 
  SurveyService, 
  RespondenRecord 
} from '@/lib/surveyService';
import { 
  DIMENSI_LIST, 
  VARIABEL_LIST, 
  INDIKATOR_LIST, 
  PertanyaanItem, 
  StakeholderGroup 
} from '@/data/questionnaireData';

interface Props {
  respondent: RespondenRecord;
  stakeholderGroup: StakeholderGroup;
  questions: PertanyaanItem[];
}

export default function QuestionnaireWizard({ respondent, stakeholderGroup, questions }: Props) {
  const router = useRouter();

  // State
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [viewMode, setViewMode] = useState<'single' | 'dimension'>('single');
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [lastSavedTime, setLastSavedTime] = useState<string>('Baru saja');
  const [showSubmitConfirm, setShowSubmitConfirm] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(respondent.status_pengisian === 'selesai');

  // Load existing answers on mount
  useEffect(() => {
    const existing = SurveyService.getLocalAnswers(respondent.id);
    if (existing && Object.keys(existing).length > 0) {
      const parsed: Record<string, number> = {};
      Object.entries(existing).forEach(([qId, val]: [string, any]) => {
        parsed[qId] = typeof val === 'object' ? val.skor : val;
      });
      setAnswers(parsed);
      
      // Auto position to first unanswered question
      const firstUnanswered = questions.findIndex(q => !parsed[q.id]);
      if (firstUnanswered !== -1) {
        setCurrentIndex(firstUnanswered);
      }
    }
  }, [respondent.id, questions]);

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);
  const currentQ = questions[currentIndex] || questions[0];

  // Lookup metadata for current question
  const currentInd = INDIKATOR_LIST.find(i => i.id === currentQ?.id_indikator);
  const currentVar = currentInd ? VARIABEL_LIST.find(v => v.id === currentInd.id_variabel) : null;
  const currentDim = currentVar ? DIMENSI_LIST.find(d => d.id === currentVar.id_dimensi) : null;

  // Handle Answer Selection
  const handleSelectScore = async (score: number) => {
    if (!currentQ) return;
    
    // Update local state immediately for instant feedback
    const updated = { ...answers, [currentQ.id]: score };
    setAnswers(updated);
    setIsSaving(true);

    // Incremental Auto-save to Supabase & LocalStorage
    await SurveyService.saveAnswer(
      respondent.id,
      currentQ.id,
      currentQ.id_indikator,
      score,
      totalQuestions
    );

    setIsSaving(false);
    setLastSavedTime(new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }));

    // Auto advance in single question mode after slight delay
    if (viewMode === 'single' && currentIndex < totalQuestions - 1) {
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 250);
    }
  };

  // Handle Answer for list mode
  const handleSelectScoreForQuestion = async (qItem: PertanyaanItem, score: number) => {
    const updated = { ...answers, [qItem.id]: score };
    setAnswers(updated);
    setIsSaving(true);

    await SurveyService.saveAnswer(
      respondent.id,
      qItem.id,
      qItem.id_indikator,
      score,
      totalQuestions
    );

    setIsSaving(false);
    setLastSavedTime(new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }));
  };

  // Final Submit
  const handleFinalSubmit = async () => {
    setShowSubmitConfirm(false);
    await SurveyService.completeSurvey(respondent.id);
    setIsSubmitted(true);

    // Confetti effect
    try {
      const confetti = (await import('canvas-confetti')).default;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti effect skipped');
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto my-12 p-8 bg-white rounded-3xl border border-slate-200 shadow-xl text-center animate-fadeIn">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
          Terima Kasih Banyak!
        </h2>
        <p className="text-slate-600 text-base leading-relaxed mb-6">
          Kuesioner penelitian telah <strong>berhasil disimpan dan dikirim</strong>. Partisipasi Bapak/Ibu/Saudara <strong>({respondent.nama})</strong> dari <em>{respondent.instansi}</em> sangat berharga dalam mewujudkan pengelolaan perikanan tangkap yang lestari dan berkeadilan di pesisir Kota Cilegon.
        </p>

        <div className="p-4 rounded-2xl bg-ocean-50 border border-ocean-200 text-ocean-900 text-xs text-left mb-8 space-y-1.5">
          <p className="font-bold flex items-center gap-1.5 text-sm text-ocean-950">
            <Info className="w-4 h-4 text-ocean-600" /> Ringkasan Pengisian:
          </p>
          <p>• Kelompok Stakeholder: <strong>{stakeholderGroup.nama}</strong></p>
          <p>• Total Pertanyaan Dijawab: <strong>{totalQuestions} dari {totalQuestions} Soal (100%)</strong></p>
          <p>• ID Responden: <code className="bg-white px-1.5 py-0.5 rounded text-[11px]">{respondent.id}</code></p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => router.push('/dashboard')}
            className="w-full sm:w-auto px-6 py-3 bg-ocean-600 hover:bg-ocean-700 text-white rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Lihat Dashboard Hasil Analitik</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              SurveyService.clearLocalRespondent();
              router.push('/');
            }}
            className="w-full sm:w-auto px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl font-semibold text-sm transition-all"
          >
            Isi Kuesioner Baru
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      
      {/* ------------------------------------------------------------- */}
      {/* HEADER CARD: Respondent, Stakeholder Persona & Autosave Status */}
      {/* ------------------------------------------------------------- */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${stakeholderGroup.badgeColor}`}>
                {stakeholderGroup.nama.split('(')[0]}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                • {respondent.nama} ({respondent.instansi})
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              Kuesioner Persepsi Keberlanjutan Perikanan Tangkap
            </h1>
          </div>

          {/* View Mode Toggle & Autosave Indicator */}
          <div className="flex items-center gap-3 self-end sm:self-center">
            {/* Autosave badge */}
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1.5 rounded-lg">
              <Cloud className={`w-4 h-4 text-emerald-600 ${isSaving ? 'animate-spin' : ''}`} />
              <span className="font-medium hidden sm:inline">
                {isSaving ? 'Menyimpan...' : `Tersimpan otomatis`}
              </span>
            </div>

            {/* Toggle View Mode */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setViewMode('single')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'single'
                    ? 'bg-white text-ocean-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Tampilkan satu soal per layar"
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Fokus 1 Soal</span>
              </button>
              <button
                onClick={() => setViewMode('dimension')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'dimension'
                    ? 'bg-white text-ocean-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Tampilkan seluruh soal dalam satu halaman"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Semua Soal</span>
              </button>
            </div>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
            <span>Progres Pengisian: <strong>{answeredCount}</strong> dari {totalQuestions} Soal Terjawab</span>
            <span className="text-ocean-700 font-extrabold">{progressPercent}%</span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-ocean-600 to-maritime-teal rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* INTERACTIVE QUESTION PROGRESS GRID (1 .. 42) */}
      {/* ------------------------------------------------------------- */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Navigasi Nomor Soal ({totalQuestions} Indikator)
            </h3>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-slate-100 border border-slate-300" /> Belum
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-emerald-600 text-white" /> Sudah
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded ring-2 ring-ocean-500 bg-ocean-100" /> Aktif
            </span>
          </div>
        </div>

        {/* 42 Grid Boxes */}
        <div className="grid grid-cols-7 sm:grid-cols-11 md:grid-cols-14 gap-1.5 sm:gap-2">
          {questions.map((q, idx) => {
            const isAnswered = answers[q.id] !== undefined;
            const isCurrent = idx === currentIndex && viewMode === 'single';

            return (
              <button
                key={q.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  if (viewMode !== 'single') setViewMode('single');
                }}
                className={`h-9 sm:h-10 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center relative ${
                  isCurrent
                    ? 'ring-2 ring-ocean-500 bg-ocean-500 text-white shadow-glow scale-105 z-10'
                    : isAnswered
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-slate-50 text-slate-600 border border-slate-200/90 hover:bg-ocean-50 hover:border-ocean-300'
                }`}
                title={`Soal No. ${idx + 1} (${q.id_indikator}) - Skor: ${answers[q.id] || 'Belum diisi'}`}
              >
                {idx + 1}
                {isAnswered && !isCurrent && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full border-2 border-white" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MODE 1: SINGLE QUESTION WIZARD (MOBILE FIRST & ACCESSIBLE) */}
      {/* ------------------------------------------------------------- */}
      {viewMode === 'single' && currentQ && (
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 transition-all animate-fadeIn">
          
          {/* Question Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-100">
            <div className="flex items-center gap-2 flex-wrap">
              <span 
                className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm"
                style={{ backgroundColor: currentDim?.warna || '#0284c7' }}
              >
                {currentDim?.nama || 'Dimensi Pengelolaan'}
              </span>
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                {currentVar?.id}: {currentVar?.nama}
              </span>
            </div>

            <div className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200">
              No. <span className="text-ocean-700 text-sm font-black">{currentIndex + 1}</span> / {totalQuestions}
            </div>
          </div>

          {/* Question Statement (Large & Legible Font) */}
          <div className="mb-8">
            <h2 className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug sm:leading-relaxed">
              &ldquo;{currentQ.teks}&rdquo;
            </h2>
            <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              Indikator: <strong>{currentInd?.kode}</strong> — {currentInd?.deskripsi}
            </p>
          </div>

          {/* 5 Likert Buttons */}
          <div className="space-y-3 sm:space-y-3.5">
            {[1, 2, 3, 4, 5].map((score) => {
              const isSelected = answers[currentQ.id] === score;
              const labelText = currentQ.skala_label[score as 1|2|3|4|5];

              return (
                <button
                  key={score}
                  onClick={() => handleSelectScore(score)}
                  className={`w-full p-4 sm:p-5 rounded-2xl border-2 text-left transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'border-ocean-600 bg-ocean-50/70 text-ocean-950 shadow-md ring-2 ring-ocean-200'
                      : 'border-slate-200 hover:border-ocean-400 hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span 
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-base transition-all ${
                        isSelected
                          ? 'bg-ocean-600 text-white shadow-sm scale-105'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-ocean-100 group-hover:text-ocean-800'
                      }`}
                    >
                      {score}
                    </span>
                    <span className="font-semibold text-sm sm:text-base text-slate-800">
                      {labelText}
                    </span>
                  </div>

                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected
                      ? 'border-ocean-600 bg-ocean-600 text-white'
                      : 'border-slate-300 group-hover:border-ocean-400'
                  }`}>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-slate-100">
            <button
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                currentIndex === 0
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            {currentIndex < totalQuestions - 1 ? (
              <button
                onClick={() => setCurrentIndex(prev => Math.min(totalQuestions - 1, prev + 1))}
                className="flex items-center gap-2 px-6 py-3 bg-ocean-600 hover:bg-ocean-700 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>Berikutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setShowSubmitConfirm(true)}
                disabled={answeredCount < totalQuestions}
                className={`flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all ${
                  answeredCount >= totalQuestions
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-lg'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>Kirim Jawaban Final</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODE 2: ALL QUESTIONS LIST VIEW (BY DIMENSION) */}
      {/* ------------------------------------------------------------- */}
      {viewMode === 'dimension' && (
        <div className="space-y-6">
          {DIMENSI_LIST.map((dim) => {
            const dimVars = VARIABEL_LIST.filter(v => v.id_dimensi === dim.id);
            const varIds = dimVars.map(v => v.id);
            const dimIndicators = INDIKATOR_LIST.filter(i => varIds.includes(i.id_variabel));

            return (
              <div key={dim.id} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                {/* Dimension Header */}
                <div 
                  className="px-6 py-4 text-white flex items-center justify-between"
                  style={{ backgroundColor: dim.warna }}
                >
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg">{dim.nama}</h3>
                    <p className="text-xs text-white/90">{dim.deskripsi}</p>
                  </div>
                  <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {dimIndicators.length} Soal
                  </span>
                </div>

                {/* Questions under this Dimension */}
                <div className="p-4 sm:p-6 space-y-6 divide-y divide-slate-100">
                  {dimIndicators.map((ind) => {
                    const q = questions.find(item => item.id_indikator === ind.id);
                    if (!q) return null;
                    const qGlobalIndex = questions.findIndex(item => item.id === q.id);
                    const isAnswered = answers[q.id] !== undefined;

                    return (
                      <div key={q.id} className="pt-6 first:pt-0 space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="text-xs font-bold text-ocean-700 bg-ocean-50 px-2 py-0.5 rounded border border-ocean-200 inline-block mb-1">
                              Soal #{qGlobalIndex + 1} • {ind.kode}
                            </span>
                            <h4 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                              {q.teks}
                            </h4>
                          </div>
                          {isAnswered && (
                            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex-shrink-0">
                              Skor: {answers[q.id]}
                            </span>
                          )}
                        </div>

                        {/* Likert 1-5 Row */}
                        <div className="grid grid-cols-5 gap-2 pt-1">
                          {[1, 2, 3, 4, 5].map((score) => {
                            const isSelected = answers[q.id] === score;
                            return (
                              <button
                                key={score}
                                onClick={() => handleSelectScoreForQuestion(q, score)}
                                className={`p-2.5 rounded-xl border text-center transition-all ${
                                  isSelected
                                    ? 'bg-ocean-600 text-white font-black border-ocean-600 shadow-sm'
                                    : 'bg-slate-50 border-slate-200 hover:bg-ocean-50 hover:border-ocean-300 text-slate-700'
                                }`}
                              >
                                <span className="block text-sm font-bold">{score}</span>
                                <span className="text-[10px] block truncate text-inherit opacity-85 mt-0.5" title={q.skala_label[score as 1|2|3|4|5]}>
                                  {q.skala_label[score as 1|2|3|4|5]}
                                </span>
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

          {/* Submit Button in List Mode */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 text-center space-y-3">
            <p className="text-xs text-slate-500 font-medium">
              Pastikan seluruh <strong>{totalQuestions} pertanyaan</strong> telah terisi sebelum mengirim kuesioner.
            </p>
            <button
              onClick={() => setShowSubmitConfirm(true)}
              disabled={answeredCount < totalQuestions}
              className={`px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all ${
                answeredCount >= totalQuestions
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-lg'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              Kirim Jawaban Kuesioner
            </button>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* SUBMIT CONFIRMATION MODAL */}
      {/* ------------------------------------------------------------- */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 border border-slate-200 text-center">
            <div className="w-16 h-16 bg-ocean-100 text-ocean-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-black text-slate-900 mb-2">
              Konfirmasi Kirim Kuesioner
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              Seluruh <strong>{totalQuestions} pertanyaan</strong> telah Anda isi dengan lengkap. Apakah Anda yakin ingin mengirimkan jawaban ini ke basis data penelitian?
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1 px-4 py-3 border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Cek Kembali
              </button>
              <button
                onClick={handleFinalSubmit}
                className="flex-1 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all"
              >
                Ya, Kirim Sekarang
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
