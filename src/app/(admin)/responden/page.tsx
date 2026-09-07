'use client';

import React, { useState, useEffect } from 'react';
import { SurveyService } from '@/lib/surveyService';
import { exportFullExcel } from '@/lib/utils/export';
import { STAKEHOLDER_GROUPS } from '@/config/constants';
import TabelResponden from '@/features/admin/components/TabelResponden';
import DetailRespondenModal from '@/features/admin/components/DetailRespondenModal';
import AdminPinModal from '@/features/admin/components/AdminPinModal';
import { 
  Users, 
  Search, 
  Filter, 
  RefreshCw, 
  FileSpreadsheet, 
  Lock, 
  ShieldCheck 
} from 'lucide-react';

export default function AdminRespondenPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPinModal, setShowPinModal] = useState(true);
  const [loading, setLoading] = useState(true);
  const [respondents, setRespondents] = useState<any[]>([]);
  const [answers, setAnswers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroupFilter, setSelectedGroupFilter] = useState('all');
  const [selectedDetail, setSelectedDetail] = useState<any | null>(null);

  const loadData = async () => {
    setLoading(true);
    const data = await SurveyService.getAllSurveyAnalytics();
    setRespondents(data.respondents);
    setAnswers(data.answers);
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Hapus data responden ${name}?`)) return;
    await SurveyService.deleteRespondent(id);
    await loadData();
  };

  const filteredRespondents = respondents.filter(r => {
    const matchSearch = (r.nama || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                        (r.instansi || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchGroup = selectedGroupFilter === 'all' || r.id_stakeholder_group === selectedGroupFilter;
    return matchSearch && matchGroup;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <div className="w-16 h-16 bg-ocean-100 text-ocean-700 rounded-2xl flex items-center justify-center mx-auto shadow-glow">
          <Lock className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-black text-slate-900">Panel Manajemen Responden</h2>
        <p className="text-xs text-slate-500 max-w-sm">
          Akses dibatasi untuk peneliti tesis guna menjaga kerahasiaan data kuesioner.
        </p>
        <button
          onClick={() => setShowPinModal(true)}
          className="px-6 py-3 bg-ocean-600 hover:bg-ocean-700 text-white rounded-xl text-xs font-bold shadow-md transition-all"
        >
          Buka Kunci Akses
        </button>

        <AdminPinModal
          isOpen={showPinModal}
          onClose={() => setShowPinModal(false)}
          onSuccess={() => setIsAuthenticated(true)}
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200 uppercase tracking-wider flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Terverifikasi
            </span>
            <span className="text-xs text-slate-400 font-medium">Panel Peneliti</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Daftar Responden & Data Mentah
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Kelola data respon kuesioner, tinjau jawaban per individu, dan ekspor ke format Excel.
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
            onClick={() => exportFullExcel(respondents, answers)}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
          >
            <FileSpreadsheet className="w-4 h-4 text-white" />
            <span>Unduh Rekap Excel</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Cari nama responden / instansi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-ocean-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-500" />
          <select
            value={selectedGroupFilter}
            onChange={(e) => setSelectedGroupFilter(e.target.value)}
            className="text-xs font-semibold bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean-500"
          >
            <option value="all">Semua Kelompok Stakeholder</option>
            {STAKEHOLDER_GROUPS.map((g) => (
              <option key={g.id} value={g.id}>
                {g.nama.split('(')[0]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <TabelResponden
        respondents={filteredRespondents}
        onViewDetail={setSelectedDetail}
        onDelete={handleDelete}
      />

      <DetailRespondenModal
        respondent={selectedDetail}
        answers={answers}
        onClose={() => setSelectedDetail(null)}
      />
    </div>
  );
}
