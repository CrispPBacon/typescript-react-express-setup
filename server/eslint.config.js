import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.{ts,js,mjs,cjs}'],
    plugins: { js, eslintPluginPrettier },
    extends: [
      tseslint.configs.recommended,
      eslintConfigPrettier,
      js.configs.recommended
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      // 'no-console': 'warn',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
]);
