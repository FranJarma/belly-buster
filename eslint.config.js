import js from "@eslint/js";
import globals from "globals";
import eslintPluginImport from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {ignores: ["dist"]},
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            import: eslintPluginImport,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": [
                "warn",
                {allowConstantExport: true},
            ],
            "import/order": [
                "error",
                {
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        "parent",
                        "sibling",
                        "index",
                    ],
                    pathGroups: [
                        {
                            pattern: "@**",
                            group: "internal",
                            position: "after",
                        },
                    ],
                    pathGroupsExcludedImportTypes: ["builtin"],
                    alphabetize: {order: "asc", caseInsensitive: true},
                    "newlines-between": "always",
                },
            ],
            "react/jsx-sort-props": [
                "warn",
                {
                    callbacksLast: true,
                    shorthandFirst: true,
                    noSortAlphabetically: false,
                    reservedFirst: true,
                },
            ],
        },
    }
);
