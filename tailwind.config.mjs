/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        Allura: ["Allura", "cursive"],
        OpenSans: ["Open Sans", "cursive"],
      },
      backgroundImage: {
        'candle-wallpaper': "url('/Twist.jpg')",
        'tree-wallpaper': "url('/Tree_twist.jpg')",
      },
    },
  },
  plugins: [],
};
