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
    const supportingDivider = [
        data.supportingDividerMobile.childImageSharp.fluid,
        {
            ...data.supportingDivider.childImageSharp.fluid,
            media: `(min-width: 1120px)`,
        },
    ]

    const generalDivider = [
        data.generalDividerMobile.childImageSharp.fluid,
        {
            ...data.generalDivider.childImageSharp.fluid,
            media: `(min-width: 1120px)`,
        },
    ]

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
                    The page below is broken into three sections, the core competencies that I focus on in my work, the skills that support them, and finally stuff that I've worked on and am familiar with but haven't based an entire position around.
                    <br/> <br/>
                    I've written a bit about why I've put different tools at different levels, as well as how they fit into my workflow as a whole. Underlying all of this is the guiding philosophy that self-sufficiency is key for the place I'm at in my career. Adaptability is another core concept, and so I'll typically focus more time on skill sets with a high degree of transferability.
                </p>
                <Img
                    fluid={data.landingDivider.childImageSharp.fluid}
                    alt="'Random circles generated using canvas' by Josh Steele"
                />
            </LandingFold>
            <BodyFold>
                <Img
                    fluid={data.landingDividerMobile.childImageSharp.fluid}
                    alt="'Random circles generated using canvas' by Josh Steele"
                    css={css`
                      grid-column: 1 / -1 !important;
                      margin: 1.5rem 0 1rem;
                      box-shadow: 0 4px 4px hsl(202, 21%, 52%, 0.6), 0 -4px 5px hsl(202, 21%, 52%, 0.6);
                      width: 100%;
                      @media screen and (min-width: 1120px){
                        display: none;
                      }
                    `}
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
                    <SectionHeading title="Core Competencies"/>
                    <p>
                        When learning I pick out tech that fits where I think the market is going. These days that's mostly JavaScript. In my experience the perks of the JS ecosystem outweigh any idiosyncrasies that come with it.
                        <br/> <br/>
                        The profession is all about constant learning. It may not be feasible to stay up to date on every new framework, build tool, css trick, animation library, design system, project management methodology, etc. It still makes sense to stay up to date on one of each though, and it tends to make the work easier rather than harder in my experience.
                        <br/><br/>
                        Laravel was the first framework that I learned, and thanks to the remarkable DX it still holds a fond place in my heart. It's rare that I have to do a lot of back-end work from scratch, but when I do it's a real treat using Laravel to do it.
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
                    fluid={supportingDivider}
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
                        When learning APIs, I started with GraphQL funnily enough; the way Gatsby integrates with it made it a breeze. GraphQL priority made some technical interviews unnecessarily complicated though, so in the name of job security I brought my REST API knowledge up to par as well.
                        <br/><br/>
                        I've got experience in a wide range of SEO techniques, from well researched keywords and eloquent schema to generic keyword stuffing. It's not an area I'm passionate about, but having someone else in a dedicated marketing role is a luxury so I make a point of staying on top of Moz standards.
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
                    fluid={generalDivider}
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
                    Accessibility is a focus for me personally, though it is not always a priority for my employers. I do my best to pick tools that come with a high level of compliance by default (Gatsby is excellent for this), and I keep the DOM semantics and tab order in mind as I design my sites. That all being said, it's a big field and because it's so important I need an excellent command of the topic before I'm comfortable citing this as one of my main selling points.
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
        landingDividerMobile: file(relativePath: { eq: "skills-circle-divider-mobile-0.1276152478482826.png" }) {
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
        supportingDividerMobile: file(relativePath: { eq: "skills-circle-divider-mobile-0.7833632694060264.png" }) {
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
        generalDividerMobile: file(relativePath: { eq: "skills-circle-divider-mobile-0.8919031689749717.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default SkillsPage