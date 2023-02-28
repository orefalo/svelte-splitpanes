import fs from 'node:fs/promises';

import sass from 'sass';

// This Highlight.js loading is based on the code in:
//  https://github.com/metonym/svelte-highlight/blob/master/src/Highlight.svelte
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

const apiGuardSuffix = '.guard'; // Sadly this is needed sometimes for avoiding conflicts with Vite internal plugins
const apiSuffix = '?example';

const apiProxySuffix = '.example-safeguard-proxy'; // This is needed wo other plugins wouldn't transform the file
const idPrefix = '\0exmple-import-proxy"';
const encodeId = (/** @type {string} */ id) => idPrefix + id + apiProxySuffix;
const decodeId = (/** @type {string} */ id) => id.slice(idPrefix.length, -apiProxySuffix.length);

/**
 * Change the ">" starting lines to just go to the line before.
 * This both looks nicer for examples, and additionally fix highlighting issues.
 *
 * @param {string} code
 * @returns {string}
 */
const fixTrailingEnds = (code) => code.replaceAll(/\n>/gm, '>');

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

		let originalSource = source.slice(0, -apiSuffix.length);
		if (originalSource.endsWith(apiGuardSuffix)) {
			originalSource = originalSource.slice(0, -apiGuardSuffix.length);
		}

		const resolved = (await this.resolve(originalSource, importer)).id;

		return encodeId(resolved);
	},

	async load(id) {
		if (!id.startsWith(idPrefix)) {
			return;
		}
		// otherwise

		const originalId = decodeId(id);
		const isSvelte = originalId.endsWith('.svelte');
		const isSass = ['scss', 'sass'].some((suffix) => originalId.endsWith(`.${suffix}`));
		const isCSS = isSass || originalId.endsWith(`.css`);

		let code = await fs.readFile(originalId, { encoding: 'utf8' });
		if (isSvelte) {
			code = fixTrailingEnds(code);
		}
		const highlightedHTML = hljs.highlightAuto(code).value;

		const css = isCSS ? (isSass ? (await sass.compileAsync(originalId)).css : code) : undefined;
		const cssHighlightedHTML = css ? hljs.highlight(css, { language: 'css' }).value : undefined;

		const output = [
			isSvelte ? `import component from ${JSON.stringify(originalId)};` : '',
			`export const code = ${JSON.stringify(code)};`,
			`export const highlightedHTML = ${JSON.stringify(highlightedHTML)};`,
			isSvelte ? `export { component };` : '',
			isCSS ? `export const css = ${JSON.stringify(css)};` : '',
			isCSS ? `export const cssHighlightedHTML = ${JSON.stringify(cssHighlightedHTML)};` : '',
			`export default { code, highlightedHTML${isSvelte ? ', component' : ''}${
				isCSS ? ', css, cssHighlightedHTML' : ''
			} };`
		].join('\n');

		return output;
	}
});
