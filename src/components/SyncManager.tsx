'use client';

import { useEffect } from 'react';
import { SurveyActions } from '@/features/survey/actions';

/**
 * Pengirim ulang otomatis data kuesioner yang tertahan di perangkat.
 * - Berjalan setiap aplikasi dibuka (halaman apa pun).
 * - Berjalan lagi saat koneksi kembali online.
 * - Mencoba ulang berkala selama masih ada antrean.
 * Tidak menampilkan UI apa pun; hanya mencatat ke console.
 */
export default function SyncManager() {
  useEffect(() => {
    let running = false;
    let cancelled = false;

    const run = async () => {
      if (running || cancelled) return;
      running = true;
      try {
        const res = await SurveyActions.syncPending();
        if (res.synced || res.failed) {
          console.info('[SyncManager] Sinkron data kuesioner:', res);
        }
      } catch (e) {
        console.warn('[SyncManager] Sinkron gagal:', e);
      } finally {
        running = false;
      }
    };

    run();
    const onOnline = () => run();
    window.addEventListener('online', onOnline);
    const timer = window.setInterval(() => {
      if (SurveyActions.getPendingCount() > 0) run();
    }, 45000);

    return () => {
      cancelled = true;
      window.removeEventListener('online', onOnline);
      window.clearInterval(timer);
    };
  }, []);

  return null;
}
