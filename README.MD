**Custom ESLint and Prettier configuration for personal use.**

This package provides a pre-configured setup for ESLint and Prettier,
aiming to streamline formatting and linting across your projects with minimal setup.

---

## Installation

```bash
npm i -D eslint-prettier-vlaqa
```

Make sure you have the required peer dependencies installed:

```bash
npm i -D eslint prettier @stylistic/eslint-plugin-js typescript-eslint eslint-config-prettier eslint-plugin-prettier globals @eslint/js
```

## Usage

```ts
// eslint.config.{js,mjs}
import { defineConfig } from 'eslint/config';
import config from 'eslint-prettier-vlaqa';

export default defineConfig([
  {
    extends: [config],

    // add or override predefined rules
    rules: {
      'no-unused-vars': 'warn',
    },
    files: ['**/*.js'],
  },
]);
```

```ts
// prettier.config.{js,mjs}
import config from 'eslint-prettier-vlaqa/prettier.config.js';

export default {
  ...config,

  // add or override predefined rules
  singleQuote: false,
};
```
