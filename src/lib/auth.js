import { supabase } from './supabaseClient';

export async function signInWithDiscord() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
    });

    // Handle the response
    if (error) console.error('Error signing in:', error.message);
    else console.log('Signed in successfully', data);
}

export async function signOut() {
    const { error } = await supabase.auth.signOut();

    // Handle the response
    if (error) console.error('Error signing out:', error.message);
    else console.log('Signed out successfully');
}