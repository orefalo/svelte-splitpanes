<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
	import CodeArea from '$comp/CodeArea.svelte';
	import Button from '$comp/Button.svelte';

	let ordered = [{ color: 'red' }, { color: 'blue' }];

	let code = `
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'

	let ordered = 3;
<\/script>
<Button
	on:click={() => {
		const temp = ordered[0];
		ordered[0] = ordered[1];
		ordered[1] = temp;
	}}>Switch</Button
>

<Splitpanes class="default-theme" style="height: 400px">
	{#each ordered as val (val)}
		<Pane minSize={10}>
			<span style:color={val.color}>{val.color}</span>
		</Pane>
	{/each}
</Splitpanes>`;
</script>

<h2>Reordering Panes</h2>

<Button
	on:click={() => {
		const temp = ordered[0];
		ordered[0] = ordered[1];
		ordered[1] = temp;
	}}>Switch</Button
>
<Splitpanes class="default-theme" style="height: 400px">
	{#each ordered as val (val)}
		<Pane minSize={10}>
			<span style:color={val.color}>{val.color}</span>
		</Pane>
	{/each}
</Splitpanes>

<CodeArea id="reordering_panes" {code} />
