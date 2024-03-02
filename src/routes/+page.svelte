<script lang="ts">
	import { TabGroup, Tab, AccordionItem, Stepper, Step, Accordion } from '@skeletonlabs/skeleton';
	let tabSet: number = 0;

	let elemCarousel: HTMLDivElement;
	const imageFilenames = [
		'XXL3.webp',
		'XLGM.webp',
		'XLGraphics.webp',
		'GrindTools.webp',
		'BetterObjectDropper.webp',
		'Multiplayer.webp',
		'DeckFX.webp',
		'XLObjectDropper.webp',
		'FroMod.webp',
		'WalkingMod.webp',
		'BonedOllieMod.webp',
		'XLMenuMod.webp'
	];

	function carouselThumbnail(index: number) {
		elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
	}

	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}
</script>

<div class="py-6 space-y-3 flex flex-col items-center justify-center text-center">
	<!---Logo--->
	<svg width="72px" height="72px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<style>
			.cls-1 {
				fill: none;
				stroke: currentColor;
				stroke-miterlimit: 10;
				stroke-width: 1.91px;
			}
			.cls-2 {
				fill: currentColor;
			}
		</style>
		<polyline class="cls-1" points="12 20.59 1.5 20.59 1.5 1.5 16.77 1.5 16.77 11.04" />
		<line class="cls-1" x1="4.36" y1="5.32" x2="13.91" y2="5.32" />
		<line class="cls-1" x1="4.36" y1="9.14" x2="13.91" y2="9.14" />
		<line class="cls-1" x1="4.36" y1="12.95" x2="12" y2="12.95" />
		<line class="cls-1" x1="4.36" y1="16.77" x2="12" y2="16.77" />
		<path
			class="cls-1"
			d="M22.5,17.25a4.3,4.3,0,1,0-6.68,3.57V22.5h4.77V20.82A4.29,4.29,0,0,0,22.5,17.25Z"
		/>
		<circle class="cls-2" cx="16.77" cy="17.73" r="0.95" />
		<circle class="cls-2" cx="19.64" cy="17.73" r="0.95" />
	</svg>
	<!---Title--->
	<h1 data-toc-ignore class="h1 tracking-tight">Skater XL Mod Docs</h1>
	<div class="pb-2">
		<ul>
			<li><code class="code">/Documents/SkaterXL/Maps</code> - your maps folder</li>
			<li><code class="code">/Documents/SkaterXL/Gear</code> - your gear folder</li>
		</ul>
	</div>
