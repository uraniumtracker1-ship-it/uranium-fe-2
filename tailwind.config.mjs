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
        accent: "#2962FF", // Electric blue - energetic, technological, associated with electricity and clean energy
        "accent-light": "#1E90FF", // Clean electric blue variant
        "accent-bright": "#00BFFF", // Brighter, more energetic variant
      },
    },
  },
  plugins: [],
};
