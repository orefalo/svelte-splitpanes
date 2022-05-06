<script lang="ts">
	import { getContext, onMount, onDestroy } from 'svelte';
	import { nanoid } from './browserNanoid';
	import { KEY } from './Splitpanes.svelte';
	import type { IPane, SplitContext } from '.';
	const { onPaneAdd, onPaneRemove, onPaneClick, isHorizontal } = getContext<SplitContext>(KEY);

	// PROPS

	export let size: string | null = null;
	export let minSize: string = '0';
	export let maxSize: string = '100';
	// css class
	let clazz = '';
	export { clazz as class };

	// VARIABLES

	const uid: string = nanoid();
	let element: HTMLElement;
	let sz: number;
	let min: number;
	let max: number;

	// REACTIVE

	$: {
		sz = size === null ? 0 : parseFloat(size);
		min = parseFloat(minSize);
		max = parseFloat(maxSize);
	}

	function handleMouseClick(event: MouseEvent) {
		onPaneClick(event, uid);
	}

	onMount(() => {
		min = isNaN(parseFloat(minSize)) ? 0 : min;
		max = isNaN(parseFloat(maxSize)) ? 100 : max;
		const inst: IPane = {
			uid: uid,
			element: element,
			givenSize: size,
			sz: () => sz,
			setSz: (v) => {
				sz = v;
			},
			min: () => min,
			max: () => max
		};
		onPaneAdd(inst);
	});

	onDestroy(() => {
		onPaneRemove(uid);
	});
</script>

<div
	class={`splitpanes__pane ${clazz || ''}`}
	bind:this={element}
	on:click={handleMouseClick}
	style="{($isHorizontal ? 'height:' : 'width:') + sz}%"
>
	<slot />
</div>
