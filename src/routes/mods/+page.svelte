<script lang="ts">
	import { tocCrawler, TabGroup, Tab, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	let tabSet: number = 0;
</script>

<div use:tocCrawler={{ mode: 'generate', scrollTarget: '#page' }} class="py-6 space-y-5">
	<div class="space-y-5">
		<h1 class="h1">Mods</h1>
		<p>Expand the list down below to explore the different mods available for each game version.</p>
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
														<strong> Features: </strong> Custom Sounds, Community-Created Soundpacks,
														Enhanced UI Sounds
													</p>
													<p>
														<strong>Note:</strong> The soundmod is auto-enabled upon launch. You can
														customize your sounnds by adding a different Soundpack.
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
														<strong>Note:</strong> It is highly reccomended that you install the Deck
														FX fix while using this mod. This small step will make your game feel much
														better.
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled">Essential</span>
											</svelte:fragment>
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled">Essential</span>
											</svelte:fragment>
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-secondary">Useful</span>
											</svelte:fragment>
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-secondary">Useful</span>
											</svelte:fragment>
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-secondary">Useful</span>
											</svelte:fragment>
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-secondary">Useful</span>
											</svelte:fragment>
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
														<strong>Note:</strong> Configure this mod by using the drop down menu in
														the UnityModManager window.
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-secondary">Useful</span>
											</svelte:fragment>
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-secondary">Useful</span>
											</svelte:fragment>
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-secondary">Useful</span>
											</svelte:fragment>
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
										<AccordionItem>
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-warning">Fun</span>
											</svelte:fragment>
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
														<strong> Features: </strong> Walking, Custom Animations and Emotes, Sound
														Bites
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-warning">Fun</span>
											</svelte:fragment>
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-warning">Fun</span>
											</svelte:fragment>
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-warning">Fun</span>
											</svelte:fragment>
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-warning">Fun</span>
											</svelte:fragment>
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-warning">Fun</span>
											</svelte:fragment>
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-warning">Fun</span>
											</svelte:fragment>
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-warning">Fun</span>
											</svelte:fragment>
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-warning">Fun</span>
											</svelte:fragment>
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
										<!-- Public Mods -->
									</Accordion>
								{:else if tabSet === 1}
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
														<strong> Features: </strong> Custom Sounds, Community-Created Soundpacks,
														Enhanced UI Sounds
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-secondary">Useful</span>
											</svelte:fragment>
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-secondary">Useful</span>
											</svelte:fragment>
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
														<strong>Note:</strong> Navigate to the #shapefx section to download this
														mod.
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
												<span class="badge variant-filled-secondary">Useful</span>
											</svelte:fragment>
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
														<strong>Note:</strong> Configure this mod by using the drop down menu in
														the UnityModManager window.
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-secondary">Useful</span>
											</svelte:fragment>
											<svelte:fragment slot="summary">XL Menu Mod</svelte:fragment>
											<svelte:fragment slot="content">
												<div class="p-2 space-y-3">
													<p><strong>Author:</strong> mcbtay</p>
													<p><strong>Working Version:</strong> 2.6.3</p>
													<p><strong>Keybind:</strong> (automatic)</p>
													<p>
														<strong> Features: </strong> Custom Folder Structures, Preview Images for
														Maps, Auto-load Map DLL's, Advanced Sorting
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
											<svelte:fragment slot="lead">
												<span class="badge variant-filled-secondary">Useful</span>
											</svelte:fragment>
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
	</div>
	<div class="grid md:grid-cols-2 gap-5">
		<div class="card">
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
		<div class="card">
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
</div>
