import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { ignores: ["node_modules/*", ".github/*", ".vite/*", ".vscode/*"] },
  { settings: { react: { version: "detect" } } },
  { languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  { rules: { "react/react-in-jsx-scope": "off" } },
];