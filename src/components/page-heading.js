import React from "react";
import {css} from "@emotion/core";

const PageHeading = (props) => (
    <div
        className="heading"
        css={css`
          --font-size: 2rem;
          width: fit-content;
          font-family: 'pacifico', cursive;
          position: relative;
          margin: 0 auto 1rem;
          svg{
            position: absolute;
            top: calc(var(--font-size) * 1.38);
            height: 3px;
            width: 100%;
            stroke: var(--page-color);
          }
          @media screen and (min-width: 1120px){
            --font-size: 2.5rem;
          }
        `}
    >
        <h1
            css={css`
              font-size: var(--font-size);
            `}
        >
            {props.title}
        </h1>
        <svg viewBox="0 0 300 3">
            <path strokeWidth="100" d="M 0,2 L 300,2"/>
        </svg>
    </div>
)

export default PageHeading