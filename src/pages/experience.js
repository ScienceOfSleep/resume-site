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
import CardContainer from "../components/card-container";
import LogoCard from "../components/logo-card";
import Footer from "../components/footer";

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
            <BodyFold>
                <Img
                    fluid={data.contractDivider.childImageSharp.fluid}
                    className="full-bleed"
                    alt="Random overlapping colorful circles. Generative art by Josh Steele made using Canvas."
                />
                <div
                    css={css`
                  @media screen and (min-width: 1120px){
                    padding: 3rem 0 2rem;
                  }
                `}
                >
                    <SectionHeading title="Contract Work"/>
                    <p>
                        Here are a few of my recent highlight projects. I want my projects to be useful, and not just as learning experiences. That desire keeps me out of the rut of calculator/to-do style tutorial-projects, and helps me stay motivated on long days.
                        <br/> <br/>
                        In the absence of inspiration, iteration will do just fine. That's the motto I stick to when pushing through brain fog or bad days. I make a point to do at least 5 minutes of code a day. Usually 5 minutes of code turns into more, but even when it doesn't that's still an updated readme or a new graphic that I have ready for when things are clicking.
                    </p>
                </div>
                <CardContainer>
                    <LogoCard
                        borderColor="#DB444A"
                        pointOne="Built with Shopify's Liquid framework."
                        pointTwo="Most maintainable drag and drop code I've worked with."
                        pointThree="No tech skills required for maintenance and editing."
                    >
                        <Img
                            fluid={data.dip.childImageSharp.fluid}
                            alt="DIP Logo"
                            css={css`
                            width: 100%;
                        `}
                        />
                        <h3>
                            Draw It Paint
                        </h3>
                    </LogoCard>
                    <LogoCard
                        borderColor="var(--page-color)"
                        pointOne="Gatsby frontend and Contentful backend."
                        pointTwo="Super low upkeep costs to match their super low budget."
                        pointThree="Love coding for causes, it's a big reason why I learned."
                    >
                        <Img
                            fluid={data.dip.childImageSharp.fluid}
                            alt="Feminists at the University of Alberta logo"
                            css={css`
                          width: 100%;
                      `}
                        />
                        <h3>
                            FUA Club Site
                        </h3>
                    </LogoCard>
                    <LogoCard
                        borderColor="#DBD718"
                        pointOne="Generative art project. Spits out graphics based on code."
                        pointTwo="Learning Canvas and WebGL with useful outputs."
                        pointThree="Lets me create original graphics very quickly."
                    >
                        <Img
                            fluid={data.dip.childImageSharp.fluid}
                            alt="Calgary Stairs logo"
                            css={css`
                          width: 100%;
                      `}
                        />
                        <h3>
                            Genart
                        </h3>
                    </LogoCard>
                    <LogoCard
                        borderColor="green"
                        pointOne="Built with WP, custom CSS for tuning."
                        pointTwo="Hand-gathered stats and pics for stair workouts across Calgary."
                        pointThree="All the up and down sides of a drag and drop project."
                    >
                        <Img
                            fluid={data.dip.childImageSharp.fluid}
                            alt="Calgary Stairs logo"
                            css={css`
                          width: 100%;
                      `}
                        />
                        <h3>
                            Calgary Stairs
                        </h3>
                    </LogoCard>
                </CardContainer>
            </BodyFold>
        </main>
        <Footer/>
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
        contractDivider: file(relativePath: { eq: "experience-circle-divider-0.24364911449809123.png" }) {
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