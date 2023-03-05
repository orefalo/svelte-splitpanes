import { readFileSync } from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'url';
import packageJson from '../../package.json' assert { type: 'json' };
import exampleTempPackageJson from '../../example-temp/package.json' assert { type: 'json' };

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const exampleTempDir = path.resolve(__dirname, '../../example-temp');

const version = packageJson.version;
const fileToInstall = path.resolve(exampleTempDir, `../package/svelte-splitpanes-${version}.tgz`);

const packageInstallationSource = exampleTempPackageJson['devDependencies']['svelte-splitpanes'];
const packageInstallationSourceExpected = `file:${fileToInstall.replaceAll('\\', '/')}`;
if (packageInstallationSource !== packageInstallationSourceExpected) {
	throw (
		"Error: Example temp package installation wasn't successful! Instead, the value is " +
		packageInstallationSource +
		' but was expected to be: ' +
		packageInstallationSourceExpected
	);
}

const fileDirPath = path.dirname(fileURLToPath(import.meta.url));

const htmlFilePath = path.resolve(fileDirPath, '../../example-temp/demo/index.html');
const htmlContent = readFileSync(htmlFilePath, { encoding: 'utf-8' });

// Assertations

assert(htmlContent.search('Welcome to Svelte-Splitpanes Minimal Demo!') >= 0, 'check head title');

assert(htmlContent.search('First Pane') >= 0, 'check first pane');

assert(htmlContent.search('Second Pane') >= 0, 'check second pane');
