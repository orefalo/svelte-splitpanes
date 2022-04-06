<script>
	import Pane from '$lib/Pane.svelte';
	import Splitpanes from '$lib/Splitpanes.svelte';
	import { HighlightSvelte } from 'svelte-highlight';

	let code = `
<Splitpanes class="default-theme" horizontal style="height: 400px" pushOtherPanes={false}>
    <Pane>
        <span>1</span>
    </Pane>
    <Pane>
        <Splitpanes pushOtherPanes={false}>
            <Pane>
                <span>2</span>
            </Pane>
            <Pane>
                <span>3</span>
            </Pane>
            <Pane>
                <span>4</span>
            </Pane>
        </Splitpanes>
    </Pane>
    <Pane>
        <span>5</span>
    </Pane>
</Splitpanes>`;
</script>

<h2>Locking layout by prevent pushing other panes</h2>

<Splitpanes class="default-theme" horizontal style="height: 400px" pushOtherPanes={false}>
	<Pane>
		<span>1</span>
	</Pane>
	<Pane>
		<Splitpanes>
			<Pane>
				<span>2</span>
			</Pane>
			<Pane>
				<span>3</span>
			</Pane>
			<Pane>
				<span>4</span>
			</Pane>
		</Splitpanes>
	</Pane>
	<Pane>
		<span>5</span>
	</Pane>
</Splitpanes>

<HighlightSvelte {code} />
