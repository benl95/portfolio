import React, { Component } from 'react';

const Footer = () => {
    // TODO: pass text and url as props
    const text = 'Designed & Built by Ben Langenberg';
    const url = 'https://github.com/benl95/portfolio';
    return (
        <footer>
            <a href={url}>{text}</a>
        </footer>
    );
};

export default Footer;
