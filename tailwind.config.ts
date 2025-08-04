import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx,css}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                /* region shadcn-ui colors*/
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                /* endregion */

                /* region custom colors */
                primary: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#2563eb",
                    600: "#1d4ed8",
                    700: "#1e40af",
                    800: "#1e3a8a",
                    900: "#1e3a8a",
                    950: "#172554",
                },
                secondary: {
                    50: "#f0fdfa",
                    100: "#ccfbf1",
                    200: "#99f6e4",
                    300: "#5eead4",
                    400: "#2dd4bf",
                    500: "#14b8a6",
                    600: "#0d9488",
                    700: "#0f766e",
                    800: "#115e59",
                    900: "#134e4a",
                    950: "#042f2e",
                },
                "dark-bg": "#0f172a",
                "dark-bg-secondary": "#1e293b",
                "dark-bg-tertiary": "#334155",
                "dark-text": "#f8fafc",
                "dark-text-secondary": "#cbd5e1",
                "dark-text-muted": "#94a3b8",
                "dark-border": "#475569",
                /* endregion */
            },
        },
    },
    plugins: [],
}

export default config
