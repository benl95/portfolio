import React, { Component } from 'react';
import { LinkType } from '@/types/content';
import { StyledLink } from '../styles/Link.styles';
import { DimensionProps } from '@/types/theme';

type Props = DimensionProps & LinkType;

const Link = ({ url, text, size, contrast }: Props) => {
    return (
        <StyledLink size={size} contrast={contrast} href={url}>
            {text}
        </StyledLink>
    );
};

export default Link;
