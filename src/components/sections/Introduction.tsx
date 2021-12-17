import React from 'react';
import Image from 'next/image';
import styles from './Introduction.module.css';
import SideLink from '@/components/links/SideLink';
import { AboutMe } from '@/types/content';

const Introduction = ({
    title,
    name,
    occupation,
    github,
    linkedIn,
    about,
}: AboutMe) => {
    return (
        <section className={styles.Section} id="introduction">
            <SideLink>
                <ul className={styles.Flex}>
                    <li>
                        <a
                            href={linkedIn}
                            className={styles.HighContrast}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                src={'/linkedin-icon.svg'}
                                alt="LinkedIn icon"
                                width={30}
                                height={30}
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href={github}
                            className={styles.HighContrast}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                src="/github-icon.svg"
                                alt="Github icon"
                                width={30}
                                height={30}
                            />
                        </a>
                    </li>
                </ul>
            </SideLink>
            <div className={styles.HeaderContainer}>
                <div className={styles.IntroductionContainer}>
                    <h2 className={`${styles.Title}`} title={title}>
                        {title}
                    </h2>
                    <p className={`${styles.Bold}`}>{name}</p>
                    <p className={`${styles.Bold} ${styles.LowContrast}`}>
                        {occupation}
                    </p>
                    <p className={`${styles.MaxWidthChar} ${styles.MarginTop}`}>
                        {about}
                    </p>
                </div>
                <div className={styles.Breakpoint}>
                    <ul className={styles.LinksContainer}>
                        <li>
                            <a
                                href={github}
                                className={styles.HighContrast}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    src="/github-icon.svg"
                                    alt="Github icon"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </li>
                        <li className={styles.FlexGrow}>
                            <a
                                href={linkedIn}
                                className={styles.HighContrast}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    src={'/linkedin-icon.svg'}
                                    alt="LinkedIn icon"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </li>
                        <li className={`${styles.MarginTop}`}>
                            <a
                                className={`${styles.Link}`}
                                href={'mailto:ben.langenberg987@gmail.com'}
                                target="_blank"
                                rel="noreferrer"
                            >
                                hello@ben.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <SideLink>
                <div>
                    <a
                        className={`${styles.Vertical} ${styles.HighContrast}`}
                        href={'mailto:ben.langenberg987@gmail.com'}
                        target="_blank"
                        rel="noreferrer"
                    >
                        hello@ben.com
                    </a>
                </div>
            </SideLink>
        </section>
    );
};

export default Introduction;
