import React, { PureComponent } from 'react';
import { Children } from '@/types/content';
import { StyledSection } from 'components/styles/Section.styles';
import { DimensionProps } from '@/types/theme';

interface SectionProps extends Children {
    title: string;
}

type Props = SectionProps & DimensionProps;

const Section = ({ title, size, contrast, children }: Props) => {
    return (
        <StyledSection size={size} contrast={contrast}>
            <h2>{title}</h2>
            {/* Maybe we can add a functionality here, to optionally wrap the content in a container when the feat is eventually needed.  */}
            {children}
        </StyledSection>
    );
};

export default Section;
