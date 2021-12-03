import styled from 'styled-components';
import { DimensionProps } from '@/types/theme';
import {
    handleFontSize,
    handleContrastLevel,
    handleTextDecoration,
} from '@/utils/attributeHandlers';

export const StyledLink = styled('a')<DimensionProps>`
    font-size: ${({ size }: DimensionProps): string[] => handleFontSize(size)};
    opacity: ${({ contrast }: DimensionProps): number[] =>
        handleContrastLevel(contrast)};
    text-decoration: ${({ underline }) => handleTextDecoration(underline)};
`;

export const StyledParagraph = styled('p')<DimensionProps>`
    font-size: ${({ size }: DimensionProps): string[] => handleFontSize(size)};
    opacity: ${({ contrast }: DimensionProps): number[] =>
        handleContrastLevel(contrast)};
`;
