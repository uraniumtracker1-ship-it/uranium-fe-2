/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        lime1: "#57fec7",
        lime2: "#27ecab",
        black: "#19310B",
        black1: "black",
        green: "#01b98e",
        green2: "#039a77",
        lightgray: "#292929",
        date: "#282828b9",
        // Keep accent mapped to the primary uranium green for existing accent- usages
        accent: "#01b98e",
        "accent-light": "#039a77",
        "accent-bright": "#57fec7",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      screens: {
        sr: "0px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".sr-only": {
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: "0",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: "0",
        },
        ".not-sr-only": {
          position: "static",
          width: "auto",
          height: "auto",
          padding: "0",
          margin: "0",
          overflow: "visible",
          clip: "auto",
          whiteSpace: "normal",
        },
        ".focus\\:not-sr-only:focus": {
          position: "static",
          width: "auto",
          height: "auto",
          padding: "0",
          margin: "0",
          overflow: "visible",
          clip: "auto",
          whiteSpace: "normal",
        },
        ".skip-link": {
          position: "absolute",
          top: "-40px",
          left: "6px",
          background: "#01b98e",
          color: "white",
          padding: "8px",
          "text-decoration": "none",
          "z-index": "100",
        },
        ".skip-link:focus": {
          top: "6px",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
