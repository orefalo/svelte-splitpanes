<script lang="ts" context="module">
	export const gatheringKey = {};
</script>

<script lang="ts">
	import { setContext } from 'svelte';

	setContext(gatheringKey, true);
</script>

<slot />
