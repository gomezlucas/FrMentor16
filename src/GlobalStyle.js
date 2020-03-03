import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`

body{
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
};

a {
    text-decoration: none;
    color: ${props => props.theme.color};
}

ul {
    color: ${props => props.theme.color};
}


`

export default GlobalStyle

 