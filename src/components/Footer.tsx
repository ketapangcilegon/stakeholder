import React from 'react';
import { Fish, Users, Sprout, Waves, BookOpen, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#06335e] via-[#042444] to-[#02182e] text-slate-300 border-t border-sky-900 mt-16 overflow-hidden">
      
      {/* 4 Pillars Header matching Mockup */}
      <div className="border-b border-white/10 bg-white/5 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            {/* 1. Perikanan Berkelanjutan */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 flex-shrink-0">
                <Fish className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs sm:text-sm font-bold text-white leading-tight">Perikanan</h5>
                <p className="text-[11px] text-sky-200/80 leading-tight">Berkelanjutan</p>
              </div>
            </div>

            {/* 2. Kolaborasi untuk Dampak Nyata */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs sm:text-sm font-bold text-white leading-tight">Kolaborasi</h5>
                <p className="text-[11px] text-emerald-200/80 leading-tight">untuk Dampak Nyata</p>
              </div>
            </div>

            {/* 3. Laut Sehat Masyarakat Sejahtera */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 flex-shrink-0">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs sm:text-sm font-bold text-white leading-tight">Laut Sehat</h5>
                <p className="text-[11px] text-teal-200/80 leading-tight">Masyarakat Sejahtera</p>
              </div>
            </div>

            {/* 4. Cilegon Maju Bersama */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 flex-shrink-0">
                <Waves className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs sm:text-sm font-bold text-white leading-tight">Cilegon Maju</h5>
                <p className="text-[11px] text-cyan-200/80 leading-tight">Bersama</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & Thesis Context */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300">
                <Fish className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-base tracking-tight text-white">STAKEHOLDER CILEGON</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Instrumen Kuesioner Digital Multi-Stakeholder Penelitian Tesis Magister Manajemen Perikanan:
              <strong className="block text-slate-200 mt-1 font-semibold">
                &ldquo;Pengelolaan Perikanan Tangkap Berkelanjutan di Kota Cilegon: Strategi Kebijakan Partisipatif Berbasis Persepsi dan Peran Stakeholder&rdquo;
              </strong>
            </p>
          </div>

          {/* 5 Kelompok Stakeholder */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300 mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-sky-400" />
              5 Kelompok Stakeholder Sasaran
            </h4>
            <ul className="text-xs space-y-1.5 text-slate-400">
              <li>1. Pemerintah Daerah (DKPP, Bapperida, DLH)</li>
              <li>2. Pelaku Usaha Perikanan (Nelayan & Juragan)</li>
              <li>3. Masyarakat Pesisir & Komunitas Lokal</li>
              <li>4. Akademisi / Pakar & LSM Lingkungan</li>
              <li>5. Industri Sekitar Kawasan Pesisir Cilegon</li>
            </ul>
          </div>

          {/* Research & Metodologi */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-sky-400" />
              Metodologi & Pengolahan Data
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-2">
              Mengukur 9 variabel (42 indikator) dalam skala Likert 1–5 dengan tabulasi otomatis dan visualisasi multi-dimensi per kelompok.
            </p>
            <div className="pt-2 border-t border-sky-950 text-[11px] text-sky-200/70">
              Target Sampel Total: <strong>50 Responden</strong> • Wilayah Pesisir Selat Sunda Kota Cilegon
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-sky-950/80 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Penelitian Tesis Magister Manajemen Perikanan • Universitas Terbuka • Kota Cilegon, Banten.</p>
        </div>
      </div>
    </footer>
  );
}
