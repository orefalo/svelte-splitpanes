<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
</script>

<Splitpanes style="height: 400px">
	<Pane snapSize={10}>
		<p>Try shrinking my size, not how I snap below 10% size</p>
	</Pane>

	<Pane />
</Splitpanes>
