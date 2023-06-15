const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      colors: {
        primary: "#0C1545",
        secondary: "#F37121",
        secondary1: "#EBEBEB",
        secondary2: "#737373",
        secondary3: "#F6F7FD",
        secondary4: "#FDFDFD",
        textcolor: "#8C8C8C",
        boxcolor1: "#47EAFF",
        boxcolor2: "#99F3FF",
        boxcolor3: "#D9D9D9"   
      },
      boxShadow: {
        "3xl": "32px 32px 60px rgba(243, 113, 33, 0.15)",
        "4xl": "32px 32px 60px rgba(8, 195, 197, 0.15)",
        "5xl": "32px 32px 60px rgba(235, 235, 235, 0.1)"
      },
      
    },
  },
  plugins: [],
};
