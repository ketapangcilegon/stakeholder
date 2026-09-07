'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SurveyService, RespondenRecord } from '@/lib/surveyService';
import { STAKEHOLDER_GROUPS, StakeholderGroup } from '@/data/questionnaireData';
import QuestionnaireWizard from '@/components/QuestionnaireWizard';
import { Loader2, AlertCircle, ArrowLeft, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SurveyPage() {
  const router = useRouter();
  const [respondent, setRespondent] = useState<RespondenRecord | null>(null);
  const [stakeholderGroup, setStakeholderGroup] = useState<StakeholderGroup | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasNoSession, setHasNoSession] = useState(false);

  useEffect(() => {
    // 1. Get current respondent from LocalStorage / state
    const currentResp = SurveyService.getLocalRespondent();

    if (!currentResp) {
      setHasNoSession(true);
      setLoading(false);
      return;
    }

    const group = STAKEHOLDER_GROUPS.find(g => g.id === currentResp.id_stakeholder_group);
    if (!group) {
      setHasNoSession(true);
      setLoading(false);
      return;
    }

    setRespondent(currentResp);
    setStakeholderGroup(group);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <Loader2 className="w-10 h-10 text-ocean-600 animate-spin" />
        <p className="text-sm font-semibold text-slate-600">
          Memuat instrumen kuesioner...
        </p>
      </div>
    );
  }

  if (hasNoSession || !respondent || !stakeholderGroup) {
    return (
      <div className="max-w-xl mx-auto my-16 p-8 bg-white rounded-3xl border border-slate-200 shadow-xl text-center space-y-5 animate-fadeIn">
        <div className="w-16 h-16 bg-ocean-100 text-ocean-700 rounded-2xl flex items-center justify-center mx-auto">
          <Users className="w-8 h-8" />
        </div>

        <h2 className="text-2xl font-black text-slate-900">
          Belum Ada Sesi Responden Aktif
        </h2>

        <p className="text-sm text-slate-600 leading-relaxed">
          Sebelum mengisi kuesioner, silakan pilih salah satu dari <strong>5 Kelompok Stakeholder</strong> dan isi identitas singkat di halaman utama agar redaksi pertanyaan disesuaikan dengan profil Anda.
        </p>

        <div className="pt-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ocean-600 hover:bg-ocean-700 text-white rounded-xl font-bold text-sm shadow-md transition-all"
          >
            <span>Pilih Kelompok Stakeholder di Beranda</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  // Get 42 questions tailored for this stakeholder
  const questions = SurveyService.getQuestions(stakeholderGroup.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      
      {/* Top Breadcrumb */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Beranda</span>
        </button>
      </div>

      {/* Main Questionnaire Interface */}
      <QuestionnaireWizard
        respondent={respondent}
        stakeholderGroup={stakeholderGroup}
        questions={questions}
      />
    </div>
  );
}
