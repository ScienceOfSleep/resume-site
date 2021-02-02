import React from "react"
import styled from "@emotion/styled"

const LandingFold = styled.section`
  display: grid;
  grid-template-columns: var(--horizontal-margin) 1fr var(--horizontal-margin);
  *{
    grid-column: 2;
  }
  //Landing image
  div:nth-of-type(1){
    width: 100%;
    box-shadow: 0 4px 4px hsl(202, 21%, 52%, 0.6);
    grid-column: 1 / -1; //full bleed hero image on mobile
    margin-bottom: 15px;
  }
  //Divider image
  div:nth-of-type(3){
    display: none;
  }
  @media screen and (min-width: 1120px){
    height: calc(115vh - var(--header-height)); 
    grid-template-columns: minmax(10%, var(--horizontal-margin)) 1fr 1fr minmax(10%, var(--horizontal-margin));
    grid-template-rows: 2fr 1fr 1fr auto auto 1fr 3fr 10vh 25vh;
    .heading{
      grid-row: 4;
      margin: 0 auto;
    }
    p{
      grid-row: 5;
    }
    div:nth-of-type(1){
      box-shadow: 3px 4px 4px hsl(202, 21%, 52%, 0.6);
      grid-column: 3;
      grid-row: 3 / 7;
      justify-self: end;
      align-self: center;
      margin: 0;
      border: 20px solid var(--page-color);
      border-radius: 20%;
      width: 65%;
      height: fit-content;
    }
    div:nth-of-type(3){
      display: initial;
      box-shadow: 0 4px 4px hsl(202, 21%, 52%, 0.6), 0 -4px 4px hsl(202, 21%, 52%, 0.6);
      grid-column: 1/5;
      grid-row: 9;
      margin: 0;
      width: 100%;
      height: 25vh;
    }
  }
`

export default LandingFold