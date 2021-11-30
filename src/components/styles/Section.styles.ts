import styled from 'styled-components';

export interface StyledSectionProps {
    size?: string;
    contrast?: string;
}

export const StyledSection = styled('section')<StyledSectionProps>`
    h2 {
        font-size: ${({ size }) => (size === 'title-s' ? '1rem' : '1.5rem')};
        color: #ffffff;
        opacity: ${({ contrast }) => (contrast === 'high' ? 0.87 : 0.6)};
        font-weight: 300;
    }
`;
