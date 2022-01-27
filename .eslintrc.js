module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js'] },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
}
