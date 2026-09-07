'use client';

import React from 'react';
import FormEntriManual from '@/features/admin/components/FormEntriManual';
import { Edit3 } from 'lucide-react';

export default function AdminEntriManualPage() {
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
