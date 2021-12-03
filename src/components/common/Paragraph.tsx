import React from 'react';
import { StyledParagraph } from 'components/styles/Elements.styles';
import { DimensionProps } from '@/types/theme';

interface ParagraphProps {
    text: string;
}

type Props = ParagraphProps & DimensionProps;

const Paragraph = ({ text, contrast, size, weight }: Props) => {
    return (
        <StyledParagraph size={size} contrast={contrast} weight={weight}>
            {text}
        </StyledParagraph>
    );
};

export default Paragraph;
