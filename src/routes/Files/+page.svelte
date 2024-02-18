<script>
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';

	let selectedFile;
	let files = [];

	async function uploadFile() {
		if (!selectedFile) return;

		const fileExt = selectedFile.name.split('.').pop();
		const fileName = `${Math.random()}.${fileExt}`;
		const filePath = `uploads/${fileName}`;

		let { error } = await supabase.storage.from('XXL Mod Setting').upload(filePath, selectedFile);

		if (error) {
			alert(`Error uploading file: ${error.message}`);
		} else {
			alert('File uploaded successfully.');
			fetchFiles(); // Refresh the files list after upload
		}
	}

	async function fetchFiles() {
		let { data, error } = await supabase.storage.from('XXL Mod Setting').list('uploads', {
			limit: 100,
			offset: 0,
			sortBy: { column: 'created_at', order: 'desc' }
		});

		if (error) {
			console.error('Error fetching files: ', error.message);
		} else {
			files = data;
		}
	}

	onMount(() => {
		fetchFiles();
	});

	async function downloadFile(path, filename) {
		const { data, error } = await supabase.storage.from('XXL Mod Setting').download(path);
		if (error) {
			alert(`Error downloading file: ${error.message}`);
			return;
		}
		// Create a URL for the blob
		const url = URL.createObjectURL(data);
		// Create a temporary anchor to trigger download
		const a = document.createElement('a');
		a.href = url;
		a.download = filename || 'download';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}
</script>

<div class="max-w-4xl mx-auto py-6">
	<h1 class="text-2xl font-bold mb-4">Upload and Download XML Files</h1>
	<div>
		<label for="file_input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
			>Select file</label
		>
		<input
			id="file_input"
			type="file"
			accept=".xml"
			onchange={(event) => (selectedFile = event.target.files[0])}
			class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mb-4"
		/>
		<button
			on:click={uploadFile}
			class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-150 ease-in-out"
			>Upload</button
		>
	</div>
	<div class="mt-4">
		<h2 class="text-xl font-semibold mb-2">Downloadable Files</h2>
		{#each files as file}
			<div class="mb-2">
				<span>{file.name}</span>
				<button
					on:click={() => downloadFile(`uploads/${file.name}`, file.name)}
					class="ml-2 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-700 transition duration-150 ease-in-out"
					>Download</button
				>
			</div>
		{/each}
	</div>
</div>

<style>
	/* Tailwind styling is already applied. Add custom CSS if needed. */
</style>
