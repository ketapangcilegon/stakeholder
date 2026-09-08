'use client';

import React from 'react';
import InstrumentManager from '@/features/admin/components/InstrumentManager';
import { useAdminAuth } from '@/context/AdminAuthContext';
import { BookOpen, ShieldCheck, Lock, RefreshCw, ShieldAlert } from 'lucide-react';

export default function AdminBankPertanyaanPage() {
  const { isAdmin, isLoading, openLoginModal } = useAdminAuth();

  if (isLoading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <RefreshCw className="w-10 h-10 text-ocean-600 animate-spin" />
        <p className="text-xs font-semibold text-slate-500">Memeriksa hak akses...</p>
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
              <ShieldAlert className="w-3 h-3 text-amber-700" /> Akses Khusus Admin & Peneliti
            </span>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Manajemen Bank Soal & Variabel
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              Pengubahan redaksi pertanyaan kuesioner, penambahan/pengurangan variabel & indikator, serta ekspor file Word (.docx) untuk audit dosen pembimbing dibatasi khusus untuk pengelola admin.
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
      <InstrumentManager />
    </div>
  );
}
