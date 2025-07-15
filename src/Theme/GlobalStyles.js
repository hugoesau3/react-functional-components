import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


const GlobalStyes = createGlobalStyle`
    ${reset}
    body{
        font-family: ${props => props.theme.fonts.base};
    }

    a{
        text-decoration: none;
    }

`

export default GlobalStyes;