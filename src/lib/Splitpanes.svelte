<script context="module">
	export const KEY = {};
</script>

<script lang="ts">
	import { onMount, onDestroy, setContext, createEventDispatcher, tick } from 'svelte';
	import { writable } from 'svelte/store';
	import type { IPane, IPaneSizingEvent, SplitContext, PaneInitFunction } from '.';

	// TYPE DECLARATIONS ----------------

	// used to size panes
	interface Sums {
		prevPanesSize: number;
		nextPanesSize: number;
		prevReachedMinPanes: number;
		nextReachedMinPanes: number;
	}

	// used to get mouse mouvements
	interface MousePosition {
		x: number;
		y: number;
	}

	// PROPS ----------------

	export let id: string = undefined;
	// horiz or verti?
	export let horizontal = false;
	// when true, moving a splitter can push other panes
	export let pushOtherPanes = true;
	// open/close on double click
	export let dblClickSplitter = true;
	// true if RTL
	export let rtl: boolean | 'auto' = 'auto';
	// true to display the first splitter
	export let firstSplitter = false;
	// css style
	export let style: string | null = null;
	// the splitter theme to use
	export let theme = 'default-theme';
	// css class
	let clazz = '';
	export { clazz as class };

	// VARIABLES ----------------

	//used to bubble events up
	const dispatch = createEventDispatcher<{
		'pane-add': { index: number; panes: IPaneSizingEvent[] };
		'pane-remove': { removed: IPane; panes: IPaneSizingEvent[] };
		'pane-click': IPane;
		ready: void;
		resize: void;
		resized: void;
		'splitter-click': IPane;
		'pane-maximize': IPane;
	}>();
	// the splitpane component
	let container: HTMLElement;
	// true when component is ready, prevents emitting console warnings on hot reloading.
	let isReady = false;
	// true when mouse is down
	let isMouseDown = false;
	// true when a splitter is being dragged
	let isDragging = false;
	// that's the splitter than is being dragged
	let activeSplitter = -1;
	// that's well the clicked splitter!
	let clickedSplitter = -1;
	// used to detect double clicks
	let timeoutId: NodeJS.Timeout | null;
	// panes per insertion order (pane.index is the order index)
	let panes = new Array<IPane>();
	// passed to the children via the context - writable to ensure proper reactivity
	let isHorizontal = writable<boolean>(horizontal);
	const showFirstSplitter = writable<boolean>(firstSplitter);
	// tells the key of the very first pane, or undefined if not recieved yet
	const veryFirstPaneKey = writable<any>(undefined);

	// REACTIVE ----------------

	$: $isHorizontal = horizontal;
	$: $showFirstSplitter = firstSplitter;

	function indexOfPane(key: any) {
		return panes.findIndex((pane: IPane) => {
			return pane.key === key;
		});
	}

	const onPaneInit: PaneInitFunction = (key: any) => {
		if ($veryFirstPaneKey === undefined) {
			$veryFirstPaneKey = key;
		}

		return {
			onSplitterDown: (e) => {
				const index = indexOfPane(key);
				if (index > 0) {
					onMouseDown(e, index - 1);
				}
			},
			onSplitterClick: (e) => {
				const index = indexOfPane(key);
				if (index > 0) {
					onSplitterClick(e, index);
				}
			},
			onSplitterDblClick: (e) => {
				if (dblClickSplitter) {
					onSplitterDblClick(e, indexOfPane(key));
				}
			}
		};
	};

	setContext<SplitContext>(KEY, {
		showFirstSplitter,
		veryFirstPaneKey,
		isHorizontal,
		onPaneInit,
		onPaneAdd,
		onPaneClick,
		onPaneRemove
	});

	async function onPaneAdd(pane: IPane) {
		// 1. Add pane to array at the same index it was inserted in the <splitpanes> tag.
		let index = -1;
		Array.from(pane.element.parentNode.children).some((el: Element) => {
			if (el.className.includes('splitpanes__pane')) index++;
			return el === pane.element;
		});

		if (index === 0) {
			// Need to update the first pane key, because the first pane can be changed in runtime.
			$veryFirstPaneKey = pane.key;
		}

		//inserts pane at proper array index
		panes.splice(index, 0, pane);

		// reindex panes
		for (let i = 0; i < panes.length; i++) {
			const p = panes[i];
			p.index = i;
		}

		if (isReady) {
			await tick();

			// 2. Resize the panes.
			resetPaneSizes(panes[index], undefined);

			// 3. Fire `pane-add` event.
			dispatch('pane-add', {
				index,
				panes: prepareSizeEvent()
			});
		}
	}

	async function onPaneRemove(key: any) {
		// 1. Remove the pane from array and redo indexes.
		const index = panes.findIndex((p) => p.key === key);

		const removed = panes.splice(index, 1)[0];

		// reindex panes
		for (let i = 0; i < panes.length; i++) {
			const p = panes[i];
			p.index = i;
		}

		if (index === 0) {
			$veryFirstPaneKey = panes.length > 0 ? panes[0].key : undefined;
		}

		await tick();

		// 3. Resize the panes.
		resetPaneSizes(undefined, { ...removed, index });

		// 4. Fire `pane-remove` event.
		dispatch('pane-remove', {
			removed,
			panes: prepareSizeEvent()
		});
	}

	// called by sub-panes
	function onPaneClick(_event: MouseEvent, key: any) {
		dispatch(
			'pane-click',
			panes.find((pane) => {
				pane.key == key;
			})
		);
	}

	onMount(() => {
		checkSplitpanesNodes();
		resetPaneSizes();

		isReady = true;
		dispatch('ready');
	});

	onDestroy(() => {
		if (isReady) {
			// this is to solve an edge case:
			// when the user starts dragging and the component is destroyed, leaving behind hanging events
			unbindEvents();
		}

		// Prevent emitting console warnings on hot reloading.
		isReady = false;
	});

	// Tells in the current DOM state if we are in RTL direction or not.
	function isRTL() {
		if (rtl === 'auto') {
			// the try catch is to support old browser, flag is preset to false
			try {
				return window.getComputedStyle(container).direction === 'rtl';
			} catch (err) {}
		}

		return rtl === true;
	}

	function bindEvents() {
		document.addEventListener('mousemove', onMouseMove, { passive: false });
		document.addEventListener('mouseup', onMouseUp);

		// Passive: false to prevent scrolling while touch dragging.
		if ('ontouchstart' in window) {
			document.addEventListener('touchmove', onMouseMove, { passive: false });
			document.addEventListener('touchend', onMouseUp);
		}
	}

	function unbindEvents() {
		//@ts-ignore
		document.removeEventListener('mousemove', onMouseMove, { passive: false });
		document.removeEventListener('mouseup', onMouseUp);

		if ('ontouchstart' in window) {
			//@ts-ignore
			document.removeEventListener('touchmove', onMouseMove, { passive: false });
			document.removeEventListener('touchend', onMouseUp);
		}
	}

	function onMouseDown(_event: TouchEvent | MouseEvent, splitterIndex: number) {
		bindEvents();
		isMouseDown = true;
		activeSplitter = splitterIndex;
	}

	function onMouseMove(event: MouseEvent | TouchEvent) {
		if (isMouseDown) {
			// Prevent scrolling while touch dragging (only works with an active event, eg. passive: false).
			event.preventDefault();
			isDragging = true;
			calculatePanesSize(getCurrentMouseDrag(event));
			dispatchSizeEvent('resize');
		}
	}

	function onMouseUp() {
		if (isDragging) {
			dispatchSizeEvent('resized');
		}
		isMouseDown = false;
		// Keep dragging flag until click event is finished (click happens immediately after mouseup)
		// in order to prevent emitting `splitter-click` event if splitter was dragged.
		setTimeout(() => {
			isDragging = false;
			unbindEvents();
		}, 100);
	}

	// If touch device, detect double tap manually (2 taps separated by less than 500ms).
	function onSplitterClick(event: MouseEvent, splitterIndex: number) {
		if ('ontouchstart' in window) {
			event.preventDefault();

			// Detect splitter double taps if the option is on.
			if (dblClickSplitter) {
				if (clickedSplitter === splitterIndex) {
					if (timeoutId) clearTimeout(timeoutId);
					timeoutId = null;
					onSplitterDblClick(event, splitterIndex);
					clickedSplitter = -1; // Reset for the next tap check.
				} else {
					clickedSplitter = splitterIndex;
					timeoutId = setTimeout(() => {
						clickedSplitter = -1;
					}, 500);
				}
			}
		}

		if (!isDragging) dispatch('splitter-click', panes[splitterIndex]);
	}

	// On splitter dbl click or dbl tap maximize this pane.
	function onSplitterDblClick(_event: MouseEvent, splitterIndex: number) {
		let totalMinSizes = 0;

		for (let i = 0; i < panes.length; i++) {
			const pane = panes[i];
			const sz = i === splitterIndex ? pane.max() : pane.min();
			pane.setSz(sz);
			if (i !== splitterIndex) totalMinSizes += pane.min();
		}

		const splitterPane = panes[splitterIndex];
		const sz = splitterPane.sz() - totalMinSizes;
		splitterPane.setSz(sz);

		dispatch('pane-maximize', splitterPane);
		dispatchSizeEvent('resized');

		// onMouseUp might not be called on the second click, so update the mouse state.
		// TODO: Should also check and unbind events, but better IMO to not bind&unbind on every click, so ignored for now.
		isMouseDown = false;
	}

	function prepareSizeEvent(): IPaneSizingEvent[] {
		const arr: Array<IPaneSizingEvent> = new Array(panes.length);
		for (let i = 0; i < panes.length; i++) {
			const pane = panes[i];
			arr[i] = {
				min: pane.min(),
				max: pane.max(),
				size: pane.sz()
			};
		}
		return arr;
	}

	// function to ensure proper typing
	function dispatchSizeEvent(name: string) {
		dispatch(name, prepareSizeEvent());
	}

	// Get the cursor position relative to the splitpane container.
	function getCurrentMouseDrag(event: MouseEvent | TouchEvent): MousePosition {
		const rect = container.getBoundingClientRect();

		const { clientX, clientY } =
			//@ts-ignore
			'ontouchstart' in window && event.touches ? event.touches[0] : event;
		return {
			x: clientX - rect.left,
			y: clientY - rect.top
		};
	}

	// Returns the drag percentage of the splitter relative to the 2 panes it's inbetween.
	// if the sum of size of the 2 cells is 60%, the dragPercentage range will be 0 to 100% of this 60%.
	function getCurrentDragPercentage(drag: MousePosition): number {
		let tdrag = drag[horizontal ? 'y' : 'x'];
		// In the code bellow 'size' refers to 'width' for vertical and 'height' for horizontal layout.
		const containerSize = container[horizontal ? 'clientHeight' : 'clientWidth'];
		if (isRTL() && !horizontal) tdrag = containerSize - tdrag;

		return (tdrag * 100) / containerSize;
	}

	/**
	 * Called when slitters are moving to adjust pane sizes
	 */
	function calculatePanesSize(drag: MousePosition) {
		const splitterIndex = activeSplitter;
		let sums: Sums = {
			prevPanesSize: sumPrevPanesSize(splitterIndex),
			nextPanesSize: sumNextPanesSize(splitterIndex),
			prevReachedMinPanes: 0,
			nextReachedMinPanes: 0
		};

		const minDrag = 0 + (pushOtherPanes ? 0 : sums.prevPanesSize);
		const maxDrag = 100 - (pushOtherPanes ? 0 : sums.nextPanesSize);
		const dragPercentage = Math.max(Math.min(getCurrentDragPercentage(drag), maxDrag), minDrag);

		// If not pushing other panes, panes to resize are right before and right after splitter.
		let panesToResize = [splitterIndex, splitterIndex + 1];
		let paneBefore = panes[panesToResize[0]] || null;
		let paneAfter = panes[panesToResize[1]] || null;

		const paneBeforeMaxReached = paneBefore.max() < 100 && dragPercentage >= paneBefore.max() + sums.prevPanesSize;
		const paneAfterMaxReached =
			paneAfter.max() < 100 && dragPercentage <= 100 - (paneAfter.max() + sumNextPanesSize(splitterIndex + 1));
		// Prevent dragging beyond pane max.
		if (paneBeforeMaxReached || paneAfterMaxReached) {
			if (paneBeforeMaxReached) {
				paneBefore.setSz(paneBefore.max());
				paneAfter.setSz(Math.max(100 - paneBefore.max() - sums.prevPanesSize - sums.nextPanesSize, 0));
			} else {
				paneBefore.setSz(Math.max(100 - paneAfter.max() - sums.prevPanesSize - sumNextPanesSize(splitterIndex + 1), 0));
				paneAfter.setSz(paneAfter.max);
			}
		} else {
			// When pushOtherPanes = true, find the closest expanded pane on each side of the splitter.
			if (pushOtherPanes) {
				const vars = doPushOtherPanes(sums, dragPercentage);
				if (!vars) {
					//		setAllPaneDimensions();
					return; // Prevent other calculation.
				}
				({ sums, panesToResize } = vars);
				paneBefore = panes[panesToResize[0]] || null;
				paneAfter = panes[panesToResize[1]] || null;
			}

			if (paneBefore !== null) {
				paneBefore.setSz(
					Math.min(
						Math.max(dragPercentage - sums.prevPanesSize - sums.prevReachedMinPanes, paneBefore.min()),
						paneBefore.max()
					)
				);
			}
			if (paneAfter !== null) {
				paneAfter.setSz(
					Math.min(
						Math.max(100 - dragPercentage - sums.nextPanesSize - sums.nextReachedMinPanes, paneAfter.min()),
						paneAfter.max()
					)
				);
			}
		}
	}

	function doPushOtherPanes(sums: Sums, dragPercentage: number) {
		const splitterIndex = activeSplitter;
		const panesToResize: Array<number> = [splitterIndex, splitterIndex + 1];
		// Pushing Down.
		// Going smaller than the current pane min size: take the previous expanded pane.
		if (dragPercentage < sums.prevPanesSize + panes[panesToResize[0]].min()) {
			//@ts-ignore
			panesToResize[0] = findPrevExpandedPane(splitterIndex)?.index;

			sums.prevReachedMinPanes = 0;
			// If pushing a n-2 or less pane, from splitter, then make sure all in between is at min size.
			if (panesToResize[0] < splitterIndex) {
				for (let i = 0; i < panes.length; i++) {
					const pane = panes[i];
					if (i > panesToResize[0] && i <= splitterIndex) {
						pane.setSz(pane.min());
						sums.prevReachedMinPanes += pane.min();
					}
				}
			}
			sums.prevPanesSize = sumPrevPanesSize(panesToResize[0]);
			// If nothing else to push down, cancel dragging.
			if (panesToResize[0] === undefined) {
				sums.prevReachedMinPanes = 0;
				panes[0].setSz(panes[0].min());
				for (let i = 0; i < panes.length; i++) {
					const pane = panes[i];
					if (i > 0 && i <= splitterIndex) {
						pane.setSz(pane.min());
						sums.prevReachedMinPanes += pane.min();
					}
				}

				panes[panesToResize[1]].setSz(
					100 - sums.prevReachedMinPanes - panes[0].min() - sums.prevPanesSize - sums.nextPanesSize
				);
				return null;
			}
		}
		// Pushing Up.
		// Pushing up beyond min size is reached: take the next expanded pane.
		if (dragPercentage > 100 - sums.nextPanesSize - panes[panesToResize[1]].min()) {
			panesToResize[1] = findNextExpandedPane(splitterIndex)?.index;
			sums.nextReachedMinPanes = 0;
			// If pushing a n+2 or more pane, from splitter, then make sure all in between is at min size.
			if (panesToResize[1] > splitterIndex + 1) {
				for (let i = 0; i < panes.length; i++) {
					const pane = panes[i];
					if (i > splitterIndex && i < panesToResize[1]) {
						pane.sz = pane.min;
						sums.nextReachedMinPanes += pane.min();
					}
				}
			}
			sums.nextPanesSize = sumNextPanesSize(panesToResize[1] - 1);
			// If nothing else to push up, cancel dragging.

			const panesCount = panes.length;
			if (panesToResize[1] === undefined) {
				sums.nextReachedMinPanes = 0;
				panes[panesCount - 1].sz = panes[panesCount - 1].min;

				for (let i = 0; i < panes.length; i++) {
					const pane = panes[i];
					if (i < panesCount - 1 && i >= splitterIndex + 1) {
						pane.sz = pane.min;
						sums.nextReachedMinPanes += pane.min();
					}
				}

				panes[panesToResize[0]].setSz(
					100 - sums.prevPanesSize - sums.nextReachedMinPanes - panes[panesCount - 1].min() - sums.nextPanesSize
				);
				return null;
			}
		}
		return { sums, panesToResize };
	}

	function sumPrevPanesSize(splitterIndex: number) {
		return panes.reduce((total, pane, i) => total + (i < splitterIndex ? pane.sz() : 0), 0);
	}

	function sumNextPanesSize(splitterIndex: number) {
		return panes.reduce((total, pane, i) => total + (i > splitterIndex + 1 ? pane.sz() : 0), 0);
	}

	// Return the previous pane from siblings which has a size (width for vert or height for horz) of more than 0.
	function findPrevExpandedPane(splitterIndex: number): IPane | null {
		const pane = [...panes].reverse().find((p) => p.index < splitterIndex && p.sz() > p.min());
		return pane || null;
	}

	// Return the next pane from siblings which has a size (width for vert or height for horz) of more than 0.
	function findNextExpandedPane(splitterIndex: number): IPane | null {
		const pane = panes.find((p) => p.index > splitterIndex + 1 && p.sz() > p.min());
		return pane || null;
	}

	/**
	 *
	 * @param addedPane
	 * @param removedPane
	 */
	function resetPaneSizes(addedPane?: IPane, removedPane?: { [key: string]: any }) {
		if ((!addedPane && !removedPane) || panes.length === 1) {
			// on initialization or if we have only one pane now
			initialPanesSizing();
		} else if (panes.some((pane) => pane.givenSize !== null || pane.min() || pane.max() < 100))
			equalizeAfterAddOrRemove(addedPane);
		else equalize();

		if (isReady) {
			dispatchSizeEvent('resized');
		}
	}

	/**
	 * Ensures all panes have the same size
	 */
	function equalize() {
		const panesCount = panes.length;
		const equalSpace = 100 / panesCount;
		let leftToAllocate = 0;
		let ungrowable = Array<string>();
		let unshrinkable = Array<string>();

		for (let i = 0; i < panes.length; i++) {
			const pane = panes[i];
			const min = pane.min();
			const max = pane.max();
			const sz = Math.max(Math.min(equalSpace, max), min);
			pane.setSz(sz);
			leftToAllocate -= sz;
			if (sz >= max) ungrowable.push(pane.key);
			if (sz <= min) unshrinkable.push(pane.key);
		}

		if (leftToAllocate > 0.1) readjustSizes(leftToAllocate, ungrowable, unshrinkable);
	}

	function initialPanesSizing() {
		let leftToAllocate = 100;
		let ungrowable = Array<string>();
		let unshrinkable = Array<string>();
		let definedSizes = 0;

		for (let i = 0; i < panes.length; i++) {
			const pane = panes[i];
			const sz = pane.sz();
			leftToAllocate -= sz;
			if (pane.givenSize !== null) definedSizes++;
			if (sz >= pane.max()) ungrowable.push(pane.key);
			if (sz <= pane.min()) unshrinkable.push(pane.key);
		}

		// set pane sizes if not set.
		let leftToAllocate2 = 100;
		if (leftToAllocate > 0.1) {
			for (let i = 0; i < panes.length; i++) {
				const pane = panes[i];
				if (pane.givenSize === null) {
					const panesCount = panes.length;
					const sz = Math.max(Math.min(leftToAllocate / (panesCount - definedSizes), pane.max()), pane.min());
					pane.setSz(sz);
				}
				leftToAllocate2 -= pane.sz();
			}

			if (leftToAllocate2 > 0.1) readjustSizes(leftToAllocate, ungrowable, unshrinkable);
		}
	}

	function equalizeAfterAddOrRemove(addedPane?: IPane) {
		const panesCount = panes.length;
		let equalSpace = 100 / panesCount;
		let leftToAllocate = 0;
		let ungrowable = new Array<string>();
		let unshrinkable = new Array<string>();

		if (addedPane && addedPane.givenSize !== null) {
			equalSpace = (100 - parseFloat(addedPane.givenSize)) / (panesCount - 1);
		}

		for (let i = 0; i < panes.length; i++) {
			const pane = panes[i];
			const sz = pane.sz();
			leftToAllocate -= sz;
			if (sz >= pane.max()) ungrowable.push(pane.key);
			if (sz <= pane.min()) unshrinkable.push(pane.key);
		}

		if (Math.abs(leftToAllocate) < 0.1) return; // Ok.

		for (let i = 0; i < panes.length; i++) {
			const pane = panes[i];
			const max = pane.max();
			const min = pane.min();
			if (addedPane && addedPane.givenSize !== null && addedPane.key === pane.key) {
			} else pane.setSz(Math.max(Math.min(equalSpace, max), min));

			const sz = pane.sz();
			leftToAllocate -= sz;
			if (sz >= max) ungrowable.push(pane.key);
			if (sz <= min) unshrinkable.push(pane.key);
		}

		if (leftToAllocate > 0.1) readjustSizes(leftToAllocate, ungrowable, unshrinkable);
	}

	// Second loop to adjust sizes now that we know more about the panes constraints.
	async function readjustSizes(leftToAllocate: number, ungrowable: Array<string>, unshrinkable: Array<string>) {
		const panesCount = panes.length;
		let equalSpaceToAllocate: number;
		if (leftToAllocate > 0) equalSpaceToAllocate = leftToAllocate / (panesCount - ungrowable.length);
		else equalSpaceToAllocate = leftToAllocate / (panesCount - unshrinkable.length);

		for (let i = 0; i < panes.length; i++) {
			const pane = panes[i];
			const sz = pane.sz();
			if (leftToAllocate > 0 && !ungrowable.includes(pane.key)) {
				// Need to diff the size before and after to get the exact allocated space.
				const newPaneSize = Math.max(Math.min(sz + equalSpaceToAllocate, pane.max()), pane.min());
				const allocated = newPaneSize - sz;
				leftToAllocate -= allocated;
				pane.setSz(newPaneSize);
			} else if (!unshrinkable.includes(pane.key)) {
				// Need to diff the size before and after to get the exact allocated space.
				const newPaneSize = Math.max(Math.min(sz + equalSpaceToAllocate, pane.max()), pane.min());
				const allocated = newPaneSize - sz;
				leftToAllocate -= allocated;
				pane.setSz(newPaneSize);
			}
		}

		if (Math.abs(leftToAllocate) > 0.1) {
			// > 0.1: Prevent maths rounding issues due to bytes.
			// Don't emit on hot reload when Vue destroys panes.
			await tick();

			if (isReady) {
				// eslint-disable-next-line no-console
				console.warn('Splitpanes: Could not resize panes correctly due to their constraints.');
			}
		}
	}
	/**
	 * Checks that <Splitpanes> is composed of <Pane>
	 */
	function checkSplitpanesNodes() {
		if (container) {
			const children = Array.from(container.children) as Array<HTMLElement>;

			for (let i = 0; i < children.length; i++) {
				const child = children[i];
				const isPane = child.classList.contains('splitpanes__pane');
				const isSplitter = child.classList.contains('splitpanes__splitter');

				// Node is not a Pane or a splitter: remove it.
				if (!isPane && !isSplitter) {
					child.parentNode?.removeChild(child); // el.remove() doesn't work on IE11.
					// eslint-disable-next-line no-console
					console.warn(
						'Splitpanes: Only <Pane> elements are allowed at the root of <Splitpanes>. One of your DOM nodes was removed.'
					);
					return;
				}
			}
		}
	}
