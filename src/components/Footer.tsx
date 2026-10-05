import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#06335e] to-[#02182e] text-slate-400 py-6 border-t border-sky-900 mt-12 text-center text-xs">
      <div className="max-w-7xl mx-auto px-4">
        <p>© {new Date().getFullYear()} Penelitian Tesis Magister Manajemen Perikanan • Universitas Terbuka • Kota Cilegon, Banten.</p>
      </div>
    </footer>
  );
}
