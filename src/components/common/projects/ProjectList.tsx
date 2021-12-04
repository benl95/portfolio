import React from 'react';
import ProjectItem from './ProjectItem';
import { Project, ProjectDetails } from '@/types/content';

const ProjectList = ({ list }: Project) => {
    const projectsList = list.map(
        ({ src, tools, description }: ProjectDetails, i: number | string) => {
            return (
                <li key={i}>
                    <ProjectItem
                        src={src}
                        tools={tools}
                        description={description}
                    />
                </li>
            );
        }
    );

    return <ul>{projectsList}</ul>;
};

export default ProjectList;
