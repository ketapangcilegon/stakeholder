'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function SurveyGroupRedirectPage() {
  const params = useParams();
  const router = useRouter();
  const groupId = (params?.groupId as string) || 'pelaku_usaha';

  useEffect(() => {
    router.replace(`/kuesioner/${groupId}`);
  }, [router, groupId]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
      <Loader2 className="w-10 h-10 text-ocean-600 animate-spin" />
      <p className="text-sm font-semibold text-slate-600">
        Memuat kuesioner kelompok stakeholder...
      </p>
    </div>
  );
}