</div>
<div class="space-y-4">
	<div class="card h-full p-2">
		<Accordion>
			<AccordionItem>
				<svelte:fragment slot="lead"
					><svg
						width="24px"
						height="24px"
						viewBox="0 0 24 24"
						id="Layer_1"
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						><defs
							><style>
								.cls-1 {
									fill: none;
									stroke: #020202;
									stroke-miterlimit: 10;
									stroke-width: 1.91px;
								}
								.cls-2 {
									fill: #020202;
								}
							</style></defs
						><path
							class="cls-1"
							d="M18.68,5.32h1.91A1.9,1.9,0,0,1,22.5,7.23v9.54a1.9,1.9,0,0,1-1.91,1.91H3.41A1.9,1.9,0,0,1,1.5,16.77V7.23A1.9,1.9,0,0,1,3.41,5.32H6.27"
						/><path
							class="cls-1"
							d="M16.77,5.8a4.3,4.3,0,1,0-6.68,3.57v1.68h4.77V9.37A4.32,4.32,0,0,0,16.77,5.8Z"
						/><circle class="cls-2" cx="11.05" cy="6.27" r="0.95" /><circle
							class="cls-2"
							cx="13.91"
							cy="6.27"
							r="0.95"
						/><line class="cls-1" x1="12" y1="22.5" x2="12" y2="18.68" /><line
							class="cls-1"
							x1="16.77"
							y1="22.5"
							x2="7.23"
							y2="22.5"
						/></svg
					></svelte:fragment
				>
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
	<div class="card h-full p-2">
		<Accordion>
			<AccordionItem>
				<svelte:fragment slot="lead"
					><svg
						width="24px"
						height="24px"
						viewBox="0 0 24 24"
						id="Layer_1"
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						><defs
							><style>
								.cls-1 {
									fill: none;
									stroke: #020202;
									stroke-miterlimit: 10;
									stroke-width: 1.91px;
								}
								.cls-2 {
									fill: #020202;
								}
							</style></defs
						><path
							class="cls-1"
							d="M22.5,5.8a4.3,4.3,0,1,0-6.68,3.57v1.68h4.77V9.37A4.32,4.32,0,0,0,22.5,5.8Z"
						/><circle class="cls-2" cx="16.77" cy="6.27" r="0.95" /><circle
							class="cls-2"
							cx="19.64"
							cy="6.27"
							r="0.95"
						/><path
							class="cls-1"
							d="M22.5,19.64h0a2.86,2.86,0,0,1-2.86,2.86H4.36A2.86,2.86,0,0,1,1.5,19.64h0a1.9,1.9,0,0,1,1.91-1.91H9.14l.95.95h3.82l.95-.95h5.73A1.9,1.9,0,0,1,22.5,19.64Z"
						/><line class="cls-1" x1="20.59" y1="17.73" x2="20.59" y2="12.95" /><path
							class="cls-1"
							d="M3.41,17.73V7.23A1.92,1.92,0,0,1,5.32,5.32H12"
						/></svg
					></svelte:fragment
				>
				<svelte:fragment slot="summary"><strong>XL Hub: Modding Made Easy</strong></svelte:fragment>
				<svelte:fragment slot="content">
					<div class="space-y-5">
						<p>
							Introducing XL Hub by Fro, the ultimate tool for browsing, downloading, and managing
							your Skater XL maps and mods. No UnityModManager required.
						</p>
					</div>
					<p>
						Download and open XL Hub. Log in with your mod.io account to access a vast range of
						Skater XL mods. XL Hub detects your Skater XL installation via Steam, simplifying setup.
						Direct map downloads to Documents/SkaterXL/Maps for easy access.
					</p>

					<a href="https://mod.io/g/skaterxl/m/xlhub" class="btn variant-filled" target="_blank"
						>Download XL Hub</a
					>
					<div class="grid md:grid-cols-2 gap-5">
						<img src="/images/XLHub2.webp" alt="XL Hub 2" />

						<img src="/images/XLhub.webp" alt="XL Hub 1" />
					</div>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</div>
	<div class="card p-2">
		<Accordion>
			<AccordionItem>
				<svelte:fragment slot="lead">
					<!---Logo--->
					<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<style>
							.cls-1 {
								fill: none;
								stroke: currentColor;
								stroke-miterlimit: 10;
								stroke-width: 1.91px;
							}
							.cls-2 {
								fill: currentColor;
							}
						</style>
						<polyline class="cls-1" points="12 20.59 1.5 20.59 1.5 1.5 16.77 1.5 16.77 11.04" />
						<line class="cls-1" x1="4.36" y1="5.32" x2="13.91" y2="5.32" />
						<line class="cls-1" x1="4.36" y1="9.14" x2="13.91" y2="9.14" />
						<line class="cls-1" x1="4.36" y1="12.95" x2="12" y2="12.95" />
						<line class="cls-1" x1="4.36" y1="16.77" x2="12" y2="16.77" />
						<path
							class="cls-1"
							d="M22.5,17.25a4.3,4.3,0,1,0-6.68,3.57V22.5h4.77V20.82A4.29,4.29,0,0,0,22.5,17.25Z"
						/>
						<circle class="cls-2" cx="16.77" cy="17.73" r="0.95" />
						<circle class="cls-2" cx="19.64" cy="17.73" r="0.95" />
					</svg>
				</svelte:fragment>

				<svelte:fragment slot="summary"><strong>Working Mods List</strong></svelte:fragment>
				<svelte:fragment slot="content">
					<TabGroup>
						<Tab bind:group={tabSet} name="tab1" value={0}>
							<svelte:fragment slot="lead"><strong>Alpha</strong></svelte:fragment>
							<span>v1.2.2.8</span>
						</Tab>
						<Tab bind:group={tabSet} name="tab2" value={1}>
							<svelte:fragment slot="lead"><strong>Public</strong></svelte:fragment>
							<span>v1.2.7.8</span>
						</Tab>

						<!-- Tab Panels --->
						<svelte:fragment slot="panel">
							<!-- Alpha Mods --->
							{#if tabSet === 0}
								<Accordion>
									<AccordionItem>
										<svelte:fragment slot="lead">
											<span class="badge variant-filled">Essential</span>
										</svelte:fragment>
										<svelte:fragment slot="summary">XXL 3 Mod (Stats Menu)</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> DawgVinci</p>
												<p><strong>Working Version:</strong> 1.3.3</p>
												<p><strong>Keybind:</strong> Press <kbd class="kbd">F7</kbd> to open.</p>
												<p>
													<strong> Features: </strong> Stats Customization, Stance and Steeze Options,
													Enhanced Gameplay Control
												</p>
												<p>
													<strong>Note:</strong> Navigate to the #xxlmod section for Skater XL v1.2.2.8
													(Legacy)
												</p>
												<a
													href="https://discord.com/invite/GmuBn6UzUh"
													target="_blank"
													class="btn variant-ghost-secondary">DawgVinci's Discord</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead">
											<span class="badge variant-filled">Essential</span>
										</svelte:fragment>
										<svelte:fragment slot="summary">XL Gear Mod</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> mcbtay, Redgouf</p>
												<p><strong>Working Version:</strong> 2.0.1</p>
												<p><strong>Keybind:</strong> (automatic)</p>
												<p>
													<strong> Features: </strong> Dynamic Clothing, Custom Character Models, Complete
													Appearance Customization
												</p>
												<p>
													<strong>Note:</strong> The XL Gear Mod is integrated into the 'Edit Skater'
													Menu. This mod is designed to work with in conjunction with the XL Menu Mod.
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/xlgearmodifier"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead">
											<span class="badge variant-filled">Essential</span>
										</svelte:fragment>
										<svelte:fragment slot="summary">XL Graphics</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> Babbo</p>
												<p><strong>Working Version:</strong> 1.1.2</p>
												<p>
													<strong>Keybind:</strong> Press <kbd class="kbd">Backspace</kbd> to open.
												</p>
												<p>
													<strong> Features: </strong> Camera Customization, Fisheye Lens Effect, Follow
													Camera, Community-driven Presets
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/xlgraphics"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead">
											<span class="badge variant-filled">Essential</span>
										</svelte:fragment>.
										<svelte:fragment slot="summary">Soundmod</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> jbooogie, Babbo</p>
												<p><strong>Working Version:</strong> 1.3.0</p>
												<p><strong>Keybind:</strong> (automatic)</p>
												<p>
													<strong> Features: </strong> Custom Sounds, Community-Created Soundpacks, Enhanced
													UI Sounds
												</p>
												<p>
													<strong>Note:</strong> The soundmod is auto-enabled upon launch. You can customize
													your sounnds by adding a different Soundpack.
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/soundmod"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead">
											<span class="badge variant-filled">Essential</span>
										</svelte:fragment>
										<svelte:fragment slot="summary">Deck FX</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> Name</p>
												<p><strong>Working Version:</strong> 1.4</p>
												<p><strong>Keybind:</strong> Press <kbd class="kbd">F3</kbd> to open.</p>
												<p>
													<strong> Features: </strong> Deck, Wheel, and Truck customization
												</p>
												<p>
													<strong>Note:</strong> It is highly recomended that you install the Deck FX
													fix while using this mod. This small step will make your game feel much better.
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/deckfx"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="summary">Fro's Experimental Mod</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> Froquede</p>
												<p><strong>Working Version:</strong> 1.18.3</p>
												<p>
													<strong>Keybind:</strong> Press <kbd class="kbd">CTRL + F</kbd> to open.
												</p>
												<p>
													<strong> Features: </strong> Enhanced Physics, Custom Animations
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/fros-experimental-mod"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="summary">Boned Ollie Mod</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> MateusSXL</p>
												<p><strong>Working Version:</strong> 2.2.0</p>
												<p><strong>Keybind:</strong> Press <kbd class="kbd">F8</kbd> to open.</p>
												<p>
													<strong> Features: </strong> Trick Customization, Enhanced Control
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/boned-ollie-mod"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">XL Menu Mod</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> mcbtay</p>
												<p><strong>Working Version:</strong> 2.6.1</p>
												<p><strong>Keybind:</strong> (automatic)</p>
												<p>
													<strong> Features: </strong> Advanced Map and Gear Sorting, Preview Images
													for Maps, Dark Mode
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/xlmenumod"
													target="_blank"
													class="btn variant-ghost-secondary">XL Menu Mod</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">Multiplayer++</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> MateusSXL</p>
												<p><strong>Working Version:</strong> 1.0.1</p>
												<p><strong>Keybind:</strong> (automatic)</p>
												<p>
													<strong> Features: </strong> Improved Mutliplayer UI
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/multiplayer"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">Decal Fix</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> Brookzee99</p>
												<p><strong>Working Version:</strong> 1.2.2.8 & 1.2.5.6</p>
												<p><strong>Keybind:</strong> (automatic)</p>
												<p>
													<strong> Features: </strong> Enhanced Decals, Screen Space Reflections
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/decal-fix"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">Better Replay Mod</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> Froquede</p>
												<p><strong>Working Version:</strong> 1.5.0</p>
												<p>
													<strong>Keybind:</strong> Press <kbd class="kbd">CTRL + F10</kbd> to open.
												</p>
												<p>
													<strong> Features: </strong> Camera Light, Advanced Replay Tracking
												</p>
												<p>
													<strong>Note:</strong> Configure this mod by using the drop down menu in the
													UnityModManager window.
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/better-replay-mod"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">Grind Tools</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> Guru</p>
												<p><strong>Working Version:</strong> 1.0.2</p>
												<p><strong>Keybind:</strong> (automatic)</p>
												<p>
													<strong> Features: </strong> Customizable Grind Splines, Wax Tool
												</p>
												<p>
													<strong>Note:</strong> Access this mod through the Pause menu
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/grind-tools"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">Controls Editor</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> Silentbaws</p>
												<p><strong>Working Version:</strong> 0.1.1</p>
												<p>
													<strong>Keybind:</strong> Press <kbd class="kbd">CTRL + F10</kbd> to open.
												</p>
												<p>
													<strong> Features: </strong> Control Customization, Personalized Trick Mechanics
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/controls-editor"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">Walking Mod</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> Froquede</p>
												<p><strong>Working Version:</strong> 1.3.0</p>
												<p>
													<strong>Keybind:</strong> Press <kbd class="kbd">X+A</kbd> or
													<kbd class="kbd">Square+X</kbd> on your controller to open.
												</p>
												<p>
													<strong> Features: </strong> Walking, Custom Animations and Emotes, Sound Bites
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/walking-mod"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">Grab Customizer</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> Froquede</p>
												<p><strong>Working Version:</strong> 1.7.2</p>
												<p>
													<strong>Keybind:</strong> Press <kbd class="kbd">CTRL + G</kbd> to open.
												</p>
												<p>
													<strong> Features: </strong> Comprehensive Grab Customization
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/grabs-customizer-mod"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">Lateflip Mod</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> MateusSXL</p>
												<p><strong>Working Version:</strong> 1.1.1</p>
												<p><strong>Keybind:</strong> (automatic)</p>
												<p>
													<strong> Features: </strong> Realistic Late Flip Mechanics
												</p>
												<p>
													<strong>Note:</strong> Press <kbd class="kbd">L + F</kbd> to toggle on/off.
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/late-flip-mod-with-animations"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">XL Object Dropper</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> mcbtay, SqueegeeDinoToy</p>
												<p><strong>Working Version:</strong> 1.0.5</p>
												<p><strong>Keybind:</strong> (automatic)</p>
												<p>
													<strong> Features: </strong> Objects, NPC's, Custom Asset Support
												</p>
												<p>
													<strong>Note:</strong> This mod is integrated into the Pause menu
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/xlobjectdropper"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">Better Object Dropper</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> manu & mu35li</p>
												<p><strong>Working Version:</strong> 2.0.1</p>
												<p>
													<strong>Keybind:</strong> Press <kbd class="kbd">L3</kbd> on controller while
													in normal object dropper mode to open.
												</p>
												<p>
													<strong> Features: </strong> Flexible Object Movement, Group Manipulation,
													Advanced Scaling, Preset Saves
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/better-object-dropper-mod-by-manu-mu35li"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">XL Random Map</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> mcbtay</p>
												<p><strong>Working Version:</strong> 0.0.2</p>
												<p>
													<strong>Keybind:</strong> Press <kbd class="kbd">X</kbd> or
													<kbd class="kbd">Square</kbd> on your controller while the Map Menu is open.
												</p>
												<p>
													<strong> Features: </strong> Map seletion randomizer
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/xlrandommap"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">Break FX</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> DawgVinci</p>
												<p><strong>Working Version:</strong> 0.0.1</p>
												<p>
													<strong>Keybind:</strong> Press <kbd class="kbd">B</kbd> to break manually.
												</p>
												<p>
													<strong> Features: </strong> Realistic Board Break Mechanics
												</p>
												<p>
													<strong>Note:</strong> The board will break randomly by default.
												</p>
												<a
													href="https://discord.com/invite/GmuBn6UzUh"
													target="_blank"
													class="btn variant-ghost-secondary">DawgVinci's Discord</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">Gear Utilities</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> DawgVinci</p>
												<p><strong>Working Version:</strong> 2.0d</p>
												<p><strong>Keybind:</strong> Press <kbd class="kbd">G</kbd> to open.</p>
												<p>
													<strong> Features: </strong> Custom Accessories
												</p>
												<p>
													<strong>Note:</strong> Head to the #gearutilies section to find this mod.
												</p>
												<a
													href="https://discord.com/invite/GmuBn6UzUh"
													target="_blank"
													class="btn variant-ghost-secondary">DawgVinci's Discord</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">Controller Rumble</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> billowper, Froquede</p>
												<p><strong>Working Version:</strong> 1.2.3</p>
												<p><strong>Keybind:</strong> Press <kbd class="kbd">F9</kbd> to open.</p>
												<p>
													<strong> Features: </strong> Customizable Rumble Feedback
												</p>
												<p>
													<strong>Note:</strong> This is a note.
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/controller-rumble"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">Not My Feet</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> M4cs</p>
												<p><strong>Working Version:</strong> 1.1</p>
												<p><strong>Keybind:</strong> Press <kbd class="kbd">N</kbd> to open.</p>
												<p>
													<strong> Features: </strong> Remove shoe highlighting when using controller
													the overlay
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/notmyfeet"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
								</Accordion>
							{:else if tabSet === 1}
								<!-- Public Mods -->
								<Accordion>
									<AccordionItem>
										<svelte:fragment slot="lead">
											<span class="badge variant-filled">Essential</span>
										</svelte:fragment>
										<svelte:fragment slot="summary">XL Mod (Stats Menu)</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> DawgVinci</p>
												<p><strong>Working Version:</strong> 1.0.0c</p>
												<p><strong>Keybind:</strong> Press <kbd class="kbd">F7</kbd> to open.</p>
												<p>
													<strong> Features: </strong> Stats Customization, Stance and Steeze Options,
													Enhanced Gameplay Control
												</p>
												<p>
													<strong>Note:</strong> Navigate to the #xlmod section for Skater XL v1.2.7.8
												</p>
												<a
													href="https://discord.com/invite/GmuBn6UzUh"
													target="_blank"
													class="btn variant-ghost-secondary">DawgVinci's Discord</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead">
											<span class="badge variant-filled">Essential</span>
										</svelte:fragment>
										<svelte:fragment slot="summary">XL Graphics</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> Babbo, Froquede</p>
												<p><strong>Working Version:</strong> 2.0.2</p>
												<p>
													<strong>Keybind:</strong> Press <kbd class="kbd">Backspace</kbd> to open.
												</p>
												<p>
													<strong> Features: </strong> Camera Customization, Fisheye Lens Effect, Follow
													Camera, Community-driven Presets
												</p>
												<p>
													<strong>Note:</strong> Navigate to the #open-source-mods section to download
													this mod.
												</p>
												<a
													href="https://discord.gg/mBJ5wCchVm"
													target="_blank"
													class="btn variant-ghost-secondary">Fro's Discord</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead">
											<span class="badge variant-filled">Essential</span>
										</svelte:fragment>
										<svelte:fragment slot="summary">Soundmod</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> jbooogie, Babbo</p>
												<p><strong>Working Version:</strong> 1.2.0</p>
												<p><strong>Keybind:</strong> (automatic)</p>
												<p>
													<strong> Features: </strong> Custom Sounds, Community-Created Soundpacks, Enhanced
													UI Sounds
												</p>
												<p>
													<strong>Note:</strong> SoundMod version 1.2.0 does not include any pre-installed
													sounds. You'll need to download and manually install a soundpack.
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/soundmod"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead">
											<span class="badge variant-filled">Essential</span>
										</svelte:fragment>
										<svelte:fragment slot="summary">Deck Tools</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> Guru</p>
												<p><strong>Working Version:</strong> 0.0.2</p>
												<p>
													<strong>Keybind:</strong> Press <kbd class="kbd">CTRL + D</kbd> to open.
												</p>
												<p>
													<strong> Features: </strong> Customizable Decks, Trucks, Wheels, Adjustable
													Truck Tightness
												</p>
												<p>
													<strong>Note:</strong> Navigate to the #deck-tools section to download this
													mod.
												</p>
												<a
													href="https://discord.com/invite/RDh7tg2Bs5"
													target="_blank"
													class="btn variant-ghost-secondary">Guru's Discord</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead">
											<span class="badge variant-filled">Essential</span>
										</svelte:fragment>
										<svelte:fragment slot="summary">Fro's Experimental Mod</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> Froquede</p>
												<p><strong>Working Version:</strong> 2.0.1</p>
												<p>
													<strong>Keybind:</strong> Press <kbd class="kbd">CTRL + F</kbd> to open.
												</p>
												<p>
													<strong> Features: </strong> Enhanced Physics, Custom Animations
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/fros-experimental-mod"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead">
											<span class="badge variant-filled">Essential</span>
										</svelte:fragment>
										<svelte:fragment slot="summary">Boned Ollie Mod</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> MateusSXL</p>
												<p><strong>Working Version:</strong> 2.4.0</p>
												<p><strong>Keybind:</strong> Press <kbd class="kbd">F8</kbd> to open.</p>
												<p>
													<strong> Features: </strong> Trick Customization, Enhanced Control
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/boned-ollie-mod"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">Grind Tools</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> Guru</p>
												<p><strong>Working Version:</strong> 2.0.1</p>
												<p><strong>Keybind:</strong> (automatic)</p>
												<p>
													<strong> Features: </strong> Customizable Grind Splines, Wax Tool
												</p>
												<p>
													<strong>Note:</strong> Access this mod through the Pause menu.
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/grind-tools"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">Shape FX</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> DawgVinci</p>
												<p><strong>Working Version:</strong> 1.0.0</p>
												<p><strong>Keybind:</strong> Press <kbd class="kbd">F6</kbd> to open.</p>
												<p>
													<strong> Features: </strong> Skateboard Deck Shapes, Custom Materials
												</p>
												<p>
													<strong>Note:</strong> Navigate to the #shapefx section to download this mod.
												</p>
												<a
													href="https://discord.com/invite/GmuBn6UzUh"
													target="_blank"
													class="btn variant-ghost-secondary">DawgVinci's Discord</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">Better Replay Mod</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> Froquede</p>
												<p><strong>Working Version:</strong> 2.1.0</p>
												<p>
													<strong>Keybind:</strong> Press <kbd class="kbd">CTRL + F10</kbd> to open.
												</p>
												<p>
													<strong> Features: </strong> Camera Light, Advanced Replay Tracking
												</p>
												<p>
													<strong>Note:</strong> Configure this mod by using the drop down menu in the
													UnityModManager window.
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/better-replay-mod"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">XL Menu Mod</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> mcbtay</p>
												<p><strong>Working Version:</strong> 2.6.3</p>
												<p><strong>Keybind:</strong> (automatic)</p>
												<p>
													<strong> Features: </strong> Custom Folder Structures, Preview Images for Maps,
													Auto-load Map DLL's, Advanced Sorting
												</p>
												<p>
													<strong>Note:</strong> Download and install the XL Menu Mod v2.6.2. Right-click
													in the mod in UMM to update to v2.6.3.
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/better-replay-mod"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<AccordionItem>
										<svelte:fragment slot="lead"></svelte:fragment>
										<svelte:fragment slot="summary">Multiplayer++</svelte:fragment>
										<svelte:fragment slot="content">
											<div class="p-2 space-y-3">
												<p><strong>Author:</strong> MateusSXL</p>
												<p><strong>Working Version:</strong> 1.0.2</p>
												<p><strong>Keybind:</strong> (automatic)</p>
												<p>
													<strong> Features: </strong> Improved Mutliplayer UI
												</p>
												<p>
													<strong>Note:</strong> This is a note.
												</p>
												<a
													href="https://mod.io/g/skaterxl/m/multiplayer"
													target="_blank"
													class="btn variant-ghost-secondary">skaterxl.mod.io</a
												>
											</div>
										</svelte:fragment>
									</AccordionItem>
									<!-- ... -->
								</Accordion>
							{/if}
						</svelte:fragment>
					</TabGroup>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</div>

	<div class="grid md:grid-cols-2 gap-4">
		<div class="card pb-4">
			<img src="/images/Home1.webp" alt="Skater XL Alpha Version" />
			<section class="p-4"><strong>Version 1.2.2.8 (Alpha)</strong></section>
			<footer class="card-footer space-y-3">
				<h3 data-toc-ignore class="h3">The Ultimate Modding Experience</h3>
				<p>
					Skater XL version 1.2.2.8 stands out as the ideal version for those passionate about
					modding. Boasting extensive mod support, it allows players to fully customize their
					skating experience. This version enables you to use the renowned XXL 3 Mod by DawgVinci,
					the XL Gear Modifier, Fro's Experimental Mod, the Walking Mod, and many other enhancements
					to elevate your gameplay.
				</p>
			</footer>
		</div>
		<div class="card pb-4">
			<img src="/images/BetterReplay.webp" alt="Skater XL Public Version" />
			<section class="p-4"><strong>Version 1.2.7.8 (Public)</strong></section>
			<footer class="card-footer space-y-3">
				<h3 data-toc-ignore class="h3">Optimized for Vert Skating</h3>
				<p>
					The highlight of v1.2.7.8 is its emphasis on vert skating. Thanks to the grabs update,
					this version stands out as the optimal choice for players who love shredding bowls and
					ramps. The update brings a level of realism and finesse to vert skating that is unmatched
					in previous versions, making it a must-try for enthusiasts of this style.
				</p>
			</footer>
		</div>
	</div>
	<!-- Carousel -->
	<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
		<!-- Button: Left -->
		<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
			<i class="fa-solid fa-arrow-left" />
		</button>
		<!-- Full Images -->
		<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
			{#each imageFilenames as filename}
				<img
					class="snap-center w-[1024px] rounded-container-token"
					src={`/images/${filename}`}
					alt={filename}
					loading="lazy"
				/>
			{/each}
		</div>
		<!-- Button: Right -->
		<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
			<i class="fa-solid fa-arrow-right" />
		</button>
	</div>
	<div class="card p-4 grid grid-cols-6 gap-4">
		{#each imageFilenames as filename, i}
			<button type="button" on:click={() => carouselThumbnail(i)}>
				<img
					class="snap-center w-[1024px] rounded-container-token"
					src={`/images/${filename}`}
					alt={filename}
					loading="lazy"
				/>
			</button>
		{/each}
	</div>
</div>
