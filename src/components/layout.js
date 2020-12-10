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
          }
           *{
            box-sizing: border-box;
            margin: 0;
            }
        `}/>
    <main>{children}</main>
    </>
  )
}


export default Layout
