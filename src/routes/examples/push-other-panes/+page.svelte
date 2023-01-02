<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
	import CodeArea from '$comp/CodeArea.svelte';

	let code = `
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
<\/script>
<Splitpanes class="default-theme" style="height: 400px">
    {#each { length: 8 } as _, i}
        <Pane minSize={5}>
            <span>{i + 1}</span>
        </Pane>
    {/each}
</Splitpanes>`;
</script>

<h2>Lots of splitters & push other panes - all panes have a min width of 5%</h2>

<Splitpanes class="default-theme" style="height: 400px">
	{#each { length: 8 } as _, i}
		<Pane minSize={5}>
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>

<CodeArea id="push_other_panes" {code} />
