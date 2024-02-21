<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { supabase } from '$lib/supabaseClient';

	let files = [];
	let fileToUpload = null;
	let fileDescription = ''; // Add this to your script tag
	let creatorName = ''; // Initialize the variable for binding
	let selectedTags = []; // Stores selected tags
	let stance = ''; // Initialize the variable for binding

	const fileName = writable('No file selected');
	const isLoading = writable(false);

	async function prepareUpload(event) {
		const file = event.target.files[0];
		if (!file) return;

		// Check for ZIP file extension
		const extension = file.name.split('.').pop().toLowerCase();
		if (!['zip', 'zipx', 'zipped'].includes(extension)) {
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
		// Check if a file is selected
		if (!fileToUpload) {
			alert('No file selected for upload.');
			return;
		}

		// Check if all required fields are filled
		if (!creatorName.trim() || !fileDescription.trim() || !stance || selectedTags.length === 0) {
			alert('Please fill out all required fields and select at least one tag.');
			return;
		}

		isLoading.set(true);

		// Construct the file path with the current timestamp and the file name
		const filePath = `uploads/${Date.now()}-${fileToUpload.name}`;

		// Upload the file to Supabase storage
		const { error: uploadError } = await supabase.storage
			.from('Stats')
			.upload(filePath, fileToUpload);

		if (uploadError) {
			console.error(uploadError);
			alert('Upload failed.');
			isLoading.set(false);
			return;
		}

		// Insert the file metadata into the 'file_uploads' table
		const { error: metadataError } = await supabase.from('file_uploads').insert([
			{
				creator: creatorName, // Include the creator name
				file_name: fileToUpload.name,
				file_path: filePath,
				description: fileDescription,
				tags: selectedTags,
				stance: stance
				// Optionally include other metadata fields here
			}
		]);

		if (metadataError) {
			console.error(metadataError);
			alert('Failed to save file information.');
		} else {
			alert('File uploaded successfully.');
		}

		// Reset states and UI elements
		fileToUpload = null;
		fileDescription = ''; // Reset the description for the next upload
		fileName.set('No file selected');
		document.getElementById('fileInput').value = ''; // Clear the file input
		isLoading.set(false);

		// Optionally, refresh the list of files to include the new upload
		fetchFiles();
	}
	async function fetchFiles() {
		try {
			// Fetch file metadata directly from the 'file_uploads' database table
			const { data: metadata, error } = await supabase.from('file_uploads').select('*');

			if (error) {
				throw error;
			}

			// Map the metadata to files
			files = metadata.map((item) => ({
				...item,
				// Construct the URL for file downloads
				url: item.file_path ? `${supabase.storageUrl}/public/Stats/${item.file_path}` : null
			}));
		} catch (error) {
			console.error('Error fetching file metadata:', error);
			files = []; // Ensure the UI knows there's no data to display
		}
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
	<p>
		This page is dedicated to uploading and downloading community-made stat packs for the XXL Mod,
		BonedOllieMod, and Fro's Mod.
	</p>

	<div class="mt-6 p-6 bg-gray-800 rounded-lg border border-blue-500">
		<h2 class="mt-1">Upload ZIP Pack</h2>
		<p class="text-sm mb-4 text-gray-400">
			Ensure your pack includes only <strong>XML files</strong>. Organize files clearly by naming
			them according to their function (e.g., "Stats_YourName.xml", "Steeze_YourName.xml"). This
			helps users understand and select the right settings for their needs.
		</p>

		<!-- Form -->
		<form on:submit|preventDefault={completeUpload}>
			<div class="flex flex-col sm:flex-row">
				<!-- Creator Name Input -->
				<input
					type="text"
					placeholder="Your Name"
					class="mt-2 text-input bg-gray-700 text-white py-2 px-4 rounded-md w-full"
					bind:value={creatorName}
					required
				/>
				<!-- Stance Dropdown -->
				<select
					id="stance"
					name="stance"
					class="mt-2 sm:ml-2 bg-gray-700 text-white py-2 px-4 rounded-md w-full sm:w-1/2"
					bind:value={stance}
					required
				>
					<option value="" disabled>Select your stance</option>
					<option value="Goofy">Goofy</option>
					<option value="Regular">Regular</option>
				</select>
			</div>

			<!-- Description Input -->
			<input
				type="text"
				placeholder="Enter a brief description"
				class="mt-2 text-input bg-gray-700 text-white py-2 px-4 rounded-md w-full"
				bind:value={fileDescription}
				required
			/>

			<div class="mb-4 mt-2 text-white">
				<div class="flex flex-wrap">
					<div class="px-2 w-full sm:w-auto">
						<label class="inline-flex items-center mt-3">
							<input
								type="checkbox"
								class="form-checkbox h-5 w-5 text-green-600"
								bind:group={selectedTags}
								value="XXL Mod Stats"
							/>
							<span class="ml-2 text-gray-200">XXL Mod Stats</span>
						</label>
					</div>
					<div class="px-2 w-full sm:w-auto">
						<label class="inline-flex items-center mt-3">
							<input
								type="checkbox"
								class="form-checkbox h-5 w-5 text-green-600"
								bind:group={selectedTags}
								value="Fro's Mod"
							/>
							<span class="ml-2 text-gray-200">Fro's Mod Settings</span>
						</label>
					</div>
					<div class="px-2 w-full sm:w-auto">
						<label class="inline-flex items-center mt-3">
							<input
								type="checkbox"
								class="form-checkbox h-5 w-5 text-green-600"
								bind:group={selectedTags}
								value="BonedOllieMod"
							/>
							<span class="ml-2 text-gray-200">BonedOllieMod Settings</span>
						</label>
					</div>
				</div>
				<!-- Hint for user -->
				{#if selectedTags.length === 0}
					<p class="text-gray-400 text-sm mt-1">Please select at least one preset tag.</p>
				{/if}
			</div>

			<div class="flex flex-col gap-x-2 gap-y-1 md:flex-row items-center space-y-2 md:space-y-0">
				<!-- File Input -->
				<input
					type="file"
					id="fileInput"
					accept=".zip,.zipx,.zipped"
					class="file-input bg-gray-700 text-white py-2 px-4 rounded-md cursor-pointer w-full md:flex-1"
					on:change={prepareUpload}
					required
				/>

				<!-- Upload Button -->
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-150 ease-in-out w-full md:w-auto"
					type="submit"
				>
					Upload File
				</button>
			</div>
		</form>

		<!-- Tailwind Loading Indicator -->
		{#if $isLoading}
			<div class="mt-4 flex justify-center items-center">
				<svg
					class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
					></circle>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
				<p class="text-white">Uploading...</p>
			</div>
		{/if}

		<p class="text-sm mt-2 text-gray-400">Accepted format: .zip (Max size: 50KB)</p>
	</div>

	{#if files && files.length > 0}
		<h2 class="text-xl font-bold mb-4">Downloads</h2>
		<div class="grid gap-4">
			{#each files as file}
				<div
					class="bg-gray-700 p-4 rounded-lg flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:items-center"
				>
					<div class="flex-1">
						<p class="text-white"><strong>Creator:</strong> {file.creator || 'Anonymous'}</p>
						<p class="text-white"><strong>File Name:</strong> {file.file_name}</p>
						{#if file.description}
							<p class="text-white"><strong>Description:</strong> {file.description}</p>
						{/if}
						<p class="text-white">
							<strong>Uploaded At:</strong>
							{new Date(file.uploaded_at).toLocaleString()}
						</p>
						<!-- Display Tags as Presets -->
						<p class="text-white">
							<strong>Presets:</strong>
							{#if file.tags && file.tags.length > 0}{file.tags.join(', ')}{:else}None{/if}
						</p>
						<p class="text-white"><strong>Stance:</strong> {file.stance || 'Not specified'}</p>
					</div>
					{#if file.url}
						<button
							on:click={() => handleDownload(file.url, file.file_name)}
							class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-150 ease-in-out"
						>
							Download
						</button>
					{/if}
				</div>
			{/each}
		</div>
	{:else}
		<p class="text-gray-400 text-center mt-4">No files available for download.</p>
	{/if}
</div>
