import React from "react"
import {css} from "@emotion/core"
import { graphql } from "gatsby"
import Img from "gatsby-image";

import Layout from "../components/layout"
import Header from "../components/header";
import LandingFold from "../components/landing-fold";
import PageHeading from "../components/page-heading";
import BodyFold from "../components/body-fold";
import SectionHeading from "../components/section-heading";

const ExperiencePage = ({data}) => {
    return <Layout>
        <Header pageColor="var(--experience-red)"/>
        <main
            css={css`
              --page-color: var(--experience-red);
            `}
        >
            <LandingFold>
                <Img
                    fluid={data.bunicula.childImageSharp.fluid}
                    alt="Happy Albertosaurus vector graphic. By yours truly, Josh Steele."
                />
                <PageHeading title="Work Experience"/>
                <p>
                    This is the overview/elevator pitch page. I’ll give you a quick rundown on what I’ve done and what I prioritise while the site will give you an idea of what I’m like and what I can do.
                    <br/> <br/>
                    When sorting through applicants, you need to kiss a lot of frogs to find your metaphorical prince, or really even a decent looking frog. I appreciate your time here, so I’ll limit any long form text content to (appropriately flagged) sections on pages further in.
                </p>
                <Img
                    fluid={data.landingDivider.childImageSharp.fluid}
                    alt="'Random circles generated using canvas' by Josh Steele"
                />
            </LandingFold>
            <BodyFold>
                <div
                    css={css`
                      border: 5px solid var(--page-color);
                      border-radius: 10px;
                      background-color: #ffffff;
                      filter: drop-shadow(4px 4px 4px hsl(202, 21%, 52%, 0.9));
                      display: grid;
                      grid-template-columns: 5px 1fr 5px;
                      justify-items: center;
                      *{
                        grid-column: 2;
                      }
                      @media screen and (min-width: 1120px){
                        grid-column: 2/4 !important;
                      }
                    `}
                >
                    <Img
                        fluid={data.dip.childImageSharp.fluid}
                        alt="Draw It Paint"
                        css={css`
                          width: 150px;
                          @media screen and (min-width: 1120px){
                          }
                        `}
                    />
                    <div
                        className="titleBox"
                        css={css`
                          display: flex;
                          flex-direction: column;
                          align-items: center;
                        `}
                    >
                    <SectionHeading title="Draw It Paint"/>
                    <h3 css={css`text-align: center`}>
                        Web Developer
                    </h3>
                    <h3 css={css`text-align: center`}>
                        February 2020 - Present
                    </h3>
                    </div>
                    <p css={css`margin: 5px 0 10px`}>
                        This is the overview/elevator pitch page. I’ll give you a quick rundown on what I’ve done and what I prioritise while the site will give you an idea of what I’m like and what I can do.
                    </p>
                    <ul>
                        <li>Building/maintaining eCommerce sites in GatsbyJS & Shopify</li>
                        <li>Coordinating graphics work to meet site, project, and social media specifications</li>
                        <li>Internal workflow optimization and automation</li>
                    </ul>
                </div>
            </BodyFold>
        </main>
    </Layout>
}

export const query = graphql`
    query {
        bunicula: file(relativePath: { eq: "Bunicula.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        landingDivider: file(relativePath: { eq: "experience-circle-divider-0.599393272614402.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        dip: file(relativePath: { eq: "dip-logo.png" }) {
            childImageSharp {
                fluid(quality:100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default ExperiencePage