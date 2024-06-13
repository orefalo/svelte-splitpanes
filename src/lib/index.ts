import type { Readable } from 'svelte/store';

export { default as Splitpanes } from '$lib/Splitpanes.svelte';
export { default as Pane } from '$lib/Pane.svelte';

export type PaneInitFunction = (_key: any) => {
	undefinedPaneInitSize: number;
};

export interface ClientCallbacks {
	onSplitterDown: (_event: TouchEvent | MouseEvent) => void;
	onSplitterClick: (_event: MouseEvent) => void;
	onSplitterDblClick: (_event: MouseEvent) => void;
	onPaneClick: (_event: MouseEvent) => void;
	/** Report the manual given size was changed. */
	reportGivenSizeChange: (_newGivenSize: number | null) => void;
}

// methods passed from splitpane to children panes
export interface SplitContext {
	/** Tells the key of the very first pane, or undefined if not recieved yet. */
	veryFirstPaneKey: Readable<any>;
	isHorizontal: Readable<boolean>;
	showFirstSplitter: Readable<boolean>;
	ssrRegisterPaneSize?: (size: number | null) => void;
	onPaneInit: PaneInitFunction;
	clientOnly?: {
		onPaneAdd: (pane: IPane) => ClientCallbacks;
		onPaneRemove: (key: any) => Promise<void>;
	};
}

/**
 * Pane sizing details on an event.
 */
export interface IPaneSizingEvent {
	/**
	 * Minimum size in %.
	 */
	min: number;

	/**
	 * Maximum size in %.
	 */
	max: number;

	/**
	 * Pane size in %.
	 */
	size: number;

	/**
	 * Snap size in %.
	 */
	snap: number;
}

// the definition of a pane
export interface IPane {
	// unique key per pane
	key: any;
	element: HTMLElement;
	// 0....N index in pane array
	index: number;
	min: () => number;
	max: () => number;
	snap: () => number;
	sz: () => number;
	setSz: (number: number) => void;
	setSplitterActive: (isActive: boolean) => void;
	givenSize: number | null;
	isReady: boolean;
}
