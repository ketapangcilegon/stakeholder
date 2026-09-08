'use client';

import React from 'react';
import { useAdminAuth } from '@/context/AdminAuthContext';
import FormEntriManual from '@/features/admin/components/FormEntriManual';
import { Edit3, Lock, ShieldCheck, ShieldAlert, RefreshCw } from 'lucide-react';

export default function AdminEntriManualPage() {
  const { isAdmin, isLoading, openLoginModal } = useAdminAuth();

  if (isLoading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <RefreshCw className="w-10 h-10 text-ocean-600 animate-spin" />
        <p className="text-xs font-semibold text-slate-500">Memeriksa izin akses...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <div className="w-16 h-16 bg-ocean-100 text-ocean-700 rounded-2xl flex items-center justify-center mx-auto shadow-glow">
          <Lock className="w-8 h-8" />
        </div>
        <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-3 py-1 rounded-full border border-amber-200 uppercase tracking-wider inline-flex items-center gap-1">
          <ShieldAlert className="w-3 h-3 text-amber-700" /> Akses Khusus Admin & Enumerator
        </span>
        <h2 className="text-2xl font-black text-slate-900">Panel Entri Manual Kuesioner</h2>
        <p className="text-xs text-slate-500 max-w-sm">
          Akses pengisian kuesioner fisik hasil survei lapangan dibatasi untuk peneliti dan admin resmi.
        </p>
        <button
          onClick={openLoginModal}
          className="px-6 py-3 bg-ocean-600 hover:bg-ocean-700 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Masuk Mode Admin</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
          <Edit3 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Panel Enumerator Lapangan</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Entri Manual Kuesioner Cetak
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Gunakan formulir entri cepat ini untuk memasukkan data dari lembar kuesioner fisik hasil survei/wawancara tatap muka ke dalam basis data penelitian Supabase.
        </p>
      </div>

      <FormEntriManual />
    </div>
  );
}

