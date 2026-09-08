import { supabase } from './supabaseClient';
import { 
  STAKEHOLDER_GROUPS, 
  DIMENSI_LIST, 
  VARIABEL_LIST, 
  INDIKATOR_LIST,
  StakeholderGroup,
  Dimensi,
  Variabel,
  Indikator,
  PertanyaanItem
} from '../data/questionnaireData';
import { QUESTION_BANK, getQuestionsForStakeholder } from '../data/questionBank';

export interface RespondenRecord {
  id: string;
  user_id_google?: string | null;
  email?: string | null;
  nama: string;
  instansi: string;
  jabatan?: string | null;
  no_hp?: string | null;
  id_stakeholder_group: string;
  is_manual_entry?: boolean;
  status_pengisian: 'draft' | 'selesai';
  progress_percent?: number;
  total_dijawab?: number;
  created_at?: string;
  updated_at?: string;
}

export interface JawabanRecord {
  id?: string;
  id_responden: string;
  id_pertanyaan: string;
  id_indikator: string;
  skor: number;
  created_at?: string;
}

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

export interface StakeholderProgress {
  group: StakeholderGroup;
  target: number;
  terisi: number;
  persentase: number;
  skorDimensi: Record<string, number>;
}

// LocalStorage helpers for offline resiliency
const LOCAL_STORAGE_KEY_PREFIX = 'cilegon_survey_';

