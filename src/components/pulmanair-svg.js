import React from "react";
import {css} from "@emotion/core"

const PulmanairSVG = () =>{
    return<svg viewBox="0 0 100 100" width="80%" xmlns="http://www.w3.org/2000/svg">
        <title>Draw It Paint Logomark</title>
        <circle cx="50" cy="50" r="50" fill="#000000"/>
        <text
            x="26"
            y="80"
            css={css`
              font-size: 80px;
              fill: #ffffff;
              font-family: sans-serif;
              font-weight: 600;
            `}
        >
            P
        </text>
    </svg>
}

export default PulmanairSVG