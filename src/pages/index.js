import React from "react"
import {css} from "@emotion/core"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import blockCyclone from "../images/block-cyclone.gif"
import SEO from "../components/seo"
import Img from "gatsby-image"
import LaravelSVG from "../components/laravel-svg";
import LogoCard from "../components/logo-card";
import ReactSVG from "../components/react-svg";
import SectionHeading from "../components/section-heading";
import LinkButton from "../components/link-button";
import WorkContainer from "../components/work-container";
import PageHeading from "../components/page-heading";
import Footer from "../components/footer";
import Header from "../components/header";
import LandingFold from "../components/landing-fold";

const IndexPage = ({data}) => {

    const projectsImage = [
        data.greeneye.childImageSharp.fluid,
        {
            ...data.projectsDesktop.childImageSharp.fluid,
            media: `(min-width: 1120px)`,
        },
    ]

    const aboutImage = [
        data.pinkeye.childImageSharp.fluid,
        {
            ...data.aboutDesktop.childImageSharp.fluid,
            media: `(min-width: 1120px)`,
        },
    ]


    return <Layout>

      <Header pageColor="var(--landing-blue)"/>
      {/*<SEO title="Josh's Resume Site" />*/}
      <main
        css={css`
          --page-color: var(--landing-blue);
        `}
      >
        <LandingFold>
            <Img
                fluid={data.albertasaurus.childImageSharp.fluid}
                alt="Happy Albertosaurus vector graphic. By yours truly, Josh Steele."
            />
            <PageHeading title="Welcome to my CV"/>
            <p>
                This is the overview/elevator pitch page. I’ll give you a quick rundown on what I’ve done and what I prioritise while the site will give you an idea of what I’m like and what I can do.
                <br/> <br/>
                When sorting through applicants, you need to kiss a lot of frogs to find your metaphorical prince, or really even a decent looking frog. I appreciate your time here, so I’ll limit any long form text content to (appropriately flagged) sections on pages further in.
            </p>
            <Img
                fluid={data.hero.childImageSharp.fluid}
                alt="'Random circles generated using canvas' by Josh Steele"
            />
        </LandingFold>
        <section
            css={css`
              display: grid;
              grid-template-columns: var(--horizontal-margin) 1fr var(--horizontal-margin);
              > *{
                grid-column: 2;
              }
              margin-top: 20px;
              @media screen and (min-width: 1120px){
                grid-template-columns: minmax(10%, var(--horizontal-margin)) 1fr 1fr minmax(10%, var(--horizontal-margin));
                grid-template-rows: 7vh auto auto 14vh 540px 5vh;
                .heading{
                grid-row: 2;
                }
                a{
                  grid-row: 4;
                }
              }
            `}
        >
            <img
                src={blockCyclone}
                alt="Cyclone of blocks matching tech logo colors. Made with WebGL and Three JS by Josh Steele"
                css={css`
                  margin: 0 auto 1rem;
                  border: 2px solid var(--page-color);
                  border-radius: 100%;
                  padding: 2px;
                  @media screen and (min-width: 1120px){
                    grid-column: 3 !important;
                    grid-row: 2 / 4;
                    margin-top: 10%;
                    margin-left: 33%;
                    width: 175px;
                    border: 5px solid var(--page-color);
                  }
                `}
            />
            <SectionHeading title="Tech I'm Using"/>
            <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  @media screen and (min-width: 1120px){
                    flex-direction: row;
                    grid-row: 5;
                    grid-column: 2/4 !important;
                    justify-content: space-between;
                  }
                `}
            >
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
                pointThree="I enjoy working with JSX and CSS-in-JS."
            >
                <ReactSVG/>
                <h3>
                    React
                </h3>
            </LogoCard>
            <LogoCard
                borderColor="#DBD718"
                pointOne="Emotion's flexibility perfectly complements my coding flow in React."
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
            </div>
            <p
                css={css`
                  @media screen and (min-width: 1120px){
                    padding-top: .25rem;
                    padding-bottom: 1rem;
                    grid-row: 3;
                  }
                `}
            >
                These are the tools I reach for first when digging into a project. I consider them my “core competencies”, aka what typically brings home the (vegetarian) bacon.
                <br/><br/>
                It’s fairly common that I won’t have a complete stack of my choosing though, and as a result I’ve worked with many other languages/frameworks/tools over my career.
                <br/><br/>
                For more detail on my core and supporting skills checkout the breakdown on my Skills page!
            </p>
            <LinkButton to="/">Skills Breakdown</LinkButton>
        </section>
        <section
            css={css`
              margin-top: 1rem;
              display: grid;
              grid-template-columns: var(--horizontal-margin) 1fr var(--horizontal-margin);
              > *:not(.image){
                grid-column: 2;
              }
              .image{
                grid-column: 1 / -1;
                margin-bottom: 1rem;
              }
              @media screen and (min-width: 1120px){
                grid-template-columns: minmax(10%, var(--horizontal-margin)) 1fr 1fr minmax(10%, var(--horizontal-margin));
                grid-template-rows: 25vh auto;
                .image{
                  margin: 0;
                }
              }
            `}
        >
            <Img
                fluid={data.orangecircles.childImageSharp.fluid}
                className="image"
                alt="Generative art of overlapping orange circles. Made by Josh Steele using Canvas."
                css={css`
                    width: 100%;
                    box-shadow: 0 4px 4px hsl(202, 21%, 52%, 0.6), 0 -4px 5px hsl(202, 21%, 52%, 0.6);
                    margin: 1rem 0 1rem;
                `}
            />
            <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  @media screen and (min-width: 1120px){
                    grid-row: 2/4;
                    justify-content: center;
                    padding-bottom: 10%;
                  }
                `}
            >
            <SectionHeading title="Work Experience"/>
            <p>
                The nature of contract work makes it inconvenient to accurately sum up in a short section. I worked through technical school and the internship that followed. It’s also common for me to have a side gig or a pair of contracts going at the same time.
                <br/> <br/>
                These are the major themes, for more detail on them as well as my education and additional experience check out the timeline I’ve put together on the Experience page!            </p>
            <LinkButton to="/">Career Timeline</LinkButton>
            </div>
            <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  @media screen and (min-width: 1120px){
                    grid-column: 3 !important;
                    grid-row: 2;
                    align-items: flex-end;
                  }
                `}
            >
            <WorkContainer>
                <Img
                    fluid={data.dip.childImageSharp.fluid}
                    alt="Draw It Paint"
                    css={css`
                      width: 80%;
                      @media screen and (min-width: 1120px){
                        width: 50%;
                        border: solid 4px #333333;
                        margin-right: 3px;
                      }
                    `}
                />
                <h3>Draw It Paint</h3>
                <h4>February 2020 - Present</h4>
                <ul>
                    <li>Building/maintaining eCommerce sites in GatsbyJS & Shopify</li>
                    <li>Internal workflow optimization and automation</li>
                    <li>Coordinating graphics work</li>
                </ul>
            </WorkContainer>
            <WorkContainer>
                <Img
                    fluid={data.silvertip.childImageSharp.fluid}
                    css={css`
                      width: 80%;
                      @media screen and (min-width: 1120px){
                        width: 70%;
                      }
                    `}
                />
                <h3>Silvertip Advisory</h3>
                <h4>April 2017 - January 2020</h4>
                <ul>
                    <li>Designing a series of smart documents for estate planning and organization (Javascript and G-Suite)</li>
                    <li>Advising on governance and transition planning</li>
                    <li>Graphic design, responsive corporate branding</li>
                </ul>
            </WorkContainer>
            </div>
        </section>
          <section
              css={css`
                display: grid;
                grid-template-columns: var(--horizontal-margin) 1fr var(--horizontal-margin);
                > *:not(.image){
                  grid-column: 2;
                }
                .image{
                  grid-column: 1 / -1;
                }
                @media screen and (min-width: 1120px){
                  grid-template-columns: minmax(10%, var(--horizontal-margin)) 1fr 1fr minmax(10%, var(--horizontal-margin));
                  grid-template-rows: 25vh auto 540px 7vh;
                  .heading{
                    margin-top: 2rem;
                  }
                }
              `}
          >
              <Img
                  fluid={projectsImage}
                  className="image"
                  alt="Random overlapping colorful circles. Generative art by Josh Steele made using Canvas."
                  css={css`
                    width: 100%;
                    box-shadow: 0 4px 4px hsl(202, 21%, 52%, 0.6), 0 -4px 5px hsl(202, 21%, 52%, 0.6);
                    margin: 1rem 0 1rem;
                    @media screen and (min-width: 1120px){
                      height: 25vh;
                    }
                  `}
              />
              <div
                css={css`
                  @media screen and (min-width: 1120px){
                    grid-row: 2;
                    padding: 3rem 0 2rem;
                  }
                `}
              >
              <SectionHeading title="Recent Projects"/>
              <p>
                  Here are a few of my recent highlight projects. I want my projects to be useful, and not just as learning experiences. That desire keeps me out of the rut of calculator/to-do style tutorial-projects, and helps me stay motivated on long days.
                  <br/> <br/>
                  In the absence of inspiration, iteration will do just fine. That's the motto I stick to when pushing through brain fog or bad days. I make a point to do at least 5 minutes of code a day. Usually 5 minutes of code turns into more, but even when it doesn't that's still an updated readme or a new graphic that I have ready for when things are clicking.
              </p>
              </div>
              <div
                  css={css`
                  display: flex;
                  flex-direction: column;
                  @media screen and (min-width: 1120px){
                    flex-direction: row;
                    grid-column: 2/4 !important;
                    grid-row: 3;
                    justify-content: space-between;
                  }
                `}
              >
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
                  <h3
                      css={css`
                        font-family: 'montserrat', sans-serif;
                        font-weight: 600;
                        font-size: 2rem;
                      `}
                  >
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
                      fluid={data.fua.childImageSharp.fluid}
                      alt="Feminists at the University of Alberta logo"
                      css={css`
                          width: 100%;
                      `}
                  />
                  <h3
                      css={css`
                        font-family: 'montserrat', sans-serif;
                        font-weight: 600;
                        font-size: 2rem;
                      `}
                  >
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
                      fluid={data.calgarystairs.childImageSharp.fluid}
                      alt="Calgary Stairs logo"
                      css={css`
                          width: 100%;
                      `}
                  />
                  <h3
                      css={css`
                        font-family: 'montserrat', sans-serif;
                        font-weight: 600;
                        font-size: 2rem;
                      `}
                  >
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
                      fluid={data.calgarystairs.childImageSharp.fluid}
                      alt="Calgary Stairs logo"
                      css={css`
                          width: 100%;
                      `}
                  />
                  <h3
                      css={css`
                        font-family: 'montserrat', sans-serif;
                        font-weight: 600;
                        font-size: 2rem;
                      `}
                  >
                      Calgary Stairs
                  </h3>
              </LogoCard>
              </div>
          </section>
          <section
              css={css`
                display: grid;
                grid-template-columns: var(--horizontal-margin) 1fr var(--horizontal-margin);
                > *:not(.image){
                  grid-column: 2;
                }
                .image{
                  grid-column: 1 / -1;
                }
                @media screen and (min-width: 1120px){
                  grid-template-columns: var(--horizontal-margin) 1fr 1fr var(--horizontal-margin);
                  grid-template-rows: 25vh 7vh auto 7vh;
                }
              `}
          >
              <Img
                  fluid={aboutImage}
                  className="image"
                  alt="Abstract generative art by Josh Steele, made using Canvas."
                  css={css`
                    width: 100%;
                    box-shadow: 0 4px 4px hsl(202, 21%, 52%, 0.6), 0 -4px 5px hsl(202, 21%, 52%, 0.6);
                    margin: 1rem 0 1rem;
                    @media screen and (min-width: 1120px){
                      height: 25vh;
                    }
                  `}
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
                    Fun fact: I've listened to the audio edition of The Economist every week for the last ten years. You could say I'm a fan of current events.
                    <br/> <br/>
                    Gadgets and planning are also big hobbies of mine. I wake up to a fresh coffee synced to my alarm, and I've spent roughly as much time tinkering with automatic lighting as I've managed to save with it. Journaling is a big part of my personal knowledge management system, and when it's time to unwind I enjoy a good strategy game (video or board) with my friends.
                </p>
              </div>
          </section>
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
        aboutDesktop: file(relativePath: { eq: "web-circle-divider-0.9241831149624944.png" }) {
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
        stepp: file(relativePath: { eq: "steppmedia-logo.png" }) {
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
        pinkeye: file(relativePath: { eq: "pink-crazy-eye.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default IndexPage
