import type { Readable } from 'svelte/store';
import type { SizeUnit } from './internal/utils/sizing';

export { default as Splitpanes } from './Splitpanes.svelte';
export { default as Pane } from './Pane.svelte';

export type { SizeUnit };

export type PaneInitFunction = (key: any) => {
	undefinedPaneInitSize: number;
};

export interface ClientCallbacks {
	onSplitterDown: (_event: TouchEvent | MouseEvent) => void;
	onSplitterClick: (event: MouseEvent) => void;
	onSplitterDblClick: (_event: MouseEvent) => void;
	onPaneClick: (_event: MouseEvent) => void;
	/** Report the manual given size was changed. */
	reportGivenSizeChange: (newGivenSize: number | null) => void;
	/** Report that the pane splitter size was changed. */
	reportSplitterSizeChange: (newSplitterSize: number | null) => void;
}

// methods passed from splitpane to children panes
export interface SplitContext {
	/** Tells the key of the very first pane, or undefined if not recieved yet. */
	veryFirstPaneKey: Readable<any>;
	isHorizontal: Readable<boolean>;
	splitterDefaultSize: Readable<number>;
	splitterSumSize: Readable<number>;
	showFirstSplitter: Readable<boolean>;
	ssrRegisterPaneSize?: (size: number | null, splitterSize: number | null, SizeUnit: SizeUnit) => void;
	onPaneInit: PaneInitFunction;
	clientOnly?: {
		onPaneAdd: (pane: IPane) => ClientCallbacks;
		onPaneRemove: (key: any) => Promise<void>;
	};
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
	setSplitterActive: (isActive: boolean) => void;
	givenSize: number | null;
	/** The user given splitter size to the specific pane */
	givenSplitterSize: number | null;
	isReady: boolean;
}
