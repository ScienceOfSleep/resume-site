import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const LinkButton = styled(Link)`
  margin: 1.25rem 0 1.25rem;
  color: #000000;
  text-decoration: none;
  text-align: center;
  justify-self: center;
  width: fit-content;
  height: fit-content;
  font-family: 'montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.4rem;
  background-color: #ffffff;
  border: 3px solid #000000;
  border-radius: 15px;
  padding: 1% 2.5%;
  cursor: pointer;
  filter: drop-shadow(4px 4px 4px hsl(202, 21%, 52%, 0.9));
  &:hover, &:focus{
    filter: drop-shadow(4px 4px 4px var(--page-color));
  }
`;

export default LinkButton