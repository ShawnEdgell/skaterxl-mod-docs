<script lang="ts">
	import '../app.postcss';
	import { afterNavigate } from '$app/navigation';
	import type { AfterNavigate } from '@sveltejs/kit';
	import Header from '$lib/components/Header.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import { AppShell, TableOfContents, initializeStores, Drawer } from '@skeletonlabs/skeleton';

	initializeStores();

	afterNavigate((params: AfterNavigate) => {
		const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});
</script>

<Drawer>
	<MobileNav />
</Drawer>

<AppShell scrollbarGutter="stable" regionPage="scroll-smooth overscroll-none">
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<div class="hidden sm:block">
			<Navigation />
		</div>
	</svelte:fragment>
	<!-- Router Slot -->
	<div class="flex justify-center h-full">
		<div class="p-6 max-w-6xl">
			<slot />
		</div>
		<div class="p-6 hidden lg:block">
			<TableOfContents class="sticky top-10 w-44">
				<h1>On this page</h1>
			</TableOfContents>
		</div>
	</div>
	<!-- ---- / ---- -->
</AppShell>
