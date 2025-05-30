module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  ignorePatterns: [
    '.eslintrc.js',
    '.prettierrc.js',
    'commitlint.config.js'
  ],
  plugins: [
    "@typescript-eslint",
    "prettier",
  ],
  extends: [
    "plugin:prettier/recommended",
    require.resolve("eslint-config-prettier"),
    "@xrdev_38/eslint-config"
  ]
};
