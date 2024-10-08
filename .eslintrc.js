module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    camelcase: 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 90,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false
      }
    ]
  }
}
