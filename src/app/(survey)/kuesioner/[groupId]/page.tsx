'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { STAKEHOLDER_GROUPS, StakeholderGroup } from '@/config/constants';
import { SurveyActions } from '@/features/survey/actions';
import { RespondenData } from '@/features/survey/types';
import { QUESTION_BANK } from '@/data/questionBank';
import QuestionnaireWizard from '@/features/survey/components/QuestionnaireWizard';
import { Loader2, ArrowLeft, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function KuesionerGroupPage() {
  const params = useParams();
  const router = useRouter();
  const groupId = (params?.groupId as string) || 'pelaku_usaha';

  const [respondent, setRespondent] = useState<RespondenData | null>(null);
  const [stakeholderGroup, setStakeholderGroup] = useState<StakeholderGroup | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let group = STAKEHOLDER_GROUPS.find(g => g.id === groupId);
    if (!group) group = STAKEHOLDER_GROUPS[0];
    setStakeholderGroup(group);

    const localResp = SurveyActions.getLocalRespondent();
    if (localResp) {
      setRespondent(localResp);
    } else {
      // Auto initialize default guest respondent for this group
      const defaultResp: RespondenData = {
        id: 'resp_' + Date.now(),
        nama: 'Responden ' + group.nama.split('(')[0],
        instansi: 'Kawasan Pesisir Cilegon',
        id_stakeholder_group: group.id,
        status_pengisian: 'draft',
        progress_percent: 0,
        total_dijawab: 0
      };
      setRespondent(defaultResp);
    }

    setLoading(false);
  }, [groupId]);

  if (loading || !stakeholderGroup || !respondent) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <Loader2 className="w-10 h-10 text-ocean-600 animate-spin" />
        <p className="text-sm font-semibold text-slate-600">
          Memuat instrumen kuesioner...
        </p>
      </div>
    );
  }

  const questions = QUESTION_BANK.filter(q => q.id_stakeholder_group === stakeholderGroup.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => router.push('/pilih-stakeholder')}
          className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Ganti Kelompok Stakeholder</span>
        </button>
      </div>

      <QuestionnaireWizard
        respondent={respondent}
        stakeholderGroup={stakeholderGroup}
        questions={questions}
      />
    </div>
  );
}
