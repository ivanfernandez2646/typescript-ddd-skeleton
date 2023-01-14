// @ts-check

import { includeIgnoreFile } from '@eslint/compat';
import eslint from '@eslint/js';
import path from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default [
  ...tseslint.config(
    {
      ...eslint.configs.recommended,
      ignores: ['**/dist/'],
      rules: {
        ...eslint.configs.recommended.rules,
        '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }]
      }
    },
    tseslint.configs.recommended
  ),
  includeIgnoreFile(gitignorePath),
  { ignores: ['*cucumber.js', '*jest*.js'] }
];
