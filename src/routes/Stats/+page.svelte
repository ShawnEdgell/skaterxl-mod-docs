<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { supabase } from '$lib/supabaseClient';

	let files = [];
	let fileToUpload = null;
	const fileName = writable('No file selected');

	async function prepareUpload(event) {
		const file = event.target.files[0];
		if (!file) return;

		if (file.type !== 'text/xml' && file.type !== 'application/xml') {
			alert('Please upload only XML files.');
			return;
		}

		if (file.size > 500 * 1024) {
			alert('File size must be under 500KB.');
			return;
		}

		fileToUpload = file;
		fileName.set(file.name);
	}

	async function completeUpload() {
		if (!fileToUpload) {
			alert('No file selected for upload.');
			return;
		}

		const filePath = `uploads/${Date.now()}-${fileToUpload.name}`;
		const { error } = await supabase.storage.from('Stats').upload(filePath, fileToUpload);

		if (error) {
			console.error(error);
			alert('Upload failed.');
		} else {
			alert('File uploaded successfully.');
			// Reset the file to upload and the file name after confirming the upload was successful
			fileToUpload = null;
			fileName.set('No file selected');
			fetchFiles(); // Reload the list of files
		}
	}

	async function fetchFiles() {
		const { data, error } = await supabase.storage.from('Stats').list('uploads', {
			limit: 100,
			offset: 0
		});

		if (error) {
			console.error('Error fetching files:', error);
			return;
		}

		files = data.map((file) => ({
			...file,
			url: `https://qpknfrgashybshnpyobs.supabase.co/storage/v1/object/public/Stats/uploads/${file.name}`
		}));
	}

	async function handleDownload(fileUrl, fileName) {
		try {
			const response = await fetch(fileUrl);
			if (!response.ok) throw new Error(`Failed to fetch ${fileName}: ${response.statusText}`);
			const blob = await response.blob();
			const downloadUrl = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = downloadUrl;
			a.download = fileName;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			window.URL.revokeObjectURL(downloadUrl);
		} catch (error) {
			console.error('Error downloading file:', error);
			alert('Download failed');
		}
	}

	onMount(() => {
		fetchFiles();
	});
</script>

<div class="max-w-4xl mx-auto py-6 text-white">
	<h1 class="text-3xl font-bold mb-4">Stats & Settings (BETA)</h1>
	<div class="note">
		<p>
			⚠️ This page is a work in progress. It will be used to upload and download preset files for
			the XXL Mod, BonedOllieMod, and Fro's Mod.
		</p>
	</div>

	<h2>Upload</h2>
	<div class="mb-4 flex items-center">
		<input
			type="file"
			accept=".xml"
			class="bg-gray-800 py-2 px-4 rounded-md mr-2"
			on:change={prepareUpload}
		/>
		<button class="bg-blue-500 text-white py-2 px-4 rounded-md" on:click={completeUpload}
			>Upload File</button
		>
	</div>
	<p class="text-sm ml-2">Upload an XML file (max 500KB).</p>

	<h2>Downloads</h2>
	{#each files as file}
		<li class="bg-gray-800 py-2 px-4 rounded-md flex justify-between items-center mb-2">
			<span class="text-white">{file.name}</span>
			<a
				href="#"
				class="text-custom-green hover:underline"
				on:click|preventDefault={() => handleDownload(file.url, file.name)}>Download</a
			>
		</li>
	{/each}
</div>
