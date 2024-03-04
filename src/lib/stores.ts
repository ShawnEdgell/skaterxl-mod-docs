// src/lib/stores.ts
import { writable } from 'svelte/store';
import { supabase } from './supabaseClient';

export const isAuthenticated = writable(false);

// Use the response from getSession() correctly
supabase.auth.getSession().then((response) => {
    const session = response.data.session; // Correctly access session
    isAuthenticated.set(!!session);
});

// The onAuthStateChange listener is correctly set
supabase.auth.onAuthStateChange((_event, session) => {
    isAuthenticated.set(!!session);
});
