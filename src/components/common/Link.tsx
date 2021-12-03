import React from 'react';
import { LinkType } from '@/types/elements';
import { StyledLink } from 'components/styles/Elements.styles';
import { DimensionProps } from '@/types/theme';

type Props = DimensionProps & LinkType;

const Link = ({ url, text, size, contrast, underline, weight }: Props) => {
    return (
        <StyledLink
            size={size}
            contrast={contrast}
            underline={underline}
            href={url}
            weight={weight}
        >
            {text}
        </StyledLink>
    );
};

export default Link;
