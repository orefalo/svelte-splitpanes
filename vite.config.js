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
			output: {
				manualChunks: (id) => (path.resolve(id).startsWith(libPath) ? 'svelte-splitpanes' : undefined)
			},
			plugins: [
				{
					generateBundle(options, bundle) {
						let found = false;

						for (const chunkName in bundle) {
							const chunk = bundle[chunkName];
							if (chunk.type !== 'chunk') {
								continue; // Not a chunk
							}

							if (Object.keys(chunk.modules).find((fileSource) => path.resolve(fileSource).startsWith(libPath))) {
								if (found) {
									throw 'Error: the library dependency was already found for minified size computation, so it is separated!';
								}
								found = true;

								const size = chunk.code.length;

								if (path.resolve(options.dir) === path.resolve('.', '.svelte-kit/output/client')) {
									fs.writeFileSync('./.svelte-kit/output/minified-size-client.txt', size.toString());
								} else if (path.resolve(options.dir) === path.resolve('.', '.svelte-kit/output/server')) {
									fs.writeFileSync('./.svelte-kit/output/minified-size-server.txt', size.toString());
								}
							}
						}

						if (!found) {
							throw "Error: the library dependency wasn't found for minified size computation!";
						}
					}
				}
			]
		}
	}
};

export default config;
