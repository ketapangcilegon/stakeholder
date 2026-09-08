'use client';

import React, { useState } from 'react';
import { X, Trash2, RotateCcw, AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';
import { INDIKATOR_LIST, STAKEHOLDER_GROUPS } from '@/config/constants';
import { QUESTION_BANK } from '@/data/questionBank';
import { SurveyService } from '@/lib/surveyService';

interface Props {
  respondent: any;
  answers: any[];
  onClose: () => void;
  onDataChanged: () => void;
}

export default function DetailRespondenModal({
  respondent,
  answers,
  onClose,
  onDataChanged
}: Props) {
  const [deletingIndId, setDeletingIndId] = useState<string | null>(null);
  const [isDeletingAll, setIsDeletingAll] = useState(false);

  if (!respondent) return null;

  const group = STAKEHOLDER_GROUPS.find(g => g.id === respondent.id_stakeholder_group);
  const respondentAnswers = answers.filter(a => a.id_responden === respondent.id);
  const totalAnswered = respondentAnswers.length;

  const handleDeleteSingle = async (indikatorId: string, kode: string) => {
    if (!confirm(`Hapus jawaban untuk indikator [${kode}] dari responden ${respondent.nama}?`)) return;
    setDeletingIndId(indikatorId);
    await SurveyService.deleteSingleAnswer(respondent.id, indikatorId);
    setDeletingIndId(null);
    onDataChanged();
  };

  const handleDeleteAllAnswers = async () => {
    if (!confirm(`PERINGATAN: Apakah Anda yakin ingin MENGHAPUS SEMUA JAWABAN (${totalAnswered} jawaban) untuk responden ${respondent.nama}? Profil responden akan tetap disimpan tetapi status kuesioner akan dikosongkan/reset.`)) {
      return;
    }
    setIsDeletingAll(true);
    await SurveyService.deleteRespondentAnswers(respondent.id);
    setIsDeletingAll(false);
    onDataChanged();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/50">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-ocean-100 text-ocean-800 uppercase tracking-wider">
                Portal Admin • Rincian Jawaban
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${group?.badgeColor || 'bg-slate-100'}`}>
                {group?.nama.split('(')[0] || respondent.id_stakeholder_group}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1">
              {respondent.nama}
            </h3>
            <p className="text-xs text-slate-500">
              {respondent.instansi} {respondent.jabatan ? `• ${respondent.jabatan}` : ''} {respondent.no_hp ? `• Telp: ${respondent.no_hp}` : ''}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors self-end sm:self-center"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Bar inside Modal */}
        <div className="px-4 sm:px-6 py-3 bg-ocean-50/60 border-b border-ocean-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-ocean-950">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Terjawab: <strong>{totalAnswered}</strong> dari 42 Indikator</span>
          </div>

          {totalAnswered > 0 && (
            <button
              onClick={handleDeleteAllAnswers}
              disabled={isDeletingAll}
              className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 hover:text-rose-800 border border-rose-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 self-start sm:self-auto active:scale-95 disabled:opacity-50"
              title="Hapus seluruh skor jawaban responden ini tanpa menghapus data profil"
            >
              <RotateCcw className="w-3.5 h-3.5 text-rose-600" />
              <span>{isDeletingAll ? 'Mengosongkan...' : 'Kosongkan / Hapus Semua Jawaban'}</span>
            </button>
          )}
        </div>

        {/* List of 42 Questions and Answers */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3 flex-1">
          {INDIKATOR_LIST.map((ind, idx) => {
            const ans = respondentAnswers.find(a => a.id_indikator === ind.id);
            const q = QUESTION_BANK.find(
              item => item.id_indikator === ind.id && item.id_stakeholder_group === respondent.id_stakeholder_group
            );

            return (
              <div
                key={ind.id}
                className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-sm transition-all flex items-start justify-between gap-3"
              >
                <div className="text-xs flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-ocean-700 bg-ocean-50 px-2 py-0.5 rounded text-[11px]">
                      #{idx + 1} {ind.kode}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      ({ind.id_variabel})
                    </span>
                  </div>
                  <p className="text-slate-800 font-medium leading-relaxed">
                    {q?.teks || ind.deskripsi}
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  {ans ? (
                    <>
                      <div className="text-center">
                        <span className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-sm">
                          {ans.skor}
                        </span>
                        <span className="text-[9px] text-slate-400 font-bold block mt-0.5">Skor</span>
                      </div>

                      <button
                        onClick={() => handleDeleteSingle(ind.id, ind.kode)}
                        disabled={deletingIndId === ind.id}
                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                        title={`Hapus jawaban untuk indikator ${ind.kode}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <span className="text-xs text-slate-400 font-bold px-3 py-1.5 rounded-lg bg-slate-100">
                      Belum Diisi
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
          <p className="text-[11px] text-slate-400">
            Perubahan jawaban langsung memperbarui skor analitik radar dan matriks secara real-time.
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow transition-all"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
