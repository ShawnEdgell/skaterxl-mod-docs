<script lang="ts">
	import { tocCrawler } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	let elemCarousel: HTMLDivElement;
	let intervalId: ReturnType<typeof setInterval>;
	const imageFilenames = [
		'XXL3.webp',
		'XLGM.webp',
		'XLGraphics.webp',
		'GrindTools.webp',
		'BetterObjectDropper.webp',
		'Multiplayer.webp',
		'DeckFX.webp',
		'XLObjectDropper.webp',
		'FroMod.webp',
		'WalkingMod.webp'
	];

	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * (elemCarousel.childElementCount - 1) // loop to the end
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll({
			left: x,
			behavior: 'smooth'
		});
	}

	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft >= elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop to start
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll({
			left: x,
			behavior: 'smooth'
		});
	}

	function startCarousel() {
		intervalId = setInterval(carouselRight, 6000);
	}

	function stopCarousel() {
		clearInterval(intervalId);
	}

	onMount(() => {
		startCarousel();
	});
</script>

<div
	use:tocCrawler={{ mode: 'generate', scrollTarget: '#page' }}
	class="py-6 space-y-8 flex flex-col items-center justify-center text-center"
>
	<!---Logo--->
	<svg width="72px" height="72px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<style>
			.cls-1 {
				fill: none;
				stroke: currentColor;
				stroke-miterlimit: 10;
				stroke-width: 1.91px;
			}
			.cls-2 {
				fill: currentColor;
			}
		</style>
		<polyline class="cls-1" points="12 20.59 1.5 20.59 1.5 1.5 16.77 1.5 16.77 11.04" />
		<line class="cls-1" x1="4.36" y1="5.32" x2="13.91" y2="5.32" />
		<line class="cls-1" x1="4.36" y1="9.14" x2="13.91" y2="9.14" />
		<line class="cls-1" x1="4.36" y1="12.95" x2="12" y2="12.95" />
		<line class="cls-1" x1="4.36" y1="16.77" x2="12" y2="16.77" />
		<path
			class="cls-1"
			d="M22.5,17.25a4.3,4.3,0,1,0-6.68,3.57V22.5h4.77V20.82A4.29,4.29,0,0,0,22.5,17.25Z"
		/>
		<circle class="cls-2" cx="16.77" cy="17.73" r="0.95" />
		<circle class="cls-2" cx="19.64" cy="17.73" r="0.95" />
	</svg>
	<!---Title--->
	<h1 data-toc-ignore class="h1 tracking-tight">Skater XL Mod Docs</h1>
	<p>Start by exploring:</p>
	<ul>
		<li><code class="code">/Documents/SkaterXL/Maps</code> - your maps folder</li>
		<li><code class="code">/Documents/SkaterXL/Gear</code> - your gear folder</li>
	</ul>
	<div class="flex gap-2">
		<a href="/guides" class="btn variant-filled">Getting Started</a>
		<a href="/mods" class="btn variant-ghost-primary">Working Mods</a>
	</div>
	<!-- Carousel -->
	<div class="card flex justify-center p-4 items-center max-w-4xl">
		<!-- Full Images -->
		<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
			{#each imageFilenames as filename}
				<img
					class="snap-center w-[1024px] rounded-container-token"
					src={`/images/${filename}`}
					alt={filename}
					loading="lazy"
				/>
			{/each}
		</div>
	</div>
</div>
