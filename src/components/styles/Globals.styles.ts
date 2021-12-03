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
        font-weight: ${({ theme }) =>
            theme.fontWeights.filter((x: number) => x === 300)};
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
        border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    }

    main {
        width: 100%;
        height: 100%;
    }

    section {
        padding: 18px 21px 18px 21px;
        height: 100%;
        width: 100%;
        background: url('/blur.svg') no-repeat center;
        background-size: 100% 100%;
    }

    footer {
        margin: 4rem 0 4rem 0;
    }
`;

export { GlobalStyle };
