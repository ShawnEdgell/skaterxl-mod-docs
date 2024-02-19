<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { supabase } from '$lib/supabaseClient';

	let statsFiles = [];
	let steezeFiles = [];
	let stanceFiles = [];
	let fileToUpload = null;
	const fileName = writable('No file selected');
	const uploadType = writable('stats'); // Default upload type

	async function prepareUpload(event) {
		fileToUpload = event.target.files[0];
		if (!fileToUpload) return;

		if (fileToUpload.type !== 'text/xml' && fileToUpload.type !== 'application/xml') {
			alert('Please upload only XML files.');
			return;
		}

		if (fileToUpload.size > 500 * 1024) {
			alert('File size must be under 500KB.');
			return;
		}

		fileName.set(fileToUpload.name);
	}

	async function completeUpload() {
		const type = $uploadType; // Use Svelte's auto-subscription to get the current upload type
		if (!fileToUpload) {
			alert('No file selected for upload.');
			return;
		}

		const filePath = `uploads/${type}/${Date.now()}-${fileToUpload.name}`;
		const { error } = await supabase.storage.from('Stats').upload(filePath, fileToUpload);

		if (error) {
			console.error(error);
			alert('Upload failed.');
		} else {
			alert('File uploaded successfully.');
			fileToUpload = null;
			fileName.set('No file selected');
			fetchFiles(type); // Reload the list of files for the updated directory
		}
	}

	async function fetchFiles(type) {
		const { data, error } = await supabase.storage.from('Stats').list(`uploads/${type}`, {
			limit: 100,
			offset: 0
		});

		if (error) {
			console.error(`Error fetching ${type} files:`, error);
			return;
		}

		const files = data.map((file) => ({
			...file,
			url: `https://qpknfrgashybshnpyobs.supabase.co/storage/v1/object/public/Stats/uploads/${type}/${file.name}`
		}));

		if (type === 'stats') statsFiles = files;
		else if (type === 'steeze') steezeFiles = files;
		else if (type === 'stance') stanceFiles = files; // Handle 'stance' files
	}

	onMount(() => {
		fetchFiles('stats');
		fetchFiles('steeze');
		fetchFiles('stance');
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
	<!-- Unified Upload Section with TailwindCSS -->
	<div class="upload-section mb-8 p-4 bg-gray-800 rounded-lg shadow-lg">
		<h2 class="text-xl font-semibold mb-4 mt-0 text-white">Upload File</h2>
		<p class="text-sm text-gray-400 mb-4">Please upload an XML file (max 500KB).</p>
		<div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
			<select class="bg-gray-700 text-white py-2 px-4 rounded-md" bind:value={$uploadType}>
				<option value="stats">Stats</option>
				<option value="steeze">Steeze</option>
				<option value="stance">Stance</option>
			</select>
			<input
				type="file"
				accept=".xml"
				class="file-input bg-gray-700 text-white py-2 px-4 rounded-md cursor-pointer"
				on:change={prepareUpload}
			/>
			<button
				class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-150 ease-in-out"
				on:click={completeUpload}>Upload File</button
			>
		</div>
	</div>

	<!-- Download Lists Section -->
	<div class="files-lists space-y-8">
		<div class="files-section">
			<h2 class="text-xl font-semibold mb-2">Stats Files</h2>
			{#each statsFiles as file}
				<li class="flex justify-between items-center bg-gray-700 p-2 rounded-md">
					<span>{file.name}</span>
					<a href="#" on:click|preventDefault={() => handleDownload(file.url, 'stats', file.name)}
						>Download</a
					>
				</li>
			{/each}
		</div>

		<!-- Steeze Files Section -->
		<div class="files-section">
			<h2 class="text-xl font-semibold mb-2">Steeze Files</h2>
			{#each steezeFiles as file}
				<li class="flex justify-between items-center bg-gray-700 p-2 rounded-md">
					<span>{file.name}</span>
					<a href="#" on:click|preventDefault={() => handleDownload(file.url, 'steeze', file.name)}
						>Download</a
					>
				</li>
			{/each}
		</div>

		<!-- Stance Files Section -->
		<div class="files-section">
			<h2 class="text-xl font-semibold mb-2">Stance Files</h2>
			{#each stanceFiles as file}
				<li class="flex justify-between items-center bg-gray-700 p-2 rounded-md">
					<span>{file.name}</span>
					<a href="#" on:click|preventDefault={() => handleDownload(file.url, 'stance', file.name)}
						>Download</a
					>
				</li>
			{/each}
		</div>
	</div>
</div>
