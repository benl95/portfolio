import styled from 'styled-components';
import { DimensionProps } from '@/types/theme';
import {
    handleFontSize,
    handleContrastLevel,
    handleTextDecoration,
    handleFontWeight,
} from '@/utils/attributeHandlers';

export const StyledLink = styled('a')<DimensionProps>`
    font-size: ${({ size }: DimensionProps): string[] => handleFontSize(size)};
    opacity: ${({ contrast }: DimensionProps): number[] =>
        handleContrastLevel(contrast)};
    text-decoration: ${({ underline }) => handleTextDecoration(underline)};
    font-weight: ${({ weight }: DimensionProps): number[] =>
        handleFontWeight(weight)};
`;

export const StyledParagraph = styled('p')<DimensionProps>`
    font-size: ${({ size }: DimensionProps): string[] => handleFontSize(size)};
    opacity: ${({ contrast }: DimensionProps): number[] =>
        handleContrastLevel(contrast)};
    font-weight: ${({ weight }: DimensionProps): number[] =>
        handleFontWeight(weight)};
`;
