import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anonymous Key must be defined in environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function logIn(email, password) {
  const { error, session } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return session;
}

export async function logOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export function getSession() {
  const session = supabase.auth.session();
  return session;
}

export function onAuthStateChange(callback) {
  return supabase.auth.onAuthStateChange(callback);
}

export async function signInWithDiscord() {
  const { error, session, user } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
  });

  if (error) throw error;
  return { session, user };
}

export { supabase };
