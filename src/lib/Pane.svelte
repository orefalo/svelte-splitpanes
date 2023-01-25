<script lang="ts" strictEvents>
	import { getContext, onMount, onDestroy, hasContext } from 'svelte';
	import type { Action } from 'svelte/action';
	import { KEY } from './Splitpanes.svelte';
	import type { IPane, PaneInitFunction, SplitContext } from './index.js';
	import { browser } from './internal/env.js';
	import { gatheringKey } from './internal/GatheringRound.svelte';
	import { getDimensionName, type SizeUnit } from './internal/utils/sizing.js';

	const {
		ssrRegisterPaneSize,
		onPaneInit,
		clientOnly: clientOnlyContext,
		isHorizontal,
		splitterDefaultSize,
		splitterSumSize,
		showFirstSplitter,
		veryFirstPaneKey
	} = getContext<SplitContext>(KEY);

	// PROPS

	export let size: number | null = null;
	export let sizeUnit: SizeUnit = '%';
	export let minSize = 0;
	export let minSizeUnit: SizeUnit = '%';
	export let maxSize = 100;
	export let maxSizeUnit: SizeUnit = '%';
	export let snapSize = 0;
	export let snapSizeUnit: SizeUnit = '%';
	/** The size of the splitter in pixels. */
	export let splitterSize: number | null = null;
	// css class
	let clazz = '';
	export { clazz as class };

	// VARIABLES

	const key = {};

	const gathering = !browser && hasContext(gatheringKey);
	const { clientOnly: clientOnlyInitResult, undefinedPaneInitSize } = (
		!gathering ? onPaneInit(key) : {}
	) as ReturnType<PaneInitFunction>;

	let element: HTMLElement;
	let sz: number = size ?? (sizeUnit === '%' ? undefinedPaneInitSize : 0);
	let isSplitterActive = false;
	let paneAdded = false;

	// REACTIVE

	const reportGivenSizeChangeIfPaneAdded = (size: number) => {
		if (browser && paneAdded && size != null && size != sz) {
			clientOnlyContext.reportGivenSizeChange(key, size);
		}
	};
	$: {
		// TODO: When the user min/max size gets changed, need to calc the size again
		reportGivenSizeChangeIfPaneAdded(size);
	}

	const reportSplitterSizeChangeIfPaneAdded = (splitterSize: number) => {
		if (browser && paneAdded) {
			clientOnlyContext.reportSplitterSizeChange(key, splitterSize);
		}
	};
	$: {
		reportSplitterSizeChangeIfPaneAdded(splitterSize);
	}

	$: dimension = getDimensionName($isHorizontal);

	const renderSize = (sz: number, szPx: number) => {
		if (szPx === 0) {
			return `${sz}%`;
		} else if (sz === 0) {
			return `${szPx}px`;
		} else {
			const signPx = szPx < 0 ? '-' : '+';
			return `calc(${sz}% ${signPx} ${Math.abs(szPx)}px)`;
		}
	};
	/** Removes the relative total splitter size (only on % unit) and render it */
	const displayedSize = (sz: number, sizeUnit: SizeUnit) =>
		sizeUnit === '%' ? renderSize(sz, (-sz / 100) * $splitterSumSize) : renderSize(0, sz);
	$: style = `${dimension}: ${displayedSize(sz, sizeUnit)};`;

	function handleMouseClick(event: MouseEvent) {
		clientOnlyContext.onPaneClick(event, key);
	}

	const splitterAction: Action = (splitter: HTMLElement) => {
		splitter.onmousedown = clientOnlyInitResult.onSplitterDown;
		if ('ontouchstart' in window) {
			splitter.ontouchstart = clientOnlyInitResult.onSplitterDown;
		}
		splitter.onclick = clientOnlyInitResult.onSplitterClick;
		splitter.ondblclick = clientOnlyInitResult.onSplitterDblClick;

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

	if (gathering) {
		ssrRegisterPaneSize(size, splitterSize);
	} else if (browser) {
		onMount(() => {
			const inst: IPane = {
				key,
				element: element,
				givenSize: size,
				givenSplitterSize: splitterSize,
				sz: () => sz,
				setSz: (v) => {
					sz = v;
					if (size != null && size != sz) {
						size = sz;
					}
				},
				min: () => minSize,
				max: () => maxSize,
				snap: () => snapSize,
				setSplitterActive: (isActive: boolean) => {
					isSplitterActive = isActive;
				},
				isReady: false
			};
			clientOnlyContext.onPaneAdd(inst);
			paneAdded = true;
		});

		onDestroy(() => {
			clientOnlyContext.onPaneRemove(key);
		});
	}
</script>

{#if !gathering}
	<!-- Splitter -->
	<!-- TODO: Support aria role="separator" and make this a focusable separtor. Sources:
	* https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/roles/separator_role
	* https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/
-->
	{#if $veryFirstPaneKey !== key || $showFirstSplitter}
		<div
			use:splitterAction
			class="splitpanes__splitter {isSplitterActive ? 'splitpanes__splitter__active' : ''}"
			style="{dimension}: {splitterSize ?? $splitterDefaultSize}px;"
		/>
	{/if}

	<!-- Pane -->
	<div class={`splitpanes__pane ${clazz || ''}`} bind:this={element} on:click={handleMouseClick} {style}>
		<slot />
	</div>
{/if}
