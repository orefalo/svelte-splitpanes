import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// Althought it's not the vite way, we do so since there is no way to know if on dev for SvelteKit right now.
const dev = !!process.env.DEV;

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
			fallback: undefined
		}),
		paths: {
			// change below to your repo name
			base: dev ? '' : '/svelte-splitpanes'
		}
	}
};

export default config;
