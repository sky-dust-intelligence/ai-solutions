#!/bin/bash

# Define the version of yarn
yarn set version 4.0.1

# Add the plugins
yarn add next-pwa next-optimized-images next-seo next-redux-wrapper next-compose-plugins nextjs-sitemap-generator nextjs-robots-txt redux react-redux

# Tailwind JIT and TypeScript ESLint
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint

# Create or modify next.config.js
cat <<EOL >next.config.js
const withPWA = require('next-pwa')
const withImages = require('next-optimized-images')
const withRobotsTxt = require('nextjs-robots-txt')

module.exports = withPWA(withImages(withRobotsTxt({
  pwa: { dest: 'public' },
  /* other configurations */
})))
EOL

# Modify tailwind.config.js for JIT
sed -i'' -e 's/mode: .*/mode: "jit",/' tailwind.config.js

# Create or modify .eslintrc.js for TypeScript ESLint
cat <<EOL >.eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
}
EOL

# Output instruction
echo "All plugins have been added and configured. You may now push your changes to your repository and open it in Codespaces."
