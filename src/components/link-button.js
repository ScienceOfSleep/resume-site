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
    filter: drop-shadow(4px 4px 4px var(--page-color));
  }
`;

export default LinkButton