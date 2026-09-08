import { 
  DIMENSI_LIST, 
  VARIABEL_LIST, 
  INDIKATOR_LIST, 
  STAKEHOLDER_GROUPS, 
  Dimensi, 
  Variabel, 
  Indikator, 
  PertanyaanItem, 
  StakeholderGroup 
} from '@/config/constants';
import { QUESTION_BANK } from '@/data/questionBank';
import { generateInstrumentDocx } from '@/lib/utils/docxExport';

const INSTRUMENT_STORAGE_KEY = 'cilegon_custom_instruments_v1';

export interface CustomInstrumentData {
  dimensions: Dimensi[];
  variables: Variabel[];
  indicators: Indikator[];
  questions: PertanyaanItem[];
  updatedAt: string;
}

export const InstrumentService = {
  // Load current instruments (custom or default)
  getInstrumentData(): CustomInstrumentData {
    if (typeof window === 'undefined') {
      return {
        dimensions: [...DIMENSI_LIST],
        variables: [...VARIABEL_LIST],
        indicators: [...INDIKATOR_LIST],
        questions: [...QUESTION_BANK],
        updatedAt: new Date().toISOString()
      };
    }

    try {
      const stored = localStorage.getItem(INSTRUMENT_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.dimensions && parsed.variables && parsed.indicators && parsed.questions) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to parse custom instruments, using default:', e);
    }

    return {
      dimensions: [...DIMENSI_LIST],
      variables: [...VARIABEL_LIST],
      indicators: [...INDIKATOR_LIST],
      questions: [...QUESTION_BANK],
      updatedAt: new Date().toISOString()
    };
  },

  // Save all instrument data
  saveInstrumentData(data: Partial<CustomInstrumentData>) {
    if (typeof window === 'undefined') return;
    const current = this.getInstrumentData();
    const updated: CustomInstrumentData = {
      ...current,
      ...data,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(INSTRUMENT_STORAGE_KEY, JSON.stringify(updated));
  },

  // Reset to default tesis standard
  resetToDefaults() {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(INSTRUMENT_STORAGE_KEY);
  },

  // ----------------- DIMENSION CRUD -----------------
  getDimensions(): Dimensi[] {
    return this.getInstrumentData().dimensions;
  },

  saveDimension(dim: Dimensi) {
    const data = this.getInstrumentData();
    const idx = data.dimensions.findIndex(d => d.id === dim.id);
    if (idx >= 0) {
      data.dimensions[idx] = dim;
    } else {
      data.dimensions.push(dim);
    }
    this.saveInstrumentData({ dimensions: data.dimensions });
  },

  deleteDimension(id: string) {
    const data = this.getInstrumentData();
    const dimensions = data.dimensions.filter(d => d.id !== id);
    // Also remove cascade variables
    const variables = data.variables.filter(v => v.id_dimensi !== id);
    const varIds = data.variables.filter(v => v.id_dimensi === id).map(v => v.id);
    const indicators = data.indicators.filter(i => !varIds.includes(i.id_variabel));
    const indIds = data.indicators.filter(i => varIds.includes(i.id_variabel)).map(i => i.id);
    const questions = data.questions.filter(q => !indIds.includes(q.id_indikator));

    this.saveInstrumentData({ dimensions, variables, indicators, questions });
  },

  // ----------------- VARIABLE CRUD -----------------
  getVariables(): Variabel[] {
    return this.getInstrumentData().variables;
  },

  saveVariable(v: Variabel) {
    const data = this.getInstrumentData();
    const idx = data.variables.findIndex(item => item.id === v.id);
    if (idx >= 0) {
      data.variables[idx] = v;
    } else {
      data.variables.push(v);
    }
    this.saveInstrumentData({ variables: data.variables });
  },

  deleteVariable(id: string) {
    const data = this.getInstrumentData();
    const variables = data.variables.filter(v => v.id !== id);
    const indicators = data.indicators.filter(i => i.id_variabel !== id);
    const indIds = data.indicators.filter(i => i.id_variabel === id).map(i => i.id);
    const questions = data.questions.filter(q => !indIds.includes(q.id_indikator));

    this.saveInstrumentData({ variables, indicators, questions });
  },

  // ----------------- INDICATOR CRUD -----------------
  getIndicators(): Indikator[] {
    return this.getInstrumentData().indicators;
  },

  saveIndicator(ind: Indikator) {
    const data = this.getInstrumentData();
    const idx = data.indicators.findIndex(item => item.id === ind.id);
    if (idx >= 0) {
      data.indicators[idx] = ind;
    } else {
      data.indicators.push(ind);
    }
    this.saveInstrumentData({ indicators: data.indicators });
  },

  deleteIndicator(id: string) {
    const data = this.getInstrumentData();
    const indicators = data.indicators.filter(i => i.id !== id);
    const questions = data.questions.filter(q => q.id_indikator !== id);
    this.saveInstrumentData({ indicators, questions });
  },

  // ----------------- QUESTION CRUD -----------------
  getQuestions(groupId?: string): PertanyaanItem[] {
    const questions = this.getInstrumentData().questions;
    if (groupId) {
      return questions.filter(q => q.id_stakeholder_group === groupId);
    }
    return questions;
  },

  saveQuestion(q: PertanyaanItem) {
    const data = this.getInstrumentData();
    const idx = data.questions.findIndex(item => item.id === q.id);
    if (idx >= 0) {
      data.questions[idx] = q;
    } else {
      data.questions.push(q);
    }
    this.saveInstrumentData({ questions: data.questions });
  },

  deleteQuestion(id: string) {
    const data = this.getInstrumentData();
    const questions = data.questions.filter(q => q.id !== id);
    this.saveInstrumentData({ questions });
  },

  // ----------------- EXPORT TO DOCX -----------------
  async downloadDocx(filename = 'Instrumen_Penelitian_Tesis_Cilegon.docx') {
    const data = this.getInstrumentData();
    const blob = await generateInstrumentDocx({
      dimensions: data.dimensions,
      variables: data.variables,
      indicators: data.indicators,
      questions: data.questions,
      stakeholderGroups: STAKEHOLDER_GROUPS
    });

    // Trigger download
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
};
