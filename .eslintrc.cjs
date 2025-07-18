/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  rules: {
    // Règles générales strictes et utiles
    "no-console": ["warn"],
    "no-debugger": ["error"],
    "no-alert": ["error"],
    "no-var": ["error"],
    "prefer-const": ["error"],
    "prefer-arrow-callback": ["error"],
    "object-shorthand": ["error"],
    "prefer-template": ["error"],
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
    "eol-last": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "quotes": ["error", "double", { "avoidEscape": true }],
    "semi": ["error", "always"],
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "no-duplicate-imports": ["error"],
    "no-useless-return": ["error"],
    "no-useless-concat": ["error"],
    "prefer-destructuring": ["error", { "array": false, "object": true }],
    "array-callback-return": ["error"],
    "consistent-return": ["error"],
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "no-undef": "off", // Vue 3 Composition API globals
        "no-unused-vars": "off", // Vue reactive vars can appear unused
      }
    }
  ]
};
