import React from "react"
import {css} from "@emotion/core"
import { Link } from "gatsby"
import blockCyclone from "../images/block-cyclone.gif"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import LaravelSVG from "../components/laravel-svg";
import LogoCard from "../components/logo-card";
import ReactSVG from "../components/react-svg";
import SectionHeading from "../components/section-heading";
import LinkButton from "../components/link-button";
import WorkContainer from "../components/work-container";
import PageHeading from "../components/page-heading";

const IndexPage = ({data}) => {

    return <Layout>
      {/*<SEO title="Josh's Resume Site" />*/}
      <main
        css={css`
          --page-color: #2D9CDB;
        `}
      >
        <section
            css={css`
              display: grid;
              grid-template-columns: var(--horizontal-margin) 1fr var(--horizontal-margin);
              > *:not(.image){
                grid-column: 2;
              }
              @media screen and (min-width: 1120px){
                height: 60vh; //Add a header height variable
                grid-template-columns: minmax(10%, var(--horizontal-margin)) 1fr 1fr minmax(10%, var(--horizontal-margin));
                grid-template-rows: 10vh 1fr 1fr auto auto 1fr 3fr 10vh;
                .heading{
                  grid-row: 4;
                  margin: 0 auto;
                }
                p{
                  grid-row: 5;
                }
              }
            `}
        >
            <Img
                fluid={data.albertasaurus.childImageSharp.fluid}
                className="image"
                alt="Happy Albertosaurus vector graphic. By yours truly, Josh Steele."
                css={css`
                  width: 100%;
                  box-shadow: 0 4px 4px hsl(202, 21%, 52%, 0.6);
                  grid-column: 1 / -1; //full bleed hero image on mobile
                  margin-bottom: 15px;
                  @media screen and (min-width: 1120px){
                    box-shadow: 3px 4px 4px hsl(202, 21%, 52%, 0.6);
                    grid-column: 3;
                    grid-row: 3 / 7;
                    justify-self: end;
                    align-self: center;
                    margin: 0;
                    border: 20px solid var(--page-color);
                    border-radius: 20%;
                    width: 65%;
                    height: fit-content;
                  }
                `}
            />
            <PageHeading title="Welcome to my CV"/>
            <p>
                This is the overview/elevator pitch page. I’ll give you a quick rundown on what I’ve done and what I prioritise while the site will give you an idea of what I’m like and what I can do.
                <br/> <br/>
                When sorting through applicants, you need to kiss a lot of frogs to find your metaphorical prince, or really even a decent looking frog. I appreciate your time here, so I’ll limit any long form text content to (appropriately flagged) sections on pages further in.
            </p>
        </section>
        <section
            css={css`
              display: grid;
              grid-template-columns: var(--horizontal-margin) 1fr var(--horizontal-margin);
              > *{
                grid-column: 2;
              }
              margin-top: 25px;
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
                `}
            />
            <SectionHeading title="Tech I'm Using"/>
            <LogoCard borderColor="#DB444A">
                <LaravelSVG/>
                <h3>
                    Laravel
                </h3>
                <ul>
                    <li>
                        The gold standard for PHP frameworks.
                    </li>
                    <li>
                        Batteries included, building and debugging are a joy.
                    </li>
                    <li>
                        Generates back-ends quickly and professionally.
                    </li>
                </ul>
            </LogoCard>
            <LogoCard borderColor="#2D9CDB">
                <ReactSVG/>
                <h3>
                    React
                </h3>
                <ul>
                    <li>
                        The hot JS framework; very good resources and ecosystem as a result.
                    </li>
                    <li>
                        Component focus feels natural for the modern web.
                    </li>
                    <li>
                        I enjoy working with JSX and CSS-in-JS.
                    </li>
                </ul>
            </LogoCard>
            <LogoCard borderColor="#DBD718">
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
                <ul>
                    <li>
                        Perfectly complements my coding flow in React.
                    </li>
                    <li>
                        Sidesteps scope and specificity problems.
                    </li>
                    <li>
                        Has all the best parts of SASS and CSS combined with the dynamism of JS.
                    </li>
                </ul>
            </LogoCard>
            <LogoCard borderColor="#663399">
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
                <ul>
                    <li>
                        Low overhead and blazing speed right out of the box.
                    </li>
                    <li>
                        Automated image processing and lazy loading is very slick.
                    </li>
                    <li>
                        Secure and accessible by default.
                    </li>
                </ul>
            </LogoCard>
            <p>
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
                grid-template-columns: var(--horizontal-margin) 1fr 1fr var(--horizontal-margin);
                grid-template-rows: 10vh 2fr auto auto 3fr 10vh;
                .heading{
                  grid-row: 3;
                }
                p{
                  grid-row: 4;
                }
                .image{
                  grid-column: 3;
                  grid-row: 2 / 6;
                  justify-self: center;
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
            <SectionHeading title="Work Experience"/>
            <p>
                This is the overview/elevator pitch page. I’ll give you a quick rundown on what I’ve done and what I prioritise while the site will give you an idea of what I’m like and what I can do.
                <br/> <br/>
                When sorting through applicants, you need to kiss a lot of frogs to find your metaphorical prince, or really even a decent looking frog. I appreciate your time here, so I’ll limit any long form text content to (appropriately flagged) sections on pages further in.
            </p>
            <LinkButton to="/">Career Timeline</LinkButton>
            <WorkContainer>
                <Img
                    fluid={data.dip.childImageSharp.fluid}
                    alt="Draw It Paint"
                    css={css`
                      width: 80%;
                    `}
                />
                <h3>Draw It Paint</h3>
                <h4>February 2020 - Present</h4>
                <ul>
                    <li>Built with Wordpress</li>
                    <li>Custom CSS for tuning</li>
                    <li>All the pros and cons of a drag and drop site</li>
                </ul>
            </WorkContainer>
            <WorkContainer>
                <Img
                    fluid={data.silvertip.childImageSharp.fluid}
                    css={css`
                width: 80%;
              `}
                />
                <h3>Silvertip Advisory</h3>
                <h4>April 2017 - January 2020</h4>
                <ul>
                    <li>Built with Wordpress</li>
                    <li>Custom CSS for tuning</li>
                    <li>All the pros and cons of a drag and drop site</li>
                </ul>
            </WorkContainer>
            <WorkContainer>
                <Img
                    fluid={data.stepp.childImageSharp.fluid}
                    css={css`
                width: 80%;
              `}
                />
                <h3>Steppmedia</h3>
                <h4>April 2019 - September 2019</h4>
                <ul>
                    <li>Built with Wordpress</li>
                    <li>Custom CSS for tuning</li>
                    <li>All the pros and cons of a drag and drop site</li>
                </ul>
            </WorkContainer>
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
                  grid-template-rows: 10vh 2fr auto auto 3fr 10vh;
                  .heading{
                    grid-row: 3;
                  }
                  p{
                    grid-row: 4;
                  }
                  .image{
                    grid-column: 3;
                    grid-row: 2 / 6;
                    justify-self: center;
                  }
                }
              `}
          >
              <Img
                  fluid={data.greeneye.childImageSharp.fluid}
                  className="image"
                  alt="Green eye in circles. Generative art by Josh Steele made using Canvas."
                  css={css`
                    width: 100%;
                    box-shadow: 0 4px 4px hsl(202, 21%, 52%, 0.6), 0 -4px 5px hsl(202, 21%, 52%, 0.6);
                    margin: 1rem 0 1rem;
                  `}
              />
              <SectionHeading title="Recent Projects"/>
              <LogoCard borderColor="#DB444A">
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
                  <ul>
                      <li>
                          Perfectly complements my coding flow in React.
                      </li>
                      <li>
                          Sidesteps scope and specificity problems.
                      </li>
                      <li>
                          Has all the best parts of SASS and CSS combined with the dynamism of JS.
                      </li>
                  </ul>
              </LogoCard>
              <LogoCard borderColor="var(--index-blue)">
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
                  <ul>
                      <li>
                          Perfectly complements my coding flow in React.
                      </li>
                      <li>
                          Sidesteps scope and specificity problems.
                      </li>
                      <li>
                          Has all the best parts of SASS and CSS combined with the dynamism of JS.
                      </li>
                  </ul>
              </LogoCard>
              <LogoCard borderColor="#DBD718">
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
                  <ul>
                      <li>
                          Perfectly complements my coding flow in React.
                      </li>
                      <li>
                          Sidesteps scope and specificity problems.
                      </li>
                      <li>
                          Has all the best parts of SASS and CSS combined with the dynamism of JS.
                      </li>
                  </ul>
              </LogoCard>
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
                  grid-template-rows: 10vh 2fr auto auto 3fr 10vh;
                  .heading{
                    grid-row: 3;
                  }
                  p{
                    grid-row: 4;
                  }
                  .image{
                    grid-column: 3;
                    grid-row: 2 / 6;
                    justify-self: center;
                  }
                }
              `}
          >
              <Img
                  fluid={data.pinkeye.childImageSharp.fluid}
                  className="image"
                  alt="Abstract generative art by Josh Steele, made using Canvas."
                  css={css`
                    width: 100%;
                    box-shadow: 0 4px 4px hsl(202, 21%, 52%, 0.6), 0 -4px 5px hsl(202, 21%, 52%, 0.6);
                    margin: 1rem 0 1rem;
                  `}
              />
              <SectionHeading title="About Me"/>
          </section>
      </main>
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
        orangecircles: file(relativePath: { eq: "orange-crazy-circles.png" }) {
            childImageSharp {
                fluid {
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
        silvertip: file(relativePath: { eq: "Silvertip-Logo.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        dip: file(relativePath: { eq: "steppmedia-logo.png" }) {
            childImageSharp {
                fluid {
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
