<script>
    import { writable } from 'svelte/store';
  
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
        name: 'Boned Ollie Mod',
        subcategories: ['Page 1', 'Page 2'],
        route: '/BonedOllieMod'
      }
    ];
  
    function toggleCategory(categoryName) {
      openCategory.update(current => current === categoryName ? null : categoryName);
    }
  </script>
  
  <aside class="bg-gray-300 min-w-max h-screen p-4 overflow-y-auto">
    <nav>
      <ul class="list-none m-0 p-0">
        {#each categories as category}
          <li class="mb-2">
            <a href={category.route} on:click|preventDefault={() => toggleCategory(category.name)} class="block hover:text-blue-500 px-2 py-1">
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

  