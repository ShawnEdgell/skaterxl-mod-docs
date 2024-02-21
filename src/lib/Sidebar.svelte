<script>
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	// Categories for Alpha v1.2.2.8
	const option1Categories = [
		{
			name: 'XXL 3 Mod',
			route: '/Alpha/XXL3Mod'
		},
		{
			name: 'XL Graphics',
			route: '/Alpha/XLGraphics'
		},
		{
			name: 'Sound Mod',
			route: '/Alpha/SoundMod'
		},
		{
			name: 'Deck FX',
			route: '/Alpha/DeckFX'
		},
		{
			name: 'XL Gear Modifier',
			route: '/Alpha/XLGearMod'
		},
		{
			name: "Fro's Experimental Mod",
			route: '/Alpha/FroMod'
		},
		{
			name: 'Boned Ollie Mod',
			route: '/Alpha/BonedOllieMod'
		},
		{
			name: 'Walking Mod',
			route: '/Alpha/WalkingMod'
		},
		{
			name: 'XL Menu Mod',
			route: '/Alpha/XLMenuMod'
		},
		{
			name: 'Multiplayer++',
			route: '/Alpha/Multiplayer++'
		},
		{
			name: 'Decal Fix',
			route: '/Alpha/DecalFix'
		},
		{
			name: 'Better Replay Mod',
			route: '/Alpha/BetterReplayMod'
		},
		{
			name: 'Grind Tools',
			route: '/Alpha/GrindTools'
		},
		{
			name: 'Grab Customizer',
			route: '/Alpha/GrabCustomizer'
		},
		{
			name: 'Lateflip Mod',
			route: '/Alpha/LateflipMod'
		},
		{
			name: 'XL Object Dropper',
			route: '/Alpha/XLObjectDropper'
		},
		{
			name: 'Better Object Dropper',
			route: '/Alpha/BetterObjectDropper'
		},
		{
			name: 'XL Random Map',
			route: '/Alpha/XLRandomMap'
		},
		{
			name: 'Break FX',
			route: '/Alpha/BreakFX'
		},
		{
			name: 'Gear Utilities',
			route: '/Alpha/GearUtilities'
		},
		{
			name: 'Controls Editor',
			route: '/Alpha/ControlsEditor'
		},
		{
			name: 'Not My Feet',
			route: '/Alpha/NotMyFeet'
		},
		{
			name: 'Controller Rumble',
			route: '/Alpha/ControllerRumble'
		}
	];

	// Categories for Public v1.2.7.8
	const option2Categories = [
		{
			name: 'XL Mod',
			route: '/Public/XLMod'
		},
		{
			name: 'XL Graphics',
			route: '/Public/XLGraphics'
		},
		{
			name: 'Sound Mod',
			route: '/Public/SoundMod'
		},
		{
			name: 'Deck Tools',
			route: '/Public/DeckTools'
		},
		{
			name: "Fro's Experimental Mod",
			route: '/Public/FroMod'
		},
		{
			name: 'Boned Ollie Mod',
			route: '/Public/BonedOllieMod'
		},
		{
			name: 'Grind Tools',
			route: '/Public/GrindTools'
		},
		{
			name: 'Shape FX',
			route: '/Public/ShapeFX'
		},
		{
			name: 'Better Replay Mod',
			route: '/Public/BetterReplayMod'
		},
		{
			name: 'XL Menu Mod',
			route: '/Public/XLMenuMod'
		},
		{
			name: 'Multiplayer++',
			route: '/Public/Multiplayer++'
		}
	];

	// Store to track the open state of each category
	const openCategory = writable(null);

	let currentCategories = option1Categories;
	let isOption1Selected = true;
	let isDropdownOpen = false; // Change from const to let

	const option1Route = '/Alpha/About';
	const option2Route = '/Public/About';

	// Variable to hold the current version
	let currentVersion = 'v1.2.2.8';

	// Function to toggle the dropdown state
	function toggleDropdown() {
		isDropdownOpen = !isDropdownOpen;
	}

	// This function will close the dropdown when clicked outside
	function handleOutsideClick(event) {
		if (!event.target.closest('.relative')) {
			isDropdownOpen = false;
		}
	}

	onMount(() => {
		// Add event listener to close dropdown when clicked outside
		document.addEventListener('click', handleOutsideClick);

		// Cleanup function to remove event listener when component is destroyed
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	});

	async function selectOption(isOption1) {
		isOption1Selected = isOption1;
		currentCategories = isOption1 ? option1Categories : option2Categories;
		openCategory.set(null);
		await goto(isOption1 ? option1Route : option2Route);

		// Update the current version when option is selected
		currentVersion = isOption1 ? 'v1.2.2.8' : 'v1.2.7.8';
	}

	async function handleCategoryClick(event, categoryName) {
		event.preventDefault();
		const href = event.currentTarget.getAttribute('href');
		const isSubcategoryClick = href.includes(`${categoryName}/`);

		if ($openCategory === categoryName && !isSubcategoryClick) {
			openCategory.set(null);
		} else {
			openCategory.set(categoryName);
		}

		await goto(href);
	}

	// Close categories when navigating away
	$: if (
		$page.url.pathname &&
		!currentCategories.some((category) => $page.url.pathname.startsWith(category.route))
	) {
		openCategory.set(null);
	}

	// Update the default dropdown menu selection based on the current page
	if ($page.url.pathname === option1Route) {
		isOption1Selected = true;
		currentVersion = 'v1.2.2.8';
	} else if ($page.url.pathname === option2Route) {
		isOption1Selected = false;
		currentVersion = 'v1.2.7.8';
	}
