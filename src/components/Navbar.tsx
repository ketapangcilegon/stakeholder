'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Anchor, 
  BarChart3, 
  FileText, 
  Printer, 
  Edit3, 
  ShieldCheck, 
  Menu, 
  X,
  BookOpen,
  Users
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Beranda', icon: FileText },
    { href: '/pilih-stakeholder', label: 'Isi Kuesioner', icon: Edit3 },
    { href: '/dashboard', label: 'Dashboard Analitik', icon: BarChart3 },
    { href: '/cetak', label: 'Mode Cetak (PDF)', icon: Printer },
    { href: '/entri-manual', label: 'Entri Manual', icon: Edit3 },
    { href: '/responden', label: 'Data Responden', icon: Users },
    { href: '/bank-pertanyaan', label: 'Bank Soal', icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-ocean-800 to-maritime-teal flex items-center justify-center text-white shadow-glow group-hover:scale-105 transition-transform">
              <Anchor className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl text-ocean-950 tracking-tight">
                  SI-KEPALA
                </span>
                <span className="bg-ocean-100 text-ocean-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-ocean-200 uppercase tracking-wider">
                  Cilegon
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Kuesioner Keberlanjutan Perikanan Tangkap Pesisir
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-ocean-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-ocean-700 hover:bg-ocean-50/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-ocean-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg animate-fadeIn">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold ${
                  isActive
                    ? 'bg-ocean-600 text-white'
                    : 'text-slate-700 hover:bg-ocean-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
