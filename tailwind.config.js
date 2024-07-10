/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#0771EF",
      },
    },
  },
  fontFamily: {
    interBlack: ["Inter-Black", "sans-serif"],
    interBold: ["Inter-Bold", "sans-serif"],
    interExtraBold: ["Inter-ExtraBold", "sans-serif"],
    interExtraLight: ["Inter-ExtraLight", "sans-serif"],
    interLight: ["Inter-Light", "sans-serif"],
    interMedium: ["Inter-Medium", "sans-serif"],
    interRegular: ["Inter-Regular", "sans-serif"],
    interSemiBold: ["Inter-SemiBold", "sans-serif"],
    interThin: ["Inter-Thin", "sans-serif"],
  },
  plugins: [],
};
