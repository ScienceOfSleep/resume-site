import React from "react"
import {css} from "@emotion/core"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = ({data}) => (
  <Layout>
      {/*<SEO title="Josh's Resume Site" />*/}
      <Img
          fluid={data.albertasaurus.childImageSharp.fluid}
          css={css`
                width: 100%;
            `}
      />
  </Layout>
)
export const query = graphql`
    query {
        albertasaurus: file(relativePath: { eq: "Albertasaurus.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default IndexPage
