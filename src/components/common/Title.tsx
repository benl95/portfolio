import React from 'react';
import { DimensionProps } from '@/types/theme';
import { StyledTitle } from 'components/styles/Elements.styles';

interface TitleProps {
    title: string;
}

type Props = TitleProps & DimensionProps;

const Title = ({ title, size, contrast, weight }: Props) => {
    return (
        <StyledTitle size={size} contrast={contrast} weight={weight}>
            {title}
        </StyledTitle>
    );
};

export default Title;
