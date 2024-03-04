<script lang="ts">
	import { TabGroup, Tab, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { mods } from '$lib/data/modsData'; // Ensure this path matches the location of your mods data file

	let tabSet: number = 0;
</script>

<div>
	<h2 class="h2 pb-5">Mods</h2>
	<TabGroup>
		{#each mods as { tab, version, modItems }, tabIndex}
			<Tab bind:group={tabSet} name={`tab${tabIndex}`} value={tabIndex}>
				<svelte:fragment slot="lead">
					<strong>{tab}</strong>
				</svelte:fragment>
				<span>{version}</span>
			</Tab>
		{/each}

		<svelte:fragment slot="panel">
			{#if tabSet < mods.length}
				<div class="lg:h-[94vh] lg:overflow-y-auto">
					<Accordion>
						{#each mods[tabSet].modItems as { title, author, workingVersion, keybind, features, note, icon, downloadLinks }}
							<AccordionItem>
								<svelte:fragment slot="lead">
									{#if icon}{icon}{/if}
								</svelte:fragment>
								<svelte:fragment slot="summary">{title}</svelte:fragment>
								<svelte:fragment slot="content">
									<div class="card p-4 space-y-4">
										<div><h3 class="h3">{title}</h3></div>
										<div><strong>Author:</strong> <span class="font-normal">{author}</span></div>
										<div>
											<strong>Working Version:</strong>
											<span class="font-normal">{workingVersion}</span>
										</div>
										<div><strong>Keybind:</strong> <span class="font-normal">{keybind}</span></div>
										<div>
											<strong>Features:</strong>
											<ul class="list-disc pl-5">
												{#each features as feature}
													<li class="font-normal">{feature}</li>
												{/each}
											</ul>
										</div>
										{#if note}
											<div>
												<strong>Note:</strong> <span class="font-normal">{note}</span>
											</div>
										{/if}
										<div class="flex items-start gap-4">
											{#each downloadLinks as { url, label }}
												<a
													href={url}
													class="btn variant-filled"
													target="_blank"
													rel="noopener noreferrer">{label}</a
												>
											{/each}
										</div>
									</div>
								</svelte:fragment>
							</AccordionItem>
						{/each}
					</Accordion>
				</div>
			{/if}
		</svelte:fragment>
	</TabGroup>
</div>
