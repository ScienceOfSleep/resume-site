import React from "react"
import styled from "@emotion/styled"

const BodyFold = styled.section`
  display: grid;
  grid-template-columns: var(--horizontal-margin) 1fr var(--horizontal-margin);
  > *:not(.full-bleed){
    grid-column: 2;
  }
  .full-bleed{
    grid-column: 1 / -1;
    margin-bottom: 1rem;
    box-shadow: 0 4px 4px hsl(202, 21%, 52%, 0.6), 0 -4px 5px hsl(202, 21%, 52%, 0.6);
    width: 100%;
  }
  @media screen and (min-width: 1120px){
    grid-template-columns: minmax(10%, var(--horizontal-margin)) 1fr 1fr minmax(10%, var(--horizontal-margin));
    grid-template-rows: auto 7vh auto auto auto auto 7vh;
    .full-bleed{
      margin: 0;
      height: 25vh;
    }
    //Styles for switch-up on tech fold
    //The only child elements of their type on the site
    //heading hits all contained headings, figure out a more elegant rule
    .heading{
      grid-row: 3;
    }
    p{
      padding-top: .25rem;
      padding-bottom: 1rem;
      grid-row: 4;
    }
    a{
      grid-row: 5;
      margin-bottom: 5vh;
    }
  }
`

export default BodyFold