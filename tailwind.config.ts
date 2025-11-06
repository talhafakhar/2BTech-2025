/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0F57BC",
                secondary: "#bf1e2e",
            },
            maxWidth:{
                '8xl': '90rem',
            },
            fontFamily: {
                syne: ["Syne", "sans-serif"],
            },
            animation: {
                scroll: 'scroll 2000s linear infinite',
            },
            keyframes: {
                'scroll': {
                    '0%': {transform: 'translateX(0)'},
                    '100%': {transform: 'translateX(-50%)'}
                },
            },
        },
    },
    plugins: [],
}
