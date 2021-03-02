import React from "react";
import {css} from "@emotion/core"

const DIPSVG = (props) =>{
    return<svg viewBox="0 0 100 100" width={props.width} xmlns="http://www.w3.org/2000/svg">
        <title>Draw It Paint Logomark</title>
        <circle cx="50" cy="50" r="50" fill="#dd4c1b"/>
        <text
            x="10"
            y="67"
            css={css`
              font-size: 50px;
              fill: #ffffff;
              font-family: sans-serif;
              font-weight: 600;
            `}
        >
            DIP
        </text>
    </svg>
}

export default DIPSVG