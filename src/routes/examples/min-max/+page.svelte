<script lang="ts">
  import ExampleArea from '$comp/ExampleArea.svelte';

  import example from './code.svelte?example';
</script>

<h2>Horizontal layout, push other panes, min & max use, doubleclick</h2>
<p>
  You can double click a splitter to maximize the next pane!
  <br />
  If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute:
  dblClickSplitter={false}.
</p>

<ExampleArea {example} />
