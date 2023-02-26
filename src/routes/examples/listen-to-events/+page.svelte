<script lang="ts">
	import ExampleArea from '$comp/ExampleArea.svelte';

	import example from './code.svelte?example';
</script>

<h2>Listening to emitted events</h2>

<p>Here is the list of events that are emitted from splitpanes:</p>

<ul>
	<li>ready has no parameter and fires when splitpanes is ready</li>
	<li>
		resize fires while resizing (on mousemove/touchmove) and returns an array of all the panes objects with their
		dimensions
	</li>
	<li>
		resized fires once when the resizing stops after user drag (on mouseup/touchend). it returns an array of all the
		panes objects with their dimensions. The event also fires after adding or removing a pane.
	</li>
	<li>pane-click returns the clicked pane object with its dimensions.</li>
	<li>pane-maximize returns the maximized pane object with its dimensions.</li>
	<li>pane-add returns an object containing the index of the added pane and the new array of panes after resize.</li>
	<li>
		pane-remove returns an object containing the removed pane and an array of all the remaining panes objects with their
		dimensions after resize.
	</li>
	<li>
		splitter-click returns the next pane object (with its dimensions) directly after the clicked splitter. This event is
		only emitted if dragging did not occur between mousedown and mouseup.
	</li>
</ul>

<ExampleArea {example} />
