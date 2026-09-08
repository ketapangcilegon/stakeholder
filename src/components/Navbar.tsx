'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAdminAuth } from '@/context/AdminAuthContext';
import { 
  Fish, 
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

function MarineEmblem({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 36 36" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="17" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" fill="rgba(255,255,255,0.1)" />
      {/* Leaping Fish */}
      <path 
        d="M10 16c1.2-3.5 4.5-5.5 8-5.5 4 0 7 2.5 8 5.5-1.2 3.5-4.5 5.5-8 5.5-3.5 0-6.8-2-8-5.5Z" 
        stroke="#ffffff" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle cx="21" cy="14.5" r="0.8" fill="#ffffff" />
      {/* Tail */}
      <path d="M10 16L6 13.5v5L10 16Z" fill="#ffffff" />
      {/* Leaf / Sprout green accent */}
      <path 
        d="M20 22c2-1 4.5-.5 5 1.5-1.5 2-4 2-5-1.5Z" 
        fill="#34d399" 
        stroke="#10b981" 
        strokeWidth="0.8"
      />
      {/* Ocean Waves */}
      <path 
        d="M8 24c2.5-1.5 5.5 1.5 8 0s5.5-1.5 8 0" 
        stroke="#38bdf8" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
      <path 
        d="M10 27c2-1 4 1 6 0s4-1 6 0" 
        stroke="rgba(56,189,248,0.7)" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
      />
    </svg>
  );
}

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
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#053b6d] via-[#084c8d] to-[#0b5c9e] text-white shadow-md transition-all border-b border-sky-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Brand Header matching Mockup */}
          <Link href="/" className="flex items-center gap-3 group py-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <MarineEmblem className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <div>
              <span className="text-[9px] sm:text-[10px] font-bold text-sky-200 uppercase tracking-widest block leading-tight">
                KUESIONER PENELITIAN TESIS
              </span>
              <span className="font-black text-sm sm:text-base lg:text-lg text-white tracking-tight block leading-tight">
                Magister Manajemen Perikanan
              </span>
              <span className="text-[10px] sm:text-[11px] text-sky-100/90 font-medium block leading-tight">
                Universitas Terbuka
              </span>
            </div>
          </Link>

          {/* Desktop Tagline from Mockup */}
          <div className="hidden lg:flex items-center gap-3 text-right">
            <div className="border-r border-sky-400/30 pr-4">
              <p className="text-[11px] italic text-sky-100 font-medium leading-tight">
                Bersama jaga laut,
              </p>
              <p className="text-[11px] italic text-sky-200 font-medium leading-tight">
                untuk masa depan perikanan yang berkelanjutan
              </p>
            </div>
            {/* Wave Glyphs */}
            <div className="text-sky-300 flex flex-col items-center gap-0.5 opacity-80" title="Simbol Laut Berkelanjutan">
              <svg className="w-6 h-3.5" viewBox="0 0 24 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M2 3c2.5-2 5.5 2 8 0s5.5-2 8 0 4 0 4 0" />
                <path d="M2 7c2.5-2 5.5 2 8 0s5.5-2 8 0 4 0 4 0" />
              </svg>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/10 p-1 rounded-xl backdrop-blur-sm border border-white/15">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-white text-[#084c8d] shadow-sm font-black'
                      : 'text-sky-100 hover:text-white hover:bg-white/15'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#084c8d]' : 'text-sky-200'}`} />
                  <span>{link.label}</span>
                  {link.adminOnly && !isAdmin && (
                    <Lock className="w-2.5 h-2.5 text-sky-300 ml-0.5" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Admin Button / Indicator */}
          <div className="flex items-center gap-2">
            {isAdmin ? (
              <div className="flex items-center gap-1.5 sm:gap-2 bg-emerald-500/20 border border-emerald-400/40 rounded-xl p-1 sm:px-2.5 sm:py-1.5 shadow-sm text-white">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse hidden sm:block" />
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span className="text-xs font-bold text-white hidden sm:inline">
                    Admin Aktif
                  </span>
                </div>
                <button
                  onClick={logout}
                  className="px-2 py-1 bg-white hover:bg-rose-50 text-slate-700 hover:text-rose-600 rounded-lg text-[11px] font-bold border border-slate-200 flex items-center gap-1 transition-all"
                  title="Keluar dari sesi admin"
                >
                  <LogOut className="w-3 h-3 text-rose-500" />
                  <span className="hidden sm:inline">Keluar</span>
                </button>
              </div>
            ) : (
              <button
                onClick={openLoginModal}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/35 border border-white/40 overflow-hidden flex items-center justify-center shadow-xs transition-all active:scale-95 group p-0.5"
                title="Akses Administrator"
                aria-label="Akses Admin"
              >
                <img 
                  src="/admin.png" 
                  alt="Admin" 
                  className="w-full h-full object-cover rounded-full transition-transform group-hover:scale-110" 
                />
              </button>
            )}

            {/* Mobile Menu Toggle Button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-sky-100 hover:text-white hover:bg-white/15 focus:outline-none"
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
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 border border-slate-300 transition-all"
              >
                <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-300 flex items-center justify-center flex-shrink-0">
                  <img src="/admin.png" alt="Admin" className="w-full h-full object-cover" />
                </div>
                <span>Akses Admin</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

