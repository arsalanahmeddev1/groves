/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/theme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        themeGreen: "#283606",
        themeBlack: "#0F1500",
        midBrown: "#AD8749",
        lightBrown: "#DCBB75", 
      },
      backgroundImage: {
        "theme-gradient": "linear-gradient(97deg, #283606, #0F1500)",
      },
    },
    fontFamily: {
      inter: ["var(--font-inter)"],
      playfair: ["var(--font-pf)"],
    },
  },
  plugins: [nextui()],

};
