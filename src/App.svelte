<script>
  import Router from 'svelte-spa-router';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Sidebar from './components/Sidebar.svelte';
  import HomePage from './pages/HomePage.svelte';

  import XXL3 from './pages/sidebar/XXL3/1-XXL3.svelte';
  import General from './pages/sidebar/XXL3/General.svelte';
  import Catch from './pages/sidebar/XXL3/Catch.svelte';
  import Flips from './pages/sidebar/XXL3/Flips.svelte';
  import Lateflips from './pages/sidebar/XXL3/Lateflips.svelte';
  import Grabs from './pages/sidebar/XXL3/Grabs.svelte';
  import Fingerflips from './pages/sidebar/XXL3/Fingerflips.svelte';
  import Footplants from './pages/sidebar/XXL3/Footplants.svelte';
  import Grinds from './pages/sidebar/XXL3/Grinds.svelte';
  import Manuals from './pages/sidebar/XXL3/Manuals.svelte';
  import Powerslides from './pages/sidebar/XXL3/Powerslides.svelte';
  import Primo from './pages/sidebar/XXL3/Primo.svelte';
  import Misc from './pages/sidebar/XXL3/Misc.svelte';
  import Bails from './pages/sidebar/XXL3/Bails.svelte';
  import Slowmotion from './pages/sidebar/XXL3/Slowmotion.svelte';
  import Other from './pages/sidebar/XXL3/Other.svelte';
  import GrabCustomizer from './pages/sidebar/XXL3/GrabCustomizer.svelte';
  import SteezeCustomizer from './pages/sidebar/XXL3/SteezeCustomizer.svelte';
  import StanceCustomizer from './pages/sidebar/XXL3/StanceCustomizer.svelte';
  import PinManager from './pages/sidebar/XXL3/PinManager.svelte';
  import Presets from './pages/sidebar/XXL3/Presets.svelte';

  import FroMod from './pages/sidebar/FroMod/1-FroMod.svelte';
  import Animations from './pages/sidebar/FroMod/Animations.svelte';
  import Body from './pages/sidebar/FroMod/Body.svelte';
  import Head from './pages/sidebar/FroMod/Head.svelte';
  import Camera from './pages/sidebar/FroMod/Camera.svelte';
  import Gameplay from './pages/sidebar/FroMod/Gameplay.svelte';
  import Multiplayer from './pages/sidebar/FroMod/Multiplayer.svelte';
  import FroMisc from './pages/sidebar/FroMod/FroMisc.svelte';
  import Map from './pages/sidebar/FroMod/Map.svelte';
  import Experimental from './pages/sidebar/FroMod/Experimental.svelte';
  
  import BonedOllieMod from './pages/sidebar/BonedOllieMod/1-BonedOllieMod.svelte';
  import TrickExamples from './pages/sidebar/BonedOllieMod/TrickExamples.svelte';

  import XLGraphics from './pages/sidebar/XLGraphics/1-XLGraphics.svelte';
  import Basic from './pages/sidebar/XLGraphics/Basic.svelte';
  import Presets2 from './pages/sidebar/XLGraphics/Presets.svelte';
  import Camera2 from './pages/sidebar/XLGraphics/Camera.svelte';
  import SoundPacks from './pages/sidebar/SoundMod/SoundPacks.svelte';
  import SoundMod from './pages/sidebar/SoundMod/1-SoundMod.svelte';

  import XLGearMod from './pages/sidebar/XLGearMod/1-XLGearMod.svelte';
  import Links from './pages/sidebar/XLGearMod/Links.svelte';

  import WalkingMod from './pages/sidebar/WalkingMod/1-WalkingMod.svelte';
  import PageExample from './pages/sidebar/WalkingMod/PageExample.svelte';


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
      '/bonedolliemod/TrickExamples': TrickExamples,

      '/xlgraphics': XLGraphics,
      '/xlgraphics/Basic': Basic,
      '/xlgraphics/Presets': Presets2,
      '/xlgraphics/Camera': Camera2,

      '/soundmod': SoundMod,
      '/soundmod/soundpacks': SoundPacks,

      '/xlgearmod': XLGearMod,
      '/xlgearmod/links': Links,

      '/walkingmod': WalkingMod,
      '/walkingmod/pageexample': PageExample,
      // ... add routes for other pages and subcategories
  };
</script>

<div class="flex flex-col min-h-screen">
  <Header {toggleSidebar} />
  <div class="flex flex-1 flex-col md:flex-row min-h-screen">
    <Sidebar {isSidebarOpen} />
    <main class="flex-1 p-4 w-full">
      <Router {routes} />
    </main>
  </div>
  <Footer />
</div>
