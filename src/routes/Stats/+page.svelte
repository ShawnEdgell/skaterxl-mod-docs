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

		// Check for ZIP file type
		if (file.type !== 'application/zip') {
			alert('Please upload only ZIP files.');
			return;
		}

		// Update size check to 50KB
		if (file.size > 50 * 1024) {
			alert('File size must be under 50KB.');
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

<div class="main-container">
	<h1>Stats & Settings (BETA)</h1>
	<div class="note">
		<p>
			⚠️ This page is dedicated to uploading and downloading community-made stat packs for the XXL
			Mod, BonedOllieMod, and Fro's Mod. Each pack should contain XML files only, organized properly
			to ensure clarity and usability. Files should be under 50KB.
		</p>
	</div>

	<div class="p-6 bg-gray-800 rounded-lg border border-blue-500">
		<h2 class="mt-1">Upload ZIP Pack</h2>
		<p class="text-sm mb-4 text-gray-400">
			Ensure your pack includes only <strong>XML files</strong>. Organize files clearly by naming
			them according to their function (e.g., "Stats_YourName.xml", "Steeze_YourName.xml"). This
			helps users understand and select the right settings for their needs.
		</p>
		<div
			class="flex flex-col md:flex-row items-center space-x-0 md:space-x-2 space-y-2 md:space-y-0"
		>
			<input
				type="file"
				accept=".zip"
				class="file-input bg-gray-700 text-white py-2 px-4 rounded-md cursor-pointer w-full md:flex-1"
				on:change={prepareUpload}
			/>
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-150 ease-in-out w-full md:w-auto"
				on:click={completeUpload}
			>
				Upload File
			</button>
		</div>

		<p class="text-sm mt-2 text-gray-400">Accepted format: .zip (Max size: 50KB)</p>
	</div>

	<h2>Downloads</h2>
	{#each files as file}
		<li class="bg-gray-700 py-2 px-4 rounded-lg flex justify-between items-center">
			<span class="text-sm md:text-base">{file.name}</span>
			<button
				class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 text-xs md:py-2 md:px-4 md:text-sm rounded-md transition-colors duration-150 ease-in-out"
				on:click={completeUpload}
			>
				Download
			</button>
		</li>
	{/each}
</div>
