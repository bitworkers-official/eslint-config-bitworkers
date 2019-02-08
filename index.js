module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'prefer-object-spread': 'error',
    'guard-for-in': 'off',
    'unicorn/no-process-exit': 'off',
    'no-console': 'off',
    'unicorn/filename-case': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
}
