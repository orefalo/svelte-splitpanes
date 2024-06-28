<script lang="ts">
  import ExampleArea from '$comp/ExampleArea.svelte';

  import example from './code.svelte?example';
</script>

<h2>Simple snap</h2>
<p>Using snapSize on a pane makes it snap to his adjacent splitters and borders.</p>

<ExampleArea {example} />
