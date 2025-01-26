const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-ubuntu-sans-mono)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: "var(--color-primary)",
        default: "var(--color-default)",
      },
      maxWidth: {
        main: "var(--max-w-main)",
      },
    },
  },
};
