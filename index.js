module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'class-methods-use-this': 'off'
  },
}
