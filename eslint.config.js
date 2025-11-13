// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  // Customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
    semi: false,
    jsx: true
  },

  // TypeScript and Vue are auto-detected
  typescript: true,
  vue: true,

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,

  // Disable markdown linting
  markdown: false,

  // Ignore patterns
  ignorePatterns: [
    '**/dist',
    '**/node_modules',
    '**/.nuxt',
    '**/.output',
    '**/public',
    '**/*.md',
    'models/*.ts',
    'models/**/*.js',
    'models/**/*.d.ts',
    'packages/colorffy-ui/scripts/**'
  ],

  // Eslint rules
  rules: {
    'style/comma-dangle': ['error', 'never'],
    'style/brace-style': ['error', '1tbs'],
    'node/prefer-global/process': ['off'],
    'no-console': [
      'error',
      { allow: ['log'] }
    ],
    // Allow unused vars that start with underscore
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ]
  }
})
