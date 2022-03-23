module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -80,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Floteq Technology',
    description: 'Floteq Description',
    author: 'Mladenovic13',
    keywords: ['floteq', 'beer', 'technology', 'bar', 'venue', 'iot', 'internet of things'],
    siteUrl: 'https://www.floteq.gatsbyjs.io',
  },
};
