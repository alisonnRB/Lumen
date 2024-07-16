/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        "bg" : "#0E0E0E",
        "page" : "#F5F5F5",
      },
      fontFamily: {
        'sans': ["Libre Baskerville", "serif"],
      }
    },
  },
  plugins: [],
};
