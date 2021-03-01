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

const AboutPage = ({data}) => {
    return <Layout>
        <Header pageColor="var(--about-orange)"/>
        <main
            css={css`
            --page-color: var(--about-orange);
          `}
        >
            <LandingFold>
                <Img
                    fluid={data.hotTub.childImageSharp.fluid}
                    alt="Happy Albertosaurus vector graphic. By yours truly, Josh Steele."
                />
                <PageHeading title="More About Josh"/>
                <p>
                    I am an optimizer. For as long as I can remember I’ve been fascinated by plans and strategies; figuring out why some plans work while others fail has been a focus of my studies for as long as I’ve been able to direct them. With that in mind, going from history to tech seemed downright intuitive.
                </p>
                <Img
                    fluid={data.landingDivider.childImageSharp.fluid}
                    alt="'Random circles generated using canvas' by Josh Steele"
                />
            </LandingFold>
            <BodyFold>
                <SectionHeading title="My Hobbies"/>
                <p>
                    I enjoy board games, video games, and fantasy football as natural extensions of my love of strategy. I devour business and political news as an extension of my loves of plans. On any given week I’ll have a fun fact from the newest edition of The Economist. For example: on the island of Zanzibar you cannot own land, only lease it from the government. But you can own trees, which are commonly passed down through generations. I love that because it’s so unique, makes large scale property developments a pain too because it’s such a strange concept for foreign firms.
                    <br/> <br/>
                    There’s a pretty predictable set of spreadsheets organizing my finances, I use Notion to organize my thoughts, and I’ve got a Home Assistant server making sure all my lights and my coffee are on schedule.
                </p>
            </BodyFold>
            <BodyFold>
                <Img
                    fluid={data.valuesDivider.childImageSharp.fluid}
                    className="full-bleed"
                    alt="Generative art of overlapping green circles. Made by Josh Steele using Canvas."
                />
                <SectionHeading title="My Values"/>
                <p>
                    This is the overview/elevator pitch page. I’ll give you a quick rundown on what I’ve done and what I prioritise while the site will give you an idea of what I’m like and what I can do.
                    <br/> <br/>
                    When sorting through applicants, you need to kiss a lot of frogs to find your metaphorical prince, or really even a decent looking frog. I appreciate your time here, so I’ll limit any long form text content to (appropriately flagged) sections on pages further in.
                    <br/> <br/>
                    When sorting through applicants, you need to kiss a lot of frogs to find your metaphorical prince, or really even a decent looking frog. I appreciate your time here, so I’ll limit any long form text content to (appropriately flagged) sections on pages further in.
                    <br/> <br/>
                    When sorting through applicants, you need to kiss a lot of frogs to find your metaphorical prince, or really even a decent looking frog. I appreciate your time here, so I’ll limit any long form text content to (appropriately flagged) sections on pages further in.
                    <br/> <br/>
                    When sorting through applicants, you need to kiss a lot of frogs to find your metaphorical prince, or really even a decent looking frog. I appreciate your time here, so I’ll limit any long form text content to (appropriately flagged) sections on pages further in.
                </p>
            </BodyFold>
        </main>
        <Footer/>
    </Layout>
}

export const query = graphql`
    query {
        hotTub: file(relativePath: { eq: "Hot-Tub.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        landingDivider: file(relativePath: { eq: "about-circle-divider-0.5237896631094954.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        valuesDivider: file(relativePath: { eq: "about-circle-divider-0.16669958042057553.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default AboutPage