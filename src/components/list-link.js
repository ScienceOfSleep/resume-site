import React from "react"
import {css} from "@emotion/core"
import styled from "@emotion/styled"
import {Link} from "gatsby";

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #000000;
  background-color: #ffffff;
  width: fit-content;
  &.currentPage{
    border-bottom: 2px solid #000000;
  }
  @media only screen and (min-width: 1120px) {
    color: #ffffff;
    background-color: transparent;
    &.currentPage{
      border-bottom: 2px solid #ffffff;
    }
  }
`;

const ListLink = props => (
    <li css={css`
              display: block;
              padding-top: .2rem;
              font-size: 1.2rem;
              @media only screen and (min-width: 1120px) {
              display: inline-block;
              margin-left: 1rem;
              }
            `}>
        <StyledLink
            to={props.to}
            activeClassName={'currentPage'}
        >
            {props.children}
        </StyledLink>
    </li>
);

export default ListLink