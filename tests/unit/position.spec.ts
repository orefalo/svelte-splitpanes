/**
 * Unit tests for position utilities
 *
 * These tests demonstrate the testing pattern for utility functions.
 * Run with: pnpm test:unit
 */

import { describe, it, expect } from 'vitest';
import { positionDiff } from '$lib/internal/utils/position';
import type { Position } from '$lib/internal/utils/position';

describe('positionDiff', () => {
  it('calculates correct difference between two positions', () => {
    const from: Position = { left: 50, top: 30 };
    const to: Position = { left: 100, top: 80 };

    const result = positionDiff(to, from);

    expect(result).toEqual({
      left: 50,
      top: 50
    });
  });

  it('handles negative differences', () => {
    const from: Position = { left: 100, top: 100 };
    const to: Position = { left: 50, top: 30 };

    const result = positionDiff(to, from);

    expect(result).toEqual({
      left: -50,
      top: -70
    });
  });

  it('handles zero difference', () => {
    const from: Position = { left: 100, top: 100 };
    const to: Position = { left: 100, top: 100 };

    const result = positionDiff(to, from);

    expect(result).toEqual({
      left: 0,
      top: 0
    });
  });

  it('handles decimal values', () => {
    const from: Position = { left: 10.5, top: 20.3 };
    const to: Position = { left: 15.7, top: 25.9 };

    const result = positionDiff(to, from);

    expect(result.left).toBeCloseTo(5.2, 1);
    expect(result.top).toBeCloseTo(5.6, 1);
  });
});
