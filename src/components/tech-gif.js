import React from "react"
import styled from "@emotion/styled"

const TechGif = styled.img`
  margin: 1.25rem auto 1rem;
  border: 2px solid var(--page-color);
  border-radius: 100%;
  padding: 2px;
  @media screen and (min-width: 1120px){
    grid-column: 3 !important;
    grid-row: 3 / 6;
    margin-top: 14%;
    margin-left: 31%;
    width: 175px;
    border: 5px solid var(--page-color);
  }`

export default TechGif