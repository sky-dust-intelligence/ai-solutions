module.exports = {
    daisyui: {
          mytheme:
 "primary":   "#00f815",
 "secondary": "#4f46e5",
 "accent":    "#22c55e",
 "neutral":   "#3d4451",
 "base-100":  "#ffffff",
 "info":      "#3b82f6",
 "success":   "#84cc16",
 "warning":   "#f59e0b",
 "error":     "#e11d48"
          },
        },
      ],
    },module.exports = {
      //...
      plugins: [require("daisyui")],
    }
    "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
    "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
    "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
    "--animation-btn": "0.25s", // duration of animation when you click on button
    "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
    "--btn-text-case": "uppercase", // set default text transform for buttons
    "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
    "--border-daisyui-btn": "4px", // border width of buttons
    "--tab-border": "4px", // border width of tabs
    "--tab-radius": "0.5rem", // border radius of tabs
    "--tab-focus-scale": "1.02", // scale transform of tab when you focus on it


    plugins: [
        "plugins": [

          require("@tailwindcss/typography"), 
          require("daisyui")]
      ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {


  // the  above is a custom theme example, add this to the config in tailwind.config.js

  daisyui: {
    "themes": [ 
    "themes": false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    "darkTheme": dark, // name of one of the included themes for dark mode
    "base": true, // applies background color and foreground color for root element by default
    "styled": false, // include daisyUI colors and design decisions for all components
    "utils": true, // adds responsive and modifier utility classes
    "rtl": false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    "prefix": "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    "logs": true, // Shows info about daisyUI version and used config in the console when building your CSS
  },



/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        xl: '0',
      },
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      dark: {
        
      },
      green: {
        DEFAULT: '#00f815',
        dark: '#00C20D',
        'dark-2': '#00A60B',
        light: '#00FF1D',
        'light-2': '#00FF2D',
        'light-3': '#00FF3D',
        'light-4': '#00FF4D',
        'light-5': '#00FF5D',
      },
      blue: {
        DEFAULT: '#1b20eb',
        dark: '#1b10aa',
        light: '#1b90eb',
        'light-2': '#1b80eb',
        'light-3': '#1b70eb',
        'light-4': '#1b60eb',
      },
    },
    screens: {
      xsm: '375px',
      lsm: '425px',
      '3xl': '2000px',
      ...defaultTheme.screens,
    },
    extend: {
      fontSize: {
        'heading-1': ['60px', '72px'],
        'heading-2': ['48px', '58px'],
        'heading-3': ['40px', '48px'],
        'heading-4': ['30px', '38px'],
        'heading-5': ['28px', '40px'],
        'heading-6': ['24px', '30px'],
        'custom-1': ['45px', '55px'],
      },
      spacing: {
        // Base Unit: 0.25rem (4px)
        px: '1px',
        '0': '0',
        '0.5': '0.125rem',  // 2px
        '1': '0.25rem',     // 4px
        '1.5': '0.375rem',  // 6px
        '2': '0.5rem',      // 8px
        '2.5': '0.625rem',  // 10px
        '3': '0.75rem',     // 12px
        '3.5': '0.875rem',  // 14px
        // ... (Continue in this pattern)
        '96': '24rem',      // 384px
        '100': '25rem',     // 400px
        // Custom Spacings
        'custom-4.5': '1.125rem', // 18px
        'custom-5.5': '1.375rem', // 22px
        'custom-6.5': '1.625rem', // 26px
        'custom-7.5': '1.875rem', // 30px
        // ... (Continue with your custom spacing values)
        'custom-203': '50.75rem', // 2030px
        'custom-230': '57.5rem',  // 2300px
      },
      maxWidth: {
        30: '7.5rem',
        40: '10rem',
        50: '12.5rem',
      },
      zIndex: {
        99999: '99999',
        9999: '9999',
        999: '999',
        1: '1',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.border-gradient-br-blue-green-gray-900': {
          background: 'linear-gradient(to right, #18181B, #18181B), linear-gradient(to bottom right, #60A5FA, #00f815)',
          border: '5px solid transparent',
          backgroundClip: 'padding-box, border-box',
          backgroundOrigin: 'padding-box, border-box',
        },
        '.hover\\:border-gradient-tl-blue-green-gray-900:hover': {
          background: 'linear-gradient(to right, #18181B, #18181B), linear-gradient(to top left, #1f6cca, #00f815)',
          backgroundClip: 'padding-box, border-box',
          backgroundOrigin: 'padding-box, border-box',
        },
        '.gradient-border-2': {
          border: '5px solid transparent',
        },
        '.gradient-border-3': {
          border: '5px solid transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};

export default config;
