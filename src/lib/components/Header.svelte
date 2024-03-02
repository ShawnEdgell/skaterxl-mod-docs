<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar shadow="shadow-2xl" slotTrail="place-content-end">
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>
