module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'), // Ensure Tailwind CSS is included
    require('autoprefixer'), // Uncomment this if you need autoprefixer
  ],
};
