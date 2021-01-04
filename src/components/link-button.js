import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const LinkButton = styled(Link)`
  color: #000000;
  text-decoration: none;
  background-color: #ffffff;
  border: 3px solid #000000;
  border-radius: 15px;
  padding: 2.5% 5%;
  cursor: pointer;
  filter: drop-shadow(4px 4px 4px #3c3c3c);
  &:hover, &:focus{
    filter: drop-shadow(1px 1px 1px #3c3c3c);
    margin: 3px 0 0 3px;
  }
`;

export default LinkButton