import React from 'react';
import Image from 'next/image';
import { ProjectDetails } from '@/types/content';

function ProjectItem({ src, tools, description }: ProjectDetails) {
    // TODO: pass width and height as props
    const width: number = 383;
    const height: number = 300;

    const toolsList = tools.map((tool, i) => {
        return <li key={i}>{tool}</li>;
    });

    return (
        <>
            <div>
                <Image
                    alt="Project image"
                    src={src}
                    width={width}
                    height={height}
                    objectFit="cover"
                />
            </div>
            <ul>{toolsList}</ul>
            <p>{description}</p>
        </>
    );
}

export default ProjectItem;
