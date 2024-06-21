// Config FileSystem, do not change

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Blue color
        customBlue: "#13547a",
        //cyan light
        customGreen: "#80d0c7",
        // cyan dark
        buttonColor: "#7fffd4",
        //Dark blue
        buttonColorHover: "#13547a",
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'proj': 'linear-gradient(to right, #2b6cb0, #3182ce)', // Custom gradient definition
      },
    },
  },
  variants: {},
  plugins: [],
};
