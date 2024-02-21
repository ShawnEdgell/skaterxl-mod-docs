<script>
	// Import necessary modules
	import { onMount } from 'svelte';
	import Header from '$lib/Header.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import '../app.css';

	// Define variables and functions
	let isSidebarVisible = false; // Default to false to hide sidebar on initial load
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

		// Add event listener to open modal on image click
		document.body.addEventListener('click', (event) => {
			const isInsideHeader = event.target.closest('header') !== null;
			if (event.target.tagName === 'IMG' && !isInsideHeader) {
				openModal(event.target.src, event.target.alt);
			}
		});

		// Add event listener to close modal on click outside
		modal.addEventListener('click', closeModal);

		// Adjust height of main content area based on viewport height
		function adjustMainContentHeight() {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}

		// Initial adjustment on component mount
		adjustMainContentHeight();

		// Update height when window is resized
		window.addEventListener('resize', adjustMainContentHeight);

		// Clean up event listeners on component destruction
		return () => {
			window.removeEventListener('resize', adjustMainContentHeight);
		};
	});
</script>

<div class="flex flex-col h-screen bg-custom-bluegray-dark">
	<!-- Include the Header component and pass the toggleSidebar function -->
	<Header {isSidebarVisible} {toggleSidebar} />

	<div class="flex justify-center overflow-hidden">
		<div class="flex flex-row max-w-5xl w-full">
			<!-- Check if sidebar should be visible -->
			{#if isSidebarVisible}
				<!-- Include the Sidebar component -->
				<Sidebar class="flex-shrink-0" />
			{/if}
			<div class="flex-grow max-h-[calc(var(--vh, 1vh) * 100 - 120px)] overflow-auto">
				<main class="flex justify-center p-0 m-0">
					<!-- Main content slot -->
					<slot />
					<!-- Main content -->
				</main>
			</div>
		</div>
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
