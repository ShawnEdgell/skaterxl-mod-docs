<script lang="ts">
	import { tocCrawler, Stepper, Step, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<div use:tocCrawler={{ mode: 'generate', scrollTarget: '#page' }} class="py-6 space-y-10">
	<div class="space-y-5">
		<h1 class="h1">Guides</h1>
		<p>
			Welcome to the world of Skater XL modding! Follow these guides to begin your modding journey.
		</p>
	</div>
	<div class="card p-2">
		<Accordion>
			<AccordionItem>
				<svelte:fragment slot="summary"><strong>Getting Started Guide</strong></svelte:fragment>
				<svelte:fragment slot="content">
					<div class="space-y-5">
						<div class="p-3">
							<Stepper>
								<Step>
									<svelte:fragment slot="header">Step 1: Confirm Your Game Version</svelte:fragment>
									<p>
										It's crucial to know which version of Skater XL you're installing mods into, as
										mod compatibility depends on your game version.
									</p>
									<p>Check your game version in the lower left corner at launch.</p>
									<p>v1.2.2.8 and v1.2.7.8 are the most common versions.</p>
									<img src="images/XLversion.webp" alt="Game Version Check" />
								</Step>
								<Step>
									<svelte:fragment slot="header"
										>Step 2: Switching Game Versions (optional)</svelte:fragment
									>
									<p>
										Both the Alpha (v1.2.2.8) and Public (v.1.2.7.8) branches are viable for
										modding, but we recommend version v1.2.2.8 (Alpha) due to its extensive mod
										support.
									</p>
									<p>
										To change versions, right-click Skater XL in your Steam library, select
										Properties > Betas.
									</p>
									<p>Choose your preferred version from the dropdown menu.</p>
									<img src="images/XLDowngrade2.webp" alt="Downgrade Step" />
								</Step>
								<Step>
									<svelte:fragment slot="header">Step 3: Download UnityModManager</svelte:fragment>
									<p>
										Select your game version below and follow the link to download the corresponding
										UnityModManager (UMM) version.
									</p>
									<p>You will need to login to Nexusmods, then select "Slow Download."</p>
									<Accordion autocollapse>
										<AccordionItem>
											<svelte:fragment slot="summary"
												><strong>Skater XL v1.2.2.8 (Alpha)</strong></svelte:fragment
											>
											<svelte:fragment slot="content">
												<div class="p-6">
													<a
														href="https://www.nexusmods.com/site/mods/21?tab=files&file_id=2224"
														class="btn variant-filled"
														target="_blank">UnityModManager v0.27.4</a
													>
												</div>
											</svelte:fragment>
										</AccordionItem>
										<AccordionItem>
											<svelte:fragment slot="summary"
												><strong>Skater XL v1.2.7.8 (Public)</strong></svelte:fragment
											>
											<svelte:fragment slot="content">
												<div class="p-6">
													<a
														href="https://www.nexusmods.com/site/mods/21?tab=files&file_id=2314"
														class="btn variant-filled"
														target="_blank">UnityModManager v0.27.7</a
													>
												</div>
											</svelte:fragment>
										</AccordionItem>
									</Accordion>
									<p>
										To keep things easy, make sure you only have one version of UnityModManager
										downloaded at a time.
									</p>
								</Step>
								<Step>
									<svelte:fragment slot="header">Step 4: UnityModmanger Setup</svelte:fragment>
									<p>
										After downloading, extract the .zip file. Open this folder to access
										UnityModManager.exe. Set the following paths:
									</p>
									<p><strong>Game:</strong> Skater XL</p>
									<p>
										<strong>Folder:</strong> This PC > Local Disk (C:) > Program Files (x86) > Steam
										> steamapps > common > Skater XL
									</p>
									<img src="images/UMM2.webp" alt="UnityModManager Setup" />
									<p>
										Click <strong>Install</strong> or <strong>Update</strong> to complete the setup.
									</p>
									<p>
										<strong>Troubleshooting: </strong>If you get a "method on start" error it means
										you are using the wrong version of UnityModManager. Refer back to step 3 to
										ensure you have the right version.
									</p>
								</Step>
								<Step>
									<svelte:fragment slot="header">Step 5: Download and Install Mods</svelte:fragment>
									<p>
										Download compatible mods and drop them into UnityModManager. For a full list of
										working mods for your game, check out our Mods tab.
									</p>
									<img src="images/UMM3.webp" alt="Installing Mods" />
									<p>
										<strong>Note:</strong> In UnityModManager, "Status: OK" or "Status: Update to X.X.X"
										indicates a mod is installed. Avoid updating mods directly from UnityModManager,
										as changing versions may render them incompatible.
									</p>
									<p>For manual installation or uninstallation, right-click each mod.</p>
								</Step>
								<Step>
									<svelte:fragment slot="header">Step 6: Launch Skater XL!</svelte:fragment>
									<p>
										Start Skater XL. UnityModManager will open, indicating mod status. A green icon
										suggests the mod is working, while a red icon indicates issues.
									</p>
									<img src="images/UMM5.webp" alt="Launch Skater XL" />
								</Step>
								<!-- ... -->
							</Stepper>
						</div>
					</div>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</div>
</div>
