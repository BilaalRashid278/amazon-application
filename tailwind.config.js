/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        p1 : "yellow",
        p2 : "brown",
      },
    },
  },
  plugins: [],
}

