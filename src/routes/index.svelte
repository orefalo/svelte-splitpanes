<script lang="ts">
	import MinMax from '$comp/MinMax.svelte';
	import DefaultSize from '$comp/DefaultSize.svelte';
	import LockLayout from '$comp/LockLayout.svelte';
	import PushOtherPanes from '$comp/PushOtherPanes.svelte';
	import AddRemoveSplitter from '$comp/AddRemoveSplitter.svelte';
	import ChangeOrientation from '$comp/ChangeOrientation.svelte';
	import ProgResize from '$comp/ProgResize.svelte';
	import TogglePanes from '$comp/TogglePanes.svelte';
	import ListenToEvents from '$comp/ListenToEvents.svelte';
	import StyleSplitters from '$comp/StyleSplitters.svelte';
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
