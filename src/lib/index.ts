import type { Writable } from 'svelte/store';

export { default as Splitpanes } from './Splitpanes.svelte';
export { default as Pane } from './Pane.svelte';

// methods passed from splitpane to children panes
export interface SplitContext {
	isHorizontal: Writable<boolean>;
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
	sz: () => number;
	setSz: (number) => void;
	givenSize: string | null;
}
