<script>
	import Pane from '$lib/Pane.svelte';
	import Splitpanes from '$lib/Splitpanes.svelte';
	import { HighlightSvelte } from 'svelte-highlight';

	let code = `
<Splitpanes class="default-theme" horizontal={true} style="height: 400px">
    <Pane minSize="20" maxSize="70">
        <span>1
            <br />
            <em class="specs">I have a min height of 20% &amp; max height of 70%</em>
        </span>
    </Pane>
    <Pane>
        <span>2</span>
    </Pane>
    <Pane maxSize="70">
        <span
            >3

            <br />
            <em class="specs">I have a max height of 70%</em>
        </span>
    </Pane>
</Splitpanes>`;
</script>

<h2>Horizontal layout, push other panes, min & max use, doubleclick</h2>
<p>
	You can double click a splitter to maximize the next pane!<br />
	If you want to disable the 'double click splitter to maximize' behavior, you can add this attribute: dblClickSplitter={false}.
</p>

<Splitpanes class="default-theme" horizontal={true} style="height: 400px">
	<Pane minSize="20" maxSize="70">
		<span
			>1
			<br />
			<em class="specs">I have a min height of 20% &amp; max height of 70%</em>
		</span>
	</Pane>
	<Pane>
		<span>2</span>
	</Pane>
	<Pane maxSize="70">
		<span
			>3

			<br />
			<em class="specs">I have a max height of 70%</em>
		</span>
	</Pane>
</Splitpanes>

<HighlightSvelte {code} />
