import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    background-color: #ffffffde;
    color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
}


*,
*::after,
*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    height: 100%;
}

a,
button,
input,
textarea {
    color: inherit;
    text-decoration: none;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
}

button {
    cursor: pointer;
}
`;
