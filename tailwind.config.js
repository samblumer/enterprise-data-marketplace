/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f8f8f8",
          100: "#f1f1f1",
          200: "#dfdfdf",
          300: "#c8c8c8",
          400: "#9b9b9b",
          500: "#6f6f6f",
          600: "#505050",
          700: "#3a3a3a",
          800: "#242424",
          900: "#111111"
        },
        slateblue: {
          50: "#fff4f4",
          100: "#ffe3e3",
          200: "#ffc7c7",
          300: "#ff9f9f",
          400: "#ff6a6a",
          500: "#ef3e42",
          600: "#d9272d",
          700: "#ba1f25",
          800: "#971c20",
          900: "#6c1518"
        },
        mint: {
          100: "#ecf8f1",
          300: "#8fd3aa",
          500: "#2f8f5c",
          700: "#1f5f3e"
        },
        amber: {
          100: "#fdf6e8",
          300: "#efc57f",
          500: "#c9892f",
          700: "#835b1f"
        },
        rose: {
          100: "#fdeced",
          300: "#ef9fa5",
          500: "#c73d4a",
          700: "#7d2530"
        }
      },
      boxShadow: {
        panel: "0 1px 2px rgba(17, 17, 17, 0.05)"
      },
      borderRadius: {
        xl2: "0.75rem"
      }
    }
  },
  plugins: []
};
