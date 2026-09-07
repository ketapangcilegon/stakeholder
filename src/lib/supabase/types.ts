export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      stakeholder_groups: {
        Row: {
          id: string
          nama: string
          target_responden: number
          deskripsi: string | null
          tone_label: string | null
          badge_color: string | null
          created_at: string
        }
        Insert: {
          id: string
          nama: string
          target_responden?: number
          deskripsi?: string | null
          tone_label?: string | null
          badge_color?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          nama?: string
          target_responden?: number
          deskripsi?: string | null
          tone_label?: string | null
          badge_color?: string | null
          created_at?: string
        }
      }
      dimensi: {
        Row: {
          id: string
          nama: string
          deskripsi: string | null
          warna: string | null
          urutan: number | null
        }
        Insert: {
          id: string
          nama: string
          deskripsi?: string | null
          warna?: string | null
          urutan?: number | null
        }
        Update: {
          id?: string
          nama?: string
          deskripsi?: string | null
          warna?: string | null
          urutan?: number | null
        }
      }
      variabel: {
        Row: {
          id: string
          id_dimensi: string
          nama: string
          deskripsi: string | null
          urutan: number | null
        }
        Insert: {
          id: string
          id_dimensi: string
          nama: string
          deskripsi?: string | null
          urutan?: number | null
        }
        Update: {
          id?: string
          id_dimensi?: string
          nama?: string
          deskripsi?: string | null
          urutan?: number | null
        }
      }
      indikator: {
        Row: {
          id: string
          id_variabel: string
          kode: string
          deskripsi: string
          urutan: number | null
        }
        Insert: {
          id: string
          id_variabel: string
          kode: string
          deskripsi: string
          urutan?: number | null
        }
        Update: {
          id?: string
          id_variabel?: string
          kode?: string
          deskripsi?: string
          urutan?: number | null
        }
      }
      pertanyaan: {
        Row: {
          id: string
          id_indikator: string
          id_stakeholder_group: string
          teks_pertanyaan: string
          skala_label: Json | null
          created_at: string
        }
        Insert: {
          id: string
          id_indikator: string
          id_stakeholder_group: string
          teks_pertanyaan: string
          skala_label?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          id_indikator?: string
          id_stakeholder_group?: string
          teks_pertanyaan?: string
          skala_label?: Json | null
          created_at?: string
        }
      }
      responden: {
        Row: {
          id: string
          user_id_google: string | null
          email: string | null
          nama: string
          instansi: string
          jabatan: string | null
          no_hp: string | null
          id_stakeholder_group: string
          is_manual_entry: boolean
          status_pengisian: string
          progress_percent: number
          total_dijawab: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id_google?: string | null
          email?: string | null
          nama: string
          instansi: string
          jabatan?: string | null
          no_hp?: string | null
          id_stakeholder_group: string
          is_manual_entry?: boolean
          status_pengisian?: string
          progress_percent?: number
          total_dijawab?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id_google?: string | null
          email?: string | null
          nama?: string
          instansi?: string
          jabatan?: string | null
          no_hp?: string | null
          id_stakeholder_group?: string
          is_manual_entry?: boolean
          status_pengisian?: string
          progress_percent?: number
          total_dijawab?: number
          created_at?: string
          updated_at?: string
        }
      }
      jawaban: {
        Row: {
          id: string
          id_responden: string
          id_pertanyaan: string
          id_indikator: string
          skor: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          id_responden: string
          id_pertanyaan: string
          id_indikator: string
          skor: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          id_responden?: string
          id_pertanyaan?: string
          id_indikator?: string
          skor?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
