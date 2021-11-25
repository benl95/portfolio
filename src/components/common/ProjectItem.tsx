import React, { Component } from 'react';
import { Project } from '../../types/content';
import Image from 'next/image';

function ProjectItem({ image, tools, description }: Project) {
    const width: number = 300;
    const height: number = 300;

    return (
        <li>
            <Image
                alt="Project image"
                src={image}
                width={width}
                height={height}
            />
            <ul>
                <li>{tools}</li>
            </ul>
            <p>{description}</p>
        </li>
    );
}

export default ProjectItem;
