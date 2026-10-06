import { supabase } from '@/lib/supabase/client';
import { RespondenData } from './types';
import { QUESTION_BANK } from '@/data/questionBank';
import { InstrumentService } from '@/lib/instrumentService';

const LOCAL_KEY = 'cilegon_survey_current_respondent';
const ANSWERS_PREFIX = 'cilegon_survey_answers_';
/** Antrean responden yang datanya belum terkonfirmasi tersimpan di server. */
const OUTBOX_KEY = 'cilegon_survey_outbox_v1';
/** Arsip biodata per responden agar tidak hilang saat sesi direset ("Isi Kuesioner Baru"). */
const ARCHIVE_PREFIX = 'cilegon_survey_respondent_';
/** Responden yang sudah selesai & terkonfirmasi tersimpan di server (tidak perlu dikirim ulang). */
const DONE_KEY = 'cilegon_survey_synced_done_v1';

export interface SyncResult {
  ok: boolean;
  error?: string;
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * UUID v4 yang aman untuk browser lama (HP nelayan dengan Android/Chrome versi lama
 * tidak punya crypto.randomUUID). Kolom `responden.id` bertipe uuid, sehingga ID
 * berformat lain (mis. 'resp_123') akan DITOLAK database.
 */
export function generateUUID(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  const bytes = new Uint8Array(16);
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256);
  }
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

const isBrowser = () => typeof window !== 'undefined';

function readJSON<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key: string, value: unknown) {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('[Survey] Gagal menulis localStorage:', e);
  }
}

function getOutbox(): string[] {
  return readJSON<string[]>(OUTBOX_KEY, []);
}

function addToOutbox(id: string) {
  const box = getOutbox();
  if (!box.includes(id)) {
    box.push(id);
    writeJSON(OUTBOX_KEY, box);
  }
}

function removeFromOutbox(id: string) {
  writeJSON(OUTBOX_KEY, getOutbox().filter(x => x !== id));
}

function markDone(id: string) {
  const done = readJSON<string[]>(DONE_KEY, []);
  if (!done.includes(id)) {
    done.push(id);
    writeJSON(DONE_KEY, done.slice(-200));
  }
}

function isDone(id: string): boolean {
  return readJSON<string[]>(DONE_KEY, []).includes(id);
}

function archiveRespondent(resp: RespondenData) {
  writeJSON(ARCHIVE_PREFIX + resp.id, resp);
}

function getArchivedRespondent(id: string): RespondenData | null {
  return readJSON<RespondenData | null>(ARCHIVE_PREFIX + id, null);
}

/** Normalisasi map jawaban (format lama menyimpan objek {skor}, format baru angka). */
function normalizeAnswers(raw: Record<string, any>): Record<string, number> {
  const out: Record<string, number> = {};
  Object.entries(raw || {}).forEach(([qId, val]) => {
    const skor = typeof val === 'number' ? val : Number(val?.skor);
    if (skor >= 1 && skor <= 5) out[qId] = skor;
  });
  return out;
}

