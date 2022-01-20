import React from "react"
import styled from "@emotion/styled"

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0 1.5rem;
  h3{
    font-family: 'montserrat', serif;
    font-weight: 600;
    font-size: 1.5rem;
    padding-top: 1px;
  }
  h4{
    font-family: 'montserrat', serif;
    font-weight: 600;
    padding-bottom: .25rem;
  }
  ul{
    width: 80%;
    margin-left: 20px;
  }
  @media screen and (min-width: 1120px){
    width: 30%;
  }
`

export default WorkContainer