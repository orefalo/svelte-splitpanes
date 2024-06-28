<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';

  import RangeSlider from 'svelte-range-slider-pips';

  let value = [50];
</script>

<RangeSlider float bind:values={value} min={0} step={0.01} max={100} />
<Splitpanes style="height: 400px">
  <Pane bind:size={value[0]}>
    <span>{Math.round(value[0])}%</span>
  </Pane>
  <Pane>
    <span>Auto-Calculated</span>
  </Pane>
</Splitpanes>
