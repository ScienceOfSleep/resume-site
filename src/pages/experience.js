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
                      filter: drop-shadow(4px 4px 4px hsl(202, 21%, 52%, 0.9));
                      @media screen and (min-width: 1120px){
                        grid-column: 2/4 !important;
                      }
                    `}
                >
                    <Img
                        fluid={data.dip.childImageSharp.fluid}
                        alt="Draw It Paint"
                        css={css`
                          width: 80%;
                          @media screen and (min-width: 1120px){
                            width: 50%;
                          }
                        `}
                    />
                    <div>
                        <SectionHeading title="Draw It Paint"/>
                        <h3>
                            February 2020 - Present
                        </h3>
                        <p>
                            This is the overview/elevator pitch page. I’ll give you a quick rundown on what I’ve done and what I prioritise while the site will give you an idea of what I’m like and what I can do.
                            <br/> <br/>
                            When sorting through applicants, you need to kiss a lot of frogs to find your metaphorical prince, or really even a decent looking frog. I appreciate your time here, so I’ll limit any long form text content to (appropriately flagged) sections on pages further in.
                        </p>
                    </div>
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
    }
`

export default ExperiencePage