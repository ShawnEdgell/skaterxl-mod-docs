<!-- Header.svelte -->

<script>
	import { onMount, onDestroy } from 'svelte';
	import { onAuthStateChange, logOut, getSession } from '$lib/supabaseClient';
	import { goto } from '$app/navigation';

	let isLoggedIn = false;
	let authListener;

	onMount(() => {
		authListener = onAuthStateChange((event, session) => {
			isLoggedIn = !!session;
		});
	});

	onDestroy(() => {
		if (authListener && typeof authListener.unsubscribe === 'function') {
			authListener.unsubscribe();
		}
	});

	function handleLoginClick() {
		if (isLoggedIn) {
			handleLogout();
		} else {
			goto('/Login');
		}
	}

	async function handleLogout() {
		try {
			await logOut();
			isLoggedIn = false;
			goto('/Login');
		} catch (error) {
			console.error('Error logging out:', error.message);
		}
	}
</script>

<header class="sticky top-0 bg-custom-bluegray-light p-2 md:p-4 flex items-center justify-between">
	<nav class="text-xs sm:text-base flex items-center">
		<!-- Navigation Links -->
		<a href="/" sveltekit-prefetch class="font-bold text-white mx-2 sm:mx-6">Home</a>
		<a href="/GettingStarted" sveltekit-prefetch class="font-bold text-white mx-2 sm:mx-6"
			>Getting Started</a
		>
		<a href="/Maps&Gear" sveltekit-prefetch class="font-bold text-white mx-2 sm:mx-6">Maps & Gear</a
		>
		<a href="/XLHub" sveltekit-prefetch class="font-bold text-white mx-2 sm:mx-6">XL Hub</a>
		<a href="/Stats" sveltekit-prefetch class="font-bold text-white mx-2 sm:mx-6">Stats</a>
	</nav>

	<!-- Login/Logout Button -->
	<button
		on:click={handleLoginClick}
		class="group relative py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-{isLoggedIn
			? 'red'
			: 'blue'}-600 hover:bg-{isLoggedIn
			? 'red'
			: 'blue'}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-{isLoggedIn
			? 'red'
			: 'blue'}-500"
		style="position: sticky; top: 0; z-index: 100;"
	>
		{isLoggedIn ? 'Logout' : 'Login'}
	</button>
</header>
