import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { i18nAlly } from "vite-plugin-i18n-ally";

import * as node_fs from "fs";
import path from "path";

function get_paths_from_tsconfig() {
  const tsconfig_s = node_fs
    .readFileSync("./tsconfig.json", "utf-8")
    .replace(/\/\/.*$/gm, "")
    .replaceAll("/*", ""); // Removing comments
  const tsconfig = JSON.parse(tsconfig_s);
  const aliases = {};
  for (const [key, value] of Object.entries(tsconfig.compilerOptions.paths)) {
    aliases[key] = path.resolve("./" + value?.[0]);
  }
  return aliases;
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    i18nAlly({
      root: "./src/",
      localesPaths: ["./locales"],
      pathMatcher: "{locale}.{ext}",
      useVscodeI18nAllyConfig: true,
    }),
  ],
  base: "/sakha-gamedev/",
  resolve: { alias: get_paths_from_tsconfig() },
});
