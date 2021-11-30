import React, { Component } from 'react';
import { LinkType } from '@/types/content';

const Link = ({ url, text }: LinkType) => {
    return <a href={url}>{text}</a>;
};

export default Link;
