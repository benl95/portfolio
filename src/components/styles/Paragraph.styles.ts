import styled from 'styled-components';
import { ParagraphSizeMap, ContrastLevels } from '@/types/StyleMaps';
export interface StyledParagraphProps {
    contrast?: string;
    size?: string;
}

export const StyledParagraph = styled('p')<StyledParagraphProps>`
    color: #ffffff;
    font-size: ${({ size }) =>
        size === 'font-l' ? ParagraphSizeMap.l : ParagraphSizeMap.m};
    opacity: ${({ contrast }) =>
        contrast === 'high' ? ContrastLevels.high : ContrastLevels.low};
`;
