<script>
    import { push } from 'svelte-spa-router';
    
    export let isSidebarOpen; // Declare isSidebarOpen as a prop

    let openCategory = null;

    const categories = [
        { 
            name: 'Page 1', 
            route: '/page1', 
            subcategories: [
                { name: 'Subpage 1A', route: '/page1/subpage1a' },
                { name: 'Subpage 1B', route: '/page1/subpage1b' }
            ] 
        },
        { 
            name: 'Page 2', 
            route: '/page2', 
            subcategories: [
                { name: 'Subpage 2A', route: '/page2/subpage2a' }
                // Add more subcategories for Page 2 as needed
            ] 
        },
        { 
            name: 'Page 3', 
            route: '/page3', 
            subcategories: [
                // Add subcategories for Page 3 here
            ] 
        }
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

<aside class={`bg-gray-200 w-64 min-h-screen p-4 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0`}>
    <button class="block text-black py-2 font-bold" on:click={navigateHome}>Home</button>
    
    {#each categories as category}
        <div>
            <button class="block text-black py-2 font-bold" on:click={() => handleCategoryClick(category.name, category.route)}>{category.name}</button>
            {#if openCategory === category.name}
                <div class="pl-4">
                    {#each category.subcategories as subcategory}
                        <button class="block text-black py-2 text-sm" on:click={() => push(subcategory.route)}>{subcategory.name}</button>
                    {/each}
                </div>
            {/if}
        </div>
    {/each}
</aside>
