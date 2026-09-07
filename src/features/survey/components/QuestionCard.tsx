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
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 transition-all animate-fadeIn">
      {/* Header Info */}
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

      {/* Question Text */}
      <div className="mb-8">
        <h2 className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug sm:leading-relaxed">
          &ldquo;{question.teks}&rdquo;
        </h2>
        <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-slate-400" />
          Indikator: <strong>{currentInd?.kode}</strong> — {currentInd?.deskripsi}
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
