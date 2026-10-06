'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { STAKEHOLDER_GROUPS, StakeholderGroup, PertanyaanItem } from '@/config/constants';
import { SurveyActions } from '@/features/survey/actions';
import { RespondenData } from '@/features/survey/types';
import { QUESTION_BANK } from '@/data/questionBank';
import { InstrumentService } from '@/lib/instrumentService';
import QuestionnaireWizard from '@/features/survey/components/QuestionnaireWizard';
import { Loader2, ArrowLeft } from 'lucide-react';

export default function KuesionerGroupPage() {
  const params = useParams();
  const router = useRouter();
  const groupId = (params?.groupId as string) || 'pelaku_usaha';

  const [respondent, setRespondent] = useState<RespondenData | null>(null);
  const [stakeholderGroup, setStakeholderGroup] = useState<StakeholderGroup | null>(null);
  const [questions, setQuestions] = useState<PertanyaanItem[]>([]);
  const [loading, setLoading] = useState(true);

  const loadQuestions = useCallback((targetGroupId: string) => {
    const qList = InstrumentService.getQuestions(targetGroupId);
    if (qList && qList.length > 0) {
      setQuestions(qList);
    } else {
      setQuestions(QUESTION_BANK.filter(q => q.id_stakeholder_group === targetGroupId));
    }
  }, []);

  useEffect(() => {
    let group = STAKEHOLDER_GROUPS.find(g => g.id === groupId);
    if (!group) group = STAKEHOLDER_GROUPS[0];
    setStakeholderGroup(group);

    const localResp = SurveyActions.getLocalRespondent();
    if (localResp) {
      setRespondent(localResp);
    } else {
      router.replace('/pilih-stakeholder');
      return;
    }

    // 1. Muat bank soal terkini (prioritaskan hasil editan admin)
    loadQuestions(group.id);
    setLoading(false);

    // 2. Coba sinkronisasi awan jika ada pembaruan di Supabase
    InstrumentService.syncCloudQuestions().then((hasChanges) => {
      if (hasChanges && group) {
        loadQuestions(group.id);
      }
    });

    // 3. Listener perubahan real-time (jika admin menyimpan edit di tab lain atau window yang sama)
    const handleUpdate = () => {
      if (group) {
        loadQuestions(group.id);
      }
    };

    window.addEventListener('cilegon_instruments_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('cilegon_instruments_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, [groupId, router, loadQuestions]);

  if (loading || !stakeholderGroup || !respondent || questions.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <Loader2 className="w-10 h-10 text-ocean-600 animate-spin" />
        <p className="text-sm font-semibold text-slate-600">
          Memuat instrumen kuesioner...
        </p>
      </div>
    );
  }

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
        key={`wizard_${stakeholderGroup.id}_${questions.length}`}
        respondent={respondent}
        stakeholderGroup={stakeholderGroup}
        questions={questions}
      />
    </div>
  );
}
