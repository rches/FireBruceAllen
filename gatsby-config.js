module.exports = {
  siteMetadata: {
    title: `Is Bruce Employed?`,
    description: `Have you wondered if Bruce Allen is still employed? Here's an easy tracker to help!`,
    author: `@rches`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fire-bruce-allen`,
        short_name: `fba`,
        start_url: `/`,
        background_color: `#773141`,
        theme_color: `#773141`,
        display: `minimal-ui`,
        icon: `src/images/face-palm-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
