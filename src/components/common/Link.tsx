import React, { Component } from 'react';
import { LinkType } from '@/types/content';
import { StyledLink } from 'components/styles/Link.styles';
import { DimensionProps } from '@/types/theme';

type Props = DimensionProps & LinkType;

const Link = ({ url, text, size, contrast, underline }: Props) => {
    return (
        <StyledLink
            size={size}
            contrast={contrast}
            underline={underline}
            href={url}
        >
            {text}
        </StyledLink>
    );
};

export default Link;
