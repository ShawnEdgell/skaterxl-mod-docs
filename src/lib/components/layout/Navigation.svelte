<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import AuthButton from '$lib/components/ui/AuthButton.svelte';
</script>

<!-- Navigation Bar-->
<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<AuthButton />
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>
