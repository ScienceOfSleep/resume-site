module.exports = {
  siteMetadata: {
    title: `Josh Steele's resume website`,
    description: `Welcome to Josh Steele's resume website. Find out all the things Josh has done for money, all the things he'd do for money, and even a few things that he does for free.`,
    author: `Josh Steele`,
    siteUrl: `https://www.example.com`,
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Ubuntu\:medium` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.example.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "resume-site",
        short_name: "resume",
        icon: "src/images/gatsby-icon.png",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-offline",
  ],
}
