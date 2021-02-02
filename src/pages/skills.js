import React from "react"
import {css} from "@emotion/core"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Header from "../components/header";
import LandingFold from "../components/landing-fold";
import Img from "gatsby-image";
import PageHeading from "../components/page-heading";

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
                    This is the overview/elevator pitch page. I’ll give you a quick rundown on what I’ve done and what I prioritise while the site will give you an idea of what I’m like and what I can do.
                    <br/> <br/>
                    When sorting through applicants, you need to kiss a lot of frogs to find your metaphorical prince, or really even a decent looking frog. I appreciate your time here, so I’ll limit any long form text content to (appropriately flagged) sections on pages further in.
                </p>
                <Img
                    fluid={data.landingDivider.childImageSharp.fluid}
                    alt="'Random circles generated using canvas' by Josh Steele"
                />
            </LandingFold>
        </main>
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
        landingDivider: file(relativePath: { eq: "web-circle-hero-0.8925212347623344.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default SkillsPage