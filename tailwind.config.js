/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["lato", "sans-serif"],
        latobold: ["lato-bold", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
        montserratbold: ["montserrat-bold", "sans-serif"],
        opensans: ["open-sans", "sans-serif"],
        opensansbold: ["open-sans-bold", "sans-serif"],
        sourcesans3: ["source-sans-3", "sans-serif"],
        sourcesans3bold: ["source-sans-3-bold", "sans-serif"],
        righteous: ["righteous", "sans-serif"],
      },
    },
  },
  plugins: [],
};
