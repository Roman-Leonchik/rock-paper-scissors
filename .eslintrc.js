module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    env: {
        node: true,
        jest: true,
    },
    settings: {
        react: {
            version: "detect",
        },
        node: {
            paths: "packages/*/src",
            extensions: [".js", ".ts", ".tsx"],
        },
        typescript: {
            alwaysTryTypes: true,
            project: [
                path.resolve(__dirname, ".tsconfig.json"),
            ],
        },
    },
    extends: [
        "prettier",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:jsx-a11y/recommended",
        "plugin:eslint-comments/recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/no-var-requires": "off",
        "react/prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
    },
}
