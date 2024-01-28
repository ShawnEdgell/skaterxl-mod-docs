<script>
  import { goto } from '$app/navigation';
  import { writable } from 'svelte/store';
  
    // Store to track the open state of each category
    const openCategory = writable(null);
  
    const option1Categories = [
      {
        name: 'XXL 3 Mod',
        subcategories: ['General', 'Catch', 'Flips', 'Lateflips', 'Grabs', 'Fingerflips', 'Footplants', 'Grinds', 'Manuals', 'Powerslides', 'Primo', 'Misc', 'Bails', 'Slowmotion', 'Other', 'Grab Customizer', 'Steeze Customizer', 'Stance Customizer', 'Pin Manager', 'Presets', 'Debug'],
        route: '/Alpha/XXL 3 Mod'
      },
      {
        name: 'Fro\'s Experimental Mod',
        subcategories: ['Animations', 'Body', 'Head', 'Camera', 'Gameplay', 'Multiplayer', 'Misc', 'Map', 'Experimental'],
        route: '/Alpha/FroMod'
      },
      {
        name: 'XL Graphics',
        subcategories: ['Basic', 'Presets', 'Camera'],
        route: '/Alpha/XLGraphics'
      },
      {
        name: 'Deck FX',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/DeckFX'
      },
      {
        name: 'Sound Mod',
        subcategories: ['Soundpacks',],
        route: '/Alpha/SoundMod'
      },
      {
        name: 'Boned Ollie Mod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/BonedOllieMod'
      },
      {
        name: 'XL Gear Mod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/XLGearMod'
      },
      {
        name: 'Walking Mod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/WalkingMod'
      },
      {
        name: 'XL Menu Mod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/XLMenuMod'
      },
      {
        name: 'Multiplayer++',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/Multiplayer++'
      },
      {
        name: 'Better Replay Mod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/BetterReplayMod'
      },
      {
        name: 'Grind Tools',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/GrindTools'
      },
      {
        name: 'Lateflip Mod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/LateflipMod'
      },
      {
        name: 'XL Object Dropper',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/XLObjectDropper'
      },
      {
        name: 'Better Object Dropper',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/BetterObjectDropper'
      },
      {
        name: 'DecalFix',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/DecalFix'
      },
      {
        name: 'XL Random Map',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/XLRandomMap'
      },
      {
        name: 'Break FX',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/BreakFX'
      },
      {
        name: 'Gear Utilities',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/GearUtilities'
      },
      {
        name: 'Grab Customizer',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/GrabCustomizer'
      },
      {
        name: 'Controls Editor',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/ControlsEditor'
      },
      {
        name: 'Not My Feet',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/NotMyFeet'
      },
      {
        name: 'Controller Rumble',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/ControllerRumble'
      },
/*
      {
        name: 'Exposure Controller',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/ExposureController'
      },
      {
        name: 'Map Editor',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/MapEditor'
      },
*/

    ];
  
   // Categories for Option 2
  const option2Categories = [
    {
        name: 'XL Graphics',
        subcategories: ['Basic', 'Presets', 'Camera'],
        route: '/Alpha/XLGraphics'
    },
    {
        name: 'Sound Mod',
        subcategories: ['Soundpacks',],
        route: '/Alpha/SoundMod'
      },
    // Add more categories for Option 2
  ];

  let currentCategories = option1Categories; // Start with Option 1
  let isOption1Selected = true; // State to track which option is selected

  const option1Route = '/Alpha/About'; // Replace with your actual route
  const option2Route = '/Public/About'; // Replace with your actual route

  async function selectOption(isOption1) {
    isOption1Selected = isOption1;
    currentCategories = isOption1 ? option1Categories : option2Categories;

    // Navigate to the respective page
    await goto(isOption1 ? option1Route : option2Route);
  }

  async function handleCategoryClick(event, categoryName) {
    event.preventDefault(); // Prevents default link behavior
    openCategory.update(current => current === categoryName ? null : categoryName);
    if (categoryName !== null) {
      await goto(event.currentTarget.getAttribute('href'));
    }
  }
</script>

<aside class="bg-gray-300 min-w-max font-lg h-screen text-gray-900 p-4 overflow-y-auto">
  <div class="mb-4">
    <button
      class={`px-4 py-2 ${isOption1Selected ? 'bg-green-500 text-white' : 'bg-white text-gray-500'} rounded-l`}
      on:click={() => selectOption(true)}>
      v1.2.2.8
    </button>
    <button
      class={`px-4 py-2 ${isOption1Selected ? 'bg-white text-gray-500' : 'bg-green-500 text-white'} rounded-r`}
      on:click={() => selectOption(false)}>
      v1.2.7.8
    </button>
  </div>
  <nav>
    <ul class="list-none m-0 p-0">
      {#each currentCategories as category}
        <li class="mb-2">
          <a href={category.route} on:click={(event) => handleCategoryClick(event, category.name)} class="block hover:text-blue-500 px-2 py-1">
            {category.name}
          </a>
          {#if $openCategory === category.name}
            <ul class="list-none m-0 p-0">
              {#each category.subcategories as sub}
                <li>
                  <a href={`${category.route}/${sub}`} class="block hover:text-blue-500 pl-6 pr-2 py-1">{sub}</a>
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>
</aside>