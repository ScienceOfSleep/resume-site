import React from "react"
import {css} from "@emotion/core"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import LaravelSVG from "../components/laravel-svg";

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
                height: calc(100vh - 74px); //Add a header height variable
                grid-template-columns: var(--horizontal-margin) 1fr 1fr var(--horizontal-margin);
                grid-template-rows: 10vh 2fr auto auto 3fr 10vh;
                h1{
                  grid-row: 3;
                }
                p{
                  grid-row: 4;
                }
                div{
                  grid-column: 3;
                  grid-row: 2 / 6;
                  justify-self: center;
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
          <h1
            css={css`
                  font-family: 'pacifico', cursive;
                `}
          >
              Welcome to my CV
          </h1>
          <p>
              This is the overview/elevator pitch page. I’ll give you a quick rundown on what I’ve done and what I prioritise while the site will give you an idea of what I’m like and what I can do.
              <br/> <br/>
              When sorting through applicants, you need to kiss a lot of frogs to find your metaphorical prince, or really even a decent looking frog. I appreciate your time here, so I’ll limit any long form text content to (appropriately flagged) sections on pages further in.
          </p>
      </section>
      <section
          css={css`
              display: grid;
              grid-template-columns: var(--horizontal-margin) 1fr var(--horizontal-margin);
              > *{
                grid-column: 2;
              }
              `}
      >
          <h2
              css={css`
                    font-family: 'pacifico', cursive;
              `}
          >
              Tech I'm Using
          </h2>
          <p>
              These are the tools I reach for first when digging into a project. I consider them my “core competencies”, aka what typically brings home the (vegetarian) bacon.
              <br/><br/>
              It’s fairly common that I won’t have a complete stack of my choosing though, and as a result I’ve worked with many other languages/frameworks/tools over my career.
              <br/><br/>
              For more detail on my core and supporting skills checkout the breakdown on my Skills page!
          </p>
          <div
            css={css`
                border: 6px solid #DB444A;
                border-radius: 5%;
                padding: 10%;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #ffffff;
                filter: drop-shadow(4px 4px 4px #3c3c3c);
            `}
          >
              <LaravelSVG/>
              <h3
                css={css`
                  font-family: 'montserrat', sans-serif;
                  font-weight: 600;
                  font-size: 2rem;
                `}
              >
                  Laravel
              </h3>
          </div>
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
