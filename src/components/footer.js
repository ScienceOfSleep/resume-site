import React from "react"
import Navbar from "./navbar"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import "@fontsource/ubuntu"
import GithubSVG from "./github-svg";
import LinkedInSVG from "./linkedin-svg";


const Footer = () => {

    return <footer
        css={css`
              background-color: #4A434A;
              color: #ffffff;
              display: grid;
              grid-template-columns: minmax(10%, var(--horizontal-margin)) 1fr minmax(10%, var(--horizontal-margin));
              align-items: center;
              font-family: 'Ubuntu', sans-serif;
              height: var(--header-height);
              box-shadow: 0 -4px 4px hsl(202, 21%, 52%, 0.6);
              *{
                grid-column: 2;
              }
            `}
    >
        <GithubSVG/>
        <LinkedInSVG/>
    </footer>
}

export default Footer
