import { createGlobalStyle, css } from "styled-components"
import styledNormalize from "styled-normalize"
// eslint-disable-next-line import/no-unresolved
import "@assets/fonts/styled.css"

const globalStylesCss = css`
    ${styledNormalize};

    * {
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        line-height: 1.2;
        font-family: "BarlowSemiCondensed", sans-serif;
    }
`

export const StyledGlobal = createGlobalStyle`${globalStylesCss};`
