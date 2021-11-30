import styled from 'styled-components';
import { TitleSizeMap, ContrastLevels } from '@/types/StyleMaps';
export interface StyledSectionProps {
    size?: TitleSizeMap;
    contrast?: ContrastLevels;
}

export const StyledSection = styled('section')<StyledSectionProps>`
    h2 {
        font-size: ${({ size }) =>
            size === TitleSizeMap.s ? TitleSizeMap.s : TitleSizeMap.m};
        color: #ffffff;
        opacity: ${({ contrast }) =>
            contrast === ContrastLevels.high
                ? ContrastLevels.high
                : ContrastLevels.low};
        font-weight: 300;
    }
`;
