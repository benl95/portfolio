import React from 'react';
import Image from 'next/image';
import styles from './MobileNav.module.css';
import NavLinks from './NavLinks';
import ImageButton from './ImageButton';
import { useState, useEffect } from 'react';
interface Props {
    text: string;
}

const MobileNav = ({ text }: Props) => {
    const width: number = 37;
    const height: number = 25;

    const [click, setClick] = useState(false);

    useEffect(() => {
        if (!click) {
        }
    });

    return (
        <nav>
            <aside className={`${styles.Hamburger}`}>
                {click && (
                    <div className={`${styles.SlideInRight}`}>
                        <NavLinks
                            links={['introduction', 'projects', 'contact']}
                        />
                    </div>
                )}
            </aside>
            <div className={styles.NavContainer}>
                <a href={'http://localhost:3000'}>{text}</a>
                <div>
                    <ImageButton
                        src="/hamburger.svg"
                        alt="Hamburger menu icon"
                        width={width}
                        height={height}
                        callback={() => setClick(!click)}
                    />
                </div>
            </div>
        </nav>
    );
};

export default MobileNav;
