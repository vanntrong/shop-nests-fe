/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#A20937",
        "primary-300": "#e52f48",
        yellow: "#FDEB95",
        "yellow-300": "#b27e32",
        "yellow-500": "#ffeb95",
        "black-900": "#111",
        "green-300": "#2ecc71",
        "red-300": "#ff0000",
        "red-400": "#ef0b0b",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0, transform: "translateY(100px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
