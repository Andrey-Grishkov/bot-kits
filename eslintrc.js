module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  root: true,
  extends: ["airbnb", "prettier", "plugin:mdx/recommended"],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".d.ts"],
      },
    },
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    camelcase: 0,
    "consistent-return": 0,
    //
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-props-no-spreading": 0,
    "react/no-unescaped-entities": 1,
    "react/destructuring-assignment": 1,
    "react/require-default-props": 0,
    "react/button-has-type": 1,
    "react/prop-types": 0,
    "react/no-array-index-key": 1,
    //
    "no-console": [1, { allow: ["warn", "error", "info"] }],
    "no-nested-ternary": 1,
    "no-param-reassign": [2, { props: false }],
    "no-shadow": 0,
    "no-unused-vars": 0,
    //
    "@typescript-eslint/no-shadow": [1],
    "@typescript-eslint/no-unused-vars": [2],

    //
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 1,
    "import/no-named-as-default": 0,
    "import/no-unresolved": [2, { ignore: ["@"] }],
    "import/prefer-default-export": 0,
    "import/no-cycle": 0,
  },
  overrides: [
    {
      files: ["*.mdx"],
      extends: ["plugin:mdx/overrides"],
    },
  ],
};
