module.exports = {
  siteMetadata: {
    title: `Savor`,
    description: `SITE META DESCRIPTION GOES HERE.`,
    siteUrl: `https://mikeriley.dev`,
    socialImage: `ABSOLUTE PATH TO IMAGE IN STATIC FOLDER`,
    author: `TWITTER HANDLE`,
  },
  trailingSlash: 'never',
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'http://34.215.58.117/graphql/',
        schema: {
          requestConcurrency: 10,
          timeout: 90000,
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 1,
              maxFileSizeBytes: 100000000,
            },
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        // google: {
        //   families: ['Open Sans:400,700'],
        // },
        custom: {
          families: [
            'PTSans-Regular',
            'PTSans-Bold',
            'Restora-Regular',
            'Restora-Italic',
            'Restora-Bold',
            'Restora-Light',
            'Restora-ExtraLight-Italic',
          ],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Savor`,
        short_name: `Savor`,
        start_url: `/`,
        background_color: `#fbf9ec`, // background color for the website
        theme_color: `#fbf9ec`, // background color or primary brand color
        display: `minimal-ui`,
        icon: `src/images/savor-favicon.svg`, // favicon. Path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-accessibilityjs`,
      options: {
        injectStyles: true,
        errorClassName: true,
      },
    },
  ],
};
