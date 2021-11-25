import React, { Component } from 'react';
import { Project } from '../../types/content';
import Image from 'next/image';

function ProjectItem({ image, tools, description }: Project) {
    const width: number = 300;
    const height: number = 300;

    const toolsList = tools.map((tool, i) => {
        return <li key={i}>{tool}</li>;
    });

    return (
        <li>
            <Image
                alt="Project image"
                src={image}
                width={width}
                height={height}
            />
            <ul>{toolsList}</ul>
            <p>{description}</p>
        </li>
    );
}

export default ProjectItem;
