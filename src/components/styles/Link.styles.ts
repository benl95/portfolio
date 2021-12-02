import styled from 'styled-components';
import { DimensionProps } from '@/types/theme';
import { handleFontSize, handleContrastLevel } from '@/utils/styleAttributes';

export const StyledLink = styled('a')<DimensionProps>`
    font-size: ${({ size }: DimensionProps): string[] => handleFontSize(size)};
    opacity: ${({ contrast }: DimensionProps): number[] =>
        handleContrastLevel(contrast)};
    text-decoration: ${({ underline }) =>
        underline === true ? 'underline' : 'none'};
`;
