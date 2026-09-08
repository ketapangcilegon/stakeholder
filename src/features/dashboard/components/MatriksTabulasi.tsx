'use client';

import React from 'react';
import { Layers, FileSpreadsheet } from 'lucide-react';
import { DIMENSI_LIST, VARIABEL_LIST, STAKEHOLDER_GROUPS } from '@/config/constants';
import { DimensionScore, VariableScore } from '@/lib/utils/scoring';
import { SurveyService } from '@/lib/surveyService';
import { exportMatriksTabulasiExcel } from '@/lib/utils/export';

interface Props {
  dimensionScores: DimensionScore[];
  variableScores: VariableScore[];
  respondents: any[];
  answers: any[];
}

export default function MatriksTabulasi({
  dimensionScores,
  variableScores,
  respondents,
  answers
}: Props) {
  const handleDownloadMatriks = () => {
    exportMatriksTabulasiExcel(dimensionScores, variableScores, respondents, answers);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
        <div>
          <h3 className="font-bold text-base sm:text-lg text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-ocean-600" />
            Matriks Tabulasi Otomatis Skor per Dimensi & Variabel
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Nilai rata-rata persepsi terdistribusi per kelompok stakeholder (Skala Likert 1.00 – 5.00).
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
              <th className="py-3 px-3">Kode</th>
              <th className="py-3 px-3">Dimensi / Variabel</th>
              <th className="py-3 px-2 text-center">Pemda</th>
              <th className="py-3 px-2 text-center">Pelaku Usaha</th>
              <th className="py-3 px-2 text-center">Masy. Pesisir</th>
              <th className="py-3 px-2 text-center">Akademisi/LSM</th>
              <th className="py-3 px-2 text-center">Industri</th>
              <th className="py-3 px-3 text-center bg-ocean-50 text-ocean-950 font-black">Rata-Rata</th>
              <th className="py-3 px-3">Status / Kategori</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {DIMENSI_LIST.map((dim) => {
              const dimVars = VARIABEL_LIST.filter(v => v.id_dimensi === dim.id);
              const ds = dimensionScores.find(d => d.id === dim.id);

              return (
                <React.Fragment key={dim.id}>
                  <tr className="bg-slate-50/80 font-bold text-slate-900">
                    <td className="py-2.5 px-3 uppercase text-[11px]" style={{ color: dim.warna }}>
                      {dim.id}
                    </td>
                    <td className="py-2.5 px-3 font-extrabold" colSpan={6}>
                      {dim.nama} ({dimVars.length} Variabel)
                    </td>
                    <td className="py-2.5 px-3 text-center font-black bg-ocean-100/70 text-ocean-900">
                      {ds?.rataRata.toFixed(2) || '0.00'}
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-700">
                      {ds?.kategori.split('/')[0]}
                    </td>
                  </tr>

                  {dimVars.map((v) => {
                    const vScore = variableScores.find(item => item.id === v.id);

                    const groupAverages = STAKEHOLDER_GROUPS.map(g => {
                      const groupRespIds = respondents
                        .filter(r => r.id_stakeholder_group === g.id)
                        .map(r => r.id);
                      const indIds = SurveyService.getIndicators()
                        .filter(i => i.id_variabel === v.id)
                        .map(i => i.id);
                      const gAns = answers.filter(a => groupRespIds.includes(a.id_responden) && indIds.includes(a.id_indikator));
                      const sum = gAns.reduce((acc, curr) => acc + (curr.skor || 0), 0);
                      return gAns.length > 0 ? (sum / gAns.length).toFixed(2) : '-';
                    });

                    return (
                      <tr key={v.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-2.5 px-3 font-bold text-slate-600">{v.id}</td>
                        <td className="py-2.5 px-3 font-medium text-slate-800">{v.nama}</td>
                        <td className="py-2.5 px-2 text-center font-semibold">{groupAverages[0]}</td>
                        <td className="py-2.5 px-2 text-center font-semibold">{groupAverages[1]}</td>
                        <td className="py-2.5 px-2 text-center font-semibold">{groupAverages[2]}</td>
                        <td className="py-2.5 px-2 text-center font-semibold">{groupAverages[3]}</td>
                        <td className="py-2.5 px-2 text-center font-semibold">{groupAverages[4]}</td>
                        <td className="py-2.5 px-3 text-center font-bold bg-ocean-50/50 text-ocean-800">
                          {vScore?.rataRata.toFixed(2) || '0.00'}
                        </td>
                        <td className="py-2.5 px-3 text-[11px] text-slate-500">
                          {vScore?.kategori}
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Bottom Action Footer (Capture 1: Tombol Download XLSX di pojok kanan bawah panel) */}
      <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[11px] text-slate-500 font-medium text-center sm:text-left">
          * Matriks tabulasi dihitung otomatis dari respon survei riil (Real Data).
        </span>
        <button
          onClick={handleDownloadMatriks}
          className="w-full sm:w-auto px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
          title="Unduh seluruh data matriks tabulasi ke file Excel (.xlsx)"
        >
          <FileSpreadsheet className="w-4 h-4 text-white" />
          <span>Unduh Matriks Tabulasi (.xlsx)</span>
        </button>
      </div>
    </div>
  );
}
