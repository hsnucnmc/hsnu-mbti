/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,json}", // ✅ includes all HTML and JS in src/
    ],
    theme: {
      extend: {
        colors: {
          // Example custom colors (optional)
          primary: "#3B82F6",
          secondary: "#6366F1",
        },
        fontFamily: {
          // Optional: custom font family setup
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  