import { createClient } from '@supabase/supabase-js';

// Retrieve environment variables directly, assuming VITE_ prefix for custom variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Ensure the environment variables are defined
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anonymous Key must be defined in environment variables');
}

// Initialize the Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function logIn(email, password) {
  // Use signInWithPassword if it's the correct method for v2
  // Adjust based on the actual Supabase v2 documentation
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
  return supabase.auth.session();
}

export function onAuthStateChange(callback) {
  return supabase.auth.onAuthStateChange(callback);
}

// Export the supabase client as well for other operations
export { supabase };
