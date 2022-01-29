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
import DIPSVG from "../components/svgs/dip-svg";
import PulmanairSVG from "../components/svgs/pulmanair-svg";
import SEO from "../components/seo";

const ExperiencePage = ({data}) => {
    const dipDivider = [
        data.dipDividerMobile.childImageSharp.fluid,
        {
            ...data.dipDivider.childImageSharp.fluid,
            media: `(min-width: 1120px)`,
        },
    ]

    const silvertipDivider = [
        data.silvertipDividerMobile.childImageSharp.fluid,
        {
            ...data.silvertipDivider.childImageSharp.fluid,
            media: `(min-width: 1120px)`,
        },
    ]

    const contractDivider = [
        data.contractDividerMobile.childImageSharp.fluid,
        {
            ...data.contractDivider.childImageSharp.fluid,
            media: `(min-width: 1120px)`,
        },
    ]

    return <Layout>
        <Header pageColor="var(--experience-red)"/>
        <SEO
            title="Experience"
            description="The different places Josh Steele has been employed, as well as a sample of significant contract work he's done."
            image="/Bunicula.png"
        />
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
                    I describe myself as a front end developer as that's my primary focus, but in practice I've done everything tech and graphic design related that would be required at a small firm. I have a working knowledge of everything from responsive branding to small scale back end and dev-ops work, and have jumped in to do patch work in those areas when called upon. That's the small business life, and getting to the point where I can comfortably manage all that has been really interesting.
                </p>
                <Img
                    fluid={data.landingDivider.childImageSharp.fluid}
                    alt="'Random circles generated using canvas' by Josh Steele"
                />
            </LandingFold>
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
            <BodyFold>
                <Img
                    fluid={data.creologic.childImageSharp.fluid}
                    alt="Creologic logo"
                    css={css`
                      width: 320px;
                      height: fit-content;
                      justify-self: center;
                      @media screen and (min-width: 1120px){
                        grid-column: 3 !important;
                        grid-row: 3/5;
                        align-self: center;
                      }
                    `}
                />
                <div
                    css={css`
                      @media screen and (min-width: 1120px){
                        min-height: 65vh;
                        grid-row: 3;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      }
                    `}
                >
                    <SectionHeading title="Creologic Design Inc."/>
                    <h3 css={css`text-align: center`}>
                        Web Developer
                    </h3>
                    <h3 css={css`text-align: center`}>
                        April 2021 - Present
                    </h3>
                    <p css={css`margin: 5px 0 10px`}>
                      A traditional agency job where I develop sites for clients. We work with a very wide range of tech at Creologic, everything from classic ASP to Node.js depending on the project.
                      <br/><br/>
                      I'm proud of my contributions to the firm's dev infrastructure, particularly the testing system that I proposed and developed. I juggle 25-35 clients of varying sizes. As a result, there's frequently repetition in the tasks I'm performing. Counter-intuitively, this is one of the fun parts for me. I really enjoy optimizing workflows and automating tasks where appropriate (a.k.a. when developing them <i>atually</i> saves time)
                    </p>
                </div>
            </BodyFold>
            <BodyFold>
                <Img
                    fluid={dipDivider}
                    className="full-bleed"
                    alt="Generative art of overlapping orange circles. Made by Josh Steele using Canvas."
                />
                <div
                    css={css`
                      width: 250px;
                      height: fit-content;
                      justify-self: center;
                      @media screen and (min-width: 1120px){
                        grid-column: 3 !important;
                        grid-row: 2/5;
                        align-self: center;
                      }
                    `}
                >
                <DIPSVG
                    width="100%"
                />
                </div>
                <div
                    css={css`
                      @media screen and (min-width: 1120px){
                        min-height: 65vh;
                        grid-row: 3;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      }
                    `}
                >
                    <SectionHeading title="Draw It Paint"/>
                    <h3 css={css`text-align: center`}>
                        Web Developer
                    </h3>
                    <h3 css={css`text-align: center`}>
                        February 2020 - March 2021
                    </h3>
                    <p css={css`margin: 5px 0 10px`}>
                        Returned to Edmonton and started work at Draw It Paint just as covid-19 was really starting to take off. There were plenty of interesting challenges of both traditional and new varieties. My first day was spent evaluating a stereotypical WordPress behemoth, with page load times stretching into the 20+ second range.
                        <br/><br/>
                        I proposed rebuilding the site in GatsbyJS, keeping the blog and store as a backend CMS. The transition went well, and we were able to hit the 2 second target I'd set for initial load time. though the blog ended up not being a priority moving forward. This was one of the less serious issues that could've been solved by more thoroughly exploring our business needs before starting.
                        <br/><br/>
                        About 6 months into the new setup, concerns were raised about the experience required to modify and maintain a site written in React. It's a small shop and ideally anyone would be able to hop on and make changes when needed. So we decided to rebuild the site again this time on Shopify. I coordinated work for this project with my boss as well as our marketing team and video editor / graphic designer.
                    </p>
                </div>
            </BodyFold>
            <BodyFold>
                <Img
                    fluid={silvertipDivider}
                    className="full-bleed"
                    alt="Generative art of overlapping orange circles. Made by Josh Steele using Canvas."
                />
                <Img
                    fluid={data.silvertip.childImageSharp.fluid}
                    alt="Silvertip logo, by Josh Steele"
                    css={css`
                      width: 350px;
                      height: fit-content;
                      justify-self: center;
                      @media screen and (min-width: 1120px){
                        grid-column: 3 !important;
                        grid-row: 3/5;
                        align-self: center;
                      }
                    `}
                />
                <div
                    css={css`
                      @media screen and (min-width: 1120px){
                        min-height: 65vh;
                        grid-row: 3;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      }
                    `}
                >
                    <SectionHeading title="Silvertip"/>
                    <h3 css={css`text-align: center`}>
                        Graphic & Web Designer
                    </h3>
                    <h3 css={css`text-align: center`}>
                        April 2017 - January 2020
                    </h3>
                    <p css={css`margin: 5px 0 10px`}>
                        My time at Silvertip started as a simple business card contract, which evolved into a logo contract, which then in turn evolved into a full time general purpose 'computer person' role.
                        <br/><br/>
                        As is common in startups, I wore a lot of hats. While working on the website and some smart documents (Google Docs & Javascript) I discovered my passion for coding. I was lucky enough to qualify for a government sponsored fast-track program at SAIT to bring me up to speed on industry standards, and resumed full-time work once I finished.
                        <br/><br/>
                        We did estate planning and family business governance consulting, so as part of my job I got to speak with a series of successful business owners about what got them where they were and where they wanted to go next. I was also working my way through a Trust and Estate Practitioner (TEP) certificate, and had passed the trust law exam when one of the founders passed and the business started to wind down.
                    </p>
                </div>
            </BodyFold>
            <BodyFold>
                <Img
                    fluid={contractDivider}
                    className="full-bleed"
                    alt="Random overlapping colorful circles. Generative art by Josh Steele made using Canvas."
                />
                <div
                    css={css`
                    @media screen and (min-width: 1120px){
                        grid-row: 3;
                  }
                `}
                >
                    <SectionHeading title="Contract Work"/>
                    <p>
                        Graduating into an oil crash and public sector freeze was an interesting experience. By 2015 the writing was on the wall for the Albertan economy so sticking it out for another boom seemed unwise. Self-improvement through tech was one of the few bright paths I could see for myself, so I took a risk and went for it.
                        <br/> <br/>
                        One of the beautiful things about tech is that all experience is relevant experience. Research skills are excellent for sorting valuable information from blogspam. History and current events help tremendously with identifying business needs and solutions. Building around those skills let me break into the very saturated lower end of the industry and support myself until I landed a full time gig.
                    </p>
                </div>
                <CardContainer>
                    <LogoCard
                        borderColor="#4A434A"
                        pointOne="Built with Shopify's Liquid framework."
                        pointTwo="Side project from the same group as Draw It Paint."
                        pointThree="Only did the code, noted the copy and design need work."
                    >
                        <PulmanairSVG/>
                        <h3>
                            Pulman Air
                        </h3>
                    </LogoCard>
                    <LogoCard
                        borderColor="#67aa8b"
                        pointOne="Smart content calendar system to bring the 23 committees together."
                        pointTwo="Membership card design."
                        pointThree="Promotional material design for a variety of events."
                    >
                        <Img
                            fluid={data.mlca.childImageSharp.fluid}
                            alt="Marda Loop Community Association logo"
                            css={css`
                          width: 100%;
                      `}
                        />
                        <h3>
                            MLCA
                        </h3>
                    </LogoCard>
                    <LogoCard
                        borderColor="#e99b27"
                        pointOne="Internship as part of my SAIT program."
                        pointTwo="Developed and maintained a variety of WP sites."
                        pointThree="Created and monitored Google AdWords campaigns."
                    >
                        <Img
                            fluid={data.steppmedia.childImageSharp.fluid}
                            alt="Stepp Media logo"
                            css={css`
                                  width: 100%;
                                `}
                        />
                        <h3>
                            Stepp Media
                        </h3>
                    </LogoCard>
                    <LogoCard
                        borderColor="#534744"
                        pointOne="My first contract applying graphic design and marketing skills."
                        pointTwo="Business card and logo design."
                        pointThree="Recently updated material for Bison Low Carbon Ventures."
                    >
                        <Img
                            fluid={data.bison.childImageSharp.fluid}
                            alt="Bison Oil and Gas logo by Josh Steele"
                            css={css`
                              width: 73%;
                            `}
                        />
                        <h3>
                            Bison Oil & Gas
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
        landingDividerMobile: file(relativePath: { eq: "experience-circle-divider-mobile-0.26409089864366986.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        dipDivider: file(relativePath: { eq: "experience-circle-divider-0.9069536057991057.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        dipDividerMobile: file(relativePath: { eq: "experience-circle-divider-mobile0.4431490064535335.png" }) {
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
        silvertipDividerMobile: file(relativePath: { eq: "experience-circle-divider-mobile-0.8683339630064288.png" }) {
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
        contractDividerMobile: file(relativePath: { eq: "experience-circle-divider-mobile-0.5146572532874458.png" }) {
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
        creologic: file(relativePath: { eq: "creologic-logo.jpg" }) {
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
        creologic: file(relativePath: { eq: "creologic-logo.jpg" }) {
            childImageSharp {
                fluid(quality:100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        steppmedia: file(relativePath: { eq: "steppmedia-logo.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        bison: file(relativePath: { eq: "Bison-Logo.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        mlca: file(relativePath: { eq: "MLCA-Logo.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default ExperiencePage