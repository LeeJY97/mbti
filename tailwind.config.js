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
    extend: {
      colors: {
        'main-color': '#48CFCB',
        'sub-color': '#229799',
        'light-color': '#F5F5F5',
        'dark-color': '#424242',
        'false-color': '#C68FE6',
        'false-sub-color': '#6C48C5',
        'istp': '#FF8343',
        'istj': '#FF8C00',
        'isfj': '#FF4500',
        'isfp': '#8B4513',
        'intj': '#0D98BA',
        'intp': '#003366',
        'infj': '#4B0082',
        'infp': '#6B5B95',
        'estp': '#00FFFF',
        'estj': '#7FFF00',
        'esfp': '#77DD77',
        'esfj': '#228B22',
        'enfp': '#615550',
        'enfj': '#BFB5B2',
        'entp': '#7F5A83',
        'entj': '#D3D3D3',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
      },
    }
  },
  plugins: [],
}

