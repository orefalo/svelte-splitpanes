<script>
	import Pane from '$lib/Pane.svelte';
	import Splitpanes from '$lib/Splitpanes.svelte';
	import { HighlightSvelte } from 'svelte-highlight';
	import Button from '$comp/extras/Button.svelte';

	let horizontal = false;
	let firstSplitter = false;

	let code = `
<script>
	let horizontal = false;
	let firstSplitter = false;
<\/script>
<Button
	on:click={() => {
		horizontal = !horizontal;
	}}>{horizontal ? 'Turn to Vertical' : 'Turn to Horizontal'}</Button
>
<Button
	on:click={() => {
		firstSplitter = !firstSplitter;
	}}>{firstSplitter ? 'Hide first splitter' : 'Show first Splitter'}</Button
>
<Splitpanes class="default-theme" style="height: 400px" {firstSplitter} {horizontal}>
	{#each { length: 3 } as _, i}
		<Pane minSize="5">
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>`;
</script>

<h2>Change orientation & first splitter</h2>
<p>When changing direction, all the panes current width or height will flip to adapt to the new layout.</p>
<p>
	Showing the first splitter is an option which allows user to double click the splitter to maximize the next pane.<br
	/>
	The first splitter does not allow to resize the next pane.
</p>

<Button
	on:click={() => {
		horizontal = !horizontal;
	}}>{horizontal ? 'Turn to Vertical' : 'Turn to Horizontal'}</Button
>
<Button
	on:click={() => {
		firstSplitter = !firstSplitter;
	}}>{firstSplitter ? 'Hide first splitter' : 'Show first Splitter'}</Button
>
<Splitpanes class="default-theme" style="height: 400px" {firstSplitter} {horizontal}>
	{#each { length: 3 } as _, i}
		<Pane minSize="5">
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>

<HighlightSvelte {code} />
