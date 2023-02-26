<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';

	import Button from '$comp/Button.svelte';

	function onClick() {
		visible = !visible;
	}

	let visible = true;
</script>

<Button on:click={onClick}>{visible ? 'Hide' : 'Show'}</Button>

<Splitpanes style="height: 400px">
	<Pane>
		<span>1</span>
	</Pane>
	{#if visible}
		<Pane>
			<span>2</span>
		</Pane>
	{/if}
	<Pane>
		<span>3</span>
	</Pane>
</Splitpanes>
