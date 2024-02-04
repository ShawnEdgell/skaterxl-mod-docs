<script>
  import { onMount } from 'svelte';
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import Sidebar from '$lib/Sidebar.svelte';
  import '../app.css';
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit"
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
 
  inject({ mode: dev ? 'development' : 'production' });


  let isSidebarVisible = true; // Default to true for SSR or initial load
  let modal, modalImg;

  function toggleSidebar() {
    isSidebarVisible = !isSidebarVisible;
  }

  function openModal(src, alt) {
    modal.style.display = "block";
    modalImg.src = src;
    modalImg.alt = alt || 'Zoomed image';
  }

  function closeModal(event) {
    if (event.target.classList.contains('close') || event.target === modal) {
      modal.style.display = "none";
    }
  }

  onMount(() => {
    modal = document.getElementById("imageModal");
    modalImg = document.getElementById("modalContent");

    // Adjust sidebar visibility based on viewport width
    const checkSidebarVisibility = () => {
      // Example breakpoint check; adjust as needed
      isSidebarVisible = window.innerWidth > 768;
    };

    window.addEventListener('resize', checkSidebarVisibility);
    // Initial check to set sidebar state correctly on client load
    checkSidebarVisibility();

    document.body.addEventListener('click', event => {
      const isInsideHeader = event.target.closest('header') !== null;
      if (event.target.tagName === 'IMG' && !isInsideHeader) {
        openModal(event.target.src, event.target.alt);
      }
    });

    modal.addEventListener('click', closeModal);

    return () => {
      window.removeEventListener('resize', checkSidebarVisibility);
    };
  });
</script>



<div class="flex flex-col h-screen">
  <Header />
  <div class="flex flex-row flex-grow overflow-hidden">
    {#if isSidebarVisible}
      <Sidebar />
    {/if}
    <main class="flex-grow p-4 overflow-auto">
      <button class="p-2 rounded-full bg-blue-500 text-white shadow-lg md:hidden focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 hover:bg-blue-600 transition duration-150 ease-in-out" on:click={toggleSidebar}>
        {#if isSidebarVisible}
          <!-- Icon for "Hide Sidebar" -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {:else}
          <!-- Icon for "Show Sidebar" -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        {/if}
      </button>
      <slot></slot> <!-- Main content -->
    </main>
  </div>
</div>


<!-- Modal for image viewing -->
<div id="imageModal" class="fixed inset-0 z-50 hidden overflow-auto bg-black bg-opacity-90 p-[50px_15px]" onclick={closeModal}>
  <span class="close absolute top-4 right-9 text-white text-5xl font-bold cursor-pointer hover:text-gray-300" onclick={closeModal}>&times;</span>
  <img class="modal-content block mx-auto mt-5 max-w-[95%] max-h-[90vh] w-auto h-auto cursor-zoom-in" id="modalContent" alt="">
</div>

<style>
  /* Add this style if the Tailwind hover class doesn't provide the desired effect */
  .close:hover {
    color: #bbb; /* Adjust color as needed */
  }
</style>
