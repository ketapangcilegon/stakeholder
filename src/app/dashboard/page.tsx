'use client';

import React, { useState, useEffect } from 'react';
import { 
  SurveyService, 
  DimensionScore, 
  VariableScore, 
  StakeholderProgress,
  RespondenRecord,
  JawabanRecord
} from '@/lib/surveyService';
import { ExportService } from '@/lib/exportService';
import { STAKEHOLDER_GROUPS, DIMENSI_LIST, VARIABEL_LIST } from '@/data/questionnaireData';
import RadarChartCustom from '@/components/RadarChartCustom';
import BarChartCustom from '@/components/BarChartCustom';
import TargetProgressBar from '@/components/TargetProgressBar';
import { 
  Download, 
  FileSpreadsheet, 
  FileText, 
  RefreshCw, 
  TrendingUp, 
  Award, 
  AlertTriangle, 
  Layers, 
  Users,
  Filter,
  BarChart3
} from 'lucide-react';

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [respondents, setRespondents] = useState<RespondenRecord[]>([]);
  const [answers, setAnswers] = useState<JawabanRecord[]>([]);
  const [dimensionScores, setDimensionScores] = useState<DimensionScore[]>([]);
  const [variableScores, setVariableScores] = useState<VariableScore[]>([]);
  const [stakeholderProgress, setStakeholderProgress] = useState<StakeholderProgress[]>([]);
  const [overallAverage, setOverallAverage] = useState<number>(0);
  const [totalTarget, setTotalTarget] = useState<number>(50);
  const [totalCompleted, setTotalCompleted] = useState<number>(0);
  const [selectedGroupFilter, setSelectedGroupFilter] = useState<string>('all');

  const loadData = async () => {
    setLoading(true);
    const data = await SurveyService.getAllSurveyAnalytics();
    setRespondents(data.respondents);
    setAnswers(data.answers);
    setDimensionScores(data.dimensionScores);
    setVariableScores(data.variableScores);
    setStakeholderProgress(data.stakeholderProgress);
    setOverallAverage(data.overallAverage);
    setTotalTarget(data.totalTarget);
    setTotalCompleted(data.totalCompleted);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Filtered variable scores if a stakeholder group is picked
  const filteredVariableScores = variableScores.map(v => {
    if (selectedGroupFilter === 'all') return v;

    const groupRespIds = respondents
      .filter(r => r.id_stakeholder_group === selectedGroupFilter)
      .map(r => r.id);

    const indIds = SurveyService.getIndicators()
      .filter(i => i.id_variabel === v.id)
      .map(i => i.id);

    const gAns = answers.filter(a => groupRespIds.includes(a.id_responden) && indIds.includes(a.id_indikator));
    const sum = gAns.reduce((acc, curr) => acc + (curr.skor || 0), 0);
    const avg = gAns.length > 0 ? parseFloat((sum / gAns.length).toFixed(2)) : 0;

    return {
      ...v,
      rataRata: avg,
      kategori: SurveyService.getCategoryLabel(avg)
    };
  });

  // Calculate highest and lowest dimensions
  const sortedDimensions = [...dimensionScores].sort((a, b) => b.rataRata - a.rataRata);
  const highestDimension = sortedDimensions[0];
  const lowestDimension = sortedDimensions[sortedDimensions.length - 1];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* ------------------------------------------------------------- */}
      {/* DASHBOARD HEADER & EXPORT ACTIONS */}
      {/* ------------------------------------------------------------- */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-ocean-100 text-ocean-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-ocean-200 uppercase tracking-wider">
              Hasil Tabulasi Otomatis
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Update Real-Time
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Dashboard Analitik Keberlanjutan Perikanan Pesisir Cilegon
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Visualisasi skor persepsi 5 dimensi & 9 variabel pemangku kepentingan perikanan tangkap Kota Cilegon.
          </p>
        </div>

        {/* Action Buttons */}
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
            onClick={() => ExportService.exportCsvData(respondents, answers)}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
          >
            <FileText className="w-4 h-4 text-slate-500" />
            <span>Ekspor CSV (SPSS)</span>
          </button>

          <button
            onClick={() => ExportService.exportFullExcel(respondents, answers)}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
          >
            <FileSpreadsheet className="w-4 h-4 text-white" />
            <span>Unduh Rekap Excel (.xlsx)</span>
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 4 STATS METRIC CARDS */}
      {/* ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Total Responden */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500 block">Total Responden Masuk</span>
            <div className="text-2xl font-black text-slate-900 mt-1">
              {totalCompleted} <span className="text-xs font-normal text-slate-400">/ {totalTarget} Target</span>
            </div>
            <span className="text-[11px] font-bold text-ocean-600 mt-0.5 block">
              {Math.round((totalCompleted / totalTarget) * 100)}% Sampel Terpenuhi
            </span>
          </div>
          <div className="w-12 h-12 bg-ocean-50 text-ocean-600 rounded-xl flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
        </div>

        {/* Card 2: Skor Rata-Rata Keseluruhan */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500 block">Skor Indeks Rata-Rata</span>
            <div className="text-2xl font-black text-ocean-900 mt-1">
              {overallAverage.toFixed(2)} <span className="text-xs font-normal text-slate-400">/ 5.00</span>
            </div>
            <span className="text-[11px] font-bold text-emerald-600 mt-0.5 block">
              {SurveyService.getCategoryLabel(overallAverage).split('/')[0]}
            </span>
          </div>
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>

        {/* Card 3: Dimensi Tertinggi */}
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

        {/* Card 4: Dimensi Terendah / Area Prioritas */}
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

      {/* ------------------------------------------------------------- */}
      {/* TARGET PROGRESS TRACKER */}
      {/* ------------------------------------------------------------- */}
      <TargetProgressBar
        progressList={stakeholderProgress}
        totalTarget={totalTarget}
        totalCompleted={totalCompleted}
      />

      {/* ------------------------------------------------------------- */}
      {/* CHARTS: RADAR CHART (5 DIMENSI) & BAR CHART (9 VARIABEL) */}
      {/* ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Radar Chart */}
        <RadarChartCustom
          dimensionScores={dimensionScores}
          stakeholderProgress={stakeholderProgress}
        />

        {/* Bar Chart with Stakeholder Filter */}
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

          <BarChartCustom variableScores={filteredVariableScores} />
        </div>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* TABULASI MATRIKS SKOR LENGKAP (METHODOLOGY SECTION) */}
      {/* ------------------------------------------------------------- */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 space-y-4">
        <div>
          <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-ocean-600" />
            Matriks Tabulasi Otomatis Skor per Dimensi & Variabel
          </h3>
          <p className="text-xs text-slate-500">
            Nilai rata-rata persepsi terdistribusi per kelompok stakeholder (Skala Likert 1.00 – 5.00).
          </p>
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
                    {/* Dimension Header Row */}
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

                    {/* Variable Rows */}
                    {dimVars.map((v) => {
                      const vScore = variableScores.find(item => item.id === v.id);

                      // Calculate per stakeholder group average for this variable
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
      </div>

    </div>
  );
}
