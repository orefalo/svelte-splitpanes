<script lang="ts">
	import { Pane, Splitpanes } from 'svelte-splitpanes';
	import CodeArea from '$comp/CodeArea.svelte';

	import RangeSlider from 'svelte-range-slider-pips';

	let value = [50];

	const code = `
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
	
    let value = [50];
<\/script>

<RangeSlider float bind:values={value} min={0} step={0.01} max={100} />
<Splitpanes class="default-theme" style="height: 400px">
	<Pane bind:size={value[0]}>
		<span>{Math.round(value[0])}%</span>
	</Pane>
	<Pane>
		<span>Auto-Calculated</span>
	</Pane>
</Splitpanes>

<CodeArea id="prog_resize" {code} />`;
</script>

<h2>Programmatic resizing</h2>

<section>
	<p>
		This example shows the programmatic way of resizing panes with two-way data biding. And how it works both ways.
		<br />
		Changing programmatically the size one pane, will shrink/expand the other panes that have no specified size, as you can
		see in the example.
	</p>

	<RangeSlider float bind:values={value} min={0} step={0.01} max={100} />
	<Splitpanes class="default-theme" style="height: 400px">
		<Pane bind:size={value[0]}>
			<span>{Math.round(value[0])}%</span>
		</Pane>
		<Pane>
			<span>Auto-Calculated</span>
		</Pane>
	</Splitpanes>

	<CodeArea id="prog_resize" {code} />
</section>
