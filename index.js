module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:jsdoc/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'promise', 'import', 'jsdoc'],
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
    'prefer-arrow-callback': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'import/no-duplicates': 'error',
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'never', { json: 'always', css: 'always' }],
    'import/newline-after-import': 'error',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
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
    'object-shorthand': ['error', 'always'],
    'arrow-body-style': ['error', 'as-needed'],
    'jsdoc/require-description-complete-sentence': 'warn',
    'jsdoc/require-hyphen-before-param-description': 'warn',
    'jsdoc/require-param-type': 'off', // we use typescript instead
    'jsdoc/require-param': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-returns-type': 'off', // we use typescript instead
    '@typescript-eslint/no-object-literal-type-assertion': 'off', // TODO: enable when https://github.com/typescript-eslint/typescript-eslint/issues/312 is fixed
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
