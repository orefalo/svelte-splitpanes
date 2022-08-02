import type { Readable } from 'svelte/store';

export { default as Splitpanes } from './Splitpanes.svelte';
export { default as Pane } from './Pane.svelte';

export interface SizeDetails {
	/** The current size of a pane.
	 *
	 * If number, it's the real pane size value.
	 * If null, it means that the pane size is unknown yet.
	 */
	size: number | null;
	minSize: number;
	maxSize: number;
}

export type PaneInitFunction = (
	key: any,
	sizeStore: Readable<SizeDetails>
) => {
	onSplitterDown: (_event: TouchEvent | MouseEvent) => void;
	onSplitterClick: (event: MouseEvent) => void;
	onSplitterDblClick: (_event: MouseEvent) => void;
	/** A store that tells what is the previous pane size.
	 *
	 * If undefined, it means that you are the first pane.
	 * Otherwise, it contains the details about the previous panel size details.
	 */
	previousPaneSizeStore: Readable<SizeDetails | undefined>;
};

// methods passed from splitpane to children panes
export interface SplitContext {
	isHorizontal: Readable<boolean>;
	showFirstSplitter: Readable<boolean>;
	onPaneInit: PaneInitFunction;
	onPaneAdd: (pane: IPane) => Promise<void>;
	onPaneRemove: (key: any) => Promise<void>;
	onPaneClick: (_event: MouseEvent, key: any) => void;
}

export interface IPaneSizingEvent {
	// minimum size in %
	min: number;
	// maximum size in %
	max: number;
	// pane size in %
	size: number;
	// snap size in %
	snap: number;
}

// the definition of a pane
export interface IPane {
	// unique key per pane
	key: any;
	element: HTMLElement;
	// 0....N index in pane array
	index?: number;
	min: () => number;
	max: () => number;
	snap: () => number;
	sz: () => number;
	setSz: (number: number) => void;
	givenSize: number | null;
}
