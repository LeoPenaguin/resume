// eslint.config.js
import pluginVue from "eslint-plugin-vue";

export default [
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: pluginVue.parser || "vue-eslint-parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      vue: pluginVue,
    },
    rules: {
      // Vue 3 règles de base
      "vue/component-name-in-template-casing": ["error", "kebab-case"],
      "vue/html-button-has-type": "error",
      "vue/no-duplicate-attr-inheritance": "error",
      "vue/no-empty-component-block": "error",
      "vue/no-multiple-objects-in-class": "error",
      "vue/no-template-target-blank": "error",
      "vue/no-unused-refs": "error",
      "vue/no-useless-mustaches": "error",
      "vue/no-useless-v-bind": "error",
      "vue/padding-line-between-blocks": "error",
      "vue/prefer-separate-static-class": "error",
      "vue/prefer-true-attribute-shorthand": "error",

      // Règles générales
      "no-console": "warn",
      "no-debugger": "error",
      "no-alert": "error",
      "no-var": "error",
      "prefer-const": "error",
      "no-undef": "off",
    },
  },
  {
    ignores: ["dist/", "node_modules/", "*.config.*"],
  },
];
