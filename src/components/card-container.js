import React from "react"
import styled from "@emotion/styled"

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1120px){
    flex-direction: row;
    grid-row: 5;
    grid-column: 2/4 !important;
    justify-content: space-between;
    height: 540px;
    margin-bottom: 5vh;
`

export default CardContainer