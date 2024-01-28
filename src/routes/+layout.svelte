<script>
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import Sidebar from '$lib/Sidebar.svelte';
  import '../app.css';
</script>

<Header />
<div class="flex h-screen">
  <Sidebar />
  <main class="flex-grow p-4 overflow-auto">
    <slot></slot> <!-- Main content -->
  </main>
</div>
<Footer />