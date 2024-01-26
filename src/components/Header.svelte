<script>
    export let toggleSidebar;
</script>

<header class="bg-blue-500 text-white p-4 flex justify-between items-center">
    <h1 class="text-lg">Documentation Guide</h1>
    <button class="md:hidden" on:click={toggleSidebar}>☰</button>
</header>
