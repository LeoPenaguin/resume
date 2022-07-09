/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
  ],
  rules: {
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "@typescript-eslint/no-unused-vars": ["error"],
  },
};
