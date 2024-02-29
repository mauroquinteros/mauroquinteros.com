/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        turquoise: {
          50: "#f0fdfb",
          100: "#ccfbf5",
          200: "#99f6ea",
          300: "#5eead8",
          400: "#2dd4bf",
          500: "#14b8a3",
          600: "#0d9483",
          700: "#0f7669",
          800: "#115e54",
          900: "#134e47",
          950: "#042f2a",
        },
        blueribbon: {
          50: "#eff4ff",
          100: "#dbe6fe",
          200: "#bfd3fe",
          300: "#93b4fd",
          400: "#6090fa",
          500: "#3b76f6",
          600: "#2563eb",
          700: "#1d58d8",
          800: "#1e4baf",
          900: "#1e408a",
          950: "#172a54",
        },
      },
    },
  },
  plugins: [],
};
