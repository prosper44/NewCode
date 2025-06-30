/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        nunito: ['"Nunito Sans"', 'sans-serif']
      },
    },
  },
  plugins: [],
  safelist: [
    'flex', 'flex-col', 'flex-row',
    'gap-10', 'xl:flex', 'xl:flex-row',
    'xl:gap-[200px]', 'items-start',
    'justify-center', 'text-white'
  ],
}
