const fs = require('fs')
const path = require('path')

const internalImportsNames = fs
  .readdirSync(path.resolve('./src'), {
    withFileTypes: true,
  })
  .filter(resource => resource.isDirectory())
  .map(resource => resource.name)
  .concat('e2e')
  .concat('testUtils')

const internalImportsRegex = `^(${internalImportsNames.join('|')})?($|(/.+))`

const isCI = process.env.CI
const isPrecommit = process.env.PRECOMMIT
const isStrict = isCI || isPrecommit

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'import', 'react', 'jsx-a11y', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-console': [isStrict ? 'error' : 'warn', { allow: ['warn', 'error'] }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-duplicate-imports': ['error'],
    'no-unused-vars': 'off',
    'no-debugger': isStrict ? 'error' : 'warn',
    'no-constant-condition': isStrict ? 'error' : 'warn',
    'object-shorthand': [isStrict ? 'error' : 'warn', 'always'],
    '@typescript-eslint/no-unused-vars': [
      isStrict ? 'error' : 'warn',
      {
        argsIgnorePattern: '^_',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          balanced: true,
        },
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      isStrict ? 'error' : 'warn',
      {
        additionalHooks: '(useAsync|useAsyncFn)', // react-use hooks with deps
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['.*'], // Forbid relative imports
          },
          {
            group: ['packages/*', '@wpp-open/core/*'],
            message: 'Please, use "@wpp-open/core"',
          },
        ],
      },
    ],
    'import/newline-after-import': [
      'error',
      {
        count: 1,
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'index'],
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/prefer-enum-initializers': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/self-closing-comp': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
  },
  overrides: [
    {
      files: ['packages/**/*'],
      rules: {
        'no-restricted-imports': 'off',
      },
    },
    {
      files: ['e2e/**/*'],
      rules: {
        'no-empty-pattern': 'off',
        'no-restricted-syntax': [
          isStrict ? 'error' : 'warn',
          {
            selector: 'Literal[value=/\\[class\\*=/i]',
            message: 'Declare locator as .class_name',
          },
          {
            selector: '[name=only]',
            message: 'Please, do not focus tests!',
          },
          {
            selector: '[name=pause]',
            message: 'Please, do not pause tests!',
          },
        ],
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: ['field', 'constructor', ['get', 'set'], 'method'],
          },
        ],
      },
    },
  ],
  settings: {
    'import/internal-regex': internalImportsRegex,
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules', 'dist', 'public', 'packages/**/lib', 'e2e/results'],
}
