import React from "react"
import {css} from "@emotion/core"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = ({data}) => (
  <Layout>
      {/*<SEO title="Josh's Resume Site" />*/}
      <section
        css={css`
              display: grid;
              grid-template-columns: var(--horizontal-margin) 1fr var(--horizontal-margin);
              > *:not(div){
                grid-column: 2;
              }
              div{
                grid-column: 1 / -1;
              }
              @media screen and (min-width: 1120px){
                grid-template-columns: var(--horizontal-margin) 1fr 1fr var(--horizontal-margin);
                grid-template-rows: 10vh 1fr 1fr 1fr 10vh;
                > *:not(div){
                  grid-row: 3;
                }
                div{
                  grid-column: 3;
                  grid-row: 2 / 5;
                }
              }
            `}
      >
          <Img
              fluid={data.albertasaurus.childImageSharp.fluid}
              css={css`
                width: 100%;
            `}
          />
          <h1>
              Welcome to my CV
          </h1>
          <p>
              This is the overview/elevator pitch page. I’ll give you a quick rundown on what I’ve done and what I prioritise while the site will give you an idea of what I’m like and what I can do.
              <br/>
              When sorting through applicants, you need to kiss a lot of frogs to find your metaphorical prince, or really even a decent looking frog. I appreciate your time here, so I’ll limit any long form text content to (appropriately flagged) sections on pages further in.
          </p>
      </section>
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
