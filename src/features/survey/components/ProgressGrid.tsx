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
  const answeredCount = Object.keys(answers).length;
  const totalQuestions = questions.length;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3.5 sm:p-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
        <div className="flex items-center gap-2">
          <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800">
            Kisi Soal ({totalQuestions} Indikator)
          </h3>
          <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border ${
            answeredCount === totalQuestions
              ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
              : 'bg-ocean-50 text-ocean-800 border-ocean-200'
          }`}>
            {answeredCount}/{totalQuestions} Terisi
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-slate-500 flex-wrap">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-slate-100 border border-slate-300 inline-block" />
            <span>Belum Diisi</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-emerald-600 inline-block shadow-xs" />
            <span>Terisi</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-ocean-600 ring-2 ring-ocean-300 inline-block" />
            <span>Aktif</span>
          </span>
        </div>
      </div>

      {/* Grid: SELALU TERBUKA di versi desktop dan mobile */}
      <div className="pt-2.5 border-t border-slate-100">
        <div className="grid grid-cols-7 sm:grid-cols-11 md:grid-cols-14 gap-1.5 sm:gap-2">
          {questions.map((q, idx) => {
            const isAnswered = answers[q.id] !== undefined;
            const isCurrent = idx === currentIndex && isSingleMode;

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => onSelectIndex(idx)}
                className={`h-8 sm:h-10 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center relative active:scale-95 ${
                  isCurrent
                    ? 'ring-2 ring-ocean-500 bg-ocean-600 text-white shadow-glow scale-105 z-10'
                    : isAnswered
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border border-slate-300 hover:bg-ocean-50 hover:border-ocean-300 hover:text-ocean-800'
                }`}
                title={`Soal No. ${idx + 1} (${q.id_indikator}) - Skor: ${answers[q.id] || 'Belum diisi'}`}
              >
                {idx + 1}
                {isAnswered && !isCurrent && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-300 rounded-full border-2 border-white" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
