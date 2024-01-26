<script>
    import { push } from 'svelte-spa-router';
    import { slide } from 'svelte/transition';
    
    export let isSidebarOpen; // Declare isSidebarOpen as a prop

    let openCategory = null;

    const categories = [
        { 
            name: 'XXL 3 Mod', 
            route: '/XXL3', 
            subcategories: [
                { name: 'General', route: '/XXL3/General' },
                { name: 'Catch', route: '/XXL3/Catch' },
                { name: 'Flips', route: '/XXL3/Flips' },
                { name: 'Lateflips', route: '/XXL3/Lateflips' },
                { name: 'Grabs', route: '/XXL3/Grabs' },
                { name: 'Fingerflips', route: '/XXL3/Fingerflips' },
                { name: 'Footplants', route: '/XXL3/Footplants' },
                { name: 'Grinds', route: '/XXL3/Grinds' },
                { name: 'Manuals', route: '/XXL3/Manuals' },
                { name: 'Powerslides', route: '/XXL3/Powerslides' },
                { name: 'Primo', route: '/XXL3/Primo' },
                { name: 'Misc', route: '/XXL3/Misc' },
                { name: 'Bails', route: '/XXL3/Bails' },
                { name: 'Slowmotion', route: '/XXL3/Slowmotion' },
                { name: 'Other', route: '/XXL3/Other' },
                { name: 'Grab Customizer', route: '/XXL3/GrabCustomizer' },
                { name: 'Steeze Customizer', route: '/XXL3/SteezeCustomizer' },
                { name: 'Stance Customizer', route: '/XXL3/StanceCustomizer' },
                { name: 'Pin Manager', route: '/XXL3/PinManager' },
                { name: 'Presets', route: '/XXL3/Presets' },
            ] 
        },
        { 
            name: 'Fro\'s Experimental Mod', 
            route: '/FroMod', 
            subcategories: [
                { name: 'Animations', route: '/FroMod/Animations' },
                { name: 'Body', route: '/FroMod/Body' },
                { name: 'Head', route: '/FroMod/Head' },
                { name: 'Camera', route: '/FroMod/Camera' },
                { name: 'Gameplay', route: '/FroMod/Gameplay' },
                { name: 'Multiplayer', route: '/FroMod/Multiplayer' },
                { name: 'Misc', route: '/FroMod/Misc' },
                { name: 'Map', route: '/FroMod/Map' },
                { name: 'Experimental', route: '/FroMod/Experimental' }
            ] 
        },
        { 
            name: 'Boned Ollie Mod', 
            route: '/BonedOllieMod', 
            subcategories: [
                { name: 'Trick Examples', route: '/BonedOllieMod/TrickExamples' },
                // Add subcategories for Page 3 here
            ] 
        },
        { 
            name: 'XL Graphics Mod', 
            route: '/XLGraphics', 
            subcategories: [
                { name: 'Basic', route: '/XLGraphics/Basic' },
                { name: 'Presets', route: '/XLGraphics/Presets' },
                { name: 'Camera', route: '/XLGraphics/Camera' },
                // Add subcategories for Page 3 here
            ] 
        },
        { 
            name: 'Sound Mod', 
            route: '/SoundMod', 
            subcategories: [
                { name: 'Sound Packs', route: '/SoundMod/SoundPacks' },
                // Add subcategories for Page 3 here
            ] 
        },

        // Add more main categories as needed
    ];

    function handleCategoryClick(category, route) {
        openCategory = openCategory === category ? null : category;
        push(route);
    }
    function navigateHome() {
        openCategory = null;
        push('/');
    }
</script>

<aside class={`bg-gray-200 w-64 min-h-screen p-4 fixed transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 overflow-y-auto`}>
    <button class="w-full text-left font-bold py-2 px-4 hover:bg-gray-300" on:click={navigateHome}>Home</button>
    
    {#each categories as category}
        <div>
            <button class="w-full text-left font-bold py-2 px-4 hover:bg-gray-300" on:click={() => handleCategoryClick(category.name, category.route)}>{category.name}</button>
            {#if openCategory === category.name}
                <div transition:slide class="pl-6">
                    {#each category.subcategories as subcategory}
                        <button class="w-full text-left py-2 px-4 hover:bg-gray-300" on:click={() => push(subcategory.route)}>{subcategory.name}</button>
                    {/each}
                </div>
            {/if}
        </div>
    {/each}
</aside>
