'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, ArrowRight, BarChart3, Home } from 'lucide-react';
import Link from 'next/link';

export default function TerimaKasihPage() {
  const router = useRouter();

  return (
    <div className="max-w-2xl mx-auto my-16 p-8 bg-white rounded-3xl border border-slate-200 shadow-xl text-center space-y-6 animate-fadeIn">
      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-glow">
        <CheckCircle2 className="w-12 h-12" />
      </div>

      <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
        Kuesioner Berhasil Dikirim!
      </h1>

      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
        Terima kasih atas kontribusi dan dedikasi waktu Bapak/Ibu/Saudara dalam pengisian kuesioner penelitian tesis Magister Manajemen Perikanan:
        <strong className="block text-slate-900 mt-2">
          &ldquo;Pengelolaan Perikanan Tangkap Berkelanjutan di Kota Cilegon: Strategi Kebijakan Partisipatif Berbasis Persepsi dan Peran Stakeholder&rdquo;
        </strong>
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
        <Link
          href="/dashboard"
          className="w-full sm:w-auto px-6 py-3 bg-ocean-600 hover:bg-ocean-700 text-white rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
        >
          <BarChart3 className="w-4 h-4" />
          <span>Lihat Dashboard Hasil Analitik</span>
        </Link>
        <Link
          href="/"
          className="w-full sm:w-auto px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Kembali ke Halaman Depan</span>
        </Link>
      </div>
    </div>
  );
}
