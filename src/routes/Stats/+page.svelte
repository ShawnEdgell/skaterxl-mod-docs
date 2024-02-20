<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import supabase from '$lib/supabaseClient';

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

		// Update size check to 100KB
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

<div class="max-w-4xl mx-auto py-6 text-white">
	<h1 class="text-3xl font-bold mb-4">Stats & Settings (BETA)</h1>
	<div class="note mb-6">
		<p>
			⚠️ This page is dedicated to uploading and downloading community-made stat packs for the XXL
			Mod, BonedOllieMod, and Fro's Mod. Each pack should contain XML files only, organized properly
			to ensure clarity and usability. Files should be under 50KB.
		</p>
	</div>

	<div class="upload-section mb-8 p-6 bg-gray-800 rounded-lg shadow-md border border-blue-500">
		<h2 class="text-xl mt-1 font-semibold mb-4">Upload ZIP Pack</h2>
		<p class="text-sm mb-4 text-gray-400">
			Ensure your pack includes only <strong>XML files</strong>. Organize files clearly by naming
			them according to their function (e.g., "Stats_Default.xml", "Steeze_Expert.xml"). This helps
			users understand and select the right settings for their needs.
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

		<!-- Template Download Link at the Very Bottom -->
		<div class="template-download mt-4">
			<p class="text-sm text-gray-400 mb-2">
				Not sure how to organize your pack? Download our template as a guide:
			</p>
			<a
				href="My-Stat-Pack-Template.zip"
				class="inline-block hover:text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded transition-colors duration-150 ease-in-out"
				download="My-Stat-Pack-Template.zip"
			>
				Download Template
			</a>
		</div>
	</div>

	<div class="download-section mb-8 p-6rounded-lg shadow-md">
		<h2 class="text-xl mt-1 font-semibold mb-4">Downloads</h2>
		<ul>
			{#each files as file}
				<li class="bg-gray-700 py-2 px-4 rounded-lg flex justify-between items-center mb-2">
					<span>{file.name}</span>
					<a href="#" on:click|preventDefault={() => handleDownload(file.url, file.name)}
						>Download</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
