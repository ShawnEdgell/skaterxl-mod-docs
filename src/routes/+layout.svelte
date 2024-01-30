<script>
  import { onMount } from 'svelte';
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import Sidebar from '$lib/Sidebar.svelte';
  import '../app.css';

  let modal, modalImg;

  // Declare a reactive variable for zoom
  let isZoomed = false;

  function openModal(src, alt) {
    modal.style.display = "block";
    modalImg.src = src;
    modalImg.alt = alt || 'Zoomed image';
    isZoomed = false;
  }

  function closeModal(event) {
    if (event.target.classList.contains('close') || event.target === modal) {
      modal.style.display = "none";
      isZoomed = false;
    }
  }

  onMount(() => {
    modal = document.getElementById("imageModal");
    modalImg = document.getElementById("modalContent");

    document.body.addEventListener('click', event => {
      if (event.target.tagName === 'IMG' && !event.target.classList.contains('no-modal')) {
        openModal(event.target.src, event.target.alt);
      }
    });

    modal.addEventListener('click', closeModal);
  });

  function toggleZoom() {
    isZoomed = !isZoomed;
  }
</script>


<div class="flex flex-col h-screen">
  <Header />
  <div class="flex flex-row flex-grow overflow-hidden">
    <Sidebar />
    <main class="flex-grow p-4 overflow-auto">
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
