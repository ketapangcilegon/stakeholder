'use client';

import React, { useState } from 'react';
import { STAKEHOLDER_GROUPS, DIMENSI_LIST, VARIABEL_LIST, INDIKATOR_LIST } from '@/config/constants';
import { QUESTION_BANK } from '@/data/questionBank';

export default function BankPertanyaanViewer() {
  const [bankGroupFilter, setBankGroupFilter] = useState('pemda');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
        <div>
          <h3 className="font-bold text-sm text-slate-900">
            Pilih Redaksi Bahasa Persona Stakeholder:
          </h3>
          <p className="text-xs text-slate-500">
            Setiap indikator memiliki 5 variasi pertanyaan yang disesuaikan tingkat literasi.
          </p>
        </div>

        <select
          value={bankGroupFilter}
          onChange={(e) => setBankGroupFilter(e.target.value)}
          className="text-xs font-bold bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-ocean-950 focus:outline-none focus:ring-2 focus:ring-ocean-500"
        >
          {STAKEHOLDER_GROUPS.map((g) => (
            <option key={g.id} value={g.id}>
              {g.nama} ({g.tone})
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {DIMENSI_LIST.map((dim) => {
          const dimVars = VARIABEL_LIST.filter(v => v.id_dimensi === dim.id);
          const varIds = dimVars.map(v => v.id);
          const dimIndicators = INDIKATOR_LIST.filter(i => varIds.includes(i.id_variabel));

          return (
            <div key={dim.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div 
                className="px-5 py-3 text-white font-bold text-sm flex items-center justify-between"
                style={{ backgroundColor: dim.warna }}
              >
                <span>{dim.nama.toUpperCase()}</span>
                <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full">{dimIndicators.length} Soal</span>
              </div>

              <div className="p-4 divide-y divide-slate-100">
                {dimIndicators.map((ind) => {
                  const q = QUESTION_BANK.find(item => item.id_indikator === ind.id && item.id_stakeholder_group === bankGroupFilter);
                  if (!q) return null;
                  const qGlobalIndex = INDIKATOR_LIST.findIndex(item => item.id === ind.id);

                  return (
                    <div key={q.id} className="py-3.5 first:pt-0 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold bg-ocean-100 text-ocean-800 px-2 py-0.5 rounded">
                          No. {qGlobalIndex + 1} • {ind.kode}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {ind.deskripsi}
                        </span>
                      </div>

                      <p className="text-sm font-semibold text-slate-900 leading-snug">
                        &ldquo;{q.teks}&rdquo;
                      </p>

                      <div className="grid grid-cols-5 gap-1.5 pt-1 text-[11px] text-slate-500">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <div key={num} className="p-1.5 bg-slate-50 rounded border border-slate-100 text-center">
                            <span className="font-bold text-slate-800">{num}:</span> {q.skala_label[num as 1|2|3|4|5]}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
