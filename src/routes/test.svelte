<script>
	import Pane from '$lib/Pane.svelte';
	import Splitpanes from '$lib/Splitpanes.svelte';
</script>

<Splitpanes class="default-theme" horizontal style="height: 400px">
	<Pane size="65">
		<span>1</span>
	</Pane>
	<Pane size="10">
		<span>2</span>
	</Pane>
	<Pane>
		<span>3</span>
	</Pane>
	<Pane>
		<span>4</span>
	</Pane>
</Splitpanes>
