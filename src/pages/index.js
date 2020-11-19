import React from "react"
import {css} from "@emotion/core"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
      {/*<SEO title="Josh's Resume Site" />*/}
      <h1>
          Josh Steele's Web Developer Resume Site
      </h1>
      <h2>
          East Strathcona's Premier Web Dev Resume Experience
      </h2>
      <h3>
          Elevator Pitch
      </h3>
      <p>
          Today’s job market is always changing, and the successful professional is always adapting to meet these shifting demands. I bring an open mind and a desire to learn to every project I undertake; this combined with my focus on clear communication and quantifiable results make me an ideal candidate for a field where constant personal growth is required to remain competitive.
      </p>
      <h3>
          Experience
      </h3>
      <h4>
          Draw It Paint: Web Developer
      </h4>
      <h5>
          February 2020 - Present
      </h5>
      <p>
          Built headless CMS systems with GatsbyJS and Wordpress<br/>
          E-Commerce development with Shopify and WooCommerce<br/>
          Led a 3 person web design and marketing team<br/>
          General office workflow optimisation and automation<br/>
          Comprehensive SEO auditing and optimization
      </p>
      <h4>
          Silvertip Family Enterprise Advisory: Web Designer / Operations Coordinator
      </h4>
      <h5>
          June 2017 - January 2020
      </h5>
      <p>
          Developed applications for estate management<br/>
          Design of corporate branding<br/>
          Document design, presentations, and copywriting<br/>
          Facilitating meetings, spoke at ABFI 2019
      </p>
      <h4>
          Freelance Graphic Design and Web Development
      </h4>
      <h5>
          Jan 2016 - Present
      </h5>
      <p>
          Branding and marketing<br/>
          Business card design<br/>
          Content planning: assessing, designing, and maintaining<br/>
          Sketching new workflows, developing content calendars<br/>
          SEO strategy: link campaigns, long-tail/high-intent keywords
      </p>
      <h3>
          Education
      </h3>
      <h4>
          SAIT, Full Stack Developer Certification
      </h4>
      <h5>
          Sep 2018 - Apr 2019
      </h5>
      <p>
          Front & back end development<br/>
          Best practices including testing modules and MVC
      </p>
      <h4>
          U of A, Bachelor of the Arts - Double Major in History and Political Science
      </h4>
      <p>
          Double major: History and Political Science<br/>
          Developed strong research and communication skills
      </p>
      <h3>
          Other Education
      </h3>
      <h4>
          Society of Trust and Estate Practitioners
      </h4>
      <h5>
          May 2018
      </h5>
      <p>
          Law of Trusts Specialization<br/>
          The theoretical support for Silvertip’s estate app
      </p>
      <h4>
          International Medical Corps
      </h4>
      <h5>
          May 2015
      </h5>
      <p>
          Building a Better Response
          Coordinating organizations during a crisis
      </p>
  </Layout>
)

export default IndexPage
