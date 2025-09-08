/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4e7ae6",
        secondary: "#7b4ee6",
        accent: "#e64e7a",
        light: "#f8f9fa",
        dark: "#343a40",
      },
      fontFamily: {
        sans: [
          "Poppins",
          "Segoe UI",
          "Tahoma",
          "Geneva",
          "Verdana",
          "sans-serif",
        ],
      },
      animation: {
        "fade-in": "fadeIn 1s ease forwards",
        "slide-in": "slideIn 0.5s ease forwards",
        pulse: "pulse 2s infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideIn: {
          from: { opacity: 0, transform: "translateX(-30px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
