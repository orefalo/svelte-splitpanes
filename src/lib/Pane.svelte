<script lang="ts">
	import { getContext, onMount, onDestroy } from 'svelte';
	import { KEY } from './Splitpanes.svelte';
	import type { IPane, SplitContext } from '.';
	const { onPaneAdd, onPaneRemove, onPaneClick, isHorizontal } = getContext<SplitContext>(KEY);

	// PROPS

	export let size: string | null = null;
	export let minSize = '0';
	export let maxSize = '100';
	// css class
	let clazz = '';
	export { clazz as class };

	// VARIABLES

	const key = {};
	let element: HTMLElement;
	let sz: number;
	let min: number;
	let max: number;

	// REACTIVE

	$: {
		sz = size === null ? 0 : parseFloat(size);

		const minSizeF = parseFloat(minSize);
		if (!isNaN(minSizeF)) {
			min = minSizeF;
		}

		const maxSizeF = parseFloat(maxSize);
		if (!isNaN(maxSizeF)) {
			max = maxSizeF;
		}
	}

	$: style = [
		((min > 0) ? ($isHorizontal ? 'min-height: ' : 'min-width: ') + min + '%;' : undefined),
		((max < 100) ? ($isHorizontal ? 'max-height: ' : 'max-width: ') + max + '%;' : undefined),
		((typeof window !== 'undefined') ? (($isHorizontal ? 'height: ' : 'width: ') + sz + '%;') : undefined)
		].filter(value => value !== undefined).join(' ') || undefined;

	function handleMouseClick(event: MouseEvent) {
		onPaneClick(event, key);
	}

	onMount(() => {
		const inst: IPane = {
			key,
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
		onPaneRemove(key);
	});
</script>

<div
	class={`splitpanes__pane ${clazz || ''}`}
	bind:this={element}
	on:click={handleMouseClick}
	{style}
>
	<slot />
</div>
