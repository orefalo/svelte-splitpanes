import child_process from 'node:child_process';
import os from 'node:os';
import packageJson from '../package.json' assert { type: 'json' };

if (process.argv.length < 3) {
	console.error('Usage: fetch-and-publish <NPM_OTP>');
	process.exit(1);
}

const otp = process.argv[process.argv.length - 1];
const version = packageJson.version;

const npmPostfixCommand = (name) => (os.platform() === 'win32' ? `${name}.cmd` : name);

const npmProc = child_process.spawn(npmPostfixCommand('npm'), [
	'publish',
	`https://github.com/orefalo/svelte-splitpanes/releases/download/v${version}/svelte-splitpanes-${version}.tgz`,
	'--access',
	'public',
	'--otp',
	otp
]);

npmProc.stdout.on('data', (data) => {
	console.log(data.toString());
});

npmProc.stderr.on('data', (data) => {
	console.error(data.toString());
});
