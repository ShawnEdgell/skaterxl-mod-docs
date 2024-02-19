<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { supabase } from '$lib/supabaseClient';
	let files = [];

	let fileToUpload = null;
	const fileName = writable('');

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
			fileName.set(''); // Reset after upload
			fileToUpload = null; // Reset the file to upload
		}
	}

	async function fetchFiles() {
		const { data, error } = await supabase.storage.from('Stats').list('uploads', {
			limit: 100, // Adjust based on your needs
			offset: 0
		});

		if (error) {
			console.error('Error fetching files:', error);
			return;
		}

		// Assuming files are public, prepare URLs
		files = data.map((file) => {
			return {
				...file,
				url: `https://qpknfrgashybshnpyobs.supabase.co/storage/v1/object/public/Stats/uploads/${file.name}`
			};
		});
	}

	async function handleDownload(fileUrl, fileName) {
		try {
			const response = await fetch(fileUrl);
			if (!response.ok) throw new Error(`Failed to fetch ${fileName}: ${response.statusText}`);
			const blob = await response.blob();
			const downloadUrl = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = downloadUrl;
			a.download = fileName; // Set the file name for the download
			document.body.appendChild(a); // Temporarily add the link to the document
			a.click(); // Programmatically click the link to trigger the download
			document.body.removeChild(a); // Remove the link from the document
			window.URL.revokeObjectURL(downloadUrl); // Clean up the URL object
		} catch (error) {
			console.error('Error downloading file:', error);
			alert('Download failed');
		}
	}

	onMount(() => {
		fetchFiles();
	});
</script>

<div class="max-w-4xl mx-auto py-6">
	<input type="file" accept=".xml" on:change={prepareUpload} />
	<button on:click={completeUpload}>Upload File</button>

	<p>Selected file: {$fileName}</p>
	<p>Upload an XML file (max 500KB).</p>

	<ul>
		{#each files as file}
			<li>
				{file.name}
				<!-- Updated link for download with improved accessibility -->
				<a
					href="#"
					on:click|preventDefault={() => handleDownload(file.url, file.name)}
					role="button"
					style="cursor: pointer;">Download</a
				>
			</li>
		{/each}
	</ul>
</div>
