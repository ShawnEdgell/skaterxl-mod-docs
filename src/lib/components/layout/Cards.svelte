<script lang="ts">
	import QuickGuide from '$lib/components/features/QuickGuide.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<div class="flex flex-col gap-8">
	<div class="card h-fit p-4 space-y-5">
		<QuickGuide />
	</div>

	<div class="card H-FIT p-4 space-y-5">
		<h3 class="h3">UnityModManager Links</h3>

		<Accordion>
			<AccordionItem>
				<svelte:fragment slot="summary"
					>UnityModManager for Skater XL v1.2.2.8 (Alpha)</svelte:fragment
				>
				<svelte:fragment slot="content">
					<div class="flex justify-center items-center flex-col gap-5 p-5">
						<p>
							⚠️ Make sure to check your game version before downloading! This will only work for
							Skater XL v1.2.2.8 (Alpha).
						</p>
						<a
							href="https://www.nexusmods.com/site/mods/21?tab=files&file_id=2224"
							target="_blank"
							class="btn variant-filled">UnityModManager v0.27.4</a
						>
					</div>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary"
					>UnityModManager for Skater XL v1.2.7.8 (Public)
				</svelte:fragment>
				<svelte:fragment slot="content">
					<div class="flex justify-center items-center flex-col gap-5 p-5">
						<p>
							⚠️ Make sure to check your game version before downloading! This will only work for
							Skater XL v1.2.7.8 (Public).
						</p>
						<a
							href="https://www.nexusmods.com/site/mods/21?tab=files&file_id=2314"
							target="_blank"
							class="btn variant-filled">UnityModManager v0.27.7</a
						>
					</div>
				</svelte:fragment>
			</AccordionItem>
			<!-- ... -->
		</Accordion>
	</div>
	<section class="card h-fit p-4 space-y-5">
		<h4 class="h4">Skater XL Version 1.2.2.8 (Alpha)</h4>
		<h3 class="h3">The Ultimate Modding Experience</h3>
		<p>
			Skater XL version 1.2.2.8 stands out as the ideal version for those passionate about modding.
			Boasting extensive mod support, it allows players to fully customize their skating experience.
			This version enables you to use the renowned XXL 3 Mod by DawgVinci, the XL Gear Modifier,
			Fro's Experimental Mod, the Walking Mod, and many other enhancements to elevate your gameplay.
		</p>
	</section>
	<section class="card h-fit p-4 space-y-5">
		<h4 class="h4">Skater XL Version 1.2.7.8 (Public)</h4>
		<h3 class="h3">Optimized for Vert Skating</h3>
		<p>
			The highlight of v1.2.7.8 is its emphasis on vert skating. Thanks to the grabs update, this
			version stands out as the optimal choice for players who love shredding bowls and ramps. The
			update brings a level of realism and finesse to vert skating that is unmatched in previous
			versions, making it a must-try for enthusiasts of this style.
		</p>
	</section>
	<section class="card h-fit p-4 space-y-5">
		<h4 class="h4">The Easy Way to Mod Skater XL</h4>
		<h3 class="h3">XL Hub</h3>
		<p>
			Introducing XL Hub by Fro, the ultimate tool for browsing, downloading, and managing your
			Skater XL maps and mods. No UnityModManager required.
		</p>
		<a href="https://mod.io/g/skaterxl/m/xlhub" target="_blank" class="btn variant-filled"
			>skaterxl.mod.io</a
		>
	</section>
</div>
