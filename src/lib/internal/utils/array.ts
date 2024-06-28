export function sumPartial<T>(
  arr: ReadonlyArray<T>,
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

export function forEachPartial<T>(
  arr: ReadonlyArray<T>,
  start: number,
  end: number,
  callback: (element: T, index: number) => void
) {
  for (let i = start; i < end; i++) {
    callback(arr[i], i);
  }
}