</script>

<div
	{id}
	bind:this={container}
	class={`splitpanes ${theme || ''} ${clazz || ''}`}
	class:splitpanes--horizontal={horizontal}
	class:splitpanes--vertical={!horizontal}
	class:splitpanes--dragging={isMouseDown || isDragging}
	{style}
>
	<slot />
</div>

<style global lang="scss">
	div.splitpanes--horizontal.splitpanes--dragging {
		cursor: row-resize;
	}
	div.splitpanes--vertical.splitpanes--dragging {
		cursor: col-resize;
	}

	.splitpanes {
		display: flex;
		width: 100%;
		height: 100%;
		&--vertical {
			flex-direction: row;
		}
		&--horizontal {
			flex-direction: column;
		}
		&--dragging * {
			user-select: none;
		}
		&__pane {
			width: 100%;
			height: 100%;
			overflow: hidden;
			.splitpanes--vertical & {
				transition: width 0.2s ease-out;
			}
			.splitpanes--horizontal & {
				transition: height 0.2s ease-out;
			}
			.splitpanes--dragging & {
				transition: none;
				pointer-events: none;
			}
		}
		// Disable default zoom behavior on touch device when double tapping splitter.
		&__splitter {
			touch-action: none;
		}
		&--vertical > .splitpanes__splitter {
			min-width: 1px;
		}
		&--horizontal > .splitpanes__splitter {
			min-height: 1px;
		}
	}
	.splitpanes.default-theme {
		.splitpanes__pane {
			background-color: #f2f2f2;
		}
		.splitpanes__splitter {
			background-color: #fff;
			box-sizing: border-box;
			position: relative;
			flex-shrink: 0;
			&:before,
			&:after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				background-color: rgba(0, 0, 0, 0.15);
				transition: background-color 0.3s;
			}
			&:hover:before,
			&:hover:after {
				background-color: rgba(0, 0, 0, 0.25);
			}
			&:first-child {
				cursor: auto;
			}
		}
	}
	.default-theme {
		&.splitpanes .splitpanes .splitpanes__splitter {
			z-index: 1;
		}
		&.splitpanes--vertical > .splitpanes__splitter,
		.splitpanes--vertical > .splitpanes__splitter {
			width: 7px;
			border-left: 1px solid #eee;
			margin-left: -1px;
			cursor: col-resize;
			&:before,
			&:after {
				transform: translateY(-50%);
				width: 1px;
				height: 30px;
			}
			&:before {
				margin-left: -2px;
			}
			&:after {
				margin-left: 1px;
			}
		}
		&.splitpanes--horizontal > .splitpanes__splitter,
		.splitpanes--horizontal > .splitpanes__splitter {
			height: 7px;
			border-top: 1px solid #eee;
			margin-top: -1px;
			cursor: row-resize;
			&:before,
			&:after {
				transform: translateX(-50%);
				width: 30px;
				height: 1px;
			}
			&:before {
				margin-top: -2px;
			}
			&:after {
				margin-top: 1px;
			}
		}
	}
</style>
