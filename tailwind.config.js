/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832"
        }
      },
      boxShadow: {
        "normal": "0px 1px 10px rgba(0, 0, 0, 0.05)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaDemibold": "Dana Demibold",
        "morabbaMedium": "morabba Medium",
        "morabbaLight": "morabba light",
        "morabbaBold": "morabba Bold",
      },
      letterSpacing: {
        "tightest": "-0.065em"
      },
      spacing: {
        "30": "7.5rem",
        "25": "6.25rem",
        "50": "12.5rem"
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          lg: "0.625rem"
        }
      },
      backgroundImage: {
        "home-mobile": "url(../img/CoffeeShop-Files/headerBgMobile.webp)",
        "home-desktop": "url(../img/CoffeeShop-Files/headerBgDesktop.webp)"
      }
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],

}

