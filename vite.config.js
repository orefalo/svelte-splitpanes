import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { exampleImportPlugin } from './scripts/vite/example-import.js';
import {
  minifiedSizeAnalyzingPlugin,
  manualChunksForAnalyzing
} from './scripts/vite/minified-size-analyzing.js';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [sveltekit(), exampleImportPlugin(), minifiedSizeAnalyzingPlugin()],
  optimizeDeps: {
    include: ['highlight.js', 'highlight.js/lib/core']
  },
  esbuild: {
    legalComments: 'none'
  },
  build: {
    minify: true,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks: manualChunksForAnalyzing
      }
    }
  },
  ssr: {
    noExternal: []
  },
  test: {
    include: ['tests/unit/**/*.{test,spec}.{js,ts}'],
    benchmark: {
      include: ['tests/benchmarks/**/*.{bench,benchmark}.{js,ts}']
    }
  }
});
