module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react-refresh', '@stylexjs'],
  extends: ['plugin:@tanstack/eslint-plugin-query/recommended'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@stylexjs/valid-styles': ['error', { ...options }],
  },
};
