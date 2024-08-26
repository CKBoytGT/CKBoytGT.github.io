import globals from "globals";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { ignores: ["node_modules/*", ".github/*", ".vite/*", ".vscode/*"] },
  { settings: { react: { version: "detect" } } },
  { languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  { rules: { "react/react-in-jsx-scope": "off" } },
];
