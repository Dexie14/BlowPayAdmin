/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        custom: "0px 5px 20px 0px rgba(0, 0, 0, 0.05)", 
      },
      fontFamily: {
        Nunito: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
        Urbanist: ["Urbanist", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blackShade: "#131313",
        borderOutline: "#E6E9EC",
        blowText: "#000000",
        blowSecondary: "#FF114A",
        blowWarning: "#FFB82E",
        blowSuccess: "#01A33D",
        buttonOutline: "#5F5F63",
        inputBorder: "#D0D5DD",
        placeHolderText: "#98A2B3",
        disabledText: "#A5A5A5",
        buttonColor: "#FEB0C3",
        fadedblowSecondary: "#FFEBE8",
        blowBG: "#FFF8FB",
        borderBlowSecondary: "#F2000B",
        errorBlack: "#292929",
        shadeBackground: "#F9FBFD",
        textShade: "#F9FBFD",
        teal: "#2CDDC7",
        blueGray: "#849AA9",
        mediumGray: "#555555", 
        lightGray: "#EAEAEA", 
        brightGreen: "#00B046", 
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
