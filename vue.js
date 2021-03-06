module.exports = {
  env: {
    node: true,
  },
  plugins: ['vue-a11y'],
  extends: [
    'prettier',
    'prettier/@typescript-eslint',
    // './index.js',
    '@vue/typescript',
    'plugin:vue/recommended',
    'plugin:vue-a11y/base',
  ],
  rules: {
    // ...require('./src/defaultRules'),
    // eslint plugin vue rules
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': ['error', '1tbs'],
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: true,
      },
    ],
    'vue/eqeqeq': 'error',
    'vue/key-spacing': ['error', { beforeColon: false }],
    // 'vue/keyword-spacing': ['error', { before: true }],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['vue'],
      },
    ],
    // 'vue/no-boolean-default': ['error', 'no-default|default-false'],
    // 'vue/no-deprecated-scope-attribute': 'error',
    // 'vue/no-empty-pattern': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/require-direct-export': 'error',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
    'vue/v-on-function-call': 'error',

    // other rules
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  overrides: [
    // {
    //   files: '**/*.vue',
    //   rules: {
    //     'import/no-default-export': 'off',
    //   },
    // },
    // {
    //   files: '**/store.ts',
    //   rules: {
    //     'import/no-default-export': 'off',
    //   },
    // },
    // {
    //   files: '**/store.js',
    //   rules: {
    //     'import/no-default-export': 'off',
    //   },
    // },
    // {
    //   files: '**/router.ts',
    //   rules: {
    //     'import/no-default-export': 'off',
    //   },
    // },
    // {
    //   files: '**/router.js',
    //   rules: {
    //     'import/no-default-export': 'off',
    //   },
    // },
  ],
}
