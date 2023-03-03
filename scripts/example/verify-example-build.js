import { readFileSync } from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'url';

const fileDirPath = path.dirname(fileURLToPath(import.meta.url));

const htmlFilePath = path.resolve(fileDirPath, '../../example/demo/index.html');
const htmlContent = readFileSync(htmlFilePath, { encoding: 'utf-8' });

// Assertations

assert(htmlContent.search('Welcome to Svelte-Splitpanes Minimal Demo!') >= 0, 'check head title');

assert(htmlContent.search('First Pane') >= 0, 'check first pane');

assert(htmlContent.search('Second Pane') >= 0, 'check second pane');
