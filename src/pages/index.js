import React from "react"
import {css} from "@emotion/core"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import blockCyclone from "../images/block-cyclone.gif"
import SEO from "../components/seo"
import LaravelSVG from "../components/svgs/laravel-svg";
import LogoCard from "../components/logo-card";
import ReactSVG from "../components/svgs/react-svg";
import SectionHeading from "../components/section-heading";
import LinkButton from "../components/link-button";
import WorkContainer from "../components/work-container";
import PageHeading from "../components/page-heading";
import Footer from "../components/footer";
import Header from "../components/header";
import LandingFold from "../components/landing-fold";
import BodyFold from "../components/body-fold";
import CardContainer from "../components/card-container";
import TechGif from "../components/tech-gif";
import DIPSVG from "../components/svgs/dip-svg";
import GithubSVG from "../components/svgs/github-svg";

const IndexPage = ({data}) => {

    const projectsImage = [
        data.greeneye.childImageSharp.fluid,
        {
            ...data.projectsDesktop.childImageSharp.fluid,
            media: `(min-width: 1120px)`,
        },
    ]

    const aboutImage = [
        data.aboutDividerMobile.childImageSharp.fluid,
        {
            ...data.aboutDesktop.childImageSharp.fluid,
            media: `(min-width: 1120px)`,
        },
    ]

    const experienceDivider = [
        data.orangecircles.childImageSharp.fluid,
        {
            ...data.experienceDivider.childImageSharp.fluid,
            media: `(min-width: 1120px)`,
        },
    ]

    return <Layout>

      <Header pageColor="var(--landing-blue)"/>
      <SEO 
        title="Home" 
        description="Welcome to Josh Steele's resume website. Find out the things Josh has done for money, the things he'd do for money, and a few things that he does for free"
        image="/Albertasaurus.png"
      />
      <main
        css={css`
          --page-color: var(--landing-blue);
        `}
      >
        <LandingFold>
            <Img
                fluid={data.albertasaurus.childImageSharp.fluid}
                alt="Happy Albertosaurus vector graphic. By Josh Steele."
            />
            <PageHeading title="Welcome to my CV"/>
            <p>
                Hi! I know you've got to kiss a lot of frogs to find your metaphorical prince so I'll keep things concise here. This site is designed to both show and tell; the art is by me and it's coded with my favorite tech.
                <br/> <br/>
                After skimming the home page you should have a general idea what I like to do and where I've done it in the past. For more detail you can check out each section's dedicated page where I dig into the topic.
            </p>
            <Img
                fluid={data.hero.childImageSharp.fluid}
                alt="'Random circles generated using canvas' by Josh Steele"
            />
        </LandingFold>
        <BodyFold>
            <TechGif
                src={blockCyclone}
                alt="Cyclone of blocks matching tech logo colors. Made with WebGL and Three JS by Josh Steele"
            />
            <SectionHeading title="Tech I'm Using"/>
            <CardContainer>
                <LogoCard
                    borderColor="#DB444A"
                    pointOne="The gold standard for PHP frameworks."
                    pointTwo="Batteries included, building and debugging are a joy."
                    pointThree="Generates back-ends quickly and professionally."
                >
                    <LaravelSVG/>
                    <h3>
                        Laravel
                    </h3>
                </LogoCard>
                <LogoCard
                    borderColor="#2D9CDB"
                    pointOne="The hot JS framework; very good resources and ecosystem as a result."
                    pointTwo="Component focus feels natural for the modern web."
                    pointThree="I like working with JSX and CSS-in-JS."
                >
                    <ReactSVG/>
                    <h3>
                        React
                    </h3>
                </LogoCard>
                <LogoCard
                    borderColor="#DBD718"
                    pointOne="Emotion's flexibility perfectly complements my flow in React."
                    pointTwo="Sidesteps scope and specificity problems."
                    pointThree="Combines the best parts of SASS and CSS with the dynamism of JS."
                >
                    <Img
                        fluid={data.emotion.childImageSharp.fluid}
                        alt="Emotion JS Logo"
                        css={css`
                          width: 100%;
                        `}
                    />
                    <h3>
                        Emotion JS
                    </h3>
                </LogoCard>
                <LogoCard
                    borderColor="#663399"
                    pointOne="Low overhead and blazing speed right out of the box."
                    pointTwo="Automated image processing and lazy loading is very slick."
                    pointThree="Secure and accessible by default."
                >
                    <Img
                        fluid={data.gatsby.childImageSharp.fluid}
                        alt="GatsbyJS logo"
                        css={css`
                          width: 90%;
                        `}
                    />
                    <h3>
                        Gatsby
                    </h3>
                </LogoCard>
            </CardContainer>
            <p>
                These are the tools I reach for first when digging into a project. I consider them my “core competencies”, aka what I count on to bring home the (vegetarian) bacon.
                <br/><br/>
                It's fairly common that I won't have a complete stack of my choosing to work with, and as a result I've worked with many other languages/frameworks/tools over my career.
                <br/><br/>
                For more detail on my core and supporting skills checkout my Skills Breakdown page!
            </p>
            <LinkButton to="/skills">Skills Breakdown</LinkButton>
        </BodyFold>
        <BodyFold>
            <Img
                fluid={experienceDivider}
                className="full-bleed"
                alt="Generative art of overlapping orange circles. Made by Josh Steele using Canvas."
            />
            <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  @media screen and (min-width: 1120px){
                    grid-row: 3;
                    grid-column: 2/4 !important;
                    justify-content: center;
                    justify-self: center;
                    max-width: 800px;
                  }
                `}
            >
            <SectionHeading title="Work Experience"/>
            <p>
                I transitioned into tech in 2017, coming from marketing and graphic design. One of my graphic design contracts turned into a catch-all IT position at Silvertip, a consultancy startup focusing on family business and estate transfers.
                <br/> <br/>
                Silvertip was closing up shop in 2020, but I was lucky enough to land a job at Draw It Paint right before Covid kicked off. DIP managed to work through some of the scariest parts of the pandemic and into early 2021, at which point the web & marketing team was liquidated.
                <br/> <br/>
                The writing had been on the (whiteboard) wall at DIP for a long time, so I was ready to hit the ground running when word finally came that we were being let go. A month later (April 2021) I started my current role at Creologic Design inc. 
                <br/><br/> 
                I've also done quite a few short term contracts over the course of my career. To read about those or to get more details on my full time work check out my dedicated Career Timeline page!
            </p>
            <LinkButton to="/experience">Career Timeline</LinkButton>
            </div>
            <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  @media screen and (min-width: 1120px){
                    grid-row: 4;
                    grid-column: 2/4 !important;
                    flex-direction: row;
                    justify-content: center;
                  }
                `}
            >
            <WorkContainer>
            <Img
                    fluid={data.creologic.childImageSharp.fluid}
                    alt="Creologic Design Inc. logo"
                    css={css`
                      width: 80%;
                      @media screen and (min-width: 1120px){
                        width: 55%;
                      }
                    `}
                />
                <h3>Creologic Design Inc.</h3>
                <h4>March 2021 - Present</h4>
                <ul>
                    <li>Developing & maintaining a group of 30+ websites</li>
                    <li>Proposed, designed, and developed testing infrastructure</li>
                    <li>Building and designing new sites</li>
                </ul>
            </WorkContainer>
            <WorkContainer>
                <DIPSVG width="55%"/>
                <h3>Draw It Paint</h3>
                <h4>February 2020 - March 2021</h4>
                <ul>
                    <li>Built + maintained eCommerce sites in GatsbyJS & Shopify</li>
                    <li>Internal workflow optimization and automation</li>
                    <li>Coordinated graphic design work</li>
                </ul>
            </WorkContainer>
            <WorkContainer>
                <Img
                    fluid={data.silvertip.childImageSharp.fluid}
                    alt="Silvertip Family Enterprise logo, by Josh Steele"
                    css={css`
                      width: 80%;
                      @media screen and (min-width: 1120px){
                        width: 68%;
                      }
                    `}
                />
                <h3>Silvertip Advisory</h3>
                <h4>April 2017 - January 2020</h4>
                <ul>
                    <li>Designed a series of estate planning smart documents (Javascript and G-Suite)</li>
                    <li>Graphic design, responsive corporate branding</li>
                </ul>
            </WorkContainer>
            </div>
        </BodyFold>
        <BodyFold>
              <Img
                  fluid={projectsImage}
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
                <SectionHeading title="Recent Projects"/>
                <p>
                    Personal projects help me stay sharp while at the same time, ideally, producing something useful. I haven't run out of ideas yet, the main bottleneck I deal with is finding time to do them all.
                    <br/> <br/>
                    Volunteering, art, and other hobbies are all areas that motivate me to put time into a project and stay up to date on important tech.                    
                </p>
              </div>
              <CardContainer>
                  <LogoCard
                      borderColor="#349465"
                      pointOne="Demo App built with NextJS and MongoDB."
                      pointTwo="DB is referenced at build, then pages are served statically."
                      pointThree="Built the reference tool I wanted when playing LoL."
                  >
                      <Img
                          fluid={data.namimain.childImageSharp.fluid}
                          alt="Logo for Josh's 'Nami Main' App"
                          css={css`
                            width: 100%;
                          `}
                      />
                      <a href="https://www.namimain.com">
                        <h3>
                            Nami Main
                        </h3>
                      </a>
                  </LogoCard>
                  <LogoCard
                      borderColor="var(--page-color)"
                      pointOne="Gatsby frontend and Contentful backend."
                      pointTwo="Super low upkeep costs to match their super low budget."
                      pointThree="Love coding for causes, it's a big reason why I learned."
                  >
                  <Img
                      fluid={data.fua.childImageSharp.fluid}
                      alt="Feminists at the University of Alberta logo"
                      css={css`
                          width: 100%;
                      `}
                  />
                  <a href="https://www.feministsuofa.com/">
                    <h3>
                        FUA Club Site
                    </h3>
                  </a>
              </LogoCard>
              <LogoCard
                  borderColor="#4A434A"
                  pointOne="Generative art project. Spits out graphics based on code."
                  pointTwo="Learning Canvas and WebGL with useful outputs."
                  pointThree="Lets me create original graphics very quickly."
              >
                  <GithubSVG width="83%" color="#000000"/>
                  <a href="https://github.com/ScienceOfSleep/genart">
                    <h3>
                        Genart
                    </h3>
                  </a>
              </LogoCard>
              <LogoCard
                  borderColor="#DBD718"
                  pointOne="Built with WP, custom CSS for tuning."
                  pointTwo="Hand-gathered stats and pics for stair workouts across Calgary."
                  pointThree="All the up and down sides of a drag and drop project."
              >
                  <Img
                      fluid={data.calgarystairs.childImageSharp.fluid}
                      alt="Calgary Stairs logo"
                      css={css`
                          width: 100%;
                      `}
                  />
                  <a href="https://calgarystairs.com/">
                    <h3>
                        Calgary Stairs
                    </h3>
                  </a>
              </LogoCard>
              </CardContainer>
          </BodyFold>
          <BodyFold>
              <Img
                  fluid={aboutImage}
                  className="full-bleed"
                  alt="Abstract generative art by Josh Steele, made using Canvas."
              />
              <div
                  css={css`
                    @media screen and (min-width: 1120px){
                      grid-row: 3;
                    }
                  `}
              >
                <SectionHeading title="About Me"/>
                <p>
                    Big fan of politics, but not in the way that I want to debate my coworkers don't worry. I fell in love with code as a way to increase my positive impact, and the shape of my career reflects that. Being able to pump out a quick, low upkeep site on the side of my full time job is my current focus. As I learn my approach will evolve, so ideally by the time I hit retirement I'll be able to use the skills I've acquired to support all sorts of interesting organizations.
                    <br/> <br/>
                    Outside the deep stuff I'm super into fantasy and sci-fi novels; we're living in a golden age for them. I'll typically polish off a book a month with my trusty ereader / public library setup. Also very into a few fantasy football leagues every fall. They help me keep in touch with friends now that we're spreading out across the world, and it's a nice competitive outlet as well.
                </p>
              </div>
          </BodyFold>
      </main>
    <Footer/>
  </Layout>
}

