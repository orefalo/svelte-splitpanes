import fs from 'fs';
import path from 'path';

const libPath = path.resolve('.', 'src/lib/');

const esmEnvPrefix = '\0esm-env-handling';

/** @type {boolean} */
let isBuild;

/** @type {boolean} */
let ssr;

/**
 * A Vite plugin that computes the actual minified size of the library.
 *
 * @returns {import('vite').PluginOption}
 */
export const minifiedSizeAnalyzingPlugin = () => ({
	enforce: 'pre',

	config(_config, env) {
		isBuild = env.command === 'build';
	},

	configResolved(config) {
		ssr = config.build?.ssr ?? false;
	},

	// We want to make sure that the external dependency for 'esm-env' or 'esm-env-robust' is embedded (if included),
	//  since otherwise the output server code may have `import { BROWSER } from 'esm-env'`, which is stupid since the
	//  constant value should be inlined, so it will hint the code minifier for dead code elimination,
	//  which reduces the server output size dramatically.
	resolveId(source) {
		if (isBuild && (source === 'esm-env' || source === 'esm-env-robust')) {
			return { id: esmEnvPrefix, external: false };
		} else {
			return null;
		}
	},
	load(id) {
		if (isBuild && id === esmEnvPrefix) {
			return `export const BROWSER = ${!ssr};\nexport const DEV = false;`;
		} else {
			return null;
		}
	},

	generateBundle(options, bundle) {
		// Notice that here we already know that `isBuild === true`.

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

				if (path.resolve(options.dir) === path.resolve('.', '.svelte-kit/output/client')) {
					console.log('\nClient minified library size (bytes): ' + size);
					fs.writeFileSync('./.svelte-kit/output/minified-size-client.txt', size.toString());
				} else if (path.resolve(options.dir) === path.resolve('.', '.svelte-kit/output/server')) {
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
