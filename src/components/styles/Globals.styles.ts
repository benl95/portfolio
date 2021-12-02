import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from 'components/styles/Theme.styles';

const GlobalStyle = createGlobalStyle<{ theme: ThemeProps }>`
    * {
    box-sizing: border-box; 
    border: 0;
    }

    body,
    html {
        padding: 0;
        margin: 0;
        font-family: 'Avenir Next', sans-serif;
        background-color: ${({ theme }) => theme.colors.darkBlue};
    }

    p, 
    a {
        color: ${({ theme }) => theme.colors.white};
    }
    
    ul {
        list-style-type: none;
    }
`;

export { GlobalStyle };
