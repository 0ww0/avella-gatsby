/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  flags: {
    DEV_SSR: true
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false
      },
    },
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        title: 'Avella.my',
        description: 'Official avella.my site.',
        canonical: 'https://www.avella.my/',
        openGraph: {
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.url.ie/',
          site_name: 'SiteName',
        },
        twitter: {
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        },
      },
    },
  ],
}
