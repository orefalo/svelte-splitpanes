<script lang="ts">
	import ExampleArea from '$comp/ExampleArea.svelte';

	import example from './code.svelte?example';
</script>

<h2>Min & max with snap</h2>
<p>You can also snap to the panel maximum and minimum size.</p>

<ExampleArea {example} />
