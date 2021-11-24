import React, { Component } from 'react';
import { LinkType } from '../../types/navigation';

const NavLink = ({ url, text }: LinkType) => {
    return <a href={url}>{text}</a>;
};

export default NavLink;
