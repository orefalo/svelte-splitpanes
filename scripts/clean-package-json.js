import { writeFile } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

import packageJson from '../package/package.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJsonPath = resolve(__dirname, '../package/package.json');

// Keys that we want to remove, which are not usefull for the final package that the user consumes,
//  in addition to what `svelte-package` removes.
const keysToRemove = ['devDependencies', 'optionalDependencies', 'config'];

for (const key of keysToRemove) {
	delete packageJson[key];
}

writeFile(packageJsonPath, JSON.stringify(packageJson, null, '\t'), (error) => {
	if (error) throw error;
});
