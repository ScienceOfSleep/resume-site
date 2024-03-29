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
import SEO from "../components/seo";

const AboutPage = ({data}) => {
    const valuesDivider = [
        data.valuesDividerMobile.childImageSharp.fluid,
        {
            ...data.valuesDivider.childImageSharp.fluid,
            media: `(min-width: 1120px)`,
        },
    ]

    return <Layout>
        <Header pageColor="var(--about-orange)"/>
        <SEO
            title="About"
            description="Who is Josh Steele? What does he like to do? What does he believe in? Find out on the About page!"
            image="/Hot-Tub.png"
        />
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
                    I am an optimizer. For as long as I can remember I've been fascinated by plans and strategies. Figuring out why some plans work while others fail has been a focus of my studies for as long as I've been able to direct them.
                    <br/><br/>
                    Whether it's historical patterns, video games, or fantasy football, I really enjoy picking out trends and getting ahead of the curve. With that in mind, going from a bachelors degree in history to tech seemed downright intuitive.
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
                <Img
                    fluid={data.construction.childImageSharp.fluid}
                    alt="Construction party promo poster"
                    css={css`
                      width: 70%;
                      height: fit-content;
                      display: none;
                      @media screen and (min-width: 1120px){
                        display: initial;
                        grid-column: 3 !important;
                        grid-row: 3/5;
                        align-self: center;
                        justify-self: end;
                        border: 5px solid #7a6a53;
                        border-radius: 3px;
                        box-shadow: 4px 5px 4px hsl(202, 21%, 52%, 0.6);
                      }
                    `}
                />
                <div
                    css={css`
                      @media screen and (min-width: 1120px){
                        grid-row: 2/5;
                        display: flex;
                        flex-direction: column;
                        align-self: center;
                      }
                    `}
                >
                <SectionHeading title="My Hobbies"/>
                <p>
                    I enjoy board games, video games, and fantasy football as natural extensions of my love of strategy. I devour business and political news for much of the same reason. On any given week I'll have a fun fact from the newest edition of The Economist, feel free to ask me for one during the interview!
                    <br/> <br/>
                    An interest in strategy and optimization have a multitude of applications to my own life planning as well. There's a pretty predictable set of spreadsheets organizing my finances, I use Notion to organize my thoughts, and I've got a Home Assistant server making sure all my lights and my coffee are on schedule.
                    <br/><br/>
                    Design is always fun to mess around with too. I learned how to use Illustrator making hype posters for house parties, and though those aren't on the itinerary anymore it's always fun to take some zoom event to the next level with a custom banner.
                </p>
                </div>
            </BodyFold>
            <BodyFold>
                <Img
                    fluid={valuesDivider}
                    className="full-bleed"
                    alt="Generative art of overlapping orange and green circles. Made by Josh Steele using Canvas."
                />
                <SectionHeading title="My Values"/>
                <p>
                    I'm a pretty lucky guy and I've had a lot of advantages in life, so a lot of what I do is oriented around paying that forward and helping other people have the same opportunities I've had. I had a great time in school, so I got involved in student government to foster and preserve that culture.
                    <br/><br/>
                    Tragically, in the real world doing good is more complicated than being a fun person with good intentions. “The Ethics of Foreign Aid” was a foundational university course for me, it really drove home the fact that you <i>need</i> to know your stuff in order to do good, or to simply avoid causing harm. I plan to learn for the rest of my life both because it's fun and because it's necessary to have the type of impact I want.
                    <br/><br/>
                    In 15-20 years I plan on 'retiring' to work / volunteer in the nonprofit sector. What exactly that'll look like depends a lot on what I pick up in the meantime. Over the course of that 15-20 I'll absorb everything I can, and help out a bit on the side, so that I can really give it my best when I get there.
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
        construction: file(relativePath: { eq: "Construction-Party-Poster.jpg" }) {
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
        landingDividerMobile: file(relativePath: { eq: "about-circle-divider-mobile-0.9030915610258381.png" }) {
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
        valuesDividerMobile: file(relativePath: { eq: "about-circle-divider-mobile-0.6400125353479997.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default AboutPage