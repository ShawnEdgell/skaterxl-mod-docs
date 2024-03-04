<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import type { AfterNavigate } from '@sveltejs/kit';
	import { afterNavigate } from '$app/navigation';
	import type { ComponentEvents } from 'svelte';

	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		console.log(event.currentTarget.scrollTop);
	}

	afterNavigate((params: AfterNavigate) => {
		const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});
</script>

<AppShell on:scroll={scrollHandler} scrollbarGutter="stable" regionPage="scroll-smooth">
	<svelte:fragment slot="pageHeader">
		<Navigation />
	</svelte:fragment>

	<slot />
</AppShell>
