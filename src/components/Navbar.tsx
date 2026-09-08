'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAdminAuth } from '@/context/AdminAuthContext';
import { 
  Anchor, 
  BarChart3, 
  FileText, 
  Printer, 
  Edit3, 
  ShieldCheck, 
  Shield, 
  LogOut, 
  Menu, 
  X,
  BookOpen,
  Users,
  Lock
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { isAdmin, adminEmail, openLoginModal, logout } = useAdminAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Beranda', icon: FileText, adminOnly: false },
    { href: '/pilih-stakeholder', label: 'Isi Kuesioner', icon: Edit3, adminOnly: false },
    { href: '/dashboard', label: 'Dashboard Analitik', icon: BarChart3, adminOnly: true },
    { href: '/cetak', label: 'Mode Cetak (PDF)', icon: Printer, adminOnly: false },
    { href: '/entri-manual', label: 'Entri Manual', icon: Edit3, adminOnly: true },
    { href: '/responden', label: 'Data Responden', icon: Users, adminOnly: true },
    { href: '/bank-pertanyaan', label: 'Bank Soal', icon: BookOpen, adminOnly: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-ocean-800 to-maritime-teal flex items-center justify-center text-white shadow-glow group-hover:scale-105 transition-transform flex-shrink-0">
              <Anchor className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-extrabold text-base sm:text-xl text-ocean-950 tracking-tight">
                  SI-KEPALA
                </span>
                <span className="bg-ocean-100 text-ocean-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-ocean-200 uppercase tracking-wider">
                  Cilegon
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden md:block">
                Kuesioner Keberlanjutan Perikanan Tangkap Pesisir
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-ocean-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-ocean-700 hover:bg-ocean-50/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                  {link.adminOnly && !isAdmin && (
                    <Lock className="w-2.5 h-2.5 text-slate-400 ml-0.5" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Admin Button / Indicator */}
          <div className="flex items-center gap-2">
            {isAdmin ? (
              <div className="flex items-center gap-1.5 sm:gap-2 bg-emerald-50 border border-emerald-200/80 rounded-xl p-1 sm:px-2.5 sm:py-1.5 shadow-sm">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse hidden sm:block" />
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-emerald-900 hidden sm:inline">
                    Admin Aktif
                  </span>
                </div>
                <button
                  onClick={logout}
                  className="px-2 py-1 bg-white hover:bg-rose-50 text-slate-600 hover:text-rose-600 rounded-lg text-[11px] font-bold border border-slate-200 flex items-center gap-1 transition-all"
                  title="Keluar dari sesi admin"
                >
                  <LogOut className="w-3 h-3 text-rose-500" />
                  <span className="hidden sm:inline">Keluar</span>
                </button>
              </div>
            ) : (
              <button
                onClick={openLoginModal}
                className="flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2 rounded-xl bg-slate-900 hover:bg-ocean-700 text-white text-xs font-bold shadow-sm hover:shadow-md transition-all active:scale-95 border border-slate-800"
                title="Masuk sebagai Administrator / Peneliti"
              >
                <Shield className="w-3.5 h-3.5 text-ocean-300" />
                <span>Akses Admin</span>
              </button>
            )}

            {/* Mobile Menu Toggle Button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-600 hover:text-ocean-600 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-1 shadow-xl animate-fadeIn">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
                  isActive
                    ? 'bg-ocean-600 text-white shadow-sm'
                    : 'text-slate-700 hover:bg-ocean-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </div>
                {link.adminOnly && !isAdmin && (
                  <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-semibold flex items-center gap-1">
                    <Lock className="w-2.5 h-2.5" /> Khusus Admin
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-3 mt-2 border-t border-slate-100">
            {isAdmin ? (
              <div className="flex items-center justify-between bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-emerald-900">
                    Sesi Admin Aktif
                  </span>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-1.5 bg-white text-rose-600 rounded-lg text-xs font-bold border border-slate-200 flex items-center gap-1 shadow-sm"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Keluar</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLoginModal();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-ocean-600 hover:bg-ocean-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Shield className="w-4 h-4 text-white" />
                <span>Masuk Mode Admin / Peneliti</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

