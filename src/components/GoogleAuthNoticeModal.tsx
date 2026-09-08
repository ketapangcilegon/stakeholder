'use client';

import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, X, Sparkles } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onProceedWithoutLogin: () => void;
  rawErrorMessage?: string;
}

export default function GoogleAuthNoticeModal({
  isOpen,
  onClose,
  onProceedWithoutLogin,
  rawErrorMessage
}: Props) {
  const [showAdminGuide, setShowAdminGuide] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-lg w-full p-5 sm:p-7 border border-slate-200 text-slate-800 space-y-4 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                Login Google Belum Diaktifkan
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Pemberitahuan Otentikasi Supabase
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Highlight Note */}
        <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs sm:text-sm space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-emerald-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Kuesioner Dapat Diisi Tanpa Login!</span>
          </div>
          <p className="text-emerald-700 text-xs leading-relaxed">
            Pengisian instrumen kuesioner penelitian tesis ini <strong>TIDAK mewajibkan login akun Google</strong>. Bapak/Ibu responden dapat langsung memilih stakeholder dan mengisi nama/instansi secara mandiri.
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Penyedia layanan <em>Google OAuth Provider</em> belum diaktifkan di dasbor Supabase proyek ini ({rawErrorMessage ? `Pesan: "${rawErrorMessage}"` : 'provider is not enabled'}).
        </p>

        {/* Collapsible Admin Guide */}
        <div className="rounded-xl border border-slate-200 overflow-hidden text-xs">
          <button
            type="button"
            onClick={() => setShowAdminGuide(!showAdminGuide)}
            className="w-full px-3.5 py-2.5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between text-slate-700 font-bold transition-colors"
          >
            <span>Petunjuk Pengaktifan (Khusus Peneliti / Admin)</span>
            {showAdminGuide ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          
          {showAdminGuide && (
            <div className="p-3.5 bg-white space-y-2 text-slate-600 border-t border-slate-200 leading-relaxed text-[11px] sm:text-xs">
              <p>Jika ingin mengaktifkan fitur Login 1-Tap Google:</p>
              <ol className="list-decimal list-inside space-y-1 text-slate-700 font-medium">
                <li>Buka <strong>Google Cloud Console</strong> &rarr; Credentials &rarr; Create OAuth 2.0 Client ID.</li>
                <li>Masukkan Authorized Redirect URI: <code className="bg-slate-100 px-1 py-0.5 rounded text-[10px] text-ocean-700 select-all">https://firfggtfmnejwbovveor.supabase.co/auth/v1/callback</code></li>
                <li>Buka <strong>Supabase Dashboard</strong> &rarr; Authentication &rarr; Providers &rarr; Google &rarr; Masukkan Client ID & Secret &rarr; Aktifkan (Enable).</li>
              </ol>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={onProceedWithoutLogin}
            className="w-full sm:flex-1 py-3 px-4 bg-ocean-600 hover:bg-ocean-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <span>Lanjut Isi Kuesioner Tanpa Login</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-4 border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-xl font-semibold text-xs sm:text-sm transition-all"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
}
