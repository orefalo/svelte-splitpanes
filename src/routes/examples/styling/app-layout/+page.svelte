<script lang="ts">
  import ExampleArea from '$comp/ExampleArea.svelte';

  import example from './code.svelte?example';
</script>

<h2>Styling Splitters - Modern</h2>

<p>
  This examples uses CSS styles to pixel size panes and lock them in place. applied to panes in
  order to achieve the desired layout.
</p>

<ExampleArea {example} />
