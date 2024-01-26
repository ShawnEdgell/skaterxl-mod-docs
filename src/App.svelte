<script>
  import Router from 'svelte-spa-router';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Sidebar from './components/Sidebar.svelte';
  import HomePage from './pages/HomePage.svelte';

  import XXL3 from './pages/XXL3/1-XXL3.svelte';
  import General from './pages/XXL3/General.svelte';
  import Catch from './pages/XXL3/Catch.svelte';
  import Flips from './pages/XXL3/Flips.svelte';
  import Lateflips from './pages/XXL3/Lateflips.svelte';
  import Grabs from './pages/XXL3/Grabs.svelte';
  import Fingerflips from './pages/XXL3/Fingerflips.svelte';
  import Footplants from './pages/XXL3/Footplants.svelte';
  import Grinds from './pages/XXL3/Grinds.svelte';
  import Manuals from './pages/XXL3/Manuals.svelte';
  import Powerslides from './pages/XXL3/Powerslides.svelte';
  import Primo from './pages/XXL3/Primo.svelte';
  import Misc from './pages/XXL3/Misc.svelte';
  import Bails from './pages/XXL3/Bails.svelte';
  import Slowmotion from './pages/XXL3/Slowmotion.svelte';
  import Other from './pages/XXL3/Other.svelte';
  import GrabCustomizer from './pages/XXL3/GrabCustomizer.svelte';
  import SteezeCustomizer from './pages/XXL3/SteezeCustomizer.svelte';
  import StanceCustomizer from './pages/XXL3/StanceCustomizer.svelte';
  import PinManager from './pages/XXL3/PinManager.svelte';
  import Presets from './pages/XXL3/Presets.svelte';

  import FroMod from './pages/FroMod/1-FroMod.svelte';
  import Animations from './pages/FroMod/Animations.svelte';
  import Body from './pages/FroMod/Body.svelte';
  import Head from './pages/FroMod/Head.svelte';
  import Camera from './pages/FroMod/Camera.svelte';
  import Gameplay from './pages/FroMod/Gameplay.svelte';
  import Multiplayer from './pages/FroMod/Multiplayer.svelte';
  import FroMisc from './pages/FroMod/FroMisc.svelte';
  import Map from './pages/FroMod/Map.svelte';
  import Experimental from './pages/FroMod/Experimental.svelte';
  
  import BonedOllieMod from './pages/BonedOllieMod/1-BonedOllieMod.svelte';
  import Page1 from './pages/BonedOllieMod/Page1.svelte';
  import Page2 from './pages/BonedOllieMod/Page2.svelte';

  import XLGraphics from './pages/XLGraphics/1-XLGraphics.svelte';
  import Basic from './pages/XLGraphics/Basic.svelte';
  import Presets2 from './pages/XLGraphics/Presets.svelte';
  import Camera2 from './pages/XLGraphics/Camera.svelte';
  import SoundPacks from './pages/SoundMod/SoundPacks.svelte';
  import SoundMod from './pages/SoundMod/1-SoundMod.svelte';

  let isSidebarOpen = false;

  const toggleSidebar = () => isSidebarOpen = !isSidebarOpen;

  const routes = {
      '/': HomePage,

      '/xxl3': XXL3,
      '/xxl3/general': General,
      '/xxl3/catch': Catch,
      '/xxl3/flips': Flips,
      '/xxl3/lateflips': Lateflips,
      '/xxl3/grabs': Grabs,
      '/xxl3/fingerflips': Fingerflips,
      '/xxl3/footplants': Footplants,
      '/xxl3/grinds': Grinds,
      '/xxl3/manuals': Manuals,
      '/xxl3/powerslides': Powerslides,
      '/xxl3/primo': Primo,
      '/xxl3/misc': Misc,
      '/xxl3/bails': Bails,
      '/xxl3/slowmotion': Slowmotion,
      '/xxl3/other': Other,
      '/xxl3/grabcustomizer': GrabCustomizer,
      '/xxl3/steezecustomizer': SteezeCustomizer,
      '/xxl3/stancecustomizer': StanceCustomizer,
      '/xxl3/pinmanager': PinManager,
      '/xxl3/presets': Presets,

      '/fromod': FroMod,
      '/fromod/animations': Animations,
      '/fromod/body': Body,
      '/fromod/head': Head,
      '/fromod/camera': Camera,
      '/fromod/gameplay': Gameplay,
      '/fromod/multiplayer': Multiplayer,
      '/fromod/misc': FroMisc,
      '/fromod/map': Map,
      '/fromod/experimental': Experimental,

      '/bonedolliemod': BonedOllieMod,
      '/bonedolliemod/page1': Page1,
      '/bonedolliemod/page2': Page2,

      '/xlgraphics': XLGraphics,
      '/xlgraphics/Basic': Basic,
      '/xlgraphics/Presets': Presets2,
      '/xlgraphics/Camera': Camera2,

      '/soundmod': SoundMod,
      '/soundmod/soundpacks': SoundPacks,
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
