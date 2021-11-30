import styled from 'styled-components';
import { TitleSizeMap, ContrastLevels } from '@/types/StyleMaps';
export interface StyledSectionProps {
    size?: string;
    contrast?: string;
}

export const StyledSection = styled('section')<StyledSectionProps>`
    h2 {
        font-size: ${({ size }) =>
            size === 'title-s' ? TitleSizeMap.s : TitleSizeMap.m};
        color: #ffffff;
        opacity: ${({ contrast }) =>
            contrast === 'high' ? ContrastLevels.high : ContrastLevels.low};
        font-weight: 300;
    }
`;
