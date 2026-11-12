import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xqaanmvmmjrtxstzxdje.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxYWFubXZtbWpydHhzdHp4ZGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ0Mzk2MzMsImV4cCI6MjExMDAxNTYzM30.VAvTvVHmVuY9fpi7C213g0zDa015LmYqyZjmnWI89Gk';

export const createServerClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false
    }
  });
};
