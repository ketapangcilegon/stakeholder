# -*- coding: utf-8 -*-
"""
Builder for revised questionBank.ts aligned with Proposal_tesis.docx:
"PENGELOLAAN PERIKANAN TANGKAP BERKELANJUTAN DI KOTA CILEGON:
 STRATEGI KEBIJAKAN PARTISIPATIF BERBASIS PERSEPSI DAN PERAN STAKEHOLDER"

Stakeholders:
1. pemda: Pemerintah Daerah (DKPP Kota Cilegon, BAPPERIDA, Dinas Lingkungan Hidup)
2. pelaku_usaha: Pelaku Usaha Perikanan Tangkap (Ketua KUB nelayan, pemilik/juragan kapal, pedagang pengumpul hasil tangkapan)
3. masyarakat_pesisir: Masyarakat Pesisir (Perwakilan kelurahan pesisir, pelaku usaha wisata bahari)
4. akademisi_lsm: Akademisi & Organisasi Nelayan (Perguruan tinggi setempat: UNTIRTA, organisasi nelayan: HNSI Kota Cilegon)
5. industri: Industri Sekitar Kawasan Pesisir (Manajemen CSR/HSE industri manufaktur, petrokimia, kepelabuhanan, PLTU)
"""

import os

header = """import { PertanyaanItem } from './questionnaireData';

export const LIKERT_LABELS = {
  standard: {
    1: "Sangat Tidak Setuju / Sangat Buruk",
    2: "Tidak Setuju / Kurang Baik",
    3: "Cukup / Netral / Ragu-ragu",
    4: "Setuju / Baik",
    5: "Sangat Setuju / Sangat Baik"
  },
  frequency: {
    1: "Tidak Pernah (0%)",
    2: "Jarang Sekali",
    3: "Kadang-kadang",
    4: "Sering",
    5: "Sangat Sering / Selalu Aktif"
  },
  influence: {
    1: "Sangat Rendah / Tidak Berpengaruh",
    2: "Rendah",
    3: "Sedang / Cukup",
    4: "Tinggi / Berpengaruh Kuat",
    5: "Sangat Tinggi / Sangat Menentukan"
  },
  interest: {
    1: "Sangat Rendah / Tidak Berkepentingan",
    2: "Rendah",
    3: "Sedang",
    4: "Tinggi / Sangat Berkepentingan",
    5: "Sangat Tinggi / Vital & Menentukan Hidup"
  }
};

export const QUESTION_BANK: PertanyaanItem[] = [
"""

footer = """];

export function getQuestionsForStakeholder(stakeholderId: string): PertanyaanItem[] {
  return QUESTION_BANK.filter(q => q.id_stakeholder_group === stakeholderId);
}
"""

print("Writing builder script...")
