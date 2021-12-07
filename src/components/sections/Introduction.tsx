import React from 'react';
import Image from 'next/image';
import styles from './Introduction.module.css';
import { AboutMe } from '@/types/content';

const Introduction = ({ title, name, occupation }: AboutMe) => {
    return (
        <section className={styles.Section}>
            <div className={styles.HeaderContainer}>
                <div className={styles.IntroductionContainer}>
                    <h2 className={`${styles.Title}`} title={title}>
                        {title}
                    </h2>
                    <p className={`${styles.Bold}`}>{name}</p>
                    <p className={`${styles.Bold} ${styles.LowContrast}`}>
                        {occupation}
                    </p>
                </div>
                <div>
                    <ul className={styles.LinksContainer}>
                        <li>
                            <Image
                                src="/github-icon.svg"
                                alt="Github icon"
                                width={30}
                                height={30}
                            />
                        </li>
                        <li className={styles.FlexGrow}>
                            <Image
                                src={'/linkedin-icon.svg'}
                                alt="LinkedIn icon"
                                width={30}
                                height={30}
                            />
                        </li>
                        <li className={`${styles.MarginTop}`}>
                            <a
                                className={`${styles.Link}`}
                                href={'mailto:ben.langenberg987@gmail.com'}
                            >
                                hello@ben.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
