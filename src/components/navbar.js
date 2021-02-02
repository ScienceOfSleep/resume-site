import React, {useEffect, useState} from "react"
import {css} from "@emotion/core"
import styled from "@emotion/styled"
import {Link} from "gatsby";
import Hamburger from "./hamburger";

const Navbar = (props) => {

    const StyledLink = styled(Link)`
      display: block;
      text-decoration: none;
      color: #000000;
      background-color: #ffffff;
      &.currentPage{
        border-bottom: 2px solid #000000;
      }
      @media only screen and (min-width: 1120px) {
      color: #ffffff;
      background-color: transparent;
      &[data-active='true']{
        color: #000000;
      }  
      &.currentPage{
      border-bottom: 2px solid #ffffff;
        &[data-active='true']{
        border-bottom: 2px solid #000000;
        }
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
            <h5 css={css`font-size: 1.2rem; @media screen and (min-width: 1120px){font-size: .9rem}`}>
                <StyledLink
                    data-active={scrolled}
                    to={props.to}
                    activeClassName={'currentPage'}
                >
                    {props.children}
                </StyledLink>
            </h5>
        </li>
    );

    const [opened, setOpened] = useState(false)

    let scrolled = props.scrolled;

    return <nav
        css={css`
              display: flex;
              justify-content: center;
              align-self: center;
              z-index: 999;
              grid-column: 3;
                @media only screen and (min-width: 40.063em) {
                  font-size: 1.5rem;
                  align-self: center;
                  margin-top: 1rem;
                }
                @media only screen and (min-width: 64.063em) {
                  justify-content: flex-end;
                  font-size: inherit;
                  padding-left: 1rem;
                  padding-bottom: 1rem;
                }
            `}
    >
        <a
            href="#main-menu"
            id="main-menu-toggle"
            className="menu-toggle"
            aria-label="Open main menu"
            data-active={scrolled}
            onClick={() => {
                if (opened === true) {
                    setOpened(false)
                }
                else {
                    setOpened(true)
                }
            }}
            data-opened={opened}
            css={css`
                  color: #ffffff;
                  padding-top: 14%;
                  @media only screen and (min-width: 1120px) {
                  display: none;
                  }
                `}
        >
            <Hamburger opened={opened}/>
        </a>
        <ul
            id="main-menu"
            data-opened={opened}
            css={css`
                  @media only screen and (max-width: 1120px) {
                    position: fixed;
                    top: var(--header-height);
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    justify-items: center;
                    width: 55%;
                    height: 0;
                    border-left: 4px solid var(--page-color);
                    border-bottom: 0 solid var(--page-color);
                    padding-left: 5%;
                    overflow-y: auto;
                    overflow-x: visible;
                    transition: height .5s, border-bottom-width .5s;
                    z-index: 998;
                    background-color: #ffffff;
                    a{
                      width: fit-content;
                    }
                    }
                    &[data-opened='true'] {
                      height: 155px;
                      transition: height .5s;
                      border-bottom-width: 4px;
                      + .backdrop {
                        position: fixed;
                        display: block;  
                        left: 0;
                        top: var(--header-height);
                        width: 100vw;
                        height: calc(100vh - var(--header-height));
                        z-index: 997;
                        background: rgba(0,0,0,.85);
                        cursor: default;
                        }
                      }
              @media only screen and (min-width: 1120px) {
                padding-left: 0;
              }
            `}
        >
            <ListLink to="/">Home</ListLink>
            <ListLink to="/skills">Skills</ListLink>
            <ListLink to="/experience">Experience</ListLink>
            <ListLink to="/about">About</ListLink>
            <li
                css={css`
                      list-style: none;
                      padding-top: .2rem;
                      @media only screen and (min-width: 1120px) {
                        display: none;
                      }
                    `}
            >
                <h5 css={css`font-size: 1.2rem;`}>
                    <a
                        aria-label="Close main menu"
                        onClick={() => {
                            if (opened === true) {
                                setOpened(false)
                            }
                            else {
                                setOpened(true)
                            }
                        }}
                        data-opened={opened}
                        css={css`
                                  color: #000000;
                                  background-color: #ffffff;
                                  text-decoration: none;
                                  display: block;
                                  @media only screen and (min-width: 1120px) {
                                    display: none;
                                  }
                                `}
                    >
                        Close
                    </a>
                </h5>
            </li>

        </ul>
        <a
            className="backdrop"
            tabIndex="-1"
            onClick={() => {
                if (opened === true) {
                    setOpened(false)
                }
                else {
                    setOpened(true)
                }
            }}
            data-active={scrolled}
            hidden
        >
        </a>
    </nav>
}

export default Navbar