<script>
  import { goto } from '$app/navigation';
  import { writable } from 'svelte/store';
  import { page } from '$app/stores';
  
    // Categories for Alpha v1.2.2.8
    const option1Categories = [
      {
        name: 'XXL 3 Mod',
        subcategories: ['General', 'Catch', 'Flips', 'Lateflips', 'Grabs', 'Fingerflips', 'Footplants', 'Grinds', 'Manuals', 'Powerslides', 'Primo', 'Misc', 'Bails', 'Slowmotion', 'Other', 'Grab Customizer', 'Steeze Customizer', 'Stance Customizer', 'Pin Manager', 'Presets', 'Debug'],
        route: '/Alpha/XXL3Mod'
      },
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
      
      {
        name: 'Deck FX',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/DeckFX'
      },
      {
        name: 'XL Gear Modifier',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/XLGearMod'
      },
      {
        name: 'Fro\'s Experimental Mod',
        subcategories: ['Animations', 'Body', 'Head', 'Camera', 'Gameplay', 'Multiplayer', 'Misc', 'Map', 'Experimental'],
        route: '/Alpha/FroMod'
      },
      {
        name: 'Boned Ollie Mod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/BonedOllieMod'
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
        name: 'Decal Fix',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/DecalFix'
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
        name: 'Grab Customizer',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Alpha/GrabCustomizer'
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
    ];
  
   // Categories for Public v1.2.7.8
  const option2Categories = [
    {
        name: 'XL Mod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Public/XLMod'
    },
    {
        name: 'XL Graphics',
        subcategories: ['Basic', 'Presets', 'Camera'],
        route: '/Public/XLGraphics'
    },
    {
        name: 'Sound Mod',
        subcategories: ['Soundpacks',],
        route: '/Public/SoundMod'
      },
      {
        name: 'Deck Tools',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Public/DeckTools'
    },
    {
        name: 'Fro\'s Experimental Mod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Public/FroMod'
    },
    {
        name: 'Boned Ollie Mod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Public/BonedOllieMod'
    },
      {
        name: 'Grind Tools',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Public/GrindTools'
    },
    {
        name: 'Shape FX',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Public/ShapeFX'
    },
    {
        name: 'Better Replay Mod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Public/BetterReplayMod'
    },
    {
        name: 'XL Menu Mod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Public/XLMenuMod'
    },
    {
        name: 'Multiplayer++',
        subcategories: ['Page 1', 'Page 2'],
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
  $: if ($page.url.pathname && !currentCategories.some(category => $page.url.pathname.startsWith(category.route))) {
      openCategory.set(null);
  }
</script>


<aside class="min-w-max text-base h-screen p-4 overflow-y-auto pb-40">
  <h2 class="p-0 m-1 font-bold text-lg text-center">Skater XL Version:</h2>
  <div class="mb-2 flex justify-center">
    <button
      class={`px-4 py-1 ${isOption1Selected ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} hover:bg-blue-400 hover:text-white rounded-l`}
      on:click={() => selectOption(true)}>
      v1.2.2.8
    </button>
    <button
      class={`px-4 py-1 ${isOption1Selected ? 'bg-gray-300 text-gray-700' : 'bg-blue-500 text-white'} hover:bg-blue-400 hover:text-white rounded-r`}
      on:click={() => selectOption(false)}>
      v1.2.7.8
    </button>
  </div>

  <h3 class="text-sm text-gray-500 uppercase tracking-wide mb-2 mt-6 text-center border-b border-gray-400 pb-1">Essentials</h3>
  <ul class="list-none m-0 p-0">
    {#each currentCategories.slice(0, 5) as category}
      <li class="mb-2">
        <a href={category.route} on:click={(event) => handleCategoryClick(event, category.name)}
           class={`block text-black px-4 py-1 rounded-full ${$openCategory === category.name ? 'bg-blue-200' : 'hover:bg-gray-200'}`}>
          {category.name}
        </a>
        {#if $openCategory === category.name}
          <ul class="list-none m-0 p-0 pl-8">
            {#each category.subcategories as sub}
              <li class="my-1">
                <a href={`${category.route}/${sub}`} class="block text-black hover:text-blue-500 px-4 py-1">{sub}</a>
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>

  <h3 class="text-sm text-gray-500 uppercase tracking-wide mb-2 text-center border-b border-gray-400 pb-1">Other Mods</h3>
  <ul class="list-none m-0 p-0">
    {#each currentCategories.slice(5) as category}
      <li class="mb-2">
        <a href={category.route} on:click={(event) => handleCategoryClick(event, category.name)}
          class={`block text-black px-4 py-1 rounded-full ${$openCategory === category.name ? 'bg-blue-200' : 'hover:bg-gray-200'}`}>
         {category.name}
        </a>
         {#if $openCategory === category.name}
          <ul class="list-none m-0 p-0 pl-8">
            {#each category.subcategories as sub}
              <li class="my-1">
                <a href={`${category.route}/${sub}`} class="block text-black hover:text-blue-500 px-4 py-1">{sub}</a>
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</aside>








