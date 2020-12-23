import React from "react"
import { Global, css } from "@emotion/core"

import Header from "./header"

const Layout = ({ children }) => {

  return (
    <>
      <Header/>
        <Global styles={css`
          :root{
            --shadow-color: #A8AFB5;
            --site-width: 90vw;
            --horizontal-margin: calc((100% - var(--site-width)) / 2);
            }
           *{
            box-sizing: border-box;
            margin: 0;
            }
            p, li{
              font-family: 'montserrat', serif;
            }
            ul{
              padding: 0 0 0 20px;
            }
        `}/>
    <main>{children}</main>
    </>
  )
}


export default Layout
