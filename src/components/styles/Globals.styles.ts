import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from '@/types/theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeProps }>`
    * {
    box-sizing: border-box; 
    border: 0;
    margin: 0;
    padding: 0;
    }

    body,
    html {
        padding: 0;
        margin: 0;
        font-family: 'Avenir Next', sans-serif;
        background-color: ${({ theme }) => theme.colors.darkBlue};
    }

    h2 {
        color: ${({ theme }) => theme.colors.white};
        font-weight: 300;
    }

    p, 
    a {
        color: ${({ theme }) => theme.colors.white};
    }
    
    ul {
        list-style-type: none;
    }

    li {
        color: ${({ theme }) => theme.colors.white};
    }

    nav {
        border-bottom: 1px solid #ffffff;
    }

    main {
        width: 100%;
        height: 100%;
        padding: 36px 21px 36px 21px;
    }
`;

export { GlobalStyle };
