<script>
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import Sidebar from '$lib/Sidebar.svelte';
  import '../app.css';
</script>

<Header />
<div class="flex min-h-screen">
  <Sidebar />
  <main class="flex-grow p-4">
    <slot></slot>
  </main>
</div>
<Footer />

<style>
  /* You can still add custom styles here if needed */
</style>
