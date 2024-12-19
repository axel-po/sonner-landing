/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#6533FF",
        secondary: "#FBE4AB",
        lightBlack: "#272727",
        gray: "#E4EFF0",
        strongGray: "#CDD7D8",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
        },
      },
      fontFamily: {
        inter: ["Inter, serif"],
      },
    },
  },
  plugins: [],
};
