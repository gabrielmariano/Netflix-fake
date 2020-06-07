import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    html, body {
        text-rendering:optimizeLegibility !important;
        -webkit-font-smoothing: antialiased;
        font-family: 'Courier New', Courier, monospace;
    }

    text, input, text-area {
        border: none;
        color: #000;
    }

    link, link:visited, link:active, link:hover {
        color: #ccc;
    } 





`;

export default GlobalStyle;