'use client';

import React from 'react';
import { Eye, Trash2, CheckCircle2 } from 'lucide-react';
import { STAKEHOLDER_GROUPS } from '@/config/constants';

interface Props {
  respondents: any[];
  onViewDetail: (respondent: any) => void;
  onDelete: (id: string, name: string) => void;
}

export default function TabelResponden({ respondents, onViewDetail, onDelete }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
              <th className="py-3 px-4">No</th>
              <th className="py-3 px-4">Nama Responden</th>
              <th className="py-3 px-4">Instansi / Pangkalan</th>
              <th className="py-3 px-4">Kelompok Stakeholder</th>
              <th className="py-3 px-3 text-center">Status</th>
              <th className="py-3 px-3 text-center">Metode</th>
              <th className="py-3 px-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {respondents.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-8 text-slate-400 font-medium">
                  Belum ada data responden yang terdaftar.
                </td>
              </tr>
            ) : (
              respondents.map((r, idx) => {
                const group = STAKEHOLDER_GROUPS.find(g => g.id === r.id_stakeholder_group);
                const isComplete = r.status_pengisian === 'selesai';

                return (
                  <tr key={r.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-400">{idx + 1}</td>
                    <td className="py-3 px-4 font-bold text-slate-900">
                      {r.nama}
                      {r.jabatan && <span className="block font-normal text-[11px] text-slate-500">{r.jabatan}</span>}
                    </td>
                    <td className="py-3 px-4 text-slate-700 font-medium">{r.instansi}</td>
                    <td className="py-3 px-4">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${group?.badgeColor || 'bg-slate-100'}`}>
                        {group ? group.nama.split('(')[0] : r.id_stakeholder_group}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      {isComplete ? (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 inline-flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Lengkap (100%)
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                          Draft ({r.total_dijawab || 0}/42)
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-3 text-center">
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {r.is_manual_entry ? 'Entri Manual' : 'Web Digital'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          onClick={() => onViewDetail(r)}
                          className="p-1.5 text-ocean-600 hover:bg-ocean-50 rounded-lg transition-colors"
                          title="Lihat Rincian Jawaban"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onDelete(r.id, r.nama)}
                          className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                          title="Hapus Data"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
