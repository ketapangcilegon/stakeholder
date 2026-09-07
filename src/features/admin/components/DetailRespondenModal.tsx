'use client';

import React from 'react';
import { X } from 'lucide-react';
import { INDIKATOR_LIST } from '@/config/constants';
import { QUESTION_BANK } from '@/data/questionBank';

interface Props {
  respondent: any;
  answers: any[];
  onClose: () => void;
}

export default function DetailRespondenModal({ respondent, answers, onClose }: Props) {
  if (!respondent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col border border-slate-200">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-ocean-600 uppercase">Rincian Hasil Kuesioner</span>
            <h3 className="text-lg font-black text-slate-900">{respondent.nama}</h3>
            <p className="text-xs text-slate-500">{respondent.instansi} • {respondent.jabatan || '-'}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {INDIKATOR_LIST.map((ind, idx) => {
            const ans = answers.find(a => a.id_responden === respondent.id && a.id_indikator === ind.id);
            const q = QUESTION_BANK.find(item => item.id_indikator === ind.id && item.id_stakeholder_group === respondent.id_stakeholder_group);

            return (
              <div key={ind.id} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-3">
                <div className="text-xs">
                  <span className="font-bold text-ocean-700 mr-1.5">#{idx + 1} {ind.kode}:</span>
                  <span className="text-slate-800">{q?.teks || ind.deskripsi}</span>
                </div>
                <div className="flex-shrink-0">
                  {ans ? (
                    <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-black text-sm flex items-center justify-center">
                      {ans.skor}
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400 font-bold">-</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
