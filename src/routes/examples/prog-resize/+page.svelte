<script lang="ts">
	import { Pane, Splitpanes } from '$lib';
	import CodeArea from '$comp/CodeArea.svelte';

	import RangeSlider from 'svelte-range-slider-pips';

	let value = [50];

	let code = `
<script>
    let value = [50];
<${'/'}script>
<RangeSlider float bind:values={value} min={0} max={100} />
<Splitpanes class="default-theme" style="height: 400px">
	<Pane bind:size={value[0]}>
		<span>{Math.round(value[0])}%</span>
	</Pane>
	<Pane size={100 - value[0]}>
		<span>{Math.round(100 - value[0])}%</span>
	</Pane>
</Splitpanes>`;
</script>

<h2>Programmatic resizing</h2>
<p>This example shows the programmatic way of resizing panes with data biding. And how it works both ways.</p>

<RangeSlider float bind:values={value} min={0} step={0.01} max={100} />
<Splitpanes class="default-theme" style="height: 400px">
	<Pane bind:size={value[0]}>
		<span>{Math.round(value[0])}%</span>
	</Pane>
	<!-- TODO: I would like if we could have ommited also `size={100 - value[0]}` here,
		but auto size update isn't working otherwise (yet). -->
	<Pane size={100 - value[0]}>
		<span>{Math.round(100 - value[0])}%</span>
	</Pane>
</Splitpanes>

<CodeArea id="prog_resize" {code} />
