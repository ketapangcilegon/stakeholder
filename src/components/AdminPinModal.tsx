'use client';

import React, { useState } from 'react';
import { Lock, ShieldAlert, KeyRound, X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AdminPinModal({ isOpen, onClose, onSuccess }: Props) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default researcher PIN: 1234 or cilegon2026
    if (pin === '1234' || pin.toLowerCase() === 'cilegon2026') {
      setError(false);
      onSuccess();
      onClose();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 border border-slate-200 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-ocean-100 text-ocean-700 rounded-xl mx-auto flex items-center justify-center mb-3">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Autentikasi Peneliti</h3>
          <p className="text-xs text-slate-500 mt-1">
            Masukkan PIN Keamanan untuk mengakses fitur manajemen data mentah dan konfigurasi sistem.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              PIN / Sandi Peneliti
            </label>
            <div className="relative">
              <input
                type="password"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setError(false);
                }}
                placeholder="Default PIN: 1234"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-center font-bold tracking-widest focus:outline-none focus:ring-2 ${
                  error
                    ? 'border-rose-400 ring-rose-200 bg-rose-50/50'
                    : 'border-slate-300 focus:ring-ocean-500 focus:border-ocean-500'
                }`}
                autoFocus
              />
              <KeyRound className="w-4 h-4 text-slate-400 absolute right-3.5 top-3" />
            </div>
            {error && (
              <p className="text-[11px] text-rose-600 font-semibold mt-1.5 flex items-center gap-1 justify-center">
                <ShieldAlert className="w-3.5 h-3.5" /> PIN salah! Gunakan default: 1234
              </p>
            )}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-ocean-600 hover:bg-ocean-700 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all"
            >
              Masuk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
