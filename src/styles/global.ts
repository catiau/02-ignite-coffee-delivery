import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a, span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
    }

    h2, h3 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 48px;
        padding-bottom: 1rem;
    }

`