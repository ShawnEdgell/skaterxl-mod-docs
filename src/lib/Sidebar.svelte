<script>
  import { writable } from 'svelte/store';
  import { goto } from '$app/navigation';
  
    // Store to track the open state of each category
    const openCategory = writable(null);
  
    const categories = [
      {
        name: 'XXL 3 Mod',
        subcategories: ['General', 'Catch', 'Flips', 'Lateflips', 'Grabs', 'Fingerflips', 'Footplants', 'Grinds', 'Manuals', 'Powerslides', 'Primo', 'Misc', 'Bails', 'Slowmotion', 'Other', 'Grab Customizer', 'Steeze Customizer', 'Stance Customizer', 'Pin Manager', 'Presets', 'Debug'],
        route: '/XXL 3 Mod'
      },
      {
        name: 'Fro\'s Experimental Mod',
        subcategories: ['Animations', 'Body', 'Head', 'Camera', 'Gameplay', 'Multiplayer', 'Misc', 'Map', 'Experimental'],
        route: '/FroMod'
      },
      {
        name: 'XL Graphics',
        subcategories: ['Basic', 'Presets', 'Camera'],
        route: '/XLGraphics'
      },
      {
        name: 'Deck FX',
        subcategories: ['Page 1', 'Page 2'],
        route: '/DeckFX'
      },
      {
        name: 'Sound Mod',
        subcategories: ['Soundpacks',],
        route: '/SoundMod'
      },
      {
        name: 'Boned Ollie Mod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/BonedOllieMod'
      },
      {
        name: 'XL Gear Mod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/XLGearMod'
      },
/*
      {
        name: 'WalkingMod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/WalkingMod'
      },
      {
        name: 'XL Menu Mod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/XLMenuMod'
      },
      {
        name: 'Multiplayer++',
        subcategories: ['Page 1', 'Page 2'],
        route: '/Multiplayer++'
      },
      {
        name: 'Better Replay Mod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/BetterReplayMod'
      },
      {
        name: 'Grind Tools',
        subcategories: ['Page 1', 'Page 2'],
        route: '/GrindTools'
      },
      {
        name: 'Lateflip Mod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/LateflipMod'
      },
      {
        name: 'XL Object Dropper',
        subcategories: ['Page 1', 'Page 2'],
        route: '/XLObjectDropper'
      },
      {
        name: 'Better Object Dropper',
        subcategories: ['Page 1', 'Page 2'],
        route: '/BetterObjectDropper'
      },
      {
        name: 'DecalFix',
        subcategories: ['Page 1', 'Page 2'],
        route: '/DecalFix'
      },
      {
        name: 'XL Random Map',
        subcategories: ['Page 1', 'Page 2'],
        route: '/XLRandomMap'
      },
      {
        name: 'Break FX',
        subcategories: ['Page 1', 'Page 2'],
        route: '/BreakFX'
      },
      {
        name: 'Gear Utilities',
        subcategories: ['Page 1', 'Page 2'],
        route: '/GearUtilities'
      },
      {
        name: 'Exposure Controller',
        subcategories: ['Page 1', 'Page 2'],
        route: '/ExposureController'
      },
      {
        name: 'Map Editor',
        subcategories: ['Page 1', 'Page 2'],
        route: '/MapEditor'
      },
      {
        name: 'Grab Customizer',
        subcategories: ['Page 1', 'Page 2'],
        route: '/GrabCustomizer'
      },
      {
        name: 'Controls Editor',
        subcategories: ['Page 1', 'Page 2'],
        route: '/ControlsEditor'
      },
      {
        name: 'Not My Feet',
        subcategories: ['Page 1', 'Page 2'],
        route: '/NotMyFeet'
      },
      {
        name: 'Bill \'O Rumble',
        subcategories: ['Page 1', 'Page 2'],
        route: '/BillORumble'
      },
*/
    ];
  
    async function handleCategoryClick(event, categoryName) {
    event.preventDefault(); // Prevents default link behavior

    // Toggle the visibility state
    openCategory.update(current => current === categoryName ? null : categoryName);

    // Navigate to the category page only if expanding
    if (categoryName !== null) {
      await goto(event.currentTarget.getAttribute('href'));
    }
  }
</script>

<aside class="bg-gray-300 min-w-max h-screen p-4 overflow-y-auto">
  <nav>
    <ul class="list-none m-0 p-0">
      {#each categories as category}
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
  