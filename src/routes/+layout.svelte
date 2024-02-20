<script>
	// Import necessary modules
	import { onMount } from 'svelte';
	import Header from '$lib/Header.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import '../app.css';

	// Define variables and functions
	let isSidebarVisible = true; // Default to true for SSR or initial load
	let modal, modalImg;

	// Function to toggle sidebar visibility
	export function toggleSidebar() {
		isSidebarVisible = !isSidebarVisible;
	}

	// Function to open modal
	function openModal(src, alt) {
		modal.style.display = 'block';
		modalImg.src = src;
		modalImg.alt = alt || 'Zoomed image';
	}

	// Function to close modal
	function closeModal(event) {
		if (event.target.classList.contains('close') || event.target === modal) {
			modal.style.display = 'none';
		}
	}

	// On mount, set up event listeners and check sidebar visibility
	onMount(() => {
		modal = document.getElementById('imageModal');
		modalImg = document.getElementById('modalContent');

		// Adjust sidebar visibility based on viewport width
		const checkSidebarVisibility = () => {
			// Example breakpoint check; adjust as needed
			isSidebarVisible = window.innerWidth > 768;
		};

		window.addEventListener('resize', checkSidebarVisibility);
		// Initial check to set sidebar state correctly on client load
		checkSidebarVisibility();

		// Add event listener to open modal on image click
		document.body.addEventListener('click', (event) => {
			const isInsideHeader = event.target.closest('header') !== null;
			if (event.target.tagName === 'IMG' && !isInsideHeader) {
				openModal(event.target.src, event.target.alt);
			}
		});

		// Add event listener to close modal on click outside
		modal.addEventListener('click', closeModal);

		// Remove event listener on component destruction
		return () => {
			window.removeEventListener('resize', checkSidebarVisibility);
		};
	});
</script>

<div class="flex flex-col h-screen bg-custom-bluegray-dark">
	<!-- Include the Header component and pass the toggleSidebar function -->
	<Header {toggleSidebar} />

	<div class="flex flex-row flex-grow overflow-hidden">
		<!-- Check if sidebar should be visible -->
		{#if isSidebarVisible}
			<!-- Include the Sidebar component -->
			<Sidebar />
		{/if}

		<main class="flex-grow p-4 overflow-auto">
			<!-- Button to toggle sidebar visibility -->

			<!-- Main content slot -->
			<slot />
			<!-- Main content -->
		</main>
	</div>
</div>

<!-- Modal for image viewing -->
<div
	id="imageModal"
	class="fixed inset-0 z-50 hidden overflow-auto bg-black bg-opacity-90 p-[50px_15px]"
	onclick={closeModal}
>
	<span
		class="close absolute top-4 right-9 text-white text-5xl font-bold cursor-pointer hover:text-gray-300"
		onclick={closeModal}
	>
		&times;
	</span>
	<img
		class="modal-content block mx-auto mt-5 max-w-[95%] max-h-[90vh] w-auto h-auto cursor-zoom-in"
		id="modalContent"
		alt=""
	/>
</div>

<style>
	/* Add this style if the Tailwind hover class doesn't provide the desired effect */
	.close:hover {
		color: #bbb; /* Adjust color as needed */
	}
</style>