export const SurveyService = {
  // 1. Get Stakeholder Groups
  getStakeholderGroups(): StakeholderGroup[] {
    return STAKEHOLDER_GROUPS;
  },

  getStakeholderGroup(id: string): StakeholderGroup | undefined {
    return STAKEHOLDER_GROUPS.find(g => g.id === id);
  },

  // 2. Get Dimensions, Variables, Indicators
  getDimensions(): Dimensi[] {
    return DIMENSI_LIST;
  },

  getVariables(): Variabel[] {
    return VARIABEL_LIST;
  },

  getIndicators(): Indikator[] {
    return INDIKATOR_LIST;
  },

  // 3. Get Questions for Stakeholder
  getQuestions(stakeholderGroupId: string): PertanyaanItem[] {
    return getQuestionsForStakeholder(stakeholderGroupId);
  },

  // 4. Create / Initialize Responden
  async initRespondent(data: {
    nama: string;
    instansi: string;
    jabatan?: string;
    no_hp?: string;
    id_stakeholder_group: string;
    user_id_google?: string | null;
    email?: string | null;
    is_manual_entry?: boolean;
  }): Promise<RespondenRecord> {
    const newId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'resp_' + Date.now();
    const respondent: RespondenRecord = {
      id: newId,
      ...data,
      status_pengisian: 'draft',
      progress_percent: 0,
      total_dijawab: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    // Save to LocalStorage immediately
    this.saveLocalRespondent(respondent);

    // Try saving to Supabase
    try {
      const { data: dbData, error } = await supabase
        .from('responden')
        .insert({
          id: respondent.id,
          user_id_google: respondent.user_id_google || null,
          email: respondent.email || null,
          nama: respondent.nama,
          instansi: respondent.instansi,
          jabatan: respondent.jabatan || null,
          no_hp: respondent.no_hp || null,
          id_stakeholder_group: respondent.id_stakeholder_group,
          is_manual_entry: respondent.is_manual_entry || false,
          status_pengisian: respondent.status_pengisian,
          progress_percent: 0,
          total_dijawab: 0
        })
        .select()
        .single();

      if (error) {
        console.warn('Supabase insert warning, falling back to local:', error.message);
      } else if (dbData) {
        return dbData as RespondenRecord;
      }
    } catch (err) {
      console.warn('Supabase offline or unreachable, using local respondent:', err);
    }

    return respondent;
  },

  // 5. Save Single Answer (Incremental Auto-save)
  async saveAnswer(
    respondenId: string,
    pertanyaanId: string,
    indikatorId: string,
    skor: number,
    totalQuestions: number
  ): Promise<boolean> {
    // 1. Update LocalStorage
    const localAnswers = this.getLocalAnswers(respondenId);
    localAnswers[pertanyaanId] = {
      id_responden: respondenId,
      id_pertanyaan: pertanyaanId,
      id_indikator: indikatorId,
      skor
    };
    this.saveLocalAnswers(respondenId, localAnswers);

    const answeredCount = Object.keys(localAnswers).length;
    const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

    // 2. Sync to Supabase
    try {
      const { error } = await supabase
        .from('jawaban')
        .upsert({
          id_responden: respondenId,
          id_pertanyaan: pertanyaanId,
          id_indikator: indikatorId,
          skor,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'id_responden,id_pertanyaan'
        });

      if (!error) {
        // update respondent progress in DB
        await supabase
          .from('responden')
          .update({
            total_dijawab: answeredCount,
            progress_percent: progressPercent,
            updated_at: new Date().toISOString()
          })
          .eq('id', respondenId);
      }
    } catch (err) {
      console.warn('Sync answer to Supabase failed, saved locally:', err);
    }

    return true;
  },

  // 6. Complete / Submit Survey
  async completeSurvey(respondenId: string): Promise<boolean> {
    // 1. Local
    const resp = this.getLocalRespondent();
    if (resp && resp.id === respondenId) {
      resp.status_pengisian = 'selesai';
      resp.progress_percent = 100;
      resp.updated_at = new Date().toISOString();
      this.saveLocalRespondent(resp);
    }

    // 2. Supabase
    try {
      await supabase
        .from('responden')
        .update({
          status_pengisian: 'selesai',
          progress_percent: 100,
          updated_at: new Date().toISOString()
        })
        .eq('id', respondenId);
    } catch (err) {
      console.warn('Update submit status failed:', err);
    }

    return true;
  },

  // 7. Manual Entry by Researcher / Enumerator (Batch submit)
  async submitManualEntry(
    respondentData: {
      nama: string;
      instansi: string;
      jabatan?: string;
      no_hp?: string;
      id_stakeholder_group: string;
    },
    answers: Record<string, number> // key: pertanyaanId, value: skor
  ): Promise<{ success: boolean; respondentId?: string; error?: string }> {
    try {
      const questions = this.getQuestions(respondentData.id_stakeholder_group);
      const totalQ = questions.length;
      const answeredCount = Object.keys(answers).length;

      const newId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'resp_man_' + Date.now();
      const respRecord: RespondenRecord = {
        id: newId,
        ...respondentData,
        is_manual_entry: true,
        status_pengisian: answeredCount >= totalQ ? 'selesai' : 'draft',
        progress_percent: Math.round((answeredCount / totalQ) * 100),
        total_dijawab: answeredCount,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      // Try inserting to Supabase
      const { error: respError } = await supabase
        .from('responden')
        .insert({
          id: respRecord.id,
          nama: respRecord.nama,
          instansi: respRecord.instansi,
          jabatan: respRecord.jabatan || null,
          no_hp: respRecord.no_hp || null,
          id_stakeholder_group: respRecord.id_stakeholder_group,
          is_manual_entry: true,
          status_pengisian: respRecord.status_pengisian,
          progress_percent: respRecord.progress_percent,
          total_dijawab: respRecord.total_dijawab
        });

      if (respError) {
        console.warn('Supabase manual entry error, storing local:', respError.message);
      }

      // Prepare answer rows
      const answerRows = Object.entries(answers).map(([pertanyaanId, skor]) => {
        const qObj = questions.find(q => q.id === pertanyaanId);
        return {
          id_responden: newId,
          id_pertanyaan: pertanyaanId,
          id_indikator: qObj ? qObj.id_indikator : '',
          skor
        };
      });

      if (answerRows.length > 0) {
        await supabase.from('jawaban').insert(answerRows);
      }

      // Also store in LocalStorage list of all respondents
      this.addLocalSurveySubmission(respRecord, answers);

      return { success: true, respondentId: newId };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Gagal menyimpan entri manual' };
    }
  },

  // 8. Fetch All Survey Data for Admin & Dashboard
  async getAllSurveyAnalytics(): Promise<{
    respondents: RespondenRecord[];
    answers: JawabanRecord[];
    dimensionScores: DimensionScore[];
    variableScores: VariableScore[];
    stakeholderProgress: StakeholderProgress[];
    overallAverage: number;
    totalTarget: number;
    totalCompleted: number;
  }> {
    let respondents: RespondenRecord[] = [];
    let answers: JawabanRecord[] = [];

    // Try fetching from Supabase
    try {
      const { data: respData, error: respErr } = await supabase
        .from('responden')
        .select('*')
        .order('created_at', { ascending: false });

      if (!respErr && respData && respData.length > 0) {
        respondents = respData as RespondenRecord[];
      }

      const { data: ansData, error: ansErr } = await supabase
        .from('jawaban')
        .select('*');

      if (!ansErr && ansData && ansData.length > 0) {
        answers = ansData as JawabanRecord[];
      }
    } catch (err) {
      console.warn('Error fetching from Supabase, checking local submissions:', err);
    }

    // Merge with local submissions if local has records
    const localSubmissions = this.getLocalSubmissions();
    if (localSubmissions.length > 0) {
      for (const item of localSubmissions) {
        if (!respondents.some(r => r.id === item.respondent.id)) {
          respondents.push(item.respondent);
          Object.entries(item.answers).forEach(([qId, val]) => {
            const skor = typeof val === 'number' ? val : (val as any)?.skor || 0;
            const q = QUESTION_BANK.find(x => x.id === qId);
            answers.push({
              id_responden: item.respondent.id,
              id_pertanyaan: qId,
              id_indikator: q ? q.id_indikator : '',
              skor
            });
          });
        }
      }
    }

    // Also check current active respondent and answers in localStorage if exists
    const currentRespondent = this.getLocalRespondent();
    if (currentRespondent && !respondents.some(r => r.id === currentRespondent.id)) {
      const curAnswers = this.getLocalAnswers(currentRespondent.id);
      if (curAnswers && Object.keys(curAnswers).length > 0) {
        respondents.push(currentRespondent);
        Object.entries(curAnswers).forEach(([qId, val]) => {
          const skor = typeof val === 'number' ? val : (val as any)?.skor || 0;
          const q = QUESTION_BANK.find(x => x.id === qId);
          answers.push({
            id_responden: currentRespondent.id,
            id_pertanyaan: qId,
            id_indikator: q ? q.id_indikator : '',
            skor
          });
        });
      }
    }

    // Compute Dimension Scores purely from REAL data
    const dimensionScores: DimensionScore[] = DIMENSI_LIST.map(dim => {
      // Find all variables under this dimension
      const varIds = VARIABEL_LIST.filter(v => v.id_dimensi === dim.id).map(v => v.id);
      // Find all indicators under these variables
      const indIds = INDIKATOR_LIST.filter(i => varIds.includes(i.id_variabel)).map(i => i.id);
      // Filter answers for these indicators
      const dimAnswers = answers.filter(a => indIds.includes(a.id_indikator));
      
      const sum = dimAnswers.reduce((acc, curr) => acc + (curr.skor || 0), 0);
      const avg = dimAnswers.length > 0 ? parseFloat((sum / dimAnswers.length).toFixed(2)) : 0;

      return {
        id: dim.id,
        nama: dim.nama,
        warna: dim.warna,
        rataRata: avg,
        skorMax: 5.0,
        kategori: this.getCategoryLabel(avg)
      };
    });

    // Compute Variable Scores (V1 - V9)
    const variableScores: VariableScore[] = VARIABEL_LIST.map(v => {
      const indIds = INDIKATOR_LIST.filter(i => i.id_variabel === v.id).map(i => i.id);
      const vAnswers = answers.filter(a => indIds.includes(a.id_indikator));
      const sum = vAnswers.reduce((acc, curr) => acc + (curr.skor || 0), 0);
      const avg = vAnswers.length > 0 ? parseFloat((sum / vAnswers.length).toFixed(2)) : 0;

      return {
        id: v.id,
        id_dimensi: v.id_dimensi,
        nama: v.nama,
        rataRata: avg,
        kategori: this.getCategoryLabel(avg)
      };
    });

    // Compute Stakeholder Progress & Breakdown
    const stakeholderProgress: StakeholderProgress[] = STAKEHOLDER_GROUPS.map(group => {
      const groupResp = respondents.filter(r => r.id_stakeholder_group === group.id && r.status_pengisian === 'selesai');
      const terisi = groupResp.length;
      const persentase = Math.min(100, Math.round((terisi / group.target) * 100));

      // Calculate Dimension Scores specifically for this stakeholder
      const respIds = groupResp.map(r => r.id);
      const groupAnswers = answers.filter(a => respIds.includes(a.id_responden));

      const skorDimensi: Record<string, number> = {};
      DIMENSI_LIST.forEach(dim => {
        const varIds = VARIABEL_LIST.filter(v => v.id_dimensi === dim.id).map(v => v.id);
        const indIds = INDIKATOR_LIST.filter(i => varIds.includes(i.id_variabel)).map(i => i.id);
        const dAnswers = groupAnswers.filter(a => indIds.includes(a.id_indikator));
        const sum = dAnswers.reduce((acc, curr) => acc + (curr.skor || 0), 0);
        skorDimensi[dim.id] = dAnswers.length > 0 ? parseFloat((sum / dAnswers.length).toFixed(2)) : 0;
      });

      return {
        group,
        target: group.target,
        terisi,
        persentase,
        skorDimensi
      };
    });

    const completedRespondents = respondents.filter(r => r.status_pengisian === 'selesai');
    const allScoresSum = answers.reduce((acc, curr) => acc + (curr.skor || 0), 0);
    const overallAverage = answers.length > 0 ? parseFloat((allScoresSum / answers.length).toFixed(2)) : 0;
    const totalTarget = STAKEHOLDER_GROUPS.reduce((acc, curr) => acc + curr.target, 0);

    return {
      respondents,
      answers,
      dimensionScores,
      variableScores,
      stakeholderProgress,
      overallAverage,
      totalTarget,
      totalCompleted: completedRespondents.length
    };
  },

  getCategoryLabel(score: number): string {
    if (score >= 4.2) return "Sangat Baik / Sangat Tinggi (Sustain)";
    if (score >= 3.4) return "Baik / Cukup Berkelanjutan";
    if (score >= 2.6) return "Sedang / Perlu Penguatan";
    if (score >= 1.8) return "Kurang / Rentan Terdegradasi";
    if (score > 0) return "Sangat Buruk / Kritis";
    return "Belum Ada Data";
  },

  // Delete Respondent (Admin feature)
  async deleteRespondent(id: string): Promise<boolean> {
    try {
      await supabase.from('jawaban').delete().eq('id_responden', id);
      await supabase.from('responden').delete().eq('id', id);
    } catch (e) {
      console.warn('Error deleting from supabase:', e);
    }

    // Local
    const local = this.getLocalSubmissions();
    const filtered = local.filter(x => x.respondent.id !== id);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cilegon_all_submissions', JSON.stringify(filtered));
    }
    return true;
  },

  // Local Storage Helpers
  saveLocalRespondent(respondent: RespondenRecord) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(LOCAL_STORAGE_KEY_PREFIX + 'current_respondent', JSON.stringify(respondent));
  },

  getLocalRespondent(): RespondenRecord | null {
    if (typeof window === 'undefined') return null;
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY_PREFIX + 'current_respondent');
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  },

  clearLocalRespondent() {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(LOCAL_STORAGE_KEY_PREFIX + 'current_respondent');
  },

  saveLocalAnswers(respondenId: string, answers: Record<string, any>) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(LOCAL_STORAGE_KEY_PREFIX + 'answers_' + respondenId, JSON.stringify(answers));
  },

  getLocalAnswers(respondenId: string): Record<string, any> {
    if (typeof window === 'undefined') return {};
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY_PREFIX + 'answers_' + respondenId);
    if (!raw) return {};
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  },

  addLocalSurveySubmission(respondent: RespondenRecord, answers: Record<string, number>) {
    if (typeof window === 'undefined') return;
    const list = this.getLocalSubmissions();
    list.push({ respondent, answers });
    localStorage.setItem('cilegon_all_submissions', JSON.stringify(list));
  },

  getLocalSubmissions(): Array<{ respondent: RespondenRecord; answers: Record<string, number> }> {
    if (typeof window === 'undefined') return [];
    const raw = localStorage.getItem('cilegon_all_submissions');
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  },

  // Benchmark / Initial Sample Generator for research simulation
  generateDemoData(): { respondents: RespondenRecord[]; answers: JawabanRecord[] } {
    const mockRespondents: RespondenRecord[] = [
      { id: 'm1', nama: 'H. Suherman (DKPP)', instansi: 'Dinas Ketahanan Pangan & Pertanian Cilegon', jabatan: 'Kabid Perikanan Tangkap', id_stakeholder_group: 'pemda', status_pengisian: 'selesai', progress_percent: 100, total_dijawab: 42, created_at: '2026-03-01T08:30:00Z' },
      { id: 'm2', nama: 'Ir. Hendra Wijaya', instansi: 'Bapperida Kota Cilegon', jabatan: 'Perencana Ahli Madya', id_stakeholder_group: 'pemda', status_pengisian: 'selesai', progress_percent: 100, total_dijawab: 42, created_at: '2026-03-02T10:15:00Z' },
      { id: 'm3', nama: 'Pak Sarwani (Juragan)', instansi: 'Pangkalan Nelayan Medaksa Merak', jabatan: 'Ketua Paguyuban Perahu Motor', id_stakeholder_group: 'pelaku_usaha', status_pengisian: 'selesai', progress_percent: 100, total_dijawab: 42, created_at: '2026-03-02T14:20:00Z' },
      { id: 'm4', nama: 'Pak Rustam', instansi: 'Nelayan Tradisional Cigading', jabatan: 'Nelayan Pancing Ulur', id_stakeholder_group: 'pelaku_usaha', status_pengisian: 'selesai', progress_percent: 100, total_dijawab: 42, created_at: '2026-03-03T09:00:00Z' },
      { id: 'm5', nama: 'Ust. M. Ridwan', instansi: 'Kelurahan Gerem (Suralaya)', jabatan: 'Ketua RW & Tokoh Pesisir', id_stakeholder_group: 'masyarakat_pesisir', status_pengisian: 'selesai', progress_percent: 100, total_dijawab: 42, created_at: '2026-03-03T11:45:00Z' },
      { id: 'm6', nama: 'Dr. Agus Suryanto, M.Si', instansi: 'Fakultas Perikanan & Ilmu Kelautan Untirta', jabatan: 'Dosen Manajemen SDI', id_stakeholder_group: 'akademisi_lsm', status_pengisian: 'selesai', progress_percent: 100, total_dijawab: 42, created_at: '2026-03-04T13:10:00Z' },
      { id: 'm7', nama: 'Bambang Kusuma', instansi: 'PT Krakatau Bandar Samudera (KBS)', jabatan: 'HSE & Community Marine Officer', id_stakeholder_group: 'industri', status_pengisian: 'selesai', progress_percent: 100, total_dijawab: 42, created_at: '2026-03-04T15:30:00Z' }
    ];

    const mockAnswers: JawabanRecord[] = [];
    mockRespondents.forEach(resp => {
      const qList = getQuestionsForStakeholder(resp.id_stakeholder_group);
      qList.forEach(q => {
        // Bias skor berdasarkan persona
        let baseScore = 3;
        if (resp.id_stakeholder_group === 'pemda') baseScore = 4;
        if (resp.id_stakeholder_group === 'pelaku_usaha') {
          // Nelayan cenderung memberi skor lebih rendah untuk kondisi ekonomi dan ekologi
          baseScore = q.id_indikator.startsWith('EKO') || q.id_indikator.startsWith('EKN') ? 2 : 4;
        }
        if (resp.id_stakeholder_group === 'akademisi_lsm') baseScore = 3;
        if (resp.id_stakeholder_group === 'industri') baseScore = 4;

        // Add slight pseudo-random variance (1-5 range)
        const charCode = (resp.id.charCodeAt(1) + q.id.charCodeAt(3)) % 3;
        let finalScore = Math.max(1, Math.min(5, baseScore + (charCode - 1)));

        mockAnswers.push({
          id_responden: resp.id,
          id_pertanyaan: q.id,
          id_indikator: q.id_indikator,
          skor: finalScore
        });
      });
    });

    return { respondents: mockRespondents, answers: mockAnswers };
  }
};
