import { writeFile } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

import packageJson from '../package.json' assert { type: 'json' };

if (process.env.CI !== 'true') {
	console.error(
		'Cannot run this UNSAFE script outside CI, since it removes essential info from `package.json`. Aborting script!'
	);
	process.exit(1);
}
// otherwise

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJsonPath = resolve(__dirname, '../package.json');

// Keys that we want to remove, which are not usefull for the final package that the user consumes.
const keysToRemove = ['devDependencies', 'optionalDependencies', 'config'];
for (const key of keysToRemove) {
	delete packageJson[key];
}

writeFile(packageJsonPath, JSON.stringify(packageJson, null, '\t') + '\n', (error) => {
	if (error) throw error;
});
