<script>
	// Import necessary modules
	import { onDestroy } from 'svelte';
	import { onAuthStateChange, logOut } from '$lib/supabaseClient';
	import { goto } from '$app/navigation';

	// Define props and variables
	export let toggleSidebar;
	export let isSidebarVisible;
	let isLoggedIn = false;
	let authListener;
	let showMenu = false;

	// Function to handle login click
	function handleLoginClick() {
		if (isLoggedIn) {
			handleLogout();
		} else {
			goto('/Login');
		}
	}

	// Function to handle logout
	async function handleLogout() {
		try {
			await logOut();
			isLoggedIn = false;
			goto('/Login');
		} catch (error) {
			console.error('Error logging out:', error.message);
		}
	}

	// Function to toggle menu for smaller screens
	function toggleMenu() {
		showMenu = !showMenu;
	}

	// On component destruction, unsubscribe from authListener
	onDestroy(() => {
		if (authListener && typeof authListener.unsubscribe === 'function') {
			authListener.unsubscribe();
		}
	});

	// On mount, set up authListener
	onAuthStateChange((event, session) => {
		isLoggedIn = !!session;
	});
</script>

<header
	class="sticky top-0 z-9999 bg-custom-bluegray-light p-4 flex items-center justify-between w-full"
>
	<!-- Green Button -->
	<button
		class="p-2 mr-3 rounded-full bg-custom-green text-custom-bluegray-dark md:hidden"
		on:click={toggleSidebar}
	>
		<!-- Toggle sidebar icon -->
		{#if isSidebarVisible}
			<!-- Icon for "Hide Sidebar" (X icon) -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		{:else}
			<!-- Icon for "Show Sidebar" (Burger menu icon) -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16m-7 6h7"
				/>
			</svg>
		{/if}
	</button>

	<!-- Navigation Links: Hidden on small screens and visible on larger screens -->
	<nav class="hidden pl-3 md:flex flex-grow space-x-10">
		<a href="/" sveltekit-prefetch class="font-bold text-white">Home</a>
		<a href="/GettingStarted" sveltekit-prefetch class="font-bold text-white">Getting Started</a>
		<a href="/Maps&Gear" sveltekit-prefetch class="font-bold text-white">Maps & Gear</a>
		<a href="/XLHub" sveltekit-prefetch class="font-bold text-white">XL Hub</a>
		<a href="/Stats" sveltekit-prefetch class="font-bold text-white">Stats</a>
	</nav>

	<!-- Custom Menu Button with Increased Click Radius -->
	<button on:click={toggleMenu} class="md:hidden flex items-center justify-center -m-4">
		<!-- Custom SVG Icon for Menu -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 text-white transform m-4 rotate-180"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			aria-hidden="true"
		>
			<!-- Adjusted path data for a V pointing down -->
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7 7 7" />
		</svg>
	</button>

	<!-- Login Button: Always aligned to the right -->
	<div class="flex-none">
		<button
			on:click={handleLoginClick}
			class="text-sm px-2 py-1 md:px-4 md:py-2 border border-transparent rounded-md text-white bg-{isLoggedIn
				? 'red'
				: 'blue'}-600 hover:bg-{isLoggedIn
				? 'red'
				: 'blue'}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-{isLoggedIn
				? 'red'
				: 'blue'}-500"
		>
			{isLoggedIn ? 'Logout' : 'Login'}
		</button>
	</div>

	{#if showMenu}
		<!-- Dropdown Menu for Smaller Screens -->
		<nav
			class="absolute top-full left-0 w-full bg-custom-bluegray-light p-2 flex flex-col items-center md:hidden"
		>
			<a
				href="/"
				sveltekit-prefetch
				class="font-bold text-white my-2"
				on:click={() => (showMenu = false)}>Home</a
			>
			<a
				href="/GettingStarted"
				sveltekit-prefetch
				class="font-bold text-white my-2"
				on:click={() => (showMenu = false)}>Getting Started</a
			>
			<a
				href="/Maps&Gear"
				sveltekit-prefetch
				class="font-bold text-white my-2"
				on:click={() => (showMenu = false)}>Maps & Gear</a
			>
			<a
				href="/XLHub"
				sveltekit-prefetch
				class="font-bold text-white my-2"
				on:click={() => (showMenu = false)}>XL Hub</a
			>
			<a
				href="/Stats"
				sveltekit-prefetch
				class="font-bold text-white my-2"
				on:click={() => (showMenu = false)}>Stats</a
			>
		</nav>
	{/if}
</header>
