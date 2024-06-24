/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        user: '#FAFAFA',
        you: '#DCF7C5',
        header: '#F6F6F6'
      }

    },
  },
  plugins: [],
}
