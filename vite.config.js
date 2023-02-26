import path from 'path';

import { sveltekit } from '@sveltejs/kit/vite';

import { exampleImportPlugin } from './scripts/utils/example-import.js';

import { minifiedSizeAnalyzingPlugin, manualChunksForAnalyzing } from './scripts/utils/minified-size-analyzing.js';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), exampleImportPlugin(), minifiedSizeAnalyzingPlugin()],
	resolve: {
		optimizeDeps: {
			include: ['highlight.js', 'highlight.js/lib/core']
		},
		alias: {
			'svelte-splitpanes': path.resolve('.', 'src/lib'),
			$comp: path.resolve('./src/comp')
		}
	},
	build: {
		minify: 'esbuild', // We specify this explicitly, since we need the server code to be minimized for size computation.
		rollupOptions: {
			output: {
				manualChunks: manualChunksForAnalyzing
			}
		}
	}
};

export default config;
