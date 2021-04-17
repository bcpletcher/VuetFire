module.exports = {
  root: true,
  env: {
    "node": true,
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jquery": true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    allowJs: true,
  },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/camelcase': 'off',
    "@typescript-eslint/no-explicit-any": 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'generator-star-spacing': 'off',
    'comma-dangle': 0,
    'indent': [0, 'tab'],
    'no-tabs': 0,
    'spaced-comment': 1,
    'no-undef': 1,
    'no-unused-vars': 1,
    'quotes': 0,
    "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
    // 'no-trailing-spaces': [2, {'skipBlankLines': true, 'ignoreComments': true}],
    'semi': [2, 'always'],
  }
}
