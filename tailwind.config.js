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
        DEFAULT: '#030014',
        2: '#495270',
        3: '#918EA0',
        4: '#8D93A5',
        5: '#BBBEC9',
        6: '#191625',
        7: '#0F0C1F',
        8: '#100D20',
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