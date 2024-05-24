<script lang="ts">
	import Logo from '$lib/components/layout/Logo.svelte';
</script>

<!-- Logo, heading, paragraph, and action buttons -->
<div class="space-y-4 flex flex-col text-center justify-center items-center">
	<Logo />
	<h1 class="text-4xl md:text-5xl tracking-tight">Skater XL Mod Docs</h1>
	<p>Your ultimate destination for all things Skater XL modding.</p>
	<div class="flex gap-4">
		<a
			href="/#getting-started-guide"
			class="btn variant-filled-primary flex items-center gap-2 justify-center"
		>
			Get Started
			<!-- Inline SVG for the Get Started button -->
			<svg
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="w-5 h-5"
				aria-hidden="true"
			>
				<path
					d="M4 12H20M20 12L16 8M20 12L16 16"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
			</svg>
		</a>
		<a href="/#mods" class="btn variant-filled-surface">Browse Mods</a>
	</div>
</div>
