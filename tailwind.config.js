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
    }
  },
  plugins: [],
}

