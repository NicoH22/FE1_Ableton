/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      marginBottom: {
        page: "8.33333vw",
      },
      margin: {
        bodyText: "0 auto",
      },
      spacing: {
        "8vw": "8.33333vw",
        "4vw": "4.16667vw",
        "66vw": "66.6667vw",
      },
      screens: {
        xxs: "420px",
        xs: "576px",
        mlg: "1124px",
        maxmd: { max: "1023px" },
      },
    },
    backgroundPosition: {
      "50%": "50% 50%",
    },
  },
  plugins: [],
};
