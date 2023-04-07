module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['prettier', 'standard-with-typescript'],
  ignorePatterns: ['dist'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'comma-dangle': 0,
    semi: 0,
  },
};
