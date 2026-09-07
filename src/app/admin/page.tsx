'use client';

import React, { useState, useEffect } from 'react';
import { 
  SurveyService, 
  RespondenRecord, 
  JawabanRecord 
} from '@/lib/surveyService';
import { ExportService } from '@/lib/exportService';
import { 
  STAKEHOLDER_GROUPS, 
  DIMENSI_LIST, 
  VARIABEL_LIST, 
  INDIKATOR_LIST 
} from '@/data/questionnaireData';
import { QUESTION_BANK } from '@/data/questionBank';
import AdminPinModal from '@/components/AdminPinModal';
import { 
  ShieldCheck, 
  Trash2, 
  Eye, 
  Download, 
  Search, 
  Filter, 
  Users, 
  BookOpen, 
  CheckCircle2, 
  RefreshCw,
  X,
  FileSpreadsheet,
  AlertTriangle,
  Lock
} from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPinModal, setShowPinModal] = useState(true);
  const [loading, setLoading] = useState(true);
  const [respondents, setRespondents] = useState<RespondenRecord[]>([]);
  const [answers, setAnswers] = useState<JawabanRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroupFilter, setSelectedGroupFilter] = useState('all');
  const [selectedRespondentDetail, setSelectedRespondentDetail] = useState<RespondenRecord | null>(null);
  const [activeTab, setActiveTab] = useState<'responden' | 'bank_soal'>('responden');
  const [bankGroupFilter, setBankGroupFilter] = useState('pemda');

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
    if (!confirm(`Apakah Anda yakin ingin menghapus data responden: ${name}? Tindakan ini tidak dapat dibatalkan.`)) {
      return;
    }
    await SurveyService.deleteRespondent(id);
    await loadData();
  };

  // Filtered respondents
  const filteredRespondents = respondents.filter(r => {
    const matchSearch = r.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        r.instansi.toLowerCase().includes(searchQuery.toLowerCase());
    const matchGroup = selectedGroupFilter === 'all' || r.id_stakeholder_group === selectedGroupFilter;
    return matchSearch && matchGroup;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <div className="w-16 h-16 bg-ocean-100 text-ocean-700 rounded-2xl flex items-center justify-center mx-auto shadow-glow">
          <Lock className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-black text-slate-900">Panel Khusus Peneliti Tesis</h2>
        <p className="text-xs text-slate-500 max-w-sm">
          Akses halaman ini dilindungi PIN keamanan untuk menjaga integritas data kuesioner penelitian.
        </p>
        <button
          onClick={() => setShowPinModal(true)}
          className="px-6 py-3 bg-ocean-600 hover:bg-ocean-700 text-white rounded-xl text-xs font-bold shadow-md transition-all"
        >
          Buka Kunci Panel Peneliti
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
      
      {/* ------------------------------------------------------------- */}
      {/* ADMIN HEADER */}
      {/* ------------------------------------------------------------- */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200 uppercase tracking-wider flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Akses Terverifikasi
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Magister Manajemen Perikanan
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Panel Kontrol & Manajemen Data Peneliti
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Kelola data mentah respon kuesioner, pantau kuota sampel per kelompok, dan tinjau bank pertanyaan 9 variabel.
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
            onClick={() => ExportService.exportFullExcel(respondents, answers)}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
          >
            <FileSpreadsheet className="w-4 h-4 text-white" />
            <span>Unduh Rekap Excel</span>
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* TABS: RESPONDEN VS BANK SOAL */}
      {/* ------------------------------------------------------------- */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('responden')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'responden'
              ? 'bg-ocean-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Data Mentah Responden ({respondents.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('bank_soal')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'bank_soal'
              ? 'bg-ocean-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Bank Soal Terstruktur (210 Pertanyaan)</span>
        </button>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* TAB 1: DATA MENTAH RESPONDEN */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'responden' && (
        <div className="space-y-4">
          
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

          {/* Respondent Table */}
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
                  {filteredRespondents.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center py-8 text-slate-400 font-medium">
                        Belum ada responden yang cocok dengan filter pencarian.
                      </td>
                    </tr>
                  ) : (
                    filteredRespondents.map((r, idx) => {
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
                                onClick={() => setSelectedRespondentDetail(r)}
                                className="p-1.5 text-ocean-600 hover:bg-ocean-50 rounded-lg transition-colors"
                                title="Lihat Rincian Jawaban"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(r.id, r.nama)}
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
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TAB 2: BANK SOAL TERSTRUKTUR EXPLORER */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'bank_soal' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200">
            <div>
              <h3 className="font-bold text-sm text-slate-900">
                Pilih Redaksi Bahasa Persona Stakeholder:
              </h3>
              <p className="text-xs text-slate-500">
                Setiap indikator memiliki 5 variasi pertanyaan yang disesuaikan tingkat literasi.
              </p>
            </div>

            <select
              value={bankGroupFilter}
              onChange={(e) => setBankGroupFilter(e.target.value)}
              className="text-xs font-bold bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-ocean-950 focus:outline-none focus:ring-2 focus:ring-ocean-500"
            >
              {STAKEHOLDER_GROUPS.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.nama} ({g.tone})
                </option>
              ))}
            </select>
          </div>

          {/* List of 42 Questions for selected persona */}
          <div className="space-y-4">
            {DIMENSI_LIST.map((dim) => {
              const dimVars = VARIABEL_LIST.filter(v => v.id_dimensi === dim.id);
              const varIds = dimVars.map(v => v.id);
              const dimIndicators = INDIKATOR_LIST.filter(i => varIds.includes(i.id_variabel));

              return (
                <div key={dim.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <div 
                    className="px-5 py-3 text-white font-bold text-sm flex items-center justify-between"
                    style={{ backgroundColor: dim.warna }}
                  >
                    <span>{dim.nama.toUpperCase()}</span>
                    <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full">{dimIndicators.length} Soal</span>
                  </div>

                  <div className="p-4 divide-y divide-slate-100">
                    {dimIndicators.map((ind) => {
                      const q = QUESTION_BANK.find(item => item.id_indikator === ind.id && item.id_stakeholder_group === bankGroupFilter);
                      if (!q) return null;
                      const qGlobalIndex = INDIKATOR_LIST.findIndex(item => item.id === ind.id);

                      return (
                        <div key={q.id} className="py-3.5 first:pt-0 space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-ocean-100 text-ocean-800 px-2 py-0.5 rounded">
                              No. {qGlobalIndex + 1} • {ind.kode}
                            </span>
                            <span className="text-xs text-slate-500 font-medium">
                              {ind.deskripsi}
                            </span>
                          </div>

                          <p className="text-sm font-semibold text-slate-900 leading-snug">
                            &ldquo;{q.teks}&rdquo;
                          </p>

                          <div className="grid grid-cols-5 gap-1.5 pt-1 text-[11px] text-slate-500">
                            {[1, 2, 3, 4, 5].map((num) => (
                              <div key={num} className="p-1.5 bg-slate-50 rounded border border-slate-100 text-center">
                                <span className="font-bold text-slate-800">{num}:</span> {q.skala_label[num as 1|2|3|4|5]}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* DETAIL MODAL RESPONDENT */}
      {/* ------------------------------------------------------------- */}
      {selectedRespondentDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col border border-slate-200">
            
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-ocean-600 uppercase">Rincian Hasil Kuesioner</span>
                <h3 className="text-lg font-black text-slate-900">{selectedRespondentDetail.nama}</h3>
                <p className="text-xs text-slate-500">{selectedRespondentDetail.instansi} • {selectedRespondentDetail.jabatan || '-'}</p>
              </div>
              <button
                onClick={() => setSelectedRespondentDetail(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content list */}
            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              {INDIKATOR_LIST.map((ind, idx) => {
                const ans = answers.find(a => a.id_responden === selectedRespondentDetail.id && a.id_indikator === ind.id);
                const q = QUESTION_BANK.find(item => item.id_indikator === ind.id && item.id_stakeholder_group === selectedRespondentDetail.id_stakeholder_group);

                return (
                  <div key={ind.id} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-3">
                    <div className="text-xs">
                      <span className="font-bold text-ocean-700 mr-1.5">#{idx + 1} {ind.kode}:</span>
                      <span className="text-slate-800">{q?.teks || ind.deskripsi}</span>
                    </div>
                    <div className="flex-shrink-0">
                      {ans ? (
                        <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-black text-sm flex items-center justify-center">
                          {ans.skor}
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400 font-bold">-</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-100 text-right">
              <button
                onClick={() => setSelectedRespondentDetail(null)}
                className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
