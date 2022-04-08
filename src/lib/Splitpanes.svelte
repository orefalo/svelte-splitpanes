<script context="module">
	export const KEY = {};
</script>

<script lang="ts">
	import { onMount, onDestroy, setContext, createEventDispatcher, tick } from 'svelte';
	import { writable } from 'svelte/store';
	import type { IPane, IPaneSizingEvent, SplitContext } from '.';

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
	export let horizontal: boolean = false;
	// when true, moving a splitter can push other panes
	export let pushOtherPanes = true;
	// open/close on double click
	export let dblClickSplitter = true;
	// true if RTL
	export let rtl = false;
	// true to display the first splitter
	export let firstSplitter: boolean = false;
	// css style
	export let style: string | null = null;
	// css class
	let clazz = '';
	export { clazz as class };

	// VARIABLES ----------------

	//used to bubble events up
	const dispatch = createEventDispatcher();
	// the splitpane component
	let container: HTMLElement;
	// true when ready, prevent emitting console warnings on hot reloading.
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

	// REACTIVE ----------------

	$: firstSplitter, redoSplitters();
	$: $isHorizontal = horizontal;

	setContext<SplitContext>(KEY, {
		isHorizontal,
		onPaneClick,
		onPaneAdd,
		onPaneRemove
	});

	async function onPaneAdd(pane: IPane) {
		// 1. Add pane to array at the same index it was inserted in the <splitpanes> tag.
		let index = -1;
		Array.from(pane.element.parentNode.children).some((el: Element) => {
			if (el.className.includes('splitpanes__pane')) index++;
			return el === pane.element;
		});

		//inserts pane at proper array index
		panes.splice(index, 0, pane);

		// reindex panes
		panes.forEach((p, i) => (p.index = i));

		if (isReady) {
			await tick();

			// 2. Add the splitter.
			redoSplitters();

			// 3. Resize the panes.
			resetPaneSizes(panes[index], undefined);

			// 4. Fire `pane-add` event.
			dispatch('pane-add', {
				index,
				panes: panes.map((pane) => ({ min: pane.min, max: pane.max, size: pane.sz() }))
			});
		}
	}

	async function onPaneRemove(uid: string) {
		// 1. Remove the pane from array and redo indexes.
		const index = panes.findIndex((p) => p.uid === uid);

		const removed = panes.splice(index, 1)[0];

		// reindex panes
		panes.forEach((p, i) => (p.index = i));

		await tick();

		// 2. Remove the splitter.
		redoSplitters();

		// 3. Resize the panes.
		resetPaneSizes(undefined, { ...removed, index });

		// 4. Fire `pane-remove` event.
		dispatch('pane-remove', {
			removed,
			panes: panes.map((pane) => ({ min: pane.min(), max: pane.max(), size: pane.sz() } as IPaneSizingEvent))
		});
	}

	// called by sub-panes
	function onPaneClick(_event: MouseEvent, uid: string) {
		dispatch(
			'pane-click',
			panes.find((pane) => {
				pane.uid == uid;
			})
		);
	}

	onMount(() => {
		checkSplitpanesNodes();
		redoSplitters();
		resetPaneSizes();
		dispatch('ready');
		isReady = true;
	});

	onDestroy(() => {
		// Prevent emitting console warnings on hot reloading.
		isReady = false;
	});

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
			dispatch(
				'resize',
				panes.map((pane) => ({ min: pane.min(), max: pane.max(), size: pane.sz() } as IPaneSizingEvent))
			);
		}
	}

	function onMouseUp() {
		if (isDragging) {
			dispatch(
				'resized',
				panes.map((pane) => ({ min: pane.min(), max: pane.max(), size: pane.sz() } as IPaneSizingEvent))
			);
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

		panes.forEach((pane, i) => {
			const sz = i === splitterIndex ? pane.max() : pane.min();
			pane.setSz(sz);
			if (i !== splitterIndex) totalMinSizes += pane.min();
		});

		const splitterPane = panes[splitterIndex];
		const sz = splitterPane.sz() - totalMinSizes;
		splitterPane.setSz(sz);

		dispatch('pane-maximize', splitterPane);

		typedEventDispatch(
			'resized',
			panes.map((pane) => ({
				min: pane.min(),
				max: pane.max(),
				size: pane.sz()
			}))
		);
	}

	// function to ensure proper typing
	function typedEventDispatch(name: string, data: Array<IPaneSizingEvent>) {
		dispatch(name, data);
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
		if (rtl && !horizontal) tdrag = containerSize - tdrag;

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
		//	setAllPaneDimensions();
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
				panes.forEach((pane, i) => {
					if (i > panesToResize[0] && i <= splitterIndex) {
						pane.setSz(pane.min());
						sums.prevReachedMinPanes += pane.min();
					}
				});
			}
			sums.prevPanesSize = sumPrevPanesSize(panesToResize[0]);
			// If nothing else to push down, cancel dragging.
			if (panesToResize[0] === undefined) {
				sums.prevReachedMinPanes = 0;
				panes[0].setSz(panes[0].min());
				panes.forEach((pane, i) => {
					if (i > 0 && i <= splitterIndex) {
						pane.setSz(pane.min());
						sums.prevReachedMinPanes += pane.min();
					}
				});
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
				panes.forEach((pane, i) => {
					if (i > splitterIndex && i < panesToResize[1]) {
						pane.sz = pane.min;
						sums.nextReachedMinPanes += pane.min();
					}
				});
			}
			sums.nextPanesSize = sumNextPanesSize(panesToResize[1] - 1);
			// If nothing else to push up, cancel dragging.

			const panesCount = panes.length;
			if (panesToResize[1] === undefined) {
				sums.nextReachedMinPanes = 0;
				panes[panesCount - 1].sz = panes[panesCount - 1].min;
				panes.forEach((pane, i) => {
					if (i < panesCount - 1 && i >= splitterIndex + 1) {
						pane.sz = pane.min;
						sums.nextReachedMinPanes += pane.min();
					}
				});
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
	 * Inserts a splitter in the DOM at given position
	 *
	 * @param paneIndex
	 * @param nextPaneNode
	 * @param isVeryFirst
	 */
	function addSplitter(paneIndex: number, nextPaneNode: HTMLElement, isVeryFirst = false) {
		const splitterIndex = paneIndex - 1;
		const elm = document.createElement('div');
		elm.classList.add('splitpanes__splitter');

		if (!isVeryFirst) {
			elm.onmousedown = (event) => onMouseDown(event, splitterIndex);

			if (typeof window !== 'undefined' && 'ontouchstart' in window) {
				elm.ontouchstart = (event) => onMouseDown(event, splitterIndex);
			}
			elm.onclick = (event) => onSplitterClick(event, splitterIndex + 1);
		}

		if (dblClickSplitter) elm.ondblclick = (event) => onSplitterDblClick(event, splitterIndex + 1);

		nextPaneNode.parentNode?.insertBefore(elm, nextPaneNode);
	}

	/**
	 * Remove the splitter from the given node
	 *
	 * @param node
	 */
	function removeSplitter(node: HTMLElement) {
		node.onmousedown = null;
		node.onclick = null;
		node.ondblclick = null;
		node.parentNode?.removeChild(node); // el.remove() doesn't work on IE11.
	}

	/**
	 * Recreates all splitters in the DOM
	 */
	function redoSplitters() {
		if (container) {
			const children = Array.from(container.children) as Array<HTMLElement>;
			children.forEach((el) => {
				if (el.className.includes('splitpanes__splitter')) removeSplitter(el as HTMLElement);
			});
			let paneIndex = 0;
			children.forEach((el) => {
				if (el.className.includes('splitpanes__pane')) {
					if (paneIndex > 0) addSplitter(paneIndex, el);
					else if (firstSplitter) addSplitter(paneIndex, el, true);
					paneIndex++;
				}
			});
		}
	}

	/**
	 *
	 * @param addedPane
	 * @param removedPane
	 */
	function resetPaneSizes(addedPane?: IPane, removedPane?: { [key: string]: any }) {
		if (!addedPane && !removedPane) {
			// on initialization
			initialPanesSizing();
		} else if (panes.some((pane) => pane.givenSize !== null || pane.min() || pane.max() < 100))
			equalizeAfterAddOrRemove(addedPane);
		else equalize();

		if (isReady) {
			typedEventDispatch(
				'resized',
				panes.map((pane) => ({ min: pane.min(), max: pane.max(), size: pane.sz() }))
			);
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

		panes.forEach((pane) => {
			const min = pane.min();
			const max = pane.max();
			const sz = Math.max(Math.min(equalSpace, max), min);
			pane.setSz(sz);
			leftToAllocate -= sz;
			if (sz >= max) ungrowable.push(pane.uid);
			if (sz <= min) unshrinkable.push(pane.uid);
		});

		if (leftToAllocate > 0.1) readjustSizes(leftToAllocate, ungrowable, unshrinkable);
	}

	function initialPanesSizing() {
		let leftToAllocate = 100;
		let ungrowable = Array<string>();
		let unshrinkable = Array<string>();
		let definedSizes = 0;

		// Check if pre-allocated space is 100%.
		panes.forEach((pane) => {
			const sz = pane.sz();
			leftToAllocate -= sz;
			if (pane.givenSize !== null) definedSizes++;
			if (sz >= pane.max()) ungrowable.push(pane.uid);
			if (sz <= pane.min()) unshrinkable.push(pane.uid);
		});

		// set pane sizes if not set.
		let leftToAllocate2 = 100;
		if (leftToAllocate > 0.1) {
			panes.forEach((pane) => {
				if (pane.givenSize === null) {
					const panesCount = panes.length;
					const sz = Math.max(Math.min(leftToAllocate / (panesCount - definedSizes), pane.max()), pane.min());
					pane.setSz(sz);
				}
				leftToAllocate2 -= pane.sz();
			});

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

		// Check if pre-allocated space is 100%.
		panes.forEach((pane) => {
			const sz = pane.sz();
			leftToAllocate -= sz;
			if (sz >= pane.max()) ungrowable.push(pane.uid);
			if (sz <= pane.min()) unshrinkable.push(pane.uid);
		});

		if (Math.abs(leftToAllocate) < 0.1) return; // Ok.

		panes.forEach((pane) => {
			const max = pane.max();
			const min = pane.min();
			if (addedPane && addedPane.givenSize !== null && addedPane.uid === pane.uid) {
			} else pane.setSz(Math.max(Math.min(equalSpace, max), min));

			const sz = pane.sz();
			leftToAllocate -= sz;
			if (sz >= max) ungrowable.push(pane.uid);
			if (sz <= min) unshrinkable.push(pane.uid);
		});

		if (leftToAllocate > 0.1) readjustSizes(leftToAllocate, ungrowable, unshrinkable);
	}

	// Second loop to adjust sizes now that we know more about the panes constraints.
	async function readjustSizes(leftToAllocate: number, ungrowable: Array<string>, unshrinkable: Array<string>) {
		const panesCount = panes.length;
		let equalSpaceToAllocate: number;
		if (leftToAllocate > 0) equalSpaceToAllocate = leftToAllocate / (panesCount - ungrowable.length);
		else equalSpaceToAllocate = leftToAllocate / (panesCount - unshrinkable.length);

		panes.forEach((pane) => {
			const sz = pane.sz();
			if (leftToAllocate > 0 && !ungrowable.includes(pane.uid)) {
				// Need to diff the size before and after to get the exact allocated space.
				const newPaneSize = Math.max(Math.min(sz + equalSpaceToAllocate, pane.max()), pane.min());
				const allocated = newPaneSize - sz;
				leftToAllocate -= allocated;
				pane.setSz(newPaneSize);
			} else if (!unshrinkable.includes(pane.uid)) {
				// Need to diff the size before and after to get the exact allocated space.
				const newPaneSize = Math.max(Math.min(sz + equalSpaceToAllocate, pane.max()), pane.min());
				const allocated = newPaneSize - sz;
				leftToAllocate -= allocated;
				pane.setSz(newPaneSize);
			}
		});

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
			children.forEach((child) => {
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
			});
		}
	}
</script>

<div
	{id}
	bind:this={container}
	class={`splitpanes ${clazz || ''}`}
	class:splitpanes--horizontal={horizontal}
	class:splitpanes--vertical={!horizontal}
	class:splitpanes--dragging={isDragging}
	{style}
>
	<slot />
</div>

<style>
	:global(.splitpanes) {
		display: flex;
		width: 100%;
		height: 100%;
	}
	:global(.splitpanes--vertical) {
		flex-direction: row;
	}
	:global(.splitpanes--horizontal) {
		flex-direction: column;
	}
	:global(.splitpanes--dragging *) {
		user-select: none;
	}
	:global(.splitpanes__pane) {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	:global(.splitpanes--vertical .splitpanes__pane) {
		transition: width 0.2s ease-out;
	}
	:global(.splitpanes--horizontal .splitpanes__pane) {
		transition: height 0.2s ease-out;
	}
	:global(.splitpanes--dragging .splitpanes__pane) {
		transition: none;
	}
	:global(.splitpanes__splitter) {
		touch-action: none;
	}
	:global(.splitpanes--vertical > .splitpanes__splitter) {
		min-width: 1px;
		cursor: col-resize;
	}
	:global(.splitpanes--horizontal > .splitpanes__splitter) {
		min-height: 1px;
		cursor: row-resize;
	}
	:global(.splitpanes.default-theme .splitpanes__pane) {
		background-color: #f2f2f2;
	}
	:global(.splitpanes.default-theme .splitpanes__splitter) {
		background-color: #fff;
		box-sizing: border-box;
		position: relative;
		flex-shrink: 0;
	}
	:global(.splitpanes.default-theme .splitpanes__splitter:before, .splitpanes.default-theme
			.splitpanes__splitter:after) {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		background-color: rgba(0, 0, 0, 0.15);
		transition: background-color 0.3s;
	}
	:global(.splitpanes.default-theme .splitpanes__splitter:hover:before, .splitpanes.default-theme
			.splitpanes__splitter:hover:after) {
		background-color: rgba(0, 0, 0, 0.25);
	}
	:global(.splitpanes.default-theme .splitpanes__splitter:first-child) {
		cursor: auto;
	}
	:global(.default-theme.splitpanes .splitpanes .splitpanes__splitter) {
		z-index: 1;
	}
	:global(.default-theme.splitpanes--vertical > .splitpanes__splitter, .default-theme
			.splitpanes--vertical
			> .splitpanes__splitter) {
		width: 7px;
		border-left: 1px solid #eee;
		margin-left: -1px;
	}
	:global(.default-theme.splitpanes--vertical > .splitpanes__splitter:before, .default-theme
			.splitpanes--vertical
			> .splitpanes__splitter:before, .default-theme.splitpanes--vertical > .splitpanes__splitter:after, .default-theme
			.splitpanes--vertical
			> .splitpanes__splitter:after) {
		transform: translateY(-50%);
		width: 1px;
		height: 30px;
	}
	:global(.default-theme.splitpanes--vertical > .splitpanes__splitter:before, .default-theme
			.splitpanes--vertical
			> .splitpanes__splitter:before) {
		margin-left: -2px;
	}
	:global(.default-theme.splitpanes--vertical > .splitpanes__splitter:after, .default-theme
			.splitpanes--vertical
			> .splitpanes__splitter:after) {
		margin-left: 1px;
	}
	:global(.default-theme.splitpanes--horizontal > .splitpanes__splitter, .default-theme
			.splitpanes--horizontal
			> .splitpanes__splitter) {
		height: 7px;
		border-top: 1px solid #eee;
		margin-top: -1px;
	}
	:global(.default-theme.splitpanes--horizontal > .splitpanes__splitter:before, .default-theme
			.splitpanes--horizontal
			> .splitpanes__splitter:before, .default-theme.splitpanes--horizontal
			> .splitpanes__splitter:after, .default-theme .splitpanes--horizontal > .splitpanes__splitter:after) {
		transform: translateX(-50%);
		width: 30px;
		height: 1px;
	}
	:global(.default-theme.splitpanes--horizontal > .splitpanes__splitter:before, .default-theme
			.splitpanes--horizontal
			> .splitpanes__splitter:before) {
		margin-top: -2px;
	}
	:global(.default-theme.splitpanes--horizontal > .splitpanes__splitter:after, .default-theme
			.splitpanes--horizontal
			> .splitpanes__splitter:after) {
		margin-top: 1px;
	}
</style>
