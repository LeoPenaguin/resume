/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // Vue 3 règles strictes
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    "vue/custom-event-name-casing": ["error", "camelCase"],
    "vue/html-button-has-type": ["error"],
    "vue/no-boolean-default": ["error"],
    "vue/no-duplicate-attr-inheritance": ["error"],
    "vue/no-empty-component-block": ["error"],
    "vue/no-multiple-objects-in-class": ["error"],
    "vue/no-potential-component-option-typo": ["error"],
    "vue/no-template-target-blank": ["error"],
    "vue/no-unused-properties": ["error"],
    "vue/no-unused-refs": ["error"],
    "vue/no-useless-mustaches": ["error"],
    "vue/no-useless-v-bind": ["error"],
    "vue/padding-line-between-blocks": ["error"],
    "vue/prefer-separate-static-class": ["error"],
    "vue/prefer-true-attribute-shorthand": ["error"],
    "vue/v-for-delimiter-style": ["error", "in"],

    // Règles générales strictes
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
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "no-undef": "off" // Vue 3 Composition API globals
      }
    }
  ]
};
