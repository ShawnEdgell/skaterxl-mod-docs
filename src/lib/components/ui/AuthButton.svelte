<script lang="ts">
	import { signInWithDiscord, signOut } from '$lib/auth';
	import { isAuthenticated } from '$lib/stores'; // Assuming you've extracted the store to its own module

	async function handleAuthAction() {
		if ($isAuthenticated) {
			await signOut();
		} else {
			await signInWithDiscord();
		}
	}
</script>

<!-- Discord Button-->
<!-- <button type="button" class="btn btn-sm variant-filled" on:click={handleAuthAction}>
	{$isAuthenticated ? 'Sign Out' : 'Sign In with Discord'}
</button> -->
