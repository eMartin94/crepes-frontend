/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '100': '#FF9700',
          '50': '#ffc675',
        },
        'secondary': '#FFC0AD',
        'tertiary': '#55423D',
        'complementary': '#2f3640',
        'highlight': '#C41F39',
        // 'highlight': '#A1CCD1',
        // 'highlight': '#468B97',
        'paragraph': '#e8e8ec'
      },
      screens: {
        xs: '480px',
        xl: '1200px',
      },
      backgroundImage: {
        'gradient-primary-right-Bottom': 'linear-gradient(45deg, rgba(255, 151, 0, 0.50) 0%, rgba(255, 151, 0, 0.75) 100%)',
        'gradient-primary-right-Top': 'linear-gradient(315deg, rgba(255, 151, 0, 0.50) 0%, rgba(255, 151, 0, 0.75) 100%)',
        'gradient-primary-left-Bottom': 'linear-gradient(135deg, rgba(255, 151, 0, 0.50) 0%, rgba(255, 151, 0, 0.75) 100%)',
        'gradient-primary-left-Top': 'linear-gradient(225deg, rgba(255, 151, 0, 0.50) 0%, rgba(255, 151, 0, 0.75) 100%)',
        'gradient-secondary-top-Bottom': 'linear-gradient(180deg, rgba(255, 192, 173, 0.10) 0%, rgba(255, 192, 173, 0.75) 100%)',
        'gradient-secondary-left-Bottom': 'linear-gradient(135deg, rgba(255, 192, 173, 0.25) 0%, #FFC0AD 100%)',
        'gradient-secondary-left-Top': 'linear-gradient(225deg, rgba(255, 192, 173, 0.25) 0%, #FFC0AD 100%)',
        'gradient-secondary-right-Bottom': 'linear-gradient(45deg, rgba(255, 192, 173, 0.25) 0%, #FFC0AD 100%)',
        'gradient-secondary-right-Top': 'linear-gradient(315deg, rgba(255, 192, 173, 0.25) 0%, #FFC0AD 100%)',
        'gradient-tertiary-right-Bottom': 'linear-gradient(45deg, rgba(85, 66, 61, 0.50) 0%, rgba(85, 66, 61, 0.75) 100%)',
        'gradient-tertiary-right-Top': 'linear-gradient(315deg, rgba(85, 66, 61, 0.50) 0%, rgba(85, 66, 61, 0.75) 100%)',
        'gradient-tertiary-left-Bottom': 'linear-gradient(135deg, rgba(85, 66, 61, 0.50) 0%, rgba(85, 66, 61, 0.75) 100%)',
        'gradient-tertiary-left-Top': 'linear-gradient(225deg, rgba(85, 66, 61, 0.50) 0%, rgba(85, 66, 61, 0.75) 100%)',
        'gradient-complementary-right-Bottom': 'linear-gradient(45deg, rgba(47, 55, 64, 0.50) 0%, rgba(47, 55, 64, 0.75) 100%)',
        'gradient-complementary-right-Top': 'linear-gradient(315deg, rgba(47, 55, 64, 0.50) 0%, rgba(47, 55, 64, 0.75) 100%)',
        'gradient-complementary-left-Bottom': 'linear-gradient(135deg, rgba(47, 55, 64, 0.50) 0%, rgba(47, 55, 64, 0.75) 100%)',
        'gradient-complementary-left-Top': 'linear-gradient(225deg, rgba(47, 55, 64, 0.50) 0%, rgba(47, 55, 64, 0.75) 100%)',
        'gradient-highlight-right-Bottom': 'linear-gradient(45deg, rgba(196, 31, 57, 0.50) 0%, rgba(196, 31, 57, 0.75) 100%)',
        'gradient-highlight-right-Top': 'linear-gradient(315deg, rgba(196, 31, 57, 0.50) 0%, rgba(196, 31, 57, 0.75) 100%)',
        'gradient-highlight-left-Bottom': 'linear-gradient(135deg, rgba(196, 31, 57, 0.50) 0%, rgba(196, 31, 57, 0.75) 100%)',
        'gradient-highlight-left-Top': 'linear-gradient(225deg, rgba(196, 31, 57, 0.50) 0%, rgba(196, 31, 57, 0.75) 100%)',
        'gradient-complementary': 'linear-gradient(45deg, rgba(47, 55, 64, 0.50) 0%, rgba(47, 55, 64, 0.75) 100%)',
        'home-hero': 'radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.30) 100%), url("https://res.cloudinary.com/dwweg4aud/image/upload/v1690063755/crepes/bg-home_gt7hxv.webp")',
        'game-hero': 'url("https://res.cloudinary.com/dwweg4aud/image/upload/v1690057666/crepes/bg-games_hvdfvn.webp")',
        'vegan-hero': 'url("https://res.cloudinary.com/dwweg4aud/image/upload/v1690150082/crepes/bg-vegano_tvyuzn.webp")',

      },
      fontFamily: {
        lobster: ['Lobster', 'cursive'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}