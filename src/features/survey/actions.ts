import { supabase } from '@/lib/supabase/client';
import { RespondenData } from './types';

const LOCAL_KEY = 'cilegon_survey_current_respondent';
const ANSWERS_PREFIX = 'cilegon_survey_answers_';

export const SurveyActions = {
  // Save respondent to localStorage & Supabase
  async initRespondent(data: {
    nama: string;
    instansi: string;
    jabatan?: string;
    no_hp?: string;
    id_stakeholder_group: string;
    email?: string | null;
    user_id_google?: string | null;
  }): Promise<RespondenData> {
    const id = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'resp_' + Date.now();
    const respondent: RespondenData = {
      id,
      ...data,
      status_pengisian: 'draft',
      progress_percent: 0,
      total_dijawab: 0,
      created_at: new Date().toISOString()
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(respondent));
    }

    try {
      await supabase.from('responden').insert({
        id: respondent.id,
        nama: respondent.nama,
        instansi: respondent.instansi,
        jabatan: respondent.jabatan || null,
        no_hp: respondent.no_hp || null,
        id_stakeholder_group: respondent.id_stakeholder_group,
        email: respondent.email || null,
        user_id_google: respondent.user_id_google || null,
        is_manual_entry: false,
        status_pengisian: 'draft',
        progress_percent: 0,
        total_dijawab: 0
      });
    } catch (e) {
      console.warn('Supabase offline, using local storage:', e);
    }

    return respondent;
  },

  // Save single answer incrementally
  async saveSingleAnswer(
    respondenId: string,
    pertanyaanId: string,
    indikatorId: string,
    skor: number,
    totalQuestions = 42
  ): Promise<boolean> {
    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem(ANSWERS_PREFIX + respondenId);
      const answers = raw ? JSON.parse(raw) : {};
      answers[pertanyaanId] = skor;
      localStorage.setItem(ANSWERS_PREFIX + respondenId, JSON.stringify(answers));

      const count = Object.keys(answers).length;
      const pct = Math.round((count / totalQuestions) * 100);

      // Update current respondent object in localStorage
      const rRaw = localStorage.getItem(LOCAL_KEY);
      if (rRaw) {
        const rObj = JSON.parse(rRaw);
        if (rObj.id === respondenId) {
          rObj.total_dijawab = count;
          rObj.progress_percent = pct;
          localStorage.setItem(LOCAL_KEY, JSON.stringify(rObj));
        }
      }
    }

    try {
      await supabase.from('jawaban').upsert({
        id_responden: respondenId,
        id_pertanyaan: pertanyaanId,
        id_indikator: indikatorId,
        skor,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'id_responden,id_pertanyaan'
      });
    } catch (e) {
      console.warn('Supabase sync answer error:', e);
    }

    return true;
  },

  // Complete survey
  async finishSurvey(respondenId: string): Promise<boolean> {
    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem(LOCAL_KEY);
      if (raw) {
        const obj = JSON.parse(raw);
        if (obj.id === respondenId) {
          obj.status_pengisian = 'selesai';
          obj.progress_percent = 100;
          localStorage.setItem(LOCAL_KEY, JSON.stringify(obj));
        }
      }
    }

    try {
      await supabase.from('responden').update({
        status_pengisian: 'selesai',
        progress_percent: 100,
        updated_at: new Date().toISOString()
      }).eq('id', respondenId);
    } catch (e) {
      console.warn('Supabase finish survey error:', e);
    }

    return true;
  },

  getLocalRespondent(): RespondenData | null {
    if (typeof window === 'undefined') return null;
    const raw = localStorage.getItem(LOCAL_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  },

  getLocalAnswers(respondenId: string): Record<string, number> {
    if (typeof window === 'undefined') return {};
    const raw = localStorage.getItem(ANSWERS_PREFIX + respondenId);
    if (!raw) return {};
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  },

  clearSession() {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(LOCAL_KEY);
  }
};
