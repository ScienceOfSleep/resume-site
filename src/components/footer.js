import React from "react"
import { css } from "@emotion/core"
import "@fontsource/ubuntu"
import GithubSVG from "./svgs/github-svg";
import LinkedInSVG from "./svgs/linkedin-svg";
import FooterListLink from "./footer--list-link";


const Footer = () => {

    return <footer
        css={css`
              background-color: #4A434A;
              color: #ffffff;
              display: grid;
              grid-template-columns: var(--horizontal-margin) 1fr var(--horizontal-margin);
              align-items: center;
              box-shadow: 0 -4px 4px hsl(202, 21%, 52%, 0.6);
              padding-bottom: .5rem;
              *{
                grid-column: 2;
              }
              @media screen and (min-width: 1120px){
                height: var(--header-height);
                grid-template-columns: minmax(10%, var(--horizontal-margin)) 1fr minmax(10%, var(--horizontal-margin));
                padding-bottom: .25rem;
              }
            `}
    >
        <ul
            css={css`
              padding-left: 0;
              grid-row: 1;
              @media screen and (min-width: 1120px){
                justify-self: center;
              }
            `}
        >
            <FooterListLink to="/">Home</FooterListLink>
            <FooterListLink to="/skills">Skills</FooterListLink>
            <FooterListLink to="/experience">Experience</FooterListLink>
            <FooterListLink to="/about">About</FooterListLink>
        </ul>
        <div
            css={css`
              display: flex;
              width: 75px;
              justify-self: right;
              justify-content: space-between;
              grid-row: 1;
              @media screen and (min-width: 1120px){
                grid-row: 2;
                justify-self: center;
              }
            `}
        >
            <GithubSVG width="24px" color="#ffffff"/>
            <LinkedInSVG/>
        </div>
    </footer>
}

export default Footer
