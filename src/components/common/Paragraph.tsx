import React, { Component } from 'react';
import { StyledParagraph } from 'components/styles/Paragraph.styles';
import { DimensionProps } from '@/types/theme';

interface ParagraphProps {
    text: string;
}

type Props = ParagraphProps & DimensionProps;

const Paragraph = ({ text, contrast, size }: Props) => {
    return (
        <StyledParagraph size={size} contrast={contrast}>
            {text}
        </StyledParagraph>
    );
};

export default Paragraph;
