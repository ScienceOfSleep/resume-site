import React from "react"
import {css} from "@emotion/core"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Header from "../components/header";
import LandingFold from "../components/landing-fold";
import Img from "gatsby-image";
import PageHeading from "../components/page-heading";
import BodyFold from "../components/body-fold";
import SectionHeading from "../components/section-heading";
import Footer from "../components/footer";
import SkillsList from "../components/skills-list";

const SkillsPage = ({data}) => {
    return <Layout>
        <Header pageColor="var(--skills-green)"/>
        <main
            css={css`
            --page-color: var(--skills-green);
          `}
        >
            <LandingFold>
                <Img
                    fluid={data.frog.childImageSharp.fluid}
                    alt="Happy Albertosaurus vector graphic. By yours truly, Josh Steele."
                />
                <PageHeading title="Skills Breakdown"/>
                <p>
                    This page is broken into three sections, the core competencies that I focus on in my work, the skills that support them, and finally stuff that I've worked on and am familiar with but haven't based an entire position around.
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
                      @media screen and (min-width: 1120px){
                        height: 65vh;
                        grid-row: 3;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      }
                    `}
                >
                    <SectionHeading title="Core Competencies"/>
                    <p>
                        When learning I pick out tech that fits where I think the market is going. These days that's mostly JavaScript.
                        <br/> <br/>
                        When sorting through applicants, you need to kiss a lot of frogs to find your metaphorical prince, or really even a decent looking frog. I appreciate your time here, so I’ll limit any long form text content to (appropriately flagged) sections on pages further in.
                    </p>
                </div>
                <SkillsList>
                    <li>React</li>
                    <li>Gatsby JS</li>
                    <li>Emotion JS</li>
                    <li>Next.js</li>
                    <li>Laravel</li>
                </SkillsList>
            </BodyFold>
            <BodyFold>
                <Img
                    fluid={data.supportingDivider.childImageSharp.fluid}
                    className="full-bleed"
                    alt="Generative art of overlapping green circles. Made by Josh Steele using Canvas."
                />
                <div
                    css={css`
                      @media screen and (min-width: 1120px){
                        height: 65vh;
                        grid-row: 3;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      }
                    `}
                >
                    <SectionHeading title="Supporting Skills"/>
                    <p>
                        Graphic design is a lot of fun as a hobby or a change of pace job. It's always handy to be able to crank out a quick graphic myself instead of waiting for a 3rd party.
                        <br/> <br/>
                        When sorting through applicants, you need to kiss a lot of frogs to find your metaphorical prince, or really even a decent looking frog. I appreciate your time here, so I’ll limit any long form text content to (appropriately flagged) sections on pages further in.
                    </p>
                </div>
                <SkillsList>
                    <li>Github</li>
                    <li>GraphQL</li>
                    <li>REST APIs</li>
                    <li>Technical SEO</li>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                    <li>AdWords</li>
                    <li>Google Analytics</li>
                    <li>JetBrains IDEs</li>
                </SkillsList>
            </BodyFold>
            <BodyFold>
                <Img
                    fluid={data.generalDivider.childImageSharp.fluid}
                    className="full-bleed"
                    alt="Generative art of overlapping green circles. Made by Josh Steele using Canvas."
                />
                <div
                    css={css`
                      @media screen and (min-width: 1120px){
                        height: 65vh;
                        grid-row: 3;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      }
                    `}
                >
                <SectionHeading title="General Experience"/>
                <p>
                    I've worked with WordPress on a bunch of projects, and consider myself fairly handy with the framework. But there is such a wide range of material in the ecosystem that's either niche or unmaintained that I prefer to avoid it when possible.
                    <br/> <br/>
                    When sorting through applicants, you need to kiss a lot of frogs to find your metaphorical prince, or really even a decent looking frog. I appreciate your time here, so I’ll limit any long form text content to (appropriately flagged) sections on pages further in.
                </p>
                </div>
                <SkillsList>
                    <li>Copy Writing</li>
                    <li>Corporate Branding</li>
                    <li>Wordpress</li>
                    <li>A11y Accessibility</li>
                    <li>Woo Commerce</li>
                    <li>Shopify</li>
                </SkillsList>
            </BodyFold>
        </main>
        <Footer/>
    </Layout>
}

export const query = graphql`
    query {
        frog: file(relativePath: { eq: "Frog.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        landingDivider: file(relativePath: { eq: "skills-circle-divider-0.5141201651008922.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        supportingDivider: file(relativePath: { eq: "skills-circle-divider-0.8367436603112071.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        generalDivider: file(relativePath: { eq: "skills-circle-divider-0.6791828960244695.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default SkillsPage