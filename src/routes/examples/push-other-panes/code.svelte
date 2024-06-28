<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';
</script>

<Splitpanes style="height: 400px">
  {#each { length: 8 } as _, i}
    <Pane minSize={5}>
      <span>{i + 1}</span>
      <p>Double click splitter -></p>
    </Pane>
  {/each}
</Splitpanes>
