import React from 'react';

interface Links {
    links: string[];
}

const NavLinks = ({ links }: Links) => {
    function concenateHashSymbol(string: string): string {
        return `#${string}`;
    }

    const linksList = links.map((link, i) => {
        return (
            <li key={i}>
                <a href={concenateHashSymbol(link)}>{link}</a>
            </li>
        );
    });

    return (
        <ul>
            {linksList}
            <a href="https://read.cv/benl95" target="_blank" rel="noreferrer">
                cv
            </a>
        </ul>
    );
};

export default NavLinks;
