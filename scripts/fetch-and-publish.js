import { exit } from 'node:process';
import child_process from 'node:child_process';
import os from 'node:os';

if (process.argv.length < 3) {
	console.error("Error: This script must be called with a parameter VERSION");
	exit(1);
}

const version = process.argv[process.argv.length - 1];

/**
 * 
 * @param {string} name 
 * @returns 
 */
const npmPostfixCommand = (name) => (os.platform() === 'win32' ? `${name}.cmd` : name);

const npmProc = child_process.spawn(npmPostfixCommand('npm'), [
	'publish',
	`https://github.com/orefalo/svelte-splitpanes/releases/download/v${version}/svelte-splitpanes-${version}.tgz`,
	'--access',
	'public'
]);

npmProc.stdout.on('data', (data) => {
	console.log(data.toString());
});

npmProc.stderr.on('data', (data) => {
	console.error(data.toString());
});