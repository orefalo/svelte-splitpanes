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
			'svelte-splitpanes': libPath,
			$comp: path.resolve('./src/comp')
		}
	},
	build: {
		minify: 'esbuild', // We specify this explicitly, since we need the server code to be minimized for computation.
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					const resolvedPath = path.resolve(id);

					if (resolvedPath.search('node_modules') > 0) {
						// We need to separate the external deps so they won't be in the `svelte-splitpanes` chunk.
						return 'external';
					} else if (resolvedPath.startsWith(libPath)) {
						return 'svelte-splitpanes';
					} else {
						return undefined;
					}
				}
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
