import React from "react"
import {css} from "@emotion/core"
import styled from "@emotion/styled"
import {Link} from "gatsby";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  width: fit-content;
  font-family: Ubuntu, sans-serif;
  &.currentPage{
    border-bottom: 2px solid #ffffff;
  }
`;

const FooterListLink = props => (
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

export default FooterListLink