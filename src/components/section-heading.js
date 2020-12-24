import React from "react";
import {css} from "@emotion/core";

const SectionHeading = () => (
    <div
        css={css`
          width: fit-content;
          font-family: 'pacifico', cursive;
          position: relative;
          svg{
            position: absolute;
            top: 31px;
          }
        `}
    >
        <h2>Tech I'm Using</h2>
        <svg viewBox="0 0 100 3">
            <path stroke="#2D9CDB" strokeWidth="3" d="M 0,2 L 100,2"/>
        </svg>
    </div>
)

export default SectionHeading