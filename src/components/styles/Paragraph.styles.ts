import styled from 'styled-components';
import { DimensionProps } from '@/types/theme';
import { handleFontSize, handleContrastLevel } from '@/utils/styleAttributes';

export const StyledParagraph = styled('p')<DimensionProps>`
    font-size: ${({ size }: DimensionProps): string[] => handleFontSize(size)};
    opacity: ${({ contrast }: DimensionProps): number[] =>
        handleContrastLevel(contrast)};
`;
