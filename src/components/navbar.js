import React, {useState} from "react"
import {css} from "@emotion/core"
import Hamburger from "./hamburger"
import NavbarListLink from "./navbar--list-link";

const Navbar = () => {

    //Hamburger state management
    //Mobile only
    const [opened, setOpened] = useState(false)

    return <nav
        css={css`
              display: flex;
              justify-content: flex-end;
              align-self: center;
              z-index: 999;
              grid-column: 3;
              @media only screen and (min-width: 1120px) {
                justify-content: flex-end;
                font-size: inherit;
                padding-left: 1rem;
              }
            `}
    >
        {/*Mobile hamburger button*/}
        <button
            aria-label="Toggle navigation menu"
            onClick={() => {(opened === true ? setOpened(false) : setOpened(true))}}
            css={css`
                  color: #ffffff;
                  background-color: transparent;
                  border: none;
                  padding: 14% calc(50% - 50px + 13px) 0 0; //Center justifies the left edge then adds about half the stationary hamburger width (animation room leaves the full svg off center)
                  &:focus{
                    outline: none;
                  }
                  @media only screen and (min-width: 1120px) {
                  display: none;
                  }
                `}
        >
            <Hamburger opened={opened}/>
        </button>
        {/*99% mobile menu styling*/}
        <ul
            data-opened={opened}
            css={css`
              @media only screen and (max-width: 1120px) {
                position: fixed;
                top: var(--header-height);
                right: -7px; //hides temp scroll bar offscreen during height animation
                width: calc(50vw + 7px); //Offset the position right value
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-items: center;
                height: 0;
                border-left: 4px solid var(--page-color);
                border-bottom: 0 solid var(--page-color);
                padding-left: 5%;
                overflow-y: auto;
                overflow-x: visible;
                transition: height .5s, border-bottom-width .5s;
                z-index: 998;
                background-color: #ffffff;
                &[data-opened='true'] {
                  height: 124px;
                  transition: height .5s;
                  border-bottom-width: 4px;
                }
              }
              @media only screen and (min-width: 1120px) {
                padding-left: 0;
              }
            `}
        >
            <NavbarListLink to="/">Home</NavbarListLink>
            <NavbarListLink to="/skills">Skills</NavbarListLink>
            <NavbarListLink to="/experience">Experience</NavbarListLink>
            <NavbarListLink to="/about">About</NavbarListLink>
        </ul>
        {/*Active menu dark backdrop/alternate exit button*/}
        <button
            tabIndex="-1"
            onClick={() => {setOpened(false)}}
            hidden
            data-opened={opened}
            css={css`
              &[data-opened='true'] {
                position: fixed;
                display: block;  
                left: 0;
                top: var(--header-height);
                width: 100vw;
                height: calc(100vh - var(--header-height));
                z-index: 997;
                background: rgba(0,0,0,.85);
                cursor: default;
                border: none;
              }
            `}
        >
        </button>
    </nav>
}

export default Navbar