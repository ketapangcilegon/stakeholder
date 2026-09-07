'use client';

import React from 'react';
import { PertanyaanItem } from '@/config/constants';

interface Props {
  questions: PertanyaanItem[];
  currentIndex: number;
  answers: Record<string, number>;
  onSelectIndex: (index: number) => void;
  isSingleMode: boolean;
}

export default function ProgressGrid({
  questions,
  currentIndex,
  answers,
  onSelectIndex,
  isSingleMode
}: Props) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Navigasi 42 Indikator Soal
        </h3>
        <div className="flex items-center gap-3 text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-slate-100 border border-slate-300" /> Belum
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-emerald-600 text-white" /> Terisi
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded ring-2 ring-ocean-500 bg-ocean-100" /> Aktif
          </span>
        </div>
      </div>

      <div className="grid grid-cols-7 sm:grid-cols-11 md:grid-cols-14 gap-1.5 sm:gap-2">
        {questions.map((q, idx) => {
          const isAnswered = answers[q.id] !== undefined;
          const isCurrent = idx === currentIndex && isSingleMode;

          return (
            <button
              key={q.id}
              onClick={() => onSelectIndex(idx)}
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
  );
}
