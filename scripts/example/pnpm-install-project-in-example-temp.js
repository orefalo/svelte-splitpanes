import child_process from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import packageJson from '../../package.json' assert { type: 'json' };

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const exampleTempDir = path.resolve(__dirname, '../../example-temp');

const version = packageJson.version;
const fileToInstall = path.resolve(exampleTempDir, `../package/svelte-splitpanes-${version}.tgz`);

console.log(`Installing with the file package: ${fileToInstall}`);

const npmPostfixCommand = (name) => (os.platform() === 'win32' ? `${name}.cmd` : name);

const npmProc = child_process.spawn(npmPostfixCommand('pnpm'), ['install', '--save-dev', fileToInstall], {
	cwd: exampleTempDir
});

npmProc.stdout.on('data', (data) => {
	console.log(data.toString());
});

npmProc.stderr.on('data', (data) => {
	console.error(data.toString());
});
