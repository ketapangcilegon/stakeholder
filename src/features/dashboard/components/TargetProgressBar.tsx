'use client';

import React from 'react';
import { CheckCircle2, Users, Archive } from 'lucide-react';

interface Props {
  progressList: any[];
  totalTarget: number;
  totalCompleted: number;
  /** Total yang mengisi kuota target (tanpa surplus). Fallback ke totalCompleted jika tidak diberikan. */
  totalTerpenuhi?: number;
  /** Total responden cadangan (melebihi target). Hanya tampil di dashboard admin. */
  totalCadangan?: number;
}

export default function TargetProgressBar({
  progressList,
  totalTarget,
  totalCompleted,
  totalTerpenuhi,
  totalCadangan = 0
}: Props) {
  const terpenuhi = totalTerpenuhi ?? Math.min(totalCompleted, totalTarget);
  const overallPercentage = totalTarget > 0 ? Math.min(100, Math.round((terpenuhi / totalTarget) * 100)) : 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-ocean-600" />
            <h3 className="font-bold text-lg text-slate-900">Rekapitulasi Target Responden Penelitian</h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Target total: <strong>{totalTarget} responden</strong> (Pemda 7, Pelaku Usaha 15, Masyarakat 15, Akademisi 3, Industri 10)
          </p>
          {totalCadangan > 0 && (
            <p className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-violet-800 bg-violet-50 border border-violet-200 rounded-lg px-2.5 py-1">
              <Archive className="w-3.5 h-3.5 text-violet-600" />
              {totalCadangan} responden cadangan (melebihi target) — disimpan untuk pengganti data tidak valid
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-2xl font-black text-ocean-950">
              {terpenuhi} <span className="text-sm font-normal text-slate-500">/ {totalTarget}</span>
            </span>
            <span className="block text-xs font-semibold text-ocean-600">
              {overallPercentage}% Terpenuhi
            </span>
            {totalCadangan > 0 && (
              <span className="block text-[11px] font-bold text-violet-600">
                +{totalCadangan} cadangan
              </span>
            )}
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-ocean-100 flex items-center justify-center bg-ocean-50">
            <span className="text-xs font-black text-ocean-700">{overallPercentage}%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-5">
        {progressList.map((item) => {
          const isMet = item.terisi >= item.target;
          const cadangan: number = item.cadangan ?? Math.max(0, item.terisi - item.target);
          const hasCadangan = cadangan > 0;
          return (
            <div 
              key={item.group.id} 
              className={`p-3.5 rounded-xl border transition-all ${
                hasCadangan
                  ? 'bg-violet-50/40 border-violet-200'
                  : isMet ? 'bg-emerald-50/50 border-emerald-200' : 'bg-slate-50 border-slate-200/80'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="font-bold text-xs text-slate-800 line-clamp-2" title={item.group.nama}>
                  {item.group.nama.split('(')[0]}
                </span>
                {hasCadangan ? (
                  <span
                    className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-violet-100 text-violet-800 whitespace-nowrap"
                    title="Responden melebihi target, disimpan sebagai data cadangan"
                  >
                    +{cadangan} Cadangan
                  </span>
                ) : isMet ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                ) : (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                    Kurang {item.target - item.terisi}
                  </span>
                )}
              </div>

              <div className="flex items-baseline justify-between text-xs mb-1.5">
                <span className="text-slate-500 text-[11px]">Realisasi:</span>
                <span className="font-bold text-slate-900">
                  {item.terisi} <span className="text-slate-400 font-normal">/ {item.target}</span>
                </span>
              </div>

              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-700 ${
                    hasCadangan
                      ? 'bg-gradient-to-r from-emerald-500 to-violet-500'
                      : isMet ? 'bg-emerald-500' : 'bg-ocean-600'
                  }`}
                  style={{ width: `${Math.min(100, (item.terisi / item.target) * 100)}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-[10px] text-slate-400 font-medium">
                  {item.persentase}% target
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
