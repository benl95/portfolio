import React, { PureComponent } from 'react';
import { Children } from '@/types/content';
import Container from '@/components/Container';
import { StyledSectionProps, StyledSection } from '../styles/Section.styles';

interface SectionProps extends Children {
    title: string;
}

type Props = SectionProps & StyledSectionProps;

const Section = ({ title, size, contrast, children }: Props) => {
    return (
        <StyledSection size={size} contrast={contrast}>
            <h2>{title}</h2>
            <Container>{children}</Container>
        </StyledSection>
    );
};

export default Section;
