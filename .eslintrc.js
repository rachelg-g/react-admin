// .eslintrc.js
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks", "import"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {
    "semi": ["error", "never"],
    "no-empty-pattern": "off",
    "no-prototype-builtins": "off",
    "react/jsx-key": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": 1,
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
  },
};