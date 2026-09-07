'use client';

import { useState, useCallback } from 'react';
import { SurveyActions } from '../actions';

export function useAutosaveJawaban(respondenId: string, totalQuestions = 42) {
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<string>('Baru saja');

  const saveJawaban = useCallback(
    async (pertanyaanId: string, indikatorId: string, skor: number) => {
      setIsSaving(true);
      await SurveyActions.saveSingleAnswer(
        respondenId,
        pertanyaanId,
        indikatorId,
        skor,
        totalQuestions
      );
      setIsSaving(false);
      setLastSaved(new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }));
    },
    [respondenId, totalQuestions]
  );

  return { isSaving, lastSaved, saveJawaban };
}
