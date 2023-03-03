import child_process from 'node:child_process';
import packageJson from '../../package.json' assert { type: 'json' };
import os from 'node:os';

const version = packageJson.version;

const npmPostfixCommand = (name) => (os.platform() === 'win32' ? `${name}.cmd` : name);

const npmProc = child_process.spawn(npmPostfixCommand('pnpm'), [
	'install',
	'--save-dev',
	`../svelte-splitpanes-${version}.tgz`
]);

// npmProc.stdout.on('data', (data) => {
// 	console.log(data.toString());
// });

npmProc.stderr.on('data', (data) => {
	console.error(data.toString());
});
