import pluginVue from "eslint-plugin-vue";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";
import {
  configureVueProject,
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";

configureVueProject({
  tsSyntaxInTemplates: true,
});

export default defineConfigWithVueTs(
  {
    name: "resume/ignores",
    ignores: ["**/dist/**", "**/node_modules/**", "**/coverage/**"],
  },
  {
    name: "resume/files",
    files: ["**/*.{ts,vue}"],
  },
  pluginVue.configs["flat/recommended"],
  vueTsConfigs.recommended,
  {
    name: "resume/rules",
    rules: {
      "no-alert": "error",
      "no-console": "warn",
      "no-debugger": "error",
      "prefer-const": "error",
      "vue/component-name-in-template-casing": ["error", "kebab-case"],
      "vue/html-button-has-type": "error",
      "vue/no-template-target-blank": "error",
    },
  },
  skipFormatting,
);
