<script lang="ts">
	import { page } from '$app/stores';
	$: classesActive = (href: string) => (href === $page.url.pathname ? '!bg-primary-500' : '');
</script>

<nav class="list-nav w-56 p-6">
	<a href="/" class={classesActive('/')} data-sveltekit-preload-data="hover">Home</a>
	<a href="/guides" class={classesActive('/guides')} data-sveltekit-preload-data="hover">Guides</a>
	<a href="/mods" class={classesActive('/mods')} data-sveltekit-preload-data="hover">Mods</a>
	<a href="/xlhub" class={classesActive('/xlhub')} data-sveltekit-preload-data="hover">XL Hub</a>
	<!-- <a href="/maps" class={classesActive('/maps')} data-sveltekit-preload-data="hover">Maps</a>
	<a href="/gear" class={classesActive('/gear')} data-sveltekit-preload-data="hover">Gear</a>
	<a href="/stats" class={classesActive('/stats')} data-sveltekit-preload-data="hover">Stats</a> -->
</nav>
