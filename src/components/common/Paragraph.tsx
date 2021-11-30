import React, { Component } from 'react';
import {
    StyledParagraph,
    StyledParagraphProps,
} from '../styles/Paragraph.styles';

interface ParagraphProps {
    text: string;
}

type Props = ParagraphProps & StyledParagraphProps;

const Paragraph = ({ text, contrast, size }: Props) => {
    return (
        <StyledParagraph size={size} contrast={contrast}>
            {text}
        </StyledParagraph>
    );
};

export default Paragraph;
