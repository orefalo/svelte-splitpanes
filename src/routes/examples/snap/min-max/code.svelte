<script>
  import { Pane, Splitpanes } from 'svelte-splitpanes';
</script>

<Splitpanes style="height: 400px">
  <Pane />

  <Pane snapSize={10} minSize={10} maxSize={70}>
    <span style="font-size: 20px;">
      I have a snap size of 10%
      <br />
      I have a min size of 10%
      <br />
      I have a max size of 70%
    </span>
  </Pane>

  <Pane />
</Splitpanes>
