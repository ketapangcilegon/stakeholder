import { supabase } from '@/lib/supabase/client';
import { SurveyService } from '@/lib/surveyService';

export const AdminActions = {
  async deleteRespondent(id: string): Promise<boolean> {
    return await SurveyService.deleteRespondent(id);
  },

  async submitManualEntry(
    respondentData: {
      nama: string;
      instansi: string;
      jabatan?: string;
      no_hp?: string;
      id_stakeholder_group: string;
    },
    answers: Record<string, number>
  ) {
    return await SurveyService.submitManualEntry(respondentData, answers);
  }
};
