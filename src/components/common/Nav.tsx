import React, { Component } from 'react';
import Link from '@/components/Link';
import { Navigation } from '@/types/navigation';

const Nav = ({ links }: Navigation) => {
    const navLinks = links.map(({ url, text }) => {
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
