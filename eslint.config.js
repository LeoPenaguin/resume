import js from "@eslint/js";
import htmlPlugin from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    name: "resume/ignores",
    ignores: ["**/dist/**", "**/node_modules/**", "**/styles.css"],
  },
  {
    name: "resume/files",
    files: ["**/*.js", "**/*.mjs"],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        localStorage: "readonly",
        getComputedStyle: "readonly",
        process: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-alert": "error",
      "no-console": "warn",
      "no-debugger": "error",
      "no-var": "error",
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "multi-line"],
      "no-implicit-coercion": "warn",
    },
  },
  {
    name: "resume/scripts",
    files: ["scripts/**/*.mjs"],
    rules: {
      "no-console": "off",
    },
  },
  {
    name: "resume/html",
    files: ["**/*.html"],
    plugins: {
      "@html-eslint": htmlPlugin,
    },
    languageOptions: {
      parser: htmlParser,
    },
    rules: {
      "@html-eslint/sort-attrs": [
        "error",
        {
          priority: [
            "id",
            "class",
            "type",
            "name",
            "href",
            "src",
            "rel",
            "target",
            "lang",
            "viewBox",
            "width",
            "height",
            "tabindex",
            "fill",
            "d",
            { pattern: "^data-", order: "alphabetically" },
            { pattern: "^aria-", order: "alphabetically" },
          ],
        },
      ],
    },
  },
  eslintConfigPrettier,
];
