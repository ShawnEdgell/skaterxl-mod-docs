import { writable } from 'svelte/store';

export const currentSite = writable('site1'); // default to 'site1'
export const isSidebarVisible = writable(false);