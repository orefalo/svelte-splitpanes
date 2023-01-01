<script lang="ts">
	import { Pane, Splitpanes } from '$lib';
	import CodeArea from '$comp/CodeArea.svelte';

	import RangeSlider from 'svelte-range-slider-pips';

	let value1 = [50];
	let value2 = [50];

	const code1 = `
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
	
    let value1 = [50];
<\/script>
<RangeSlider float bind:values={value1} min={0} step={0.01} max={100} />
<Splitpanes class="default-theme" style="height: 400px">
	<Pane bind:size={value1[0]}>
		<span>{Math.round(value1[0])}%</span>
	</Pane>
	<Pane size={100 - value1[0]}>
		<span>{Math.round(100 - value1[0])}%</span>
	</Pane>
</Splitpanes>`;

	const code2 = `
<script>
    let value2 = [50];
<\/script>
<RangeSlider float bind:values={value2} min={0} step={0.01} max={100} />
<Splitpanes class="default-theme" style="height: 400px">
	<Pane bind:size={value2[0]}>
		<span>{Math.round(value2[0])}%</span>
	</Pane>
	<Pane>
		<span>Auto-Calculated</span>
	</Pane>
</Splitpanes>`;
</script>

<h2>Programmatic resizing</h2>

<section>
	<p>This example shows the programmatic way of resizing panes with two-way data biding. And how it works both ways.</p>

	<RangeSlider float bind:values={value1} min={0} step={0.01} max={100} />
	<Splitpanes class="default-theme" style="height: 400px">
		<Pane bind:size={value1[0]}>
			<span>{Math.round(value1[0])}%</span>
		</Pane>
		<Pane size={100 - value1[0]}>
			<span>{Math.round(100 - value1[0])}%</span>
		</Pane>
	</Splitpanes>

	<CodeArea id="prog_resize_1" code={code1} />
</section>

<section>
	<p>
		Changing programmatically the size one pane, will shrink/expand the other panes that have no specified size, as you
		can see in the example.
		<br />
		However, not specifiying a size will cause issue on SSR that we can't solve, because of how Svelte SSR works today.
	</p>

	<RangeSlider float bind:values={value2} min={0} step={0.01} max={100} />
	<Splitpanes class="default-theme" style="height: 400px">
		<Pane bind:size={value2[0]}>
			<span>{Math.round(value2[0])}%</span>
		</Pane>
		<Pane>
			<span>Auto-Calculated</span>
		</Pane>
	</Splitpanes>

	<CodeArea id="prog_resize_2" code={code2} />
</section>
