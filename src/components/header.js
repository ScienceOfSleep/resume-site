import React from "react"
import Navbar from "./navbar"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

const Header = () => {

        const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "JS-White-Fill.png" }) {
                childImageSharp {
                    fixed(width: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return <header
        css={css`
              background-color: #3C99CE;
              color: #ffffff;
              display: flex;
              align-items: center;
            `}
    >
        <Img
            fixed={data.logo.childImageSharp.fixed}
            css={css`
                width: 60px;
            `}
        />
        <h1
            css={css`
                flex-grow: 5;
            `}
        >
            Josh Steele's<br/>Resume Site
        </h1>
        <Navbar/>
    </header>
}

export default Header
