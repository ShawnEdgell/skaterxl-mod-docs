<script>
	import { logIn, logOut, onAuthStateChange } from '$lib/supabaseClient';
	import { goto } from '$app/navigation';
	import { onMount, onDestroy } from 'svelte';

	let email = '';
	let password = '';
	let loading = false;
	let message = '';
	let isLoggedIn = false;

	async function handleLogin() {
		loading = true;
		try {
			await logIn(email, password);
			isLoggedIn = true;
			message = 'Login successful!';
			goto('/');
		} catch (error) {
			console.error('Error logging in:', error.message);
			message = 'Error logging in: ' + error.message;
			isLoggedIn = false;
		} finally {
			loading = false;
		}
	}

	async function handleLogout() {
		loading = true;
		try {
			await logOut();
			isLoggedIn = false;
			message = 'Logged out successfully!';
			goto('/Login');
		} catch (error) {
			console.error('Error logging out:', error.message);
			message = 'Error logging out: ' + error.message;
		} finally {
			loading = false;
		}
	}

	// Initialize authListener outside of onMount to avoid reactivity issues
	let authListener;

	onMount(() => {
		authListener = onAuthStateChange((event, session) => {
			isLoggedIn = !!session;
		});
	});

	onDestroy(() => {
		// Ensure you're calling unsubscribe correctly
		if (authListener && typeof authListener.unsubscribe === 'function') {
			authListener.unsubscribe();
		}
	});
</script>

<div class="min-h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-md w-full space-y-8">
		<div>
			<h2 class="text-white mt-6 text-center text-3xl font-extrabold">Log In</h2>
		</div>
		{#if !isLoggedIn}
			<form class="mt-8 space-y-6" on:submit|preventDefault={handleLogin}>
				<input
					type="email"
					bind:value={email}
					placeholder="Email"
					required
					class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
				/>
				<input
					type="password"
					bind:value={password}
					placeholder="Password"
					required
					class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
				/>
				<button
					type="submit"
					disabled={loading}
					class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
				>
					{loading ? 'Logging in...' : 'Log In'}
				</button>
				{#if message}<p class="mt-2 text-center text-sm text-red-600">{message}</p>{/if}
			</form>
		{:else}
			<div class="mt-8 flex justify-center">
				<button
					type="button"
					on:click={handleLogout}
					disabled={loading}
					class="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
				>
					{loading ? 'Logging out...' : 'Log Out'}
				</button>
			</div>
		{/if}
	</div>
</div>
