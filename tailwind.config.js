/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}',
    './components/content/*.{html,js,vue}',
    './layouts/**/*.{html,vue}',
    './content/**/*.md',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      aspectRatio: {
        '1/2': '1 / 2',
        '2/1': '2 / 1',
        '4/3': '4 / 3',
        '7/5': '7 / 5',
        '9/10': '9 / 10',
        'auto': 'auto',
      },
      spacing: {
        '124': '24rem',
        '137': '37rem',
        '140': '40rem',
        '148': '48rem',
        '1500625': '50.0625rem',
        '157': '57rem',
        '164': '64rem',
        '1128': '128rem',
      },
      colors: {
        safetyGreen: {
          100: '#fffcf2',
          200: '#fff7c4',
          200: '#fff696',
          300: '#fff969',
          400: '#ffff3c',
          500: '#ccff00', // Secured Moving Safety Green
          600: '#4df000',
          700: '#00ce21',
          800: '#046e47',
          900: '#000203',
        },
        sunbeam: {
          100: '#fdff95',
        },
        sunbeamcomp: {
          100: '#ebffa3'
        },
        secureRed: {
          100: '#fffafa',
          200: '#ffdcdc',
          300: '#ffbcbc',
          400: '#ff9c9c',
          500: '#ff7a7a',
          600: '#ff4646',
          700: '#ff1e1e',
          800: '#ff3f00', // Secured Moving Red
          900: '#8c2c19',
          950: '#2B0D05'
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
