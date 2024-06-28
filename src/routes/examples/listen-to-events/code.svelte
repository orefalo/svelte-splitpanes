<script lang="ts">
  import { Pane, Splitpanes } from 'svelte-splitpanes';

  import TextArea from '$comp/TextAreaAutosize.svelte';

  let val = '// Event name: Event params   (Last event at the top)';

  function handleMessage(event: any) {
    if (event.detail) val = event.type + ' ' + JSON.stringify(event.detail) + '\n' + val;
    else val = event.type + '\n' + val;
  }
</script>

<Splitpanes
  style="height: 400px"
  on:ready={handleMessage}
  on:resize={handleMessage}
  on:resized={handleMessage}
  on:pane-click={handleMessage}
  on:pane-maximize={handleMessage}
  on:pane-add={handleMessage}
  on:pane-remove={handleMessage}
  on:splitter-click={handleMessage}>
  {#each { length: 3 } as _, i}
    <Pane minSize={10}>
      <span>{i + 1}</span>
    </Pane>
  {/each}
</Splitpanes>

<p>Try resizing panes and check the logs bellow.</p>

<TextArea bind:value={val} minRows={4} maxRows={40} />
