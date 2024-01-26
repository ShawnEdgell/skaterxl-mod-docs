<script>
  import Router from 'svelte-spa-router';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Sidebar from './components/Sidebar.svelte';
  import HomePage from './pages/HomePage.svelte';
  import Page1 from './pages/Page1/Page1.svelte';
  import SubPage1A from './pages/Page1/SubPage1A.svelte'; // Subcategory page
  import SubPage1B from './pages/Page1/SubPage1B.svelte'; // Subcategory page
  import Page2 from './pages/Page2/Page2.svelte';
  import SubPage2A from './pages/Page2/SubPage2A.svelte'; // Subcategory page
  import Page3 from './pages/Page3/Page3.svelte';
  // ... import other pages as necessary

  let isSidebarOpen = false;

  function toggleSidebar() {
      isSidebarOpen = !isSidebarOpen;
  }

  const routes = {
      '/': HomePage,
      '/page1': Page1,
      '/page1/subpage1a': SubPage1A, // Route for subcategory
      '/page1/subpage1b': SubPage1B, // Route for subcategory
      '/page2': Page2,
      '/page2/subpage2a': SubPage2A, // Route for subcategory
      '/page3': Page3,
      // ... add routes for other pages and subcategories
  };
</script>

<Header {toggleSidebar}/>
<div class="flex">
  <Sidebar {isSidebarOpen}/>
  <main class="flex-1 p-4">
      <Router {routes} />
  </main>
</div>
<Footer />
