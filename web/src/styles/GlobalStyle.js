import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
    }
    body{
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
        font-family: 'Nunito', sans-serif;
    }
    button{
        cursor: pointer;
        border: unset;
    }
`;
