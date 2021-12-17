import React from 'react';
import Image from 'next/image';
import styles from './ProjectItem.module.css';
import { ProjectDetails } from '@/types/content';

function ProjectItem({ src, tools, description, repo }: ProjectDetails) {
    // TODO: pass width and height as props
    const width: number = 383;
    const height: number = 300;

    const toolsList = tools.map((tool, i) => {
        return (
            <li className={styles.ToolsList} key={i}>
                {tool}
            </li>
        );
    });

    return (
        <div className={styles.Container}>
            <div className={styles.ImageContainer}>
                <a href={repo} target="_blank" rel="noreferrer">
                    <Image
                        alt="Project image"
                        src={src}
                        width={width}
                        height={height}
                        layout="responsive"
                        objectFit="cover"
                    />
                </a>
            </div>
            <ul className={styles.Flex}>{toolsList}</ul>
            <p className={styles.HighContrast}>{description}</p>
        </div>
    );
}

export default ProjectItem;
