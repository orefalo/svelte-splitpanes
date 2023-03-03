<script lang="ts">
	import { Pane, Splitpanes } from 'svelte-splitpanes';

	const url = 'https://orefalo.github.io/svelte-splitpanes/';
</script>

<h1>Welcome to Svelte-Splitpanes Minimal Demo!</h1>
<p>Visit <a href={url}>{url}</a> to read the documentation and for more examples.</p>

<Splitpanes style="height: 400px;">
	<Pane>First Pane</Pane>
	<Pane>Second Pane</Pane>
</Splitpanes>
