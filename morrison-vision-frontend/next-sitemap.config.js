/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://morrisonvisionvr.com', // Replace with your actual website URL
    generateRobotsTxt: true, // Generates a robots.txt file
    sitemapSize: 5000, // Optional: Split large sitemaps
    exclude: ['/private-page'], // Optional: Exclude specific pages
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: 'Googlebot', allow: '/' },
      ],
    },
  };
  