<script lang="ts" strictEvents>
	import { getContext, onMount, onDestroy, hasContext } from 'svelte';
	import { KEY } from '$lib/Splitpanes.svelte';
	import type { ClientCallbacks, IPane, PaneInitFunction, SplitContext } from '$lib/index.js';
	import { browser } from '$lib/internal/env.js';
	import { gatheringKey } from '$lib/internal/GatheringRound.svelte';
	import { getDimensionName } from '$lib/internal/utils/sizing.js';
	import { carefullCallbackSource } from '$lib/internal/utils/functions';

	const {
		ssrRegisterPaneSize,
		onPaneInit,
		clientOnly: clientOnlyContext,
		isHorizontal,
		showFirstSplitter,
		veryFirstPaneKey
	} = getContext<SplitContext>(KEY);

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

	const gathering = !browser && hasContext(gatheringKey);
	const { undefinedPaneInitSize } = (!gathering ? onPaneInit(key) : {}) as ReturnType<PaneInitFunction>;

	let element: HTMLElement;
	let sz: number = size ?? undefinedPaneInitSize;
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
		? carefullCallbackSource(() => clientCallbacks)
		: carefullCallbackSource(() => clientCallbacks);

	// REACTIVE

	const reportGivenSizeChangeSafe = (size: number) => {
		// We put an extra check of `size != sz` here and not in the reactive statement, since we don't want a change
		//  of `sz` to trigger report.
		if (size != sz) {
			carefullClientCallbacks('reportGivenSizeChange')(size);
		}
	};
	$: {
		if (browser && size != null) {
			reportGivenSizeChangeSafe(size);
		}
	}

	$: dimension = getDimensionName($isHorizontal);

	$: style = `${dimension}: ${sz}%;`;

	if (gathering && ssrRegisterPaneSize) {
		ssrRegisterPaneSize(size);
	} else if (browser) {
		onMount(() => {
			const inst: IPane = {
				index: 0,
				key,
				element: element,
				givenSize: size,
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

			clientCallbacks = clientOnlyContext?.onPaneAdd(inst);
		});

		onDestroy(() => {
			clientOnlyContext?.onPaneRemove(key);
		});
	}
</script>

{#if !gathering}
	<!-- Splitter -->
	{#if $veryFirstPaneKey !== key || $showFirstSplitter}
		<!-- this a11y issue is known, and will be taken care of as part of the a11y feature issue in #11 -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="splitpanes__splitter {isSplitterActive ? 'splitpanes__splitter__active' : ''}"
			on:mousedown={carefullClientCallbacks('onSplitterDown')}
			on:touchstart={carefullClientCallbacks('onSplitterDown')}
			on:click={carefullClientCallbacks('onSplitterClick')}
			on:dblclick={carefullClientCallbacks('onSplitterDblClick')}
		/>
	{/if}

	<!-- Pane -->
	<!-- this a11y issue is known, and will be taken care of as part of the a11y feature issue in #11 -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class={`splitpanes__pane ${clazz || ''}`}
		bind:this={element}
		on:click={carefullClientCallbacks('onPaneClick')}
		{style}
	>
		<slot />
	</div>
{/if}
