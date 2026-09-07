import { 
  DIMENSI_LIST, 
  VARIABEL_LIST, 
  INDIKATOR_LIST, 
  STAKEHOLDER_GROUPS,
  Dimensi,
  Variabel 
} from '@/config/constants';

export interface DimensionScore {
  id: string;
  nama: string;
  warna: string;
  rataRata: number;
  skorMax: number;
  kategori: string;
}

export interface VariableScore {
  id: string;
  id_dimensi: string;
  nama: string;
  rataRata: number;
  kategori: string;
}

export interface JawabanItem {
  id_responden: string;
  id_pertanyaan: string;
  id_indikator: string;
  skor: number;
}

export function getCategoryLabel(score: number): string {
  if (score >= 4.2) return "Sangat Baik / Sangat Tinggi (Sustain)";
  if (score >= 3.4) return "Baik / Cukup Berkelanjutan";
  if (score >= 2.6) return "Sedang / Perlu Penguatan";
  if (score >= 1.8) return "Kurang / Rentan Terdegradasi";
  if (score > 0) return "Sangat Buruk / Kritis";
  return "Belum Ada Data";
}

export function calculateDimensionScores(answers: JawabanItem[]): DimensionScore[] {
  return DIMENSI_LIST.map(dim => {
    const varIds = VARIABEL_LIST.filter(v => v.id_dimensi === dim.id).map(v => v.id);
    const indIds = INDIKATOR_LIST.filter(i => varIds.includes(i.id_variabel)).map(i => i.id);
    const dimAnswers = answers.filter(a => indIds.includes(a.id_indikator));
    
    const sum = dimAnswers.reduce((acc, curr) => acc + (curr.skor || 0), 0);
    const avg = dimAnswers.length > 0 ? parseFloat((sum / dimAnswers.length).toFixed(2)) : 0;

    return {
      id: dim.id,
      nama: dim.nama,
      warna: dim.warna,
      rataRata: avg,
      skorMax: 5.0,
      kategori: getCategoryLabel(avg)
    };
  });
}

export function calculateVariableScores(answers: JawabanItem[]): VariableScore[] {
  return VARIABEL_LIST.map(v => {
    const indIds = INDIKATOR_LIST.filter(i => i.id_variabel === v.id).map(i => i.id);
    const vAnswers = answers.filter(a => indIds.includes(a.id_indikator));
    const sum = vAnswers.reduce((acc, curr) => acc + (curr.skor || 0), 0);
    const avg = vAnswers.length > 0 ? parseFloat((sum / vAnswers.length).toFixed(2)) : 0;

    return {
      id: v.id,
      id_dimensi: v.id_dimensi,
      nama: v.nama,
      rataRata: avg,
      kategori: getCategoryLabel(avg)
    };
  });
}
