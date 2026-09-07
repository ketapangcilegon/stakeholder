'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { VariableScore } from '@/lib/surveyService';

interface Props {
  variableScores: VariableScore[];
}

export default function BarChartCustom({ variableScores }: Props) {
  // Dimension color mapping
  const dimColorMap: Record<string, string> = {
    ekologi: '#10b981', // Emerald
    ekonomi: '#f59e0b', // Amber
    sosial: '#3b82f6', // Blue
    tata_kelola: '#8b5cf6', // Purple
    kelembagaan: '#06b6d4', // Cyan
  };

  const chartData = variableScores.map((v) => ({
    kode: v.id,
    nama: v.nama,
    skor: v.rataRata,
    id_dimensi: v.id_dimensi,
    color: dimColorMap[v.id_dimensi] || '#0ea5e9'
  }));

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 sm:p-6 flex flex-col justify-between">
      
      {/* Header */}
      <div className="mb-4">
        <h3 className="font-bold text-base sm:text-lg text-slate-900">
          Rata-Rata Skor 9 Variabel Penelitian
        </h3>
        <p className="text-xs text-slate-500">
          V1 Kondisi Ekologi s/d V9 Pengaruh Stakeholder (Skala Likert 1.0 - 5.0)
        </p>
      </div>

      {/* Bar Chart Canvas */}
      <div className="w-full h-80 sm:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 15, right: 10, left: -20, bottom: 25 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="kode" 
              tick={{ fill: '#334155', fontSize: 12, fontWeight: 700 }}
              dy={5}
            />
            <YAxis 
              domain={[0, 5]} 
              ticks={[1, 2, 3, 4, 5]} 
              tick={{ fill: '#94a3b8', fontSize: 11 }} 
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                borderRadius: '8px',
                border: 'none',
                color: '#fff',
                fontSize: '12px'
              }}
              formatter={(value: any, name: any, props: any) => [
                `${value} / 5.00`,
                `${props.payload.kode}: ${props.payload.nama}`
              ]}
            />
            <Bar dataKey="skor" radius={[6, 6, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend & Variable List */}
      <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
        {variableScores.map((v) => (
          <div key={v.id} className="flex items-center justify-between p-1.5 rounded bg-slate-50 border border-slate-100">
            <span className="font-semibold text-slate-700 truncate pr-2" title={v.nama}>
              <strong>{v.id}:</strong> {v.nama.replace('Persepsi ', '')}
            </span>
            <span className="font-bold text-slate-900 bg-white px-1.5 py-0.5 rounded border border-slate-200">
              {v.rataRata.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
