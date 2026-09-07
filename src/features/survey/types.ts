import { PertanyaanItem, StakeholderGroup } from '@/config/constants';

export interface RespondenData {
  id: string;
  nama: string;
  instansi: string;
  jabatan?: string;
  no_hp?: string;
  id_stakeholder_group: string;
  email?: string | null;
  user_id_google?: string | null;
  is_manual_entry?: boolean;
  status_pengisian: 'draft' | 'selesai';
  progress_percent?: number;
  total_dijawab?: number;
  created_at?: string;
}

export interface JawabanMap {
  [pertanyaanId: string]: number;
}
