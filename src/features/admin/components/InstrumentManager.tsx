'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Download, 
  Plus, 
  Edit3, 
  Trash2, 
  RotateCcw, 
  Layers, 
  BookOpen, 
  Check, 
  X, 
  HelpCircle,
  Save,
  CheckCircle2,
  FolderTree,
  Sliders,
  Sparkles,
  Loader2
} from 'lucide-react';
import { InstrumentService, CustomInstrumentData } from '@/lib/instrumentService';
import { STAKEHOLDER_GROUPS, PertanyaanItem, Variabel, Indikator, Dimensi } from '@/config/constants';

export default function InstrumentManager() {
  const [instrumentData, setInstrumentData] = useState<CustomInstrumentData | null>(null);
  const [activeTab, setActiveTab] = useState<'questions' | 'variables' | 'indicators'>('questions');
  const [selectedStakeholder, setSelectedStakeholder] = useState('pemda');
  const [isExportingDocx, setIsExportingDocx] = useState(false);

  // Modal States
  const [editingQuestion, setEditingQuestion] = useState<PertanyaanItem | null>(null);
  const [isNewQuestion, setIsNewQuestion] = useState(false);

  const [editingVariable, setEditingVariable] = useState<Variabel | null>(null);
  const [isNewVariable, setIsNewVariable] = useState(false);

  const [editingIndicator, setEditingIndicator] = useState<Indikator | null>(null);
  const [isNewIndicator, setIsNewIndicator] = useState(false);

  const [notification, setNotification] = useState<string | null>(null);

  const loadData = () => {
    const data = InstrumentService.getInstrumentData();
    setInstrumentData(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  // DOCX Download Handler
  const handleDownloadDocx = async () => {
    setIsExportingDocx(true);
    try {
      await InstrumentService.downloadDocx('Instrumen_Penelitian_Tesis_Cilegon_Audit_Dosen.docx');
      showToast('File Dokumen Instrumen (.docx) berhasil diunduh!');
    } catch (err: any) {
      alert('Gagal mengekspor DOCX: ' + err?.message);
    } finally {
      setIsExportingDocx(false);
    }
  };

  // Reset to default standard
  const handleResetDefaults = () => {
    if (!confirm('PERINGATAN: Apakah Anda yakin ingin mereset seluruh bank soal, variabel, dan indikator kembali ke format standar baku tesis (42 Indikator / 210 Soal)?')) {
      return;
    }
    InstrumentService.resetToDefaults();
    loadData();
    showToast('Instrumen berhasil direset ke standar baku tesis!');
  };

  if (!instrumentData) {
    return (
      <div className="p-8 text-center text-slate-500 font-semibold">
        Memuat data instrumen penelitian...
      </div>
    );
  }

  // ---------------- QUESTION ACTIONS ----------------
  const handleOpenAddQuestion = () => {
    const newQ: PertanyaanItem = {
      id: `q_custom_${Date.now()}`,
      id_indikator: instrumentData.indicators[0]?.id || 'ind_custom_1',
      id_stakeholder_group: selectedStakeholder,
      teks: '',
      skala_label: {
        1: 'Sangat Buruk / Tidak Setuju',
        2: 'Buruk / Kurang Setuju',
        3: 'Sedang / Cukup Berkelanjutan',
        4: 'Baik / Setuju',
        5: 'Sangat Baik / Sangat Setuju'
      }
    };
    setEditingQuestion(newQ);
    setIsNewQuestion(true);
  };

  const handleSaveQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingQuestion) return;
    if (!editingQuestion.teks.trim()) {
      alert('Redaksi teks pertanyaan tidak boleh kosong!');
      return;
    }
    InstrumentService.saveQuestion(editingQuestion);
    setEditingQuestion(null);
    loadData();
    showToast(isNewQuestion ? 'Pertanyaan baru berhasil ditambahkan!' : 'Perubahan pertanyaan berhasil disimpan!');
  };

  const handleDeleteQuestion = (id: string, text: string) => {
    if (!confirm(`Hapus butir pertanyaan ini?\n"${text.substring(0, 60)}..."`)) return;
    InstrumentService.deleteQuestion(id);
    loadData();
    showToast('Butir pertanyaan berhasil dihapus!');
  };

  // ---------------- VARIABLE ACTIONS ----------------
  const handleOpenAddVariable = () => {
    const newVar: Variabel = {
      id: `V${instrumentData.variables.length + 1}`,
      id_dimensi: instrumentData.dimensions[0]?.id || 'EKO',
      nama: '',
      deskripsi: '',
      urutan: instrumentData.variables.length + 1
    };
    setEditingVariable(newVar);
    setIsNewVariable(true);
  };

  const handleSaveVariable = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingVariable) return;
    if (!editingVariable.id.trim() || !editingVariable.nama.trim()) {
      alert('Kode dan nama variabel wajib diisi!');
      return;
    }
    InstrumentService.saveVariable(editingVariable);
    setEditingVariable(null);
    loadData();
    showToast(isNewVariable ? 'Komponen variabel baru berhasil ditambahkan!' : 'Variabel berhasil diperbarui!');
  };

  const handleDeleteVariable = (id: string, nama: string) => {
    if (!confirm(`PERINGATAN: Menghapus variabel [${id}] "${nama}" akan menghapus seluruh indikator dan butir pertanyaan yang bernaung di bawah variabel ini. Lanjutkan?`)) return;
    InstrumentService.deleteVariable(id);
    loadData();
    showToast(`Variabel [${id}] dan instrumen turunannya berhasil dihapus!`);
  };

  // ---------------- INDICATOR ACTIONS ----------------
  const handleOpenAddIndicator = () => {
    const newInd: Indikator = {
      id: `ind_${Date.now()}`,
      id_variabel: instrumentData.variables[0]?.id || 'V1',
      kode: `IND-${instrumentData.indicators.length + 1}`,
      deskripsi: '',
      urutan: instrumentData.indicators.length + 1
    };
    setEditingIndicator(newInd);
    setIsNewIndicator(true);
  };

  const handleSaveIndicator = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingIndicator) return;
    if (!editingIndicator.kode.trim() || !editingIndicator.deskripsi.trim()) {
      alert('Kode dan deskripsi indikator wajib diisi!');
      return;
    }
    InstrumentService.saveIndicator(editingIndicator);
    setEditingIndicator(null);
    loadData();
    showToast(isNewIndicator ? 'Indikator baru berhasil ditambahkan!' : 'Indikator berhasil diperbarui!');
  };

  const handleDeleteIndicator = (id: string, kode: string) => {
    if (!confirm(`Hapus indikator [${kode}] beserta seluruh variasi pertanyaan persona di dalamnya?`)) return;
    InstrumentService.deleteIndicator(id);
    loadData();
    showToast(`Indikator [${kode}] berhasil dihapus!`);
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-24 right-6 z-50 bg-emerald-700 text-white px-5 py-3 rounded-2xl shadow-2xl text-xs font-bold flex items-center gap-2 animate-fadeIn border border-emerald-500">
          <CheckCircle2 className="w-4 h-4 text-emerald-200" />
          <span>{notification}</span>
        </div>
      )}

      {/* Main Top Control Header */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-ocean-100 text-ocean-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-ocean-200 uppercase tracking-wider">
              Manajemen Instrumen & Variabel
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Total: {instrumentData.questions.length} Butir Soal • {instrumentData.indicators.length} Indikator • {instrumentData.variables.length} Variabel
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Kamus Instrumen & Bank Soal Tesis
          </h2>
          <p className="text-xs text-slate-500 mt-0.5 max-w-2xl">
            Kelola redaksi pertanyaan, rubrik skala Likert 1–5, tambah/kurangi variabel penelitian, serta unduh format dokumen Word (.docx) resmi untuk keperluan audit Dosen Pembimbing.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleResetDefaults}
            className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
            title="Reset kembali ke 42 indikator dan 210 pertanyaan standar"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span>Reset Standar</span>
          </button>

          <button
            onClick={handleDownloadDocx}
            disabled={isExportingDocx}
            className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95 disabled:opacity-60"
            title="Unduh seluruh instrumen, variabel, bank soal dan lembar pengesahan ke format Microsoft Word (.docx)"
          >
            {isExportingDocx ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Menyusun DOCX...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-white" />
                <span>Unduh Format Word (.docx)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Tabs Selection */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('questions')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'questions'
              ? 'bg-ocean-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Bank Pertanyaan & Skala Likert ({instrumentData.questions.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('variables')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'variables'
              ? 'bg-ocean-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <FolderTree className="w-4 h-4" />
          <span>Komponen Variabel Penelitian ({instrumentData.variables.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('indicators')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'indicators'
              ? 'bg-ocean-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Daftar Indikator ({instrumentData.indicators.length})</span>
        </button>
      </div>

      {/* ======================= TAB 1: QUESTIONS ======================= */}
      {activeTab === 'questions' && (
        <div className="space-y-6">
          {/* Persona Filter Bar + Add Button */}
          <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-slate-700 block">Pilih Persona Gaya Bahasa Stakeholder:</span>
              <p className="text-[11px] text-slate-400">Pertanyaan disesuaikan dengan tingkat literasi dan sudut pandang kelompok.</p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <select
                value={selectedStakeholder}
                onChange={(e) => setSelectedStakeholder(e.target.value)}
                className="text-xs font-bold bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-ocean-950 focus:outline-none focus:ring-2 focus:ring-ocean-500"
              >
                {STAKEHOLDER_GROUPS.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.nama} ({g.tone})
                  </option>
                ))}
              </select>

              <button
                onClick={handleOpenAddQuestion}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Tambah Butir Soal</span>
              </button>
            </div>
          </div>

          {/* Grouped Questions List */}
          <div className="space-y-4">
            {instrumentData.dimensions.map((dim) => {
              const dimVars = instrumentData.variables.filter(v => v.id_dimensi === dim.id);
              const varIds = dimVars.map(v => v.id);
              const dimIndicators = instrumentData.indicators.filter(i => varIds.includes(i.id_variabel));
              const indIds = dimIndicators.map(i => i.id);

              const dimQuestions = instrumentData.questions.filter(
                q => indIds.includes(q.id_indikator) && q.id_stakeholder_group === selectedStakeholder
              );

              return (
                <div key={dim.id} className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
                  <div 
                    className="px-5 py-3.5 text-white font-black text-sm flex items-center justify-between"
                    style={{ backgroundColor: dim.warna }}
                  >
                    <span>{dim.nama.toUpperCase()}</span>
                    <span className="text-xs bg-white/20 px-3 py-0.5 rounded-full font-bold">
                      {dimQuestions.length} Butir Pertanyaan
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 divide-y divide-slate-100">
                    {dimQuestions.length === 0 ? (
                      <div className="py-6 text-center text-slate-400 text-xs">
                        Belum ada pertanyaan pada dimensi ini untuk stakeholder terpilih.
                      </div>
                    ) : (
                      dimQuestions.map((q, qIdx) => {
                        const ind = instrumentData.indicators.find(i => i.id === q.id_indikator);

                        return (
                          <div key={q.id} className="py-4 first:pt-1 space-y-2.5">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-[10px] font-bold bg-ocean-100 text-ocean-900 px-2.5 py-0.5 rounded-lg border border-ocean-200">
                                  No. {qIdx + 1} • {ind?.kode || q.id_indikator}
                                </span>
                                <span className="text-xs text-slate-500 font-medium">
                                  Indikator: {ind?.deskripsi || '-'}
                                </span>
                              </div>

                              {/* Edit & Delete Action Buttons */}
                              <div className="flex items-center gap-1.5 flex-shrink-0">
                                <button
                                  onClick={() => {
                                    setEditingQuestion({ ...q });
                                    setIsNewQuestion(false);
                                  }}
                                  className="px-2.5 py-1.5 bg-slate-100 hover:bg-ocean-50 text-slate-700 hover:text-ocean-700 rounded-xl text-[11px] font-bold transition-all flex items-center gap-1 border border-slate-200"
                                  title="Edit teks pertanyaan & skala jawaban"
                                >
                                  <Edit3 className="w-3.5 h-3.5" />
                                  <span>Edit</span>
                                </button>
                                <button
                                  onClick={() => handleDeleteQuestion(q.id, q.teks)}
                                  className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-xl transition-colors border border-rose-200"
                                  title="Hapus pertanyaan ini"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>

                            <p className="text-sm font-bold text-slate-900 leading-relaxed bg-slate-50/70 p-3 rounded-2xl border border-slate-100">
                              &ldquo;{q.teks}&rdquo;
                            </p>

                            {/* 5 Likert Scale Rubrics */}
                            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-1 text-[11px]">
                              {[1, 2, 3, 4, 5].map((num) => (
                                <div key={num} className="p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                                  <span className="font-extrabold text-ocean-700 block mb-0.5">
                                    Skor {num}:
                                  </span>
                                  <span className="text-slate-600 font-medium leading-tight block">
                                    {q.skala_label[num as 1|2|3|4|5]}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ======================= TAB 2: VARIABLES ======================= */}
      {activeTab === 'variables' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
            <div>
              <h3 className="font-bold text-sm text-slate-900">Daftar Komponen Variabel Penelitian</h3>
              <p className="text-xs text-slate-500">Variabel membagi dimensi menjadi fokus analisis spesifik.</p>
            </div>
            <button
              onClick={handleOpenAddVariable}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Tambah Variabel Baru</span>
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <th className="py-3 px-4">Kode</th>
                  <th className="py-3 px-4">Dimensi Induk</th>
                  <th className="py-3 px-4">Nama Variabel</th>
                  <th className="py-3 px-3 text-center">Jumlah Indikator</th>
                  <th className="py-3 px-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {instrumentData.variables.map((v) => {
                  const dim = instrumentData.dimensions.find(d => d.id === v.id_dimensi);
                  const indCount = instrumentData.indicators.filter(i => i.id_variabel === v.id).length;

                  return (
                    <tr key={v.id} className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-ocean-700">{v.id}</td>
                      <td className="py-3.5 px-4">
                        <span 
                          className="px-2 py-0.5 rounded text-[10px] font-bold text-white inline-block"
                          style={{ backgroundColor: dim?.warna || '#0284c7' }}
                        >
                          {dim?.nama || v.id_dimensi}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-bold text-slate-900">{v.nama}</td>
                      <td className="py-3.5 px-3 text-center font-bold text-slate-600">{indCount} Indikator</td>
                      <td className="py-3.5 px-4 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => {
                              setEditingVariable({ ...v });
                              setIsNewVariable(false);
                            }}
                            className="p-1.5 text-ocean-600 hover:bg-ocean-50 rounded-lg"
                            title="Edit Variabel"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteVariable(v.id, v.nama)}
                            className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg"
                            title="Hapus Variabel"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ======================= TAB 3: INDICATORS ======================= */}
      {activeTab === 'indicators' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
            <div>
              <h3 className="font-bold text-sm text-slate-900">Daftar Indikator Penelitian</h3>
              <p className="text-xs text-slate-500">Tiap indikator menjadi acuan pembuatan butir pertanyaan pada tiap persona.</p>
            </div>
            <button
              onClick={handleOpenAddIndicator}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Tambah Indikator</span>
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <th className="py-3 px-4">Kode</th>
                  <th className="py-3 px-4">Variabel Induk</th>
                  <th className="py-3 px-4">Deskripsi Parameter Indikator</th>
                  <th className="py-3 px-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {instrumentData.indicators.map((ind) => {
                  const v = instrumentData.variables.find(item => item.id === ind.id_variabel);

                  return (
                    <tr key={ind.id} className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-black text-ocean-700">{ind.kode}</td>
                      <td className="py-3.5 px-4 font-semibold text-slate-600">
                        {v ? `${v.id} - ${v.nama}` : ind.id_variabel}
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-800">{ind.deskripsi}</td>
                      <td className="py-3.5 px-4 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => {
                              setEditingIndicator({ ...ind });
                              setIsNewIndicator(false);
                            }}
                            className="p-1.5 text-ocean-600 hover:bg-ocean-50 rounded-lg"
                            title="Edit Indikator"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteIndicator(ind.id, ind.kode)}
                            className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg"
                            title="Hapus Indikator"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ======================= MODAL: EDIT/ADD QUESTION ======================= */}
      {editingQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col border border-slate-200 overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <h3 className="font-bold text-base text-slate-900">
                {isNewQuestion ? '➕ Tambah Butir Pertanyaan Baru' : '✏️ Edit Butir Pertanyaan & Skala Jawaban'}
              </h3>
              <button
                onClick={() => setEditingQuestion(null)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveQuestion} className="p-5 overflow-y-auto space-y-4 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Kelompok Stakeholder
                  </label>
                  <select
                    value={editingQuestion.id_stakeholder_group}
                    onChange={(e) => setEditingQuestion({ ...editingQuestion, id_stakeholder_group: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold focus:ring-2 focus:ring-ocean-500"
                  >
                    {STAKEHOLDER_GROUPS.map((g) => (
                      <option key={g.id} value={g.id}>{g.nama}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tautkan ke Indikator
                  </label>
                  <select
                    value={editingQuestion.id_indikator}
                    onChange={(e) => setEditingQuestion({ ...editingQuestion, id_indikator: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold focus:ring-2 focus:ring-ocean-500"
                  >
                    {instrumentData.indicators.map((ind) => (
                      <option key={ind.id} value={ind.id}>
                        {ind.kode} - {ind.deskripsi.substring(0, 40)}...
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Teks Redaksi Pertanyaan
                </label>
                <textarea
                  rows={3}
                  value={editingQuestion.teks}
                  onChange={(e) => setEditingQuestion({ ...editingQuestion, teks: e.target.value })}
                  placeholder="Tuliskan kalimat pertanyaan kuesioner..."
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-ocean-500"
                />
              </div>

              {/* Likert Scale Labels 1 to 5 */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-800">
                  Rubrik Label Jawaban Skala Likert (1 – 5):
                </label>
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex items-center gap-2">
                    <span className="w-16 text-xs font-bold text-ocean-700">Skor {num}:</span>
                    <input
                      type="text"
                      value={editingQuestion.skala_label[num as 1|2|3|4|5] || ''}
                      onChange={(e) => {
                        setEditingQuestion({
                          ...editingQuestion,
                          skala_label: {
                            ...editingQuestion.skala_label,
                            [num]: e.target.value
                          }
                        });
                      }}
                      required
                      placeholder={`Deskripsi pilihan skor ${num}...`}
                      className="flex-1 px-3 py-1.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-ocean-500"
                    />
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingQuestion(null)}
                  className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-ocean-600 hover:bg-ocean-700 text-white rounded-xl text-xs font-bold shadow transition-all flex items-center gap-1.5"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Pertanyaan</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================= MODAL: EDIT/ADD VARIABLE ======================= */}
      {editingVariable && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="font-bold text-base text-slate-900">
                {isNewVariable ? '➕ Tambah Variabel Baru' : '✏️ Edit Komponen Variabel'}
              </h3>
              <button onClick={() => setEditingVariable(null)} className="p-1 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveVariable} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Kode Variabel</label>
                <input
                  type="text"
                  value={editingVariable.id}
                  onChange={(e) => setEditingVariable({ ...editingVariable, id: e.target.value.toUpperCase() })}
                  placeholder="Contoh: V1, V2, V10..."
                  required
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Dimensi Induk</label>
                <select
                  value={editingVariable.id_dimensi}
                  onChange={(e) => setEditingVariable({ ...editingVariable, id_dimensi: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold"
                >
                  {instrumentData.dimensions.map((d) => (
                    <option key={d.id} value={d.id}>{d.id} - {d.nama}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nama Variabel</label>
                <input
                  type="text"
                  value={editingVariable.nama}
                  onChange={(e) => setEditingVariable({ ...editingVariable, nama: e.target.value })}
                  placeholder="Contoh: Kondisi Sumber Daya Ikan..."
                  required
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                />
              </div>

              <div className="pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingVariable(null)}
                  className="px-4 py-2 border rounded-xl text-xs font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-ocean-600 text-white rounded-xl text-xs font-bold shadow"
                >
                  Simpan Variabel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================= MODAL: EDIT/ADD INDICATOR ======================= */}
      {editingIndicator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="font-bold text-base text-slate-900">
                {isNewIndicator ? '➕ Tambah Indikator Baru' : '✏️ Edit Indikator'}
              </h3>
              <button onClick={() => setEditingIndicator(null)} className="p-1 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveIndicator} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Kode Indikator</label>
                <input
                  type="text"
                  value={editingIndicator.kode}
                  onChange={(e) => setEditingIndicator({ ...editingIndicator, kode: e.target.value.toUpperCase() })}
                  placeholder="Contoh: EKO-1, EKN-2, SOS-3..."
                  required
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Variabel Induk</label>
                <select
                  value={editingIndicator.id_variabel}
                  onChange={(e) => setEditingIndicator({ ...editingIndicator, id_variabel: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold"
                >
                  {instrumentData.variables.map((v) => (
                    <option key={v.id} value={v.id}>{v.id} - {v.nama}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Deskripsi Parameter</label>
                <textarea
                  rows={3}
                  value={editingIndicator.deskripsi}
                  onChange={(e) => setEditingIndicator({ ...editingIndicator, deskripsi: e.target.value })}
                  placeholder="Deskripsi substansi indikator..."
                  required
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                />
              </div>

              <div className="pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingIndicator(null)}
                  className="px-4 py-2 border rounded-xl text-xs font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-ocean-600 text-white rounded-xl text-xs font-bold shadow"
                >
                  Simpan Indikator
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
