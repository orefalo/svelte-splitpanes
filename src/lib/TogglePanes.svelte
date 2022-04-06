<script>
	import Pane from '$lib/splitpanes/Pane.svelte';
	import Splitpanes from '$lib/splitpanes/Splitpanes.svelte';
	import { HighlightSvelte } from 'svelte-highlight';
	import Button from '$lib/extras/Button.svelte';

	function onClick() {
		visible = !visible;
	}

	let visible = true;

	let code = `
<script>
let visible = true;

function onClick() {
    visible = !visible;
}
<\/script>
<Button on:click={onClick}>{visible ? 'Hide' : 'Show'}</Button>
<Splitpanes class="default-theme" style="height: 400px">
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
</Splitpanes>`;
</script>

<h2>Toggle a pane on/off</h2>

<Button on:click={onClick}>{visible ? 'Hide' : 'Show'}</Button>
<Splitpanes class="default-theme" style="height: 400px">
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

<HighlightSvelte {code} />
