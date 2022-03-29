/* eslint-env-node */

// yarn add -D eslint prettier typescript eslint-config-airbnb-typescript-prettier eslint-plugin-import eslint-import-resolver-typescript
module.exports = {
  extends: ['eslint-config-airbnb-typescript-prettier', 'plugin:import/recommended', 'plugin:import/typescript', 'next'], // https://github.com/toshi-toma/eslint-config-airbnb-typescript-prettier https://github.com/airbnb/javascript
  // Configure the import plugin to support TypeScript https://github.com/alexgorbatchev/eslint-import-resolver-typescript
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    // REMEMBER TO RESTART `yarn dev` or `npm run watch` WHENEVER EDITING THESE RULES!
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // ------------------------------
    // Add rules that allow Prettier and ESLint to work together without conflicts (https://stackoverflow.com/a/64166241/):
    indent: ['warn', 2, { SwitchCase: 1 }],
    'no-tabs': ['warn', { allowIndentationTabs: true }],
    'max-len': [
      'warn',
      {
        code: 180,
        tabWidth: 2,
        comments: 180,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    // ------------------------------
    'no-use-before-define': 'off', // We must disable the base rule (since it can report incorrect errors) and replace it (https://stackoverflow.com/a/64024916/)
    '@typescript-eslint/no-use-before-define': ['error'],
    'max-lines-per-function': ['warn', { max: 30, skipBlankLines: true, skipComments: true }], // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines': ['warn', { max: 300, skipBlankLines: true, skipComments: true }], // https://eslint.org/docs/rules/max-lines
    'no-console': 'off', // Console logging is super helpful for development, and we can have our build process strip out all of those statements for production.
    'no-else-return': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'import/order': ['warn', { 'newlines-between': 'always' }], // Keep imports sorted alphabetically and add new lines between different groups of imports https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
  },
  reportUnusedDisableDirectives: true, // https://eslint.org/docs/user-guide/configuring#report-unused-eslint-disable-comments
};
