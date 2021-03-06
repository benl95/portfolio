import React from 'react';
import styles from './MobileNav.module.css';
import NavLinks from './NavLinks';
import ImageButton from './ImageButton';
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
interface Props {
    text: string;
}

const MobileNav = ({ text }: Props) => {
    const width: number = 37;
    const height: number = 25;

    const [click, setClick] = useState(false);
    const [icon, setIcon] = useState();

    const animation = useSpring({
        config: {
            duration: 300,
        },
        right: click ? '0%' : '-100%',
    });

    return (
        <nav>
            <aside className={`${styles.Hamburger}`}>
                <animated.div
                    style={animation}
                    onClick={() => setClick(!click)}
                >
                    <NavLinks links={['introduction', 'projects', 'contact']} />
                </animated.div>
            </aside>
            <div className={styles.NavContainer}>
                <a href={'/'}>{text}</a>
                <div className={styles.HighContrast}>
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
