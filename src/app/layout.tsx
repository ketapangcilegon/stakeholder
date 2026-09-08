import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AdminAuthProvider } from '@/context/AdminAuthContext';
import AdminLoginModal from '@/components/AdminLoginModal';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'STAKEHOLDER CILEGON | Pengelolaan Perikanan Tangkap Berkelanjutan',
  description: 'Pengelolaan Perikanan Tangkap Berkelanjutan di Kota Cilegon: Strategi Kebijakan Partisipatif Berbasis Persepsi dan Peran Stakeholder - Penelitian Tesis Magister Manajemen Perikanan',
  keywords: 'Kuesioner Perikanan, Tesis Cilegon, Perikanan Tangkap, Stakeholder Analysis, Nelayan Cilegon, Selat Sunda',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-ocean-500 selection:text-white">
        <AdminAuthProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <AdminLoginModal />
        </AdminAuthProvider>
      </body>
    </html>
  );
}

