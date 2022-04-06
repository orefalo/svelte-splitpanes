<script>
	import Pane from '$lib/Pane.svelte';
	import Splitpanes from '$lib/Splitpanes.svelte';
	import { HighlightSvelte } from 'svelte-highlight';

	let code = `
<Splitpanes class="default-theme" style="height: 400px">
    {#each { length: 8 } as _, i}
        <Pane minSize="5">
            <span>{i + 1}</span>
        </Pane>
    {/each}
</Splitpanes>`;
</script>

<h2>Lots of splitters & push other panes - all panes have a min width of 5%</h2>

<Splitpanes class="default-theme" style="height: 400px">
	{#each { length: 8 } as _, i}
		<Pane minSize="5">
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>

<HighlightSvelte {code} />
