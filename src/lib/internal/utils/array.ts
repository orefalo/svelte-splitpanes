export function sumPartial<T>(
	arr: T[],
	start: number,
	end: number,
	valueFunction: (element: T, index: number) => number
) {
	let sum = 0;
	for (let i = start; i < end; i++) {
		sum += valueFunction(arr[i], i);
	}
	return sum;
}
