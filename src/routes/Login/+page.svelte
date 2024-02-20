<script>
	import { onMount, onDestroy } from 'svelte';
	import { onAuthStateChange, logIn, logOut, getSession } from '$lib/supabaseClient';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let loading = false;
	let message = '';
	let isLoggedIn = false;

	let authListener;

	onMount(() => {
		authListener = onAuthStateChange((event, session) => {
			isLoggedIn = !!session;
		});

		checkSession();
	});

	onDestroy(() => {
		if (authListener && typeof authListener.unsubscribe === 'function') {
			authListener.unsubscribe();
		}
	});

	async function checkSession() {
		const session = getSession();
		if (session) {
			isLoggedIn = true;
			goto('/');
		}
	}

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
</script>

<div class="flex justify-center max-w-4xl mx-auto py-6">
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
					class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
				/>
				<input
					type="password"
					bind:value={password}
					placeholder="Password"
					required
					class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
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
					class="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
				>
					{loading ? 'Logging out...' : 'Log Out'}
				</button>
			</div>
		{/if}
		<p class="text-center mt-4">
			Need an account? <a href="/SignUp" class="text-blue-500 hover:text-blue-600">Sign Up</a>
		</p>
	</div>
</div>
