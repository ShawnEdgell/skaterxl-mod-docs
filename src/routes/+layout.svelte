<script lang="ts">
	import '../app.postcss';
	import { afterNavigate } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import type { AfterNavigate } from '@sveltejs/kit';
	import { AppShell, initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();

	afterNavigate((params: AfterNavigate) => {
		const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});
</script>

<AppShell scrollbarGutter="stable" regionPage="scroll-smooth overscroll-none">
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div class="hidden sm:block"></div>
	</svelte:fragment>
	<!-- Router Slot -->
	<div class="flex justify-center h-full">
		<div class="p-6 max-w-6xl">
			<slot />
		</div>
	</div>
	<!-- ---- / ---- -->
</AppShell>
