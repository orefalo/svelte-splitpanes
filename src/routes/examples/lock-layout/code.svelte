<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
</script>

<Splitpanes horizontal style="height: 400px" pushOtherPanes={false}>
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
