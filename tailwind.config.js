/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#7BA73F',
        'dark-green': '#2E5B5B',
        'light-green': '#7BA73F1A',
        'light-grey': '#F4F6F8',
        'white': '#ffffff',
        'grey': '#DFE3E8',
        'orange': '#FF714E'
      },
      maxWidth: {
        '225': '255px',
      },
      fontSize: {
        xxs: '10px',
      },
      boxShadow: {
        grey: '0px 1px 2px 0px rgba(145, 158, 171, 0.24)',
      }
    }
  },
  plugins: [],
}

