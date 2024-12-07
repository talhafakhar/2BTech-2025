import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4674B5',
            },
            backgroundColor: {
                primary: '#4674B5',
            },
            borderColor: {
                primary: '#4674B5',
            }
        },
    },
    plugins: [],
} satisfies Config;
