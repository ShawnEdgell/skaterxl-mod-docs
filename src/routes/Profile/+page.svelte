<script>
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';
	import { goto } from '$app/navigation';

	onMount(async () => {
		// Correctly call session() as a method to retrieve the current session
		const {
			data: { session },
			error
		} = await supabase.auth.getSession();

		if (session) {
			console.log('Session found:', session);
			goto('/Profile'); // Adjust as needed
		} else {
			console.error('No session found. Redirecting to login.', error);
			goto('/Login'); // Adjust as needed
		}
	});
</script>

{#if user}
	<div>
		<p>Welcome, {user.email}!</p>
	</div>
{:else}
	<p>User not found. Please <a href="/Login">login</a>.</p>
{/if}
