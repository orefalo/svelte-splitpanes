<script lang="ts">
	import MinMax from '$lib/MinMax.svelte';
	import DefaultSize from '$lib/DefaultSize.svelte';
	import LockLayout from '$lib/LockLayout.svelte';
	import PushOtherPanes from '$lib/PushOtherPanes.svelte';
	import AddRemoveSplitter from '$lib/AddRemoveSplitter.svelte';
	import ChangeOrientation from '$lib/ChangeOrientation.svelte';
	import ProgResize from '$lib/ProgResize.svelte';
	import TogglePanes from '$lib/TogglePanes.svelte';
	import ListenToEvents from '$lib/ListenToEvents.svelte';
	import StyleSplitters from '$lib/StyleSplitters.svelte';
</script>

<h1>Svelte-Splitpane demo</h1>

<MinMax />
<hr />
<DefaultSize />
<hr />
<LockLayout />
<hr />
<PushOtherPanes />
<hr />
<AddRemoveSplitter />
<hr />
<ChangeOrientation />
<hr />
<ProgResize />
<hr />
<TogglePanes />
<hr />
<ListenToEvents />
<hr />
<StyleSplitters />
