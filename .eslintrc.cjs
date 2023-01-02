module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:markdown/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		'no-useless-escape': 'off'
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	globals: {
		NodeJS: true
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
