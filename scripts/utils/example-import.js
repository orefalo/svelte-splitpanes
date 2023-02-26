import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const apiSuffix = '?example';
const idPrefix = '\0exmple-import-proxy"';

/**
 * A Vite plugin that computes the actual minified size of the library.
 *
 * @returns {import('vite').PluginOption}
 */
export const exampleImportPlugin = () => ({
	enforce: 'pre',

	async resolveId(source, importer) {
		if (!source.endsWith(apiSuffix)) {
			return;
		}
		// otherwise

		const originalSource = source.slice(0, -apiSuffix.length);

		const resolved = (await this.resolve(originalSource, importer)).id;

		return idPrefix + resolved;
	},

	async load(id) {
		if (!id.startsWith(idPrefix)) {
			return;
		}
		// otherwise

		const originalId = id.slice(idPrefix.length);
		const relativeIdForUniqueness = path.relative(__dirname, originalId);

		const output = [
			`import component from ${JSON.stringify(originalId)};`,
			`import code from ${JSON.stringify(originalId + '?raw')};`,
			`export const id = ${JSON.stringify(relativeIdForUniqueness)};`,
			`export { code, component };`,
			`export default { id, code, component };`
		].join('\n');

		return output;
	}
});
