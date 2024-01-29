<script>
  import { onMount } from 'svelte';
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import Sidebar from '$lib/Sidebar.svelte';
  import '../app.css';

  let modal, modalImg;

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

    document.body.addEventListener('click', event => {
      if (event.target.tagName === 'IMG' && !event.target.classList.contains('no-modal')) {
        openModal(event.target.src, event.target.alt);
      }
    });

    modal.addEventListener('click', closeModal);
  });
</script>


<Header />
<div class="flex overflow-hidden" style="height: calc(100vh - var(--header-height));">
  <Sidebar />
  <main class="flex-grow p-4 overflow-auto">
    <slot></slot> <!-- Main content -->
  </main>
</div>

<!-- Modal for image viewing -->
<div id="imageModal" class="modal" onclick={closeModal}>
  <span class="close" onclick={closeModal}>&times;</span>
  <img class="modal-content" id="modalContent" alt="">
</div>

<!-- Include Modal Styles -->
<style>

:root {
    --header-height: 4rem; /* Adjust this value based on your header's height */
  }
  .modal {
    display: none; 
    position: fixed; 
    z-index: 1000; 
    padding-top: 100px; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgba(0,0,0,0.9); 
  }

  .modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 90%;
    max-height: 80vh;
    object-fit: contain;
    cursor: zoom-in;
  }

  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: white;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
  }

  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
</style>
