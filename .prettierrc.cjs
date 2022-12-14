module.exports = {
    printWidth: 120,
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    plugins: [require.resolve("prettier-plugin-svelte"), require.resolve("prettier-plugin-tailwindcss")],
    pluginSearchDirs: false,
    overrides: [
        {
            files: "*.svelte",
            options: { parser: "svelte" },
        },
    ],
    htmlWhitespaceSensitivity: "strict", // TODO: Decide which setting is better
};
