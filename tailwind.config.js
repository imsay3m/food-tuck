/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.html"],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      '16': '4rem',
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        // 'header-background-mobile': "url('/assets/images/header/header-background-mobile.png')",
      },
      lineHeight: {
        '14': '3.5rem',
        '18': '4.5rem',
      },
      spacing: {
        '16': '4rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '25.5': '102px',
        '38': '9.5rem',
        '41': '10.25rem',
        '47.25': '189px',
        '67': '16.75rem',
        '73.25': '293px',
        '75': '18.75rem',
        '93.75': '375px',
        '95.75': '383px',
        '180': '45rem',
        '280': '70rem',
      },
      colors: {
        "primary": "#195A00",
        "primarylite": "#E5EBE3",
        "secondery": "#FAFAFA",
        "seconderylite": "#EDEDED"
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light"],
    darkTheme: "dark",
    base: true, // applies background color and foreground color for root element by default
    styled: true,
    utils: true,
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true,
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}

