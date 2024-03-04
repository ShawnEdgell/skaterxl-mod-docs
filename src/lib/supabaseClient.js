// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Ensure this is defined in your .env file
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // Ensure this is defined in your .env file

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
