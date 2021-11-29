import React, { Component } from 'react';
import { ProjectDetails } from '@/types/content';
import Image from 'next/image';
import styles from '../../../styles/ProjectItem.module.scss';

function ProjectItem({ src, tools, description }: ProjectDetails) {
    const width: number = 300;
    const height: number = 300;

    const toolsList = tools.map((tool, i) => {
        return <li key={i}>{tool}</li>;
    });

    return (
        <li>
            <Image
                alt="Project image"
                src={src}
                width={width}
                height={height}
            />
            <ul>{toolsList}</ul>
            <p className={styles['high-contrast']}>{description}</p>
        </li>
    );
}

export default ProjectItem;
