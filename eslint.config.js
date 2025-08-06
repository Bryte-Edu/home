import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";
import { defineConfigWithVueTs, vueTsConfigs, vueTsEslintConfigm } from "@vue/eslint-config-typescript";
import { defineConfigWithVueTs } from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
  },

  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },

  ...pluginVue.configs["flat/essential"],
  ...defineConfigWithVueTs(vueTsConfigs),
  skipFormatting,
];
