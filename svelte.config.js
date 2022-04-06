import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		prerender: {
			default: true
		},
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null
		}),
		paths: {
			// change below to your repo name
			base: dev ? '' : '/svelte-splitpanes'
		},
		vite: {
			optimizeDeps: {
				include: ['highlight.js', 'highlight.js/lib/core']
			},
			resolve: {
				alias: {
					$comp: path.resolve('./src/comp'),
					$lib: path.resolve('./src/lib')
				}
			}
		}
	}
};

export default config;
