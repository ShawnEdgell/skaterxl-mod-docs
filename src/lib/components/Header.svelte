<script lang="ts">
	import { AppBar, LightSwitch, getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();
	const drawerSettings: DrawerSettings = {
		id: 'custom-drawer',
		position: 'left',
		width: 'w-[280px] md:w-[480px]',
		rounded: 'rounded-none'
	};

	function drawerOpen(): void {
		drawerStore.open(drawerSettings);
	}
</script>

<AppBar
	shadow="shadow-2xl"
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
	padding="px-6 py-4"
>
	<svelte:fragment slot="lead">
		<button on:click={drawerOpen} type="button" class="focus:outline-none">
			<svg
				class="h-8 w-8 block sm:hidden"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="3"
			>
				<path d="M3 6h18M3 12h18M3 18h18" />
			</svg>
		</button>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>
