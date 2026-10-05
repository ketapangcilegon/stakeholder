'use client';

import { useState, useCallback } from 'react';
import { SurveyActions } from '../actions';

export type CloudStatus = 'idle' | 'saving' | 'synced' | 'local_only';

export function useAutosaveJawaban(respondenId: string, totalQuestions = 42) {
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<string>('Baru saja');
  /** Status sinkron ke server yang SEBENARNYA (bukan sekadar tersimpan di perangkat). */
  const [cloudStatus, setCloudStatus] = useState<CloudStatus>('idle');

  const saveJawaban = useCallback(
    async (pertanyaanId: string, indikatorId: string, skor: number) => {
      setIsSaving(true);
      setCloudStatus('saving');
      const ok = await SurveyActions.saveSingleAnswer(
        respondenId,
        pertanyaanId,
        indikatorId,
        skor,
        totalQuestions
      );
      setIsSaving(false);
      setCloudStatus(ok ? 'synced' : 'local_only');
      setLastSaved(new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }));
    },
    [respondenId, totalQuestions]
  );

  return { isSaving, lastSaved, cloudStatus, saveJawaban };
}
