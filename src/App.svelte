<script>
  import Router from 'svelte-spa-router';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Sidebar from './components/Sidebar.svelte';
  import HomePage from './pages/HomePage.svelte';
  import Page1 from './pages/Page1/Page1.svelte';
  import SubPage1A from './pages/Page1/SubPage1A.svelte';
  import SubPage1B from './pages/Page1/SubPage1B.svelte';
  import Page2 from './pages/Page2/Page2.svelte';
  import SubPage2A from './pages/Page2/SubPage2A.svelte';
  import Page3 from './pages/Page3/Page3.svelte';
  // ... import other pages as necessary

  let isSidebarOpen = false;

  const toggleSidebar = () => isSidebarOpen = !isSidebarOpen;

  const routes = {
      '/': HomePage,
      '/page1': Page1,
      '/page1/subpage1a': SubPage1A,
      '/page1/subpage1b': SubPage1B,
      '/page2': Page2,
      '/page2/subpage2a': SubPage2A,
      '/page3': Page3,
      // ... add routes for other pages and subcategories
  };
</script>

<style>
  .site-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
  }

  .content-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 100vh; /* Ensures content area is at least as tall as the viewport */
  }

  main {
      flex-grow: 1; /* Ensures main content takes up available space */
  }
</style>

<div class="site-container">
  <Header {toggleSidebar}/>
  <div class="content-wrapper">
      <div class="flex flex-col md:flex-row">
          <Sidebar {isSidebarOpen}/>
          <main class="flex-1 p-4 w-full">
              <Router {routes} />
          </main>
      </div>
  </div>
  <Footer />
</div>
