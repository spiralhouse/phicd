/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            borderColor: {
                border: 'var(--color-border)',
            },
            outlineColor: {
                ring: 'var(--color-ring)',
            },
            backgroundColor: {
                background: 'var(--color-background)',
                card: 'var(--color-card)',
                popover: 'var(--color-popover)',
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                muted: 'var(--color-muted)',
                accent: 'var(--color-accent)',
                destructive: 'var(--color-destructive)',
            },
            textColor: {
                foreground: 'var(--color-foreground)',
                'card-foreground': 'var(--color-card-foreground)',
                'popover-foreground': 'var(--color-popover-foreground)',
                'primary-foreground': 'var(--color-primary-foreground)',
                'secondary-foreground': 'var(--color-secondary-foreground)',
                'muted-foreground': 'var(--color-muted-foreground)',
                'accent-foreground': 'var(--color-accent-foreground)',
            }
        },
    },
    plugins: [],
} 