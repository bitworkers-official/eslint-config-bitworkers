module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'promise', 'import'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    curly: ['error', 'all'],
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'import/no-duplicates': 'error',
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'never'],
    'import/newline-after-import': 'error',
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
    'no-use-before-define': 'off', // already in typescript-eslint
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ClassDeclaration',
        message: 'Classes are not allowed.',
      },
      {
        selector: 'WithStatement',
        message: 'With statements are not allowed.',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
