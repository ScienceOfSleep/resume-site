import React from "react"
import Navbar from "./navbar"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import "@fontsource/ubuntu"


const Footer = () => {

    return <footer
        css={css`
              background-color: #2F4B5C;
              color: #ffffff;
              display: grid;
              grid-template-columns: minmax(10%, var(--horizontal-margin)) 1fr 1fr minmax(10%, var(--horizontal-margin));
              align-items: center;
              font-family: 'Ubuntu', sans-serif;
              grid-column: 3;
              height: var(--header-height);
              box-shadow: 0 4px 4px hsl(202, 21%, 52%, 0.6);
            `}
    >
        <div
            css={css`
              display: flex;
              grid-column: 2;
              align-items: center;
            `}
        >
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
    </footer>
}

export default Footer