function toRespondenRow(r: RespondenData) {
  return {
    id: r.id,
    nama: r.nama,
    instansi: r.instansi || '-',
    jabatan: r.jabatan || null,
    no_hp: r.no_hp || null,
    id_stakeholder_group: r.id_stakeholder_group,
    usia: r.usia || null,
    pangkalan_nelayan: r.pangkalan_nelayan || null,
    kelurahan: r.kelurahan || null,
    kecamatan: r.kecamatan || null,
    kub_nelayan: r.kub_nelayan || null,
    alamat: r.alamat || null,
    email: r.email || null,
    user_id_google: r.user_id_google || null,
    is_manual_entry: r.is_manual_entry || false,
    status_pengisian: r.status_pengisian || 'draft',
    progress_percent: r.progress_percent || 0,
    total_dijawab: r.total_dijawab || 0,
    created_at: r.created_at || new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
}

function errMsg(e: any): string {
  return e?.message || e?.error_description || String(e);
}

export const SurveyActions = {
  // Save respondent to localStorage & Supabase
  // CATATAN: Sengaja TIDAK ada pembatasan kuota target. Responden tetap diterima meskipun
  // target kelompok sudah tercapai (sebagai data cadangan). Status surplus hanya ditampilkan di dashboard admin.
  async initRespondent(data: {
    nama: string;
    instansi: string;
    jabatan?: string;
    no_hp?: string;
    id_stakeholder_group: string;
    usia?: number | null;
    pangkalan_nelayan?: string | null;
    kelurahan?: string | null;
    kecamatan?: string | null;
    kub_nelayan?: string | null;
    alamat?: string | null;
    email?: string | null;
    user_id_google?: string | null;
    is_manual_entry?: boolean;
  }): Promise<RespondenData & { synced: boolean }> {
    const respondent: RespondenData = {
      id: generateUUID(),
      ...data,
      status_pengisian: 'draft',
      progress_percent: 0,
      total_dijawab: 0,
      created_at: new Date().toISOString()
    };

    // 1. Simpan lokal DULU (anti-hilang), lalu masukkan ke antrean sinkron
    writeJSON(LOCAL_KEY, respondent);
    archiveRespondent(respondent);
    addToOutbox(respondent.id);

    // 2. Kirim ke server. supabase-js TIDAK melempar exception saat gagal,
    //    jadi `error` WAJIB diperiksa (inilah penyebab data hilang diam-diam sebelumnya).
    const res = await this.pushRespondent(respondent);
    return { ...respondent, synced: res.ok };
  },

  /** Upsert satu responden + seluruh jawabannya ke Supabase. Idempoten. */
  async pushRespondent(resp: RespondenData): Promise<SyncResult> {
    try {
      const { error: rErr } = await supabase
        .from('responden')
        .upsert(toRespondenRow(resp), { onConflict: 'id' });
      if (rErr) {
        console.error('[Survey] Gagal menyimpan responden ke server:', rErr);
        return { ok: false, error: rErr.message };
      }

      const answers = this.getLocalAnswers(resp.id);
      const allQ = typeof window !== 'undefined' ? InstrumentService.getInstrumentData().questions : QUESTION_BANK;
      const rows = Object.entries(answers).map(([qId, skor]) => {
        const q = allQ.find(x => x.id === qId) || QUESTION_BANK.find(x => x.id === qId);
        return {
          id_responden: resp.id,
          id_pertanyaan: qId,
          id_indikator: q ? q.id_indikator : null,
          skor,
          updated_at: new Date().toISOString()
        };
      });

      if (rows.length > 0) {
        const { error: aErr } = await supabase
          .from('jawaban')
          .upsert(rows, { onConflict: 'id_responden,id_pertanyaan' });
        if (aErr) {
          console.error('[Survey] Gagal menyimpan jawaban ke server:', aErr);
          return { ok: false, error: aErr.message };
        }
      }

      // Hanya dikeluarkan dari antrean jika survei sudah selesai & terkonfirmasi server
      if (resp.status_pengisian === 'selesai') {
        removeFromOutbox(resp.id);
        markDone(resp.id);
      }
      return { ok: true };
    } catch (e) {
      console.error('[Survey] Server tidak terjangkau:', e);
      return { ok: false, error: errMsg(e) };
    }
  },

  // Save single answer incrementally
  async saveSingleAnswer(
    respondenId: string,
    pertanyaanId: string,
    indikatorId: string,
    skor: number,
    totalQuestions = 42
  ): Promise<boolean> {
    let resp: RespondenData | null = null;

    if (isBrowser()) {
      const answers = this.getLocalAnswers(respondenId);
      answers[pertanyaanId] = skor;
      writeJSON(ANSWERS_PREFIX + respondenId, answers);

      const count = Object.keys(answers).length;
      const pct = Math.round((count / totalQuestions) * 100);

      // Update current respondent object in localStorage
      const rObj = this.getLocalRespondent();
      if (rObj && rObj.id === respondenId) {
        rObj.total_dijawab = count;
        rObj.progress_percent = pct;
        writeJSON(LOCAL_KEY, rObj);
        archiveRespondent(rObj);
        resp = rObj;
      }
      addToOutbox(respondenId);
    }

    try {
      const { error } = await supabase.from('jawaban').upsert({
        id_responden: respondenId,
        id_pertanyaan: pertanyaanId,
        id_indikator: indikatorId,
        skor,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'id_responden,id_pertanyaan'
      });

      if (error) {
        // Paling sering: baris responden belum ada di server (FK). Kirim ulang paket lengkap.
        console.warn('[Survey] Upsert jawaban gagal, mencoba sinkron penuh:', error.message);
        if (resp) return (await this.pushRespondent(resp)).ok;
        return false;
      }

      if (resp) {
        await supabase
          .from('responden')
          .update({
            total_dijawab: resp.total_dijawab,
            progress_percent: resp.progress_percent,
            updated_at: new Date().toISOString()
          })
          .eq('id', respondenId);
      }
      return true;
    } catch (e) {
      console.warn('[Survey] Supabase sync answer error:', e);
      return false;
    }
  },

  // Complete survey — mengembalikan status sinkron yang JUJUR ke UI
  async finishSurvey(respondenId: string): Promise<SyncResult> {
    let resp = this.getLocalRespondent();
    if (!resp || resp.id !== respondenId) resp = getArchivedRespondent(respondenId);

    if (!resp) {
      return { ok: false, error: 'Data identitas responden tidak ditemukan di perangkat.' };
    }

    resp.status_pengisian = 'selesai';
    resp.progress_percent = 100;
    resp.total_dijawab = Object.keys(this.getLocalAnswers(respondenId)).length;
    writeJSON(LOCAL_KEY, resp);
    archiveRespondent(resp);
    addToOutbox(respondenId);

    return this.pushRespondent(resp);
  },

  /**
   * Kirim ulang SEMUA data yang tertahan di perangkat ini.
   * Dipanggil otomatis setiap kali aplikasi dibuka & saat koneksi kembali online.
   * Ini juga memulihkan data responden yang terlanjur mengisi saat database bermasalah,
   * cukup dengan membuka kembali tautan kuesioner di HP/browser yang sama.
   */
  async syncPending(): Promise<{ synced: number; failed: number; lastError?: string }> {
    if (!isBrowser()) return { synced: 0, failed: 0 };

    const outbox = getOutbox();
    const ids = new Set<string>(outbox);
    const current = this.getLocalRespondent();
    // Sesi aktif ikut dikirim KECUALI sudah terkonfirmasi selesai di server
    // (agar data yang sudah dihapus admin tidak muncul kembali).
    if (current && (outbox.includes(current.id) || !isDone(current.id))) ids.add(current.id);

    let synced = 0;
    let failed = 0;
    let lastError: string | undefined;

    for (const id of Array.from(ids)) {
      let resp = current && current.id === id ? current : getArchivedRespondent(id);
      if (!resp) {
        removeFromOutbox(id);
        continue;
      }

      // Migrasi ID lama non-UUID (mis. 'resp_1728...') agar diterima kolom uuid
      if (!UUID_RE.test(resp.id)) {
        const oldId = resp.id;
        const newId = generateUUID();
        const oldAnswers = this.getLocalAnswers(oldId);
        resp = { ...resp, id: newId };
        writeJSON(ANSWERS_PREFIX + newId, oldAnswers);
        archiveRespondent(resp);
        if (current && current.id === oldId) writeJSON(LOCAL_KEY, resp);
        removeFromOutbox(oldId);
        addToOutbox(newId);
      }

      const answers = this.getLocalAnswers(resp.id);
      // Responden yang belum menjawab satu pun & tidak ada biodata bermakna tetap dikirim:
      // biodata sendiri adalah data penelitian (tingkat respons).
      resp.total_dijawab = Object.keys(answers).length;

      const res = await this.pushRespondent(resp);
      if (res.ok) synced++;
      else {
        failed++;
        lastError = res.error;
      }
    }

    return { synced, failed, lastError };
  },

  /** Jumlah responden di perangkat ini yang belum terkonfirmasi terkirim. */
  getPendingCount(): number {
    return getOutbox().length;
  },

  /**
   * PEMULIHAN: pindai SELURUH jejak kuesioner di perangkat ini.
   * Termasuk set jawaban "yatim" (biodata sudah terhapus karena sesi direset),
   * yang kelompok stakeholder-nya disimpulkan dari ID soal (mis. Q_IND_01_pelaku_usaha).
   */
  scanLocalData(): Array<{
    id: string;
    respondent: RespondenData | null;
    answers: Record<string, number>;
    answerCount: number;
    inferredGroup: string | null;
  }> {
    if (!isBrowser()) return [];
    const ids = new Set<string>();
    const current = this.getLocalRespondent();
    if (current) ids.add(current.id);
    getOutbox().forEach(id => ids.add(id));
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i) || '';
      if (k.startsWith(ANSWERS_PREFIX)) ids.add(k.slice(ANSWERS_PREFIX.length));
      if (k.startsWith(ARCHIVE_PREFIX)) ids.add(k.slice(ARCHIVE_PREFIX.length));
    }

    return Array.from(ids).map(id => {
      const respondent = current && current.id === id ? current : getArchivedRespondent(id);
      const answers = this.getLocalAnswers(id);
      let inferredGroup: string | null = respondent?.id_stakeholder_group || null;
      if (!inferredGroup) {
        const firstQ = Object.keys(answers)[0];
        const allQ = typeof window !== 'undefined' ? InstrumentService.getInstrumentData().questions : QUESTION_BANK;
        const q = firstQ ? (allQ.find(x => x.id === firstQ) || QUESTION_BANK.find(x => x.id === firstQ)) : undefined;
        inferredGroup = q ? q.id_stakeholder_group : null;
      }
      return { id, respondent, answers, answerCount: Object.keys(answers).length, inferredGroup };
    }).filter(x => x.respondent || x.answerCount > 0);
  },

  /** Pasangkan kembali biodata ke set jawaban yatim, lalu kirim ke server. */
  async adoptOrphanAnswers(
    orphanId: string,
    biodata: { nama: string; instansi: string; no_hp?: string; id_stakeholder_group: string }
  ): Promise<SyncResult> {
    const answers = this.getLocalAnswers(orphanId);
    const id = UUID_RE.test(orphanId) ? orphanId : generateUUID();
    if (id !== orphanId) writeJSON(ANSWERS_PREFIX + id, answers);
    const allQ = typeof window !== 'undefined' ? InstrumentService.getInstrumentData().questions : QUESTION_BANK;
    const total = allQ.filter(q => q.id_stakeholder_group === biodata.id_stakeholder_group).length || 42;
    const count = Object.keys(answers).length;
    const resp: RespondenData = {
      id,
      nama: biodata.nama,
      instansi: biodata.instansi || '-',
      no_hp: biodata.no_hp,
      id_stakeholder_group: biodata.id_stakeholder_group,
      status_pengisian: count >= total ? 'selesai' : 'draft',
      progress_percent: Math.min(100, Math.round((count / total) * 100)),
      total_dijawab: count,
      created_at: new Date().toISOString()
    };
    archiveRespondent(resp);
    addToOutbox(id);
    return this.pushRespondent(resp);
  },

  getLocalRespondent(): RespondenData | null {
    return readJSON<RespondenData | null>(LOCAL_KEY, null);
  },

  getLocalAnswers(respondenId: string): Record<string, number> {
    return normalizeAnswers(readJSON<Record<string, any>>(ANSWERS_PREFIX + respondenId, {}));
  },

  clearSession() {
    if (!isBrowser()) return;
    // Biodata tetap diarsip & antrean outbox TIDAK dihapus, sehingga data yang belum
    // terkirim tetap akan disinkronkan otomatis.
    const cur = this.getLocalRespondent();
    if (cur) archiveRespondent(cur);
    localStorage.removeItem(LOCAL_KEY);
  }
};
