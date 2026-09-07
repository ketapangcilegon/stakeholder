import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  try {
    const supabase = createServerClient();
    const { data: respondents, error: respErr } = await supabase.from('responden').select('*');
    const { data: answers, error: ansErr } = await supabase.from('jawaban').select('*');

    if (respErr || ansErr) {
      return NextResponse.json({ error: respErr?.message || ansErr?.message }, { status: 500 });
    }

    return NextResponse.json({
      respondents: respondents || [],
      answers: answers || [],
      total: respondents?.length || 0
    });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}
