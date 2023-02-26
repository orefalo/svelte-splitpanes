<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';

	import Button from '$comp/Button.svelte';

	let panesNumber = 3;
	$: allowToRemove = panesNumber > 1;
</script>

<Button
	on:click={() => {
		panesNumber++;
	}}>+ ADD PANE</Button
>
<Button
	disabled={!allowToRemove}
	on:click={() => {
		if (allowToRemove) panesNumber--;
	}}>- REMOVE PANE</Button
>

<Splitpanes style="height: 400px">
	{#each { length: panesNumber } as _, i}
		<Pane minSize={10}>
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>
