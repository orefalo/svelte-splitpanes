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
  build: {
    minify: 'esbuild', // We specify this explicitly, since we need the server code to be minified for size computation.
    rollupOptions: {
      output: {
        manualChunks: manualChunksForAnalyzing
      }
    }
  },
  ssr: {
    noExternal: [
      // So that 'esm-env-robust' dependency will be embedded,
      //  and (a huge!!) minification could be performed by knowing if we're running on the server or on the client.
      'esm-env-robust'
    ]
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
