import React, { Component } from 'react';
import NavLink from './NavLink';
import { Navigation } from '../../types/navigation';

const Nav = ({ links }: Navigation) => {
    const navLinks = links.map(({ url, text }) => {
        return (
            <li key={text}>
                <NavLink url={url} text={text} />
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
