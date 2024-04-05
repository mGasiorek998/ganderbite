import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPrettierPlugin from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat();

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  ...compat.config({
    plugins: ['jsx-a11y', 'import'],
    extends: ['plugin:tailwindcss/recommended', 'plugin:jsx-a11y/recommended', 'plugin:import/recommended'],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/migration-from-tailwind-2': 'off',
      'tailwindcss/classnames-order': 'off',
      'import/no-unresolved': 'off',
      'import/order': [
        'error',
        {
          groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object', 'type'],
        },
      ],
    },
  }),
  eslintPrettierPlugin,
);
