<script lang="ts">
	import ExampleArea from '$comp/ExampleArea.svelte';
	import example from './code.svelte?example';
</script>

<h2>Disable double click</h2>
<p>
	By default, double clicking the splitter will expand its nearest pane. In this example, we demonstrate how to turn
	this feature OFF
</p>

<ExampleArea {example} />
