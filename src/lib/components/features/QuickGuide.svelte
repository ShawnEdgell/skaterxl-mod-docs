<script lang="ts">
	import { Stepper, Step } from '@skeletonlabs/skeleton';
</script>

<Stepper>
	<Step>
		<svelte:fragment slot="header">
			<h3 class="h3">Get Started with Skater XL Modding!</h3>
		</svelte:fragment>
		<p>
			It's crucial to know which version of Skater XL you're installing mods into, as mod
			compatibility depends on your game version. Check your game version in the lower left corner
			at launch. v1.2.2.8 and v1.2.7.8 are the most common versions.
		</p>
	</Step>
	<Step>
		<svelte:fragment slot="header">Changing Game Versions (optional)</svelte:fragment>
		<p>
			If you'd like to change versions, right-click Skater XL in your Steam library, select
			Properties > Betas. Choose your preferred version from the dropdown menu. You can read more
			about each version in the cards above.
		</p>
	</Step>
	<Step>
		<svelte:fragment slot="header">Download UnityModManager</svelte:fragment>
		<p>
			Select your game version in the card below and follow the link to download the corresponding
			UnityModManager (UMM) version. You will need to login to Nexusmods, then select "Slow
			Download."
		</p>
	</Step>
	<Step>
		<svelte:fragment slot="header">UnityModmanger Setup</svelte:fragment>
		<p>
			After downloading, extract the .zip file. Open this folder to access UnityModManager.exe. Set
			the following paths:
		</p>
		<p><b>Game:</b> Skater XL</p>

		<b>Folder:</b> This PC > Local Disk (C:) > Program Files (x86) > Steam > steamapps > common >
		Skater XL
		<p>Click Install or Update to complete the setup.</p>
	</Step>
	<Step>
		<svelte:fragment slot="header">Download and Install Mods</svelte:fragment>
		<p>
			Download compatible mods and drop them into UnityModManager. For a full list of working mods
			for your game, check out our Mods tab.
		</p>
		<p>
			Note: In UnityModManager, "Status: OK" or "Status: Update to X.X.X" indicates a mod is
			installed. Avoid updating mods directly from UnityModManager, as changing versions may render
			them incompatible. For manual installation or uninstallation, right-click each mod.
		</p>
	</Step>
	<Step>
		<svelte:fragment slot="header">Launch Skater XL!</svelte:fragment>
		<p>
			Start Skater XL. UnityModManager will open, indicating mod status. A green icon suggests the
			mod is working, while a red icon indicates issues.
		</p>
	</Step>
	<!-- ... -->
</Stepper>
