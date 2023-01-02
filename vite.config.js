import { sveltekit } from '@sveltejs/kit/vite';

import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [ sveltekit() ],
	resolve: {
		optimizeDeps: {
			include: ['highlight.js', 'highlight.js/lib/core']
		},
		alias: {
			'svelte-splitpanes': path.resolve('./src/lib'),
			$comp: path.resolve('./src/comp')
		}
	}
};

export default config;