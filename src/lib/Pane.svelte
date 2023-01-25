<script lang="ts" strictEvents>
	import { getContext, onMount, onDestroy, hasContext } from 'svelte';
	import type { Action } from 'svelte/action';
	import { KEY } from './Splitpanes.svelte';
	import type { ClientCallbacks, IPane, PaneInitFunction, SplitContext } from './index.js';
	import { browser } from './internal/env.js';
	import { gatheringKey } from './internal/GatheringRound.svelte';
	import { getDimensionName, type SizeUnit } from './internal/utils/sizing.js';
	import { carefullCallbackObject } from './internal/utils/functions';

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
	const { undefinedPaneInitSize } = (!gathering ? onPaneInit(key) : {}) as ReturnType<PaneInitFunction>;

	let element: HTMLElement;
	let sz: number = size ?? (sizeUnit === '%' ? undefinedPaneInitSize : 0);
	let isSplitterActive = false;

	// CALLBACKS

	let clientCallbacks: ClientCallbacks | undefined = undefined;

	/**
	 * This is an object of callbacks that are safe to be called on browser even when the object `clientCallbacks`
	 *  isn't initialized yet (i.e. before `onPaneAdd()`).
	 *
	 * In the case of the object isn't initialized yet, calling this callbacks will do nothing.
	 */
	const carefullClientCallbacks = browser
		? carefullCallbackObject(() => clientCallbacks, [
				'onSplitterDown',
				'onSplitterClick',
				'onSplitterDblClick',
				'onPaneClick',
				'reportGivenSizeChange',
				'reportSplitterSizeChange'
		  ] as const)
		: undefined;

	// REACTIVE

	const reportGivenSizeChangeSafe = (size: number) => {
		// We put an extra check of `size != sz` here and not in the reactive statement, since we don't want a change
		//  of `sz` to trigger report.
		if (size != sz) {
			carefullClientCallbacks.reportGivenSizeChange(size);
		}
	};
	$: {
		// TODO: When the user min/max size gets changed, need to calc the size again
		if (browser && size != null) {
			reportGivenSizeChangeSafe(size);
		}
	}

	$: {
		if (browser) {
			carefullClientCallbacks.reportSplitterSizeChange(splitterSize);
		}
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

	const splitterAction: Action = (splitter: HTMLElement) => {
		splitter.onmousedown = carefullClientCallbacks.onSplitterDown;
		if ('ontouchstart' in window) {
			splitter.ontouchstart = carefullClientCallbacks.onSplitterDown;
		}
		splitter.onclick = carefullClientCallbacks.onSplitterClick;
		splitter.ondblclick = carefullClientCallbacks.onSplitterDblClick;

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

			clientCallbacks = clientOnlyContext.onPaneAdd(inst);
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
	<div
		class={`splitpanes__pane ${clazz || ''}`}
		bind:this={element}
		on:click={carefullClientCallbacks.onPaneClick}
		{style}
	>
		<slot />
	</div>
{/if}
