module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
  theme: {
    fontFamily: {
      'sans'  : ['Roboto', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'public': ['"Public Sans"', 'sans-serif']
    },
    extend: {
      colors: {
        'rtr-green' : {
            'dark'    : '#81A332',
            'DEFAULT' : '#98C03C'
        },
        'rtr-teal'  : '#52A7A7',
        'rtr-red'   : '#CF5345',
        'rtr-dark'  : '#3A393E',
      },
      height: {
        'masthead' : '480px'
      },
      borderRadius: {
        '20' : '20%',
        '40' : '40%',
        '60' : '60%',
        '80' : '80%',
      }
    }
  }
}
