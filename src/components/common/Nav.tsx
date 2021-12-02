import React, { Component } from 'react';
import Link from '@/components/Link';
import { LinkType } from '@/types/content';

const Nav = () => {
    // TODO: load link props from json file
    const links = [
        {
            url: '/home/#about-me',
            text: 'About me',
        },
        {
            url: '/home/#projects',
            text: 'Projects',
        },
        {
            url: '/home/#contact',
            text: 'Contact',
        },
        {
            url: '/api/resume',
            text: 'Resume',
        },
    ];
    // TODO: create seperate variable for resume button, as it is a StyledLinkButton.
    // Filter and concat array to navLinks
    const navLinks = links.map(({ url, text }: LinkType) => {
        return (
            <li key={text}>
                <Link url={url} text={text} />
            </li>
        );
    });
    return (
        <nav>
            <ul>{navLinks}</ul>
        </nav>
    );
};

export default Nav;
