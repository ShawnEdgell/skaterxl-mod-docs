<script>
    import { push } from 'svelte-spa-router';
    export let toggleSidebar;
    
    function navigateHome() {
      push('/');
    }
  </script>
  
  <header class="bg-blue-500 text-white p-4 flex justify-between items-center">
    <h1 class="text-lg cursor-pointer" on:click={navigateHome}>
      Skater XL Modding Docs
    </h1>
    <button class="md:hidden" on:click={toggleSidebar}>☰</button>
  </header>
  