module.exports = {
  'eslint-comments/disable-enable-pair': 'off',
  'unicorn/no-abusive-eslint-disable': 'off',
  'no-case-declarations': 'off',
  curly: ['error', 'all'],
  'prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],
  'prefer-arrow-callback': 'error',
  'arrow-parens': ['error', 'as-needed'],
  'no-plusplus': 'off',
  'import/no-duplicates': 'error',
  'import/no-default-export': 'error',
  'import/prefer-default-export': 'off',
  'import/extensions': ['error', 'never', { json: 'always', css: 'always' }],
  'import/newline-after-import': 'error',
  '@typescript-eslint/indent': 'off',
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    { allowExpressions: true, allowTypedFunctionExpressions: true },
  ],
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
  'no-underscore-dangle': 'off',
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
  'import/no-extraneous-dependencies': [
    'error',
    { devDependencies: ['**/*.test.ts', '**/*.spec.ts', 'examples/**/*.ts'] },
  ],
  'arrow-body-style': ['error', 'as-needed'],
  'jsdoc/require-jsdoc': 'off',
  'jsdoc/require-description-complete-sentence': 'warn',
  'jsdoc/require-hyphen-before-param-description': 'warn',
  'jsdoc/require-param-type': 'off', // we use typescript instead
  'jsdoc/require-param': 'off',
  'jsdoc/require-returns': 'off',
  'jsdoc/require-returns-type': 'off', // we use typescript instead
  '@typescript-eslint/no-object-literal-type-assertion': 'off', // TODO: enable when https://github.com/typescript-eslint/typescript-eslint/issues/312 is fixed,
  'unicorn/prevent-abbreviations': 'off', // TODO: enable when https://github.com/sindresorhus/eslint-plugin-unicorn/issues/265 is fixed
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': ['error', 'array-simple'],
  // '@typescript-eslint/await-thenable': 'error', // TODO: this is cool but doesn't work because of bug (https://github.com/prettier/prettier-eslint/issues/201)
  '@typescript-eslint/ban-types': [
    'error',
    {
      types: {
        String: {
          message: 'Use `string` instead.',
          fixWith: 'string',
        },
        Number: {
          message: 'Use `number` instead.',
          fixWith: 'number',
        },
        Boolean: {
          message: 'Use `boolean` instead.',
          fixWith: 'boolean',
        },
        Symbol: {
          message: 'Use `symbol` instead.',
          fixWith: 'symbol',
        },
        Object: {
          message: 'Use `object` instead.',
          fixWith: 'object',
        },
        object: 'Use `{}` instead.',
        Function: 'Use a specific function type instead, like `() => void`.',

        // This one doesn't seem to be working.
        // TODO: Report it.
        any: {
          message: 'Use `unknown` instead.',
          fixWith: 'unknown',
        },
        // TODO: Enforce `undefined` over `null` here too?
      },
    },
  ],
  camelcase: 'off',
  '@typescript-eslint/camelcase': [
    'error',
    {
      properties: 'always',
      ignoreDestructuring: false,
    },
  ],
  '@typescript-eslint/class-name-casing': 'error',
  '@typescript-eslint/no-empty-interface': [
    'error',
    {
      allowSingleExtends: true,
    },
  ],
  '@typescript-eslint/member-ordering': 'error',
  '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-extraneous-class': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-require-imports': 'error',
  '@typescript-eslint/no-this-alias': [
    'error',
    {
      allowDestructuring: true,
    },
  ],
  '@typescript-eslint/no-triple-slash-reference': 'error',

  'no-unused-vars': 'off',
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/no-var-requires': 'error',

  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  // TODO: bug
  // '@typescript-eslint/no-unnecessary-qualifier': 'error',
  // '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  // '@typescript-eslint/prefer-includes': 'error',
  // '@typescript-eslint/prefer-namespace-keyword': 'error',
  // '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  // '@typescript-eslint/restrict-plus-operands': 'error',
  // '@typescript-eslint/require-array-sort-compare': 'error',
  // '@typescript-eslint/type-annotation-spacing': 'error',
  // '@typescript-eslint/prefer-regexp-exec': 'error',
  // '@typescript-eslint/unified-signatures': 'error',
  'no-useless-catch': 'error',
  quotes: ['error', 'single'],
}
