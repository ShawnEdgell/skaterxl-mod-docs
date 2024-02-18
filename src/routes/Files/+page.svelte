<script>
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';

	let files = [];

	async function fetchFiles() {
		const { data, error } = await supabase.storage.from('XXL Mod Settings').list('uploads', {
			limit: 100,
			offset: 0,
			sortBy: { column: 'created_at', order: 'desc' }
		});

		if (error) {
			console.error('Error fetching files:', error.message);
			return;
		}

		files = data;
	}

	onMount(() => {
		fetchFiles();
	});
</script>

<div class="max-w-4xl mx-auto py-6">
	<h1 class="text-2xl font-bold mb-4">Downloadable XML Files</h1>
	<div class="mt-4">
		<h2 class="text-xl font-semibold mb-2">Files List</h2>
		<ul>
			{#each files as file}
				<li class="mb-2">{file.name}</li>
			{/each}
		</ul>
		{#if files.length === 0}
			<p>No files found.</p>
		{/if}
	</div>
</div>
