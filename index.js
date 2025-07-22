import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylisticJs from '@stylistic/eslint-plugin-js';
import configPrettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import commonRules from './rules/common.js';
import stylisticRules from './rules/stylistic.js';
import typescriptRules from './rules/typescript.js';
import jestPlugin from 'eslint-plugin-jest';

const configVLAQA = {
  ignores: ['**/node_modules/**/*'],
  languageOptions: {
    globals: { ...globals.es2025, ...globals.browser, ...globals.node },
    parser: tseslint.parser,
    parserOptions: {
      createDefaultProgram: true,
      project: './tsconfig.json',
    },
  },
  files: ['**/*.{js,mjs,cjs,ts}'],
  plugins: { '@stylistic/js': stylisticJs, prettier: pluginPrettier, jest: jestPlugin },
  rules: {
    'prettier/prettier': 'error',
    ...commonRules,
    ...stylisticRules,
    ...typescriptRules,
  },
};

export default tseslint.config([
  configVLAQA,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  configPrettier,
]);
