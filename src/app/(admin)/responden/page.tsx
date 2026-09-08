'use client';

import React, { useState, useEffect } from 'react';
import { useAdminAuth } from '@/context/AdminAuthContext';
import { SurveyService } from '@/lib/surveyService';
import { exportFullExcel } from '@/lib/utils/export';
import { STAKEHOLDER_GROUPS } from '@/config/constants';
import TabelResponden from '@/features/admin/components/TabelResponden';
import DetailRespondenModal from '@/features/admin/components/DetailRespondenModal';
import { 
  Users, 
  Search, 
  Filter, 
  RefreshCw, 
  FileSpreadsheet, 
  Lock, 
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  AlertCircle,
  FileCheck2,
  Trash2,
  Layers
} from 'lucide-react';

export default function AdminRespondenPage() {
  const { isAdmin, isLoading: authLoading, openLoginModal } = useAdminAuth();
  const [loading, setLoading] = useState(true);
  const [respondents, setRespondents] = useState<any[]>([]);
  const [answers, setAnswers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroupFilter, setSelectedGroupFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedDetail, setSelectedDetail] = useState<any | null>(null);

  const loadData = async () => {
    setLoading(true);
    const data = await SurveyService.getAllSurveyAnalytics();
    setRespondents(data.respondents);
    setAnswers(data.answers);
    setLoading(false);
  };

  useEffect(() => {
    if (isAdmin) {
      loadData();
    }
  }, [isAdmin]);

  // Handle single respondent deletion (respondent + all answers)
  const handleDeleteRespondent = async (id: string, name: string) => {
    if (!confirm(`HAPUS PERMANEN: Apakah Anda yakin ingin menghapus data responden "${name}" beserta seluruh jawaban kuesionernya?`)) {
      return;
    }
    await SurveyService.deleteRespondent(id);
    await loadData();
    if (selectedDetail && selectedDetail.id === id) {
      setSelectedDetail(null);
    }
  };

  // Handle deletion/reset of all answers for a single respondent
  const handleDeleteRespondentAnswers = async (id: string, name: string) => {
    if (!confirm(`KOSONGKAN JAWABAN: Apakah Anda yakin ingin menghapus seluruh jawaban kuesioner dari responden "${name}"? Identitas responden tetap disimpan.`)) {
      return;
    }
    await SurveyService.deleteRespondentAnswers(id);
    await loadData();
    if (selectedDetail && selectedDetail.id === id) {
      const updated = respondents.find(r => r.id === id);
      if (updated) setSelectedDetail(updated);
    }
  };

  // Filter respondents
  const filteredRespondents = respondents.filter(r => {
    const matchSearch = (r.nama || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                        (r.instansi || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                        (r.jabatan || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                        (r.no_hp || '').includes(searchQuery);

    const matchGroup = selectedGroupFilter === 'all' || r.id_stakeholder_group === selectedGroupFilter;

    const isComplete = r.status_pengisian === 'selesai' || (r.total_dijawab && r.total_dijawab >= 42);
    const matchStatus = statusFilter === 'all' 
      ? true 
      : statusFilter === 'selesai' 
        ? isComplete 
        : !isComplete;

    return matchSearch && matchGroup && matchStatus;
  });

  // Calculate statistics
  const totalCompleted = respondents.filter(r => r.status_pengisian === 'selesai' || (r.total_dijawab && r.total_dijawab >= 42)).length;
  const totalDraft = respondents.length - totalCompleted;
  const totalAnswersCount = answers.length;

  if (authLoading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <RefreshCw className="w-10 h-10 text-ocean-600 animate-spin" />
        <p className="text-xs font-semibold text-slate-500">Memeriksa izin akses tata kelola...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="max-w-xl mx-auto my-12 sm:my-20 px-4">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-2xl text-center space-y-6 animate-fadeIn relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-ocean-600 to-rose-500" />

          <div className="w-16 h-16 bg-ocean-100 text-ocean-700 rounded-2xl flex items-center justify-center mx-auto shadow-glow">
            <Lock className="w-8 h-8 text-ocean-700" />
          </div>

          <div>
            <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-3 py-1 rounded-full border border-amber-200 uppercase tracking-wider inline-flex items-center gap-1 mb-2">
              <ShieldAlert className="w-3 h-3 text-amber-700" /> Portal Pengelola Admin
            </span>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Portal Manajemen Responden & Jawaban
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              Panel ini berisi data mentah kuesioner, rincian skor tiap responden, dan fungsi penghapusan data. Akses dibatasi khusus untuk peneliti dan administrator terdaftar.
            </p>
          </div>

          <button
            onClick={openLoginModal}
            className="w-full py-3.5 px-6 rounded-2xl bg-ocean-600 hover:bg-ocean-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Masuk Mode Admin</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200 uppercase tracking-wider flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Terverifikasi Admin
            </span>
            <span className="text-xs text-slate-400 font-medium">Portal Pengelola Data</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Portal Responden & Kontrol Jawaban
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Tinjau seluruh responden yang masuk, kelola rincian jawaban kuesioner, hapus per responden, atau bersihkan jawaban.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={loadData}
            className="p-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
            title="Refresh Data Responden"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Segarkan Data</span>
          </button>

          <button
            onClick={() => exportFullExcel(respondents, answers)}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
          >
            <FileSpreadsheet className="w-4 h-4 text-white" />
            <span>Unduh Rekap Excel (.xlsx)</span>
          </button>
        </div>
      </div>

      {/* 4 Statistical Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500 block">Total Responden Masuk</span>
            <div className="text-2xl font-black text-slate-900 mt-1">
              {respondents.length} <span className="text-xs font-normal text-slate-400">Orang</span>
            </div>
            <span className="text-[11px] font-bold text-ocean-600 mt-0.5 block">
              Tercatat di Sistem
            </span>
          </div>
          <div className="w-12 h-12 bg-ocean-50 text-ocean-600 rounded-2xl flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500 block">Kuesioner Lengkap (100%)</span>
            <div className="text-2xl font-black text-emerald-600 mt-1">
              {totalCompleted} <span className="text-xs font-normal text-slate-400">Responden</span>
            </div>
            <span className="text-[11px] font-bold text-emerald-700 mt-0.5 block">
              42 Indikator Terisi
            </span>
          </div>
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500 block">Kuesioner Draft / Sebagian</span>
            <div className="text-2xl font-black text-amber-600 mt-1">
              {totalDraft} <span className="text-xs font-normal text-slate-400">Responden</span>
            </div>
            <span className="text-[11px] font-bold text-amber-700 mt-0.5 block">
              Belum Lengkap 42 Butir
            </span>
          </div>
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
            <AlertCircle className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-500 block">Total Jawaban Masuk</span>
            <div className="text-2xl font-black text-ocean-900 mt-1">
              {totalAnswersCount} <span className="text-xs font-normal text-slate-400">Skor</span>
            </div>
            <span className="text-[11px] font-bold text-ocean-600 mt-0.5 block">
              Basis Data Analisis
            </span>
          </div>
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center">
            <Layers className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Cari nama, instansi, jabatan, atau nomor telp..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50 focus:bg-white transition-all"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            <select
              value={selectedGroupFilter}
              onChange={(e) => setSelectedGroupFilter(e.target.value)}
              className="text-xs font-semibold bg-transparent focus:outline-none py-1.5"
            >
              <option value="all">Semua Stakeholder</option>
              {STAKEHOLDER_GROUPS.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.nama.split('(')[0]}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="text-xs font-semibold bg-transparent focus:outline-none py-1.5"
            >
              <option value="all">Semua Status</option>
              <option value="selesai">Lengkap (100%)</option>
              <option value="draft">Draft (Sebagian)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tabel Responden dengan Aksi Hapus Responden & Hapus Jawaban */}
      <TabelResponden
        respondents={filteredRespondents}
        onViewDetail={setSelectedDetail}
        onDelete={handleDeleteRespondent}
        onDeleteAnswers={handleDeleteRespondentAnswers}
      />

      {/* Modal Detail Jawaban & Hapus Jawaban per Indikator */}
      <DetailRespondenModal
        respondent={selectedDetail}
        answers={answers}
        onClose={() => setSelectedDetail(null)}
        onDataChanged={loadData}
      />
    </div>
  );
}
