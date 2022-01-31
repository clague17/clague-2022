module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Mabry pro"', 'sans-serif'],
      },
      colors: {
        success: '#23a094',
        danger: '#e2442f',
        warning: '#ffc900',
        info: '#90a8ed',
        pink: '#ff90e8',
        purple: '#90a8ed',
        green: '#23a094',
        orange: '#e2442f',
        red: '#98282a',
        yellow: {
          400: '#f1f333',
          900: '#ffc900',
        },
        black: '#000',
        gray: {
          050: '#fbfbf9',
          100: '#f4f4f0',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
        },
        white: '#fff',
        primary: '#000',
        accent: '#ff90e8',
        contrast: '#000',
        background: '#fff',
      },
    },
  },
  plugins: [],
}
