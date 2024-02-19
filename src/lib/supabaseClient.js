// supabaseClient.js

import { createClient } from '@supabase/supabase-js';

let supabaseUrl, supabaseAnonKey;

if (!import.meta.env.DEV) {
  // Use production environment variables (or fallback if not set)
  supabaseUrl = process.env.SUPABASE_URL || '';
  supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';
} else {
  // Use development environment variables
  supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
