<script lang="ts">
	import ExampleArea from '$comp/ExampleArea.svelte';

	import example from './code.svelte?example';
</script>

<h2>Styling Splitters - Modern</h2>

<p>
	This examples brings few new concepts over the previous one, however it tries to formalize how CSS styling could be
	applied to panes in order to achieve the desired layout.
</p>

<ExampleArea {example} />
