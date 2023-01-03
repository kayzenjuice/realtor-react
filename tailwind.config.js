/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0070f3",
        secondary: "#f7fafc",
        accent: "#6c63ff",
        error: "#e53e3e",
        warning: "#faf089",
        success: "#48bb78",
        text: "#2d3748",
        background: "#fff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
