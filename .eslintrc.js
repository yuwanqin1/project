module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }]
    // "indent": ["error", 4]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
