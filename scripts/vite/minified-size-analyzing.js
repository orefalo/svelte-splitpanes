import fs from 'fs';
import path from 'path';

const libPath = path.resolve('.', 'src/lib/');

/** @type {boolean} */
let ssr;

/**
 * A Vite plugin that computes the actual minified size of the library.
 *
 * @returns {import('vite').PluginOption}
 */
export const minifiedSizeAnalyzingPlugin = () => ({
	enforce: 'pre',

	configResolved(config) {
		ssr = config.build?.ssr ?? false;
	},

	generateBundle(_options, bundle) {
		// Notice that this stage happen only on build, and not on dev.

		let found = false;

		for (const chunkName in bundle) {
			const chunk = bundle[chunkName];

			if (
				chunk.type === 'chunk' &&
				Object.keys(chunk.modules).find((fileSource) => path.resolve(fileSource).startsWith(libPath))
			) {
				if (found) {
					throw 'Error: the library dependency was already found for minified size computation, so it is separated!';
				}
				found = true;

				const size = chunk.code.length;

				if (!ssr) {
					console.log('\nClient minified library size (bytes): ' + size);
					fs.writeFileSync('./.svelte-kit/output/minified-size-client.txt', size.toString());
				} else {
					console.log('\nServer minified library size (bytes): ' + size);
					fs.writeFileSync('./.svelte-kit/output/minified-size-server.txt', size.toString());
				}
			}
		}

		if (!found) {
			throw "Error: the library dependency wasn't found for minified size computation!";
		}
	}
});

/**
 * The needed Rollup `manualChunks()` configuration function so the size analyzing would work.
 *
 * @param {string} id
 * @returns
 */
export const manualChunksForAnalyzing = (id) => {
	const resolvedPath = path.resolve(id);

	if (resolvedPath.search('node_modules') > 0) {
		// We need to separate the external deps so they won't be in the `svelte-splitpanes` chunk.
		return 'external';
	} else if (resolvedPath.startsWith(libPath)) {
		return 'svelte-splitpanes';
	} else {
		return undefined;
	}
};
