import React from "react"
import {css} from "@emotion/core"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Header from "../components/header";

const ExperiencePage = ({data}) => {
    return <Layout>
        <Header pageColor="var(--experience-red)"/>
        <main
            css={css`
            --page-color: var(--experience-red);
          `}
        >

        </main>
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
    }
`

export default ExperiencePage