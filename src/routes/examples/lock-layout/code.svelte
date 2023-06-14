<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
</script>

<Splitpanes horizontal style="height: 400px" pushOtherPanes={false}>
	<Pane>
		<span>1</span>
		<p>Try grabbing to very bottom splitter, note how it stops on the bounderies of this panel</p>
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
		<p>Try grabbing to very top splitter, note how it stops on the bounderies of this panel</p>
	</Pane>
</Splitpanes>
