'use client';

import React from 'react';
import BankPertanyaanViewer from '@/features/admin/components/BankPertanyaanViewer';
import { BookOpen } from 'lucide-react';

export default function AdminBankPertanyaanPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean-100 text-ocean-800 text-xs font-bold border border-ocean-200">
          <BookOpen className="w-3.5 h-3.5 text-ocean-600" />
          <span>Kamus Instrumen Penelitian Tesis</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Bank Pertanyaan Terstruktur (210 Butir)
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Tinjau redaksi 42 indikator dalam 5 gaya bahasa persona stakeholder (*Pemerintah Daerah, Pelaku Usaha Nelayan, Masyarakat Pesisir, Akademisi/LSM, Industri*).
        </p>
      </div>

      <BankPertanyaanViewer />
    </div>
  );
}
