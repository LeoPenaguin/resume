import js from "@eslint/js";

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
      "prefer-const": "error",
    },
  },
  {
    name: "resume/scripts",
    files: ["scripts/**/*.mjs"],
    rules: {
      "no-console": "off",
    },
  },
];
