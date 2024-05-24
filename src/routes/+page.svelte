<script>
	import MainHeader from '$lib/components/layout/MainHeader.svelte';
	import Carousel from '$lib/components/features/Carousel.svelte';
	import ModTabs from '$lib/components/features/ModTabs.svelte';
	import Cards from '$lib/components/layout/Cards.svelte';
	import { tocCrawler } from '@skeletonlabs/skeleton';
</script>

<!-- Main container for MainHeader and Carousel -->
<div use:tocCrawler={{ mode: 'generate' }} class="mx-auto max-w-4xl py-16 px-4 x-4">
	<div class="grid gap-y-8 4 gap-x-8">
		<MainHeader />
		<Carousel />
		<ModTabs />
		<Cards />
	</div>
</div>
