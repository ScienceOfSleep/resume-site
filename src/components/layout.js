import React from "react"
import { Global, css } from "@emotion/core"
import "@fontsource/pacifico"
import "@fontsource/montserrat"
import "@fontsource/montserrat/600.css"

import Header from "./header"

const Layout = ({ children }) => {

  return (
    <>
      <Header/>
        <Global styles={css`
          :root{
            --site-width: 90vw;
            --horizontal-margin: calc((100% - var(--site-width)) / 2);
            }
            html, body, div, span, applet, object, iframe,
            h1, h2, h3, h4, h5, h6, p, blockquote, pre,
            a, abbr, acronym, address, big, cite, code,
            del, dfn, em, img, ins, kbd, q, s, samp,
            small, strike, strong, sub, sup, tt, var,
            b, u, i, center,
            dl, dt, dd, ol, ul, li,
            fieldset, form, label, legend,
            table, caption, tbody, tfoot, thead, tr, th, td,
            article, aside, canvas, details, embed, 
            figure, figcaption, footer, header, hgroup, 
            menu, nav, output, ruby, section, summary,
            time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            box-sizing: border-box;
            font-size: 100%;
            vertical-align: baseline;
            }
            p{
              text-align: justify;
            }
            p, li{
              font-family: 'montserrat', serif;
              font-weight: 400;
            }
            ul{
              padding: 0 0 0 20px;
            }
        `}/>
    {children}
    </>
  )
}


export default Layout
