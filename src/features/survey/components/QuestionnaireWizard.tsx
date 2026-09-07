'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Cloud, 
  Layers, 
  Eye, 
  Send, 
  Sparkles,
  ArrowRight,
  Info
} from 'lucide-react';
import { 
  DIMENSI_LIST, 
  VARIABEL_LIST, 
  INDIKATOR_LIST, 
  PertanyaanItem, 
  StakeholderGroup 
} from '@/config/constants';
import { RespondenData } from '../types';
import { SurveyActions } from '../actions';
import { useAutosaveJawaban } from '../hooks/useAutosaveJawaban';
import ProgressGrid from './ProgressGrid';
import QuestionCard from './QuestionCard';
import LikertInput from './LikertInput';

interface Props {
  respondent: RespondenData;
  stakeholderGroup: StakeholderGroup;
  questions: PertanyaanItem[];
}

export default function QuestionnaireWizard({ respondent, stakeholderGroup, questions }: Props) {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [viewMode, setViewMode] = useState<'single' | 'dimension'>('single');
  const [showSubmitConfirm, setShowSubmitConfirm] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(respondent.status_pengisian === 'selesai');

  const { isSaving, saveJawaban } = useAutosaveJawaban(respondent.id, questions.length);

  // Load existing answers on mount
  useEffect(() => {
    const existing = SurveyActions.getLocalAnswers(respondent.id);
    if (existing && Object.keys(existing).length > 0) {
      setAnswers(existing);
      const firstUnanswered = questions.findIndex(q => !existing[q.id]);
      if (firstUnanswered !== -1) {
        setCurrentIndex(firstUnanswered);
      }
    }
  }, [respondent.id, questions]);

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);
  const currentQ = questions[currentIndex] || questions[0];

  const handleSelectScore = async (score: number) => {
    if (!currentQ) return;
    setAnswers(prev => ({ ...prev, [currentQ.id]: score }));
    await saveJawaban(currentQ.id, currentQ.id_indikator, score);

    if (viewMode === 'single' && currentIndex < totalQuestions - 1) {
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 250);
    }
  };

  const handleSelectScoreForList = async (qItem: PertanyaanItem, score: number) => {
    setAnswers(prev => ({ ...prev, [qItem.id]: score }));
    await saveJawaban(qItem.id, qItem.id_indikator, score);
  };

  const handleFinalSubmit = async () => {
    setShowSubmitConfirm(false);
    await SurveyActions.finishSurvey(respondent.id);
    setIsSubmitted(true);

    try {
      const confetti = (await import('canvas-confetti')).default;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      console.log('Confetti skipped');
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
              SurveyActions.clearSession();
              router.push('/pilih-stakeholder');
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
      {/* Header Info */}
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

          <div className="flex items-center gap-3 self-end sm:self-center">
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1.5 rounded-lg">
              <Cloud className={`w-4 h-4 text-emerald-600 ${isSaving ? 'animate-spin' : ''}`} />
              <span className="font-medium hidden sm:inline">
                {isSaving ? 'Menyimpan...' : 'Tersimpan otomatis'}
              </span>
            </div>

            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setViewMode('single')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'single'
                    ? 'bg-white text-ocean-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
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
            <span>Progres: <strong>{answeredCount}</strong> dari {totalQuestions} Soal Terjawab</span>
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

      {/* Progress Grid */}
      <ProgressGrid
        questions={questions}
        currentIndex={currentIndex}
        answers={answers}
        onSelectIndex={(idx) => {
          setCurrentIndex(idx);
          if (viewMode !== 'single') setViewMode('single');
        }}
        isSingleMode={viewMode === 'single'}
      />

      {/* Mode 1: Question Card */}
      {viewMode === 'single' && currentQ && (
        <div className="space-y-6">
          <QuestionCard
            question={currentQ}
            currentIndex={currentIndex}
            totalQuestions={totalQuestions}
            selectedScore={answers[currentQ.id]}
            onSelectScore={handleSelectScore}
          />

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                currentIndex === 0
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-slate-700 hover:bg-slate-100 bg-white border border-slate-200 shadow-sm'
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

      {/* Mode 2: Dimension List View */}
      {viewMode === 'dimension' && (
        <div className="space-y-6">
          {DIMENSI_LIST.map((dim) => {
            const dimVars = VARIABEL_LIST.filter(v => v.id_dimensi === dim.id);
            const varIds = dimVars.map(v => v.id);
            const dimIndicators = INDIKATOR_LIST.filter(i => varIds.includes(i.id_variabel));

            return (
              <div key={dim.id} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
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

                        <LikertInput
                          question={q}
                          selectedScore={answers[q.id]}
                          onSelectScore={(score) => handleSelectScoreForList(q, score)}
                          compact
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

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

      {/* Confirmation Modal */}
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
