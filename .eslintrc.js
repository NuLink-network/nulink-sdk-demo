module.exports = {
  root: true,
  plugins: ["@typescript-eslint", "import"],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: false,
    },
  },
  extends: ["eslint:recommended", "prettier"],
  rules: {
    "import/first": "error",
    "import/no-absolute-path": "error",
    "import/no-amd": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-default": "warn",
    "import/no-self-import": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.js", "**/*.test.ts"],
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/triple-slash-reference": "off",
		"@typescript-eslint/linebreak-style": 0,
        "no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTernary: true,
          },
        ],
        "@typescript-eslint/no-empty-function": "off",
        "max-statements": ["warn", 200],
        "no-empty": "off",
        "no-var": "off",
        "no-unused-vars": "off",
		"linebreak-style": [ 0, "after", { "overrides": {
			"?": "ignore",
			":": "ignore",
			"+": "ignore",
			"|": "ignore",
			"||": "ignore",
		} } ],
        "no-use-before-define": 0,
        "no-empty-pattern": 0,
		"no-unsafe-finally": 0,
      },
    },
  ],
};
