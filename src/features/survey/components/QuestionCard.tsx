'use client';

import React from 'react';
import { Info } from 'lucide-react';
import { 
  PertanyaanItem, 
  DIMENSI_LIST, 
  VARIABEL_LIST, 
  INDIKATOR_LIST 
} from '@/config/constants';
import LikertInput from './LikertInput';

interface Props {
  question: PertanyaanItem;
  currentIndex: number;
  totalQuestions: number;
  selectedScore?: number;
  onSelectScore: (score: number) => void;
}

export default function QuestionCard({
  question,
  currentIndex,
  totalQuestions,
  selectedScore,
  onSelectScore
}: Props) {
  const currentInd = INDIKATOR_LIST.find((i) => i.id === question.id_indikator);
  const currentVar = currentInd ? VARIABEL_LIST.find((v) => v.id === currentInd.id_variabel) : null;
  const currentDim = currentVar ? DIMENSI_LIST.find((d) => d.id === currentVar.id_dimensi) : null;

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md p-4 sm:p-8 lg:p-10 transition-all animate-fadeIn">
      {/* Header Info */}
      <div className="flex items-center justify-between gap-2 pb-3.5 sm:pb-4 mb-4 sm:mb-6 border-b border-slate-100">
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <span
            className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold text-white shadow-sm"
            style={{ backgroundColor: currentDim?.warna || '#0284c7' }}
          >
            {currentDim?.nama || 'Dimensi Pengelolaan'}
          </span>
          <span className="text-[11px] sm:text-xs font-semibold text-slate-500 bg-slate-100 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md">
            {currentVar?.id}: {currentVar?.nama}
          </span>
        </div>

        <div className="text-xs font-bold text-slate-500 bg-slate-50 px-2.5 sm:px-3 py-1 rounded-lg border border-slate-200/80 flex-shrink-0">
          No. <span className="text-ocean-700 text-sm font-black">{currentIndex + 1}</span> <span className="text-slate-400 font-normal">/ {totalQuestions}</span>
        </div>
      </div>

      {/* Question Text */}
      <div className="mb-5 sm:mb-8">
        <h2 className="text-base sm:text-2xl font-bold text-slate-900 leading-snug sm:leading-relaxed">
          &ldquo;{question.teks}&rdquo;
        </h2>
        <p className="text-[11px] sm:text-xs text-slate-500 mt-2 sm:mt-2.5 flex items-start sm:items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5 sm:mt-0" />
          <span>Indikator: <strong className="text-slate-700">{currentInd?.kode}</strong> — {currentInd?.deskripsi}</span>
        </p>
      </div>

      {/* Likert Buttons */}
      <LikertInput
        question={question}
        selectedScore={selectedScore}
        onSelectScore={onSelectScore}
      />
    </div>
  );
}
