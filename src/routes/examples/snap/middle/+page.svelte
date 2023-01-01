<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
	import CodeArea from '$comp/CodeArea.svelte';

	let code = `
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
<\/script>	
<Splitpanes style="height: 400px">
	<Pane />

	<Pane snapSize={10}>
		<span style="font-size: 20px;"> I have a snap size of 10% </span>
	</Pane>

	<Pane />
</Splitpanes>`;
</script>

<h2>Middle snap</h2>

<Splitpanes style="height: 400px">
	<Pane />

	<Pane snapSize={10}>
		<span style="font-size: 20px;"> I have a snap size of 10% </span>
	</Pane>

	<Pane />
</Splitpanes>

<CodeArea id="middle_snap" {code} />
