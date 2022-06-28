<script>
	import { Pane, Splitpanes } from '$lib/.';
	import { HighlightSvelte } from 'svelte-highlight';

	let code = `
<Splitpanes style="height: 400px">
  <Pane>
    
  </Pane>
  
  <Pane snapSize="10" minSize="10" maxSize="70">
    <span style="font-size: 20px;">
      I have a snap size of 10%<br />
      I have a min size of 10%<br />
      I have a max size of 70%
    </span>
  </Pane>

  <Pane>
    
  </Pane>
</Splitpanes>`;
</script>

<h2>Min & max with snap</h2>
<p>
	You can also snap to the panel maximum and minimum size.
</p>

<Splitpanes style="height: 400px">
  <Pane>
    
  </Pane>
  
  <Pane snapSize="10" minSize="10" maxSize="70">
    <span style="font-size: 20px;">
      I have a snap size of 10%<br />
      I have a min size of 10%<br />
      I have a max size of 70%
    </span>
  </Pane>

  <Pane>
    
  </Pane>
</Splitpanes>

<HighlightSvelte {code} />