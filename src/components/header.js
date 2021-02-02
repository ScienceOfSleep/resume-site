import React from "react"
import Navbar from "./navbar"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import "@fontsource/ubuntu"


const Header = (props) => {

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
              --page-color: ${props.pageColor};
              background-color: var(--page-color);
              color: #ffffff;
              display: grid;
              grid-template-columns: var(--horizontal-margin) auto 1fr;
              align-items: center;
              font-family: 'Ubuntu', sans-serif;
              height: var(--header-height);
              box-shadow: 0 4px 4px hsl(202, 21%, 52%, 0.6);
              @media screen and (min-width: 1120px){
                grid-template-columns: minmax(10%, var(--horizontal-margin)) 1fr 1fr minmax(10%, var(--horizontal-margin));
              }
            `}
    >
        <div
            css={css`
              display: flex;
              grid-column: 2;
              align-items: center;
            `}
        >
            <Img
                fixed={data.logo.childImageSharp.fixed}
                css={css`
                  width: 60px;
                  box-shadow: 4px 4px 4px hsl(202, 21%, 52%, 0.9);
              `}
            />
            <h2
                css={css`
                  padding-left: 1rem;
                  font-size: 27px;
              `}
            >
                Josh Steele's<br/>Resume Site
            </h2>
        </div>
        <Navbar/>
    </header>
}

export default Header
