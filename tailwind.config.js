/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#aa3bff',
        'text-h': '#08060d',
        text: '#6b6375',
      },
    },
  },
  plugins: [],
}
