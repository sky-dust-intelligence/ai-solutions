import { execSync } from 'child_process';
import { existsSync, writeFileSync } from 'fs';

const runCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error executing command: ${command}\n`, error.message);
  }
};

const writeConfigFile = (filePath, content) => {
  if (!existsSync(filePath)) {
    writeFileSync(filePath, content, 'utf8');
    console.log(`Created ${filePath}`);
  } else {
    console.log(`${filePath} already exists. Skipping...`);
  }
};

// Define Yarn version
runCommand('yarn set version berry');

// Add the plugins
const plugins = [
  'next-pwa',
  'next-optimized-images',
  'next-seo',
  'next-redux-wrapper',
  'next-compose-plugins',
  'nextjs-sitemap-generator',
  'redux',
  'react-redux',
];

plugins.forEach((plugin) => runCommand(`yarn add ${plugin}`));

// Tailwind JIT and TypeScript ESLint
runCommand('yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint');

// Create or modify next.config.js
const nextConfigContent = `
const withPWA = require('next-pwa')
const withImages = require('next-optimized-images')

module.exports = withPWA(withImages({
  pwa: { dest: 'public' },
  /* other configurations */
}))
`;

writeConfigFile('next.config.js', nextConfigContent);

// Modify tailwind.config.js for JIT
const tailwindConfigContent = `
module.exports = {
  mode: 'jit',
  // ...other configs
}
`;

writeConfigFile('tailwind.config.js', tailwindConfigContent);

// Create or modify .eslintrc.js for TypeScript ESLint
const eslintConfigContent = `
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
}
`;

writeConfigFile('.eslintrc.js', eslintConfigContent);

console.log('All plugins have been added and configured. You may now push your changes to your repository and open it in Codespaces.');
