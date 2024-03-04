<script>
	import MainHeader from '$lib/components/layout/MainHeader.svelte';
	import Carousel from '$lib/components/features/Carousel.svelte';
	import ModTabs from '$lib/components/features/ModTabs.svelte';
	import Cards from '$lib/components/layout/Cards.svelte';
	import { tocCrawler } from '@skeletonlabs/skeleton';
</script>

<!-- Main container for MainHeader and Carousel -->
<div
	use:tocCrawler={{ mode: 'generate' }}
	class="container mx-auto max-w-2xl md:max-w-3xl lg:max-w-7xl py-16 lg:py-24 px-4"
>
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-y-24 gap-x-8">
		<MainHeader />
		<Carousel />
		<ModTabs />
		<Cards />
	</div>
</div>
