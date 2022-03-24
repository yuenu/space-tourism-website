module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier'
  ],
  env: {
    node: true,
    mocha: true,
    es6: true
  },
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'object-curly-spacing': ['error', 'always'],
    // "react/jsx-curly-spacing": ["error", {"when": "always"}],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off', // Can use JSX without import React
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/anchor-is-valid': 'off', // Have href attribute is 「 not 」 required on an anchor (<a>), so Link can use (<Link> will generates href attribute).
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/member-delimiter-style': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-use-before-define': 'error',
    'no-console': 'off',
    'import/no-unresolved': 'off'
  }
}
