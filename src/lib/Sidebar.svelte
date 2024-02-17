<script>
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';

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

	const option1Route = '/Alpha/About';
	const option2Route = '/Public/About';

	async function selectOption(isOption1) {
		isOption1Selected = isOption1;
		currentCategories = isOption1 ? option1Categories : option2Categories;
		openCategory.set(null);
		await goto(isOption1 ? option1Route : option2Route);
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
</script>

<aside class="bg-custom-bluegray-mid min-w-max text-base h-screen p-4 overflow-y-auto pb-40">
	<h2 class="p-0 m-1 font-bold text-lg text-center">Skater XL Version:</h2>
	<div class="mb-2 flex justify-center">
		<button
			class={`font-bold px-4 py-1 border-b-4 ${isOption1Selected ? 'border-custom-green text-white' : 'border-transparent text-neutral-600'} hover:text-white hover:border-custom-green rounded-l transition-colors duration-150`}
			on:click={() => selectOption(true)}
		>
			v1.2.2.8
		</button>
		<button
			class={`font-bold px-4 py-1 border-b-4 ${!isOption1Selected ? 'border-custom-green text-white' : 'border-transparent text-neutral-600'} hover:text-white hover:border-custom-green rounded-r transition-colors duration-150`}
			on:click={() => selectOption(false)}
		>
			v1.2.7.8
		</button>
	</div>

	<h3 class="text-sm uppercase tracking-wide mb-2 mt-8 pb-2">Essential Mods</h3>
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

	<h3 class="text-sm uppercase tracking-wide mt-8 mb-2 pb-2">Other Mods</h3>
	<ul class="list-none m-0 p-0">
		{#each currentCategories.slice(5) as category}
			<li class="mb-0">
				<a
					href={category.route}
					on:click={(event) => handleCategoryClick(event, category.name)}
					class={`text-sm font-normal block px-4  py-1 border-l-2 ${$openCategory === category.name ? 'text-custom-green border-custom-green hover:text-custom-green' : 'text-white border-neutral-800 hover:border-custom-green hover:text-custom-green'}`}
				>
					{category.name}
				</a>
			</li>
		{/each}
	</ul>
</aside>
