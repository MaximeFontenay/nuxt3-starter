module.exports = {
  content: ['./src/**/*.{html,vue,js}'],
  theme: {
    extend: {
        colors: {
            form: {
                primary: '#483FFE',
                secondary: '#002145',
                tertiary: '#BEE1FC',
                light: '#F8F9FE',
                grey: '#9B9CA1',
                wrong: '#D3666C',
            },
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        spacing: {
            '8xl': '96rem',
            '9xl': '128rem',
        },
        borderRadius: {
            '4xl': '2rem',
        }
    }
  },
}