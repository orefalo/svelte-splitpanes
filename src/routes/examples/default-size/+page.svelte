<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
	import CodeArea from '$comp/CodeArea.svelte';

	let code = `
<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes'
<\/script>	
<Splitpanes class="default-theme" horizontal style="height: 400px">
    <Pane size={65}>
        <span>1</span>
    </Pane>
    <Pane size={10}>
        <span>2</span>
    </Pane>
    <Pane size={25}>
        <span>3</span>
    </Pane>
</Splitpanes>`;
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

<Splitpanes class="default-theme" horizontal style="height: 400px">
	<Pane size={65}>
		<span>1</span>
	</Pane>
	<Pane size={10}>
		<span>2</span>
	</Pane>
	<Pane size={25}>
		<span>3</span>
	</Pane>
</Splitpanes>

<CodeArea id="default_size" {code} />
