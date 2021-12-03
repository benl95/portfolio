import styled from 'styled-components';

export const IntroSection = styled('section')`
    display: grid;
    grid-template-rows: repeat(auto-fill, 40px);

    p {
        line-height: 4.269rem;
    }

    h2 {
        margin-top: 7rem;
        grid-row-start: 6;
    }

    div {
        margin-bottom: 8rem;
        grid-row-start: 7;
    }

    ul {
        grid-row-start: 15;
        display: flex;
        gap: 10px;
    }

    ul > li:nth-child(2) {
        flex-grow: 1;
    }

    ul > li:nth-child(3) {
        margin-top: 10px;
    }
`;

export const ProjectSection = styled('section')`
    max-width: 532px;

    h2 {
        margin-bottom: 2rem;
    }
`;

export const StyledProjectsList = styled('ul')`
    display: grid;
    grid-template-rows: repeat(auto-fill, 1fr);
    align-items: center;
    gap: 2rem;
    margin-bottom: 0.7rem;
`;
