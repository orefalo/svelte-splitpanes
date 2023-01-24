import { pxToNumber, type Position, type Rect, type Sides, type SidesStart } from './sizing.js';

export { Position };

export const getBordersSizeOffsets: {
	(computedStyle: CSSStyleDeclaration, calcEnds?: true): Sides;
	(computedStyle: CSSStyleDeclaration, calcEnds: false): SidesStart;
} = (computedStyle: CSSStyleDeclaration, calcEnds = true) => {
	if (computedStyle.getPropertyValue('box-sizing') === 'border-box') {
		// In this case, no offset is needed since the box model of this element doesn't include the border.
		return undefined;
	}
	// otherwise

	const left = pxToNumber(computedStyle.getPropertyValue('border-left-width'));
	if (left === undefined) {
		console.error('Splitpanes Error: Fail to parse container `border-left-width`.');
		return undefined;
	}
	// otherwise

	const top = pxToNumber(computedStyle.getPropertyValue('border-top-width'));
	if (top === undefined) {
		console.error('Splitpanes Error: Fail to parse container `border-top-width`.');
		return undefined;
	}
	// otherwise

	const result: SidesStart | Sides = { left, top };

	if (calcEnds) {
		const right = pxToNumber(computedStyle.getPropertyValue('border-right-width'));
		if (right === undefined) {
			console.error('Splitpanes Error: Fail to parse container `border-right-width`.');
			return undefined;
		}
		// otherwise

		const bottom = pxToNumber(computedStyle.getPropertyValue('border-bottom-width'));
		if (bottom === undefined) {
			console.error('Splitpanes Error: Fail to parse container `border-bottom-width`.');
			return undefined;
		}
		// otherwise

		const resultExtended = result as Sides;

		resultExtended.right = right;
		resultExtended.bottom = bottom;
	}

	return result as any;
};

/**
 * Computes the position and the dimensions of the element without the border.
 *
 * While `element.getBoundingClientRect()` gives the correct size with the borders, this method method does include the borders.
 *
 * Notice that for calculating the width and the height without the border, we must use this function instead of using
 *  `Element.clientWidth` and `Element.clientHeight`, beacuse they round the sizes of the pixels to be integer.
 */
export function elementRectWithoutBorder(element: Element, computedStyle?: CSSStyleDeclaration): Rect {
	if (!computedStyle) {
		computedStyle = window.getComputedStyle(element);
	}

	const rect = element.getBoundingClientRect();
	const borderOffsets = getBordersSizeOffsets(computedStyle, true) || { left: 0, top: 0, right: 0, bottom: 0 };

	return {
		width: rect.width - borderOffsets.left - borderOffsets.right,
		height: rect.height - borderOffsets.top - borderOffsets.bottom,
		x: rect.left + borderOffsets.left,
		y: rect.top + borderOffsets.top
	};
}

/** Get the cursor position relative to some element. */
export const positionDiff = (to: Position, from: Position) => ({
	x: to.x - from.x,
	y: to.y - from.y
});

export function getGlobalMousePosition(event: MouseEvent | TouchEvent): Position {
	const eventMouse = event as MouseEvent;
	const eventTouch = event as TouchEvent;

	const { clientX, clientY } = 'ontouchstart' in window && eventTouch.touches ? eventTouch.touches[0] : eventMouse;

	return { x: clientX, y: clientY };
}