</script>

<aside class="min-w-max text-base h-full p-4 overflow-y-auto">
	<div class="my-2 relative rounded-lg flex">
		<button
			class="font-bold text-sm px-4 py-2 bg-blue-500 text-white rounded-full"
			on:click={toggleDropdown}
		>
			{currentVersion}
			<svg
				class="w-4 h-4 inline-block ml-1"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
				></path>
			</svg>
		</button>
		{#if isDropdownOpen}
			<div class="absolute z-50 mt-10 w-50 bg-white rounded-lg shadow-lg border border-gray-300">
				{#if isOption1Selected}
					<button
						class="block w-full text-left px-4 py-2 text-sm text-blue-500 font-bold hover:bg-gray-200"
						on:click={() => {
							selectOption(true);
							toggleDropdown();
						}}
					>
						v1.2.2.8 (Alpha)
						<svg
							class="w-6 h-6 inline-block ml-1 text-blue-500"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="10" cy="10" r="6" fill="currentColor"></circle>
						</svg>
					</button>
				{:else}
					<button
						class="block w-full text-left px-4 py-2 text-sm text-gray-800 font-bold hover:bg-gray-200"
						on:click={() => {
							selectOption(true);
							toggleDropdown();
						}}
					>
						v1.2.2.8 (Alpha)
					</button>
				{/if}
				{#if !isOption1Selected}
					<button
						class="block w-full text-left px-4 py-2 text-sm text-blue-500 font-bold hover:bg-gray-200"
						on:click={() => {
							selectOption(false);
							toggleDropdown();
						}}
					>
						v1.2.2.8 (Public)
						<svg
							class="w-6 h-6 inline-block ml-1 text-blue-500"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="10" cy="10" r="6" fill="currentColor"></circle>
						</svg>
					</button>
				{:else}
					<button
						class="block w-full text-left px-4 py-2 text-sm text-gray-800 font-bold hover:bg-gray-200"
						on:click={() => {
							selectOption(false);
							toggleDropdown();
						}}
					>
						v1.2.2.8 (Public)
					</button>
				{/if}
			</div>
		{/if}
	</div>

	<h3 class="text-sm tracking-wide mb-2 mt-4 pb-2">Essential Mods</h3>
	<ul class="list-none m-0 p-0">
		{#each currentCategories.slice(0, 5) as category}
			<li class="mb-0">
				<a
					href={category.route}
					on:click={(event) => handleCategoryClick(event, category.name)}
					class={`text-sm font-normal block px-4 py-1 border-l-2 ${$openCategory === category.name ? 'text-custom-green border-custom-green hover:text-custom-green' : 'text-white border-neutral-800 hover:border-custom-green hover:text-custom-green'}`}
				>
					{category.name}
				</a>
			</li>
		{/each}
	</ul>

	<h3 class="text-sm tracking-wide mt-4 mb-2 pb-2">Other Mods</h3>
	<ul class="list-none m-0 p-0">
		{#each currentCategories.slice(5) as category}
			<li class="mb-0">
				<a
					href={category.route}
					on:click={(event) => handleCategoryClick(event, category.name)}
					class={`text-sm font-normal block px-4 py-1 border-l-2 ${$openCategory === category.name ? 'text-custom-green border-custom-green hover:text-custom-green' : 'text-white border-neutral-800 hover:border-custom-green hover:text-custom-green'}`}
				>
					{category.name}
				</a>
			</li>
		{/each}
	</ul>
</aside>
