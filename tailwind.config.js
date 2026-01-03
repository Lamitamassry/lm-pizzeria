/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1a1a1a',
                    dark: '#0f0f0f',
                },
                accent: {
                    rose: '#ff6b9d',
                    pink: '#ff8fb3',
                    gold: '#d4a574',
                },
                charcoal: {
                    DEFAULT: '#2d2d2d',
                    light: '#3a3a3a',
                    dark: '#1f1f1f',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
