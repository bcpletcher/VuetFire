module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    commonjs: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "linebreak-style": 0,
    "require-jsdoc": 0,
    "max-len": 'off',
    "indent": [0, 'tab'],
    'no-tabs': 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
    "quotes": 0,
    'semi': [2, 'always'],
  },
};
