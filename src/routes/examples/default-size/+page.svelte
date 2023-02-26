<script lang="ts">
	import ExampleArea from '$comp/ExampleArea.svelte';

	import example from './code.svelte?example';
</script>

<h2>Default pane size</h2>
<p>
	Provide dimension of your panes when they first load (will be used for the width or height respectively for the
	vertical or horizontal layout).<br />
	<b
		>If you provide a default size, make sure you provide it for all the panes for a total equals to 100%. If a pane is
		missing a default size, then all the panes will have the same size.</b
	><br /> Note that setting a default value is different than setting a min or max value.
</p>

<ExampleArea {example} />
