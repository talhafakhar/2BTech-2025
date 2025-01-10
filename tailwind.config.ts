import type {Config} from "tailwindcss";
import {content, plugin} from 'flowbite-react/tailwind'
import typography from "@tailwindcss/typography";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        content(),
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4674B5',
            },
            backgroundColor: {
                primary: '#4674B5',
                transparent: 'rgba(0,0,0,0)'
            },
            borderColor: {
                primary: '#4674B5',
            },
            backgroundImage: {
                'navbar-gradient': 'linear-gradient(to right, rgba(255,255,255,0.8) 5%, rgba(0,0,0,.2) 25%,rgba(0,0,0,.2) 75%, rgba(255,255,255,0.8) 95%)',
                'gradient-text': 'linear-gradient(90deg,#427DF4 10%, white 60%)',
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 25s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: {transform: 'translateX(0)'},
                    to: {transform: 'translateX(-100%)'},
                }
            }
        },
    },
    plugins: [
        typography,
        plugin(),
    ],
} satisfies Config;
