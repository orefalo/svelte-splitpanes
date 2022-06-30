<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight';
	import PrerenderedArea from './PrerenderedArea.svelte';

	export let id: string;
	export let code: string;
</script>

<PrerenderedArea {id} content={code}>
	<HighlightSvelte {code} />
</PrerenderedArea>
