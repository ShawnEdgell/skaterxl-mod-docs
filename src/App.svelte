<script>
  import Header from './components/Header.svelte';
  import Sidebar from './components/Sidebar.svelte';
  import Footer from './components/Footer.svelte';
  import { Router, Route } from 'svelte-routing';
  import HomePage from './routes/HomePage.svelte';
  import General from './routes/XXL3Mod/General.svelte';
  import Flips from './routes/XXL3Mod/Flips.svelte';
  // Import other route components as needed
</script>

<Header />

<div class="flex flex-col md:flex-row min-h-screen bg-gray-100">
  <Sidebar />

  <div class="flex flex-col flex-grow">
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/General" component={General} />
      <Route path="/Flips" component={Flips} />
    </Router>
    <Footer />
  </div>
</div>

<style>
  .flex-grow {
    display: flex;
    flex-direction: column;
  }
  main {
    flex-grow: 1;
  }
  @media (min-width: 768px) {
    main {
      margin-left: 250px;
    }
  }
</style>
