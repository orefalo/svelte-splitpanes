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
			$comp: path.resolve('./src/comp')
		}
	}
};

export default config;