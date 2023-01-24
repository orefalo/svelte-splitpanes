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

export const getDimensionName = (horizontal: boolean) => (horizontal ? 'height' : 'width');
