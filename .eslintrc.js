module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "@react-native-community",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    indent: ["warning", 2, { SwitchCase: 2 }],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
