import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://firfggtfmnejwbovveor.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpcmZnZ3RmbW5landib3Z2ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg3ODkyMzEsImV4cCI6MjEwNDM2NTIzMX0.lKGBLbEuujBItX1pKsax4xndMdB9cizL6tByqmacjfE';

export const createBrowserClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });
};

export const supabase = createBrowserClient();
