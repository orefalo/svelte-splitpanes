<script>
	import { Pane, Splitpanes } from '$lib/.';
	import { HighlightSvelte } from 'svelte-highlight';
	import Button from '$comp/extras/Button.svelte';

	let panesNumber = 3;

	let code = `
<script>
    let panesNumber = 3;
<\/script>    
<Button
	on:click={() => {
		if (panesNumber >= 0) panesNumber++;
	}}>+ ADD PANE</Button
>
<Button
	disabled={panesNumber <= 0}
	on:click={() => {
		if (panesNumber > 0) panesNumber--;
	}}>- REMOVE PANE</Button
>

<Splitpanes class="default-theme" style="height: 400px">
	{#each { length: panesNumber } as _, i}
		<Pane minSize="10">
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>`;
</script>

<h2>Adding splitters programmatically</h2>

<Button
	on:click={() => {
		if (panesNumber >= 0) panesNumber++;
	}}>+ ADD PANE</Button
>
<Button
	disabled={panesNumber <= 0}
	on:click={() => {
		if (panesNumber > 0) panesNumber--;
	}}>- REMOVE PANE</Button
>

<Splitpanes class="default-theme" style="height: 400px">
	{#each { length: panesNumber } as _, i}
		<Pane minSize="10">
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>
<HighlightSvelte {code} />
