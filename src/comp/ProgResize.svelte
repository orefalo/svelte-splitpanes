<script>
	import Pane from '$lib/Pane.svelte';
	import Splitpanes from '$lib/Splitpanes.svelte';
	import { HighlightSvelte } from 'svelte-highlight';

	import RangeSlider from 'svelte-range-slider-pips';

	let value = [50];

	let code = `
<script>
    let value = [50, 100];
<\/script>
<Slider bind:value />
<Splitpanes class="default-theme" style="height: 400px">
	<Pane size={value[0] + ''}>
		<span>{value[0]}%</span>
	</Pane>
	<Pane size={100 - value[0] + ''}>
		<span>{100 - value[0]}%</span>
	</Pane>
</Splitpanes>`;
</script>

<h2>Programmatic resizing</h2>
<p>This example shows the programmatic way of resizing panes. And how it works both ways.</p>

<RangeSlider float bind:values={value} min={0} max={100} />
<Splitpanes class="default-theme" style="height: 400px">
	<Pane size={value[0] + ''}>
		<span>{value[0]}%</span>
	</Pane>
	<Pane size={100 - value[0] + ''}>
		<span>{100 - value[0]}%</span>
	</Pane>
</Splitpanes>

<HighlightSvelte {code} />
