import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

const __dirname = import.meta.dirname;

import pkg from 'eslint-gitignore';
const { readGitignoreFiles } = pkg;

function removeDuplicates(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs['flat/recommended'],
  prettier,
  ...svelte.configs['flat/prettier'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        NodeJS: true
      }
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser
      }
    }
  },
  {
    ignores: removeDuplicates([
      ...readGitignoreFiles({ cwd: __dirname }),
      'build/',
      '**/.svelte-kit/',
      'dist/',
      'package/',
      '**/_app/'
    ])
  },
  {
    rules: {
      // eqeqeq: 'error',
      'svelte/require-each-key': 'off',
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
      '@typescript-eslint/no-explicit-any': 'off',
      // const _a = 'unused, with underscore, no warning'
      // const b = 'unused, no underscore, warning'
      // note you must disable the base rule
      // as it can report incorrect errors
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn', // or "error"
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      // We need to use {@html} in the demo site for code highlight
      'svelte/no-at-html-tags': 'off',
      'svelte/no-navigation-without-resolve': 'off',
      // css is global and incorrectly reported as unused by the linter
      'svelte/valid-compile': 'off',
      '@typescript-eslint/ban-ts-comment': 'off'
    }
  }
];
