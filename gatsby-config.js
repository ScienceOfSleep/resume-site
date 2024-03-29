module.exports = {
  siteMetadata: {
    title: `Josh Steele's Resume Site`,
    description: `Welcome to Josh Steele's resume website. Find out the things Josh has done for money, the things he'd do for money, and a few things that he does for free`,
    author: `Josh Steele`,
    siteUrl: `https://www.jjsteele.ca`,
    siteLanguage: `en`,
    image: `/Albertasaurus.png`,

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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.jjsteele.ca',
        sitemap: 'https://www.jjsteele.ca/sitemap.xml',
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
        icon: "src/images/JS-White-Fill.png",
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
