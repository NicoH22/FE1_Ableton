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
    },
    },
    backgroundPosition: {
      "50%": "50% 50%",
    },
  },
  plugins: [],
};
