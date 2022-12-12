<script lang="ts">
	import { BROWSER } from 'esm-env';
	import { getContext, onMount, onDestroy } from 'svelte';
	import type { Action } from 'svelte/action';
	import { KEY } from './Splitpanes.svelte';
	import type { IPane, SplitContext } from '.';

	const { onPaneInit, onPaneAdd, onPaneRemove, onPaneClick, isHorizontal, showFirstSplitter, veryFirstPaneKey } =
		getContext<SplitContext>(KEY);

	// PROPS

	export let size: number | null = null;
	export let minSize = 0;
	export let maxSize = 100;
	export let snapSize = 0;
	// css class
	let clazz = '';
	export { clazz as class };

	// VARIABLES

	const key = {};
	let element: HTMLElement;
	let sz: number = size == null ? 0 : size;
	let isSplitterActive = false;

	// REACTIVE

	$: if (size != null) {
		sz = size;
	}

	$: dimension = $isHorizontal ? 'height' : 'width';

	$: style =
		[
			!BROWSER && minSize > 0 ? `min-${dimension}: ${minSize}%;` : undefined,
			!BROWSER && maxSize < 100 ? `max-${dimension}: ${maxSize}%;` : undefined,
			BROWSER || size != null ? `${dimension}: ${sz}%;` : undefined
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
				if (size != null) {
					size = sz;
				}
			},
			min: () => minSize,
			max: () => maxSize,
			snap: () => snapSize,
			setSplitterActive: (isActive: boolean) => {
				isSplitterActive = isActive;
			}
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
	<div use:splitterAction class="splitpanes__splitter {isSplitterActive ? 'splitpanes__splitter__active' : ''}" />
{/if}

<!-- Pane -->
<div class={`splitpanes__pane ${clazz || ''}`} bind:this={element} on:click={handleMouseClick} {style}>
	<slot />
</div>
