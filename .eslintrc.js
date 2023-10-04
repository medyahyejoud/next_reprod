const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/react",
    "@vercel/style-guide/eslint/next",
  ].map(require.resolve),
  parserOptions: {
    sourceType: "module",
    project: "tsconfig.json",
    tsconfigRootDir: "./",
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", ".next/"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    "eslint-comments/require-description": "off",
    "import/order": "off",
    "import/no-default-export": "off",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/unbound-method": ["off", { ignoreStatic: true }],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
};
