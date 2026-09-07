'use client';

import React, { useState } from 'react';
import { STAKEHOLDER_GROUPS, StakeholderGroup } from '@/data/questionnaireData';
import { PdfPrintService } from '@/lib/pdfPrintService';
import { 
  Printer, 
  Download, 
  FileText, 
  CheckCircle2, 
  Info, 
  Landmark, 
  Fish, 
  Users, 
  GraduationCap, 
  Building2,
  HelpCircle
} from 'lucide-react';

export default function CetakPage() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownloadPdf = (group: StakeholderGroup) => {
    setDownloadingId(group.id);
    setTimeout(() => {
      PdfPrintService.generateQuestionnairePdf(group.id);
      setDownloadingId(null);
    }, 400);
  };

  const getStakeholderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark': return <Landmark className="w-6 h-6" />;
      case 'Fish': return <Fish className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      default: return <FileText className="w-6 h-6" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean-100 text-ocean-800 text-xs font-bold border border-ocean-200">
          <Printer className="w-3.5 h-3.5 text-ocean-600" />
          <span>Mode Offline & Cetak Fisik</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Cetak Kuesioner Fisik (PDF Siap Cetak A4)
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Fitur ini disediakan khusus untuk wawancara tatap muka langsung di lapangan dengan responden yang memiliki keterbatasan literasi digital atau sulit mengakses gawai di laut (seperti nelayan tradisional dan juragan perahu). Setelah lembar fisik terisi, gunakan menu <strong>&ldquo;Entri Manual&rdquo;</strong> untuk memasukkan skor ke dalam sistem digital.
        </p>
      </div>

      {/* Guide Note */}
      <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-950 text-xs space-y-2">
        <div className="flex items-center gap-2 font-bold text-sm text-amber-900">
          <Info className="w-4 h-4 text-amber-700" />
          <span>Petunjuk untuk Surveyor / Enumerator Lapangan:</span>
        </div>
        <ul className="list-disc list-inside space-y-1 text-slate-700 leading-relaxed pl-1">
          <li>Pilih kelompok stakeholder sasaran di bawah untuk mengunduh berkas PDF yang sesuai.</li>
          <li>Setiap berkas PDF sudah mencakup kop resmi penelitian tesis, form identitas responden, petunjuk skala Likert 1–5, dan seluruh 42 butir pertanyaan indikator.</li>
          <li>Setelah wawancara lapangan selesai, enumerator dapat membuka halaman <strong>Entri Manual</strong> untuk memasukkan hasil kuesioner dengan cepat.</li>
        </ul>
      </div>

      {/* 5 Stakeholder Download Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {STAKEHOLDER_GROUPS.map((group) => {
          const isProcessing = downloadingId === group.id;

          return (
            <div
              key={group.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-all space-y-5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-ocean-50 text-ocean-700 flex items-center justify-center">
                    {getStakeholderIcon(group.iconName)}
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${group.badgeColor}`}>
                    Target: {group.target} Sampel
                  </span>
                </div>

                <h3 className="font-extrabold text-lg text-slate-900 mb-1.5 leading-snug">
                  {group.nama}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {group.deskripsi}
                </p>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600 space-y-1">
                  <div>• Gaya Bahasa: <strong>{group.tone}</strong></div>
                  <div>• Jumlah Soal: <strong>42 Butir (9 Variabel)</strong></div>
                  <div>• Format: <strong>Dokumen A4 Standar Tesis</strong></div>
                </div>
              </div>

              <button
                onClick={() => handleDownloadPdf(group)}
                disabled={isProcessing}
                className="w-full py-3 px-4 bg-ocean-600 hover:bg-ocean-700 text-white rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Download className={`w-4 h-4 ${isProcessing ? 'animate-bounce' : ''}`} />
                <span>{isProcessing ? 'Menyiapkan Dokumen...' : 'Unduh PDF Kuesioner'}</span>
              </button>
            </div>
          );
        })}
      </div>

    </div>
  );
}
