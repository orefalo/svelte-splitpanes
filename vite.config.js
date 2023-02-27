import path from 'path';

import { sveltekit } from '@sveltejs/kit/vite';

import { exampleImportPlugin } from './scripts/vite/example-import.js';

import { minifiedSizeAnalyzingPlugin, manualChunksForAnalyzing } from './scripts/vite/minified-size-analyzing.js';

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
	}
};

export default config;
