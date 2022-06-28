<script lang="ts">
	import { getContext, onMount, onDestroy } from 'svelte';
	import type { Action } from 'svelte/action';
	import { KEY } from './Splitpanes.svelte';
	import type { IPane, SplitContext } from '.';

	const { onPaneInit, onPaneAdd, onPaneRemove, onPaneClick, isHorizontal, showFirstSplitter, veryFirstPaneKey } =
		getContext<SplitContext>(KEY);

	// PROPS

	export let size: string | null = null;
	export let minSize = '0';
	export let maxSize = '100';
	export let snapSize = '0';
	// css class
	let clazz = '';
	export { clazz as class };

	// VARIABLES

	const key = {};
	let element: HTMLElement;
	let sz: number;
	let min: number;
	let max: number;
	let snap: number;

	const isBrowser = typeof window !== 'undefined';

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

		const snapSizeF = parseFloat(snapSize);
		if (!isNaN(snapSizeF)) {
			snap = snapSizeF;
		}
	}

	$: dimension = $isHorizontal ? 'height' : 'width';

	$: style =
		[
			!isBrowser && min > 0 ? `min-${dimension}: ${min}%;` : undefined,
			!isBrowser && max < 100 ? `max-${dimension}: ${max}%;` : undefined,
			isBrowser || size !== null ? `${dimension}: ${sz}%;` : undefined
		]
			.filter((value) => value !== undefined)
			.join(' ') || undefined;

	const { onSplitterDown, onSplitterClick, onSplitterDblClick } = onPaneInit(key);

	function handleMouseClick(event: MouseEvent) {
		onPaneClick(event, key);
	}

	const splitterAction: Action = (splitter: HTMLElement) => {
		splitter.onmousedown = onSplitterDown;
		if ('ontouchstart' in window) {
			splitter.ontouchstart = onSplitterDown;
		}
		splitter.onclick = onSplitterClick;
		splitter.ondblclick = onSplitterDblClick;

		// This what should be done on destruction, but commented out since the DOM element gets destroyed anyway
		// return {
		// 	destroy: () => {
		// 		splitter.onmousedown = null;
		// 		if ('ontouchstart' in window) {
		// 			splitter.ontouchstart = null;
		// 		}
		// 		splitter.onclick = null;
		// 		splitter.ondblclick = null;
		// 	},
		// };
	};

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
			max: () => max,
			snap: () => snap
		};
		onPaneAdd(inst);
	});

	onDestroy(() => {
		onPaneRemove(key);
	});
</script>

<!-- Splitter -->
<!-- TODO: Support aria role="separator" and make this a focusable separtor. Sources:
	* https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/roles/separator_role
	* https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/
-->
{#if $veryFirstPaneKey !== key || $showFirstSplitter}
	<div use:splitterAction class="splitpanes__splitter" />
{/if}

<!-- Pane -->
<div class={`splitpanes__pane ${clazz || ''}`} bind:this={element} on:click={handleMouseClick} {style}>
	<slot />
</div>
