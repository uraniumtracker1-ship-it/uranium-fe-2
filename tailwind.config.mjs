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
        primary: "#000000",
        secondary: "#B7B7B7",
        accent: "#06B6D4", // Lithium color (vibrant cyan/teal - represents energy, batteries, EV)
      },
    },
  },
  plugins: [],
};
