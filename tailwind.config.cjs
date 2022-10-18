/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,svelte}",
        ],
    theme: {
        extend: {
            colors: {
                'primary': 'var(--color-primary)',
                'on-primary': 'var(--color-on-primary)',
                'primary-container': 'var(--color-primary-container)',
                'on-primary-container': 'var(--color-on-primary-container)',
                'secondary': 'var(--color-secondary)',
                'on-secondary': 'var(--color-on-secondary)',
                'secondary-container': 'var(--color-secondary-container)',
                'on-secondary-container': 'var(--color-on-secondary-container)',
                'tertiary': 'var(--color-tertiary)',
                'on-tertiary': 'var(--color-on-tertiary)',
                'tertiary-container': 'var(--color-tertiary-container)',
                'on-tertiary-container': 'var(--color-on-tertiary-container)',
                'error': 'var(--color-error)',
                'error-container': 'var(--color-error-container)',
                'on-error': 'var(--color-on-error)',
                'on-error-container': 'var(--color-on-error-container)',
                'background': 'var(--color-background)',
                'on-background': 'var(--color-on-background)',
                'surface': 'var(--color-surface)',
                'on-surface': 'var(--color-on-surface)',
                'surface-variant': 'var(--color-surface-variant)',
                'on-surface-variant': 'var(--color-on-surface-variant)',
                'outline': 'var(--color-outline)',
                'outline-variant': 'var(--color-outline-variant)',
                'inverse-on-surface': 'var(--color-inverse-on-surface)',
                'inverse-surface': 'var(--color-inverse-surface)',
                'inverse-primary': 'var(--color-inverse-primary)',
                'shadow': 'var(--color-shadow)',
                'surface-tint': 'var(--color-surface-tint)',
                'surface-tint-color': 'var(--color-surface-tint-color)',
            }
        },
    },
    plugins: [],
}