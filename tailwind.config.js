/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        yellowCustom: {
          100: "#F1C400",
        },
        blueCustom: {
          100: "#1d428a",
        },
        customGray: {
          100: "#F2F3F4",
        },
      },
      screens: {
        "3xl": "1800px",
        "4xl": "2000px",
      },
    },
  },
  plugins: [],
};
