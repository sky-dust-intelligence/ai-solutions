// next-sitemap.config.mjs and add dotenv for process.env.SITE_URL//

// Importing dependencies
import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';
import { Readable } from 'stream';
import { Config } from 'dotenv';

// Ensure the environment variable is defined
if (!process.env.SITE_URL) {
  throw new Error('Missing environment variable: SITE_URL');
}

// Exporting the configuration object
export default {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  exclude: ['/404'],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.SITE_URL}/sitemap.xml`, // Specify the absolute URLs to your sitemaps generated elsewhere
    ],
  },
  transform: async (config, paths) => {
    const sitemap = new SitemapStream({ hostname: config.siteUrl });
    paths.forEach(path => sitemap.write(path));
    sitemap.end();

    const sitemapData = await streamToPromise(sitemap);
    const gzippedSitemap = await getGzippedSitemap(sitemapData);

    return [
      {
        loc: '/sitemap.xml',
        content: gzippedSitemap,
        encoding: 'gzip',
      },
    ];
  },
};

async function getGzippedSitemap(sitemapData) {
  const sitemapStream = new Readable();
  sitemapStream.push(sitemapData);
  sitemapStream.push(null);

  const gzip = createGzip();
  sitemapStream.pipe(gzip);

  const gzippedSitemap = await streamToPromise(gzip);
  return gzippedSitemap;
}
