<script lang="ts">
	import { getContext, onMount, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	import type { Action } from 'svelte/action';
	import { KEY } from './Splitpanes.svelte';
	import type { IPane, SplitContext } from '.';

	const { onPaneInit, onPaneAdd, onPaneRemove, onPaneClick, isHorizontal, showFirstSplitter } =
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
	const sizeStore = writable({
		size,
		minSize,
		maxSize
	});

	const isBrowser = typeof window !== 'undefined';

	// REACTIVE

	$: if (size != null) {
		sz = size;
	}

	$: {
		sizeStore.update((details) => {
			details.minSize = minSize;
			details.maxSize = maxSize;
			return details;
		});
	}

	$: dimension = $isHorizontal ? 'height' : 'width';

	$: style =
		[
			!isBrowser && minSize > 0 ? `min-${dimension}: ${minSize}%;` : undefined,
			!isBrowser && maxSize < 100 ? `max-${dimension}: ${maxSize}%;` : undefined,
			isBrowser || size != null ? `${dimension}: ${sz}%;` : undefined
		]
			.filter((value) => value !== undefined)
			.join(' ') || undefined;

	const result = onPaneInit(key, sizeStore);
	const { onSplitterDown, onSplitterClick, onSplitterDblClick, previousPaneSizeStore } = result;

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
				sizeStore.update((details) => {
					details.size = v;
					return details;
				});
			},
			min: () => minSize,
			max: () => maxSize,
			snap: () => snapSize
		};
		onPaneAdd(inst);
	});

	onDestroy(() => {
		onPaneRemove(key);
	});
</script>

<!-- Splitter -->
<!-- TODO: Make this a focusable separtor, and check if it is non-focusable (when minSize=maxSize).
	Need also:
	* Let the user control about aria values (such as aria-valuetext), and if it is focusable.default.render
	* Let the user decide which pane he wish to leave without any seperator description, and describe the rest of them.
	* Verify it's working in SSR.
	* Keybinding
	Sources:
	* https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/roles/separator_role
	* https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/
-->
{#if $previousPaneSizeStore || $showFirstSplitter}
	<div
		use:splitterAction
		class="splitpanes__splitter"
		role={$previousPaneSizeStore ? 'separator' : undefined}
		aria-valuenow={$previousPaneSizeStore?.size ?? undefined}
		aria-valuemin={$previousPaneSizeStore && $previousPaneSizeStore.minSize > 0
			? $previousPaneSizeStore.minSize
			: undefined}
		aria-valuemax={$previousPaneSizeStore && $previousPaneSizeStore.maxSize < 100
			? $previousPaneSizeStore.maxSize
			: undefined}
	/>
{/if}

<!-- Pane -->
<div class={`splitpanes__pane ${clazz || ''}`} bind:this={element} on:click={handleMouseClick} {style}>
	<slot />
</div>
