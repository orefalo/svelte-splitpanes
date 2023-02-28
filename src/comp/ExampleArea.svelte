<script>
	import Highlighted from './Highlighted.svelte';

	/** @type {import('./example.js').SvelteExample} */
	export let example;
</script>

<div>
	<svelte:component this={example.component} />

	<Highlighted lang="svelte" highlighted={example.highlightedHTML} />
</div>
