<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
</script>

<Splitpanes horizontal style="height: 400px">
	<Pane size={65}>
		<span>1</span>
		<p>Default size of 65%</p>
	</Pane>
	<Pane size={10}>
		<span>2</span>
		<p>Default size of 10%</p>
	</Pane>
	<Pane size={25}>
		<span>3</span>
		<p>Default size of 25%</p>
	</Pane>
</Splitpanes>
