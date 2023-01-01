<script lang="ts">
	import { Pane, Splitpanes } from 'svelte-splitpanes';
	import CodeArea from '$comp/CodeArea.svelte';
	import TextArea from '$comp/TextAreaAutosize.svelte';

	let val = '// Event name: Event params   (Last event at the top)';

	function handleMessage(event: any) {
		if (event.detail) val = event.type + ' ' + JSON.stringify(event.detail) + '\n' + val;
		else val = event.type + '\n' + val;
	}

	let code = `
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'

	let val = '// Event name: Event params   (Last event at the top)';

	function handleMessage(event) {
		if (event.detail) val = event.type + ' ' + JSON.stringify(event.detail) + '\\n' + val;
		else val = event.type + '\\n' + val;
	}
<\/script>
<Splitpanes
	class="default-theme"
	style="height: 400px"
	on:ready={handleMessage}
	on:resize={handleMessage}
	on:resized={handleMessage}
	on:pane-click={handleMessage}
	on:pane-maximize={handleMessage}
	on:pane-add={handleMessage}
	on:pane-remove={handleMessage}
	on:splitter-click={handleMessage}
>
	{#each { length: 3 } as _, i}
		<Pane minSize={10}>
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>
<p>Try resizing panes and check the logs bellow.</p>
<TextArea bind:value={val} minRows={4} maxRows={40} />    
`;
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

<Splitpanes
	class="default-theme"
	style="height: 400px"
	on:ready={handleMessage}
	on:resize={handleMessage}
	on:resized={handleMessage}
	on:pane-click={handleMessage}
	on:pane-maximize={handleMessage}
	on:pane-add={handleMessage}
	on:pane-remove={handleMessage}
	on:splitter-click={handleMessage}
>
	{#each { length: 3 } as _, i}
		<Pane minSize={10}>
			<span>{i + 1}</span>
		</Pane>
	{/each}
</Splitpanes>
<p>Try resizing panes and check the logs bellow.</p>
<TextArea bind:value={val} minRows={4} maxRows={40} />

<CodeArea id="listen_to_events" {code} />
