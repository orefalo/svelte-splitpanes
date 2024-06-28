<script lang="ts">
  import ExampleArea from '$comp/ExampleArea.svelte';

  import example from './code.svelte?example';
</script>

<h2>Locking layout by prevent pushing other panes</h2>

<ExampleArea {example} />
