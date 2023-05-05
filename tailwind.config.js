/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      tablet: "768px",
      desktop: "1280px",
    },
    colors:{
      bg1: "#00002E",
      bg2: "#F6F4F3",
      hl1: "#4CD1A0",
      hl2: "#00D5F8",
      hl3: "#FFC90E",
      primary: "#292929",
      secondary: "#F6F4F3",
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
};
