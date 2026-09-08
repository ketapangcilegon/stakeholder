'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SurveyActions } from '@/features/survey/actions';
import { Loader2 } from 'lucide-react';

export default function SurveyRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const respondent = SurveyActions.getLocalRespondent();
    if (respondent?.id_stakeholder_group) {
      router.replace(`/kuesioner/${respondent.id_stakeholder_group}`);
    } else {
      router.replace('/pilih-stakeholder');
    }
  }, [router]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
      <Loader2 className="w-10 h-10 text-ocean-600 animate-spin" />
      <p className="text-sm font-semibold text-slate-600">
        Mengarahkan ke kuesioner Anda...
      </p>
    </div>
  );
}
