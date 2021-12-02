import React, { Component } from 'react';
import Link from '@/components/Link';

const Footer = () => {
    const text = 'Designed & Built by Ben Langenberg';
    const url = 'https://github.com/benl95/portfolio';
    return (
        <footer>
            <Link url={url} text={text} contrast="high" />
        </footer>
    );
};

export default Footer;