export const query = graphql`
    query {
        albertasaurus: file(relativePath: { eq: "Albertasaurus.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        hero: file(relativePath: { eq: "web-circle-hero-0.8925212347623344.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        projectsDesktop: file(relativePath: { eq: "web-circle-divider-0.2744687086502904.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        aboutDesktop: file(relativePath: { eq: "index-circle-divider-0.9160890170272444.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        orangecircles: file(relativePath: { eq: "orange-crazy-circles.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        greeneye: file(relativePath: { eq: "green-eye.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        emotion: file(relativePath: { eq: "Emotion-Logo.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        gatsby: file(relativePath: { eq: "gatsby-icon.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        silvertip: file(relativePath: { eq: "Silvertip.jpg" }) {
            childImageSharp {
                fluid {
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
        stepp: file(relativePath: { eq: "steppmedia-logo.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        namimain: file(relativePath: { eq: "Nami-Main.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        fua: file(relativePath: { eq: "university-of-alberta-feminists-club-logo.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        calgarystairs: file(relativePath: { eq: "calgary-stairs-logo.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        aboutDividerMobile: file(relativePath: { eq: "index-circle-divider-mobile-0.7556794498232269.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        experienceDivider: file(relativePath: { eq: "index-circle-divider-0.5841806488392223.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default IndexPage
