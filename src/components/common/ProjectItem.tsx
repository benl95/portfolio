import React from 'react';
import Image from 'next/image';
import Paragraph from '@/components/Paragraph';
import { ProjectDetails } from '@/types/content';
import { StyledToolsList } from 'components/styles/Elements.styles';

function ProjectItem({ src, tools, description }: ProjectDetails) {
    // TODO: pass width and height as props
    const width: number = 383;
    const height: number = 300;

    const toolsList = tools.map((tool, i) => {
        return <li key={i}>{tool}</li>;
    });

    return (
        <li style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
                alt="Project image"
                src={src}
                width={width}
                height={height}
                objectFit="cover"
            />
            <StyledToolsList>{toolsList}</StyledToolsList>
            <Paragraph text={description} contrast="high" weight="regular" />
        </li>
    );
}

export default ProjectItem;
