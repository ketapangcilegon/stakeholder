import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kusrywvxhtqtydwrsihv.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1c3J5d3Z4aHRxdHlkd3JzaWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ0NjQyNDcsImV4cCI6MjExMDA0MDI0N30.Tj5jTG6dAnH8DAil5s8pa8AwnIQne9K4sKynh2tm738';

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
