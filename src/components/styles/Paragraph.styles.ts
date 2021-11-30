import styled from 'styled-components';
import { ParagraphSizeMap, ContrastLevels } from '@/types/StyleMaps';
export interface StyledParagraphProps {
    contrast?: ContrastLevels;
    size?: ParagraphSizeMap;
}

export const StyledParagraph = styled('p')<StyledParagraphProps>`
    color: #ffffff;
    font-size: ${({ size }) =>
        size === ParagraphSizeMap.l ? ParagraphSizeMap.l : ParagraphSizeMap.m};
    opacity: ${({ contrast }) =>
        contrast === ContrastLevels.high
            ? ContrastLevels.high
            : ContrastLevels.low};
`;
