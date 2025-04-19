/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#3b82f6",
        accent: "#9333ea",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
      },
    },
  },
  plugins: [],
}

