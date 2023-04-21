require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Savor: Zero-Carbon Fats`,
    description: `Craveworthy and sustainable fats that sizzle, spread, and taste the way they should. Farm-free lipids for plant-based butter, milk, cheese, meat and more.`,
    siteUrl: `https://savor-it.com`,
    socialImage: `/savor-social-image.jpg`,
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
        url: 'https://7vr.3c1.myftpupload.com/graphql/',
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
        google: {
          families: ['PT Sans:400,700'],
        },
        custom: {
          families: [
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_ID, // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
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
