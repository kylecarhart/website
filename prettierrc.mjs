/** @type {import("prettier").Config} */
export default {
  plugins: [],
  tailwindConfig: "./tailwind.config.js",
  overrides: [
    {
      plugins: ["prettier-plugin-astro"],
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
