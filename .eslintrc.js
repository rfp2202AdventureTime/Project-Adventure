module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {},
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.js',
      },
      alias: {
        map: [
          ['@Components', './client/src/components'],
          ['@Contexts', './client/src/contexts'],
        ],
      },
      // There's a bug with the resolver settings.
      // eslint-disable-next-line no-dupe-keys
      webpack: {
        config: './webpack.config.js',
      },
    },
  },
};
