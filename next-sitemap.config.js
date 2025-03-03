/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://idi.edu',
  generateRobotsTxt: false, // We've already created a custom robots.txt
  outDir: 'public',
  generateIndexSitemap: false,
  exclude: ['/404', '/500'],
  additionalPaths: async (config) => {
    // Add additional paths that can't be detected by the sitemap generator
    return [
      {
        loc: '/certificate-in-interior-design',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
    ];
  },
}
