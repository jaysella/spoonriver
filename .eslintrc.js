module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: [
    "react-app",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: [],
  settings: {
    react: {
      version: "detect",
    },
  },
  // add your custom rules here
  rules: {
    "react/prop-types": 1,
  },
}
