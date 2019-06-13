module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:jsdoc/recommended',
    'plugin:sonarjs/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'sonarjs', 'promise', 'import', 'jsdoc'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  rules: require('./src/defaultRules'),
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: '**/*.spec.ts',
      // TODO extend jest config
      // extends:['./jest']
      env: { jest: true }, // remove this
    },
    {
      files: '**/*.test.ts',
      // TODO extend jest config
      // extends:['./jest']
      env: { jest: true }, // remove this
    },
  ],
}
