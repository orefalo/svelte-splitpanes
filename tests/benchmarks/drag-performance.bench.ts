/**
 * Performance benchmarks for drag operations
 *
 * Run with: pnpm test:bench
 */

import { bench, describe } from 'vitest';
import { sumPartial } from '$lib/internal/utils/array';
import { positionDiff } from '$lib/internal/utils/position';
import type { Position } from '$lib/internal/utils/position';

describe('Drag Operation Performance', () => {
  // Mock pane data
  const mockPanes = Array.from({ length: 10 }, (_, i) => ({
    sz: () => 10,
    index: i
  }));

  bench('sumPartial with 10 panes', () => {
    sumPartial(mockPanes, 0, 10, pane => pane.sz());
  });

  bench('sumPartial with 100 panes', () => {
    const largePanes = Array.from({ length: 100 }, (_, i) => ({
      sz: () => 1,
      index: i
    }));
    sumPartial(largePanes, 0, 100, pane => pane.sz());
  });

  bench('positionDiff calculation', () => {
    const from: Position = { left: 100, top: 200 };
    const to: Position = { left: 150, top: 250 };
    positionDiff(to, from);
  });

  bench('1000 position diff calculations', () => {
    for (let i = 0; i < 1000; i++) {
      const from: Position = { left: i, top: i };
      const to: Position = { left: i + 50, top: i + 50 };
      positionDiff(to, from);
    }
  });
});

describe('Array Operations Performance', () => {
  const testArray = Array.from({ length: 1000 }, (_, i) => i);

  bench('Array.prototype.slice', () => {
    testArray.slice(100, 200);
  });

  bench('sumPartial equivalent range', () => {
    sumPartial(testArray, 100, 200, val => val);
  });

  bench('Native reduce on range', () => {
    testArray.slice(100, 200).reduce((sum, val) => sum + val, 0);
  });
});
