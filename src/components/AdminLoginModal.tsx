'use client';

import React, { useState } from 'react';
import { useAdminAuth } from '@/context/AdminAuthContext';
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  KeyRound, 
  X, 
  Eye, 
  EyeOff, 
  AlertCircle,
  Loader2,
  Sparkles
} from 'lucide-react';

export default function AdminLoginModal() {
  const { isLoginModalOpen, closeLoginModal, login } = useAdminAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isLoginModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email.trim() || !password.trim()) {
      setErrorMessage('Harap isi alamat email dan kata sandi admin!');
      return;
    }

    setIsSubmitting(true);
    const result = await login(email.trim(), password);
    setIsSubmitting(false);

    if (result.success) {
      setEmail('');
      setPassword('');
      setErrorMessage(null);
    } else {
      setErrorMessage(result.error || 'Email atau kata sandi tidak cocok!');
    }
  };

  const handleClose = () => {
    setErrorMessage(null);
    closeLoginModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 border border-slate-200 relative overflow-hidden">
        {/* Top Decorative gradient */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-ocean-600 via-emerald-500 to-ocean-800" />

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6 pt-2">
          <div className="w-14 h-14 bg-gradient-to-tr from-ocean-700 to-ocean-500 text-white rounded-2xl mx-auto flex items-center justify-center mb-3 shadow-glow">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-black text-slate-900 tracking-tight">
            Autentikasi Administrator
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto leading-relaxed">
            Masuk untuk mengakses analitik kuesioner tesis dan fitur unduh data rekap Excel (.xlsx).
          </p>
        </div>

        {/* Error Alert Box */}
        {errorMessage && (
          <div className="mb-4 p-3.5 bg-rose-50 border border-rose-200 rounded-2xl flex items-start gap-2.5 text-rose-700 text-xs animate-shake">
            <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1 font-medium">{errorMessage}</div>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Alamat Email Admin
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                placeholder="email.admin@domain.com"
                required
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all bg-slate-50/50 focus:bg-white"
                autoFocus
              />
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 sm:top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Kata Sandi
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                placeholder="Masukkan kata sandi..."
                required
                className="w-full pl-10 pr-10 py-2.5 sm:py-3 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-all bg-slate-50/50 focus:bg-white"
              />
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 sm:top-3.5" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 sm:top-3.5 text-slate-400 hover:text-slate-600 p-0.5 rounded"
                aria-label="Toggle Password Visibility"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleClose}
              className="w-1/3 py-3 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-2/3 py-3 bg-ocean-600 hover:bg-ocean-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Memverifikasi...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Masuk Mode Admin</span>
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-5 pt-4 border-t border-slate-100 text-center">
          <p className="text-[11px] text-slate-400 leading-tight">
            Tata Kelola SI-KEPALA CILEGON • Verifikasi keamanan server-side terenkripsi
          </p>
        </div>
      </div>
    </div>
  );
}
