<script lang="ts">
	let elemCarousel: HTMLDivElement;
	let currentIndex = 0; // To keep track of the current image
	const images = [
		{ filename: 'GrabCustomizer.webp', title: 'Grabs Customizer Mod' },
		{ filename: 'XXL3.webp', title: 'XXL 3 Mod' },
		{ filename: 'XLGraphics.webp', title: 'XL Graphics' },
		{ filename: 'XLGM.webp', title: 'XL Gear Mod' },
		{ filename: 'BetterObjectDropper.webp', title: 'Better Object Dropper' },
		{ filename: 'FroMod.webp', title: "Fro's Experimental Mod" },
		{ filename: 'GrindTools.webp', title: 'Grind Tools' },
		{ filename: 'DeckFX.webp', title: 'DeckFX Mod' },
		{ filename: 'XLObjectDropper.webp', title: 'XL Object Dropper' },
		{ filename: 'Multiplayer.webp', title: 'Multiplayer++' },
		{ filename: 'XLMenuMod.webp', title: 'XL Menu Mod' },
		{ filename: 'WalkingMod.webp', title: 'Walking Mod' }
	];

	function carouselLeft(): void {
		currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
		updateScrollPosition();
	}

	function carouselRight(): void {
		currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
		updateScrollPosition();
	}

	function updateScrollPosition(): void {
		const x = elemCarousel.clientWidth * currentIndex;
		elemCarousel.scroll(x, 0);
	}
</script>

<div class="flex flex-col items-center text-center gap-5">
	<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
		<!-- Button: Left -->
		<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
			<svg width="30" height="30" viewBox="1 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M15 19l-7-7 7-7"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
		<!-- Full Images -->
		<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
			{#each images as { filename, title }, index}
				<img
					class="snap-center w-[1024px] rounded-container-token"
					src={`/images/${filename}`}
					alt={title}
				/>
			{/each}
		</div>
		<!-- Button: Right -->
		<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
			<svg width="30" height="30" viewBox="-1 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M9 5l7 7-7 7"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	</div>
	<a href="/#mods" class="btn variant-filled">{images[currentIndex].title}</a>
</div>
