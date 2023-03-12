/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "960px",
      desktop: "1248px",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      primary: "#008289",
      primaryFade: "#60CED4",
      secondary: "#5271FF",
      secondary2: "#C34F06",
      borderColor: "#707070",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
