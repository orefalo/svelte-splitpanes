<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
</script>

<Splitpanes horizontal style="height: 400px" dblClickSplitter={false}>
	<Pane size={33}>
		<span>1</span>
	</Pane>
	<Pane size={33}>
		<p>Note how double clicking has no resizing effects..</p>
	</Pane>
	<Pane size={34}>
		<span>3</span>
	</Pane>
</Splitpanes>
