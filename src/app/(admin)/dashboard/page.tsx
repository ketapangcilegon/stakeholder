'use client';

import React, { useState, useEffect } from 'react';
import { DashboardQueries, DashboardData } from '@/features/dashboard/queries';
import { exportFullExcel, exportCsvData } from '@/lib/utils/export';
import RadarChartDimensi from '@/features/dashboard/components/RadarChartDimensi';
import BarChartVariabel from '@/features/dashboard/components/BarChartVariabel';
import TargetProgressBar from '@/features/dashboard/components/TargetProgressBar';
import MatriksTabulasi from '@/features/dashboard/components/MatriksTabulasi';
import { STAKEHOLDER_GROUPS } from '@/config/constants';
import { 
  FileSpreadsheet, 
  FileText, 
  RefreshCw, 
  TrendingUp, 
  Award, 
  AlertTriangle, 
  Users,
  Filter 
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedGroupFilter, setSelectedGroupFilter] = useState('all');

  const loadData = async () => {
    setLoading(true);
    const res = await DashboardQueries.getDashboardAnalytics();
    setData(res);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading || !data) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <RefreshCw className="w-10 h-10 text-ocean-600 animate-spin" />
        <p className="text-sm font-semibold text-slate-600">Memuat data analitik...</p>
      </div>
    );
  }

  const filteredVariableScores = data.variableScores.map(v => {
    if (selectedGroupFilter === 'all') return v;

    const groupRespIds = data.respondents
      .filter(r => r.id_stakeholder_group === selectedGroupFilter)
      .map(r => r.id);

    // Filter indicator answers
    const gAns = data.answers.filter(a => groupRespIds.includes(a.id_responden));
    const sum = gAns.reduce((acc, curr) => acc + (curr.skor || 0), 0);
    const avg = gAns.length > 0 ? parseFloat((sum / gAns.length).toFixed(2)) : 0;

    return { ...v, rataRata: avg };
  });

  const sortedDim = [...data.dimensionScores].sort((a, b) => b.rataRata - a.rataRata);
  const highestDimension = sortedDim[0];
  const lowestDimension = sortedDim[sortedDim.length - 1];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-ocean-100 text-ocean-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-ocean-200 uppercase tracking-wider">
              Dashboard Analitik
            </span>
            <span className="text-xs text-slate-400 font-medium">Update Real-Time</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Analitik Keberlanjutan Perikanan Pesisir Cilegon
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Visualisasi skor persepsi 5 dimensi & 9 variabel pemangku kepentingan perikanan tangkap Kota Cilegon.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={loadData}
            className="p-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5 transition-all"
            title="Refresh Data"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Segarkan</span>
          </button>

          <button
            onClick={() => exportCsvData(data.respondents, data.answers)}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
          >
            <FileText className="w-4 h-4 text-slate-500" />
            <span>Ekspor CSV (SPSS)</span>
          </button>

          <button
            onClick={() => exportFullExcel(data.respondents, data.answers)}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
          >
            <FileSpreadsheet className="w-4 h-4 text-white" />
            <span>Unduh Rekap Excel (.xlsx)</span>
          </button>
        </div>
      </div>

      {/* 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500 block">Total Responden Masuk</span>
            <div className="text-2xl font-black text-slate-900 mt-1">
              {data.totalCompleted} <span className="text-xs font-normal text-slate-400">/ {data.totalTarget} Target</span>
            </div>
            <span className="text-[11px] font-bold text-ocean-600 mt-0.5 block">
              {Math.round((data.totalCompleted / data.totalTarget) * 100)}% Sampel Terpenuhi
            </span>
          </div>
          <div className="w-12 h-12 bg-ocean-50 text-ocean-600 rounded-xl flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500 block">Skor Indeks Rata-Rata</span>
            <div className="text-2xl font-black text-ocean-900 mt-1">
              {data.overallAverage.toFixed(2)} <span className="text-xs font-normal text-slate-400">/ 5.00</span>
            </div>
            <span className="text-[11px] font-bold text-emerald-600 mt-0.5 block">
              Skala Likert 1–5
            </span>
          </div>
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500 block">Dimensi Tertinggi</span>
            <div className="text-lg font-black text-slate-900 mt-1 truncate max-w-[150px]" title={highestDimension?.nama}>
              {highestDimension ? highestDimension.nama.replace('Dimensi ', '') : '-'}
            </div>
            <span className="text-[11px] font-bold text-emerald-600 mt-0.5 block">
              Skor: {highestDimension?.rataRata.toFixed(2) || '0.00'} / 5.00
            </span>
          </div>
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500 block">Area Prioritas Penguatan</span>
            <div className="text-lg font-black text-slate-900 mt-1 truncate max-w-[150px]" title={lowestDimension?.nama}>
              {lowestDimension ? lowestDimension.nama.replace('Dimensi ', '') : '-'}
            </div>
            <span className="text-[11px] font-bold text-rose-600 mt-0.5 block">
              Skor: {lowestDimension?.rataRata.toFixed(2) || '0.00'} / 5.00
            </span>
          </div>
          <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Target Progress Tracker */}
      <TargetProgressBar
        progressList={data.stakeholderProgress}
        totalTarget={data.totalTarget}
        totalCompleted={data.totalCompleted}
      />

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RadarChartDimensi
          dimensionScores={data.dimensionScores}
          stakeholderProgress={data.stakeholderProgress}
        />

        <div className="space-y-4">
          <div className="flex items-center justify-between bg-white px-4 py-2 rounded-xl border border-slate-200">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-ocean-600" /> Filter Variabel:
            </span>
            <select
              value={selectedGroupFilter}
              onChange={(e) => setSelectedGroupFilter(e.target.value)}
              className="text-xs font-semibold bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1 focus:outline-none focus:ring-2 focus:ring-ocean-500"
            >
              <option value="all">Semua Responden (Gabungan)</option>
              {STAKEHOLDER_GROUPS.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.nama}
                </option>
              ))}
            </select>
          </div>

          <BarChartVariabel variableScores={filteredVariableScores} />
        </div>
      </div>

      {/* Tabulasi Matriks */}
      <MatriksTabulasi
        dimensionScores={data.dimensionScores}
        variableScores={data.variableScores}
        respondents={data.respondents}
        answers={data.answers}
      />
    </div>
  );
}
