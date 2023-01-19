import { sveltekit } from '@sveltejs/kit/vite';

import fs from 'fs';
import path from 'path';

const libPath = path.resolve('.', 'src/lib/');

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		optimizeDeps: {
			include: ['highlight.js', 'highlight.js/lib/core']
		},
		alias: {
			'svelte-splitpanes': path.resolve('./src/lib'),
			$comp: path.resolve('./src/comp')
		}
	},
	build: {
		rollupOptions: {
			plugins: [
				{
					generateBundle(options, bundle) {
						for (const chunkName in bundle) {
							const chunk = bundle[chunkName];
							if (chunk.type !== 'chunk') {
								continue; // Not a chunk
							}

							const minimizedLengths = Object.keys(chunk.modules)
								.filter((fileSource) => path.resolve(fileSource).startsWith(libPath))
								.map((fileSource) => chunk.modules[fileSource].renderedLength);

							if (minimizedLengths.length > 0) {
								const size = minimizedLengths.reduce((x, y) => x + y);

								if (path.resolve(options.dir) === path.resolve('.', '.svelte-kit/output/client')) {
									fs.writeFileSync('./.svelte-kit/output/minified-size-client.txt', size.toString());
								} else if (path.resolve(options.dir) === path.resolve('.', '.svelte-kit/output/server')) {
									fs.writeFileSync('./.svelte-kit/output/minified-size-server.txt', size.toString());
								}
							}
						}
					}
				}
			]
		}
	}
};

export default config;
