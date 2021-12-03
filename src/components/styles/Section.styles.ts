import styled from 'styled-components';
import { DimensionProps } from '@/types/theme';
import {
    handleFontSize,
    handleContrastLevel,
    handleFontWeight,
} from '@/utils/attributeHandlers';

export const StyledSection = styled('section')`
    display: grid;
    grid-template-rows: repeat(auto-fill, 1fr);
    height: 70vh;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    padding: 18px 21px 3px 21px;

    h2 {
        font-weight: ${({ weight }: DimensionProps): number[] =>
            handleFontWeight(weight)};
        font-size: ${({ size }: DimensionProps): string[] =>
            handleFontSize(size)};
        opacity: ${({ contrast }: DimensionProps): number[] =>
            handleContrastLevel(contrast)};
    }

    p {
        line-height: 68.3px;
    }

    h2 {
        grid-row-start: 13;
    }

    p:nth-child(2) {
        grid-row-start: 14;
    }

    p:nth-child(3) {
        grid-row-start: 15;
    }

    ul {
        grid-row-start: 31;
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
