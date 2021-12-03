import React from 'react';
import ProjectItem from '@/components/ProjectItem';
import Title from '@/components/Title';
import { Project, ProjectDetails } from '@/types/content';
import {
    ProjectSection,
    StyledProjectsList,
} from 'components/styles/Section.styles';

const Projects = ({ title, list }: Project) => {
    const projectsList = list.map(
        ({ src, tools, description }: ProjectDetails, i: number | string) => {
            return (
                <ProjectItem
                    key={i}
                    src={src}
                    tools={tools}
                    description={description}
                />
            );
        }
    );

    return (
        <ProjectSection>
            <Title title={title} size="xl" weight="bold" contrast="high" />
            <StyledProjectsList>{projectsList}</StyledProjectsList>
        </ProjectSection>
    );
};

export default Projects;
