import React from 'react';
import { Anchor, Waves, Award, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ocean-950 text-slate-300 border-t border-ocean-900 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & Thesis Context */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white">
              <Anchor className="w-5 h-5 text-ocean-400" />
              <span className="font-extrabold text-lg tracking-tight">SI-KEPALA CILEGON</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Instrumen Kuesioner Digital Multi-Stakeholder Penelitian Tesis Magister Manajemen Perikanan:
              <strong className="block text-slate-200 mt-1">
                &ldquo;Keberlanjutan Pengelolaan Perikanan Tangkap di Kawasan Pesisir Kota Cilegon&rdquo;
              </strong>
            </p>
          </div>

          {/* 5 Kelompok Stakeholder */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ocean-300 mb-3 flex items-center gap-2">
              <Waves className="w-4 h-4 text-ocean-400" />
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-ocean-300 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-ocean-400" />
              Metodologi & Pengolahan Data
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-2">
              Mengukur 9 variabel (42 indikator) dalam skala Likert 1–5 dengan tabulasi otomatis dan visualisasi multi-dimensi per kelompok.
            </p>
            <div className="pt-2 border-t border-ocean-900 text-[11px] text-slate-500">
              Target Sampel Total: <strong>50 Responden</strong> • Wilayah Pesisir Selat Sunda Kota Cilegon
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-ocean-900 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Penelitian Tesis Magister Manajemen Perikanan • Kota Cilegon, Banten.</p>
        </div>
      </div>
    </footer>
  );
}
