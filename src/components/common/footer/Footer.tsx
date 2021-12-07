import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    // TODO: pass text and url as props
    const text = 'Designed & Built by Ben Langenberg';
    const url = 'https://github.com/benl95/portfolio';
    return (
        <footer className={styles.Footer}>
            <div className={styles.Container}>
                <a className={`${styles.Link}`} href={url}>
                    {text}
                </a>
            </div>
        </footer>
    );
};

export default Footer;
