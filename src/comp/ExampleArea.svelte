<script>
	import CodeArea from '$comp/CodeArea.svelte';

	/** @type {import('./example.js').Example} */
	export let example;
</script>

<div>
	<svelte:component this={example.component} />

	<CodeArea id={example.id} code={example.code} />
</div>
