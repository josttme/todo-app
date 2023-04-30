/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#030233',
        secondary: '#0236c5',
        tertiary: '#05a4ff',
        error: '#e04448'
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        item: '15% 1fr 10% 10%'
      }
    }
  },
  plugins: []
}
