<script lang="ts">
  import ExampleArea from '$comp/ExampleArea.svelte';

  import example from './code.svelte?example';
</script>

<h2>Lots of splitters & push other panes - all panes have a min width of 5%</h2>

<ExampleArea {example} />
