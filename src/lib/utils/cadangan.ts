import { STAKEHOLDER_GROUPS } from '@/config/constants';

/**
 * Menentukan responden mana yang berstatus "cadangan" (melebihi target kelompok).
 *
 * Aturan: per kelompok stakeholder, responden yang sudah selesai (status_pengisian === 'selesai')
 * diurutkan berdasarkan waktu masuk (created_at, paling awal dulu). Sebanyak `target` pertama
 * dianggap data utama, sisanya dianggap cadangan.
 *
 * created_at dipakai (bukan updated_at) agar urutan stabil dan tidak berubah saat admin
 * mengedit jawaban. Jika data utama dihapus, cadangan paling awal otomatis naik menjadi utama.
 *
 * Hanya untuk tampilan admin — tidak pernah ditampilkan ke responden.
 */
export function getCadanganIds(
  respondents: { id: string; id_stakeholder_group: string; status_pengisian?: string; created_at?: string }[]
): Set<string> {
  const result = new Set<string>();

  for (const group of STAKEHOLDER_GROUPS) {
    const completed = respondents
      .filter(r => r.id_stakeholder_group === group.id && r.status_pengisian === 'selesai')
      .sort((a, b) => {
        const ta = a.created_at ? new Date(a.created_at).getTime() : 0;
        const tb = b.created_at ? new Date(b.created_at).getTime() : 0;
        return ta - tb;
      });

    completed.slice(group.target).forEach(r => result.add(r.id));
  }

  return result;
}
