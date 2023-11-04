const withPWA = require('next-pwa')
const withImages = require('next-optimized-images')
const withRobotsTxt = require('nextjs-robots-txt')

module.exports = withPWA(withImages(withRobotsTxt({
  pwa: { dest: 'public' },
  /* other configurations */
})))
