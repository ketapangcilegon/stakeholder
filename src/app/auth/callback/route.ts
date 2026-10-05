import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const origin = requestUrl.origin;

  if (code) {
    try {
      const supabase = createServerClient();
      await supabase.auth.exchangeCodeForSession(code);
    } catch (err) {
      console.error('Error exchanging OAuth code:', err);
    }
  }

  // Redirect to pilih-stakeholder after successful auth callback
  return NextResponse.redirect(`${origin}/pilih-stakeholder`);
}
