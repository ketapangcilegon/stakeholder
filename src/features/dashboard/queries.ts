import { supabase } from '@/lib/supabase/client';
import { 
  STAKEHOLDER_GROUPS, 
  DIMENSI_LIST, 
  VARIABEL_LIST, 
  INDIKATOR_LIST,
  StakeholderGroup 
} from '@/config/constants';
import { 
  calculateDimensionScores, 
  calculateVariableScores, 
  DimensionScore, 
  VariableScore 
} from '@/lib/utils/scoring';
import { SurveyService } from '@/lib/surveyService';

export interface DashboardData {
  respondents: any[];
  answers: any[];
  dimensionScores: DimensionScore[];
  variableScores: VariableScore[];
  stakeholderProgress: {
    group: StakeholderGroup;
    target: number;
    terisi: number;
    persentase: number;
    skorDimensi: Record<string, number>;
  }[];
  overallAverage: number;
  totalTarget: number;
  totalCompleted: number;
}

export const DashboardQueries = {
  async getDashboardAnalytics(): Promise<DashboardData> {
    const data = await SurveyService.getAllSurveyAnalytics();
    return data;
  }
};
