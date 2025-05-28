// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line tells Tailwind to scan these files
  ],
  theme: {
    extend: {
      colors: {
        "pastel-green": {
          light: "#C1E1C1",
          DEFAULT: "#A2D9A1", // Your main pastel green
          dark: "#86C884",
        },
        "olive-text": "#556B2F", // Dark Olive Green for text
        "honeydew-bg": "#F0FFF0", // Honeydew background
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // A nice default sans-serif font
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "subtle-pulse": "subtlePulse 2s infinite ease-in-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        subtlePulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
      },
    },
  },
  plugins: [],
};
