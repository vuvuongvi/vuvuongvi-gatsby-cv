require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  pathPrefix: "/vuvuongvi-gatsby-cv",
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitleAlt: `Currium Vitae - Vũ Vương Vĩ`,
    siteTitle: `Vũ Vương Vĩ CV`,
    siteHeadline: `Vũ Vương Vĩ`,
    siteUrl: `https://vuvuongvi.github.io/vuvuongvi-gatsby-cv/`,
    siteDescription: `This site CV site of Vũ Vương Vĩ in Xì Gòn`,
    siteLanguage: `en`,
    author: `@vuvuongvi`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `Cara`,
        description: `This is github personal site for Vu Vuong Vi`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
