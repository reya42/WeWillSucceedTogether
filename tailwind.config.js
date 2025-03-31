/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
        colors:{
            primary: "#fff",
            secondary: "#070029",
            tetriary: "#81c0ff",
            accent: "#F0E100",
            eu: "#0e4194"
        },
        fontFamily: {
            poppins_thin: ["PoppinsThin", "sans-serif"],
            poppins_thin_italic: ["PoppinsThinItalic", "sans-serif"],
            
            poppins_extra_light: ["PoppinsExtraLight", "sans-serif"],
            poppins_extra_light_italic: ["PoppinsExtraLightItalic", "sans-serif"],
            
            poppins_light: ["PoppinsLight", "sans-serif"],
            poppins_light_italic: ["PoppinsLightItalic", "sans-serif"],
            
            poppins: ["Poppins", "sans-serif"],
            poppins_italic: ["PoppinsItalic", "sans-serif"],

            poppins_medium: ["PoppinsMedium", "sans-serif"],
            poppins_medium_italic: ["PoppinsMediumItalic", "sans-serif"],
            
            poppins_semi_bold: ["PoppinsSemiBold", "sans-serif"],
            poppins_semi_bold_italic: ["PoppinsSemiBoldItalic", "sans-serif"],

            poppins_bold: ["PoppinsBold", "sans-serif"],
            poppins_bold_italic: ["PoppinsBoldItalic", "sans-serif"],
            
            poppins_extra_bold: ["PoppinsExtraBold", "sans-serif"],
            poppins_extra_bold_italic: ["PoppinsExtraBoldItalic", "sans-serif"],
            
            poppins_black: ["PoppinsBlack", "sans-serif"],
            poppins_black_italic: ["PoppinsBlackItalic", "sans-serif"],
        },
        fontWeight: {
            thin: 100,
            extraLight: 200,
            light: 300,
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
            extraBold: 800,
            black: 900,
        },
        transitionProperty: {
          'height': 'height'
        }
    },
  },
  plugins: [],
}
