import React from "react";
import {css} from "@emotion/core";

const SectionHeading = (props) => (
    <div
        className="heading"
        css={css`
          --font-size: 1.6rem;
          width: fit-content;
          font-family: 'pacifico', cursive;
          position: relative;
          margin: 0 auto;
          svg{
            position: absolute;
            top: calc(var(--font-size) * 1.35);
            height: 3px;
            width: 100%;
            stroke: var(--page-color);
          }
          @media screen and (min-width: 1120px){
            --font-size: 2rem;
          }
        `}
    >
        <h2
            css={css`
              font-size: var(--font-size);
            `}
        >
            {props.title}
        </h2>
        <svg viewBox="0 0 300 3">
            <path strokeWidth="100" d="M 0,2 L 300,2"/>
        </svg>
    </div>
)

export default SectionHeading