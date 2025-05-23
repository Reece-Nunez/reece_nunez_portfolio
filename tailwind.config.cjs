/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-yellow-500": "#ffc312",
        "custom-blue": "#5b7c99",
        "custom-light-blue": "#e5e9ec",
      },
    },

    // ✅ THIS is where breakpoints go (min-width)
    screens: {
      exsm: "380px",
      sm: "639px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    // ✅ Tailwind's default container config
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
