/**
 * Unit tests for array utilities
 */

import { describe, it, expect } from 'vitest';
import { sumPartial, forEachPartial } from '$lib/internal/utils/array';

describe('sumPartial', () => {
  it('sums values in specified range', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sumPartial(arr, 1, 4, val => val);

    expect(result).toBe(9); // 2 + 3 + 4
  });

  it('applies value function correctly', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sumPartial(arr, 0, 3, val => val * 2);

    expect(result).toBe(12); // (1*2) + (2*2) + (3*2)
  });

  it('returns 0 for empty range', () => {
    const arr = [1, 2, 3];
    const result = sumPartial(arr, 2, 2, val => val);

    expect(result).toBe(0);
  });

  it('handles end boundary correctly', () => {
    const arr = [10, 20, 30];
    const result = sumPartial(arr, 0, 3, val => val);

    expect(result).toBe(60);
  });
});

describe('forEachPartial', () => {
  it('iterates over specified range', () => {
    const arr = [1, 2, 3, 4, 5];
    const results: number[] = [];

    forEachPartial(arr, 1, 4, val => results.push(val));

    expect(results).toEqual([2, 3, 4]);
  });

  it('passes index to callback', () => {
    const arr = ['a', 'b', 'c'];
    const indices: number[] = [];

    forEachPartial(arr, 0, 3, (_val, idx) => indices.push(idx));

    expect(indices).toEqual([0, 1, 2]);
  });

  it('does not iterate over empty range', () => {
    const arr = [1, 2, 3];
    let count = 0;

    forEachPartial(arr, 1, 1, () => count++);

    expect(count).toBe(0);
  });
});
