import React, {useState} from "react";
import styled from "@emotion/styled";

const SkillsList = styled.li`
  border-top: 4px solid var(--page-color);
  border-bottom: 4px solid var(--page-color);
  width: fit-content;
  align-self: center;
  justify-self: center;
  list-style: none;
  padding: 0;
  font-family: 'montserrat', sans-serif;
  font-weight: 600;
  li{
    padding: 3px 5px;
    font-size: 24px;
  }
  @media screen and (min-width: 1120px){
    grid-column: 3 !important;
    grid-row: 3;
  }
`

export default SkillsList