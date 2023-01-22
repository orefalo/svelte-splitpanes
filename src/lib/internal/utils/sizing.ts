// used to get mouse mouvements
export interface MousePosition {
	x: number;
	y: number;
}

/** This is a minimal version of DOMRect for our use.
 * We don't use DOMRect constructor because the lack of legacy browsers support (e.g. IE11).
 */
export interface Rect {
	width: number;
	height: number;
	x: number;
	y: number;
}

export interface SidesStart {
	left: number;
	top: number;
}

export interface SidesEnd {
	right: number;
	bottom: number;
}

export type Sides = SidesStart & SidesEnd;

export function pxToNumber(pxString: string | undefined) {
	if (!pxString.endsWith('px')) {
		return undefined;
	}
	// otherwise

	const num = parseFloat(pxString.slice(0, pxString.length - 2));
	return isNaN(num) ? undefined : num;
}
