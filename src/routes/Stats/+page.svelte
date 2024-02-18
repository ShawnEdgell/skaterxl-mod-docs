<script>
	import { writable } from 'svelte/store';

	// Store to hold uploaded file names
	const uploadedFiles = writable([]);

	async function uploadFile(event) {
		const formData = new FormData();
		formData.append('file', event.target.files[0]);

		try {
			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData
			});

			if (!response.ok) {
				throw new Error('File upload failed');
			}

			const { uploaded } = await response.json();
			uploadedFiles.update((files) => [...files, uploaded]);
		} catch (error) {
			console.error('Error uploading file:', error.message);
			alert('File upload failed');
		}
	}
</script>

<main class="max-w-4xl mx-auto mt-10">
	<form method="POST">
		<input type="file" name="file" required onchange={uploadFile} />
		<button type="submit">Upload</button>
	</form>

	<h2>Uploaded Files:</h2>
	<ul>
		{#each $uploadedFiles as file}
			<li>{file}</li>
		{/each}
	</ul>
</main>
