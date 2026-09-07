import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'SI-KEPALA CILEGON | Kuesioner Penelitian Perikanan Tangkap Berkelanjutan',
  description: 'Sistem Kuesioner & Analitik Persepsi Pemangku Kepentingan terhadap Keberlanjutan Pengelolaan Perikanan Tangkap di Kawasan Pesisir Kota Cilegon - Tesis Magister Manajemen Perikanan',
  keywords: 'Kuesioner Perikanan, Tesis Cilegon, Perikanan Tangkap, Stakeholder Analysis, Nelayan Cilegon, Selat Sunda',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-ocean-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
