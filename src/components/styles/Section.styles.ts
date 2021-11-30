import styled from 'styled-components';

export interface StyledSectionProps {
    size?: string;
}

export const StyledSection = styled('div')<StyledSectionProps>`
    h2 {
        font-size: ${({ size }) => (size === 'small' ? '1rem' : '1.5rem')};
        color: rgba(white, 0.87);
        font-weight: 300;
    }
`;
