/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "img-grad": "linear-gradient(0deg, #482d53 0%, #1c2b39 100%)",
            },
            backgroundColor: {
                "custom-grad": "#482d53",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"], // Custom font family
                serif: ["Merriweather", "serif"],
                logo: ["Natyl", "sans-serif"], // Add custom font for logo
            },
            colors: {
                main: "#fe32fd",
                primary: "#ffffff",
                secondary: "#7EFFD9",
                base: "#ffffff",
                bgcolor: "#0A161D",
            },
            fontSize: {
                xs: "10px",
                small: "12px",
                sm: "14px",
                med: "15px",
                base: "1rem",
                lg: "18px",
                xl: "24px",
                "2xl": "28px",
                "3xl": "32px",
                "4xl": "36px",
                "5xl": "42px",
                "6xl": "48px",
                "7xl": "64px",
            },
            fontWeight: {
                normal: "300",
                medium: "400",
                bold: "700",
            },

            screens: {
                sm: "480px",
                // => @media (min-width: 640px) { ... }

                md: "768px",
                // => @media (min-width: 768px) { ... }

                lg: "1024px",
                // => @media (min-width: 1024px) { ... }

                xl: "1280px",
                // => @media (min-width: 1280px) { ... }

                "2xl": "1536px",
                // => @media (min-width: 1536px) { ... }
            },
        },
    },
    plugins: [],
};
