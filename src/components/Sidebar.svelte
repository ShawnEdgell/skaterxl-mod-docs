<script>
    let isOpen = false;
    let openSection = null;
  
    function toggleMenu() {
      isOpen = !isOpen;
    }
  
    function toggleSection(section) {
      openSection = openSection === section ? null : section;
    }
  </script>
  
  <button class="p-4 md:hidden fixed top-0 right-0 z-20" on:click={toggleMenu}>
    <div class="hamburger-menu">
      <span class="block w-8 h-1 bg-black mb-1"></span>
      <span class="block w-8 h-1 bg-black mb-1"></span>
      <span class="block w-8 h-1 bg-black"></span>
    </div>
  </button>
  
  <aside class={`sidebar ${isOpen ? 'active' : ''} md:block bg-gray-200 w-64 min-h-screen p-4`}>
    <nav>
      <ul>
        <li>
          <button class="nav-button" on:click={() => toggleSection('page1')}>XXL 3 Mod (Stat Menu)</button>
          {#if openSection === 'page1'}
            <ul>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">General</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Catch</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Flips</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Lateflips</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Grabs</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Fingerflips</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Footplants</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Grinds</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Manuals</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Powerslides</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Primo</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Misc</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Bails</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Slowmotion</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Other</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Grab Customizer</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Steeze Customizer</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Stance Customizer</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Pin Manager</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Presets</li>

            </ul>
          {/if}
        </li>
      </ul>
      <ul>
        <li>
          <button class="nav-button" on:click={() => toggleSection('page2')}>Fro's Experimental Mod</button>
          {#if openSection === 'page2'}
            <ul>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Animations</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Body</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Head</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Camera</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Gameplay</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Multiplayer</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Misc</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Map</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Experimental</li>
            </ul>
          {/if}
        </li>
      </ul>
      <ul>
        <li>
          <button class="nav-button" on:click={() => toggleSection('page3')}>Boned Ollie Mod</button>
          {#if openSection === 'page3'}
            <ul>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Page 1</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Page 2</li>
            </ul>
          {/if}
        </li>
      </ul>
      <ul>
        <li>
          <button class="nav-button" on:click={() => toggleSection('page4')}>XL Graphics</button>
          {#if openSection === 'page4'}
            <ul>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Page 1</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Page 2</li>
            </ul>
          {/if}
        </li>
      </ul>      
      <ul>
        <li>
          <button class="nav-button" on:click={() => toggleSection('page5')}>Deck FX</button>
          {#if openSection === 'page5'}
            <ul>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Page 1</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Page 2</li>
            </ul>
          {/if}
        </li>
      </ul>      
      <ul>
        <li>
          <button class="nav-button" on:click={() => toggleSection('page6')}>Sound Mod</button>
          {#if openSection === 'page6'}
            <ul>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Page 1</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Page 2</li>
            </ul>
          {/if}
        </li>
      </ul>
      <ul>
        <li>
          <button class="nav-button" on:click={() => toggleSection('page7')}>XL Gear Modifier</button>
          {#if openSection === 'page7'}
            <ul>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Page 1</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Page 2</li>
            </ul>
          {/if}
        </li>
      </ul>
      <ul>
        <li>
          <button class="nav-button" on:click={() => toggleSection('page8')}>Walking Mod</button>
          {#if openSection === 'page8'}
            <ul>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Page 1</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Page 2</li>
            </ul>
          {/if}
        </li>
      </ul>
      <ul>
        <li>
          <button class="nav-button" on:click={() => toggleSection('page9')}>Multiplayer++</button>
          {#if openSection === 'page9'}
            <ul>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Page 1</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Page 2</li>
            </ul>
          {/if}
        </li>
      </ul>
      <ul>
        <li>
          <button class="nav-button" on:click={() => toggleSection('page10')}>Better Replay</button>
          {#if openSection === 'page10'}
            <ul>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Page 1</li>
              <li class="pl-4 py-2 text-gray-700 hover:bg-gray-300">Page 2</li>
            </ul>
          {/if}
        </li>
      </ul>

    </nav>
  </aside>
  
  <style>
    /* Styles for Sidebar */
    .nav-button {
      text-align: left;
      width: 100%;
      padding: 8px;
      background: transparent;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    
    .nav-button:hover {
      background-color: #e2e2e2;
    }
  
    /* Styles for Hamburger Menu */
    .hamburger-menu span {
      display: block;
      height: 2px;
      background-color: #000;
      margin-bottom: 5px;
      transition: 0.3s;
    }
  
    /* Responsive and Active styles for Sidebar */
    .sidebar {
      transition: transform 0.3s;
    }
  
    @media (max-width: 768px) {
      .sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
        transform: translateX(-100%);
      }
      .sidebar.active {
        transform: translateX(0%);
      }
    }
  </style>
  