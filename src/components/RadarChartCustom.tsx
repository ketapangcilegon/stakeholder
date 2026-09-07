'use client';

import React, { useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';
import { DimensionScore, StakeholderProgress } from '@/lib/surveyService';
import { DIMENSI_LIST, STAKEHOLDER_GROUPS } from '@/data/questionnaireData';

interface Props {
  dimensionScores: DimensionScore[];
  stakeholderProgress: StakeholderProgress[];
}

export default function RadarChartCustom({ dimensionScores, stakeholderProgress }: Props) {
  const [selectedStakeholder, setSelectedStakeholder] = useState<string>('all');

  // Prepare radar data format
  // Format: [{ subject: 'Dimensi Ekologi', overall: 3.8, pemda: 4.1, nelayan: 3.2, ... }]
  const radarData = DIMENSI_LIST.map((dim) => {
    const dimScore = dimensionScores.find((d) => d.id === dim.id);
    const item: Record<string, any> = {
      subject: dim.nama.replace('Dimensi ', ''),
      overall: dimScore ? dimScore.rataRata : 0,
    };

    stakeholderProgress.forEach((sp) => {
      item[sp.group.id] = sp.skorDimensi[dim.id] || 0;
    });

    return item;
  });

  const stakeholderColors: Record<string, string> = {
    pemda: '#2563eb', // Blue
    pelaku_usaha: '#10b981', // Emerald
    masyarakat_pesisir: '#f59e0b', // Amber
    akademisi_lsm: '#8b5cf6', // Purple
    industri: '#06b6d4', // Cyan
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 sm:p-6 flex flex-col justify-between">
      
      {/* Header & Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h3 className="font-bold text-base sm:text-lg text-slate-900">
            Radar Skor 5 Dimensi Keberlanjutan
          </h3>
          <p className="text-xs text-slate-500">
            Skala 1.0 s/d 5.0 (Skor komposit per dimensi pengelolaan)
          </p>
        </div>

        {/* Stakeholder Selector */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-600">Filter:</label>
          <select
            value={selectedStakeholder}
            onChange={(e) => setSelectedStakeholder(e.target.value)}
            className="text-xs font-medium bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-ocean-500"
          >
            <option value="all">Rata-Rata Gabungan (Semua)</option>
            <option value="compare">Bandingkan 5 Stakeholder</option>
            {STAKEHOLDER_GROUPS.map((g) => (
              <option key={g.id} value={g.id}>
                {g.nama.split('(')[0]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="w-full h-80 sm:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: '#334155', fontSize: 11, fontWeight: 600 }} 
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 5]} 
              tick={{ fill: '#94a3b8', fontSize: 10 }} 
              stroke="#cbd5e1"
            />
            
            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                borderRadius: '8px',
                border: 'none',
                color: '#fff',
                fontSize: '12px'
              }}
              formatter={(value: any, name: any) => {
                const groupName = STAKEHOLDER_GROUPS.find(g => g.id === name)?.nama || (name === 'overall' ? 'Rata-Rata Total' : name);
                return [`${value} / 5.00`, groupName];
              }}
            />

            {/* Radar Lines based on selection */}
            {selectedStakeholder === 'all' && (
              <Radar
                name="overall"
                dataKey="overall"
                stroke="#0284c7"
                fill="#0ea5e9"
                fillOpacity={0.45}
                strokeWidth={2.5}
              />
            )}

            {selectedStakeholder === 'compare' && (
              <>
                {STAKEHOLDER_GROUPS.map((g) => (
                  <Radar
                    key={g.id}
                    name={g.id}
                    dataKey={g.id}
                    stroke={stakeholderColors[g.id]}
                    fill={stakeholderColors[g.id]}
                    fillOpacity={0.2}
                    strokeWidth={1.8}
                  />
                ))}
              </>
            )}

            {selectedStakeholder !== 'all' && selectedStakeholder !== 'compare' && (
              <Radar
                name={selectedStakeholder}
                dataKey={selectedStakeholder}
                stroke={stakeholderColors[selectedStakeholder] || '#0284c7'}
                fill={stakeholderColors[selectedStakeholder] || '#0ea5e9'}
                fillOpacity={0.4}
                strokeWidth={2.5}
              />
            )}

            <Legend
              wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
              formatter={(value) => {
                if (value === 'overall') return 'Rata-Rata Total';
                const found = STAKEHOLDER_GROUPS.find(g => g.id === value);
                return found ? found.nama.split('(')[0] : value;
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Chips */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-4 border-t border-slate-100 text-center">
        {dimensionScores.map((ds) => (
          <div key={ds.id} className="p-2 rounded-lg bg-slate-50 border border-slate-100">
            <span className="text-[11px] font-semibold text-slate-500 block truncate" title={ds.nama}>
              {ds.nama.replace('Dimensi ', '')}
            </span>
            <span className="text-base font-black text-slate-900">
              {ds.rataRata.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
