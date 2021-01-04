import React from "react"
import {css} from "@emotion/core"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import LaravelSVG from "../components/laravel-svg";
import LogoCard from "../components/logo-card";
import ReactSVG from "../components/react-svg";
import SectionHeading from "../components/section-heading";
import LinkButton from "../components/link-button";

const IndexPage = ({data}) => {

    return <Layout>
      {/*<SEO title="Josh's Resume Site" />*/}
      <main
        css={css`
          --page-color: #2D9CDB;
        `}
      >
      <section
        css={css`
              display: grid;
              grid-template-columns: var(--horizontal-margin) 1fr var(--horizontal-margin);
              > *:not(.image){
                grid-column: 2;
              }
              .image{
                grid-column: 1 / -1;
              }
              @media screen and (min-width: 1120px){
                height: calc(100vh - 74px); //Add a header height variable
                grid-template-columns: var(--horizontal-margin) 1fr 1fr var(--horizontal-margin);
                grid-template-rows: 10vh 2fr auto auto 3fr 10vh;
                .heading{
                  grid-row: 3;
                }
                p{
                  grid-row: 4;
                }
                .image{
                  grid-column: 3;
                  grid-row: 2 / 6;
                  justify-self: center;
                }
              }
            `}
      >
          <Img
              fluid={data.albertasaurus.childImageSharp.fluid}
              className="image"
              css={css`
                width: 100%;
                box-shadow: 0 4px 4px #333333;
            `}
          />
          <SectionHeading title="Welcome to my CV"/>
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
          <SectionHeading title="Tech I'm Using"/>
          <LogoCard borderColor="#DB444A">
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
              <ul>
                  <li>
                      The gold standard for PHP frameworks.
                  </li>
                  <li>
                      Batteries included, building and debugging are a joy.
                  </li>
                  <li>
                      Generates back-ends quickly and professionally.
                  </li>
              </ul>
          </LogoCard>
          <LogoCard borderColor="#2D9CDB">
              <ReactSVG/>
              <h3
                  css={css`
                  font-family: 'montserrat', sans-serif;
                  font-weight: 600;
                  font-size: 2rem;
                `}
              >
                  React
              </h3>
              <ul>
                  <li>
                      The hot JS framework; very good resources and ecosystem as a result.
                  </li>
                  <li>
                      Component focus feels natural for the modern web.
                  </li>
                  <li>
                      I enjoy working with JSX and CSS-in-JS.
                  </li>
              </ul>
          </LogoCard>
          <LogoCard borderColor="#DBD718">
              <Img
                  fluid={data.emotion.childImageSharp.fluid}
                  css={css`
                      width: 100%;
                  `}
              />
              <h3
                  css={css`
                  font-family: 'montserrat', sans-serif;
                  font-weight: 600;
                  font-size: 2rem;
                `}
              >
                  Emotion JS
              </h3>
              <ul>
                  <li>
                      Perfectly complements my coding flow in React.
                  </li>
                  <li>
                      Sidesteps scope and specificity problems.
                  </li>
                  <li>
                      Has all the best parts of SASS and CSS combined with the dynamism of JS.
                  </li>
              </ul>
          </LogoCard>
          <LogoCard borderColor="#663399">
              <Img
                  fluid={data.gatsby.childImageSharp.fluid}
                  css={css`
                      width: 90%;
                  `}
              />
              <h3
                  css={css`
                  font-family: 'montserrat', sans-serif;
                  font-weight: 600;
                  font-size: 2rem;
                `}
              >
                  Gatsby
              </h3>
              <ul>
                  <li>
                      Low overhead and blazing speed right out of the box.
                  </li>
                  <li>
                      Automated image processing and lazy loading is very slick.
                  </li>
                  <li>
                      Secure and accessible by default.
                  </li>
              </ul>
          </LogoCard>
          <p>
              These are the tools I reach for first when digging into a project. I consider them my “core competencies”, aka what typically brings home the (vegetarian) bacon.
              <br/><br/>
              It’s fairly common that I won’t have a complete stack of my choosing though, and as a result I’ve worked with many other languages/frameworks/tools over my career.
              <br/><br/>
              For more detail on my core and supporting skills checkout the breakdown on my Skills page!
          </p>
          <LinkButton to="/">Skills Breakdown</LinkButton>
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
          <SectionHeading title="Work Experience"/>

      </section>
      </main>
  </Layout>
}
export const query = graphql`
    query {
        albertasaurus: file(relativePath: { eq: "Albertasaurus.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        emotion: file(relativePath: { eq: "Emotion-Logo.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        gatsby: file(relativePath: { eq: "gatsby-icon.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default IndexPage
