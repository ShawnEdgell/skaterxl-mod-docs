<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<div class="flex flex-col gap-2 px-6 py-16">
	<!-- (optionally you can provide a label here) -->
	<a href="/" class="btn variant-filled" on:click={drawerClose} data-sveltekit-preload-data="hover"
		>Home</a
	>
	<a
		href="/guides"
		class="btn variant-filled"
		on:click={drawerClose}
		data-sveltekit-preload-data="hover">Guides</a
	>
	<a
		href="/mods"
		class="btn variant-filled"
		on:click={drawerClose}
		data-sveltekit-preload-data="hover">Mods</a
	>
	<a
		href="/xlhub"
		class="btn variant-filled"
		on:click={drawerClose}
		data-sveltekit-preload-data="hover">XL Hub</a
	>
	<!-- <a
		href="/maps"
		class="btn variant-filled"
		on:click={drawerClose}
		data-sveltekit-preload-data="hover">Maps</a
	>
	<a
		href="/gear"
		class="btn variant-filled"
		on:click={drawerClose}
		data-sveltekit-preload-data="hover">Gear</a
	>
	<a
		href="/stats"
		class="btn variant-filled"
		on:click={drawerClose}
		data-sveltekit-preload-data="hover">Stats</a
	> -->
</div>
