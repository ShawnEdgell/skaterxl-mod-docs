<script>
	import { supabase } from '$lib/supabaseClient'; // Adjust the path as needed
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	// Check if the user is already logged in
	onMount(async () => {
		const {
			data: { session }
		} = await supabase.auth.getSession();
		if (session) {
			goto('/Profile'); // Redirect to the profile page if already logged in
		}
	});

	async function signInWithDiscord() {
		await supabase.auth.signInWithOAuth({
			provider: 'discord',
			options: { redirectTo: window.location.origin + '/Profile' }
		});
	}
</script>

<button on:click={signInWithDiscord}>Login with Discord</button>
