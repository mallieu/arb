module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    rules: {
        "prettier/prettier": "error",
        "no-unused-vars": "warn",
    },
    overrides: [
        {
            files: ["*.html"],
            extends: ["plugin:html/recommended"],
        },
        {
            files: ["*.scss"],
            extends: ["stylelint-config-standard"],
            plugins: ["stylelint-scss"],
            rules: {},
        },
    ],
}
