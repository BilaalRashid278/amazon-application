/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     boxShadow : {
      c1 : "-4px 3px 24px 3px rgba(0,0,0,0.75)",
      c2 : " 2px 4px 40px 3px rgba(0,0,0,0.75)"
     }
    },
  },
  plugins: [],
}

