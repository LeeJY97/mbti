/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // 경로
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
    },
    colors: {
      'main-color': '#48CFCB',
      'sub-color': '#229799',
      'light-color': '#F5F5F5',
      'dark-color': '#424242'
    }
  },
  plugins: [],
}

