import React, { Component } from 'react';
import { LinkType } from '@/types/link';

const Link = ({ url, text }: LinkType) => {
    return <a href={url}>{text}</a>;
};

export default Link;
