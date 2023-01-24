export interface Position {
	x: number;
	y: number;
}

/** This is a minimal version of DOMRect for our use.
 * We don't use DOMRect constructor because the lack of legacy browsers support (e.g. IE11).
 */
export interface Rect extends Position {
	width: number;
	height: number;
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
