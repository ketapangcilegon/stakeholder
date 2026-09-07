'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PertanyaanItem } from '@/config/constants';

interface Props {
  question: PertanyaanItem;
  selectedScore?: number;
  onSelectScore: (score: number) => void;
  compact?: boolean;
}

export default function LikertInput({
  question,
  selectedScore,
  onSelectScore,
  compact = false
}: Props) {
  if (compact) {
    return (
      <div className="grid grid-cols-5 gap-2 pt-1">
        {[1, 2, 3, 4, 5].map((score) => {
          const isSelected = selectedScore === score;
          return (
            <button
              key={score}
              type="button"
              onClick={() => onSelectScore(score)}
              className={`p-2.5 rounded-xl border text-center transition-all ${
                isSelected
                  ? 'bg-ocean-600 text-white font-black border-ocean-600 shadow-sm'
                  : 'bg-slate-50 border-slate-200 hover:bg-ocean-50 hover:border-ocean-300 text-slate-700'
              }`}
            >
              <span className="block text-sm font-bold">{score}</span>
              <span
                className="text-[10px] block truncate text-inherit opacity-85 mt-0.5"
                title={question.skala_label[score as 1|2|3|4|5]}
              >
                {question.skala_label[score as 1|2|3|4|5]}
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-3.5">
      {[1, 2, 3, 4, 5].map((score) => {
        const isSelected = selectedScore === score;
        const labelText = question.skala_label[score as 1|2|3|4|5];

        return (
          <button
            key={score}
            type="button"
            onClick={() => onSelectScore(score)}
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

            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                isSelected
                  ? 'border-ocean-600 bg-ocean-600 text-white'
                  : 'border-slate-300 group-hover:border-ocean-400'
              }`}
            >
              {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
            </div>
          </button>
        );
      })}
    </div>
  );
}
