<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';

  import Button from '$comp/Button.svelte';

  let horizontal = false;
  let firstSplitter = false;
</script>

<Button
  on:click={() => {
    horizontal = !horizontal;
  }}>
  {horizontal ? 'Turn to Vertical' : 'Turn to Horizontal'}
</Button>
<Button
  on:click={() => {
    firstSplitter = !firstSplitter;
  }}>
  {firstSplitter ? 'Hide first splitter' : 'Show first Splitter'}
</Button>
<Splitpanes style="height: 400px" {firstSplitter} {horizontal}>
  {#each { length: 3 } as _, i}
    <Pane minSize={5}>
      <span>{i + 1}</span>
    </Pane>
  {/each}
</Splitpanes>
