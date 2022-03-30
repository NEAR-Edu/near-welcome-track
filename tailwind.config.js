module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'heading-1': '3.5rem',
        'heading-2': '3rem',
        'heading-3': '2.25rem',
        'heading-4': '1.875rem',
        'heading-5': '1.5rem',
        'paragraph-1': '1.125rem',
        'paragraph-2': '1rem',
        caption: '0.75rem',
      },
      colors: {
        primary: {
          white: '#fff',
          gray: {
            1: '#f2f2f2',
            2: '#e0e0e0',
            3: '#bdbdbd',
            4: '#828282',
            5: '#4f4f4f',
            6: '#333333',
          },
          black: '#000',
          red: '#eb5757',
          orange: '#f2994a',
          yellow: '#f2c94c',
          green: {
            1: '#6fcf97',
            2: '#27ae60',
            3: '#219653',
          },
          blue: {
            1: '#56ccf2',
            2: '#2d9cdb',
            3: '#2f01ed',
          },
          purple: {
            1: '#bb6bd9',
            2: '#9b51e0',
          },
        },
      },
    },
    fontFamily: {
      sans: ['Manrope', 'Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [],
};
