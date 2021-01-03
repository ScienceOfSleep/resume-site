import React from "react";
import {css} from "@emotion/core";

const SectionHeading = (props) => (
    <div
        className="heading"
        css={css`
          width: fit-content;
          font-family: 'pacifico', cursive;
          position: relative;
          svg{
            position: absolute;
            top: 31px;
            height: 3px;
            width: 100%;
          }
        `}
    >
        <h2>{props.title}</h2>
        <svg viewBox="0 0 300 3">
            <path stroke="#2D9CDB" strokeWidth="100" d="M 0,2 L 300,2"/>
        </svg>
    </div>
)

export default SectionHeading