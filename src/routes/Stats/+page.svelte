<script>
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';

	let files = null;

	async function fetchFiles() {
		try {
			console.log('Fetching files...');
			const { data, error } = await supabase.storage.from('XXL Mod Settings').list('');

			if (error) {
				throw error;
			} else {
				console.log('Files fetched successfully:', data);
				files = data;
			}
		} catch (error) {
			console.error('Error fetching files:', error);
		}
	}

	onMount(fetchFiles);
</script>

<main class="max-w-4xl mx-auto mt-10">
	<h1 class="text-2xl font-bold">Files in XXL Mod Settings Bucket</h1>
	{#if files}
		<ul class="list-disc ml-5">
			{#each files as file}
				<li><a href={file.url} target="_blank" rel="noopener noreferrer">{file.name}</a></li>
			{/each}
		</ul>
	{:else}
		<p class="text-gray-500">Loading files...</p>
	{/if}
</main>

<style>
	/* Add your styling here */
</style>
