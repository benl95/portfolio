import styled from 'styled-components';

export interface StyledParagraphProps {
    contrast?: string;
    size?: string;
}

export const StyledParagraph = styled('p')<StyledParagraphProps>`
    color: #ffffff;
    font-size: ${({ size }) => (size === 'font-l' ? '1.875rem' : '1rem')};
    opacity: ${({ contrast }) => (contrast === 'high' ? 0.87 : 0.6)};
`;
