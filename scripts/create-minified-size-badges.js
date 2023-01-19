import fs from 'fs';

import { makeBadge } from 'badge-maker';

/**
 *
 * @param {string} name
 */
const formatSize = (name) =>
	`${name}: ${(
		parseInt(fs.readFileSync(`./.svelte-kit/output/minified-size-${name}.txt`, { encoding: 'utf-8' })) / 1024
	).toFixed(1)} KB`;

const format = {
	label: 'minified size',
	message: ['client', 'server'].map(formatSize).join(', '),
	color: '#08C'
};

const svg = makeBadge(format);

fs.writeFileSync('./docs/minified-size-badge.svg', svg);
