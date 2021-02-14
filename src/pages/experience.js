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
                    alt="Bunicula. Demonstrating both lived and professional experience, by Josh Steele."
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
                <Img
                    fluid={data.dip.childImageSharp.fluid}
                    alt="Draw It Paint"
                    css={css`
                      width: 250px;
                      height: fit-content;
                      @media screen and (min-width: 1120px){
                        grid-column: 3 !important;
                        grid-row: 1/4;
                        align-self: center;
                        justify-self: center;
                      }
                    `}
                />
                <div
                    css={css`
                      @media screen and (min-width: 1120px){
                        height: 75vh;
                      }
                    `}
                >
                    <SectionHeading title="Draw It Paint"/>
                    <h3 css={css`text-align: center`}>
                        Web Developer
                    </h3>
                    <h3 css={css`text-align: center`}>
                        February 2020 - Present
                    </h3>
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
            <BodyFold>
                <Img
                    fluid={data.silvertipDivider.childImageSharp.fluid}
                    className="full-bleed"
                    alt="Generative art of overlapping orange circles. Made by Josh Steele using Canvas."
                />
                <Img
                    fluid={data.silvertip.childImageSharp.fluid}
                    alt="Silvertip logo, by Josh Steele"
                    css={css`
                      width: 350px;
                      height: fit-content;
                      @media screen and (min-width: 1120px){
                        grid-column: 3 !important;
                        grid-row: 2/4;
                        align-self: center;
                        justify-self: center;
                      }
                    `}
                />
                <div
                    css={css`
                      @media screen and (min-width: 1120px){
                        height: 75vh;
                      }
                    `}
                >
                    <SectionHeading title="Silvertip"/>
                    <h3 css={css`text-align: center`}>
                        Web Developer
                    </h3>
                    <h3 css={css`text-align: center`}>
                        February 2020 - Present
                    </h3>
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
        silvertipDivider: file(relativePath: { eq: "experience-circle-divider-0.6177054668795865.png" }) {
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
        silvertip: file(relativePath: { eq: "Silvertip-Logo-with-text.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default ExperiencePage