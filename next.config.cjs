const withPWA = require('next-pwa')
const withImages = require('next-optimized-images')
const withRobotsTxt = require('nextjs-robots-txt')

module.exports = withPWA(withImages(withRobotsTxt({
  pwa: { dest: 'public' },
  /* other configurations */
})))

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})

module.exports = withBundleAnalyzer({})
const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
