'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { SurveyActions } from '@/features/survey/actions';
import { STAKEHOLDER_GROUPS } from '@/config/constants';
import { RespondenData } from '@/features/survey/types';
import {
  LifeBuoy,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Search,
  Copy,
  SendHorizonal,
  Smartphone
} from 'lucide-react';

type ScanItem = {
  id: string;
  respondent: RespondenData | null;
  answers: Record<string, number>;
  answerCount: number;
  inferredGroup: string | null;
};

const groupName = (id: string | null) =>
  (STAKEHOLDER_GROUPS.find(g => g.id === id)?.nama || id || 'Tidak diketahui').split('(')[0].trim();

/**
 * Halaman PEMULIHAN DATA.
 * Responden yang sudah mengisi saat database bermasalah cukup membuka halaman ini
 * dari HP & browser yang SAMA. Jawaban yang tersimpan di perangkat akan dikirim ulang.
 */
export default function PulihkanPage() {
  const [items, setItems] = useState<ScanItem[] | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [orphanForm, setOrphanForm] = useState<Record<string, { nama: string; instansi: string; no_hp: string }>>({});
  const [copied, setCopied] = useState(false);

  const scan = () => setItems(SurveyActions.scanLocalData());

  const sendAll = async () => {
    setStatus('sending');
    setErrorMsg('');
    const res = await SurveyActions.syncPending();
    scan();
    if (res.failed > 0) {
      setStatus('error');
      setErrorMsg(res.lastError || 'Server belum dapat menerima data.');
    } else {
      setStatus('ok');
    }
  };

  useEffect(() => {
    const found = SurveyActions.scanLocalData();
    setItems(found);
    if (found.some(i => i.respondent)) sendAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendOrphan = async (item: ScanItem) => {
    const f = orphanForm[item.id];
    if (!f?.nama?.trim()) {
      alert('Mohon isi nama Anda terlebih dahulu.');
      return;
    }
    setStatus('sending');
    const res = await SurveyActions.adoptOrphanAnswers(item.id, {
      nama: f.nama.trim(),
      instansi: f.instansi.trim() || '-',
      no_hp: f.no_hp.trim() || undefined,
      id_stakeholder_group: item.inferredGroup || 'masyarakat_pesisir'
    });
    scan();
    setStatus(res.ok ? 'ok' : 'error');
    if (!res.ok) setErrorMsg(res.error || 'Gagal mengirim.');
  };

  const copyData = async () => {
    const payload = JSON.stringify(
      (items || []).map(i => ({ biodata: i.respondent, kelompok: i.inferredGroup, jawaban: i.answers })),
    );
    try {
      await navigator.clipboard.writeText('DATA_KUESIONER_CILEGON:' + payload);
      setCopied(true);
    } catch {
      prompt('Salin teks berikut lalu kirim ke peneliti via WhatsApp:', 'DATA_KUESIONER_CILEGON:' + payload);
    }
  };

  const withBio = (items || []).filter(i => i.respondent);
  const orphans = (items || []).filter(i => !i.respondent && i.answerCount > 0);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-14 space-y-6">
      <div className="text-center space-y-3">
        <div className="w-16 h-16 rounded-2xl bg-ocean-100 text-ocean-700 flex items-center justify-center mx-auto shadow-glow">
          <LifeBuoy className="w-9 h-9" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Pemulihan Data Kuesioner</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Terima kasih telah mengisi kuesioner. Karena kendala teknis di server, sebagian jawaban belum diterima peneliti.
          Halaman ini akan <strong>mengirim ulang jawaban yang masih tersimpan di HP Anda</strong> — Anda tidak perlu mengisi ulang.
        </p>
      </div>

      {items === null && (
        <div className="p-6 bg-white rounded-2xl border text-center text-sm text-slate-500">
          <Search className="w-6 h-6 mx-auto mb-2 animate-pulse" /> Memeriksa data di perangkat...
        </div>
      )}

      {items !== null && items.length === 0 && (
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2 text-sm">
          <p className="font-bold flex items-center gap-2"><Smartphone className="w-5 h-5" /> Tidak ditemukan data kuesioner di browser ini.</p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>Pastikan Anda membuka halaman ini dari <strong>HP yang sama</strong> seperti saat mengisi.</li>
            <li>Jika dulu Anda membuka tautan dari <strong>WhatsApp</strong>, buka tautan pemulihan ini juga langsung dari WhatsApp (bukan dari Chrome), dan sebaliknya.</li>
            <li>Jika riwayat browser sudah dihapus, mohon maaf data tidak dapat dipulihkan. Silakan <Link href="/pilih-stakeholder" className="underline font-semibold">isi ulang kuesioner</Link>.</li>
          </ul>
        </div>
      )}

      {withBio.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-3">
          <h2 className="font-bold text-slate-800 text-sm">Data ditemukan di perangkat ini:</h2>
          {withBio.map(i => (
            <div key={i.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-0.5">
              <p className="font-bold text-slate-900 text-sm">{i.respondent!.nama}</p>
              <p className="text-slate-600">{i.respondent!.instansi} • {groupName(i.inferredGroup)}</p>
              <p className="text-slate-500">
                {i.answerCount} jawaban • status: <strong>{i.respondent!.status_pengisian === 'selesai' ? 'Selesai' : 'Belum selesai'}</strong>
              </p>
            </div>
          ))}
        </div>
      )}

      {orphans.map(i => (
        <div key={i.id} className="bg-white rounded-2xl border-2 border-amber-300 shadow-sm p-5 space-y-3">
          <p className="text-sm font-bold text-slate-900">
            Ditemukan {i.answerCount} jawaban ({groupName(i.inferredGroup)}) tanpa identitas.
          </p>
          <p className="text-xs text-slate-600">Mohon isi nama Anda agar jawaban ini dapat dicatat peneliti.</p>
          {(['nama', 'instansi', 'no_hp'] as const).map(field => (
            <input
              key={field}
              id={`orphan-${field}-${i.id}`}
              placeholder={field === 'nama' ? 'Nama lengkap *' : field === 'instansi' ? 'Instansi / Pangkalan / Alamat' : 'No. HP (opsional)'}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500"
              value={orphanForm[i.id]?.[field] || ''}
              onChange={e =>
                setOrphanForm(prev => ({
                  ...prev,
                  [i.id]: { nama: '', instansi: '', no_hp: '', ...prev[i.id], [field]: e.target.value }
                }))
              }
            />
          ))}
          <button
            onClick={() => sendOrphan(i)}
            className="w-full py-3 rounded-xl bg-ocean-600 hover:bg-ocean-700 text-white font-bold text-sm flex items-center justify-center gap-2"
          >
            <SendHorizonal className="w-4 h-4" /> Kirim Jawaban Ini
          </button>
        </div>
      ))}

      {status === 'sending' && (
        <div className="p-4 rounded-2xl bg-ocean-50 border border-ocean-200 text-ocean-900 text-sm flex items-center gap-2">
          <RefreshCw className="w-5 h-5 animate-spin" /> Mengirim data ke server penelitian...
        </div>
      )}

      {status === 'ok' && (
        <div className="p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 text-sm space-y-1">
          <p className="font-black flex items-center gap-2 text-base"><CheckCircle2 className="w-6 h-6" /> Data berhasil diterima server!</p>
          <p>Terima kasih banyak. Mohon <strong>screenshot layar ini</strong> dan kirimkan ke peneliti sebagai konfirmasi.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="p-5 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-900 text-sm space-y-3">
          <p className="font-black flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> Server belum dapat menerima data.</p>
          <p className="text-xs">Data Anda tetap aman di HP ini. Mohon <strong>jangan hapus riwayat browser</strong> dan coba lagi nanti, atau salin data lalu kirim ke peneliti via WhatsApp.</p>
          <p className="text-[11px] font-mono break-all text-rose-700">{errorMsg}</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <button onClick={sendAll} className="flex-1 py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs flex items-center justify-center gap-2">
              <RefreshCw className="w-4 h-4" /> Coba Lagi
            </button>
            <button onClick={copyData} className="flex-1 py-2.5 rounded-xl border border-rose-300 bg-white font-bold text-xs flex items-center justify-center gap-2">
              <Copy className="w-4 h-4" /> {copied ? 'Tersalin! Tempel di WhatsApp' : 'Salin Data untuk WhatsApp'}
            </button>
          </div>
        </div>
      )}

      {withBio.length > 0 && status === 'idle' && (
        <button onClick={sendAll} className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm">
          Kirim Data Saya ke Peneliti
        </button>
      )}
    </div>
  );
}
