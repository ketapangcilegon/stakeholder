'use client';

import React from 'react';
import { Eye, Trash2, RotateCcw, CheckCircle2, AlertCircle, Phone, Calendar } from 'lucide-react';
import { STAKEHOLDER_GROUPS } from '@/config/constants';

interface Props {
  respondents: any[];
  onViewDetail: (respondent: any) => void;
  onDelete: (id: string, name: string) => void;
  onDeleteAnswers: (id: string, name: string) => void;
}

export default function TabelResponden({
  respondents,
  onViewDetail,
  onDelete,
  onDeleteAnswers
}: Props) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="bg-slate-100/90 text-slate-700 font-bold border-b border-slate-200">
              <th className="py-3.5 px-4">No</th>
              <th className="py-3.5 px-4">Nama Responden & Kontak</th>
              <th className="py-3.5 px-4">Instansi / Pangkalan</th>
              <th className="py-3.5 px-4">Kelompok Stakeholder</th>
              <th className="py-3.5 px-3 text-center">Progres Jawaban</th>
              <th className="py-3.5 px-3 text-center">Metode Input</th>
              <th className="py-3.5 px-4 text-center">Aksi Pengelola Admin</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {respondents.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-12 text-slate-400 font-medium">
                  <div className="max-w-xs mx-auto space-y-1">
                    <p className="font-bold text-slate-600">Tidak ada data responden ditemukan</p>
                    <p className="text-[11px]">Belum ada responden yang masuk atau sesuai dengan kriteria filter.</p>
                  </div>
                </td>
              </tr>
            ) : (
              respondents.map((r, idx) => {
                const group = STAKEHOLDER_GROUPS.find(g => g.id === r.id_stakeholder_group);
                const isComplete = r.status_pengisian === 'selesai' || (r.total_dijawab && r.total_dijawab >= 42);
                const answeredCount = r.total_dijawab !== undefined ? r.total_dijawab : (isComplete ? 42 : 0);
                const createdDate = r.created_at ? new Date(r.created_at).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                }) : '-';

                return (
                  <tr key={r.id} className="hover:bg-slate-50/90 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-400">{idx + 1}</td>
                    
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-900">{r.nama}</div>
                      {r.jabatan && (
                        <div className="font-normal text-[11px] text-slate-500">{r.jabatan}</div>
                      )}
                      {r.no_hp && (
                        <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                          <Phone className="w-2.5 h-2.5" />
                          <span>{r.no_hp}</span>
                        </div>
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-slate-700 font-medium">
                      <div>{r.instansi}</div>
                      <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                        <Calendar className="w-2.5 h-2.5" />
                        <span>{createdDate}</span>
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${group?.badgeColor || 'bg-slate-100 text-slate-700'}`}>
                        {group ? group.nama.split('(')[0] : r.id_stakeholder_group}
                      </span>
                    </td>

                    <td className="py-3.5 px-3 text-center">
                      {isComplete ? (
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 inline-flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Lengkap ({answeredCount}/42)
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 inline-flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 text-amber-600" /> Draft ({answeredCount}/42)
                        </span>
                      )}
                    </td>

                    <td className="py-3.5 px-3 text-center">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        r.is_manual_entry 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
                          : 'bg-ocean-50 text-ocean-700 border border-ocean-100'
                      }`}>
                        {r.is_manual_entry ? 'Entri Manual' : 'Web Mandiri'}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          onClick={() => onViewDetail(r)}
                          className="px-2.5 py-1.5 bg-ocean-50 hover:bg-ocean-100 text-ocean-700 font-bold rounded-xl text-[11px] transition-all flex items-center gap-1 border border-ocean-200 shadow-sm"
                          title="Lihat dan kelola jawaban indikator responden ini"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Rincian</span>
                        </button>

                        <button
                          onClick={() => onDeleteAnswers(r.id, r.nama)}
                          className="p-1.5 text-amber-600 hover:bg-amber-50 rounded-xl transition-colors border border-amber-200"
                          title="Hapus / Reset semua jawaban kuesioner responden ini"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => onDelete(r.id, r.nama)}
                          className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-xl transition-colors border border-rose-200"
                          title="Hapus responden dan seluruh datanya secara permanen"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
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
