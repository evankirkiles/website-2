import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

/* Custom ESLint configuration for use with Next.js apps. */
export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.strict,
  ...nextVitals,
  {
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
]);
