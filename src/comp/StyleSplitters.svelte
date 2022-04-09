<script>
	import Pane from '$lib/Pane.svelte';
	import Splitpanes from '$lib/Splitpanes.svelte';
	import { HighlightSvelte } from 'svelte-highlight';

	let code = `
<Splitpanes horizontal style="height: 400px">
	<Pane>
		<Splitpanes>
			<Pane>
				<span>1</span>
			</Pane>
			<Pane>
				<span>2</span>
			</Pane>
			<Pane>
				<span>3</span>
			</Pane>
		</Splitpanes>
	</Pane>
	<Pane
		><em class="specs">
			<p>In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!</p>
		</em>
	</Pane>
</Splitpanes>

<style global lang="scss">
	.splitpanes {
		background-color: #f8f8f8;
	}

	.splitpanes__splitter {
		background-color: #ccc;
		position: relative;
	}
	.splitpanes__splitter:before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		transition: opacity 0.4s;
		background-color: rgba(255, 0, 0, 0.3);
		opacity: 0;
		z-index: 1;
	}
	.splitpanes__splitter:hover:before {
		opacity: 1;
	}
	.splitpanes--vertical > .splitpanes__splitter:before {
		left: -30px;
		right: -30px;
		height: 100%;
	}
	.splitpanes--horizontal > .splitpanes__splitter:before {
		top: -30px;
		bottom: -30px;
		width: 100%;
	}
</style>
`;
</script>

<h2>Styling Splitters</h2>

<Splitpanes horizontal style="height: 400px">
	<Pane>
		<Splitpanes>
			<Pane>
				<span>1</span>
			</Pane>
			<Pane>
				<span>2</span>
			</Pane>
			<Pane>
				<span>3</span>
			</Pane>
		</Splitpanes>
	</Pane>
	<Pane
		><em class="specs">
			<p>In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!</p>
		</em>
	</Pane>
</Splitpanes>

<HighlightSvelte {code} />

<style global lang="scss">
	.splitpanes {
		background-color: #f8f8f8;
	}

	.splitpanes__splitter {
		background-color: #ccc;
		position: relative;
	}
	.splitpanes__splitter:before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		transition: opacity 0.4s;
		background-color: rgba(255, 0, 0, 0.3);
		opacity: 0;
		z-index: 1;
	}
	.splitpanes__splitter:hover:before {
		opacity: 1;
	}
	.splitpanes--vertical > .splitpanes__splitter:before {
		left: -30px;
		right: -30px;
		height: 100%;
	}
	.splitpanes--horizontal > .splitpanes__splitter:before {
		top: -30px;
		bottom: -30px;
		width: 100%;
	}
</style>
