import React, { Component } from 'react';
import { Project, ProjectDetails } from '@/types/content';
import Image from 'next/image';

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
            <p>{description}</p>
        </li>
    );
}

export default ProjectItem;
